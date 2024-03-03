import React,{useState} from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import Toaster from "../toaster/Toaster";
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
  const dispatch = useDispatch();
  const nav=useNavigate()
  const [showToast, setShowToast] = useState(false); // State to control toaster visibility
  const handleClose=()=>{
    setShowToast(false)
  }
  const logoutHandler = () => {
    //dispatch(logout());
  console.log("inside logout");
  setShowToast(true); 
  setTimeout(()=>{
    nav("/")
    dispatch(logout());
  },1000)


    setTimeout(()=>{
      setShowToast(false); 
    


 },5000)
  











  };
  return (<>
  

    <button
      className="inline-bock px-6 py-2  text-white  font-bold duration-200 hover:bg-blue-600 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button> 
    {showToast && <Toaster text="Logout Successfully" 
className='bg-red-500 text-white' 
onClick={handleClose}/>}  
    
     </>
  );
}

export default LogoutBtn;
