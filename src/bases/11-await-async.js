const getImagenesPromise = ()=> {
   // const promesa = new Promise ((resolve , reject) => {
   return  new Promise ((resolve , reject) => {
        resolve ('https://edithmrls.com')
    })
}

getImagenesPromise().then(console.log);


const getImagenesPromise2 = ()=> 
    // const promesa = new Promise ((resolve , reject) => {
    new Promise (resolve  => resolve ('https://shop-pants.com'))
 

 getImagenesPromise2().then(console.log);


 // async 

 const traerImagen = async() => {
     return 'https://crear-web.com'
 }

console.log(traerImagen());

traerImagen().then(console.log);


/// Await 

/*const apiKey = '4PdDJMP7JEqI0Lh3vg9XUytGVvTTuHSQ';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

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
 .catch(console.warn);*/
 const traerImagen2 = async() => {
     try {
         const apiKey = '4PdDJMP7JEqI0Lh3vg9XUytGVvTTuHSQ';
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json(); // aqui 
    console.log(data);

  //  const {url} = data.data.images.original; arreglado si lo pones llaves
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

     } catch (error) {
        //menejo de errores 
        console.log(error);  
     }
    
}

traerImagen2();



