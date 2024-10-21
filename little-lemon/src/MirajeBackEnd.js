import { createServer, Model } from "miragejs";

// today
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDay = today.getDate();
const firstDate = `${todayDay}-${todayMonth}-${todayYear}`; // Es: 3-9-2024

// actual t0day reservation
const firstDateReservations = [
  { time: "19:00", disable: true },
  { time: "19:30", disable: false },
  { time: "20:00", disable: true },
  { time: "20:30", disable: false },
  { time: "21:00", disable: false },
  { time: "21:30", disable: false },
];

// default
const defaultTimes = [
  { time: "19:00", disable: false },
  { time: "19:30", disable: false },
  { time: "20:00", disable: false },
  { time: "20:30", disable: false },
  { time: "21:00", disable: false },
  { time: "21:30", disable: false },
];

// server
createServer({
  models: {
    reservation: Model,
  },

  seeds(server) {
    // initial reservations
    server.create("reservation", {
      date: firstDate,
      times: firstDateReservations,
    });
  },

  routes() {
    this.namespace = "littlelemon-api";

    // GET all
    this.get("/reservations", (schema) => {
      const allReservations = schema.reservations.all().models;
      const formattedReservations = {};

      allReservations.forEach((reservation) => {
        formattedReservations[reservation.attrs.date] = reservation.attrs.times;
      });

      return formattedReservations; // Es: { "3-9-2024": [{ time: "19:00", disable: true }, ...] }
    });

    // GET by date
    this.get("/reservations/:date", (schema, request) => {
      const date = request.params.date; // date  from URL
      const reservation = schema.reservations.findBy({ date });

      if (reservation) {
        return reservation.attrs.times;
      } else {
        return defaultTimes;
      }
    });

    // POST reservation
    this.post("/reservations/:date", (schema, request) => {
      const date = request.params.date; //date from URL
      const attrs = JSON.parse(request.requestBody);
      let reservation = schema.reservations.findBy({ date });

      if (reservation) {
        const updatedSlots = reservation.attrs.times.map((slot) => {
          if (slot.time === attrs.time) {
            return { ...slot, disable: true };
          }
          return slot;
        });

        reservation.update({ times: updatedSlots });
      } else {
        const newSlots = defaultTimes.map((slot) => {
          if (slot.time === attrs.time) {
            return { ...slot, disable: true };
          }
          return slot;
        });

        schema.reservations.create({ date, times: newSlots });
      }

      return { success: true };
    });
  },
});
