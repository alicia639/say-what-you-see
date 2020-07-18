Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issues goal: display your first clue
![Screen Shot 2020-06-29 at 1 20 45 PM](https://user-images.githubusercontent.com/45152371/86052141-5adc1200-ba0b-11ea-80af-2840df7eb54f.png)
## Time to Start Programming!
Next thing to do is to add those images to your app, but first it will be good to know a little bit about React. React is a JavaScript [library](https://www.youtube.com/watch?v=FQAQTXE_vt4) that makes creating user interfaces (UIs) easier (that's the screen the player sees).
- [ ] Check out [this youtube video](https://www.youtube.com/watch?v=N3AkSS5hXMA) to get a general idea about how React works.

Like the video says, react uses [components](https://reactjs.org/docs/components-and-props.html) to create a clean user interface. In our app, we are using 2 components App.js and ImageSequence.js. App.js is the root component and we will use ImageSeuence.js inside this component.
![Nodes](https://user-images.githubusercontent.com/45152371/85803733-aeddb280-b6fc-11ea-89c8-fff030fd072d.png)

<details>
<summary> Components, JSX, and Props</summary>
ImageSequences.js has a function,` ImageSequences`, which returns "HTML". HTML is in quotations because it looks like HTML, but it's actually not, it's something called [JSX](https://reactjs.org/docs/introducing-jsx.html) that React uses to create the UI. When you're working on your project, for the most part, you can use regular HTML, but sometimes you will receive an error for doing so. In this case you can search the HTML name + JSX to find the JSX equivalent.
</details>

`ImageSequence` takes an argument `props`. [Props](https://reactjs.org/docs/components-and-props.html) is how you use values between components (code files). You'll want to use ImageSequences in App.js and be still able to change values from there. To do so, you write values as `{props.valueName}`. You can write JavaScript code between curly braces { } and execute it in your "HTML" (really it's JSX).

- [ ] Try writing the following between `<div className = 'ImageSequence'>` and `</div>` in ImageSequence.js:

```js
<h1>Hi, my name is {props.name}</h1>
```
- [ ] Then in *App.js* add the following in`render(){return(<your code here>);}`
```js
< ImageSequence name = "Joe"/>
```
- [ ] Make sure to save your work and run your app with `npm start` in your command line. Does it say "Hi my name is Joe" in your browser?

## Creating the ImageSequence Component
Now you're ready to create the component!
- [ ] Add [code to display your images](https://medium.com/javascript-in-plain-english/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526) in ImageSequence.js, but instead of writing the file path for the `src` like you normally would, use a place holder of a different name for each one (eg. props.img1, props.img2, etc)

Below is an example for the first image. Add more image elements up to the number of images you are using for your clues.
```js
    <div className = "ImageSequence">
      <img src = {props.img1} alt = {props.alt1}/>
      ...
    </div>
```

- [ ] Create an ImageSequence component in App.js like you did before but this time, write the play holder name (without "props") is equal to the [path](https://medium.com/javascript-in-plain-english/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526) for each image.
```js
       <div className="App">
          <ImageSequence
              img1 = {require('./Images/otter.png')} alt1 = "otter"
              img2 = {require('./Images/repo.png')} alt2 = "repo"/>
              ...
       </div>
```
- [ ] Once you're satisfied with how your images are displaying in your browser, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
