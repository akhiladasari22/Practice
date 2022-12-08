
var k = 9,a,b,l;
 
        // Nested 2 for loops for iterating over the matrix
 
        // Outer for loop for iterating over rows
        for (var a = 0; a <= k; a++) {
            
        result= ''
            // Inner for loop for iterating over columns
            // where we are printing white spaces
            for (var b = 1; b <= k - a; b++) {
 
                result= result + ' '
            }
 
            // Inner for loop for iterating over columns
            // where we are printing white spaces
            for (var l = 0; l <= a; l++) {
 
                // Print the star pattern
                // console.log("*");
                result = result + '*'
            }
 
            // By now we are done with one row so
            // next line
            console.log(result)
          //  console.log("");
        }

