// Initialize And Add The Map
function initMap() {
  //Location
  const loc = { lat: 24.465146, lng: 117.757501 };
  //Centered Map On Location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 10,
    center: loc
  });
  // Marker, Positioned At Location
  const marker = new google.maps.Marker ({position: loc, map: map});
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});