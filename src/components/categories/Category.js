import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCat, removeCat } from './actions';
// import CategoryForm from './CategoryForm';

class Category extends Component {

  state = {};

  render() {
    const { id, timestamp, name, budget, removeCat } = this.props;
    
    return (
      <li>
        <h2>{name}</h2>
        <p>{budget}</p>
        <time>{timestamp.toLocaleString()}</time>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCat, removeCat }
)(Category);