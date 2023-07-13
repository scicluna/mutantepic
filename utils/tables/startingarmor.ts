import { roll } from "./castedetails";
export function armorTable() {
    return [
        { num: -3, result: `No armor, only filthy rags` },
        { num: -2, result: `Flea ridden furs` },
        { num: -1, result: `Tattered hides` },
        { num: 0, result: `Animals skins, moth eaten` },
        { num: 1, result: `Leather jacket ${roll(10) <= 4 ? `and a wicker shield` : ''} ${roll(10) <= 3 ? `and a leather helmet` : ''}` },
        { num: 2, result: `Leather armor ${roll(10) <= 5 ? `and a buckler (shield)` : ''} ${roll(10) <= 5 ? `and an iron cap helmet` : ''}` },
        { num: 3, result: `Animals skins, moth eaten` },
        { num: 4, result: `Leather jacket, ${roll(10) <= 4 ? `a wicker shield,` : ''} ${roll(10) <= 3 ? `and a leather helmet` : ''}` },
        { num: 5, result: `Leather armor, ${roll(10) <= 5 ? `a buckler (shield),` : ''} ${roll(10) <= 5 ? `and an iron cap helmet` : ''}` },
        { num: 6, result: `Leather armor ${roll(10) <= 7 ? `and a leather shield,` : ''} ${roll(10) <= 6 ? `and an iron helmet` : ''}` },
        { num: 7, result: `Heavy leather armor ${roll(10) <= 6 ? `with a standard shield` : ''} ${roll(10) <= 5 ? `and an iron helmet` : ''}` },
        { num: 8, result: `Studded leather armor and an iron helmet` },
        { num: 9, result: `Leather armor, ${roll(10) <= 4 ? `a breast plate,` : ''} ${roll(10) <= 7 ? `and an iron helmet` : ''}` },
        { num: 10, result: `Junk armor, ${roll(10) <= 4 ? `a junk Shield,` : ''} ${roll(10) <= 7 ? `and a junk helmet` : ''}` },
        { num: 11, result: `Heavy junk armor ${roll(10) <= 8 ? `and a junk helmet` : ''}` },
        { num: 12, result: `Heavy leather ${roll(10) <= 4 ? `with a chainmail vest over top,` : ''} ${roll(10) <= 5 ? `and an iron helmet` : ''}` },
        { num: 13, result: `Junk armor ${roll(10) <= 3 ? `with a breastplate over top,` : ''} ${roll(10) <= 6 ? `and a full iron helmet` : ''}` },
        { num: 14, result: `Part plate armor, ${roll(10) <= 4 ? `a standard shield,` : ''} ${roll(10) <= 5 ? `and a full iron helmet` : ''}` },
        { num: 15, result: `Sports padding ${roll(10) <= 7 ? `and a sports helmet` : ''}` },
        { num: 16, result: `Scrap relic ${roll(10) <= 5 ? `and an iron helmet` : ''}` },
        { num: 17, result: `Scrap relic ${roll(10) <= 6 ? `and an army helmet` : ''}` },
        { num: 18, result: `Heavy junk armor ${roll(10) <= 6 ? `with a full iron helmet,` : ''} ${roll(10) <= 4 ? `and a junk shield` : ''}` },
        { num: 19, result: `Part plate armor ${roll(10) <= 8 ? `with a riot shield,` : ''} ${roll(10) <= 7 ? `and an iron helmet` : ''}` },
        { num: 20, result: `Heavy junk armor ${roll(10) <= 5 ? `with an army helmet,` : ''} ${roll(10) <= 4 ? `and a bladed shield` : ''}` },
        { num: 21, result: `Scrap relic ${roll(10) <= 8 ? `with an army helmet,` : ''} ${roll(10) <= 3 ? `and a riot shield` : ''}` },
        { num: 22, result: `Scrap relic ${roll(10) <= 6 ? `and a riot helmet` : ''}` },
        { num: 23, result: `Riot armor ${roll(10) <= 7 ? `with an army helmet,` : ''} ${roll(10) <= 4 ? `and a ballistic shield` : ''}` },
        { num: 24, result: `Riot armor ${roll(10) <= 6 ? `with a riot helmet,` : ''} ${roll(10) <= 3 ? `and a riot shield` : ''}` },
        { num: 25, result: `Tactical armor ${roll(10) <= 7 ? `and a tactical helmet` : ''}` }
    ];
}
