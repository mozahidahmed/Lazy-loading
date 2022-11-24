import React ,{Suspense,lazy} from 'react';
import './App.css';
const GetData = lazy(()=>import('./component/GetData/GetData')) ;



function App() {

  return (
    <div className="container mt-2">
      <h1 className='text-center'>Lazy Loading</h1>
      <Suspense fallback={<div>please wait....................</div>}>
      <GetData></GetData>
      </Suspense>  
    </div>
  );
}

export default App;
