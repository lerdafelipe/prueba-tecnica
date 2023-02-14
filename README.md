APIs:

- Facts random: 'https://catfact.ninja/fact'
- Image random: 'https://cataas.com/cat/says/hello'

- Get a random fact by the first API and show a random image using
  the fact by the first API with the second API.

- Cataas is not working. Then, Probably I will use:
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1"

- API of each photo.
  "https://farm${farm}.staticflickr.com/${server}/${id}_${secret}\_m.jpg"
