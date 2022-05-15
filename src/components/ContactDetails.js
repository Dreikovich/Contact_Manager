import React from 'react'
import { useLocation } from 'react-router-dom';



const ContactDetails = (props) =>{
    const location= useLocation()
    console.log(location.state.state.myData.name)
    // const location = useLocation()
    return(
        <div className="container square-box d-flex justify-content-center " style={{textAlign:"center", maxWidth:"600" , minWidth:"600" }}>
            {/* <div className='row md-5'>
                <div className='col-md-4'> */}
                    <div className="card border-success" >
                    
                        <img className = "rounded mx-auto d-block" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"  style={{ width: '150px'}}
                        alt="Avatar" />
                    
                        <div className="card-body">
                            <h4>{location.state.state.myData.name}</h4>
                            <h4>{location.state.state.myData.email}</h4>
                        </div>
            
                    </div>
                {/* </div>
            </div> */}
        </div>
    )
}

export default ContactDetails