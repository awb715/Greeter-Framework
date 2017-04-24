(function (global, $) {
    //Immediately invoked function
    
    
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        
        //return new invokes new object and method call
    }
    var supportedLangs = ['en', 'es'];
    var greetings = {
        en: 'Hello'
        , es: 'Hola'
    };
    var logMessages = {
        en: 'Logged in'
        , es: 'Inicio sesion'
    };
    var formalGreetings = {
        en: 'Greetings'
        , es: 'Saludos'
    };
    Greetr.prototype = {
        fullName: function () {
            return this.firstName + " " + this.lastName
        }
        , validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        }
        , greeting: function () {
            return greetings[this.language] + this.firstName + "!";
        }
        , formalGreeting: function () {
            return formalGreetings[this.language] + ',' + this.fullName;
        }
        , greet: function (formal) {
            var msg;
            //if undefined or null, the greeting will be standard
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            // this refers to the object that calls greet
            return this;
        }
        , log: function () {
            if (console) {
                console.log(logMessages[this.language] + ":" + this.fullName()) ;
            }
            return this; // Key point and lesson learned! : returning this allows you to chain methods so the full object is returned after changes in each method call!
        },
        setLang:function(lang){
            this.language = lang;
            this.validate();
            
            return this;
        },
        htmlGreeting:function(selector,formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'No jQuery selector';
            }
            
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            $(selector).html(msg); // adds message to selector
            return this;
        }
        
    };
    
    Greetr.init = function (firstName, lastName, language) {
            var self = this;
            self.firstName = firstName || " ";
            self.lastName = lastName || " ";
            self.language = language || "en";
        
            self.validate();
        }
        //points any object created with the constructor to Greetr's prototype
    Greetr.init.prototype = Greetr.prototype;
    //allows Greetr to be accessed globally
    global.Greetr = global.G$ = Greetr;
}(window, jQuery));