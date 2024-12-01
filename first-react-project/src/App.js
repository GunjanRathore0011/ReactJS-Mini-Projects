import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards'
import { apiUrl,filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
import Notfound from './components/Notfound'; 
const App=()=>{
  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);
  // console.log(category);
  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output= await response.json();
      setCourses(output.data) ;
      // console.log(output);
    }
    catch(error){
      toast.error("Network Error");
    }
    setLoading(false); 
    // setCourses(null)
  }

  useEffect(()=>{
    fetchData();
  },[])
   
  return (
    <div className='min-h-screen bg-slate-500'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h[50vh]">
        {
          loading  ? (<Spinner/>) : ( courses ? (<Cards courses={courses} category={category} />):(<Notfound></Notfound>)
        )} 
        
      </div>
      </div>
      
    </div>
  );
};

export default App;
