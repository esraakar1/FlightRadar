import axios from "axios";


const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
     headers: {
    'x-rapidapi-key': 'ada0d5cda6mshad5f6f27487f5ecp12e687jsn65c10005d127',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  }
});

export default api;