Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

## What is a State Object?
The [state object](https://www.w3schools.com/react/react_state.asp) is where you store values that belong to the component. The **state** will change as the user interacts with the app.

Here is an example:
```js
  state = {
    score: 0,
    answer: 'Harry Potter',
    guess: ''
  }
```
To use a state value you write `this.state.nameOfValue`
For example if I wanted to display the users guess and score you might write:
```js
  render() {
     return (
       <div className="App">
        <p>Your guess: {this.state.guess}</p>
        <p>Your score: {this.state.score}</p>
       </div>
    );
  }
```
<details>
<summary>What do you think this will display?</summary>
<br>
If you guessed
<br>
Your guess:
<br>
Your score: 0
<br>
then you were right!
</details>

## Adding a state object to App.js

- [ ] Think of all the visual components you included in your wireframe (ie. clue, score, etc) and the unseen values like the answer to the clue and create a state object in App.js.
```js
class App extends Component {
     //your state here
    ...
```

- [ ] Try displaying some of the state values in the render method
```js
render() {
     return ( //your code here
     ...
```
- [ ] Once you're satisfied with your state object, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
