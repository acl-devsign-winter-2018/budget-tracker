Objective
===

Crate a budget application that utilizes react / redux. Use jest to unit test reducers and actions. Must be able to add a budget category, update it, delete it. Must be able to add an expense, update it, delete it. Use redux Thunk to pass categories and expenses into a backend database so they are saved on page refresh. The app must be responsive in design.

Steps Taken
===

Started by creating reducers for category add, remove, update and test them with jest while building. Create category actions using the same method. Create a Dashboard component that will store a form to create a category. Create a CategoryForm component that can be used to add or edit a category. Create a CategoryItem component that will display a category. Do essentially the same with expenses. Connect components to the redux store. Style everything using flexbox or css grid.

Reflection / Changes
===

This helped me better understand how unit testing is done, and why it is done. It is important to know the backend schema for data prior to writing data layout on the front end. I became more familiar with how to style reuseable components by passing in classnames as props.