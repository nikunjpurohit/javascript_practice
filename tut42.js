console.log("HYO");


let mybtn = document.getElementById("mybtn");

let content = document.getElementById("content");

function getData(){
    console.log("Started getData")
    url='https://api.github.com/users';
    fetch(url).then((response)=>{
        console.log("Inside first then");
        
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before running getData");
getData();
console.log("After running getData");