module.exports = io => {
  io.on('connection', socket => {
    console.log("User connected");

    socket.on('chatMessage', (data) => {
      console.log(data);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

}
