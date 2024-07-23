# Talkspirit front-end interview case

Welcome in our interview case!

This repository is our starter kit. It contains:

- [Generic information about this case](#generic-information)
- [The functional specifications written as a User Story](#user-story)
- [Information about the API you will use](#api)

## Generic information

1. This repository is a really simple Vite React application installed with `npm`
2. We already installed and configured `react-router` and `react-router-dom` to earn time
3. You can start by running `npm install` and `npm run dev`, then going to http://localhost:5173/

I would like to see you code as close as possible to the real-life conditions. The rules are:

1. Please develop with your usual quality standard. The use-case can take some time to be fully done, and **I prefer to see it unfinished with your usual quality standard** rather than finished with hurry
2. This is **not a memory test**. You can access any resource you need (search engines, official documentation, AI, etc.)
3. **Feel free to install or use any tool you are comfortable with**. If you think you'll be more efficient with a library, feel free to install it anytime
4. The more you talk while developing, the more knowledge about you I will get 😉

## User story

**AS** someone who works on a computer all day,

**I WANT TO** have a small game that is quick and fun, but also useful

**SO THAT** I can take breaks while training my brain

### Acceptance Criteria:

- The app first displays a welcome screen that offers to create a game
- The player can play Memory with 20 cards
- When the game is over, a screen congratulates the player with "Bravo" and offers to start a new game
- The player can reload the page or save the page in bookmarks to continue during their next break
- The player can use the application on a tablet screen

### Memory Game Rules:

1. Cards are placed face down in a grid at the beginning of the game
2. The player clicks on a face-down card to turn it over, then on a second face-down card to turn it over
3. If the two cards are the same, they remain face up; otherwise, they turn back over
4. The game is over when all cards are turned face up

### Design:

- You can design as you like; we want it to be presentable to a real player
- The cards are square with rounded edges, with a border or a trim
- The back of the cards is a darker color with the Talkspirit logo in a white circle in the center

## API

You have to use an existing API, that can be called at https://ima.ghostspirit.net

The API is documented with an OpenAPI yaml file. To read it, you can go to https://editor.swagger.io/ and load https://ima.ghostspirit.net/doc.yaml
