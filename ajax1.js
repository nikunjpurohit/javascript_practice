console.log("Ajax tutoruial");

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler (){
    console.log('You have clicked the detchBtgn');
    let book=`{"name":"test5fsadasdsa5","salary":"123","age":"23"}`;
    const xhr =new XMLHttpRequest();
  
    
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    
    xhr.getResponseHeader('Content-type', 'application/json');
    

    xhr.onprogress=function(){
        console.log('On Progress');
    }
   

    xhr.onload=function(){
        if(this.status ===200){
            console.log(this.responseText);

        }
        else{
            console.log("Some error occured")

        }
        
    }
    
    
    xhr.send(book);

}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
           
            let obj =JSON.parse(this.responseText);
            console.log(obj.data.length)
            let list = document.getElementById("list");
            str="";
            for (let i = 0; i < obj.data.length-1; i++){
                str+=`<li>${obj.data[i].employee_name}</li>`
               
            }
            list.innerHTML=str;
            


           
        }
        else{
            console.log("Some error occured");
        }
    }
    xhr.send();
}


