import axios from "axios";
export const baseApi = "https://sport.napaautomotive.uz/api"
export const baseApiImg = "https://sport.napaautomotive.uz/storage"


// export const getCountries = async() => {
//     try {
//         const {data} = await axios.get(baseApi + 'allData');
//         return data.countries;
//         console.log('Data', data)
//     } catch (error) {
//         throw error;
//     }
// }