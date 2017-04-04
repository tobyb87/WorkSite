(function(){


	// image flipper header section (backstrech plugin jquery)

	 $(".header").backstretch([
      "assets/1.jpg",
      "assets/2.jpg",
      "assets/3.jpg"
      ], {
        fade: 750,
        duration: 4000
      }); 
	

   // text fipper header section you can customize it link here http://morphext.fyianlai.com/

   $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 5000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    // navigation fix to top you can customized it

    var navigation = $('.header').offset().top + 800;

    $(document).scroll(function(){	
    	if($(this).scrollTop() > navigation){
    		$('nav').addClass('navbar-fixed-top');
        $('nav').css({
          'z-index':'99999999'
        });
    	}
    	else
    	{
    		$('nav').removeClass('navbar-fixed-top');
         $('nav').css({
          'z-index':'0'
        });
    	}
    });

    // navigation scroll/swing code you can customize it 

    $(".scroll").on('click',function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top - 150;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
 
 

  

    $('.itemSubServices').on('mouseover',function(){
      $(this).children('i').css({
        'color':'#eab000'
      }).next('.floated').children('h3').css({
        'color':'#eab000'
      })
    });
    $('.itemSubServices').on('mouseout',function(){
      $(this).children('i').css({
        'color':'#404040'
      }).next('.floated').children('h3').css({
        'color':'#404040'
      })
    });

  

  // animate numbers fun facts you can customize it

  var targetFunFactsAnimationNumbers = $('#targetFunFactsAnimationNumbers').offset().top + 1;

  $(document).scroll(function(){

    if($(this).scrollTop() > targetFunFactsAnimationNumbers)
    {
      $('#animateNumber1').animate(  // animate numbers 
        {someValue: 970}, 
        {
        duration: 1000,
        easing:'swing',
        step: function() {
            $('#animateNumber1').text(Math.round(this.someValue));
        }
      });
      $('#animateNumber2').animate(  // animate numbers 
          {someValue: 720}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber2').text(Math.round(this.someValue));
          }
      });
      $('#animateNumber3').animate(  // animate numbers 
          {someValue: 450}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber3').text(Math.round(this.someValue));
          }
      });
      $('#animateNumber4').animate(  // animate numbers 
          {someValue: 24}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber4').text(Math.round(this.someValue));
          }
      });
    }
  });

 
 


  // portfolio section navigation hover effects

  $('.portfolio ul li a').on('click',function(e){
      e.preventDefault();
    $(this).parent().addClass("activeItem").siblings().removeClass("activeItem");
  });

  // portfolio mix it up . please check https://mixitup.kunkalabs.com/ for documentation

   $('#Container').mixItUp();
   
   // googleMaps you can customize it from https://snazzymaps.com/
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            // How zoomed in you want the map to start at
            zoom: 14,

            // The latitude and longitude to center the map
            center: new google.maps.LatLng(30.2672, -97.7431), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#f49935"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#fad959"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#a1cdfc"
            },
            {
                "saturation": 30
            },
            {
                "lightness": 49
            }
        ]
    }
  ]
          };

          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(30.2672, -97.7431),
              map: map,
              title: 'Snazzy!'
          });
      }


// end google maps




// wow js plugin 
 new WOW().init();
})();