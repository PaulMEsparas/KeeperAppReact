import React from 'react';


let curYear = (function(){new Date().getFullYear()})();


function Footer(){
    
     curYear = new Date().getFullYear();
    
    return <footer><p>Copyright © {curYear}</p></footer>
    
};


export default Footer;