<p align="center">
  <h2 align="center">Stylself</h3>
<img src="https://user-images.githubusercontent.com/49134038/110634256-1ab16e00-81ed-11eb-8630-282459d140a2.gif" alt="stylself" >
  <h4 align="center">Apply Neural Style Transfer Algorithm to the artwork on the web!</h4>
  <br />
</p>



### What is Stylself?

*Stylself* uses a Neural Style Transfer Algorithm to transfer the style of the input image to the style of a chosen artwork. It has the list of artworks for users to choose for transferring the style. It shows several examples of transferred images of each particular artwork and accepts user's input image to make the new transferred  image.

You can browse and select the artwork to transfer the style and get the target image with its style being changed according to the chosen artwork.



## Developer

<img src="https://user-images.githubusercontent.com/49134038/127655424-9d7721f1-0d09-4bcd-b6c4-0dc40a6567be.jpeg" width="150" />
[JungHyun Lah](https://github.com/leahincom)



## Requirements

```
numpy
flask
pillow
opencv-python
requests
tensorflow
keras
cython
```



## Preparation

1. clone the repo

```
git clone https://github.com/leahincom/Stylself.git
cd Stylself
```

2. start the mongoDB

```
// pre-set your mongoDB
mongo
```

3. start the server

```
cd server
nodemon // node index.js
```

4. start the client

```
cd client
npm start
```



## Tech Stack and Library

Front-end:

* React
* Sass

Back-end:

* Node.js
* Express
* MongoDB
* Flask

```
"@fortawesome/fontawesome-svg-core": "^1.2.34",
"@fortawesome/free-regular-svg-icons": "^5.15.2",
"@fortawesome/free-solid-svg-icons": "^5.15.2",
"@fortawesome/react-fontawesome": "^0.1.14",
"@testing-library/jest-dom": "^5.11.9",
"@testing-library/react": "^11.2.5",
"@testing-library/user-event": "^12.8.1",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-dropzone": "^11.3.1",
"react-modal": "^3.12.1",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"sass": "^1.32.8",
"web-vitals": "^1.1.0"
"bcrypt": "^5.0.1",
"cors": "^2.8.5",
"express": "^4.17.1",
"express-session": "^1.17.1",
"mongoose": "^5.11.19"
"eslint": "7.21.0",
"eslint-config-prettier": "^8.1.0",
"eslint-plugin-prettier": "^3.3.1",
"prettier": "2.2.1"
```



## API

I used Artsy Public API to get artworks.

*  https://developers.artsy.net/
