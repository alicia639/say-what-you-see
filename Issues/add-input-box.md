Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issues goal: add an input box
![input](https://user-images.githubusercontent.com/45152371/86053008-b1961b80-ba0c-11ea-998c-9a3940aa1c4a.gif)

## Input Box
The user is probably going to want to know if they got the question right. One way to do so is for the user to ***input** their guess and compare that to the actual answer. Luckily, you already have a value for guess and answer.

- [ ] In App.js in the render() method return a text [input element](https://www.w3schools.com/react/react_forms.asp)
```js
  render() {
     return (
       <div className="App">
        <input type = 'text'/> //text input
       </div>
    );
  }
```
## Events
Any time the user interacts with the application an [event](https://reactjs.org/docs/handling-events.html) occurs. A function called `guessChangedHandler` already exists for you to [handle the event](https://www.w3schools.com/react/react_events.asp) in which the guess input changes. It contains one line of code that updates the guess state, but we will talk more about updating the state later.

With text input boxes there is an `onChange` argument, and just like with the ImageSequence component and the src arguments, you can use Javascript as long as it is in curly { } brackets. In this case you'll use a function. For functions in the same class, use the `this` keyword; For example `this.funtionName`

- [ ] Output something to the console (this will show in Developer Tools on your browser) from the `guessChangedHandler` function so you can test if it is working/ being called
```js
  guessChangedHandler = (event) => {
      this.setState({guess: event.target.value}); //ignore this line for now
      console.log('event!'); //your code goes here
  }
```
- [ ] Call the guessChangedHandler function from the input element
```js
<input type = 'text' onChange = {this.guessChangedHandler}/>
```
- [ ] Once you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
