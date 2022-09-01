import React from 'react';


const curYear = (function(){new Date().getFullYear()})();


function Footer(){
    
    const curYear = new Date().getFullYear();
    
    return <footer><p>Copyright © {curYear}</p></footer>
    
};


export default Footer;