var typed = new Typed('#typed', {
    strings: ['','ICPC MET Community'],
    typeSpeed: 90,
    cursorChar: '',
    startDelay: 150,
    loop: false
});

setTimeout(()=>{
    // document.getElementById("overlay").remove();
    // document.body.style.overflow='auto';
    document.querySelector(".box1").classList.add('show-icon');
},2000)
    setTimeout(()=>{
    document.querySelector(".box2").classList.add('show-icon');
    document.querySelector(".box1").style.scale=1;
},2100)
setTimeout(()=>{
    document.querySelector(".box3").classList.add('show-icon');
    document.querySelector(".box2").style.scale=1;
},2200)
setTimeout(()=>{
    document.querySelector(".box4").classList.add('show-icon');
    document.querySelector(".box3").style.scale=1;
    document.querySelector(".box4").style.scale=1;
},2300)


// Our Community

hr.addEventListener('click', function() {
    hrTeam.classList.toggle("act");
    if(hrTeam.classList.contains("act")){
      hr.style.filter = 'none' ;
    }else{
      hr.style.filter = 'brightness(0.5)' ;
    }
    pr.style.filter = 'brightness(0.5)' ;
    media.style.filter = 'brightness(0.5)' ;
    tech.style.filter = 'brightness(0.5)' ;

    prTeam.classList.remove("act");
    mediaTeam.classList.remove("act");
    techTeam.classList.remove("act");
    
  });
  pr.addEventListener('click', function() {
    prTeam.classList.toggle("act");
    if(prTeam.classList.contains("act")){
      pr.style.filter = 'none' ;
    }else{
      pr.style.filter = 'brightness(0.5)' ;
    }

    hr.style.filter = 'brightness(0.5)' ;
    media.style.filter = 'brightness(0.5)' ;
    tech.style.filter = 'brightness(0.5)' ;

    hrTeam.classList.remove("act");
    mediaTeam.classList.remove("act");
    techTeam.classList.remove("act");
  });
  media.addEventListener('click', function() {
    mediaTeam.classList.toggle("act");
    if(mediaTeam.classList.contains("act")){
      media.style.filter = 'none' ;
    }else{
      media.style.filter = 'brightness(0.5)' ;
    }

    pr.style.filter = 'brightness(0.5)' ;
    hr.style.filter = 'brightness(0.5)' ;
    tech.style.filter = 'brightness(0.5)' ;

    prTeam.classList.remove("act");
    hrTeam.classList.remove("act");
    techTeam.classList.remove("act");
  });
  tech.addEventListener('click', function() {
    techTeam.classList.toggle("act");
    if(techTeam.classList.contains("act")){
      tech.style.filter = 'none' ;
    }else{
      tech.style.filter = 'brightness(0.5)' ;
    }

    pr.style.filter = 'brightness(0.5)' ;
    hr.style.filter = 'brightness(0.5)' ;
    media.style.filter = 'brightness(0.5)' ;

    prTeam.classList.remove("act");
    mediaTeam.classList.remove("act");
    hrTeam.classList.remove("act");
  });
