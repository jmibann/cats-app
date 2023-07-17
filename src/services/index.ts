/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const URL = 'https://catfact.ninja/fact';

export const fetchRandomFact: () => Promise<string> = async () => fetch(URL)
  .then(res => res.json())
  .then(data => data.fact);