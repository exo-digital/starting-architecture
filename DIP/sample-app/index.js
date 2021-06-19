const birthdayWather = require("./user");
const sendEmailMessage = require("./emailSender");

const users = [
  {
    name: "Jack",
    email: "Jack@gmail.com",
    address: "unit 10, happy street, nice suburb",
    daysToBirthday: 0,
  },
];
users.forEach((user) => {
  birthdayWather(user, sendEmailMessage);
});
