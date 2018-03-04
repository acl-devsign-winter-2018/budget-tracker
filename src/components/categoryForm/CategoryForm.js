import React, { Component } from 'react';

export default class CategoryForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: '', budget: '', 
      ...props
    };
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.onEdit({
        ...this.state
      });
      this.setState({ name: '', budget: '' });
    };

    render(){
      const { name, budget } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='category'>
          Category:<input required name='name' placeholder='enter category' value={name} onChange={this.handleChange}/>
          </label>
          <label htmlFor='budget'>
          &nbsp; Budget:<input name='budget' placeholder='enter budget' value={budget} onChange={this.handleChange}/>
          </label>
          <button type='submit'>ADD</button>
        </form>
      );
    }
}
