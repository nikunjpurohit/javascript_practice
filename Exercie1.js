console.log("Hello!")

class Book {
    constructor (name, author, type){
    this.name=name;
    this.author=author;
    this.type=type;
}
}



class Display{

    add(book){
        console.log("Adding to UI");
        let tablebody = document.getElementById("tbody");
        let uiString =`<tr>
        <td> ${book.name}</td> 
        <td> ${book.author}</td> 
        <td> ${book.type}</td> 
        </tr>`;
        tablebody.innerHTML+=uiString;
        console.log(tablebody.innerHTML);

    }

    clear(){
        let libraryForm=document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book){
        if(book.name.length <2 || book.author.length <2){
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage){
        let message = document.getElementById('message');
        let boldText;
        if (type==='success'){
            boldText = 'Success';

        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                           <strong>${boldText}</strong> ${displayMessage}
                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                           </div>`;
        console.log(message.innerHTML)   
        
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);


    }
    
}



let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type; 
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type=fiction.value;
    }
    else if (programming.checked){
         type = programming.value;

    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    

    let book =new Book(name, author, type);
    console.log(book);

    let display =new Display();

    if (display.validate(book)){
        
    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfully added');

    }
    else{
        display.show('Error', 'Sorry you cannot add this book');

    }

   

    



}