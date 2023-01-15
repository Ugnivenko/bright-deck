
<!-- GetButton.io widget -->
<script type="text/javascript">
(function () {
    var options = {
        email: "sveta-ugnivenko@mail.ru", // Email
        whatsapp: "8615601634272", // WhatsApp number
        call_to_action: "Message us", // Call to action
        button_color: "#A8CE50", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "email,whatsapp", // Order of buttons
        pre_filled_message: "Hello, I am messaging from your website...", // WhatsApp pre-filled message
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
</script>
<!-- /GetButton.io widget -->

// Testimonial 

$('.testimonial-slider-container').slick({
    // Add a settinfs here  
      autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 3000, // How long between each slide when auto-playing
        speed: 500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true
        infinite: false, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
      
    });
    
    