var slideIndex = 1;
carousel();

function carousel() {
    var b = document.getElementsByClassName('gallery_nav');
    
    for (i=0; i < b.length; i++) {
        b[i].classList.remove('active');
        if(i === slideIndex) {
            b[i].classList.add('active');
        }
    }

    var slide = slideIndex+1;
    var class_name= 'g'+slide;
    var gallery_id = document.getElementsByName('gallery');
      console.log('gallery id: ', gallery_id);
    for(j=0; j < gallery_id.length; j++){
        gallery_id[j].className='';
        gallery_id[j].classList.add(class_name);
    }
    
slideIndex++;
    
    if(slideIndex+1 > b.length)
        {slideIndex = 0;}
    
    setTimeout(carousel, 4000);
        
}

function gallerynav(button_id, class_name) {
    var b = document.getElementsByClassName('gallery_nav');
    
    for (i=0; i < b.length; i++) {
        b[i].classList.remove('active')
    }
    var active_button = document.getElementById(button_id);
    
    active_button.classList.add('active');
    
    var gallery_div = document.getElementById('gallery');
    gallery_div.className='';
    gallery_div.classList.add(class_name);
    
    var index = class_name.replace( /^\D+/g, '');
    slideIndex = index-1;
   
}