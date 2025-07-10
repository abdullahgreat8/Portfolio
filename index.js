console.log("hello");

const heading = document.querySelector(".heading");
const para = "H,e,l,l,o,?,I,?,a,m,?,a,?,s,e,n,i,o,r,?,p,e,r,s,u,i,n,g,?,&,B,a,c,h,e,l,o,r,s,$,*,i,n,?,&,C,o,m,p,u,t,e,r,?,S,c,i,e,n,c,e,$,?,f,r,o,m,?,F,A,S,T";
const char = para.split(",");
let index = 0;

const tab_heading = document.getElementsByClassName("tab");
const tabcontents = document.getElementsByClassName("tabcontents")
const scriptURL = 'https://script.google.com/macros/s/AKfycbz9I676-Qko4ZTtvszaJg7ER9GOKm0dk5V0sCp8G5gXZQLZcvaIXygGw62e09RF55---g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('.submit');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log("bye bye")
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
const opentab = (name) => {
    for (tab of tab_heading) {
        tab.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(name).classList.add("active-tab")
}

// function type_word() {
//     if (index < char.length) {
//         if (char[index] == '*') {
//             heading.innerHTML += "<br>";
//         } else if(char[index]=='?') {
//             heading.innerHTML += " ";
//         }
//         else{
//             heading.innerHTML+=char[index]
//         }
//         index++;
//         setTimeout(type_word, 150);
//     }
// }


check = 0
function type_word() {
    if (index < char.length) {
        if (char[index] === '*') {
            heading.innerHTML += "<br>";
        } else if (char[index] === '?') {
            heading.innerHTML += " ";
        } 
         else if (char[index] === "$") {
            check = 0
        }
        else if (char[index] === "&" || check == 1) {
            if (check == 1) {
                heading.innerHTML += `<span class="sep">${char[index]}</span>`
            }
            check = 1
        } 
       
        else {
            heading.innerHTML += `<span>${char[index]}</span>`;
        }
        index++;
        setTimeout(type_word, 150);
    } 
}

window.onload = () => {
    setTimeout(type_word, 500);
};
