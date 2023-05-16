#! /usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const utils_1 = require("./utils");
const google_translate_api_1 = require("@vitalets/google-translate-api");
yargs_1.default.version('1.0.1');
yargs_1.default.command({
    command: 'do',
    describe: '\nUsage: tran <lang_name> sentence or words to be translated',
    builder: {
        languageName: {
            describe: 'Language Name',
            demandOption: true,
            type: 'string'
        },
        sentence: {
            describe: 'Sentence to be translated',
            demandOption: true,
            type: 'string'
        }
    },
    // Function for your command
    handler(argv) {
        (0, google_translate_api_1.translate)((0, utils_1.parseSentence)(argv.sentence), { to: (0, utils_1.parseLanguage)(argv.languageName) }).then(res => console.log(res.text));
    }
});
yargs_1.default.parse();
