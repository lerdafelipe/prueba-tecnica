const factAPI = 'https://catfact.ninja/fact'

export const getNewFact = async () => {
  const res = await fetch(factAPI)
  const data = await res.json()
  const { fact } = data
  return fact
}
