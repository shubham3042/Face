import React from 'react';
const Nav= ({onRoute,isSignin})=>{
    console.log(isSignin);
    if(isSignin)
    {
    return(
        <nav className="nav" style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRoute('signin')} className="dim black">Sign Out</p>
        </nav>
    );
    }
    else{
        return(
            <nav className="nav" style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRoute('signin')} className="dim black">Sign in</p>
            <p onClick={()=>onRoute('Register')} className="dim black">Register</p>
             </nav>
        )
    }
}
export default Nav;