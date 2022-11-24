import React from 'react';

const GetSingleData = ({service}) => {
    return (
        <div className='mt-2'>
       <div className="card  p-4">  
       <p>User Id: {service.userId}</p> 
       <p>Id: {service.id}</p> 
       <p>Name: {service.title}</p>
       <p> {service.body}</p>
     
       
       </div>
        </div>
    );
};

export default GetSingleData;