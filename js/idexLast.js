let htmlToAdd = "";
let counter = 1;
function shoppingListInteraction(){
  $(`#submitButton`).on("click", function(event){
    event.preventDefault();
    // add the item to the ul
    let valueInput = $("#itemToAdd").val()

    htmlToAppend = `<div  class="boxElement" > 
            <li id="li${counter}"> ${valueInput} </li>
            <br>
            <button class="buttonFirst" id="check${counter}" >Check</button>
            <button class="delete" >Delete</button>
            </div>`

    $("#cartOfItems").append(htmlToAppend)
    counter = counter +1;
    })

  // Find the li inside the ul
    //Tag the correct li with id="tagged"
    $("#cartOfItems").on("click", function(event1){
      //console.log(counter);
      event1.preventDefault();
      for(let i = 1; i < counter + 1; i = i + 1){
        // console.log(i);
        $(`#check${i}`).on("click", function(event2){
          console.log(i);
          event2.preventDefault();
          //console.log(`#check${i}`);
          // change the class of li
          $(`#li${i}`).toggleClass("tagged");
        })
      }
    })

    // erase the item 
    $("#cartOfItems").on("click",".boxElement > .delete" , function(event1){
      //console.log(counter);
      event1.preventDefault();
      $(event.target).parent().remove();
    })

} 

shoppingListInteraction()