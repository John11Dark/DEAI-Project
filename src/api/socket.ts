import { io, Socket } from "socket.io-client";
import settings from "../Config/settings";

const SOCKET_URL = settings.socketUrl;
const socket: Socket = io(SOCKET_URL);

function onConnect(): void {
  try {
    socket.on("connect", () => {
      console.log("connected");
    });
  } catch (error) {
    console.log(error);
    socket.disconnect();
  }
}

function onDisconnect(): void {}

function onError(): void {
  socket.on("connect_error", (error) => {
    console.log(error);
  });
}

function onReconnectAttempt(): void {}

function onReconnect(): void {}

function listener<T>(key: string, callback: (data: T) => void): void {
  socket.on(key, callback);
}

function removeListener<T>(key: string, callback: (data: T) => void): void {
  socket.off(key, callback);
}

function emit<T>(key: string, data: T): void {
  socket.emit(key, data);
}

export default {
  socket,
  onConnect,
  onDisconnect,
  onError,
  onReconnectAttempt,
  onReconnect,
  listener,
  removeListener,
  emit,
};
