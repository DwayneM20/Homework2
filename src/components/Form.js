import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
        */
       this.state={
           name:'',
           URL:''
       }
    }

     handleChange = event => {
    //     /*
    //         TODO - Logic for changing state based on form changes
    //     */
       this.setState({
          name: event.target.value,
          URL: event.target.value
      })
     }
    handleChangeName = event=>{
        this.setState({
            name:event.target.value
        })
    }

    handleChangeURL = event=>{
        this.setState({
            URL:event.target.value
        })
    }


    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state)
        //this will empty the text box after the submit button is click
        this.setState({
            name: '',
            URL: ''
        })
    }

    render() {

        return(
            <form>
                
            {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            <label>Name</label>
          {/* // {this.state.name}  */}
            <input 
            type='text' 
            value={this.state.name} 
            onChange={this.handleChangeName}
            required/>
            <label>URL</label>
            <input 
            type='text' 
            value={this.state.URL} 
            onChange={this.handleChangeURL}
            required/>
            <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;