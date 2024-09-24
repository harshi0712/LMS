import { Server } from 'socket.io';

export const setupWebSocket = (server: any) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (msg: string) => {
      io.emit('message', msg); // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  return io;
};
