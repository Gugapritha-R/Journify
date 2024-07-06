import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const SearchBar = ({value,onChange,searchProcess,clearSearch}) => {

  return (
    
           
            <div style={{backgroundColor:'whitesmoke',width:'60%',borderRadius:'5px',display:'flex',alignItems:'center',height:'40px'}}>
            
            <input type='text' style={{ width:'100%',border:'none',background:'transparent',padding:'11px 0',outline:'none'}} placeholder='  Search Notes'  value={value} onChange={onChange}/>
            
            {value && <CloseIcon onClick={clearSearch} style={{color:'black',paddingRight:'10px',cursor:'pointer'}}/>}
            <SearchIcon onClick={searchProcess} style={{color:'black',paddingRight:'10px',cursor:'pointer'}}/>
            </div>
            
      
  )
}

export default SearchBar