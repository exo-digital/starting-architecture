module.exports = function birthdayWather(user, messageSender) {
  if (user.daysToBirthday === 0) {
    messageSender(user, "Today is your birthday");
  } else if (user.daysToBirthday === 10) {
    messageSender(user, "your bithday is close");
  }
};
