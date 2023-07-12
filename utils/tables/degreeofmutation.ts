import { roll } from "./castedetails";
export function degreeOfMutation() {
    return [
        { min: 1, max: 3, value: `${roll(3)} prime mutations, ${roll(2)} minor mutations`, flaw: roll(4) === 4 ? 1 : 0 },
        { min: 4, max: 8, value: `${roll(3) + 2} prime mutations, ${roll(3) + 1} minor mutations`, flaw: roll(100) <= 65 ? 1 : 0 },
        { min: 9, max: 9, value: `${roll(4) + 3} prime mutations, ${roll(3) + 2} minor mutations`, flaw: roll(2) },
        { min: 10, max: 10, value: `${roll(6) + 4} prime mutations, ${roll(4) + 3} minor mutations`, flaw: roll(2) + 1 },
    ]
}