const apiKey = '4PdDJMP7JEqI0Lh3vg9XUytGVvTTuHSQ';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);



/*peticion.then(resp => {
   // console.log(resp)
   resp.json().then ((data) =>{
       console.log(data)
   })
})
.catch(console.warn);*/


peticion.then(resp => resp.json())
// .then(data => {
    .then(({data}) => {
  //  console.log(data.images.original.url)
        const {url} = data.images.original;
       // console.log(url);
       const img = document.createElement('img');
       img.src = url;

       document.body.append(img);
})
 .catch(console.warn);

