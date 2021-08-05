json.review do
    json.partial! '/api/reviews/review' reivew:@reivew
    json.photoUrls @review.photos.map { |file| url_for(file) }
end