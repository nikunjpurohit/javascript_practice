console.log("this is tut22.js");

showNotes()

//IF user adds a node add it to local storage
let addBtn = document.getElementById('addBtn');
console.log(addBtn)
addBtn.addEventListener("click", function(e)
{
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes")
    
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
      }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value = "";
    console.log(notesObj)
    showNotes()

})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html +=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button href='#' id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
 


    });
    let notesElm=document.getElementById("notes")
    if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }

}


function deleteNote(index){
    console.log("i am deleting ", index)
    let notes=localStorage.getItem("notes");
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}

let search =document.getElementById('searchTxt');

search.addEventListener("input", function(){
    let inputval = search.value;

    
    let noteCards  = document.getElementsByClassName('noteCard ')
    Array.from(noteCards).forEach(function(e){
        let cardTxt = e.getElementByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

        })
    }
    
)

class GeneralCar {
    constructor(giveName, giveSpace) {
        this.name = giveName;
        this.topspeed = giveSpace;
        this.run = function () {
            console.log(`${this.name} is running`);
        };
        this.analyze = function () {
            console.log(`${this.name} is slower by ${200 - this.topspeed} running`);

        };
    }
}

car1= new GeneralCar('maruti', 100);
console.log(car1)