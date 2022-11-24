import React,{useEffect, useState} from 'react';
import GetSingleData from './GetSingleData';

const GetData = () => {
 const [data,setData]=useState([])

 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json));

 },[])





    return (
        <div>
          
<div className="">
{data.map(service=>
                       
 <GetSingleData  key={service._id} service={service}></GetSingleData>
)}
                           
</div>


    </div>
    );
};

export default GetData;