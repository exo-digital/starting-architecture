import { User } from "./user";
export interface IBirthDayMessageBuilder {
  canUse(user: User): boolean;
  getMessage(): string;
}

export class TeenageBirthDayMessageBuilder implements IBirthDayMessageBuilder {
  canUse(user: User): boolean {
    return user.age > 10 && user.age <= 18;
  }
  getMessage(): string {
    return "Happy bithday kiddo. Your teens only come once and you won’t be young forever. We wish you the best of times.";
  }
}

export class GrownUpBirthDayMessageBuilder implements IBirthDayMessageBuilder {
  canUse(user: User): boolean {
    return user.age > 18 && user.age < 30;
  }
  getMessage(): string {
    return "Wishes for your birthday; Lots of beer, gifts, party people, love, smiling faces, tears of joy, and many more...Happy birthday!";
  }
}
