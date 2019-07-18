// Initialize And Add The Map
function initMap() {
  //Location
  const loc = { lat: 24.465146, lng: 117.757501 };
  //Centered Map On Location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // Marker, Positioned At Location
  const marker = new google.maps.Marker ({position: loc, map: map});
}


// Sticky Menu Background
window.addEventListener ('scroll', function() {
  if (this.window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 88
      },
      420
    );
  }
});