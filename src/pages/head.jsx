import React from 'react'

function Headerss() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:"center",  padding:"10px", paddingLeft:"100px", paddingRight:'100px'}} className="header">
       <img style={{maxHeight:'30px',}} src='https://www.lejhro.com/lejhro_logo_blue.png'/>
       <div  style={{display:'flex', gap:"20px", alignItems:"center"}}>
          <p style={{color:'#1890ff'}}>Let's Talk &rarr;</p>
          <button className="hamburger-button">
           <i className="fas fa-bars"></i>
         </button>
       </div>
    </div>
  )
}

export default Headerss