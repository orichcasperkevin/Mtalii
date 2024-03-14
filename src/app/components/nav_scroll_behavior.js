import React, { useState,useEffect } from 'react';

const NavScrollBehavior = ({ children,onShowNav }) => {
    
    let previousPosition = 0
    const [showNav,setShowNav] = useState(true)
    const handleScroll = () => {
        const currentPosition = window.scrollY         
        if (currentPosition > previousPosition){
            if ((currentPosition - previousPosition) > 20){
                setShowNav(false)
            }            
        }else{
            if ((previousPosition-currentPosition) > 20){
                setShowNav(true)
            }           
        }
        previousPosition = currentPosition;              
    };
    
    useEffect(()=>{
        onShowNav(showNav)
    },[showNav])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    


  return (
    <nav className={`transition-all ease-in-out ${showNav ? 'fixed z-50 top-0 left-0 right-0' : 'fixed z-50 -top-20 left-0 right-0'}`}>        
      {children}
    </nav>
  );
};

export default NavScrollBehavior;
