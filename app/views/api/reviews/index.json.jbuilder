@reviews.each do |review|
    json.set! review.id do
        json.partial! 'review', review: review
        json.photoUrls review.photos.map { |file| url_for(file) }
    end
end