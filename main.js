let triggerBtn = document.getElementById("trigger");
let submenu = document.querySelector(".submenu");

triggerBtn.addEventListener("mouseover",()=>{
      submenu.classList.add("show");
});
triggerBtn.addEventListener("mouseleave",()=>{
      submenu.classList.remove("show");
})

let hambugerBtn = document.querySelector(".navTrigger");
let mobileNav = document.querySelector("nav");

hambugerBtn.addEventListener("click", ()=>{
      hambugerBtn.classList.toggle("active");
      mobileNav.classList.toggle('show');
});

//modal implementation
let modalBody = document.querySelector(".modal-body");
let modalBtn = document.querySelector(".get-started");
let modalContainer = document.querySelector(".modal-content-container");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", (e)=>{
  e.preventDefault();
   modalContainer.classList.add("zoomIn");
   modalBody.style.display = "block";
});
closeBtn.addEventListener("click",(e)=>{
      e.preventDefault();
      if(modalContainer.classList.contains("zoomIn")){
            modalContainer.classList.remove('zoomIn');
            modalContainer.classList.add("zoomOut");
      }
      let delay = setTimeout(()=>{
            modalBody.style.display = "none";
            if(modalContainer.classList.contains("zoomOut")){
                  modalContainer.classList.remove("zoomOut");
            }
      }, 500);
});

//slider implementation
let slides = document.querySelectorAll(".landing-slide");
let current = 0;

let slider = ()=>{
      for (let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
      }

      current++;
      if (current > slides.length){
            current = 1;
      }

      slides[current - 1].style.display = "grid";
      setTimeout(slider, 5000);
}
slider();





let featureLinks = document.querySelectorAll(".feature-links ul li");
let feature_Containers = document.querySelectorAll(".feature-wrapper");

function showActive(index){
      featureLinks.forEach((btn)=>{
            btn.classList.remove("active");
      });
      featureLinks[index].classList.add("active");

      feature_Containers.forEach((tab)=>{
            tab.style.display = "none";
      });
      feature_Containers[index].style.display = "grid";

      window.onresize = ()=>{
            let windowWidth = window.innerWidth;
            if(windowWidth <= 1080){
                  feature_Containers.forEach((tab)=>{
                        tab.style.display = "block";
                  });
            }else{
                  showActive(0);
            }
      }

}
showActive(0);
for(let i = 0; i < featureLinks.length; i++){
      featureLinks[i].addEventListener("click",()=>{
            showActive(i);
      })
}

let accordions = document.querySelectorAll(".question");
accordions.forEach((touch)=>{
      touch.addEventListener("click",()=>{
        let current = document.querySelector(".question.active");
        if(current && current !== touch){
              current.classList.toggle("active");
              current.nextElementSibling.style.maxHeight = 0;
        }
            touch.classList.toggle("active");
        let answerBody = touch.nextElementSibling;
        if(touch.classList.contains("active")){
              answerBody.style.maxHeight = answerBody.scrollHeight + "px";
        }
        else{
              answerBody.style.maxHeight = 0;
        }
      });
});
