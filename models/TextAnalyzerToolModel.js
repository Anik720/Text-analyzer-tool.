const mongoose = require("mongoose");

const textAnalyzerToolSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please give a article name!"],
  },

  words: {
    type: String,
    default: null
  },
  characters: {
    type: String,
    default: null
  },
  sentences: {
    type: String,
    default: null
  },
  paragraphs: {
    type: String,
    default: null
  },
  longestWordsInParagraphs: {
    type: String,
    default: null
  },


});

const TextAnalyzerTool = mongoose.model("TextAnalyzerTool", textAnalyzerToolSchema);

module.exports = TextAnalyzerTool;
