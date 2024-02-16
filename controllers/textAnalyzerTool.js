const fs = require('fs');


exports.getNumberOfWords = async (req, res, next) => {

    try {
        const text = fs.readFileSync("test.txt", 'utf-8');
        const wordCount = text.split(/\s+/).filter(word => word !== '').length;
        res.status(200).json({
            message: 'Success',
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
        res.status(200).json({
            message: 'Success',
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
        res.status(200).json({
            message: 'Success',
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
        res.status(200).json({
            message: 'Success',
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
        res.status(200).json({
            message: 'Success',
            paragraphCount
        });
    } catch (err) {

        res.status(404).json({
            message: 'failed',
        });
    }
};
