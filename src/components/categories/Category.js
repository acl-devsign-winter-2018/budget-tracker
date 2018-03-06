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
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, name, destroyCategory, budget } = this.props;
    const { editing } = this.state;
    const timestamp = new Date(this.props.timestamp);

    return (
      <li >
        {editing ? 
          <div>                   
            <CategoryForm id={id} text={name} onEdit={this.handleEdit} />
            <button id="button" onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <section className="margin">
            <p>
              {name}
              &nbsp;, total budget ${budget}
            &nbsp;<button id="button" onClick={() => destroyCategory(id)}>Remove</button>
            </p>
            <time>{timestamp.toLocaleDateString()}</time>
            <button id="button" onClick={this.handleToggleEdit}>✎</button>
          </section>
        }
        <Expenses categoryId={id} name/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCategory, destroyCategory }
) (Category);