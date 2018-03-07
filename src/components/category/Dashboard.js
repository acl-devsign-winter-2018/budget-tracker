
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addCategory, loadCategories } from '../actions/categoryActions';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import './dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory } = this.props;
    
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <div className="category-add">
          <h2>Add A Category</h2>
          <CategoryForm buttonText={'Add'} categoryPlaceholder={'Utilities, Food, Vacations...'} budgetPlaceholder={'400, 6000, 123...'} onComplete={addCategory}/>
        </div>
        <ul className="category-list">
          {categories.map(category => <CategoryItem key={category.id} categoryObj={category}/>)}
        </ul>
      </Fragment>);
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { addCategory, loadCategories }

)(Dashboard);