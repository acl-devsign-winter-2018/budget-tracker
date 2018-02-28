import React, { Component } from 'react';

export default class CategoryForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      ...props
    };
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render(){
      return (
        <form>
          <label htmlFor='category'>
            <input name='category' placeholder='enter category' value={name} onChange={this.handleChange}/>
          </label>
        </form>
      );
    }
}