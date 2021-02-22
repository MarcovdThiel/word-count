import React, { useState } from 'react';
import { CalculateWords } from '../models/CalculateWords';
import { StringRegex } from '../models/StringRegex';
import { WordFrequency } from '../models/WordFrequency';

export interface WordCOuntProps {
}

export interface WordCountState {
    highestFrequencySentence: string
    frequencyForWordsSentence: string
    frequencyForWordsWord: string
    mostFrequentNWordsSentence: string
    mostFrequentNWordsNumber: number
}

export interface WordCountResultState {
    highestFrequency: number
    frequencyForWord: number
    mostFrequentNWords: WordFrequency[]
}

const WordCount: React.FC<WordCOuntProps> = (props) => {

    const [state, setState] = useState<WordCountState>({highestFrequencySentence: '', frequencyForWordsSentence: '', frequencyForWordsWord: '', mostFrequentNWordsSentence: '', mostFrequentNWordsNumber: 0});
    const [result, setResult] = useState<WordCountResultState>({highestFrequency: 0, frequencyForWord: 0, mostFrequentNWords: []});
    const calculateWords = new CalculateWords();

    const getHighestFrequency = (e: any) => {
        e.preventDefault();
        setResult({...result, highestFrequency: calculateWords.calculateHighestFrequency(state.highestFrequencySentence)});
    }

    const getFrequencyForWord = (e: any) => {
        e.preventDefault();
        setResult({...result, frequencyForWord: calculateWords.calculateFrequencyForWord(state.frequencyForWordsSentence, state.frequencyForWordsWord)});
    }

    const getMostFrequentNWords = (e: any) => {
        e.preventDefault();
        setResult({...result, mostFrequentNWords: calculateWords.calculateMostFrequentNWords(state.mostFrequentNWordsSentence, state.mostFrequentNWordsNumber)});
    }

    const onChangeHighestFrequencySentence = (e: any) => {
        if (!StringRegex.hasOnlyStrings(e.target.value)) return;
        setState({...state, highestFrequencySentence: e.target.value});
    }

    const onChangeFrequencyForWordsSetence = (e: any) => {
        if (!StringRegex.hasOnlyStrings(e.target.value)) return;
        setState({...state, frequencyForWordsSentence: e.target.value});
    }

    const onChangeFrequencyForWordsWord = (e: any) => {
        if (!StringRegex.hasOnlyStrings(e.target.value)) return;
        setState({...state, frequencyForWordsWord: e.target.value});
    }

    const onChangeMostFrequentNWordsSentence = (e: any) => {
        if (!StringRegex.hasOnlyStrings(e.target.value)) return;
        setState({...state, mostFrequentNWordsSentence: e.target.value});
    }

    const onChangeMostFrequentNWordsNumber = (e: any) => {
        setState({...state, mostFrequentNWordsNumber: e.target.value});
    }

    return (
        <div className="container container--word-count">
            <div className="row">
                <div className="column">
                    <form>
                        <div className="grid-container">
                            <span>Calculate highest frequency</span>
                            <div className="grid-x grid-padding-x">
                                <div className="medium-6 cell">
                                    <div className="input-group">
                                        <input className="input-group-field" value={state.highestFrequencySentence} onChange={e => onChangeHighestFrequencySentence(e)} type="text" placeholder="sentence" />
                                        <div className="input-group-button">
                                            <input type="submit" onClick={e => getHighestFrequency(e)} className="button" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                                <div className="medium-6 cell">
                                    <label>result: {result.highestFrequency}</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <form>
                        <div className="grid-container">
                            <span>Calculate frequency of a word</span>
                            <div className="grid-x grid-padding-x">
                                <div className="medium-6 cell">
                                    <input className="input-group-field" value={state.frequencyForWordsSentence} onChange={e => onChangeFrequencyForWordsSetence(e)} type="text" placeholder="sentence" />
                                    <div className="input-group">
                                        <input className="input-group-field" value={state.frequencyForWordsWord} onChange={e => onChangeFrequencyForWordsWord(e)} type="text" placeholder="word" />
                                        <div className="input-group-button">
                                            <input type="submit" onClick={e => getFrequencyForWord(e)} className="button" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                                <div className="medium-6 cell">
                                    <label>result: {result.frequencyForWord}</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <form>
                        <div className="grid-container">
                            <span>Calculate most frequent n words</span>
                            <div className="grid-x grid-padding-x">
                                <div className="medium-6 cell">
                                    <input className="input-group-field" value={state.mostFrequentNWordsSentence} onChange={e => onChangeMostFrequentNWordsSentence(e)} type="text" placeholder="sentence" />
                                    <div className="input-group">
                                        <input className="input-group-field" value={state.mostFrequentNWordsNumber} onChange={e => onChangeMostFrequentNWordsNumber(e)} min={0} type="number" />
                                        <div className="input-group-button">
                                            <input type="submit" onClick={e => getMostFrequentNWords(e)} className="button" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                                <div className="medium-6 cell">
                                    <label>result: {JSON.stringify(result.mostFrequentNWords)}</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WordCount