import './Spinner.css';
const Spinner=()=>{
    return (<div flex flex-col items-center space-y-2>
        {/* <div className='spinner'></div> */}
        <div class="custom-loader"></div>
        <p className='text-slate-800'>Loading....</p>
    </div>);
}
export default Spinner;