import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import Category from './Category';
import CategoryForm from '../categoryForm/CategoryForm';

class Categories extends Component {
  render(){
    const { categories, addCategory} = this.props;
    return (
      <div>
        <CategoryForm onEdit={addCategory}/>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Categories)