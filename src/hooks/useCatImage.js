import { useEffect, useState } from 'react'

const imageAPI = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const fisrtThreeWords = fact.split(' ', 3).join(' ')
    fetch(`${imageAPI}${fisrtThreeWords}`)
      .then(res => setCatImage(res))
  }, [fact])

  return { catImage, setCatImage }
}
