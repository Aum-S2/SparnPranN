function initMap () {
  const loc = { lat: 24.465146, lng: 117.757501 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  const marker = new google.maps.Marker ({position: loc, map: map});
}