import { character } from "@/mockup";
import { boolRoll, minMaxTable, minMaxTableBonus } from "./minmaxtable";
import { characterType } from "./tables/charactertype";
import { cloneTraits } from "./tables/clonetraits";
import { bioreplicaTraits } from "./tables/bioreplicatraits";
import { traitValue } from "./tables/traitvalue";
import { battleBioreplicaCaste, bestialHumanCaste, clericalBioreplicaCaste, comfortCloneCaste, cyborgCaste, ghostMutantCaste, humanCaste, industrialBioreplicaCaste, infiltrationBioreplicaCaste, laborCloneCaste, militaryCloneCaste, mutantCaste, pleasureBioreplicaCaste, transHumanCaste } from "./tables/castes";
import { casteDetail, roll } from "./tables/castedetails";
import { criminalSkillSets, educatedSkillSets, miscSkillSets, warriorSkillSets } from "./tables/skillsets";
import { skillGenerator } from "./skillGen";
import { sex } from "./tables/sex";
import { dominateHand } from "./tables/dominanthand";
import { swimmingSkill } from "./tables/swimskill";
import { Bonus, pureStockBonus } from "./tables/purestockbonus";
import { defensiveImplants, miscellaneousImplants, offensiveImplants } from "./tables/implants";
import { degreeOfMutation } from "./tables/degreeofmutation";
import { primeMutations } from "./tables/primemutations";
import { minorMutations } from "./tables/minormutations";
import { flaws } from "./tables/flaws";
import { ghostMutations } from "./tables/ghostmutations";
import { ghostMutationTraits } from "./tables/ghostmutanttraits";
import { bestialHumanTraits } from "./tables/bestialhumantraits";
import { bestialHumanType } from "./tables/bestialhumantype";
import { escKit, faKit, imKit, moKit, prKit, waKit, weKit } from "./tables/kits";

type CloneTrait = 'Military' | 'Labor' | 'Comfort'
type BioTrait = 'Pleasure' | 'Industrial' | 'Clerical' | 'Infiltration' | 'Battle'

export function generateCharacter() {
    const charType = minMaxTable(characterType) as string

    let traits: { endurance: number, strength: number, agility: number, accuracy: number, intelligence: number, perception: number, willpower: number, appearance: number } = { endurance: 0, strength: 0, agility: 0, accuracy: 0, perception: 0, intelligence: 0, willpower: 0, appearance: 0 }
    if (charType.includes("Clone")) {
        const cloneType = charType.split(' ')[1] as CloneTrait
        traits = cloneTraits()[cloneType]
    } else if (charType.includes("Bioreplica")) {
        const bioType = charType.split(' ')[1] as BioTrait
        traits = bioreplicaTraits()[bioType]
    } else {
        const endurance = minMaxTable(traitValue()) as number
        const strength = minMaxTable(traitValue()) as number
        const agility = minMaxTable(traitValue()) as number
        const accuracy = minMaxTable(traitValue()) as number
        const intelligence = minMaxTable(traitValue()) as number
        const perception = minMaxTable(traitValue()) as number
        const willpower = minMaxTable(traitValue()) as number
        const appearance = minMaxTable(traitValue()) as number
        traits = { endurance, strength, agility, accuracy, intelligence, perception, willpower, appearance }
    }

    let caste = ''
    switch (charType) {
        case "Pure Stock Human": caste = minMaxTable(humanCaste) as string
            break;
        case "Clone, Comfort": caste = minMaxTable(comfortCloneCaste) as string
            break;
        case "Clone, Labor": caste = minMaxTable(laborCloneCaste) as string
            break;
        case "Clone, Military": caste = minMaxTable(militaryCloneCaste) as string
            break;
        case "Bioreplica, Pleasure": caste = minMaxTable(pleasureBioreplicaCaste) as string
            break;
        case "Bioreplica, Industrial": caste = minMaxTable(industrialBioreplicaCaste) as string
            break;
        case "Bioreplica, Clerical": caste = minMaxTable(clericalBioreplicaCaste) as string
            break;
        case "Bioreplica, Infiltration": caste = minMaxTable(infiltrationBioreplicaCaste) as string
            break;
        case "Bioreplica, Battle": caste = minMaxTable(battleBioreplicaCaste) as string
            break;
        case "Trans-Human": caste = minMaxTable(transHumanCaste) as string
            break;
        case "Cyborg": caste = minMaxTable(cyborgCaste) as string
            break;
        case "Bestial Human": caste = minMaxTable(bestialHumanCaste) as string
            break;
        case "Ghost Mutant": caste = minMaxTable(ghostMutantCaste) as string
            break;
        case "Mutant, Mild": caste = minMaxTable(mutantCaste) as string
            break;
        case "Mutant, Typical": caste = minMaxTable(mutantCaste) as string
            break;
        case "Mutant, Severe": caste = minMaxTable(mutantCaste) as string
            break;
        case "Mutant, Freakish Horror": caste = minMaxTable(mutantCaste) as string
            break;
        default: console.log(charType, 'TYPE MISSING')
    }
    let casteTraits = casteDetail().find(individualCaste => individualCaste.caste === caste)!

    const skillsArray: string[] = []
    if (casteTraits) {
        const criminalSkills = casteTraits.skillSetRolls.findIndex(skill => skill.includes("Criminal"))
        const warriorSkills = casteTraits.skillSetRolls.findIndex(skill => skill.includes("Warrior"))
        const educatedSkills = casteTraits.skillSetRolls.findIndex(skill => skill.includes("Educated"))
        const miscSkills = casteTraits.skillSetRolls.findIndex(skill => skill.includes("Misc"))

        if (criminalSkills > -1) {
            skillGenerator(casteTraits.skillSetRolls[criminalSkills], criminalSkillSets, skillsArray)
        }
        if (warriorSkills > -1) {
            skillGenerator(casteTraits.skillSetRolls[warriorSkills], warriorSkillSets, skillsArray)
        }
        if (educatedSkills > -1) {
            skillGenerator(casteTraits.skillSetRolls[educatedSkills], educatedSkillSets, skillsArray)
        }
        if (miscSkills > -1) {
            skillGenerator(casteTraits.skillSetRolls[miscSkills], miscSkillSets, skillsArray)
        }
        casteTraits.skillSetRolls = skillsArray
    }
    const characterSex = minMaxTable(sex) as string
    const characterHanded = minMaxTable(dominateHand) as string
    const characterSwimming = minMaxTable(swimmingSkill) as string

    const Character: character = {
        name: '',
        age: roll(8) + 17,
        sex: characterSex,
        race: charType,
        caste: caste,
        endurance: [traits.endurance, casteTraits.endurance],
        strength: [traits.strength, casteTraits.strength],
        agility: [traits.agility, casteTraits.agility],
        accuracy: [traits.accuracy, casteTraits.accuracy],
        perception: [traits.perception, casteTraits.perception],
        intelligence: [traits.intelligence, casteTraits.intelligence],
        willpower: [traits.willpower, casteTraits.willpower],
        appearance: [traits.appearance, casteTraits.appearance],
        automaticSkills: casteTraits.automaticSkills,
        skillSetRolls: casteTraits.skillSetRolls,
        dominateHand: characterHanded,
        swimming: characterSwimming,
        movement: '6m',
        outfitting: casteTraits.outfitting as string,
        wepsEquipment: [],
        armorEquipment: [],
        miscEquipment: []
    }

    //any other way to do this while maintaining type safety?
    if (charType === "Pure Stock Human") {
        const bonus: Bonus = minMaxTableBonus(pureStockBonus())
        if (bonus.value?.endurance) {
            Character.endurance.push(bonus.value.endurance)
        }
        if (bonus.value?.strength) {
            Character.strength.push(bonus.value.strength)
        }
        if (bonus.value?.agility) {
            Character.agility.push(bonus.value.agility)
        }
        if (bonus.value?.accuracy) {
            Character.accuracy.push(bonus.value.accuracy)
        }
        if (bonus.value?.intelligence) {
            Character.intelligence.push(bonus.value.intelligence)
        }
        if (bonus.value?.willpower) {
            Character.willpower.push(bonus.value.willpower)
        }
        if (bonus.value?.appearance) {
            Character.appearance.push(bonus.value.appearance)
        }
        if (bonus.value?.automaticSkill) {
            Character.automaticSkills.push(bonus.value.automaticSkill)
        }
    }

    if (charType === "Cyborg") {
        const offensives = roll(2)
        const defensives = roll(2)
        const miscellaneous = roll(3)

        const implants = []
        for (let i = 0; i < offensives; i++) {
            const implant = minMaxTable(offensiveImplants) as string
            implants.push(implant)
        }
        for (let i = 0; i < defensives; i++) {
            const implant = minMaxTable(defensiveImplants) as string
            implants.push(implant)
        }
        for (let i = 0; i < miscellaneous; i++) {
            const implant = minMaxTable(miscellaneousImplants) as string
            implants.push(implant)
        }
        Character.implants = implants
    }

    if (charType.includes('Mutant') && !charType.includes('Ghost')) {
        const mutantType = charType.split(' ')[1] as 'Mild' | 'Typical' | 'Severe' | 'Freakish'
        const mutations = degreeOfMutation()[mutantType].split(',')

        const primeNo = mutations[0].split(' ')[0]
        const minorNo = mutations[1].split(' ')[0]
        const flawNo = mutations[2].split(' ')[0]

        const primeMutationList: string[] = []
        for (let i = 0; i < parseInt(primeNo); i++) {
            const randomMutation = minMaxTable(primeMutations) as string
            primeMutationList.push(randomMutation)

            Character.primeMutations = primeMutationList

            const minorMutationList: string[] = []
            for (let i = 0; i < parseInt(minorNo); i++) {
                const randomMutation = minMaxTable(minorMutations) as string
                minorMutationList.push(randomMutation)
            }
            Character.minorMutations = minorMutationList

            const flawList: string[] = []
            for (let i = 0; i < parseInt(flawNo); i++) {
                const randomMutation = minMaxTable(flaws) as string
                flawList.push(randomMutation)
            }
            Character.flawMutations = flawList
        }
    }

    if (charType === "Ghost Mutant") {
        const ghostNo = minMaxTable(ghostMutationTraits()) as number
        const ghostMutationList: string[] = []
        for (let i = 0; i < ghostNo; i++) {
            const mut = minMaxTable(ghostMutations) as string
            ghostMutationList.push(mut)
        }
        Character.ghostMutations = ghostMutationList
    }

    if (charType == "Bestial Human") {
        const isMutated = boolRoll(100, 33)
        if (isMutated) {
            const primeNo = roll(3)
            const minorNo = roll(2)
            const flawNo = boolRoll(100, 10) ? 0 : 1
            const primeMutationList: string[] = []
            for (let i = 0; i < primeNo; i++) {
                const randomMutation = minMaxTable(primeMutations) as string
                primeMutationList.push(randomMutation)

                Character.primeMutations = primeMutationList

                const minorMutationList: string[] = []
                for (let i = 0; i < minorNo; i++) {
                    const randomMutation = minMaxTable(minorMutations) as string
                    minorMutationList.push(randomMutation)
                }
                Character.minorMutations = minorMutationList

                const flawList: string[] = []
                for (let i = 0; i < flawNo; i++) {
                    const randomMutation = minMaxTable(flaws) as string
                    flawList.push(randomMutation)
                }
                if (flawList.length > 0) {
                    Character.flawMutations = flawList
                }
            }
        }
        const beastDict = bestialHumanTraits()
        const beastType = minMaxTable(bestialHumanType) as 'Alligator' | 'Armadillo' | 'Badger' | 'Bear' | 'Bobcat' | 'Chimp' | 'Cockroach' | 'Cougar' | 'Cow' | 'Coyote' | 'Crow' | 'Deer' | 'Cat' | 'Dog' | 'Eagle' | 'Elk' | 'Fox' | 'Frog' | 'Horse' | 'Jaguar' | 'Moose' | 'Mouse' | 'Otter' | 'Pig' | 'Mantis' | 'Raccoon' | 'Rat' | 'Rattlesnake' | 'Scorpion' | 'Turtle' | 'Spider' | 'Wolf' | 'Wolverine';
        const beastTrait = beastDict[beastType]
        Character.beastType = beastType
        if (beastTrait.endurance) {
            Character.endurance.push(beastTrait.endurance)
        }
        if (beastTrait.strength) {
            Character.strength.push(beastTrait.strength)
        }
        if (beastTrait.agility) {
            Character.agility.push(beastTrait.agility)
        }
        if (beastTrait.accuracy) {
            Character.accuracy.push(beastTrait.accuracy)
        }
        if (beastTrait.intelligence) {
            Character.intelligence.push(beastTrait.intelligence)
        }
        if (beastTrait.willpower) {
            Character.willpower.push(beastTrait.willpower)
        }
        if (beastTrait.appearance) {
            Character.appearance.push(beastTrait.appearance)
        }
        if (beastTrait.move) {
            Character.movement = beastTrait.move
        }
    }

    if (Character.outfitting === "ESC") {
        const { wepsEquipment, armorEquipment, miscEquipment } = escKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "IM") {
        const { wepsEquipment, armorEquipment, miscEquipment } = imKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "PR") {
        const { wepsEquipment, armorEquipment, miscEquipment } = prKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "MO") {
        const { wepsEquipment, armorEquipment, miscEquipment } = moKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "WE") {
        const { wepsEquipment, armorEquipment, miscEquipment } = weKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "FA") {
        const { wepsEquipment, armorEquipment, miscEquipment } = faKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    if (Character.outfitting === "WA") {
        const { wepsEquipment, armorEquipment, miscEquipment } = waKit()
        Character.wepsEquipment = wepsEquipment.filter(x => x != 'null')
        Character.armorEquipment = armorEquipment.filter(x => x != 'null')
        Character.miscEquipment = miscEquipment.filter(x => x != 'null')
    }
    return Character
}


