const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function(event){
    let section = event.target.closest(".accordion_section");
   
    section.classList.toggle("opened");

    let plus = section.querySelector(".plus");
    plus.textContent = section.classList.contains("opened") ? "-" : "+";
});




