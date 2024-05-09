import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.zaikalogo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit dolorum quos nulla adipisci hic ipsum, enim culpa sit, nobis distinctio consequuntur nihil in quam accusamus, dolore sint officia ut!</p>
            <div className="footer-social-icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get-in-touch</h2>
            <ul>
              <li><i class="fa-regular fa-address-card"></i>
                470, GBM Apartment, Chandigarh(Kharar), Punjab, PIN:80000.
              </li>
                <li><i class="fa-solid fa-phone"></i>8298891032</li>
                <li><i class="fa-solid fa-envelope"></i>zaikafood@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-text-copyright">
        @copyright - 2024 zaikaFood All right Reserved.
      </p>
    </div>
  )
}

export default Footer
