json.business do
    json.partial! '/api/businesses/business', business: @business
    json.photoUrls @business.photos.map { |file| url_for(file) }
    json.hours do
        json.array! @business.hours do |hour|
            json.extract! hour, :date, :open, :close
        end
    end
end