import logo from '../assets/logo-bid512.png'
import faceico from '../assets/FacebookIconv2.png'
import linkinico from '../assets/LinkedInv2.png'
import twitterx from '../assets/Twitterv2.png' 

const Footer = () => {
    return (
        <div className="w-full bg-[#FFDF80] flex py-10 px-10 justify-between">
        <div className="flex items-center">
        <img src={logo} alt="logo" className='w-40 h-auto object-contain' />
        </div>
        <div>
        <h3 className='text-2xl mb-5'>Available online services</h3>
        <ul className='links' >
            <li className="hover:text-blue-500">example.com/help</li>
            <li className="hover:text-blue-500">example.com/contact</li>
            <li className="hover:text-blue-500">example.com/service</li>
            <li>+0123456789</li>
        </ul>
        </div>
        <div>
        <h3 className='text-2xl mb-5'>Contact Us</h3>
        <ul className='links' >
            <li className="hover:text-blue-500">bidsupport@example.com</li>
            <li className="hover:text-blue-500">bid@example.com</li>
            <li>+0123456789</li>
        </ul>
        </div>
         <div>
        <h3 className='text-2xl text-center mb-5'>Socials</h3>
        <div className="flex gap-5 items-center">
        <img src={faceico} alt="Facebook icon" className="w-10 h-10 object-contain hover:cursor-pointer" />
        <img src={linkinico} alt="LinkedIn icon" className="w-10 h-10 object-contain hover:cursor-pointer" />
        <img src={twitterx} alt="Twitter X icon" className="w-10 h-10 object-contain hover:cursor-pointer" />
        </div>
        </div>
        </div>
    )
}

export default Footer;