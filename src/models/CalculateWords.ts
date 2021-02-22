import { WordFrequency } from "./WordFrequency";
import { WordFrequencyAnalyzer } from "./WordFrequencyAnalyzer";

export class CalculateWords implements WordFrequencyAnalyzer {
    calculateHighestFrequency(text: string): number {
        if (text.length === 0) return 0;
        const stringArray = text.toLocaleLowerCase().split(' ');
        const countArray = stringArray.map((a) => {
            return stringArray.filter((b) => {
                return a === b && b !== '';
            }).length;
        });

        return Math.max.apply(null, countArray);
    }

    calculateFrequencyForWord(text: string, word: string): number {
        if (text.length === 0 || word.length === 0) return 0;
        const stringArray = text.toLowerCase().split(' ');
        const filteredArray = stringArray.filter((item) => item === word.toLowerCase());

        return filteredArray.length;
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        // TODO: implement WordFrequency
        return [];
    }

}