import * as BusinessAPIUtil from '../util/business_api_util'

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveAllBusinesses = (businesses) =>({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

const receiveBusiness = (payload) =>({
    type: RECEIVE_BUSINESS,
    payload
})

export const fetchAllBusinesses = (search) =>(dispatch) =>(
    BusinessAPIUtil.fetchAllBusinesses(search)
        .then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

export const fetchBusiness = (businessId) =>(dispatch) =>(
    BusinessAPIUtil.fetchBusiness(businessId)
        .then(payload => dispatch(receiveBusiness(payload)))
)

export const updateBusiness = (business) => (dispatch) =>(
    BusinessAPIUtil.updateBusiness(business)
      .then(payload => dispatch(receiveBusiness(payload)))
)


