# Refocus Bot Scaffold

## Overview
This repo is a scaffold project to help develop bots for refocus rooms using the Refocus Bot Development Kit [BDK](https://github.com/salesforce/refocus-bdk). Refocus rooms are collaberative channels in which people and bots interact to resolve service issues. So this project is to help develop bots for Refocus that will have ablity to interact with external APIs and the Refocus rooms.

## Features
* Templates ```package.json``` for bot development
* Templates ```README.md``` for documentation
* Templates bot server and bot UI for quick development

## Getting Started
These instructions will enable you to have a copy of this project up and running on your local machine for development and testing purposes.

Note: this project supports [dotenv](https://github.com/motdotla/dotenv). Put your environmental variables into `.env` file or export into your shell session if desired.

### Prerequisites
* [Node.js](https://nodejs.org/en/)

### Env Variables
Note: If you want to test this locally you will need some environment variables:
* ```API_TOKEN``` - Used for Requests to Refocus. Created in refoucs/tokens/new.
* ```SOCKET_TOKEN``` (Returned Upon Installation) - Used for Socket Connection. REFOCUS_URL
* ```REFOCUS_URL``` (OPTIONAL) - Used to specify which refocus instance to point to.

### Test Bot Locally without Refocus
1.  Clone this repo
2.	Add any server side code you want to bot.js
3.	Add any UI side code to web/index.js
4.  Comment-out ``bdk.installOrUpdateBot(packageJSON);`` from ./index.js
5.	```npm login``` - You need to login to get salesforce/bdk
6.	```npm install```
7.	```npm start```
8.	Test locally (default port 5000)

### Test Bot Locally with Refocus
1.  Clone this repo
2.	Add any server side code you want to index.js
3.	Add any UI side code to web/index.js
4.	Install and run Refocus https://salesforce.github.io/refocus/docs/04-quickstartlocal.html
5.	Create a token https://salesforce.github.io/refocus/docs/10-security.html
6.	Add token to Bot enviroment variables -  ```echo "API_TOKEN={{UI TOKEN from Step 5}}" > .env ```
7.	```npm login``` - You need to login to get salesforce/bdk
8.	```npm install```
9.	```npm start```
10.	If it is your first install you will be returned a ```Authorization Token``` for sockets
11.	Add authorization token to Bot enviroment variables -  ```echo "SOCKET_TOKEN={{UI TOKEN from Step 9}}" >> .env```
12.	```npm start```
13. Create a RoomType in Refocus with your Bot added
14. Create a Room in Refocus with your new RoomType
15.	Go to ```https://host:port/rooms/``` and open your new room

## Extension
### Examples Bots
* Timeline-Bot - https://github.com/salesforce/refocus-bot-timeline
* Weather-Tutorial-Bot - https://github.com/salesforce/refocus-bot-weather-tutorial
* Participants-Bot - https://github.com/salesforce/refocus-bot-participants
* Oncall-Bot - https://github.com/salesforce/refocus-bot-oncall

### Contributing
If you have any ideas on how this project could be improved, please feel free. The steps involved are:
* Fork the repo on GitHub.
* Clone this project to your machine.
* Commit changes to your own branch.
* Push your work back up to your fork.
* Submit a Pull Request so we can review it!

## Release History
Follows [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning#semver-for-publishers)

* 1.0.0 First time README was set
* 1.0.1 Update bdk to 1.5.8
* 1.0.2 Remove extra scripts
* 1.0.3 Add env variable for refocus url
* 1.0.4 Uglify for production
* 1.0.5 Update bdk to 1.6.1
* 1.0.6 Use public npm bdk.
* 1.0.7 Clean up linting and add initial testing framework.
