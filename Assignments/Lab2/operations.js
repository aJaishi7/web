//function having no params and no return type
 addNumbers = ()=>{
    var firstNum =10;
    var secondNum =20;
    var sum =  firstNum+secondNum;
    console.log('sum of '+firstNum+' and '+ secondNum + ' is '+sum);
}

//function with params but no return type
 multiplyNumbers = (first,second)=>{
    console.log(first*second);
}

//function having no params but having return type

 divideNumbers = ()=>{

    var firstNum = 20;
    var secondNum =30;

    var divide = firstNum/secondNum;
    return firstNum + " / " + secondNum +" is "+divide;

}

//fucntion having  params and return types
 subtractNumbers = (first,second)=>{
    return first -second;
}


module.exports={addNumbers,multiplyNumbers,divideNumbers,subtractNumbers};

