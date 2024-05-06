let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
   showSlider('next');
}
prevDom.onclick = function(){
   showSlider('prev');
}
let timeRunning = 2000;

let runTimeOut;
let runAutoRun;

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');

    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout (() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}

const menuToggle = document.querySelector('.menu-toggle');


const navMenu = document.querySelector('.nav-menu');


menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});


  
  var form = document.getElementById("myForm");
  form.innerHTML = ""; 

  
  var nameLabel = document.createElement("label");
  nameLabel.textContent = "Name: ";
  var nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", true);
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);
  form.appendChild(document.createElement("br"));

  
  var emailLabel = document.createElement("label");
  emailLabel.textContent = "Email: ";
  var emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", true);
  emailLabel.appendChild(emailInput);
  form.appendChild(emailLabel);
  form.appendChild(document.createElement("br"));

 
  var messageLabel = document.createElement("label");
  messageLabel.textContent = "Message: ";
  var messageInput = document.createElement("textarea");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "");
  messageLabel.appendChild(messageInput);
  form.appendChild(messageLabel);
  form.appendChild(document.createElement("br"));

  
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Send Message";
  submitBtn.classList.add("proj1")
  
  form.appendChild(submitBtn);
 
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.wave-animation');
  
    function checkInView() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        if (isInView) {
          element.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);
    window.addEventListener('load', checkInView);
  });
  
 