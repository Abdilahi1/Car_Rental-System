<<<<<<< HEAD
"use client";
//This is structure of my hero section and display the first page of my project 
import Image from 'next/image';
=======
/* This is structure of my hero section and display the first page of my project */
import Image from 'next/image';
/
>>>>>>> 1f726fc3e0fac3daaf2fe9c09913a36e70d6e1cb
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    
  }
  /* displying some overview of my project */
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title ' >
        Find exactly what you are looking for!!
        </h1>

     <p className='hero__subtitle'>
    Streamline your car rental experience
     with our effortless booking process
     </p>

     <CustomButton
     title = "Explore Cars"
     containerStyles = "bg-amber-900 text-white rounded-full mt-10"
     handleClick={ handleScroll }    
     
     />
        
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero"
            fill className="object-contain" />
            </div>
            
            <div className="hero__image-overlay">
            </div>
        </div>
    </div>
  )
}

export default Hero
