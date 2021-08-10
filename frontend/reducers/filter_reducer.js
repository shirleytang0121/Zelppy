import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    value: '',
    position: ''
  });

const FilterReducer=(oldState=defaultFilters, action)=>{
    Object.freeze(oldState);
    let nextState=Object.assign({},oldState)
    switch(action.type){
        case UPDATE_FILTER:
            nextState[action.filter]=action.value
            return nextState;
        default:
            return oldState
    }

}

export default FilterReducer