import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './categoryActions';
import Category from './CategoryItem';
import CategoryForm from './CategoryForm';

class Categories extends Component {

  render() {
    const { categories, addCategory } = this.props;

    return (
      <div>
        <CategoryForm onComplete={addCategory}/>
        <ul>
          {categories.map(category => <Category key={category.id} {...category}/>)}
        </ul>
      </div>
    );

  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Categories);