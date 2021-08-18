function toggleNav(){
    document.getElementById("header-container-id").classList.toggle("header-container-vertical")
    document.getElementById("header-navbar-id").classList.toggle("header-navbar-vertical");
}

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    console.log("Hello");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
    { 
        return (true)
    }
    else
    {
        console.log("You have entered an invalid email address!");
        const message = document.createElement('div');
        message.innerText = "Error in email id input";
        message.style.color = "rgb(255,0,0)";
        myForm.insertBefore(message, myForm.childNodes[0]);     // Append <li> to <ul> with id="myList"

        e.preventDefault();
        return (false)
    }
})