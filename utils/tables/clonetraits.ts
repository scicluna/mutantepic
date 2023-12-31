import { roll } from "./castedetails"
export function cloneTraits() {
    return {
        Comfort: {
            endurance: 15 + roll(10) + roll(10),
            strength: 10 + roll(10) + roll(10),
            agility: 20 + roll(20) + roll(20) + roll(20),
            accuracy: 20 + roll(20) + roll(20),
            intelligence: 10 + roll(20) + roll(20),
            perception: 20 + roll(20) + roll(20),
            willpower: 10 + roll(1 * 10),
            appearance: 60 + roll(1 * 100)
        },
        Labor: {
            endurance: 50 + roll(20) + roll(20),
            strength: 50 + roll(20) + roll(20),
            agility: 40 + roll(1 * 20),
            accuracy: 40 + roll(1 * 20),
            intelligence: 15 + roll(1 * 20),
            perception: 20 + roll(20) + roll(20),
            willpower: 24 + roll(10) + roll(10),
            appearance: 10 + roll(10) + roll(10)
        },
        Military: {
            endurance: 40 + roll(20) + roll(20) + roll(20) + roll(20),
            strength: 40 + roll(20) + roll(20) + roll(20) + roll(20),
            agility: 50 + roll(20) + roll(20) + roll(20),
            accuracy: 50 + roll(20) + roll(20) + roll(20),
            intelligence: 27 + roll(20) + roll(20),
            perception: 58 + roll(20) + roll(20),
            willpower: 30 + roll(20) + roll(20),
            appearance: 10 + roll(20) + roll(20)
        }
    }
}
