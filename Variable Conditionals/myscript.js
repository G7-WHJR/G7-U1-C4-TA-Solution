function check()
{
    var input = document.getElementById("enteredValue").value;
    console.log(input);

    var count= input.length;
    console.log(count);
    
    if(count > 5){
        console.log('The Entered text has more than 5 characters');
    }
    else{
        console.log('The Entered text has less than 5 characters');
    }
}

