$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".scroll-icon").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.bam !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var bam = this.bam;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(bam).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.bam = bam;
        });
      } // End if
    });
  });