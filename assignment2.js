
function fibonacci(num)
{
    var n1=0,n2=1,sum,i;
    for (i = 0; i < num; i++) 
    {
        sum=n1+n2;
        n1=n2;
        n2=sum;
    }
    return n2;
}
console.log(fibonacci);
