
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/categoryActions';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';

class Dashboard extends Component {
  
  render() {
    const { categories, addCategory } = this.props;
    
    return (
      <div>
        <CategoryForm buttonText={'Add'} onComplete={addCategory}/>
        <ul>
          {categories.map(category => <CategoryItem key={category.id} categoryObj={category}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Dashboard);