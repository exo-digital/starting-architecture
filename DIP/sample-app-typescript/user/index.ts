import { EmailHandler } from "../emailSender";
export function birthdayWather(user: any) {
  const emailHandler = new EmailHandler();
  if (user.daysToBirthday === 0) {
    emailHandler.sendMessage(user, "Today is your birthday");
  } else if (user.daysToBirthday === 10) {
    emailHandler.sendMessage(user, "your bithday is close");
  }
}
