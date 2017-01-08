SmartMedic-Chat
===============

SmartMedic-Chat is a secure chat application that enables realtime communication between users of [SmartMedic](https://github.com/vasanthpandia/smartmedic) app.

Checkout the app here [smartmedic.herokuapp.com](http://smartmedic.herokuapp.com)

## Stack

1. HapiJS - SmartMedic-Chat is built on [HapiJS](https://hapijs.com) for API.
2. SocketIO - The chat is powered by Scoket connection using [socket.io](http://socket.io/get-started/chat/).

## Application Structure

The `config.js` contains application-level configuration.

`server.js` is the entry main file that starts the application.

routes and socket server are inside `lib` folder.

## Local Testing

1. Clone this repository locally.
2. run `cp .env.example .env`
3. run npm install
4. Clone smartmedic repository locally - Needed for User Login. (See SmartMedic dependencies in its github page)
5. Edit `public/chat.html` to add your own code. Add your own JWT.

## ToDo

1. Import all models from smartmedic.
2. Create ChatRoom Model.
3. Store Coversations into ChatRoom Model.