export const fetchAllBusinesses = (search) =>(
    $.ajax({
        method: 'GET',
        url: 'api/businesses',
        date:{search: search}
    })
);

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}`
    })
)