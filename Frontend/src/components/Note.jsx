import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';



const Note = ({title,date,noteContent,tags,notePinned,editProcess,deleteProcess,pinProcess}) => {

  return (
    <div>
        <div>
            <div >
            <h5 style={{fontSize:'20px'}}>{title}</h5>
            <span style={{fontSize:'14px'}}>{date}</span>
            </div>
           { pinProcess? <PushPinOutlinedIcon/> :<PushPinIcon onClick={pinProcess} style={{color:'black'}}/>}

        </div>
        <p style={{fontSize:'16px'}}>{noteContent}</p>
    </div>  
  )
}

export default Note