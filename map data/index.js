function upadatemap() {
    fetch("/data.json")
        .then((Response) => Response.json())
        .then((rsp) => {
            console.log(rsp.data);
            rsp.data.forEach((element) => {
                latitude = element.latitude;
                longitude = element.longitude;
            });
            //    mark on the map

            new mapboxgl.Marker({
                    draggable: true,
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
}

updatemap();