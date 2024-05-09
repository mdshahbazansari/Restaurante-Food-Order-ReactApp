import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setmenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.zaikalogo} alt='logo' className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("about")} className={menu==="about"?"active":""}>about</a>
        <a href='#appDownload' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
      <i class="fa-solid fa-magnifying-glass"></i>
        <div className="navbar-search-icon">
            <Link to='/cart'><i class="fa-solid fa-cart-arrow-down"></i></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
