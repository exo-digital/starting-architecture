import { IBirthDayNotifier } from "./ibirthDayNotifier";
import { User } from "./user";
export function birthdayWather(
  user: User,
  birthdayNotifier: IBirthDayNotifier
) {
  if (user.daysToBirthday === 0) {
    birthdayNotifier.sendMessage(user, "Today is your birthday");
  } else if (user.daysToBirthday === 10) {
    birthdayNotifier.sendMessage(user, "your bithday is close");
  }
}
