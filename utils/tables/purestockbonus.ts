import { roll } from "./castedetails"
export type Bonus = {
    min: number
    max: number
    value: {
        automaticSkill?: string
        endurance?: number
        strength?: number
        agility?: number
        accuracy?: number
        intelligence?: number
        willpower?: number
        appearance?: number
    }
}

export function pureStockBonus(): Bonus[] {
    return [
        { min: 1, max: 5, value: { automaticSkill: "Brawling" } },
        { min: 6, max: 10, value: { automaticSkill: "Stealth" } },
        { min: 11, max: 15, value: { automaticSkill: "Weapon Expert" } },
        { min: 16, max: 20, value: { automaticSkill: "Dodge" } },
        { min: 21, max: 37, value: { endurance: 1, strength: 1, agility: 1, accuracy: 1, intelligence: 1, willpower: 1, appearance: 1 } },
        { min: 38, max: 44, value: { endurance: roll(6) + roll(6) } },
        { min: 45, max: 51, value: { strength: roll(6) + roll(6) } },
        { min: 52, max: 58, value: { agility: roll(6) + roll(6) } },
        { min: 59, max: 65, value: { accuracy: roll(6) + roll(6) } },
        { min: 66, max: 74, value: { intelligence: roll(6) + roll(6) + roll(6) } },
        { min: 75, max: 83, value: { willpower: roll(6) + roll(6) } },
        { min: 84, max: 90, value: { appearance: roll(6) + roll(6) + roll(6) } },
        { min: 91, max: 97, value: { automaticSkill: "Martial Arts" } },
        { min: 98, max: 99, value: { endurance: 2, strength: 2, agility: 2, accuracy: 2, intelligence: 2, willpower: 2, appearance: 2 } },
        { min: 100, max: 100, value: { endurance: roll(6), strength: roll(6), agility: roll(6), accuracy: roll(6), intelligence: roll(6), willpower: roll(6), appearance: roll(6) } },
    ]
}