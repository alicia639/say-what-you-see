Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issues goal: add a button, and use it to check if the guess is correct
![Button](https://user-images.githubusercontent.com/45152371/86053881-0dad6f80-ba0e-11ea-9f6d-be82bb1a5580.gif)
![console](https://user-images.githubusercontent.com/45152371/86054316-c7a4db80-ba0e-11ea-976c-b7ed01744bd2.gif)


## Button
Buttons can be fun, but they're EVEN MORE fun when they do something important.
You might have noticed there's another event handler method `clickHandler()`. This is for the submit button! Much like with the input box, you can
- [ ] add a [button element](https://reactjs.org/docs/handling-events.html) inside the `render()` method which handles an event. In this case the event is `onClick` which calls the `clickHandler()` function
```js
<button onClick = {this.clickHandler}>Press Me!</button>
```
- [ ] In the `clickHandler()` function include a [conditional statement](https://www.w3schools.com/js/js_if_else.asp) that distinguishes between a right and wrong answer. This link shows you how to compare 2 strings in JavaScript: [comparing strings](https://www.tutorialspoint.com/What-is-the-best-way-to-compare-two-strings-in-JavaScript#:~:text=To%20compare%20two%20strings%20in%20JavaScript%2C%20use%20the%20localeCompare(),is%20sorted%20before%20string%201.). Be sure to print something to the console so you can test if your code is doing what you want.
```js
  clickHandler = () => {
    if(this.state.answer.localeCompare(this.state.guess)===0){
      console.log('correct');
    }else{
      console.log('incorrect');
    }
  }
```

- [ ] When you're satisfied with your button and event, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
