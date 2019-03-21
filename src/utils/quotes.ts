import enQuotes from '../quotes/en'
import svQuotes from '../quotes/sv'

export const getRandomQuote = (lang: string) => {
  let quotes = enQuotes

  if (lang === 'sv') quotes = svQuotes

  return quotes[Math.floor(Math.random() * quotes.length)]
}
