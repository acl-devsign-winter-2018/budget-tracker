import React, { PureComponent, Fragment } from 'react';

export default class itemForm extends PureComponent {

  render() {

    return (
      <Fragment>
        <form onSubmit = {this.handleSubmit} className="add-item">
          <label htmlFor="item">
            <input required id="item" name="name" value={name} onChange={this.handleChange} placeholder="ex: Expense"/>
            <input required id="item" name="price" value={price} onChange={this.handleChange} placeholder="ex: Price"/>
          </label>
          <button type="submit">Add</button>
        </form>

      </Fragment>
    );
  }
}