import React,{useState,useEffect} from 'react'
import { github} from "../assets";
import { facebook} from "../assets";
import { twitter} from "../assets";

const Footer = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <div className='bg-[#0e0729]  h-[130px] w-full bottom-0 mb-0 flex flex-col justify-center items-center'>
      <div className=' w-full h-[60%] flex justify-center items-center'>
      <ul className='w-full h-full  flex justify-center items-center flex-row '>
      <li className='w-[100px] h-[80%]  flex justify-center items-center'><a  onClick={() => window.open('https://github.com/Aladinta68', "_blank")}  className=' cursor-pointer h-10   rounded-full '><img className={isMobile ?' w-10 h-10 ' : '  w-full h-full'} src={github}/></a></li>
      <li className='w-[100px] h-[80%] flex justify-center items-center '><a  onClick={() => window.open('https://web.facebook.com/profile.php?id=100011177342895', "_blank")}  className='cursor-pointer h-8   rounded-full '><img className={isMobile ?' w-8 h-8 ' : '  w-full h-full'}src={facebook}/></a></li>
      <li className='w-[100px] h-[80%] flex justify-center items-center '><a  onClick={() => window.open('https://twitter.com/TAalae2000', "_blank")}  className='cursor-pointer h-8   rounded-full '><img className={isMobile ?' w-8 h-8 ' : '  w-full h-full'} src={twitter}/></a></li>
      </ul>
      </div>
      <div className='w-full h-[40%] flex justify-center items-center bottom-0'>
      <p className='text-center'>Copyright ©2023 Ala eddine | Portfolio created by TAHAR ABBES ALA EDDINE</p>
      </div>
    </div>
  )
}

export default Footer
