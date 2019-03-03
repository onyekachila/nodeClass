// Working with Events

// Emit means sending a signal that an event has happened.

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("messageLogged", () => {
  console.log(`Listener Called`);
});

// Raise an event
emitter.emit("messageLogged");
