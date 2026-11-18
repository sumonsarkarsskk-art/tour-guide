require 'sinatra/base'
require 'json'
require 'fileutils'
require 'time'

class TourGuideApp < Sinatra::Base
  set :public_folder, __dir__
  set :static, true
  set :protection, except: [:json_csrf]

  before do
    headers 'X-Content-Type-Options' => 'nosniff',
            'X-Frame-Options' => 'DENY',
            'Referrer-Policy' => 'strict-origin-when-cross-origin',
            'Content-Security-Policy' => "default-src 'self'; img-src 'self' https://images.unsplash.com data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'"
  end

  get '/' do
    send_file File.join(__dir__, 'index.html')
  end

  get '/api/bookings' do
    content_type :json
    JSON.pretty_generate(read_bookings)
  end

  post '/api/bookings' do
    content_type :json
    booking = JSON.parse(request.body.read)
    required = %w[tourId date guests name email lang]
    halt 422, JSON.generate(error: 'Missing required booking fields') unless required.all? { |key| booking.key?(key) }
    halt 422, JSON.generate(error: 'Invalid email address') unless booking['email'].match?(/\A[^@\s]+@[^@\s]+\.[^@\s]+\z/)

    booking['id'] = (Time.now.to_f * 1000).to_i
    booking['createdAt'] = Time.now.utc.iso8601
    write_booking(booking)
    status 201
    JSON.generate(booking)
  rescue JSON::ParserError
    status 400
    JSON.generate(error: 'Invalid JSON')
  end

  delete '/api/bookings/:id' do
    content_type :json
    id = params['id'].to_i
    bookings = read_bookings.reject { |booking| booking['id'].to_i == id }
    write_bookings(bookings)
    JSON.generate(ok: true)
  end

  not_found do
    content_type :json
    JSON.generate(error: 'Not found')
  end

  private

  def storage_file
    File.join(__dir__, 'data', 'bookings.json')
  end

  def read_bookings
    return [] unless File.exist?(storage_file)
    JSON.parse(File.read(storage_file))
  rescue JSON::ParserError
    []
  end

  def write_booking(booking)
    write_bookings(read_bookings << booking)
  end

  def write_bookings(bookings)
    FileUtils.mkdir_p(File.dirname(storage_file))
    temp_file = "#{storage_file}.tmp"
    File.write(temp_file, JSON.pretty_generate(bookings))
    File.rename(temp_file, storage_file)
  end
end
