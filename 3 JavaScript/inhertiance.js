class test
{

    dryfruits()
    {
        return "penut is the dry fruits"
    }
    expensivefruits()
    {
        return "mango is expensive"
    }
}
class fruits extends test
{
    
    constructor()
    
    {
        return super()
        console.log("Constructor")
    }
    getfruits()
    {
        return ("This is in the prototype")
    }
}

// let a= new fruits;
// console.log(a.getfruits())

// show error becuse above we mension return
// let a= new fruits;
// a.getfruits();


// this is write method and these 3 method is menstion is correct


let a= new fruits;
console.log(a.getfruits())
console.log(a.dryfruits())
console.log(a.expensivefruits())
