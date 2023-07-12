import { roll } from "./castedetails"
export function transHumanTraits() {
    return {
        endurance: roll(20),
        strength: roll(10),
        agility: roll(20),
        accuracy: roll(20),
        intelligence: roll(20) + roll(10),
        perception: roll(10),
        willpower: roll(10),
        appearance: roll(6) + roll(6)
    }
}