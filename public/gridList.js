function buttonClick(id){
    // get the input *button* using its id
    var button = document.getElementById(id);
    
    // switch the display of the button
    if ( button.value==="Goodnight World!"){
         button.value="Hello again, World!";
        } else {
            button.value="Goodnight World!";
        }
    
}