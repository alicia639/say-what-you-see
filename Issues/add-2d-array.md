Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

## Boxes in Boxes (Arrays)
A 2 dimensional Array is like several little boxes within one big box, and each little box can contain many elements. In the image below, the light blue boxes are the clues (the little boxes), and the dark blue box is the big box.

![2d-array-visualized](https://user-images.githubusercontent.com/45152371/86045542-9b825e00-ba00-11ea-9bb2-95fc8e6672ff.png)

If I were to represent this image in code I would write the following:
```js
  const allClues = [ //the outside brackets are the big box
    //all the inside brackets are little boxes that contain image paths
    [require('./Images/hair.png'), require('./Images/repo.png'), require('./Images/otter.png')],
    [require('./Images/.png'), require('./Images/deck.png'), require('./Images/crater.png')],
    [require('./Images/micro.png'), require('./Images/pho.png'), require('./Images/n.png')],
    ];
```

- [ ] Add a [2 dimensional array](https://www.javascripttutorial.net/javascript-multidimensional-array/) that stores all your image paths. This does not need to be a state element, as it will not change as the user interacts the the application
```js
        //new code here
    class App extends Component {
        state = {
        ...
```
If you're having trouble with this or find it too confusing. There are other ways of storing your clues in multiple elements. For example, each clue could be it's own array of image paths.

- [ ] If you haven't already, add a clue value in your state element and set it as your first clue (list of image paths)
```js  
state = {
    score: 0,
    answer: 'Harry Potter',
    guess: '',
    clue: allClues[0]
  }
```
<details>
<summary>What's going on here?</summary>
<br>
In coding, we start counting with 0
<br>
So the first "little box" is actually labeled '0': allClues[0]
<br>
The second is labeled '1': allClues[1]
<br>
and so on
</details>

Right now, clue equals:
![2d-array-visualized](https://user-images.githubusercontent.com/45152371/86047931-8d364100-ba04-11ea-9c37-839d26206ad7.png)
- [ ] Change the `img`s in the`ImageSequence` in your `render()` method in App.js so that it is equal to your clue. Remember that state values are referred to with the `this` and `state` keywords.
```js
   <ImageSequence img1 = {this.state.clue[0]} img2 = {this.state.clue[1]} img3 = {this.state.clue[2]}/>
```
<details>
<summary>What's going on here?</summary>
<br>
In coding, we start counting with 0
<br>
So the first element in your list is actually labeled '0': this.state.clue[0]
<br>
The second is labeled '1': this.state.clue[1]
<br>
and so on
</details>

## Answers
Ok, but what about the answers? You can use the same technique.
- [ ] Inside the square brackets [ ] make a list of answers to all your clues
```js
const allAnswers = ['Harry Potter', 'cake decorator', 'microphone'];
 class App extends Component {
    ...
```

- [ ] Once you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
