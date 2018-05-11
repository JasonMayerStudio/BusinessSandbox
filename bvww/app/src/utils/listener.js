const events = {};

export default {
  on(key, callback) {
    if (!events[key]) {
      events[key] = [];
    }
    events[key].push(callback);
  },

  trigger(key, data) {
    if (events[key]) {
      events[key].forEach((callback) => callback(data));
    }
  },

  clear(key) {
    delete events[key];
  },
};
