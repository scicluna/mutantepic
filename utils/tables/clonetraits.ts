import { roll } from "./castedetails"
export function generateModelTypeTraits() {
    return {
        comfort: {
            endurance: 15 + roll(10) + roll(10),
            strength: 10 + roll(10) + roll(10),
            agility: 20 + roll(20) + roll(20) + roll(20),
            accuracy: 20 + roll(20) + roll(20),
            intelligence: 10 + roll(20) + roll(20),
            perception: 20 + roll(20) + roll(20),
            will_power: 10 + roll(1 * 10),
            appearance: 60 + roll(1 * 100)
        },
        labor: {
            endurance: 50 + roll(20) + roll(20),
            strength: 50 + roll(20) + roll(20),
            agility: 40 + roll(1 * 20),
            accuracy: 40 + roll(1 * 20),
            intelligence: 15 + roll(1 * 20),
            perception: 20 + roll(20) + roll(20),
            will_power: 24 + roll(10) + roll(10),
            appearance: 10 + roll(10) + roll(10)
        },
        military: {
            endurance: 40 + roll(20) + roll(20) + roll(20) + roll(20),
            strength: 40 + roll(20) + roll(20) + roll(20) + roll(20),
            agility: 50 + roll(20) + roll(20) + roll(20),
            accuracy: 50 + roll(20) + roll(20) + roll(20),
            intelligence: 27 + roll(20) + roll(20),
            perception: 58 + roll(20) + roll(20),
            will_power: 30 + roll(20) + roll(20),
            appearance: 10 + roll(20) + roll(20)
        }
    }
}
