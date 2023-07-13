import { roll } from "./castedetails";
export function weaponsTable() {
    return [
        { num: -2, result: `Club` },
        { num: -1, result: `Staff` },
        { num: 0, result: `Knife ${roll(10) <= 7 ? `and a sling with ${roll(10) + roll(10)} stones` : null}` },
        { num: 1, result: `Dagger ${roll(10) <= 5 ? `and a bow with ${roll(10) + 10} arrows` : null}` },
        { num: 2, result: `Hatchet ${roll(10) <= 4 ? `and a bow with ${10 + roll(10)} arrows` : null}` },
        { num: 3, result: `Machete ${roll(10) <= 6 ? `and a bow with ${10 + roll(10)} arrows` : null}` },
        { num: 4, result: `Dagger and a Javelin` },
        { num: 5, result: `Knife and a spear` },
        { num: 6, result: `Bow with ${10 + roll(10) + roll(10)} arrows, plus, a knife` },
        { num: 7, result: `Crossbow with ${10 + roll(10)} bolts and a dagger` },
        { num: 8, result: `Machete and knife` },
        { num: 9, result: `Saber and dagger` },
        { num: 10, result: `Longsword and dagger` },
        { num: 11, result: `Spear and machete, plus knife` },
        { num: 12, result: `Battle axe and dagger` },
        { num: 13, result: `Halberd and knife` },
        { num: 14, result: `Bow with ${2 * roll(10)} arrows and machete` },
        { num: 15, result: `Crossbow with ${2 * roll(10)} bolts plus a machete` },
        { num: 16, result: `Musket pistol with ${2 * roll(10)} shots, saber and dagger` },
        { num: 17, result: `Musket rifle with ${2 * roll(10)} shots, bayonet, machete and knife` },
        { num: 18, result: `2 musket pistols, ${2 * roll(10) + 5} shots each, rapier and dagger` },
        { num: 19, result: `Pistol Crossbow with ${10 + roll(10)} bolts, & re-roll d10 this table` },
        { num: 20, result: `Compound Bow with ${2 * roll(10) + 10} arrows, & re-roll d10 this table` },
        { num: 21, result: `Compound Crossbow, ${2 * roll(10) + 10} bolts & re-roll d10 this table` },
        { num: 22, result: `Shotgun Pistol, ${roll(10)} shells, & re-roll 2d10 this table` },
        { num: 23, result: `Pump Shotgun, ${roll(10)} shells, & re-roll 2d10 this table` },
        { num: 24, result: `Auto Pistol, ${2 * roll(10)} rounds, & re-roll 2d10 this table` },
        { num: 25, result: `Assault Rifle, ${3 * roll(10)} rounds, & re-roll 2d10 this table` }
    ];
}