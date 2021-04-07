function* Prime(n)
{
    for(var i=2;i<n;i++)
    {
        if(checkPrime(i))
        {
            yield i;
        }
    }
}

function checkPrime(num)
{
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false;
        }
        return true;
    }
}

let primeObj=Prime(10);

console.log(primeObj.next().value);
console.log(primeObj.next().value)
console.log(primeObj.next().value)
console.log(primeObj.next().value)