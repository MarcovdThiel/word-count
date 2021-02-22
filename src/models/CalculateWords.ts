import { WordFrequency } from "./WordFrequency";
import { WordFrequencyAnalyzer } from "./WordFrequencyAnalyzer";

export class CalculateWords implements WordFrequencyAnalyzer {
    calculateHighestFrequency(text: string): number {
        if (text.length === 0) return 0;
        const stringArray = text.toLocaleLowerCase().split(' ').filter((item) => item !== '');
        const countArray = stringArray.map((a) => {
            return stringArray.filter((b) => {
                return a === b;
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
        if (text.length === 0 || n === 0) return [];
        const stringArray = text.toLowerCase().split(' ').filter((item) => item !== '');
        const wordFrequencies = new Array<WordFrequency>();
        stringArray.forEach((item) => wordFrequencies.push({word: item, frequency: this.calculateFrequencyForWord(text, item)}));
        wordFrequencies.sort((a, b) => b.frequency - a.frequency || a.word.localeCompare(b.word));
        const uniqueArray = wordFrequencies.filter((item, index) => index === wordFrequencies.findIndex((element) => element.word === item.word));

        return uniqueArray.slice(0, n);
    }
}