import { roll } from "./castedetails"
export function bioreplicaTraits() {
    return {
        pleasure: {
            endurance: 18 + roll(20),
            strength: 15 + roll(20),
            agility: 30 + roll(20) + roll(20),
            accuracy: 30 + roll(20),
            intelligence: 10 + roll(20),
            perception: 20 + roll(20),
            willpower: 10 + roll(20),
            appearance: 50 + roll(100)
        },
        industrial: {
            endurance: 50 + roll(20) + roll(20) + roll(20),
            strength: 60 + roll(20) + roll(20) + roll(20),
            agility: 30 + roll(20),
            accuracy: 30 + roll(20),
            intelligence: 10 + roll(20),
            perception: 18 + roll(20),
            willpower: 20 + roll(20) + roll(20),
            appearance: 10 + roll(10) + roll(10)
        },
        clerical: {
            endurance: 15 + roll(10) + roll(10),
            strength: 15 + roll(10) + roll(10),
            agility: 30 + roll(20) + roll(20),
            accuracy: 30 + roll(20) + roll(20),
            intelligence: 50 + roll(20) + roll(20) + roll(20),
            perception: 10 + roll(20) + roll(20) + roll(20),
            willpower: 15 + roll(20) + roll(20),
            appearance: 20 + roll(20) + roll(20) + roll(20)
        },
        infiltration: {
            endurance: 40 + roll(20) + roll(20),
            strength: 35 + roll(20) + roll(20),
            agility: 60 + roll(20) + roll(20) + roll(20),
            accuracy: 60 + roll(20) + roll(20) + roll(20),
            intelligence: 40 + roll(20) + roll(20),
            perception: 50 + roll(20) + roll(20) + roll(20),
            willpower: 20 + roll(20) + roll(20) + roll(20),
            appearance: 10 + roll(20) + roll(20) + roll(20)
        },
        battle: {
            endurance: 60 + roll(100),
            strength: 60 + roll(20) + roll(20) + roll(20),
            agility: 40 + roll(20) + roll(20) + roll(20),
            accuracy: 50 + roll(20) + roll(20) + roll(20),
            intelligence: 10 + roll(20) + roll(20),
            perception: 30 + roll(20) + roll(20),
            willpower: 40 + roll(20) + roll(20),
            appearance: 10 + roll(20) + roll(20)
        }
    }
}