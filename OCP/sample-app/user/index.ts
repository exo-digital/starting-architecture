import { IBirthDayNotifier } from "./ibirthDayNotifier";
import { User } from "./user";
export function birthdayWather(
  user: User,
  birthdayNotifier: IBirthDayNotifier
) {
  if (user.daysToBirthday === 0) {
    if (user.age > 10 && user.age <= 18) {
      birthdayNotifier.sendMessage(
        user,
        "Happy bithday kiddo. Your teens only come once and you won’t be young forever. We wish you the best of times."
      );
    } else if (user.age > 18 && user.age < 30) {
      birthdayNotifier.sendMessage(
        user,
        "Wishes for your birthday; Lots of beer, gifts, party people, love, smiling faces, tears of joy, and many more...Happy birthday!"
      );
    } else {
      birthdayNotifier.sendMessage(user, "Happy birth day wish you the best!");
    }
  }
}
