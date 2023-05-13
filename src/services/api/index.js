import axios from "axios";
export const baseApi = "http://back.sportedu.uz/api"
export const baseApiImg = "http://back.sportedu.uz/storage"


// export const getCountries = async() => {
//     try {
//         const {data} = await axios.get(baseApi + 'allData');
//         return data.countries;
//         console.log('Data', data)
//     } catch (error) {
//         throw error;
//     }
// }