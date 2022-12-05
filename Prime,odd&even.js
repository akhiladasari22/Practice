//Odd numbers
// for (let i=1;i<=100;i++)
// {
//  if((i%2)!==0)//  
//  {
//  console.log(i);

//  }}


// for(i=1; i<=100;i++)
// {
//     // let’s divide the value by 2.
//     if(i % 2 == 0){//// if the remainder is zero then it’s an even number.
//     console. log(i);
//     }
//     }

//Multiples of 3

// for (let i=1;i<=100;i++)
// {
//  if((i%3)==0)
// {
//  console.log(i)
// }}

//Print prime numbers from 1 to 100
// for (var i = 0; i <= 100; i++) {
//   var notPrime = false;
//  for (var y = 2; y <= i; y++) {
//  if (i%y===0 && y!==i) {
//  notPrime = true;
//  }
//  }
// if (notPrime === false) {
//    console.log(i);
//  }
//  }
//Using function return even and odd numbers
function evenodd()
{
    const even = [];
    const odd = [];
    for(let i=1;i<=10;i++)
    {
      if(i%2 == 0)
      {
         even.push(i);
      }
      else{
        odd.push(i);
      }
    }
    console.log("even array is:",even);
    console.log("odd array is:",odd)
}
evenodd();