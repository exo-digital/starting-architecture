class Human {
  constructor(name: string, type: string) {
    this.type = type;
    this.name = name;
  }
  type: string;
  name: string;
  canBeANominee(): boolean {
    return false;
  }
}

class PoliceMan extends Human {
  constructor(
    name: string,
    yearsInService: number,
    numberOfCrimesResolved: number
  ) {
    super(name, "PoliceMan");
    this.yearsInService = yearsInService;
    this.numberOfCrimesResolved = numberOfCrimesResolved;
  }
  yearsInService: number;
  numberOfCrimesResolved: number;
  canBeANominee(): boolean {
    return this.yearsInService > 30 && this.numberOfCrimesResolved > 10;
  }
}

class FireMan extends Human {
  constructor(
    name: string,
    yearsInService: number,
    numberOfPeopleSaved: number
  ) {
    super(name, "FireMan");
    this.yearsInService = yearsInService;
    this.numberOfPeopleSaved = numberOfPeopleSaved;
  }
  numberOfPeopleSaved: number;
  yearsInService: number;
  canBeANominee(): boolean {
    return this.yearsInService > 30 && this.numberOfPeopleSaved > 30;
  }
}

class ScientistMan extends Human {
  constructor(name: string, hasReceivedNoblePrize: boolean) {
    super(name, "ScientistMan");
    this.hasReceivedNoblePrize = hasReceivedNoblePrize;
  }
  hasReceivedNoblePrize: boolean;
  canBeANominee(): boolean {
    return this.hasReceivedNoblePrize;
  }
}

function australianOfTheYearNomineeDecider(people: Human[]): Human[] {
  const nominees: Human[] = [];
  people.forEach((person) => {
    if (person.canBeANominee()) {
      nominees.push(person);
    }
  });

  return nominees;
}
const everyone = [
  new PoliceMan("Jack", 9, 12),
  new FireMan("Mary", 40, 100),
  new ScientistMan("Bob", true),
];
const nominees = australianOfTheYearNomineeDecider(everyone);

console.log(`Here are the nominees : ${JSON.stringify(nominees)}`);
