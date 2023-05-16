#! /usr/bin/env node 

import yargs from 'yargs';
import { parseLanguage, parseSentence } from './utils';
import { translate } from '@vitalets/google-translate-api';

yargs.version('1.0.1');

yargs.command({
    command: 'do',
    describe: '\nUsage: tran <lang_name> sentence or words to be translated',
    builder: {
        languageName: {
            describe: 'Language Name',
            demandOption: true,  // Required
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
        translate(parseSentence(argv.sentence), {to: parseLanguage(argv.languageName)}).then(res=> console.log(res.text));
    }
});

yargs.parse();
