# Paudio

A full-stack audio podcast app. React/JavaScript frontend with a RESTful API and Express/MongoDB backend. Uses a GraphQL API to retrieve podcast data.

Group project for CodeClan, planned and developed over 6 days by [@ravaldo](https://github.com/ravaldo), [@kirsty-m](https://github.com/kirsty-m), [@SeanCushnie](https://github.com/SeanCushnie), [@ablaney88](https://github.com/ablaney88).

<div align="center">

![](https://i.imgur.com/yO38ceb.png)
</div>

## Features

* browse the top 100 podcasts
* search for podcasts
* subscribe to podcasts
* play a podcast episode
* create and edit a playlist
* view episode info
* fully responsive design
* light/dark themes

## Screenshots

<div align="center">
  
![](https://i.imgur.com/hAGsTuR.png)

![](https://i.imgur.com/NzPBjtQ.png)
</div>

## Installation
ensure mongodb is installed and running (expected port 27017)
```
cd server
npm install
node db/seeder
npm run server:dev
```
```
cd client
npm install
npm start
```
