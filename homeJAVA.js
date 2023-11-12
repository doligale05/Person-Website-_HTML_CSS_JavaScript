// Dark mode features without the use of event listeners 
function inverseButton(){
    var body = document.getElementsByTagName("body")[0];
    var inverseColor = body.style.backgroundColor; 

    if(inverseColor === "white" || inverseColor === "")
    {
        body.style.backgroundColor = "black"; 
        body.style.color = "white";  
    }
    else {
        body.style.backgroundColor = "white"; 
        body.style.color = "black"; 
    }
}

// review function that currently only works on the page
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementsByName('fullname')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const rating = document.getElementsByName('Rating 1-10')[0].value;
    const comments = document.getElementsByName('comments')[0].value;

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Rating:", rating);
    console.log("Comments:", comments);

    document.getElementById('review').innerHTML = `
                <h2>Review:</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Rating:</strong> ${rating}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            `;
            document.getElementById('review').insertAdjacentHTML('beforeend', review);

    event.target.reset(); // Reset the form after submission
}


document.addEventListener("DOMContentLoaded", function(event){
// Uses an array, and cover all the requirements for the list update using append and removeChild function     
function addItemToStart(itemArray, listClass) {

    var lists = document.getElementsByClassName(listClass);

    for (var j = 0; j < lists.length; j++) {
      var myList = lists[j];

      for (var i = itemArray.length - 1; i >= 0; i--) {
        var newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode(itemArray[i]));
        myList.insertBefore(newItem, myList.firstChild);
      }
    }
  }

  var newItemArray = [
    "Cyber Law for All (CSC 309)",
  ];

  var listClass = "myList";
  addItemToStart(newItemArray, listClass);

const javaList = document.getElementById("javaList"); 
const lastItem = javaList.lastElementChild; 
  if (lastItem)
  {
        javaList.removeChild(lastItem); 
  }

});