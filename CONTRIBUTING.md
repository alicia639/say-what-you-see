# Contributing
You need to add this repository to your computer to make changes and edit it in the development environment. Go ahead and [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository on your computer. Make sure you're in a directory that you'll remember/ is easy to access. If you're not sure, your Desktop is a good go-to.
![cloning-repo](https://user-images.githubusercontent.com/45152371/86035053-800f5700-b9f0-11ea-9b7a-e2201286067b.GIF)


Open your **terminal**
In command line:
```sh
>cd desktop
>git clone <copied link here>
```
### Download Node.js
You won't be able to run the app just yet. You'll need to download [Node.js](https://nodejs.org/en/) onto your computer. Once this is done downloading, navigate into your project directory and run `npm install` in command line. When that is finished installing, enter`npm start` in your command line and the react app will launch at http://localhost:3000 in your browser.
```sh
>npm install
>cd <project-name>
>npm start
```
You'll be using `npm start` a lot while developing your app so try and remember it, or write it down somewhere.
### How to Use the Developer Tools In Your Browser
In your bowser at http://localhost:3000, right click and select "inspect", this will open up Developer Tools in your browser. Once open, navigate to "Console" this is where the details of any errors and `console.log('print statements')` will appear.
![inspect](https://user-images.githubusercontent.com/45152371/86036091-30318f80-b9f2-11ea-8aa3-e38ed8c19b87.gif)
### Check Out the Files in Your Project
Last thing for this issue is to explore some of the files in this directory. This might be kind of confusing, but don't worry, you'll mostly only be working in src/App.js and src/Components/ImageSequence.js. If you want to learn more about the other files, checkout this [Code Academy tutorial](https://www.codecademy.com/articles/react-setup-i) or the [create-react-app repository](https://github.com/facebook/create-react-app). 
 
## Process
Students will gain access to this repository through a GitHub classroom.

1. A mentor is assigned to the project
2. Steps of the development process will be assigned in the form of issues
3. Students create a new branch to address an issue
4. Once they have completed a first draft addressing an issue, the student will make a pull request
5. The mentor reviews changes and provides feedback for the student
6. Once the mentor and student are satisfied with the changes, the mentor will merge the pull request, resolving the issue
7. The student moves onto the next issue
