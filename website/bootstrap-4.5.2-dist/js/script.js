// // // DOM manipulation
// // // console.log(document.getElementById("title"));
// // // console.log(document instanceof HTMLDocument);


// // Event handling
// document.addEventListener("DOMContentLoaded", 
//   function (event) {

//     function sayHello (event) {
//       console.log(event);

//     this.textContent = "Said it!"; //Converts the text on button from say it to said it
  
//     var name = document.getElementById("name").value
//     var message = "<h2>Hello " + name + "!</h2>";

//     // document.getElementById("content").textContent = message;

//     document.getElementById("content").innerHTML = message;

//     if (name === "student"){
//       var title = document.querySelector("#title").textContent;
//       title += " is very useful";
//       document.querySelector("#title").textContent = title;
//     }
// }

// // Unobstructive event building
// document.querySelector("button").addEventListener("click", sayHello);

// document.querySelector("body").addEventListener("mousemove",

//   function (event) {
//     if (event.shiftKey === true) {
//         console.log(event.clientX);
//         console.log(event.clientY);
//     }
//   }
//   );


// // document.querySelector("button").onclick = sayHello;
//   }
//   )

// function showPassword () {
//   var pass = document.getElementById("password");
//   if (pass.type === "password"){
//     pass.type = "text";
//   }
//   else {
//     pass.type = "password";
//   }
// }



// // Event handling
// document.addEventListener("DOMContentLoaded",
//   function(event) {

//     // Unobstrusive event binding
//     document.querySelector("button").addEventListener("click", function() {

//       // Call server to get the name
//       $ajaxUtils.sendGetRequest("/data/name.txt",
//         function (request) {
//           var name = request.responseText;
//           document.querySelector("#content").innerHTML = "<h2>Hello " +name+ "!</h2>";
//         }
//         );
      
//     }

//       );
//   }


//   );

document.addEventListener("DOMContentLoaded", 
  function(event) {

    // Unobstrusive event binding
    document.querySelector("button").addEventListener("click",function(){


      // Call server to get the name
      $ajaxUtils.sendGetRequest("/data/name.json",
        function (res) {
          var message = res.firstName + " " +res.lastName
          if (res.likesChineseFood){
            message += "likes chinese food";0
          }
          else {
            message += "doesn't like chinese food";
          }
          message += " and uses ";
          message += res.numberOfDisplays;
          message += " displays for coding";

          document.querySelector("content").innerHTML = "<h2>" +message+ "</h2>"
        });
    });
  }
  );












