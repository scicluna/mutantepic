'use client'
import { generateCharacter } from "@/utils/generateChar"
import { FormEvent, useState } from "react"
export default function Form() {
    const [name, setName] = useState('')

    function createCharacter(e: FormEvent) {
        e.preventDefault()
        const preprocessedHero = generateCharacter()
        let formattedHero = ''

        formattedHero += `Name:${name} \n`
        formattedHero += `Race: ${preprocessedHero.race} \n`
        formattedHero += `Caste: ${preprocessedHero.caste} \n`
        preprocessedHero.beastType ? formattedHero += `Beast Type: ${preprocessedHero.beastType} \n` : null
        formattedHero += `Age:${preprocessedHero.age} \n`
        formattedHero += `Sex:${preprocessedHero.sex} \n`
        formattedHero += `\n`
        formattedHero += `DV: 0 + AgiMod + Armor + Dodge + Implants + Mutations \n`
        formattedHero += `SV: 0 + AccMod + Weapon Expert + Implants + Mutations + Weapon + Skills \n`
        formattedHero += `Damage: Weapons/Skills/Mutations/Implants \n`
        formattedHero += `\n`
        formattedHero += `Endurance: ${preprocessedHero.endurance.reduce((a, b) => a + b)}\n`
        formattedHero += `Strength: ${preprocessedHero.strength.reduce((a, b) => a + b)}\n`
        formattedHero += `Agility: ${preprocessedHero.agility.reduce((a, b) => a + b)}\n`
        formattedHero += `Accuracy: ${preprocessedHero.accuracy.reduce((a, b) => a + b)}\n`
        formattedHero += `Intelligence: ${preprocessedHero.intelligence.reduce((a, b) => a + b)}\n`
        formattedHero += `Perception: ${preprocessedHero.perception.reduce((a, b) => a + b)}\n`
        formattedHero += `Willpower: ${preprocessedHero.willpower.reduce((a, b) => a + b)}\n`
        formattedHero += `Appearance: ${preprocessedHero.appearance.reduce((a, b) => a + b)}\n`
        formattedHero += `\n`
        formattedHero += `Skills: ${preprocessedHero.automaticSkills.length > 0 ? `${preprocessedHero.automaticSkills.map(skill => ` ${skill}`)},` : ``} ${preprocessedHero.skillSetRolls.map(skill => ` ${skill}`)}\n`
        formattedHero += `Dominate hand: ${preprocessedHero.dominateHand}\n`
        formattedHero += `Swimming: ${preprocessedHero.swimming}\n`
        formattedHero += `Movement: ${preprocessedHero.movement}\n`
        formattedHero += `\n`
        preprocessedHero.primeMutations ? formattedHero += `Prime Mutations: ${preprocessedHero.primeMutations.map(mut => ` ${mut}`)}\n` : null
        preprocessedHero.minorMutations ? formattedHero += `Minor Mutations: ${preprocessedHero.minorMutations.map(mut => ` ${mut}`)}\n` : null
        preprocessedHero.flawMutations ? formattedHero += `Flaw Mutations: ${preprocessedHero.flawMutations.map(mut => ` ${mut}`)}\n` : null
        preprocessedHero.ghostMutations ? formattedHero += `Ghost Mutations: ${preprocessedHero.ghostMutations.map(mut => ` ${mut}`)}\n` : null
        preprocessedHero.implants ? formattedHero += `Implants: ${preprocessedHero.implants.map(implant => ` ${implant}`)}\n` : null
        formattedHero += `\n`
        formattedHero += `Misc Equipment: ${preprocessedHero.miscEquipment.map(equip => ` ${equip}`)}\n`
        formattedHero += `Weapon Equipment: ${preprocessedHero.wepsEquipment.map(equip => ` ${equip}`)}\n`
        formattedHero += `Armor Equipment: ${preprocessedHero.armorEquipment.map(equip => ` ${equip}`)}\n`

        const blob = new Blob([formattedHero], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}.txt`;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setName('')
    }

    return (
        <form className="w-full flex flex-col gap-2 justify-center items-center p-10" onSubmit={e => createCharacter(e)}>
            <input type="text" className="shadow-sm shadow-black p-1" value={name} onChange={e => setName(e.target.value)} placeholder="Name your champion..."></input>
            <button type="submit" className="bg-gray-200 p-2 rounded-md shadow-sm shadow-black hover:bg-gray-100">GENERATE</button>
        </form>
    )
}