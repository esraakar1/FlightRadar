import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {
    // parametrelri belirle
    const params = {
        bl_lat: '34.488131',
        bl_lng: '25.479116',
        tr_lat: '42.9458',
        tr_lng: '44.7938',
        speed: '2,9999',
    };

    // api isteği at 
   const res = await api.get("/flights/list-in-boundary", {params});

//    api dan gelen veride dizi içerisinde dizi oldugundan projede kullanımı daha kolay olsun diye dizinin içerisindeki dizileri nesnelere cevir

const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
}));

//    slice a aktarılacak payloadı belirle
return(formatted);
     
});


export const getDetails = createAsyncThunk("detail/getDetails", async(id) => {
    
    // parametreleri belirle
    const params = {
        flight: id
    }
    //  api dan dataları al
    const res = await api.get("/flights/detail", {params});
   
    // aksiyonun payloadını belirle
    return res.data;
});