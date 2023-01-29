const mapCoord = [59.938635, 30.323118];
const mapCoordCenter = [59.938695, 30.323255];
const mapZoom = 17;
const mapIconImageOffset = [8, -152];
const map = document.querySelector('.contacts__map');

const initMap = () => {

    const myMap = new window.ymaps.Map('map', {
      center: mapCoordCenter,
      zoom: mapZoom,
      controls: ['smallMapDefaultSet']
    });

    const myPlacemark = new ymaps.Placemark(mapCoord, {
      hintContent: 'Эй, мы здесь!',
      balloonContent: 'Образовательный центр Clever Baby'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './images/svg/map-pin.svg',
      iconImageSize: [32, 39],
      iconImageOffset: mapIconImageOffset
    });

    myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(initMap);
