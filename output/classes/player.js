export class Player {
    //  name: string;
    //  age: number;
    // readonly country: string;
    //
    //  constructor(playerName: string, playerAge: number, playerCountry: string) {
    //      this.name = playerName;
    //      this.age = playerAge;
    //      this.country = playerCountry;
    //  }
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`The player name is  ${this.name}, His age is ${this.age} and from ${this.country}`);
    }
}
