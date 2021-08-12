import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./error_reducer";
import FilterReducer from "./filter_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    filters: FilterReducer,
    errors: errorsReducer
});

export default rootReducer;