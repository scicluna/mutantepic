import { roll } from "./castedetails";
export function ghostMutationTraits() {
    return [
        { min: 1, max: 1, value: 1 },
        { min: 2, max: 5, value: 2 },
        { min: 6, max: 8, value: 3 },
        { min: 9, max: 9, value: 4 },
        { min: 10, max: 10, value: 4 + roll(4) },
    ]
}