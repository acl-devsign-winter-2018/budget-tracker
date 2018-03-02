import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat, loadCats } from './actions';
import Category from './Category';
import CategoryForm from './CategoryForm';

class Categories extends Component {

  componentDidMount() {
    this.props.loadCats();
  }

  render() {
    const { addCat, categories } = this.props;
    return (
      <div>
        <CategoryForm onEdit={addCat}/>
        <ul>
          {categories.map(category => {
            return <Category key={category.id} {...category}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  // mapping state and dispatch to props - connect the store to the component
  state => ({ categories: state.categories }),
  { addCat, loadCats }
)(Categories);
