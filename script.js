let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity= "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex? words[0]: words[currentWordIndex+1];

  Array.from(currentWord.children).forEach((letter, i)=>{
    setTimeout(() => {
      letter.className = "letter out";
    }, i*80);
  });
  nextWord.style.opacity= "1";
  Array.from(nextWord.children).forEach((letter,i)=>{
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i*80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText, 3000);
console.log('sohan');

// skill
const circles = document.querySelectorAll(".circle");
circles.forEach(elem=> {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor( dots*marked/100);
  var points = "";
  var rotate= 360/dots;

  for (let i=0; i<dots; i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
  }
  elem.innerHTML= points;

  const pointsMarked = elem.querySelectorAll('.points');
  for(let i=0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }
})

// active menu
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach((section, index) => {
    // Get the top position of each section relative to the viewport
    let sectionTop = section.offsetTop - 100; // Adjust this offset if necessary for fixed headers

    let sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within this section's range
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove "active" class from all links
      menuLi.forEach(link => link.classList.remove('active'));

      // Add "active" class to the current section's corresponding link
      menuLi[index].classList.add('active');
    }
  });
}

// Run the function on initial load and scroll event
window.addEventListener('scroll', activeMenu);
activeMenu();

// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky", this.window.scrollY > 50)
})




// parallex
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }
    else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// /////////////
const hireMeBtn = document.getElementById('hireMeBtn');

hireMeBtn.addEventListener('click', function () {
  this.classList.add('click-effect', 'active');

  setTimeout(() => {
    this.classList.remove('active');
  }, 500); // Duration of the effect

  // Add additional functionality here if needed (e.g., opening a contact form or sending an email)
});
// ////////
// download cv
document.getElementById('downloadCV').addEventListener('click', function() {
  // Create a temporary anchor element to trigger the download
  const a = document.createElement('a');
  a.href = './1.pdf';  // Specify the path to the PDF file in the public folder
  a.download = 'MyCV.pdf';  // Specify the filename for the downloaded file
  a.click();  // Trigger the click to start the download
});



//
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.close-btn');

  // Service details
  const serviceDetails = {
      webModal: {
          title: "More About Web Development",
          description: "Web development involves creating websites and applications for the internet, focusing on responsive and dynamic solutions."
      },
      frontendModal: {
          title: "More About Frontend Development",
          description: "Frontend development is about building intuitive interfaces that enhance user experience using modern frameworks."
      },
      uxModal: {
          title: "More About UI/UX Design Integration",
          description: "UI/UX design integrates user-centered design principles, emphasizing usability testing to create seamless experiences."
      }
  };

  // Function to open the modal
  function openModal(modalId) {
      const details = serviceDetails[modalId];
      if (details) {
          document.getElementById('modal-title').innerText = details.title;
          document.getElementById('modal-description').innerText = details.description;
          modal.style.display = 'block'; // Show modal
      }
  }

  // Event listener for "Read More" buttons
  document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          const modalId = this.getAttribute('data-modal');
          openModal(modalId); // Open modal with corresponding details
      });
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none'; // Hide modal
  });

  // Close the modal when clicking outside of the modal content
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none'; // Hide modal
      }
  });
});


// about modal
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('aboutModal');
  const openModalBtn = document.getElementById('about-more');
  const closeModalBtn = document.querySelector('.close-btn');

  // Open the modal when "Read More!" is clicked
  openModalBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'block';
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
