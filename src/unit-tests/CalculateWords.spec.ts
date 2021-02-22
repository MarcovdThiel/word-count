import { CalculateWords } from "../models/CalculateWords"

describe('CalculateWords', () => {
    it('calculateHighestFrequency should return a number of 2', () => {
        const calculateWords = new CalculateWords();
        const number = calculateWords.calculateHighestFrequency('The sun shines over the lake');
        expect(number === 2).toBe(true);
    });

    it('calculateFrequencyForWord should return a number of 1', () => {
        const calculateWords = new CalculateWords();
        const number = calculateWords.calculateFrequencyForWord('The sun shines over the lake', 'sun');
        expect(number === 1).toBe(true);
    });

    it('calculateMostFrequentNWords should return an array of 3 items', () => {
        const calculateWords = new CalculateWords();
        const wordFrequencies = calculateWords.calculateMostFrequentNWords('The sun shines over the lake', 3);
        expect(wordFrequencies.length === 3).toBe(true);
    });
});