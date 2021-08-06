json.review do
    json.partial! '/api/reviews/review', review: @review
    json.photoUrls @review.photos.map { |file| url_for(file) }
end