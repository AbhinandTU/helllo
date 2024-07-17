let rows = 5; 

for (let i = 1; i <= rows; i++) { 
    let line = '';
    for (let j = 1; j <= i; j++) { 
      if ( i === 1 || j === 1 || j === i || i === 5 ){
        line +="*"+" ";
      }
      else{
        line += " "+ " ";
      }

      
    }
    console.log(line);
  }



  
      
   
   
    
