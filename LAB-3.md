Budget Tracker - Part 3 (Async Actions)
===

## Submission Instructions
* continue working on the fork you created from Part 2
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Requirements  

Change your project to use async actions that communicate data changes to the server.

1. On all your `actions.test.js`, change to `it.skip`
    - We will learn how to test on Monday
1. Add a service module for making API calls
    - Robin will provide server
    - Create a method for each needed service (addCategory, addExpense, etc. etc.)
    - Use `fetch` to do AJAX
1. Add `redux-thunk` middleware (so your action creators can return functions, that will in turn recieve `dispatch`)
1. You will need to add actions for CATEGORY_LOAD
    - called from `componentDidMount` of `Dashboard`
    - need to be handled in all reducers that care about loaded categories
    - test your reducers against load action
1. Modify all the action creators to be async

## Rubric

- fetch services **3pts**
- convert to async actions **8pts**
- load actions, reducers, reducers tests **4pts**
- overall devsign **5pts**
