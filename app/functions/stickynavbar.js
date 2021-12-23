// When the user scrolls the page, execute myFunction

if(window.location.pathname.includes('index.html') || window.location.pathname.includes('covid_tech.html'))
{
    window.onscroll = function() {myFunction('main')};

}
else
{
    console.log("bruh");
    let uicont = document.querySelector("body")
    uicont.addEventListener("scroll",function() {myFunction('notmain')})
}
// Get the navbar
var navbar = document.querySelector(".navbar.navbar-expand-lg");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(status) {
    console.log("come on mane")
    console.log(navbar.getBoundingClientRect().top)
  if(status=='main')
  {
    if (window.pageYOffset !=0) {
        if(!navbar.classList.add("sticky"))
        {
            console.log("sticky")
             
          
          navbar.classList.add("sticky")
          navbar.style.position='fixed'
          navbar.style.boxSizing='border-box'
  
        }
    } else {
        console.log("top")
      navbar.classList.remove("sticky");
      navbar.style.position=null
          navbar.style.boxSizing=null
    
    }
  }
  if(status=='notmain')
  {
      let bodydiv = document.querySelector('.ui.cont')
      console.log(bodydiv.getBoundingClientRect().top)
      if(bodydiv.getBoundingClientRect().top==121)
      {
   navbar.classList.remove("sticky");
      navbar.style.position=null
          navbar.style.boxSizing=null
   
      }
    if (navbar.getBoundingClientRect().top !=0) {
        if(!navbar.classList.add("sticky"))
        {
            console.log("sticky")
             
          
          navbar.classList.add("sticky")
          navbar.style.position='fixed'
          navbar.style.boxSizing='border-box'
  
        }
    } else {
        console.log("top")
    
    }
  }
  
}
// .sticky {
//     position: fixed;
//     box-sizing: border-box;
//     top: 0;
//     border: #007bb7 1px solid;
//     width: 100%;
//    z-index: 2;
   