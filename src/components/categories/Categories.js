import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, loadCategories } from './actions';
import Category from './Category';
import CategoryForm from '../categoryForm/CategoryForm';
import './category.css';

class Categories extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }

  render(){
    const { category, addCategory } = this.props;
   
    return (
      <section>
        <div>
          <CategoryForm onEdit={addCategory}/>
        </div>
        <div id="category-list" >
          <ul>
            {category.map(category => <Category key={category.id} {...category}/>)}
          </ul>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ category: state.category }),

  { addCategory, loadCategories }
)(Categories);