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

export const updateBusiness = (businessForm) => (
    $.ajax({
        method: 'PATCH',
        url: `api/businesses/${businessForm.id}`,
        data: businessForm,
        contentType: false,
        processData: false
    })
)