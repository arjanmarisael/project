function addMap(){

	var map = new L.Map('map');
	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/12fa93de2280446daf38f8c312293b43/111552/256/{z}/{x}/{y}.png',
	    cloudmadeAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	    cloudmade = new L.TileLayer(cloudmadeUrl, {

	        attribution: cloudmadeAttribution,
	        maxZoom: 18
	    });

	var groundzero = new L.LatLng(40.71167, -74.01361);
	map.setView(groundzero, 13).addLayer(cloudmade);
	var marker = L.marker([40.71544, -74.00590]).addTo(map);
}