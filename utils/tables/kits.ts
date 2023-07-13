import { genericTable, minMaxTable } from "../minmaxtable"
import { roll } from "./castedetails"
import { armorTable } from "./startingarmor"
import { weaponsTable } from "./startingarms"
export function escKitTable(): genericTable[] {
    return [
        { min: 1, max: 3, value: `flute` },
        { min: 4, max: 7, value: `poncho` },
        { min: 8, max: 13, value: `tinder box` },
        { min: 14, max: 18, value: `water skin, half full` },
        { min: 19, max: 19, value: `water skin, half full of wine` },
        { min: 20, max: 22, value: `small sack full of dried meat` },
        { min: 23, max: 25, value: `small sack full of moldy bread and cheese` },
        { min: 26, max: 28, value: `a dead rat` },
        { min: 29, max: 35, value: `knife` },
        { min: 36, max: 41, value: `dagger` },
        { min: 42, max: 44, value: `candle` },
        { min: 45, max: 47, value: `wool blanket` },
        { min: 48, max: 50, value: `shovel` },
        { min: 51, max: 56, value: `pickaxe` },
        { min: 57, max: 60, value: `${roll(6)} days dried rations` },
        { min: 61, max: 69, value: `cloak` },
        { min: 70, max: 75, value: `chain, ${roll(6)} meters` },
        { min: 76, max: 82, value: `pitchfork` },
        { min: 83, max: 85, value: `stinky fur cloak` },
        { min: 86, max: 88, value: `${roll(6)} silver coins` },
        { min: 89, max: 91, value: `shotgun shell` },
        { min: 92, max: 96, value: `regular round of pistol ammo` },
        { min: 97, max: 97, value: `power cell, d100% full` },
        { min: 98, max: 100, value: `saddle horse, bare back, stolen` }
    ]
}

function faKitTable(): genericTable[] {
    return [
        { min: 1, max: 7, value: `shotgun pistol with ${roll(6) + roll(6)} shotgun shells & ${roll(3)} slugs` },
        { min: 8, max: 11, value: `compound bow, and full quiver of 20 arrows` },
        { min: 12, max: 15, value: `compound crossbow, and full case of 24 quarrels` },
        { min: 16, max: 20, value: `pistol crossbow, and full case of 24 quarrels` },
        { min: 21, max: 24, value: `.22 Caliber pistol, two magazines and ${20 + roll(20) + roll(20)} rounds of ammo` },
        { min: 25, max: 28, value: `.22 Caliber sporting rifle with two magazines and ${roll(20) + 10} ammo` },
        { min: 29, max: 33, value: `.22 caliber semi-auto rifle with two 30 rnd mags, ${roll(20) + 20} ammo` },
        { min: 34, max: 34, value: `sniper rifle without scope, ${roll(6) + roll(6)} HC rifle rounds` },
        { min: 35, max: 42, value: `pump shotgun, with ${roll(6) + roll(6)} shotgun shells` },
        { min: 43, max: 47, value: `wrist gun, with ${roll(10) + roll(10)} pistol rounds` },
        { min: 48, max: 50, value: `stun stick, mini power cell has ${roll(20) + roll(20) + 10} rounds remaining` },
        { min: 51, max: 59, value: `assault rifle, with ${roll(10) + roll(10)} rifle rounds, , ${roll(100) <= 11 && `11% chance of ${roll(6)} armor piercing rounds.`}` },
        { min: 60, max: 73, value: `pocket pistol, with ${roll(10) + roll(10) + roll(10)} pistol rounds, ${roll(100) <= 43 ? 'spare clip' : null}` },
        { min: 74, max: 85, value: `auto pistol, with ${roll(10) + roll(10)} pistol rounds, ${roll(100) <= 58 ? 'spare clip' : null}` },
        { min: 86, max: 89, value: `sub-machine gun, with ${roll(10) + roll(10)} pistol rounds, ${roll(100) <= 49 ? 'spare clip' : null}` },
        { min: 90, max: 97, value: `survival rifle, with ${roll(10) + roll(10)} rifle rounds, ${roll(100) <= 26 ? 'spare clip' : null}` },
        { min: 98, max: 100, value: `laser carbine, power cell has ${roll(10) + roll(10)} shots left` }
    ]

}
export function escKit() {
    const misc = [minMaxTable(escKitTable())] as string[]

    const wepsScore = roll(10) - 4
    const armorScore = roll(10) - 4

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function imKit() {
    const misc = [`${roll(100) < 64 ? `${roll(100) + roll(100) + roll(100)}sp debt with ${roll(6) + roll(6)} months to pay off (or else)` : null}`,
        `Clothing is washed up, torn rags`, `${Math.max(roll(10) - 3, 0)}sp in a tattered belt pouch`, `Tinder box`, `${roll(6)} torches`,
    `${roll(2) === 2 ? `lantern with ${roll(100)}ml oil` : null}`, `Wooden spoon`, `Woolen blanket`, `Sack`, `Backpack`, `${roll(6) + 1} meters of rope`,
        `sandals`, `${roll(10) + roll(10)} days of dried rations`]

    const wepsScore = roll(10) - 1
    const armorScore = roll(10) - 1

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function prKit() {
    const misc = [`${roll(100) <= 50 && `${roll(10) + roll(10)}sp debt`}`,
    `${roll(10) + roll(10)}sp`, `tinder box`, `${roll(6) + roll(6)} torches`, `${roll(6) + roll(6)} candles`, 'cutlery set', 'full water skin (2L water)',
        `summer sleeping bag`, `coin pouch`, `backpack`, `${roll(8) + 2}m of rope`, `sewing kit`, `whetstone`, `shovel`, `work boots & work gloves`,
        `poncho`, `cotton pants and shirt`, `${roll(10) + roll(10) + roll(10) + 3} days of dried rations`]

    const wepsScore = roll(10) + 1
    const armorScore = roll(10) + 1

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function moKit() {
    const misc = [`${roll(10) + roll(10) + roll(10) + 10}sp`, `full lantern and bottle of oil`, `winter sleeping bag`, `hip sack`, `fishing gear`,
        `2 person tent`, `crowbar`, `pickaxe`, `soap`, `towel`, `toothbrush`, `wool coat with hood`, `wool pants and shirt`, `playing cards`,
        `bone dice`, `${roll(100) <= 11 ? 'well trained and obedient farm dog whos the goodest of boys' : null}`, `${roll(100) <= 15 ? 'inherited relic weapon from classification WC-RC' : null}`,
    `${roll(10) + roll(10)} sp`, `tinder box`, `${roll(6) + roll(6)} torches`, `${roll(6) + roll(6)} candles`, 'cutlery set', 'full water skin (2L water)',
        `summer sleeping bag`, `coin pouch`, `backpack`, `${roll(8) + 2}m of rope`, `sewing kit`, `whetstone`, `shovel`, `work boots & work gloves`,
        `poncho`, `cotton pants and shirt`, `${roll(10) + roll(10) + roll(10) + 3} days of dried rations`]

    const wepsScore = roll(10) + 4
    const armorScore = roll(10) + 4

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function weKit() {
    const misc = [`${roll(100) + roll(100)} sp`, `${roll(100) <= 19 ? 'well trained and obedient farm dog whos the goodest of boys' : null} `,
    `${roll(100) <= 74 ? 'inherited relic weapon from classification WC-R' : null} `, `${roll(100) <= 26 ? 'inherited relic weapon from classification WC-RC' : null} `,
    `${roll(100) <= 29 && roll(6) <= 4 ? 'saddle horse' : 'riding dog'}`, `${roll(10) + roll(10) + roll(10) + 10}sp`, `full lantern and bottle of oil`, `winter sleeping bag`, `hip sack`, `fishing gear`,
        `2 person tent`, `crowbar`, `pickaxe`, `soap`, `towel`, `toothbrush`, `wool coat with hood`, `wool pants and shirt`, `playing cards`,
        `bone dice`, `${roll(10) + roll(10)} sp`, `tinder box`, `${roll(6) + roll(6)} torches`, `${roll(6) + roll(6)} candles`, 'cutlery set', 'full water skin (2L water)',
        `summer sleeping bag`, `coin pouch`, `backpack`, `${roll(8) + 2}m of rope`, `sewing kit`, `whetstone`, `shovel`, `work boots & work gloves`,
        `poncho`, `cotton pants and shirt`, `${roll(10) + roll(10) + roll(10) + 3} days of dried rations`]

    const wepsScore = roll(10) + 6
    const armorScore = roll(10) + 6

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function faKit() {
    const misc = [`${roll(100) + 100} sp`, `${roll(12) + roll(12)}gp`, `${roll(100) <= 19 ? 'well trained and obedient farm dog whos the goodest of boys' : null} `,
    `${roll(100) <= 74 ? 'inherited relic weapon from classification WC-R' : null} `, `${roll(100) <= 26 ? 'inherited relic weapon from classification WC-RC' : null} `,
    `${roll(100) <= 77 && roll(6) <= 4 ? 'saddle horse' : 'riding dog'}`, `${roll(10) + roll(10) + roll(10) + 10}sp`, `full lantern and bottle of oil`, `winter sleeping bag`, `hip sack`, `fishing gear`,
        `2 person tent`, `crowbar`, `pickaxe`, `soap`, `towel`, `toothbrush`, `wool coat with hood`, `wool pants and shirt`, `playing cards`,
        `bone dice`, `${roll(10) + roll(10)} sp`, `tinder box`, `${roll(6) + roll(6)} torches`, `${roll(6) + roll(6)} candles`, 'cutlery set', 'full water skin (2L water)',
        `summer sleeping bag`, `coin pouch`, `backpack`, `${roll(8) + 2}m of rope`, `sewing kit`, `whetstone`, `shovel`, `work boots & work gloves`,
        `poncho`, `cotton pants and shirt`, `${roll(10) + roll(10) + roll(10) + 3} days of dried rations`]
    const wepsScore = roll(10) + 10
    const armorScore = roll(10) + 10

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result, minMaxTable(faKitTable()) as string], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}

export function waKit() {
    const misc = [`${roll(1000) + roll(1000)} sp`, `${roll(100)}gp`, `${roll(1000) + roll(1000)}sp worth of jewelery`, `${roll(100) <= 26 ? 'well trained and obedient farm dog whos the goodest of boys' : null} `,
    `${roll(100) <= 100 ? 'inherited relic weapon from classification WC-R' : null} `, `${roll(100) <= 76 ? 'inherited relic weapon from classification WC-RC' : null} `,
    `${roll(100) <= 89 && roll(6) <= 4 ? 'saddle horse' : 'riding dog'}`, `${roll(10) + roll(10) + roll(10) + 10}sp`, `full lantern and bottle of oil`, `winter sleeping bag`, `hip sack`, `fishing gear`,
        `2 person tent`, `crowbar`, `pickaxe`, `soap`, `towel`, `toothbrush`, `wool coat with hood`, `wool pants and shirt`, `playing cards`,
        `bone dice`, `${roll(10) + roll(10)} sp`, `tinder box`, `${roll(6) + roll(6)} torches`, `${roll(6) + roll(6)} candles`, 'cutlery set', 'full water skin (2L water)',
        `summer sleeping bag`, `coin pouch`, `backpack`, `${roll(8) + 2}m of rope`, `sewing kit`, `whetstone`, `shovel`, `work boots & work gloves`,
        `poncho`, `cotton pants and shirt`, `${roll(10) + roll(10) + roll(10) + 3} days of dried rations`, `wine skin filled with superb wine`, `screw driver set`, `writing kit`, `${roll(100) <= 75 && `an estate with ${roll(6) + roll(6)} sharecroppers`}`,
    `${roll(3000)}sp in the bank at home`, `${roll(100) <= 63 && `support staff at home consisting of ${roll(6) + 2} militiamen, ${roll(4)} servant girls, ${roll(4)} servant boys, a scribe, a personal cook, and a household master.`}`]
    const wepsScore = roll(10) + 15
    const armorScore = roll(10) + 15

    const weaponPack = weaponsTable().find(weapon => weapon.num === wepsScore)
    const armorPack = armorTable().find(armor => armor.num === armorScore)

    if (weaponPack?.result && armorPack?.result && misc) {
        return { wepsEquipment: [weaponPack.result], armorEquipment: [armorPack.result], miscEquipment: misc }
    }
    return { wepsEquipment: [], armorEquipment: [], miscEquipment: [] }
}
