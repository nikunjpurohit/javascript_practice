console.log("This is TUt 25");



let divElem=document.createElement('div');
let text = document.createTextNode('This is my element. Click to edit it');
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'boocy');
divElem.setAttribute('style', 'border:2px solid black; width:154px; margin:34px padding:23px');


let  con_tainer=document.querySelector('.container');
 let first = document.getElementById('first');

 // insert element before container element
 divElem.appendChild(text);
 con_tainer.insertBefore(divElem,first)

 console.log(divElem);

 // add event listener
divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas==0){
        let ht_ml = divElem.innerHTML;
        divElem.innerHTML=` <textarea class="textarea form-control" id="textarea" rows="3">${ht_ml}</textarea>`;

    }
    let textarea=document.getElementById('textarea')
    textarea.addEventListener('blur', function()
    {
        elem.innerHTML=textarea.value;
        localStorage.setItem('text', textarea.value);


    }
    
    )
    
  
});
