import {IsPlayer} from "../interfaces/IsPlayer.js";

export class Player implements IsPlayer{
    //  name: string;
    //  age: number;
    // readonly country: string;
    //
    //  constructor(playerName: string, playerAge: number, playerCountry: string) {
    //      this.name = playerName;
    //      this.age = playerAge;
    //      this.country = playerCountry;
    //  }

    constructor(
        public name: string,
        public age: number,
        readonly country: string,) {
    }

    play() {
        console.log(`The player name is  ${this.name}, His age is ${this.age} and from ${this.country}`)
    }

}