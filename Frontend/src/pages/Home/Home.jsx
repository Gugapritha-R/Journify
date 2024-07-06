import React from 'react'
import Navbar from '../../components/Navbar'
import Note from '../../components/Note'



const Home = () => {

    const[pinned,setPinned]=useState(false);

    const pinProcess=()=>{

        setPinned(true);

        if(pinned){
            
        }

    }
    

  return (
    <div>
        <Navbar/>
        <div>
        <Note title='samplenote' date='123345' noteContent='sdfghjkoiuytrewyu xcghjk sdfg' tags="###"  />
        </div>
       
    </div>
  )
}

export default Home