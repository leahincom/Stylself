# Stylself

Apply Neural Style Transfer Algorithm to the artwork on the web!



### What is Stylself?

*Stylself* uses a Neural Style Transfer Algorithm to transfer the style of the input image to the style of a chosen artwork. It has the list of artworks for users to choose for transferring the style. It shows several examples of transferred images of each particular artwork and accepts user's input image to make the new transferred  image.

You can browse and select the artwork to transfer the style and get the target image with its style being changed according to the chosen artwork.



## Tech Stack

Front-end:

* React

* Sass

Back-end:

* Node.js
* Express
* MongoDB
* Flask



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



## API

I used Artsy Public API to get artworks.

*  https://developers.artsy.net/



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



