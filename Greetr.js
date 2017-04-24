(function (global,$) {
    //Immediately invoked function
    
    
    var Greetr= function (firstName, lastName, language){
         
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.prototype = { };
    
    Greetr.init = function (firstName, lastName, language){
        
        var self = this;
        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.language = language || "en";
        
    }
    //points any object created with the constructor to Greetr's prototype
    Greetr.init.prototype =Greetr.prototype;
    
    //allows Greetr to be accessed globally
    global.Greetr = global.G$ = Greetr;
    
    
    
}(window, jQuery));