const btn = document.getElementById("btn");
const shareDiv = document.getElementById("share");

function showContacts() {
    if (!shareDiv.classList.contains("active")) {
        shareDiv.classList.add("active");  
    }
    else {
        shareDiv.classList.remove("active");
        }
    }

btn.addEventListener('click', showContacts, false);

