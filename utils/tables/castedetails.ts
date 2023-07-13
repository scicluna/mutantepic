export function roll(dice: number): number {
    return Math.ceil(Math.random() * dice)
}

export function casteDetail() {
    return [
        { caste: "Slave, Labor", endurance: roll(10), strength: roll(10), agility: 0, accuracy: 0, intelligence: -roll(10), perception: -roll(6), willpower: -roll(6), appearance: -roll(10), outfitting: "ESC", automaticSkills: [], skillSetRolls: [] },
        {
            caste: "Slave, Kitchen",
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: -roll(6),
            perception: 0,
            willpower: -roll(12),
            appearance: -roll(6),
            outfitting: "ESC",
            automaticSkills: [],
            skillSetRolls: []
        },
        {
            caste: "Slave, Servant",
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: roll(6),
            perception: roll(6),
            willpower: -roll(6),
            appearance: roll(6),
            outfitting: "ESC",
            automaticSkills: [],
            skillSetRolls: ["1 Misc"]
        },
        {
            caste: "Slave, Whore",
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: -roll(6),
            perception: 0,
            willpower: -roll(6),
            appearance: roll(6),
            outfitting: "ESC",
            automaticSkills: ["Erotic Arts"],
            skillSetRolls: []
        },
        {
            caste: "Slave, Court",
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: -roll(6),
            perception: roll(6),
            willpower: -roll(6),
            appearance: roll(6),
            outfitting: "ESC",
            automaticSkills: [],
            skillSetRolls: [`${roll(3)} Misc`]
        },
        {
            caste: `Slave, Gladiator`,
            endurance: roll(10) + roll(10),
            strength: roll(10) + roll(10),
            agility: roll(8),
            accuracy: roll(8),
            intelligence: -roll(10),
            perception: roll(8),
            willpower: -roll(4),
            appearance: -roll(8) - roll(8),
            outfitting: "ESC",
            automaticSkills: [`Brawling ${roll(3)}`],
            skillSetRolls: [`${roll(4) + 4} Warrior`]
        },
        {
            caste: `Fisher`,
            endurance: roll(6),
            strength: roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: 0,
            perception: roll(8),
            willpower: 0,
            appearance: 0,
            outfitting: "PR",
            automaticSkills: [`Spear Weapons Expert ${roll(3)}`],
            skillSetRolls: [`1 Misc`]
        },
        {
            caste: `Hunter`,
            endurance: roll(8),
            strength: roll(8),
            agility: roll(6),
            accuracy: roll(6),
            intelligence: 0,
            perception: roll(8),
            willpower: 0,
            appearance: 0,
            outfitting: "PR",
            automaticSkills: [`Bow Weapons Expert ${roll(3)}`, `Wilderness Survival`],
            skillSetRolls: [`1 Misc`]
        },
        {
            caste: `Miner`,
            endurance: roll(10),
            strength: roll(10) + roll(10),
            agility: 0,
            accuracy: 0,
            intelligence: 0,
            perception: 0,
            willpower: 0,
            appearance: -roll(6),
            outfitting: "PR",
            automaticSkills: [`Pickaxe Weapons Expert ${roll(3)}`],
            skillSetRolls: [`1 Misc`]
        },
        {
            caste: `Logger`,
            endurance: roll(8),
            strength: roll(8),
            agility: roll(6),
            accuracy: 0,
            intelligence: 0,
            perception: roll(6),
            willpower: 0,
            appearance: -roll(3),
            outfitting: "PR",
            automaticSkills: [`Axe Weapons Expert ${roll(3)}`],
            skillSetRolls: [`1 Misc`]
        },
        {
            caste: `Farmer`,
            endurance: roll(6),
            strength: roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: 0,
            perception: roll(6),
            willpower: 0,
            appearance: 0,
            outfitting: "PR",
            automaticSkills: [`Pitchfork Weapons Expert ${roll(3)}`],
            skillSetRolls: [`1 Misc`]
        },
        {
            caste: `Nomad`,
            endurance: 0,
            strength: 0,
            agility: roll(10),
            accuracy: 0,
            intelligence: 0,
            perception: roll(6),
            willpower: 0,
            appearance: 0,
            outfitting: "PR",
            automaticSkills: [`Rider ${roll(3)}`, `Navigate by Stars`],
            skillSetRolls: [`${roll(3)} Misc`]
        },
        {
            caste: `Trader`,
            endurance: 0,
            strength: 0,
            agility: 0,
            accuracy: 0,
            intelligence: roll(10) + roll(10),
            perception: roll(10),
            willpower: 0,
            appearance: 0,
            outfitting: `WE`,
            automaticSkills: [`Barter`],
            skillSetRolls: [`${roll(3) + 1} Misc`]
        },
        {
            caste: `Crafts Person`,
            endurance: 0,
            strength: 0,
            agility: roll(6),
            accuracy: roll(6),
            intelligence: roll(6),
            perception: 0,
            willpower: 0,
            appearance: 0,
            outfitting: `MO`,
            automaticSkills: [],
            skillSetRolls: [`${roll(3) + 1} Misc`]
        },
        {
            caste: `Student`,
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: roll(10) + roll(10) + roll(10),
            perception: 0,
            willpower: 0,
            appearance: roll(6),
            outfitting: "MO",
            automaticSkills: [],
            skillSetRolls: [`${roll(6) + 2} Educated`, `${roll(2)} Misc`]
        },
        {
            caste: `Scribe`,
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: 0,
            perception: roll(6),
            willpower: 0,
            appearance: 0,
            outfitting: `MO`,
            automaticSkills: [],
            skillSetRolls: [`${roll(3)} Educated`, `1 Misc`]
        },
        {
            caste: `Technician`, endurance: 0, strength: 0, agility: roll(3), accuracy: roll(3),
            intelligence: roll(8) + roll(8), perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(6) + roll(6)} Tech`], skillSetRolls: [`${roll(2)} Educated`, `${roll(3)} Misc`]
        },
        {
            caste: `Street Urchin`, endurance: -roll(6), strength: -roll(3), agility: roll(10),
            accuracy: roll(6), intelligence: 0, perception: 0, willpower: 0, appearance: -roll(6),
            outfitting: `IM`, automaticSkills: [`Brawling ${roll(3)} `], skillSetRolls: [`${roll(3) + 1} Criminal`, `1 Misc`]
        },
        {
            caste: `Street Thug`, endurance: roll(6) + roll(6), strength: roll(6) + roll(6), agility: 0, accuracy: 0,
            intelligence: -roll(6), perception: 0, willpower: 0, appearance: -roll(6), outfitting: "PR",
            automaticSkills: [`Brawling ${roll(4)}`], skillSetRolls: [`2 Criminal`, `2 Warrior`, `1 Misc`]
        },
        {
            caste: `Raider`, endurance: roll(10), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: "PR",
            automaticSkills: [`Rider ${roll(3)}`], skillSetRolls: [`2 Criminal`, `2 Warrior`, `1 Misc`]
        },
        {
            caste: `Pirate`, endurance: roll(10), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: "PR",
            automaticSkills: [`Navigate by Stars`], skillSetRolls: [`2 Criminal`, `2 Warrior`, `1 Misc`]
        },
        {
            caste: `Thief`, endurance: -roll(3), strength: -roll(3), agility: roll(12),
            accuracy: roll(8), intelligence: 0, perception: 0, willpower: 0, appearance: 0,
            outfitting: `IM`, automaticSkills: [`Brawling`], skillSetRolls: [`${roll(3) + 4} Criminal`, `1 Misc`]
        },
        {
            caste: `Assassin`, endurance: roll(6), strength: roll(6) + roll(6), agility: roll(10),
            accuracy: roll(10), intelligence: 0, perception: roll(10), willpower: 0, appearance: 0,
            outfitting: `FA`, automaticSkills: [`Martial Arts ${roll(4)}`, `Knife throwing ${roll(3)}`],
            skillSetRolls: [`${roll(3)} Criminal`, `${roll(6)} Warrior`, `1 Misc`]
        },
        {
            caste: `Draftee`, endurance: roll(3), strength: roll(3), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `MO`,
            automaticSkills: [], skillSetRolls: [`1 Warrior`, `${roll(2)} Misc`]
        },
        {
            caste: `Militia Soldier`, endurance: roll(6), strength: roll(6), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `MO`,
            automaticSkills: [], skillSetRolls: [`${roll(3)} Warrior`, `${roll(2)} Misc`]
        },
        {
            caste: `Watchman`, endurance: roll(6), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: roll(6), willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(3)} Brawling`], skillSetRolls: [`${roll(3)} Warrior`, `${roll(2)} Misc`]
        },
        {
            caste: `Infantryman`, endurance: roll(12), strength: roll(12), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [], skillSetRolls: [`${roll(6)} Warrior`, `${roll(2)} Misc`]
        },
        {
            caste: `Calvary`, endurance: roll(10), strength: roll(12), agility: roll(3), accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`Riding ${roll(6)}`], skillSetRolls: [`${roll(4)} Warrior`, `${roll(2)} Misc`]
        },
        {
            caste: `Mercenary`, endurance: roll(10), strength: roll(10), agility: roll(6), accuracy: roll(6),
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`Brawling ${roll(3)}`], skillSetRolls: [`${roll(6)} Warrior`, `${roll(4)} Misc`]
        },
        {
            caste: `Elite Soldier`, endurance: roll(8) + roll(8), strength: roll(8) + roll(8), agility: roll(8), accuracy: roll(8),
            intelligence: 0, perception: 0, willpower: roll(8), appearance: 0, outfitting: `WE`,
            automaticSkills: [`Brawling ${roll(4)}`], skillSetRolls: [`${roll(6) + 4} Warrior`, `${roll(4)} Misc`]
        }
    ]
} 