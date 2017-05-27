var scrollY = 0,
    speed = 5,
    destination = 0;
function scrollTo(arg){
  destination = document.getElementById(arg).offsetTop;
  switch(arg){
    case 'aboutMeHeader':
      destination += document.getElementById('about_tile').clientHeight / 2;
      break;
    case 'projectsHeader':
      destination += document.getElementById('projects_tile').clientHeight;
      break;
    case 'skillsHeader':
      destination += document.getElementById('skills_tile').clientHeight/2;
      break;
            }
  var scroller = setTimeout(function(){
    scrollTo(arg);
  }, 1);
  
  scrollY = scrollY + speed;
  if(scrollY >= destination){
    clearTimeout(scroller);
  }
  window.scroll(0, scrollY);
}
