const express = require('express');
const textAnalyzerToolController = require('../controllers/textAnalyzerTool');


const router = express.Router();


router
  .route('/words')
  .get( textAnalyzerToolController.getNumberOfWords)
router
  .route('/characters')
  .get(textAnalyzerToolController.getNumberOfCharacters)
router
  .route('/sentences')
  .get(textAnalyzerToolController.getNumberOfSentences)
router
  .route('/paragraphs')
  .get(textAnalyzerToolController.getNumberOfParagraphs)
router
  .route('/longest-words-in-paragraphs')
  .get(textAnalyzerToolController.getLongestWordsInParagraphs)


module.exports = router;
