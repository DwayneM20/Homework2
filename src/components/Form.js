import React, { Component } from 'react'

const initialState = {
  name: "",
  URL: ''
}
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  handleChange = (event) => {
  
       
       this.setState({
         name: event.target.value
       })
  }

  handleUrl = (event) => {

       
       this.setState({
         URL: event.target.value
       })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

   
    if(this.state.name === "" && this.state.URL === ""){
      return;           //to prevent submit if field is empty
    }

    this.props.handleSubmit(this.state)
    
    this.setState(initialState)
  

    //clears input field
    document.getElementById("inputname").value='';
    document.getElementById("urlname").value='';

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label>name</label>
        <input type='text' onChange={this.handleChange} id="inputname" />
        <label>URL</label>
        <input type="url" onChange={this.handleUrl} id="urlname" />

        <input type="submit"/>
      </form>
    )
  }
}

export default Form