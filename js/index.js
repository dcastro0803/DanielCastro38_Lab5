
function shoppingListInteraction(){
	$(`#submitButton`).on("click", function(event){
    event.preventDefault();
    // add the item to the ul
    let valueInput = $("#itemToAdd").val()

    htmlToAppend = `<div  class="boxElement" > 
						<li> ${valueInput} </li>
						<br>
						<button class="buttonFirst check" >Check</button>
						<button class="delete" >Delete</button>
    				</div>`

    $("#cartOfItems").append(htmlToAppend)
  	})

	  // Find the li inside the ul
  	//Tag the correct li with id="tagged"
    // ".boxElement > .check" this is to link to recently created  
  	$("#cartOfItems").on("click",".boxElement > .check" ,function(event1){
  		event1.preventDefault();
  		$(event.target).parent().find("li").toggleClass("tagged");
  	})


  	// erase the item 
  	$("#cartOfItems").on("click",".boxElement > .delete" , function(event1){
  		event1.preventDefault();
  		$(event.target).parent().remove();
  	})

} 

shoppingListInteraction()
