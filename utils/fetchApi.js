import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4844e827bbmshb9b6f82534db67fp10aac7jsnb4dbf81ae51e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
}