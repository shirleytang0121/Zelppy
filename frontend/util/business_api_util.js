export const fetchAllBusinesses = (search) =>(
    $.ajax({
        method: 'GET',
        url: 'api/businesses',
        data:{search: search}
    })
);

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}`
    })
)

export const updateBusiness = (businessForm,businessId) => (
    $.ajax({
        method: 'PATCH',
        url: `api/businesses/${businessId}`,
        data: businessForm,
        contentType: false,
        processData: false
    })
)