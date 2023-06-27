# Quizzical

**Howdy, good people of the internet !!**\
**Quizzical** is a quizzing app built as a solo project. \
The UI design inspiration was taken from [getform](https://getform.io/)

<hr>

**Website** : [Quizzical](https://sushants-quizzical.netlify.app/)

<hr>

## Running the project locally

Before starting, you need to install the following on your computer.

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/)

[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads)

[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

To get started :

1. Clone this Repo : `git clone https://github.com/Sushants-Git/Quizzical.git`.
2. Run `cd Quizzical` to change the working directory.
3. Run `npm i` or `npm install` to install all dependencies.
4. Run `npm run dev` to start the application.


## Some details about the App

### **API and HTML entities**

We are using the [Open Trivia DB](https://opentdb.com/) **API** to fetch data for the Quizes.

Example data received from the [Open Trivia DB](https://opentdb.com/) API :

```js
category: "Entertainment: Video Games"
correct_answer: "Champ"
difficulty: "easy"
incorrect_answers: Array(4) [ "Duke", "Snoopy", "Champ"]
question: "In the video game &quot;Postal 2&quot;, what is the name of Postal Dude&#039;s dog?"
type: "multiple"
```

If you look at the `question` key, you will see that in its value it has something like `&quot;Postal 2&quot;` these are referred to as `HTML entities`.\
`&quot;Postal 2&quot;` should render as `"Postal 2"` on the page, we are using [he](https://www.npmjs.com/package/he) to render them properly on the page.

Example :

```js
console.log( he.decode('foo &copy; bar &ne; baz &#x1D306; qux')) ;
// Output → 'foo © bar ≠ baz 𝌆 qux'
```

### **Extra dependencies used**

- [react-confetti](https://github.com/alampros/react-confetti) : To render the Confetti that comes after the user finishes playing the game.
- [react-use](https://github.com/streamich/react-use) : 'react-confetti' requires 'react-use' to get the current windowSize.
- [nanoid](https://github.com/ai/nanoid) : used for generating unique IDs. 

**Note that you don't need to refer to their documentation, they are mentioned in case they cause conflict with the changes you made or need to understand their roles**


## Issues / Features

- [ ] Fixing Typos and grammatical errors in the documentation.
- [ ] Improving the documentation and Code Comments ( If there is something that you think can be expained better or you think there is some code that can be written in a much better way feel free to make changes. )
- [ ] **UI improvements** ( The colors are currently too harsh, feel free to play around with the UI and make changes.)
- [ ] **Letting the user start the game as soon as data is fetched** ( Currently the game starts in 1.5 seconds, make it so that the user can start the game as soon as data is fetched. )
- [ ] Not letting the user check their answers until they have answered all the questions.
- [ ] **Letting the user restart the game** ( When the user finishes a game, they don't have the option to restart the game.)   

## Contribution

First of all, thanks a lot for taking the time to contribute. It must have been really hard going through my ugly code 😂😂😂, once again thanks a lot.

To make a contribution you can open up an issue and let us know what you want to improve in the app , so that we can assign you to it.

HAPPY CODING !!!



 



