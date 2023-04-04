import axios from 'axios';
const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi=async(url)=>{
    const response =await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '3cd1a89026msh84fa73075964a80p184afdjsnc5733c9c64f0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
}