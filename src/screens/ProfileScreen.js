import React from 'react'
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice"
import "../styles/ProfileScreen.css"
import Nav from "../Nav"
import {auth} from "../firebase"

function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav></Nav>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" alt=""></img>
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <pre className="profileScreen_tab">Basic  720p  $3/month</pre>
                            <pre className="profileScreen_tab">Standard  1080p  $7/month</pre>
                           <pre className="profileScreen_tab">Premium  4k+HDR  $10/month</pre>
                            
                            
                            
                        </div>
                        <div className="profileScreen_plans">
                            <button onClick={()=>auth.signOut()} className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProfileScreen
