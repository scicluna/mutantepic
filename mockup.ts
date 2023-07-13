export type character = {
    name: string
    age: number
    race: string
    sex: string
    caste: string
    endurance: number[]
    strength: number[]
    agility: number[]
    accuracy: number[]
    intelligence: number[]
    perception: number[]
    willpower: number[]
    appearance: number[]
    outfitting: string
    automaticSkills: string[]
    skillSetRolls: string[]
    dominateHand: string
    swimming: string
    movement: string
    miscEquipment: string[]
    wepsEquipment: string[]
    armorEquipment: string[]
    implants?: string[]
    primeMutations?: string[]
    minorMutations?: string[]
    flawMutations?: string[]
    ghostMutations?: string[]
    beastType?: string
}

//Note: Each bestial human PC is 33% likely to exhibit d3 primary and d2 minor mutations with a 1 in 10
// chance of a flaw mutation