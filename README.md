# Welcome to InstagramClone 👋
![Version](https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
[![image](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/_vinny_92)

Make a web app Like INSTAGRAM

This project will be made using react native, firebase firestore, firebase storage, redux, expo, along with a lot of other packages and technologies which will help us get this Instagram clone app up and running as fast as possible.

### 📺 [**View the youtube tutorial series here**](https://www.youtube.com/watch?v=xE8UEX7vXVQ&list=PLxabZQCAe5fgatwOQny9wKJVs4YD6xkf1)

### 😎 [**Get the premium version of this project**](https://www.simcoder.com/product/instagram-redesign/)
<br>

## ➕ Features

Currently the project has the following features:
  * expo boilerplate
  * Auth system 
  * Post Images w/ descriptions
    * Take pictures directly in app
    * Choose from gallery
  * Profile page
  * Follow/Unfollow users
  * Feed in chronological order
  * Search Users
  * Comment Posts
  * Comment Likes
  * Redesign
  
<br>

## 💻 Install

First you need to install Nodejs and npm, this is different depending on the OS you are running so it is easier to check the node [page](https://nodejs.org/en/download/)

Install [expo](https://expo.io/learn), if it fails run you might need to run this with sudo
```sh
npm install expo-cli --global
```

Install the needed packages while in the root folder of the project
```sh
npm install
```


Install firebase tools
```sh
npm install -g firebase-tools
```

Deploy the project to yout firebase projhect (make sure to have billing enabled for that project). copy the backend/functions/index.js into a different place
```sh
cd backend
firebase login
firebase init (choose functions, javascript, EsLint and install deplendencies)
```

Copy the index.js into the place of the new index.js
```sh
firebase deploy
```

You can check the first [video](https://www.youtube.com/watch?v=5S9HM6pprZo&t=2s) on this series to learn how to do it easily

<br>

## 📱 Usage

To Start expo all you have to do is run this line
```sh
expo start
```

>If you want to run on android you'll need to enable developer options and USB Debugging on your device

<br>

## 💙  question FAQ

If you have any question then please use the following [Forum](https://www.simcoder.com/forum/instagram/).

<br>

## 👤 Author

**SimCoder**

* Website: www.vincenzo.codes


## 🌟 Show your support


Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [SimCoder](https://github.com/simcoderYoutube).

This project is [Apache License 2.0](https://github.com/SimCoderYoutube/InstagramClone/blob/master/LICENSE) licensed. Some of the dependencies are licensed differently.
