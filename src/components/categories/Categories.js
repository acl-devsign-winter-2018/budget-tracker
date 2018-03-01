import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import Category from './Category';
import CategoryForm from '../categoryForm/CategoryForm';

class Categories extends Component {
  render(){
    const { category, addCategory } = this.props;
    console.log(this.props);
    return (
      <section>
        <div>
          <CategoryForm onEdit={addCategory}/>
        </div>
        <ul>
          {category.map(category => <Category key={category.id} {...category}/>)}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ category: state.category }),
  { addCategory }
)(Categories);