
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