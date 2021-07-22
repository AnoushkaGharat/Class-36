class Form{
   constructor(){


   } 
 
display(){
    var title = createElement("h2");
    title.html("Car Racing");
    title.position(130,0);
    
    var input = createInput("name");
    input.position(130,160);

    var button = createButton("PLAY");
    button.position(250,200);
}


}