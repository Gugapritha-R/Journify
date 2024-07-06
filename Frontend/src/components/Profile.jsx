import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';






const Profile = () => {
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <AccountCircle style={{paddingTop:'10px',paddingLeft:'100px'}}/>
        <div style={{display:'flex',flexDirection:'column',}}>
        <p style={{paddingLeft:'8px',}}>Name</p>
        <button style={{color:'white',background:'none',border:'none',paddingLeft:'8px',textDecoration:'underline'}} >Logout</button>
        </div>
        </div>
        </div>
  )
}

export default Profile