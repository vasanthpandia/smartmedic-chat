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