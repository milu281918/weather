import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
const Home=()=>{
const [allData, setData]= useState([])
    useEffect(()=>{fetch('https://freetestapi.com/api/v1/weathers').then(res=>res.json()).then(data=>setData(data))},[])
    console.log(allData)
    return(
        <div>
            <div className="border-2 py-2 bg-red-50">
                {
                    allData.map((data,idx)=><p key={idx}>{data?.country}:{data?.temperature}</p>)
                }
            </div>
        </div>
    );
};
export default Home;