
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/categoryActions';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import './dashboard.css';

class Dashboard extends Component {
  
  render() {
    const { categories, addCategory } = this.props;
    
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <div className="category-add">
          <h2>Add An Expense Category</h2>
          <CategoryForm buttonText={'Add'} onComplete={addCategory}/>
        </div>
        <ul className="category-list">
          {categories.map(category => <CategoryItem key={category.id} categoryObj={category}/>)}
        </ul>
      </Fragment>);
  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Dashboard);