$(document).ready(function(){    
  $('.navigationButton').click(function(e){
    e.preventDefault();
    var linkHref = $(this).attr('href'); // this refers to .navigationButton
    var headerHeight = $('#header-nav').outerHeight(); 
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 800);
    $('#nav-about').removeClass('active');
    $('#nav-projects').removeClass('active');
    $('#nav-skills').removeClass('active');
    
    switch(linkHref){
      case '#aboutMeHeader':
        $('#nav-about').addClass(' active');
        break;
      case '#projectsHeader':
        $('#nav-projects').addClass(' active');
        break;
      case '#skillsHeader':
        $('#nav-skills').addClass(' active');
        break;
                   }
  });
});
