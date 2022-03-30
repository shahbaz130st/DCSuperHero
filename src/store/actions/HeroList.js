import GET_HERO_LIST from '../constants';
import axios from "axios";
export function setHeroList(heroList) {
    // console.log("heroList",heroList)
    return {
        type: GET_HERO_LIST,
        payload: heroList,
    };
}
export function getHeroList() {
    return async (dispatch) => {
        try {
            const apiReq = await axios.get('https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes');
            const { data } = apiReq;
            await dispatch(setHeroList(data));
            return data || [];
        } catch (error) {
            console.error(error);
        }
    };
}