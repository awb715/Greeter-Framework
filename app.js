


$('#login').click(function(){
  
  
     var g = Greetr('John', 'Doe');
    g.setLang($('#lang').val()).htmlGreeting('#greeting',true);
    
    
});