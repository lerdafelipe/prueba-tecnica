import { useState, useEffect } from 'react'
import { getNewFact } from '../logic/fact'

export function useFact () {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    getNewFact().then(setFact)
  }, [])

  return { fact, setFact }
}
