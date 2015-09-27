(function() {
    /** MEMBERS **/
    var members = window.roostMembers;
    var rows = [];
    var row = [];
    var isLeft = true;
    members.forEach(function(member, i) {
        if (i && i % 3 == 0) {
            rows.push(row);
            row = [];
            isLeft = !isLeft;
        }

        member.position = isLeft ? "left" : "right";
        row.push(member);
    });
    
    /** JOIN US **/
    $('#contactForm .success, #contactForm .error').hide();
    $('#contactForm').submit(function() {
        $('#contactForm .success, #contactForm .error').hide();

        $form = $(this); 
        $.ajax({ 
            url: $form.attr('action'),
            method: $form.attr('method'),
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                message: $('#message').val(),
                membership: $form.find('[name=membership]:checked').val(),
                _gotcha: $form.find('[name=_gotcha]').val(),
                _subject: $form.find('[name=_subject]').val()
            },
            dataType: "json",
            success: function() {
                $form.find('.success').fadeIn();        
            },
            error: function() {
                $form.find('.error').fadeIn();        
            }
        });

        return false;
    });

    /** MAP **/
    var latLng = new google.maps.LatLng(-32.92692, 151.78138);
    var mapOptions = {
        zoom: 15,
        center: latLng,
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ec4646"},{"visibility":"on"}]}],
        scrollwheel: false
    };
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Snazzy!'
    });

    /** PRICING TABLE **/
    var resizePricing = function() {
        var height = 0;
        var footerHeight = $('#pricing-table .panel-footer').outerHeight();
        $('#pricing-table .panel').each(function() {
            $(this).css('height', '');
            height = Math.max($(this).outerHeight(), height);
        });
        $('#pricing-table .panel').css('height', height + footerHeight + 'px');
    };
    $(window).resize(resizePricing).resize();

    /** SCROLL TO #ANCHOR LINKS **/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                   }, 1000);
                return false;
            }
        }
    });
})();