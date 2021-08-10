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