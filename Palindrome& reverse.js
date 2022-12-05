//program to check whether 101 is Palindromenumber or not
// var num=101,rem,rev=0
// var temp=num;
// while(num!=0)
// {
//     rem=num%10
//     num=parseInt(num/10)
//     rev=(rev*10)+rem
// }
// if(temp==rev)
// {
//     console.log("palindrome number")
// }
// else
// {
//     console.log("not palindrome no")  
// }

//Reverse of a string
const str="Hi"
//console.log(str.length)
let revstr=''
for(let i=str.length-1;i>=0;i--)
{
    revstr += str[i]
}
console.log(revstr)