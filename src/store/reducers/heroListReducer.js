import GET_HERO_LIST from '../constants';
const initialState = {
    heroList: []
};
const heroListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HERO_LIST:
            return {
                ...state,
                heroList: action.payload
            };
        default:
            return state;
    }
}
export default heroListReducer;