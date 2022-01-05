var events = require("events");
var em = new events.EventEmitter();

//Create Event

em.on("myEvent", function (data) {
  count = 0;
  data.forEach((i) => {
    count = count + i;
  });
  console.log(count);
});

// Fire Event

em.emit("myEvent", [1, 2, 3, 4, 5]);
