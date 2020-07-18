Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issue's goal: keep moving onto the next turn without your code getting mad
![turn](https://user-images.githubusercontent.com/45152371/86058394-b27f7b00-ba15-11ea-81b6-d35a22c198a4.gif)

## Keeping Track of what Turn You're on
But why? Keeping track of your turn can help you move easily through different rounds of the game. You can use it as a hypothetical arrow to keep track of what clue and answer you should be using.
- [ ] Add a **turn** value to your state. You will use it (like an arrow) to point at the values in your answer and clue "lists" (Arrays).
```js
  state = {
    turn: 1, //new code
    score: 0,
    answer: allAnswers[0],
    guess: '',
    clue: allClues[0]
  }
```
When you click the button, you're moving to the next turn, so the **turn** value should increase
- [ ] Increase turn by one in the 'clickHandler` method
```js
clickHandler = () => {
    this.setState({turn: this.state.turn+1})
    ...
```
Now that you have this turn value, you can use it to move your "arrow" along the list of answers and clues.
- [ ] Use the turn value as the number for your lists in the `clickHandler` method
```js
  clickHandler = () => {
    this.setState({turn: this.state.turn+1})
    this.setState({
      answer: allAnswers[this.state.turn], //changed code
      clue: allClues[this.state.turn], //changed code
      guess: ''
    })
    if(this.state.answer.localeCompare(this.state.guess)===0){
      console.log('correct');
      this.setState({score: this.state.score+1})
    }else{
      console.log('incorrect');
    }
  }
```
## Turn Increases Infinitely
Right now, turn increases EVERY time your press the button, and you could press it 50 times. But you probably don't have 50 clues. In this example we only have 3. If you continue to update the turn, but never consider your clue limit, your code will try to access something that does not exist, and it will not be happy.

- [ ] use an [if statment](https://www.w3schools.com/js/js_if_else.asp) to see if your code has reached its limit, which in this case is the same as **the length of your answers array**(hint hint). Only when you know you are not beyond you limit, should you change the **state** of the game (images, answer, etc)
```js
clickHandler = () => {
    this.setState({turn: this.state.turn+1})
    if(this.state.turn < this.allAnswers.length){
      this.setState({
        answer: allAnswers[this.state.turn],
        clue: allClues[this.state.turn],
        guess: ''
      })}
     ...
```
- [ ] Once you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
