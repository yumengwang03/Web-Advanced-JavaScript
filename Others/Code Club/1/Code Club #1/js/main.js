$(function(){
	$('#mobile-nav-trigger').on('click',function(){
		$('#mobile-nav').toggle()
	})

	$('#mobile-nav .dropdown-trigger').on('click',function(){
		$('#mobile-nav .dropdown').toggle()
	})
var current, size;
  
  $('.lightboxTrigger').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    
    // determine the index of clicked trigger
    var slideNum = $('.lightboxTrigger').index(this);
    
    // find out if #lightbox exists
    if ($('#lightbox').length > 0) {        
      // #lightbox exists
      $('#lightbox').show();
      // prevent body content from scrolling
      $('body').css('overflow','hidden');
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightbox">' +
          '<div id="slideshow">' +
          '<div class="nav">' +
          '<a href="#prev" class="prev slide-nav">&leftarrow;</a>' +
          '<span>&nbsp;</span>' +
          '<a href="#next" class="next slide-nav">&rightarrow;</a>' +
          '</div>' +
          '<ul></ul>' +        
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);

      // prevent body content from scrolling
      $('body').css('overflow','hidden');
      
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('body').find('.lightboxTrigger').each(function() {
        var $href = $(this).find('img').attr('src');
        $('#slideshow ul').append(
          '<li>' +
          '<img class="slide-nav" src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshow ul > li').length;
    
    // hide all slide, then show the selected slide
    $('#slideshow ul > li').hide();
    $('#slideshow ul > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#lightbox', function() { 
    $('#lightbox').hide();
    // release body content for scrolling
    $('body').css('overflow','scroll');
  });
  
  //Press ESC to get rid of lightbox window
  $('body').on('keydown', function(e){
		if ((e.keyCode || e.which) == 27)
	    {
	    	$('#lightbox').hide();
	        $('body').css('overflow', 'scroll');
	    }  
	});

  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
      // in absence of .prev, assume .next
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow ul > li:eq(' + current + ')').hide();
    $('#slideshow ul > li:eq(' + dest + ')').show();
    
    // update current slide
    current = dest;
  });

})