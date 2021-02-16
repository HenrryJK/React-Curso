    function welcome(first_name) {
        return `Hello, ${first_name}`;
        
        
    }

    const welcome2 = (first_name) => {
        return `Hello, ${first_name}`;
    
    }
    const welcome3 = function(first_name) {
        return `Hello, ${first_name}`;
     
    }
    const welcome4 = (first_name) => `Hello, ${first_name}`;
    
    const welcome5 = () => `Hello World !!!! Good Afternoon!`;

    console.log(welcome('Henrry'))
    console.log(welcome2('Carlos'));
    console.log(welcome3('Enrique'));
    console.log(welcome4('Dante'));
    console.log(welcome5());
    /*const getUser = () => {
        return {
            uid: 'HFKS03' , 
            username: 'henrryOP'
        }
    }*/
      const getUser = () => ({
            uid: 'HFKS03' , 
            username: 'henrryOP'
        });
   
    const user = getUser();
    console.log(user);

    /*function getUserActive (first_name) { 
        return{
            uid:'ABC546' , 
            username:first_name
        }
    };*/
    //solucion 
    const getUserActive = (first_name) => ({ 
        
            uid:'ABC546' , 
            username:first_name
        
    });
    const usersActivo = getUserActive('Carlos')
    console.log(usersActivo);