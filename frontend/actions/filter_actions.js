import { fetchAllBusinesses } from "./business_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter,value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter) => (dispatch, getState) => {
  dispatch(changeFilter(filter));
  return fetchAllBusinesses(getState().ui.filters)(dispatch);
};