import { roll } from "./castedetails";
export function bestialHumanTraits() {
    return {
        Alligator: { endurance: 40, strength: 20, agility: -5, accuracy: -8, intelligence: 10 + roll(12), willpower: 30, perception: 0, appearance: 3 + roll(8), age: 6 + roll(12), move: '4/12m' },
        Armadillo: { endurance: 10, strength: 0, agility: -14, accuracy: 0, intelligence: 14 + roll(20), willpower: -5, perception: 0, appearance: 4 + roll(10), age: 4 + roll(10), move: '5m' },
        Badger: { endurance: 15, strength: 8, agility: 5, accuracy: 6, intelligence: 16 + roll(20), willpower: 13, perception: 4, appearance: 5 + roll(12), age: 4 + roll(8), move: '8m' },
        Bear: { endurance: 50, strength: 30, agility: 0, accuracy: 10, intelligence: 15 + roll(20), willpower: 20, perception: 5, appearance: 6 + roll(12), age: 5 + roll(10), move: '8m' },
        Bobcat: { endurance: 20, strength: 16, agility: 20, accuracy: 22, intelligence: 16 + roll(20), willpower: 6, perception: 18, appearance: 7 + roll(20), age: 4 + roll(12), move: '9m' },
        Chimp: { endurance: 16, strength: 20, agility: 23, accuracy: 16, intelligence: 14 + roll(20) + roll(20), willpower: 0, perception: 4, appearance: 10 + roll(20), age: 8 + roll(12), move: '8m' },
        Cockroach: { endurance: 18, strength: 16, agility: 8, accuracy: 0, intelligence: roll(6) + roll(6) + roll(6), willpower: 0, perception: 10, appearance: roll(4), age: roll(4) + roll(4), move: '9m' },
        Cougar: { endurance: 26, strength: 22, agility: 19, accuracy: 24, intelligence: 16 + roll(20), willpower: 12, perception: 16, appearance: 8 + roll(20), age: 5 + roll(12), move: '10m' },
        Cow: { endurance: 40, strength: 26, agility: 0, accuracy: 6, intelligence: 7 + roll(20), willpower: 0, perception: 3, appearance: 5 + roll(12), age: 4 + roll(8), move: '8m' },
        Coyote: { endurance: 6, strength: 4, agility: 18, accuracy: 19, intelligence: 18 + roll(20), willpower: 0, perception: 14, appearance: 8 + roll(12), age: 6 + roll(10), move: '9m' },
        Crow: { endurance: 10 + roll(20), strength: 10 + roll(20), agility: 22, accuracy: 10, intelligence: 15 + roll(20), willpower: 12, perception: 26, appearance: roll(4) + roll(4), age: 3 + roll(8), move: '5/22m' },
        Deer: { endurance: 20, strength: 12, agility: 18, accuracy: 4, intelligence: 8 + roll(20), willpower: 0, perception: 13, appearance: 7 + roll(10), age: 4 + roll(10), move: '13m' },
        Cat: { endurance: 14 + roll(20), strength: 5, agility: 26, accuracy: 30, intelligence: 12 + roll(20), willpower: 5, perception: 16, appearance: 10 + roll(20), age: 3 + roll(10), move: '9m' },
        Dog: { endurance: 8, strength: 12, agility: 10, accuracy: 12, intelligence: 10 + roll(20) + roll(20), willpower: 0, perception: 11, appearance: 7 + roll(12), age: 5 + roll(12), move: '9m' },
        Eagle: { endurance: 12, strength: 6, agility: 18, accuracy: 17, intelligence: 16 + roll(20), willpower: 22, perception: 28, appearance: roll(8) + roll(8), age: 5 + roll(8), move: '6/28m' },
        Elk: { endurance: 30, strength: 16, agility: 10, accuracy: 6, intelligence: 9 + roll(20), willpower: 6, perception: 12, appearance: 6 + roll(10), age: 5 + roll(12), move: '11m' },
        Fox: { endurance: 16 + roll(20), strength: 8, agility: 20, accuracy: 18, intelligence: 14 + roll(20) + roll(20), willpower: 2, perception: 17, appearance: 9 + roll(20), age: 5 + roll(10), move: '8m' },
        Frog: { endurance: roll(6) + roll(6) + roll(6) + 6, strength: roll(6) + roll(6) + roll(6) + 3, agility: 10, accuracy: 0, intelligence: roll(6) + roll(6) + roll(6) + 4, willpower: 0, perception: 3, appearance: roll(4) + roll(4), age: 3 + roll(8), move: '7/12m' },
        Horse: { endurance: 55, strength: 22, agility: 8, accuracy: 8, intelligence: 10 + roll(20), willpower: 4, perception: 6, appearance: 9 + roll(12), age: 4 + roll(10), move: '12m' },
        Jaguar: { endurance: 22, strength: 20, agility: 18, accuracy: 26, intelligence: 17 + roll(20), willpower: 13, perception: 15, appearance: 11 + roll(20), age: 6 + roll(10), move: '9m' },
        Moose: { endurance: 45, strength: 19, agility: 10, accuracy: 7, intelligence: 8 + roll(20), willpower: 7, perception: 10, appearance: roll(4) + roll(4), age: 6 + roll(12), move: '9m' },
        Mouse: { endurance: roll(6) + roll(6) + roll(6) + 3, strength: roll(6) + roll(6) + roll(6) + 6, agility: 24, accuracy: 20, intelligence: 14 + roll(20), willpower: 0, perception: 14, appearance: 7 + roll(12), age: 2 + roll(6), move: '9m' },
        Otter: { endurance: 17 + roll(20), strength: 7, agility: 21, accuracy: 17, intelligence: 12 + roll(20), willpower: 0, perception: 12, appearance: 8 + roll(12), age: 4 + roll(12), move: '7/12m' },
        Pig: { endurance: 18, strength: 16, agility: 0, accuracy: 0, intelligence: 8 + roll(20), willpower: 0, perception: 4, appearance: roll(4) + roll(4), age: 3 + roll(12), move: '7m' },
        Mantis: { endurance: 26, strength: 17, agility: 10, accuracy: 14, intelligence: roll(6) + roll(6) + roll(6) + 1, willpower: 8, perception: 23, appearance: roll(6), age: roll(6) + roll(6), move: '7m' },
        Raccoon: { endurance: 16 + roll(20), strength: 6, agility: 12, accuracy: 8, intelligence: 13 + roll(20), willpower: 0, perception: 6, appearance: 7 + roll(10), age: 5 + roll(10), move: '8m' },
        Rat: { endurance: roll(8) + roll(8) + roll(8) + 8, strength: roll(8) + roll(8) + roll(8) + 10, agility: 20, accuracy: 18, intelligence: 15 + roll(20) + roll(20), willpower: 0, perception: 10, appearance: 2 + roll(12), age: 3 + roll(6), move: '8m' },
        Rattlesnake: { endurance: 13, strength: 10, agility: 4, accuracy: 27, intelligence: roll(6) + roll(6) + roll(6), willpower: 6, perception: 14, appearance: roll(4) + roll(4), age: 4 + roll(12), move: '9m' },
        Scorpion: { endurance: 6, strength: 12, agility: 8, accuracy: 7, intelligence: roll(6) + roll(6) + roll(6) + 3, willpower: 8, perception: 18, appearance: roll(6), age: 4 + roll(10), move: '9m' },
        Turtle: { endurance: 30, strength: 14, agility: 0, accuracy: 6, intelligence: roll(6) + roll(6) + roll(6) + 2, willpower: 24, perception: 0, appearance: roll(6), age: 4 + roll(8) + roll(8), move: '5m/8m' },
        Spider: { endurance: 4, strength: 10, agility: 28, accuracy: 10, intelligence: roll(6) + roll(6) + roll(6), willpower: 6, perception: 20, appearance: roll(6), age: 3 + roll(8), move: '10m' },
        Wolf: { endurance: 16, strength: 14, agility: 12, accuracy: 14, intelligence: 8 + roll(20) + roll(20), willpower: 8, perception: 15, appearance: 9 + roll(20), age: 6 + roll(12), move: '10m' },
        Wolverine: { endurance: 20, strength: 13, agility: 6, accuracy: 8, intelligence: 14 + roll(20), willpower: 21, perception: 6, appearance: 4 + roll(12), age: 5 + roll(8), move: '8m' }
    }
}