import React from 'react'

class AddContact extends React.Component {
    state = {
        name:"",
        email:"",
    }

    add = (e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All the fields are required")
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"", email:""}) // update state
    }
    render(){
        return (
            <div className="mx-auto" style={{width: "400px"}}>
                <h3 style ={{textAlign: "center"}}>AddContact</h3>
                <div >
                    <form onSubmit={this.add}>
                        <div className="form-group" style={{marginBottom:"10px"}}>
                            <label style={{marginBottom:"3px"}}>Name</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                name="name" 
                                placeholder="name"
                                value={this.state.name}
                                onChange={(e)=>this.setState({name:e.target.value})}>
                                </input>
                        </div>
                        <div className="form-group" style={{marginBottom:"10px"}}>
                            <label style={{marginBottom:"3px"}}>Email</label>
                            <input 
                            className="form-control" 
                            type="text" 
                            name="email" 
                            placeholder="email"
                            value={this.state.email}
                            onChange={(e)=>this.setState({email: e.target.value})}></input>
                        </div>
                        <div className="form-group" >
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddContact