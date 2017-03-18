
/* map function */

function initMap() {
	var location = {lat:37.980519, lng:23.754072};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location
        });
	var marker = new google.maps.Marker({
          position: location,
          map: map
        });
}