import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, load } from './actions';
import Category from './Category';
import CategoryForm from '../common/CategoryForm';
import './Category.css';

class Categories extends Component {
  
  componentDidMount() {
    // this.props.load();
    // this.props.addCategory({ name: 'Tacos' });
    // this.props.addCategory({ text: 'Burritos' });
    // this.props.addCategory({ text: 'Sushi' });
  }

  render() {
    const { categories, addCategory } = this.props;
    return (
      <div className="two-column">
        <div className="two-left">
          <p className="create-title">Create new category:</p>
          <CategoryForm onEdit={category => addCategory(category)}/>
        </div>
        <ul className="category-ul">
          {categories.map(category => <Category key={category.id} {...category}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { addCategory, load }
)(Categories);