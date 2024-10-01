import React from 'react'
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';
import "sweetalert2/src/sweetalert2.scss";
import "./alert.css"

const Alert = () => {
 
        Swal.fire({
          title: 'Bienvenidos a Squad Shop',
         confirmButtonText: 'Continuar',
          customClass: {
            popup: 'custom-popup',        
            title: 'custom-title',      
            content: 'custom-content',   
            confirmButton: 'custom-button',
            
          },
        });
      
}

export default Alert
