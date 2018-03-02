import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, destroyCategory } from './actions';
import CategoryForm from '../categoryForm/CategoryForm';
import Expenses from '../expenses/Expenses';


class Category extends Component {
  state = {
    editing: false
  };

  handleEdit = category => {
    this.props.updateCategory(category);
    this.setState({ editing: false});
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, timestamp, category, destroyCategory, budget } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <div>                   
            <CategoryForm id={id} text={category} onEdit={this.handleEdit}/>
            <button onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <section>
            <p>
              {category}
              &nbsp;{budget}
            &nbsp;<button onClick={() => destroyCategory(id)}>X</button>

            </p>
            <time>{timestamp.toLocaleDateString()}</time>
            <button onClick={this.handleToggleEdit}>✎</button>
          </section>
        }
        <Expenses categoryId={id}/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCategory, destroyCategory }
) (Category);