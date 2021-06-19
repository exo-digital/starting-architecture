import { User } from "./user";

export interface IBirthDayNotifier {
  sendMessage(user: User, message: string): void;
}
