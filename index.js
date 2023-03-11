

function myFunction() {
    let myNodelist = document.querySelectorAll("p");
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "red";
        console.log(myNodelist);
    }


    myNodelist[5].style.color = "green";
}