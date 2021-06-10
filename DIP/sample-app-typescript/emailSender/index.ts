import { User } from "../user/user";

const emailProvider = {
  sendEmail: (emailAddress: string, message: string) => {
    console.log(`"${message}" has ben sent to "${emailAddress}"`);
  },
};

export class EmailHandler implements IBirthDayNotifier {
  sendMessage(user: User, message: string) {
    emailProvider.sendEmail(user.email, message);
  }
}

interface IBirthDayNotifier {
  sendMessage(user: User, message: string): void;
}
