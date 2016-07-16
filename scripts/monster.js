class Monster {
    constructor(map) {
        this.map = map;
        this.id = 1;
        this.name = 'Frogster';
        this.imagePath = 'assets/images/monster.png';
        this.hp = 50;
        this.latitude = 54.9561096;
        this.longitude = -1.5977312;
        this.googleLatLng;
        this.marker;

        this.infowindow = new google.maps.InfoWindow({
            content: '<div>A wild ' + this.name + ' is here.</div>' +
                     '<div><p><img src="' + this.imagePath + '" width="25%" height="25%" /></p></div>' +
                     '<div><p>HP: ' + this.hp + '</p></div>' +
                     '<div class="options"><button onclick="foo()">Battle!</button></div>'
        });
    }

    set() {
        this.googleLatLng = new google.maps.LatLng(this.latitude, this.longitude);
    }

    add() {
        this.marker = new google.maps.Marker({
            position: this.googleLatLng,
            map: this.map,
            icon: './assets/images/monster.png'
        });

        this.marker.addListener('click', function () {
            this.infowindow.open(map, this.marker);
        }.bind(this));
    }
}