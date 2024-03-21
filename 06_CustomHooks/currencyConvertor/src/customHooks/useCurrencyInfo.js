import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(() => {
         fetch(`https://api.exchangerate-api.com/v4/latest/${currency}.json`)
         .then((res)=>res.json())
         .then((res)=>setData(res[4]))
     },[currency]);

     console.log(data);
     return data;
}

export default useCurrencyInfo;
