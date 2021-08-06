export const fetchAllReviews = (businessId)=>(
    $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}/reviews`
    })
)

export const createReview = (businessId, review) =>(
    $.ajax({
        method: 'POST',
        url:`api/businesses/${businessId}/reviews`,
        date: {review: review}
    })
)

export const updateReview = (review) =>(
    $.ajax({
        method: 'PATCH',
        url:`api/reviews.${review.id}`,
        data:{review: review}
    })
)

export const destroyReview = (reviewId) =>(
    $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
)