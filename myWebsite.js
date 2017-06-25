$(document).ready(function(){    
  $('.navigationButton').click(function(e){
    e.preventDefault();
    var linkHref = $(this).attr('href'); // this refers to .navigationButton
    var headerHeight = $('#header-nav').outerHeight(); 
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 800);
  });
  $("#contactForm").submit(function(e){
    var email = document.getElementById('email'),
        message = document.getElementById('message');
    if(!email.value || !message.value){
      alert("Check your input please.");
    }
    else{
      $.ajax({
        url: "https://formspree.io/maibenami@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });
      e.preventDefault();
      $(this).get(0).reset(); // Reset the form
      alert("Message sent successfully!");
    }
  });
});
