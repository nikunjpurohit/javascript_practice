console.log('this is tut38.js');

function func1(){
    return new Promise(function (resolve, reject){
        setTimeout(()=> {const error = false;
        if(!error){
            console.log('Function: Your promise has been resolved');
            resolve("Yo");
        }
        else{
            console.log('Function: Your promise has not been resolved')
            reject('Sorry not fulfilled');

        }
    },2000);
    })

}


func1().then(function(er){
    console.log("Harry: Thanks for resolvin" +er);
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error);
})