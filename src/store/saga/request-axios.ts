import axios, {AxiosResponse} from "axios";
import {IPizzaListType} from "../../types/reducers-type";

const getRequest = (
    http : string,
    sort :  string = 'rating',
    category : number  = -1,
    order : string = 'asc',
   ) : Promise<AxiosResponse<IPizzaListType[]>> => {
    return  axios.get(
        `${http}?${category >=0 ? `category=${category}` : ''}&_sort=${sort}&_order=${order}`
    ).then(
        value => value.data
    )
}

export default getRequest