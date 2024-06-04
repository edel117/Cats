//Global currentCatTax variable
let currentCatTax = 0;
document.getElementsByClassName("btn btn-success")[0].style.display = "none";
// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
currentCatTax = Math.floor(Math.random() * 21);
var imdiv = document.getElementsByClassName("imageContainer")[0];
while(imdiv.firstChild){imdiv.removeChild(imdiv.firstChild);}

if (currentCatTax != 0){
    document.getElementById("amountOwed").innerHTML = `You owe ${currentCatTax} cat tax! Pay up!`;
    document.getElementsByClassName("btn btn-success")[0].innerHTML = "Pay Cat Tax"
    document.getElementsByClassName("btn btn-success")[0].style.display = "block";



}
else if (currentCatTax == 0){
    document.getElementById("amountOwed").innerHTML = `You owe ${currentCatTax} cat tax! You've escaped this time!`;
    document.getElementsByClassName("btn btn-success")[0].style.display = "none";
}

}
// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
    currentCatTax --;

    let aurl = "https://api.thecatapi.com/v1/images/search";



    if(currentCatTax > 0){
        document.getElementById("amountOwed").innerHTML = `You still owe ${currentCatTax} cat tax! Pay up!`;
        fetch(aurl).then((response)=> 
        {
            return response.json()
            }).then(data=>
                {data[0].url
                let tag = document.createElement("img")
                tag.src = data[0].url
                document.getElementsByClassName("imageContainer")[0].append(tag)
                })
    }
    else if (currentCatTax <= 0){
        document.getElementById("amountOwed").innerHTML = "Your debts are paid...";
        
        var imdiv = document.getElementsByClassName("imageContainer")[0];
        while(imdiv.firstChild){imdiv.removeChild(imdiv.firstChild);}

        var image = document.createElement('img');
        image.src = 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=960&h=540&crop=1';
        document.getElementsByClassName("imageContainer")[0].appendChild(image);
        document.getElementsByClassName("btn btn-success")[0].style.display = "none";
        }
    
}
