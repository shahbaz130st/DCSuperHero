import { createStore, combineReducers } from 'redux';
import heroListReducer from './reducers/heroListReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { HeroList: heroListReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;