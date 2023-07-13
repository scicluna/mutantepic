import { roll } from "./castedetails";
export function degreeOfMutation() {
    return {
        Mild: `${roll(3)} prime mutations,${roll(2)} minor mutations,${roll(4) === 4 ? 1 : 0} flaws`,
        Typical: `${roll(3) + 2} prime mutations,${roll(3) + 1} minor mutations,${roll(100) <= 65 ? 1 : 0} flaws`,
        Severe: `${roll(4) + 3} prime mutations,${roll(3) + 2} minor mutations,${roll(2)} flaws`,
        Freakish: `${roll(6) + 4} prime mutations,${roll(4) + 3} minor mutations,${roll(2) + 1} flaws`
    }
}