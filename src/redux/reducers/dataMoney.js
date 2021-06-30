import { GET_DATAMONEY, SEARCH_DATAMONEY } from "../types/dataMoney";

const dataMoney = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATAMONEY':
            return action.payload;
        case 'SEARCH_DATAMONEY':
            return [...state.filter(el=> el.Name.toLowerCase().includes(action.payload))];
        default:
            return state;
    }
}
export default dataMoney;