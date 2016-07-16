class Map {
    constructor() {
        this.map = null;
        this.monster = null;

        this.setMap();
        this.addMonster();
        this.listen();
    }

    setMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18
        });
    }

    listen() {
        window.navigator.geolocation.watchPosition(function (position) {
            console.log('position changed');

            var newPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            this.map.setCenter(newPosition);

            var myLatLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);

            var userMarker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
            });

            document.querySelector('.current-coordinates').innerText = 'Current coordinates: ' + newPosition.lat + ', ' + newPosition.lng;
        }.bind(this));
    }

    addMonster() {
        this.monster = new Monster(this.map);

        this.monster.set();
        this.monster.add();
    }
}