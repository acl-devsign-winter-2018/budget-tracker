import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat, loadCats } from './actions';
import Category from './Category';
import CategoryForm from './CategoryForm';
import './styles/categories.css';

class Categories extends Component {

  componentDidMount() {
    this.props.loadCats();
  }

  render() {
    const { addCat, categories } = this.props;
    return (
      <div>
        <CategoryForm onEdit={addCat}/>
        <ul className="catList">
          {categories.map(category => {
            return <Category key={category.id} {...category}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { addCat, loadCats }
)(Categories);
