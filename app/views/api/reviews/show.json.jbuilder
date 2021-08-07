
json.partial! '/api/reviews/review', review: @review
json.photoUrls @review.photos.map { |file| url_for(file) }
json.author do
    json.extract! @review.author, :id, :firstname, :lastname
end
