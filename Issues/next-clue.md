Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issues goal: change the clue
![changestate](https://user-images.githubusercontent.com/45152371/86051903-09cc1e00-ba0b-11ea-8361-50fd6bda24da.gif)
## Changing the Clue with setState()
You're ready to show the next clue! And you're almost there.
Right now, your **state** is still holding your first clue, answer, and anything else you decided to add to it. Changing state values is a little different than changing regular elements.

You should **always use [`setState()`](https://www.w3schools.com/react/react_state.asp#:~:text=React%20components%20has%20a%20built,%2C%20the%20component%20re%2Drenders.)to change the state, it will ensure that the component knows its been updated and calls the `render()`** which updates what the player sees on their screen.

Back when you made you're button, you were already thinking about moving onto the next clue
- [ ] inside your `onClick()` you already have an if/else statement. **Outside of the if/else statement** (so before or after) update the [state object](https://www.w3schools.com/react/react_state.asp#:~:text=React%20components%20has%20a%20built,%2C%20the%20component%20re%2Drenders.) to show the new *clue*, hold the new *answer*, and change any other values in your state object that you think should be updated so that the player can see and guess the next clue.

```js
  clickHandler = () => {
//new code
    this.setState({
      answer: allAnswers[1],
      clue: allClues[1],
      guess: ''
    })
//end of new code
    if(this.state.answer.localeCompare(this.state.guess)===0){
      console.log('correct');
    }else{
      console.log('incorrect');
    }
  }
```
### What's going on here?
- As mentioned before, "1" is really the **second** item in your list, so `this.allAnswers[1]` is using the second item in the list you made earlier.
- `this.allClues[1]` is using the **second** little box in your "big box of little boxes"
![2d-array-visualized](https://user-images.githubusercontent.com/45152371/86051383-2ae03f00-ba0a-11ea-9ff1-865225ad0b69.png)

- [ ] Once your satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)  
