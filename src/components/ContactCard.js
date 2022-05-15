import React from 'react'
import { Link } from "react-router-dom"

const ContactCard=(props)=>{
    const element = props.element
    const myData = {
        name: `${element.name}`,
        email: `${element.email}` 
      }
    return(
        <div>
            <button onClick={()=>props.getConcatId(element.id)} type="button" className="btn btn-danger float-end " style={{margin:"1% auto"}}>Delete</button>
            <Link
                to={`/contact/${element.id}`}
                state={{state: {myData}}}
                style={{color: 'inherit', textDecoration: 'none'}}>
                    <div className="bg-light clearfix" style={{marginBottom:"5px"}}> 
                        <div >
                            {element.name}
                        </div>
                        
                        <div>
                            {element.email}
                        </div> 
                    </div>
                </Link>
            
            
                
        </div>
    )
}

export default ContactCard