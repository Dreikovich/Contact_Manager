import React from 'react'
import ContactCard from './ContactCard'



 
const ContactList = (props) =>{
    console.log(props)

    
    const renderContactList = props.contacts.map((element)=>{
        console.log(element)
        // console.log(props.location.state.element);
        return(
            <div className="content" >
                <ContactCard element = {element} getConcatId={props.getConcatId}></ContactCard>
                
            </div>
            
        )
    })
    return (
        
        <div>
            
            <h3 style={{textAlign: 'center'}}>List of Contact</h3>
            <div className="mx-auto" style={{width: "400px"}}>
                {renderContactList}
            </div>
        </div>
        
    )
    
}


export default ContactList