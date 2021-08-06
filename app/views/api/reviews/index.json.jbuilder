@reviews.includes(:author).each do |review|
        json.set! review.id do
            json.partial! 'review', review: review
            json.photoUrls review.photos.map { |file| url_for(file) }
            json.author do
                json.extract! review.author, :id, :firstname
            end
        end
      
end