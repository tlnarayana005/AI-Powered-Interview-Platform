import { Server, Socket } from 'socket.io';

export function attachSockets(io: Server) {
  io.on('connection', (socket: Socket) => {
    socket.on('join-room', ({ roomId, userId }) => {
      socket.join(roomId);
      socket.to(roomId).emit('participant-joined', { userId });
    });

    socket.on('code-update', ({ roomId, code }) => {
      socket.to(roomId).emit('code-update', { code });
    });

    socket.on('chat-message', ({ roomId, message, user }) => {
      io.in(roomId).emit('chat-message', { message, user, at: new Date().toISOString() });
    });

    socket.on('disconnect', () => {
      // Clean up room state if required
    });
  });
}
