const sendEmailMessage = require("../emailSender");
module.exports = function birthdayWather(user) {
  if (user.daysToBirthday === 0) {
    sendEmailMessage(user, "Today is your birthday");
  } else if (user.daysToBirthday === 10) {
    sendEmailMessage(user, "your bithday is close");
  }
};
