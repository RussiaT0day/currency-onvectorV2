import { GET_DATAMONEY,SEARCH_DATAMONEY } from "../types/dataMoney";
import axios from 'axios';

const getDataMoney = (data) => {
    return {
        type: 'GET_DATAMONEY',
        payload: data,
    }
};

const searchDataMoney = (word) => {
    return {
        type: 'SEARCH_DATAMONEY',
        payload: word,
    }
};

const getDataMoneyThunk = () => async (dispatch) => {
    const money = await axios("https://www.cbr-xml-daily.ru/daily_json.js");
    let data = money.data.Valute
    dispatch(getDataMoney(data))
}


export { getDataMoneyThunk,searchDataMoney }