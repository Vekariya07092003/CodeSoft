function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var tablinks = document.getElementsByClassName("tab-links");
       for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  // Hide all tab contents
           x[i].classList.remove("active-tab"); // Remove active class
       }
       for (i = 0; i < tablinks.length; i++) {
           tablinks[i].classList.remove("active-link"); // Remove active class from tab links
       }
       document.getElementById(tabName).style.display = "block"; // Show the selected tab
       document.getElementById(tabName).classList.add("active-tab"); // Add active class to selected tab
       event.currentTarget.classList.add("active-link"); // Add active class to the clicked tab link
   }

   // By default, open the first tab
   function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  // Hide all tab contents
        x[i].classList.remove("active-tab"); // Remove active class
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link"); // Remove active class from tab links
    }
    document.getElementById(tabName).style.display = "block"; // Show the selected tab
    document.getElementById(tabName).classList.add("active-tab"); // Add active class to selected tab
    event.currentTarget.classList.add("active-link"); // Add active class to the clicked tab link
}

// By default, open the first tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-links").click();
});
      var sidemenu=document.getElementById("sidemenu");

      function openmenu(){
        sidemenu.style.right="0";
      }
      function closemenu(){
        sidemenu.style.right="-200px";
      }

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwyUT-1iHiVp_aGzAnDJNzU2j2Tr4QV5YN1EVLPB6NA5RzwlJBB-xwEx1_819vqt_Zv9w/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "Message sent Successfully"
              setTimeout(function(){
                msg.innerHTML=""
              },5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })