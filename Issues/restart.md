Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issue's goal: restart button and state
![restart](https://user-images.githubusercontent.com/45152371/86059795-54a06280-ba18-11ea-9c39-972338117b86.gif)

Your App is already super awesome! Now it's time to add some stuff that will be the cherry on top, so you can really impress the players of your game.

A "restart" or play again button will allow the user to start the game over again. You may have noticed that there is one last handler function `restartHandler()`

- [ ] Make another button element that calls the `restartHandler()` method `onClick`
```js
<button onClick = {this.restartHandler}>Restart?</button>
```
- [ ] inside the `restartHandler()` method, set the [state object](https://www.w3schools.com/react/react_state.asp#:~:text=React%20components%20has%20a%20built,%2C%20the%20component%20re%2Drenders.) to its original state
```js
  restartHandler = () => {
    this.setState({
      turn: 1,
      score: 0,
      answer: allAnswers[0]
      guess: '',
      clue: allClues[0]
    })
  }
```
- [ ] When you're satisfied with your code, submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
