#!/usr/bin/env node

import program from 'commander'
import { getRandomQuote } from './utils/quotes'

program
  .version('1.0.0', '-v, --version')
  .description("Learn how to speak like Captain Haddock")
  .option('-l, --language [value]', 'Use language. Supported: sv,en', 'en')
  .action(() => {
    if (program.language) {
      switch (program.language) {
        case 'sv':
          console.log(getRandomQuote('sv') + '!')
          break
        case 'en':
          console.log(getRandomQuote('en') + '!')
          break
        default:
          console.log('Use en or sv')
      }
    } else {
      console.log(getRandomQuote('en') + '!')
    }
  })
  .parse(process.argv)
