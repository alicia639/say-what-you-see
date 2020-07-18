Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

## CSS
You've got the base of your App down. To make the user interface more unique you can edit the [CSS](https://www.w3schools.com/css/default.asp) in App.css.

In the `render()` method of App.js, you can see `<div className="App">`. That means anything between those tags takes on the style described in App.css.

Some of the default elements are already in the CSS file. For these, you don't have to use className,  as they will automatically be applied to the elements of the corresponding types.
- [ ] Go ahead and change some of the values and see what happens

You can also add other [classes](https://www.htmldog.com/guides/css/intermediate/classid/#:~:text=In%20the%20CSS%2C%20a%20class,character%20(%E2%80%9C%23%E2%80%9D).&text=The%20difference%20between%20an%20ID,to%20identify%20more%20than%20one.) that you may apply to single instances of an element.

- [ ] Try adding a new class and applying it to your button
In App.css:
```js
.newButton{
  background-color: #000066;
}
```
In App.js
```js
<button className = "newButton" ...
```
Have as much fun as you want with this section and experiment! This is your opportunity to be creative with what the player sees when playing your game.

- [ ] When you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
