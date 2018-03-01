import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import Category from './Category';
import CategoryForm from '../categoryForm/CategoryForm';

class Categories extends Component {
  render(){
    const { categories, addCategory } = this.props;
    console.log(this.props);
    return (
      <section>
        <div>
          <CategoryForm onEdit={addCategory}/>
        </div>
        <ul>
          {categories.map(category => <Category key={category.id} {...category}/>)}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Categories);