import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api"
export async function getImagesByQuery(query, page=1) {
const {data} = await axios.get ("/", {params:{
    key: "57438008-644d4578100eb60c8f5ec14ee",
    q: query,
    image_type: "photo",
orientation: "horizontal",
safesearch: "true",
page,
per_page: 15
}}) 
return data
}

