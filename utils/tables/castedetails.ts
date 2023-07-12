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
            skillSetRolls: ["Misc"]
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
            automaticSkills: ["Erotic"],
            skillSetRolls: ["Arts"]
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
            skillSetRolls: `Misc ${roll(3)} rolls`
        },
        {
            caste: `Slave, Gladiator`,
            endurance: roll(2),
            strength: roll(2),
            agility: roll(8),
            accuracy: roll(8),
            intelligence: -roll(10),
            perception: roll(8),
            willpower: -roll(4),
            appearance: -roll(2),
            outfitting: "ESC",
            automaticSkills: `Brawling`,
            skillSetRolls: [`${roll(3)} Warrior`, `4 + ${roll(4)} rolls`]
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
            automaticSkills: [`Spear`],
            skillSetRolls: [`Weapons Expert`, `${roll(3)} Misc`]
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
            skillSetRolls: [`Misc.`]
        },
        {
            caste: `Miner`,
            endurance: roll(10),
            strength: roll(2),
            agility: 0,
            accuracy: 0,
            intelligence: 0,
            perception: 0,
            willpower: 0,
            appearance: -roll(6),
            outfitting: "PR",
            automaticSkills: [`Pickaxe Weapons Expert ${roll(3)}`],
            skillSetRolls: [`Misc.`]
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
            skillSetRolls: [`Misc.`]
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
            skillSetRolls: [`Misc.`]
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
            skillSetRolls: [`${roll(3)} Misc.`]
        },
        {
            caste: `Trader`,
            endurance: 0,
            strength: 0,
            agility: 0,
            accuracy: 0,
            intelligence: roll(2),
            perception: roll(10),
            willpower: 0,
            appearance: 0,
            outfitting: `WE`,
            automaticSkills: `Barter`,
            skillSetRolls: [`Misc.`, `${roll(3)} + 1 rolls`]
        },
        {
            caste: `Crafts person`,
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
            skillSetRolls: [`Misc.`, `${roll(3)} rolls`]
        },
        {
            caste: `Student`,
            endurance: -roll(6),
            strength: -roll(6),
            agility: 0,
            accuracy: 0,
            intelligence: roll(3),
            perception: 0,
            willpower: 0,
            appearance: roll(6),
            outfitting: 1,
            automaticSkills: [],
            skillSetRolls: [`Educated`, `${roll(6)} + 2 rolls`, `${roll(2)} Misc.`]
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
            skillSetRolls: [`Educated`, `${roll(3)} rolls`, `Misc.`]
        },
        {
            caste: `Technician`, endurance: 0, strength: 0, agility: roll(3), accuracy: roll(3),
            intelligence: roll(2), perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(6) + roll(6)} Tech skills`], skillSetRolls: [`Educated`, `${roll(2)} rolls `, `${roll(3)} Misc.`]
        },
        {
            caste: `Street Urchin`, endurance: -roll(6), strength: -roll(3), agility: roll(10),
            accuracy: roll(6), intelligence: 0, perception: 0, willpower: 0, appearance: -roll(6),
            outfitting: `IM`, automaticSkills: [`Brawling`], skillSetRolls: [`${roll(3)} Criminal`, `${roll(3)} + 1 rolls`, `Misc.`]
        },
        {
            caste: `Street Thug`, endurance: roll(2), strength: roll(2), agility: 0, accuracy: 0,
            intelligence: -roll(6), perception: 0, willpower: 0, appearance: -roll(6), outfitting: "PR",
            automaticSkills: [`Brawling ${roll(4)}`], skillSetRolls: [` Criminal 2`, `Warrior 2`, `Misc.`]
        },
        {
            caste: `Raider`, endurance: roll(10), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: "PR",
            automaticSkills: `Rider ${roll(3)}`, skillSetRolls: [`Criminal 2`, `Warrior 2`, `Misc.`]
        },
        {
            caste: `Pirate`, endurance: roll(10), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: "PR",
            automaticSkills: [`Navigate by Stars`], skillSetRolls: [`Criminal 2`, `Warrior 2`, `Misc.`]
        },
        {
            caste: `Thief`, endurance: -roll(3), strength: -roll(3), agility: roll(12),
            accuracy: roll(8), intelligence: 0, perception: 0, willpower: 0, appearance: 0,
            outfitting: `IM`, automaticSkills: [`Brawling`], skillSetRolls: [`Criminal`, `${roll(3)} + 4 rolls`, `Misc.`]
        },
        {
            caste: `Assassin`, endurance: roll(6), strength: roll(2), agility: roll(10),
            accuracy: roll(10), intelligence: 0, perception: roll(10), willpower: 0, appearance: 0,
            outfitting: `FA`, automaticSkills: [`Martial Arts ${roll(4)}`, `Knife throwing ${roll(3)}`],
            skillSetRolls: [`Criminal ${roll(3)}`, `Warrior ${roll(6)}`, `Misc.`]
        },
        {
            caste: `Draftee`, endurance: roll(3), strength: roll(3), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `MO`,
            automaticSkills: [], skillSetRolls: [`Warrior 1`, `${roll(2)} Misc.`]
        },
        {
            caste: `Militia Soldier`, endurance: roll(6), strength: roll(6), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `MO`,
            automaticSkills: [], skillSetRolls: [`Warrior ${roll(3)}`, `${roll(2)} Misc.`]
        },
        {
            caste: `Watchman`, endurance: roll(6), strength: roll(10), agility: 0, accuracy: 0,
            intelligence: 0, perception: roll(6), willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(3)} Brawling`], skillSetRolls: [`Warrior ${roll(3)}`, `${roll(2)} Misc.`]
        },
        {
            caste: `Infantryman`, endurance: roll(12), strength: roll(12), agility: 0, accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [], skillSetRolls: [`Warrior ${roll(6)}`, `${roll(2)} Misc.`]
        },
        {
            caste: `Calvary`, endurance: roll(10), strength: roll(12), agility: roll(3), accuracy: 0,
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(6)} Riding`], skillSetRolls: [`Warrior ${roll(4)}`, `${roll(2)} Misc.`]
        },
        {
            caste: `Mercenary`, endurance: roll(10), strength: roll(10), agility: roll(6), accuracy: roll(6),
            intelligence: 0, perception: 0, willpower: 0, appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(3)} Brawling`], skillSetRolls: [`Warrior ${roll(6)}`, `${roll(4)} Misc.`]
        },
        {
            caste: `Elite Soldier`, endurance: roll(2), strength: roll(2), agility: roll(8), accuracy: roll(8),
            intelligence: 0, perception: 0, willpower: roll(8), appearance: 0, outfitting: `WE`,
            automaticSkills: [`${roll(4)} Brawling`], skillSetRolls: [`Warrior ${roll(6)} + 4`, `${roll(4)} Misc.`]
        }
    ]
} 