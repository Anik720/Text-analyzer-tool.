const fs = require('fs');
const TextAnalyzerTool = require('../models/TextAnalyzerToolModel');


exports.getNumberOfWords = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const wordCount = text.split(/\s+/).filter(word => word !== '').length;
        const data = await TextAnalyzerTool.create({
            text:text,
            words:wordCount
        });
        res.status(200).json({
            message: 'Success',
            data,
            wordCount
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};
exports.getNumberOfCharacters = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const characterCount = text.replace(/\s/g, '').length;
        const data = await TextAnalyzerTool.create({
            text:text,
            characters:characterCount
        });
        res.status(200).json({
            message: 'Success',
            data,
            characterCount
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};



exports.getNumberOfSentences = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
        const data = await TextAnalyzerTool.create({
            text:text,
            sentences:sentenceCount
        });
        res.status(200).json({
            message: 'Success',
            data,
            sentenceCount
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};


exports.getLongestWordsInParagraphs = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const paragraphs = text.split(/\n\s*\n/);
        const longestWordsInParagraphs = paragraphs.map(para => {
            const words = para.split(/\s+/);
            const longestWord = words.reduce((longest, current) => {
                return current.length > longest.length ? current : longest;
            }, "");
            return longestWord;
        });
      
        const data = await TextAnalyzerTool.create({
            text:text,
            longestWordsInParagraphs:longestWordsInParagraphs
        });
        console.log(85, longestWordsInParagraphs)
        res.status(200).json({
            message: 'Success',
            data,
            longestWordsInParagraphs
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};


exports.getNumberOfParagraphs = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const paragraphCount = text.split(/\n\s*\n/).filter(para => para !== '').length;
        const data = await TextAnalyzerTool.create({
            text:text,
            paragraphs:paragraphCount
        });
        res.status(200).json({
            message: 'Success',
            data,
            paragraphCount
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};
