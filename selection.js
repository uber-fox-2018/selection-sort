
function selection (x) {
    for (var i=0 ; i < x.length ; i++){
      var min = x[i]
      for (var j=i ; j < x.length ; j++){
        if (min > x[j]){
          min = x[j]
        }
      }   
      x[x.indexOf(min)] = x[i]
      x[i] = min
    }
    return x
    }
    
    
    console.log(selection([ 13,5,22,99,11]))