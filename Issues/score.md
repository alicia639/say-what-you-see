Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issue's goal: change score and display it
![score](https://user-images.githubusercontent.com/45152371/86055253-5403ce00-ba10-11ea-81f2-43976ad083e5.gif)

## Updating the Score
Have you ever been playing a game and wondered "am I even getting the question right??". Probably not, because most games have feedback about how the player is doing. We'll do so with a score.

How you keep score is up to you. You could go the traditional route and show how many the user got right or you could mix it up and start at 10 and subtract 1 every time they get one wrong. You could even print out stars or another icon instead of showing a number. It's up to you. No matter what you do, you'll need a score variable.
- [ ] If you don't already have one add a score to your state object
```js
  state = {
    score: 0,
    answer: allAnswers[0],
    guess: '',
    clue: allClues[0]
  }
```
- [ ] Update your score when the user submits their guess (you're already checking if it's right or wrong, so change the score accordingly)
```js
   ...
    if(this.state.answer.localeCompare(this.state.guess)===0){
      console.log('correct');
      this.setState({score: this.state.score+1})
    }
   ...
```
- [ ]  Add "HTML" (really it's JSX) to your `render()` method to show your score on the player's screen
```js
<p>Score: {this.state.score}</p>
```
- [ ] when you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
