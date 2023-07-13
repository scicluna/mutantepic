import { genericTable, minMaxTable } from "./minmaxtable"
export function skillGenerator(skill: string, skillSet: genericTable[], results: string[]): void {
    const numberOfRolls = skill.split(' ')[0]
    for (let i = 0; i < parseInt(numberOfRolls); i++) {
        const result = minMaxTable(skillSet) as string
        results.push(result)
    }
}