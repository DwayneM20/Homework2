import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {favLinks: []}
  
  }

  handleRemove = (index) => {
   
  }

  handleSubmit = (favLink) => {
  
       this.setState({
         favLinks: [...this.state.favLinks, favLink]
       })
  }

  removeLink = (index) => {
      this.state.favLinks.splice(index, 1)
      
      this.setState({
        favLinks: this.state.favLinks
      })
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default LinkContainer