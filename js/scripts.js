//readys all code as soon as the page finishes loading
//if this isnt here the event listeners (.submit() in this case) will not attach to our form because the js loads
//before the form loads and it will try to attach a listener to something that doesnt exist
$(document).ready(function (){
  console.log("This is a good tool to see what is going wrong");
  //$ dollar sign is a call to Jquery
  //#playerForm is the form that we want to target
  //.submit() is a method built into jquery. it does something when a submit happens.
  //on submit(this happens)
  //function take the Val() "value" of #numberOfPlayers. #numberOfPlayers being the id for the input
  //.text(argument passed) sets the text of the selected id "#testPlayers" to whatever we pass as an argument
  //event.preventDefault(); overides the default action of submit which is to reload a page.
  $('#playerForm').click(function(event){
    console.log("Putting this here to check if it even gets past the submit.");
    event.preventDefault();
    //grabs value from input
    var numberOfPlayers = $('#numberOfPlayers').val();

    //sets text of span on index.html to value of argument
    $('#testPlayers').text(numberOfPlayers);
  });
});
