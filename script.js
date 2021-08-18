function toggleNav(){
    document.getElementById("header-container-id").classList.toggle("header-container-vertical")
    document.getElementById("header-navbar-id").classList.toggle("header-navbar-vertical");
}

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', validateForm);

function validateForm(e){
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
    { 
        const formData = {
            userName: myForm.children[0].value,
            userEmail: myForm.children[1].value,
            userMessage: myForm.children[2].value
        }
        console.log(formData);
        fetch(
            "https://portfoliodb-ba460-default-rtdb.firebaseio.com/contactFormDB.json",
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        myForm.reset();
        const message = document.createElement('div');
        message.innerText = "Done";
        message.style.color = "rgb(0,255,0)";
        myForm.insertBefore(message, myForm.childNodes[0]); 
        return (true)
    }
    else
    {
        console.log("You have entered an invalid email address!");
        const message = document.createElement('div');
        message.innerText = "Error in email id input";
        message.style.color = "rgb(255,0,0)";
        myForm.insertBefore(message, myForm.childNodes[0]);     // Append <li> to <ul> with id="myList"
        myForm.reset();
        return (false)
    }
}