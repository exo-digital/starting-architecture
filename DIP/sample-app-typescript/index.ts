import { EmailHandler } from "./emailSender";
import { birthdayWather } from "./user";

const users = [
  {
    name: "Jack",
    email: "Jack@gmail.com",
    address: "unit 10, happy street, nice suburb",
    daysToBirthday: 0,
  },
];
users.forEach((user) => {
  birthdayWather(user, new EmailHandler());
});
