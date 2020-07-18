Create a new [branch](https://docs.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) for this issue. Here's a tutorial on using your branches in command line:https://www.atlassian.com/git/tutorials/syncing/git-fetch

This issue's goal: Have clues of any length
![difflength](https://user-images.githubusercontent.com/45152371/86062910-9502df00-ba1e-11ea-867d-d13b71ad518d.gif)

This is an **optional addition** if you want a challenge. Right now, all your clues are the same length. This is because you have written static `img` elements for each picture in your clue.
To change the length of the Image Sequence depending on the clue you can **map** each element of an array to an `img` element.
 - [ ] In ImageSequence.js, create an array variable that takes an array from the parent (eg `arr = props.arr`). This should be outside of the `return()` method
- [ ] For every element in your array, create an `img` with the `src` being equal to that array element
- [ ] In the `return()` statement return your mapped element

```js
const ImageSequence = (props) => {
  const imageItems = props.images.map((image,index) =>
    <img key={image} src={image}/>
  );
  return (
    <div className = 'ImageSequence'>
      {imageItems}
    </div>
  );
};
```


- [ ] In App.js `ImageSequence` needs a "list" (array) instead of a series or `src`s now. So set the array equal to your state clue.
```js
< ImageSequence images = {this.state.clue}/>
```
- [ ] Once you're satisfied with your code, create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
