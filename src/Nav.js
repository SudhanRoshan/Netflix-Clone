import React,{useState,useEffect} from 'react'
import "./styles/Nav.css"
import {useHistory} from "react-router-dom"

function Nav() {
    const [show,handleShow]=useState(false);
    const history=useHistory()
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }

    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
             <img 
             onClick={()=>history.push("/")}
             className="nav_logo" 
             src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
             alt="">
             </img>
             <img 
             onClick={()=>history.push("/profile")}
             className="nav_avatar" 
             src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" 
             alt="">
             </img>
            </div>
            
            
        </div>
    )
}

export default Nav
