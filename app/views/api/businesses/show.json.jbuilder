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
    json.review do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.author do
        json.set! review.author.id do
            json.extract! review.author, :id, :firstname
        end
    end
end