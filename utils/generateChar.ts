import { character } from "@/mockup";
import { minMaxTable } from "./minmaxtable";
import { characterType } from "./tables/charactertype";
import { cloneTraits } from "./tables/clonetraits";
import { bioreplicaTraits } from "./tables/bioreplicatraits";
import { traitValue } from "./tables/traitvalue";
import { battleBioreplicaCaste, bestialHumanCaste, clericalBioreplicaCaste, comfortCloneCaste, cyborgCaste, ghostMutantCaste, humanCaste, industrialBioreplicaCaste, infiltrationBioreplicaCaste, laborCloneCaste, militaryCloneCaste, mutantCaste, pleasureBioreplicaCaste, transHumanCaste } from "./tables/castes";
import { casteDetail } from "./tables/castedetails";

type CloneTrait = 'Military' | 'Labor' | 'Comfort'
type BioTrait = 'Pleasure' | 'Industrial' | 'Clerical' | 'Infiltration' | 'Battle'

const charType = minMaxTable(characterType) as string

let traits = {}
if (charType.includes("Clone")) {
    const cloneType = charType.split(' ')[1] as CloneTrait
    traits = cloneTraits()[cloneType]
} else if (charType.includes("Bioreplica")) {
    const bioType = charType.split(' ')[1] as BioTrait
    traits = bioreplicaTraits()[bioType]
} else {
    const endurance = minMaxTable(traitValue())
    const strength = minMaxTable(traitValue())
    const agility = minMaxTable(traitValue())
    const accuracy = minMaxTable(traitValue())
    const intelligence = minMaxTable(traitValue())
    const perception = minMaxTable(traitValue())
    const willpower = minMaxTable(traitValue())
    const appearance = minMaxTable(traitValue())
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
let casteTraits = casteDetail().find(individualCaste => individualCaste.caste === caste)

console.log(charType)
console.log(traits)
console.log(caste)
console.log(casteTraits)