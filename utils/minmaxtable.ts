import { roll } from "./tables/castedetails";
export type genericTable = {
    min: number
    max: number
    value: string | number
}

export function minMaxTable(table: genericTable[]): string | number {
    if (!table) return "no table inserted"
    const result = roll(table[table.length - 1].max)
    const resultIndex = table.findIndex((res) => res.min <= result && res.max >= result)
    return table[resultIndex].value
}