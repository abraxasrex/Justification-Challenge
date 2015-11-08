justify =function(line, leng){
    
	//1. break line into words //
    var strings=[];
    var justified="";
    var toMatch= /(\S+)/g;
    var totalLength=0;
    var whitespace;
    
    strings.push(line.match(toMatch));
    strings= strings[0];
    
    for(var i=0; i<strings.length; i++){
        totalLength += strings[i].length;
    }
    whitespace= leng - totalLength;
    
    //2. if string isn't too long; do stuff. //
    if(totalLength<=(leng - strings.length)){
        if(strings.length===1){
            console.log("Your string is: \n" + strings[0]);
        }
        else{
          
            var spaces= strings.length-1;
            if(whitespace % spaces === 0){
                console.log("Your string is: \n");
                var spaceLength= whitespace/spaces;
                justified+=strings[0];
                for(var j=1;j<strings.length;j++){
                  for(var k=0;k<spaceLength;k++){
                     justified+= " ";
                  }
                     justified+= strings[j];
                  
                }
                console.log(justified);
              }
          
              else{
              var remainder= whitespace % spaces;
              console.log("Your string is: \n");
                var spaceLength= whitespace/spaces;
                justified+=strings[0];
                  for(var l=0;l<remainder.length;l++){
                      justified+=" ";
                  }
                for(var m=1;m<strings.length;m++){
                  for(var n=0;n<spaceLength;n++){
                     justified+= " ";
                  }
                     justified+= strings[m];
                  
                }
                console.log(justified);
              }
          }
        
        
     }
    //3. if string is too long; tell user //
    else{
        console.log("Your string's too long for your constraint.");
    }
    
};
            
justify("How now brown cow", 30);