import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import businessesReducer from "./businesses_reducer";
import reviewsReducr from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    reviews: reviewsReducr
  });
  
  export default entitiesReducer;