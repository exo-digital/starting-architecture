class Human {
  constructor(name: string, type: string) {
    this.type = type;
    this.name = name;
  }
  type: string;
  name: string;
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
}

class ScientistMan extends Human {
  constructor(name: string, hasReceivedNoblePrize: boolean) {
    super(name, "ScientistMan");
    this.hasReceivedNoblePrize = hasReceivedNoblePrize;
  }
  hasReceivedNoblePrize: boolean;
}

function australianOfTheYearNomineeDecider(people: Human[]): Human[] {
  const nominees: Human[] = [];
  people.forEach((person) => {
    if (person.type === "PoliceMan") {
      if (
        (person as PoliceMan).yearsInService > 30 &&
        (person as PoliceMan).numberOfCrimesResolved > 10
      ) {
        nominees.push(person);
      }
    } else if (person.type === "FireMan") {
      if (
        (person as FireMan).numberOfPeopleSaved > 30 &&
        (person as FireMan).yearsInService > 30
      ) {
        nominees.push(person);
      }
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
