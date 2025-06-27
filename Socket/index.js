const express = require('express');
const http = require('http')
const path = require('path');
const { Server } = require('socket.io');

const app = express();
app.use(express.json(path.resolve('./public')));

const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('chatMessage', (msg) => {
    console.log('Message received:', msg);
    io.emit('messageEmit', msg);
  })
})


app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});