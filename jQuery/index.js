// set values for element :
        // $("h1").css("color","red");

// get values for element :
        // console.log($("h1").css("color"));

// set or add a class :
        // $("h1").addClass("big-title");

// adding a class :
        // $("h1").addClass("big-title"); // to add multiple classes, add $("h1").addClass("class0 class1 class2");
// check an element for a class - can also use the .hasClass("____"); function to return a true or false boolean.

// change the text to another word or phrase :
        // $("h1").text("Bye");

// add inner HTML :
        //$("button").html("<em>Hey</em>"); //add innerHTML method;
// adding a clickable event :
        // $("h1").click(function() {
        //   $("h1").css("color", "#faa2ff");
        // });

// super annoying keyboard tracker
        // $("h1").addClass("big-title");
        // $(document).keydown(function(event){
        //   $("h1").text(event.key);
        // });
// using the .on function for listeners
        // $("h1").on("mouseover", function(){
        //   $("h1").css("color","purple");
        // });//turns h1 purple when mouse hovers over it
        // $("h1").on("mouseout", function(){
        //   $("h1").css("color","black");
        // });//turns h1 black when mouse moves off the title
// add elements before and after the selected element.
        // $("h1").before("<button>before Button</button>");
        // $("h1").prepend("<button>prepend Button</button>");
        // $("h1").after("<button>after Button</button>");
        // $("h1").append("<button>append Button</button>");
// animations such as hide, show, toggle, fade,
// $("button").on("click", function(){
        //   $("h1").hide();
        //   $("h1").show();
        //   $("h1").toggle();
        //   $("h1").fadeOut();
        //   $("h1").fadeIn();
        //   $("h1").fadeToggle();
        //   $("h1").slideUp();
        //   $("h1").slideDown();
        //   $("h1").slideToggle();
        //   $("h1").animate({opacity: 0.5}); // in the animate css you can only add numerical values. you cannot do "red" for example.
        //   $("h1").slideUp().slideDown().animate({margin: 40});// chained animations
        // });
