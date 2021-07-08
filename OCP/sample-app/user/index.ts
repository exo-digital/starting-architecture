import { IBirthDayMessageBuilder } from "./birthdayMessageBuider";
import { IBirthDayNotifier } from "./ibirthDayNotifier";
import { User } from "./user";
export function birthdayWather(
  user: User,
  birthdayNotifier: IBirthDayNotifier,
  messageBuilders: IBirthDayMessageBuilder[]
) {
  var onIsUsed = false;
  messageBuilders.forEach((messageBuilder) => {
    if (messageBuilder.canUse(user)) {
      birthdayNotifier.sendMessage(user, messageBuilder.getMessage());
      onIsUsed = true;
    }
  });
  if (!onIsUsed) {
    birthdayNotifier.sendMessage(user, "Happy birth day wish you the best!");
  }
}
