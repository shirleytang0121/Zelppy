json.business do
    json.partial! '/api/businesses/business', business: @business
    json.photoUrls @business.photos.map { |file| url_for(file) }
    json.hours do
        json.array! @business.hours do |hour|
            json.extract! hour, :date, :open, :close
        end
    end
end

@business.reviews.includes(:author).each do |review|
    json.reivew do
        json.set! reivew.id do
            json.partial! 'api/reviews/review', reivew: reivew
        end
    end

    json.author do
        json.set! reivew.author.id do
            json.extract! reivew.author, :id, :firstname
        end
    end
end