ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.601742, 40.10808],
            zoom: 8,
			controls:[]
        }, {
			minZoom:8,
            searchControlProvider: 'yandex#search'
        });

	//выделение границ регионов
ymaps.regions.load('RU', {
	lang: 'ru',
	quality: 3
}).then(function (result) {
	var regions = result.geoObjects; // ссылка на коллекцию GeoObjectCollection
	regions.each(function(region) {
		if (region.properties.get('name') === 'Адыгея') {
			region.options.set({
				fillColor: '#ff0000',
				fillOpacity: 0,
				strokeColor: '#990000',
				strokeWidth: 2
			});
		} else {
			region.options.set('visible', false); // скрыть другие регионы
		}
	});
	myMap.geoObjects.add(regions);
}, function () {
	alert('No response');
});

	
	myGeoObject1 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.5925,40.118611]
        },
            
        properties: {
		hintContent: 'Поликлиника филиала №3 ФГКУ  «419 ВГ» Минобороны России',
		balloonContentBody: [
            '<strong>Поликлиника филиала №3 ФГКУ  «419 ВГ» Минобороны России</strong>',
            '<br/>',
            'Прикреплено населения: 18105',
            '<br/>',
			'Плановая мощность: 300',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject2 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.602023,40.094725]
        },
            
        properties: {
		hintContent: 'Филиал №7 Федеральное государственное казенное учреждение "1602 Военный клинический госпиталь" Министерства обороны Российской Федерации',
		balloonContentBody: [
            '<strong>Филиал №7 Федеральное государственное казенное учреждение "1602 Военный клинический госпиталь" Министерства обороны Российской Федерации</strong>',
            '<br/>',
            'Прикреплено населения: 18105',
            '<br/>',
			'Количество коек: 150',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject3 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.607986, 40.101414]
        },
            
        properties: {
		hintContent: 'АРБ СМЭ',
		balloonContentBody: [
            '<strong>АРБ СМЭ</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество врачей: 15',
			'<br/>',
			'Количество мед.персонала: 15',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Гончаров И.В.',
			'<br/>',
			'52-97-43',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	//Отделение танаталогии
	myGeoObject4 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.590497, 40.137985]
        },
            
        properties: {
			hintContent: 'Отделение танаталогии',
			balloonContent: 'Отделение танаталогии'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject5 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.62556, 40.118725]
        },
            
        properties: {
		hintContent: 'АРЦМК',
		balloonContentBody: [
            '<strong>АРЦМК</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество врачей: 6',
			'<br/>',
			'Количество мед.персонала: 4',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Директор Карант О.Е.',
			'<br/>',
			'53-46-81',
			'<br/>',
			'Диспетчерская',
			'<br/>',
			'52-45-10',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject6 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.611982,40.104444]
        },
            
        properties: {
		hintContent: 'АРЦМП',
		balloonContentBody: [
            '<strong>АРЦМП</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Численость прикрепленого населения: 354908',
			'<br/>',
			'Плановая мощность: 34',
			'<br/>',
			'Количество врачей: 7',
			'<br/>',
			'Количество мед.персонала: 15',
			'<br/>',
			'График работы: Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Метова З.А.',
			'<br/>',
			'52-36-36',
			'<br/>',
			'Приемная',
			'<br/>',
			'52-36-36',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	

	myGeoObject7 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.618843, 40.110999]
        },
            
        properties: {
			hintContent: 'АРЦМП',
			balloonContent: 'АРЦМП <br/> Плановая мощность: 21'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject8 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.607357, 40.100354]
        },
            
        properties: {
		hintContent: 'АРЦМР',
		balloonContentBody: [
            '<strong>АРЦМР</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 246',
			'<br/>',
			'Количество врачей: 7',
			'<br/>',
			'Количество мед.персонала: 21',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Хачегогу Л.С.',
			'<br/>',
			'52-59-94',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-56-13',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject9 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.611970,40.104434]
        },
            
        properties: {
		hintContent: 'АРЦПБС',
		balloonContentBody: [
            '<strong>АРЦПБС</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 18',
			'<br/>',
			'Количество врачей: 5',
			'<br/>',
			'Количество мед.персонала: 5',
			'<br/>',
			'График работы:Пн-Пт 8-15 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Мартьянова Л.В.',
			'<br/>',
			'52-32-86',
			'<br/>',
			'Секретарь',
			'<br/>',
			'52-32-86',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.598231, 40.111412]
        },
        properties: {
		hintContent: 'АРКБ',
		balloonContentBody: [
            '<strong>АРДКБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество коек: 217',
			'<br/>',
			'Количество врачей: 54',
			'<br/>',
			'Количество мед.персонала: 184',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач: Гуагова Ж.К.',
			'<br/>',
			'52-25-78',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-79-35',
        ].join('')
        }
    }, {
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject11 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.595606, 40.136179]
        },
            
        properties: {
		hintContent: 'АРДР',
		balloonContentBody: [
            '<strong>АРДР</strong>',
            '<br/>',
			'Количество врачей: 2',
			'<br/>',
			'Количество мед.персонала: 17',
			'<br/>',
			'График работы: круглосуточно',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Логинова И.Ю.',
			'<br/>',
			'54-86-60',
			'<br/>',
			'Регистратура',
			'<br/>',
			'54-56-17',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject12 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.601357, 40.106535]
        },
            
        properties: {
		hintContent: 'АРКБ',
		balloonContentBody: [
            '<strong>АРКБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество коек: 580',
			'<br/>',
			'Количество врачей: 167',
			'<br/>',
			'Количество мед.персонала: 399',
			'<br/>',
			'График работы:Пн-Пт 7.30-14 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Чеужева Н.С.',
			'<br/>',
			'',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-18-70',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	//диабетологический центр
	myGeoObject13 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.592519, 40.117943]
        },
            
        properties: {
			hintContent: 'Диабетологический центр',
			balloonContent: 'Диабетологический центр <br/> Плановая мощность: 70'
		}
    }, {
            
        preset: 'islands#violetCircleDotIcon',
    });
	
	//центр профессиональной патологии
	myGeoObject14 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.619934, 40.110613]
        },
            
        properties: {
			hintContent: 'Центр профессиональной патологии',
			balloonContent: 'Центр профессиональной патологии <br/> Плановая мощность: 102'
		}
    }, {
            
        preset: 'islands#violetCircleDotIcon',
    });
	
	//Cурдологический  центр
	myGeoObject15 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.611053, 40.108322]
        },
            
        properties: {
			hintContent: 'Cурдологический  центр',
			balloonContent: 'Cурдологический  центр <br/>Адрес: Жуковского 40 <br/> Плановая мощность: 10'
		}
    }, {
            
        preset: 'islands#violetCircleDotIcon',
    });
	
	//Консультативная  поликлиника
	myGeoObject16 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.602858, 40.104747]
        },
            
        properties: {
			hintContent: 'Консультативная  поликлиника',
			balloonContent: 'Консультативная  поликлиника<br/> Плановая мощность: 197'
		}
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Травматологическая  поликлиника
	myGeoObject17 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.605188, 40.100803]
        },
            
        properties: {
			hintContent: 'Травматологическая  поликлиника',
			balloonContent: 'Травматологическая  поликлиника<br/> Плановая мощность: 130'
		}
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	myGeoObject18 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.591091,40.139865]
        },
            
        properties: {
		hintContent: 'АРКИБ',
		balloonContentBody: [
            '<strong>АРКИБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество коек: 150',
			'<br/>',
			'Количество врачей: 31',
			'<br/>',
			'Количество мед.персонала: 85',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Крылач Л.Н.',
			'<br/>',
			'54-67-62',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject19 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.600099, 40.116659]
        },
            
        properties: {
		hintContent: 'АРККВД',
		balloonContentBody: [
            '<strong>АРККВД</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 250',
			'<br/>',
			'Количество врачей: 20',
			'<br/>',
			'Количество мед.персонала: 42',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Верба Я.И.',
			'<br/>',
			'54-88-80',
			'<br/>',
			'Регистратура',
			'<br/>',
			'54-99-61',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	
	myGeoObject20 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.596652, 40.063191]
        },
            
        properties: {
			hintContent: 'Стационарное отделение',
			balloonContent: 'Стационарное отделение<br/> Количество коек: 29'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject21 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.593368,40.135660]
        },
            
        properties: {
		hintContent: 'АРКОД',
		balloonContentBody: [
            '<strong>АРКОД</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 163',
			'<br/>',
			'Количество коек: 135',
			'<br/>',
			'Количество врачей: 40',
			'<br/>',
			'Количество мед.персонала: 114',
			'<br/>',
			'График работы:Пн-Пт',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Беретарь С.Х.',
			'<br/>',
			'54-48-39',
			'<br/>',
			'Регистратура',
			'<br/>',
			'54-08-41',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject22 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.590084,40.100178]
        },
            
        properties: {
		hintContent: 'АРКПНД',
		balloonContentBody: [
            '<strong>АРКПНД</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 150',
			'<br/>',
			'Количество врачей: 24',
			'<br/>',
			'Количество мед.персонала: 99',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Подлегаев Р.В.',
			'<br/>',
			'57-74-75',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-10-02',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	//АРКПНД
	myGeoObject23 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.622536,40.095289]
        },
            
        properties: {
			hintContent: 'АРКПНД',
			balloonContent: 'АРКПНД<br/>Количество коек: 280'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject24 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.609029,40.136456]
        },
            
        properties: {
			hintContent: 'АРКПНД',
			balloonContent: 'АРКПНД'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject25 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.603763, 40.09315]
        },
            
        properties: {
		hintContent: 'АРКПТД',
		balloonContentBody: [
            '<strong>АРКПТД</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 150',
			'<br/>',
			'Количество врачей: 23',
			'<br/>',
			'Количество мед.персонала: 68',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Мамий Н.М.',
			'<br/>',
			'52-48-90',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-12-84',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	//Третье стационарное отделение
	myGeoObject26 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.60386, 40.094991]
        },
            
        properties: {
			hintContent: 'Третье стационарное отделение',
			balloonContent: 'Третье стационарное отделение<br/>Количество коек: 65'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	//Первое и второе стационарные отделения
	myGeoObject27 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.602891, 40.094551]
        },
            
        properties: {
			hintContent: 'Первое и второе стационарные отделения',
			balloonContent: 'Первое и второе стационарные отделения<br/>Количество коек: 120'
		}
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject28 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.612029, 40.103651]
        },
            
        properties: {
		balloonContentBody: [
            '<strong>АРКСП</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 324',
			'<br/>',			
            'Численость прикрепленного населения: 356 380',
			'<br/>',
			'Количество врачей: 70',
			'<br/>',
			'Количество мед.персонала: 106',
			'<br/>',
			'График работы: пн-пт 7.24 - 20.30, сб-вс 8.30-15.06',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Шовгенов В.Б.',
			'<br/>',
			'52-17-31',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-27-22',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject29 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.607466, 40.103543]
        },
            
        properties: {
			hintContent: 'Детское отделение',
			balloonContent: 'Детское отделение'
		}
    }, {
            
            // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject30 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.605111, 40.136044]
        },
            
        properties: {
		hintContent: 'АРНД',
		balloonContentBody: [
            '<strong>АРНД</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Плановая мощность: 161',
			'<br/>',
			'Количество коек: 61',
			'<br/>',
			'Количество врачей: 9',
			'<br/>',
			'Количество мед.персонала: 36',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Паков Р.К.',
			'<br/>',
			'54-69-51',
			'<br/>',
			'Приемная',
			'<br/>',
			'54-92-31',
			'<br/>',
			'54-69-51',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });	
	
	myGeoObject31 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.608685,40.059804]
        },
            
        properties: {
		hintContent: 'Адыгейская республиканская станция переливания крови',
		balloonContentBody: [
            '<strong>Адыгейская республиканская станция переливания крови</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество врачей: 5',
			'<br/>',
			'Количество мед.персонала: 26',
			'<br/>',
			'График работы:Пн-Пт 8-16 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Чеучев М.Г.',
			'<br/>',
			'57-44-58',
			'<br/>',
			'Регистратура',
			'<br/>',
			'55-71-69',
        ].join('')
        }
    }, {
            
        preset: 'islands#redCircleDotIcon',
    });
	
	myGeoObject32 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.608056,40.063889]
        },
            
        properties: {
		hintContent: 'Общество с ограниченной ответственностью "АТЛАНТ"',
		balloonContentBody: [
            '<strong>Общество с ограниченной ответственностью "АТЛАНТ"</strong>',
            '<br/>',
            'Прикреплено населения: 449171',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject33 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.875697, 39.189238]
        },
            
        properties: {
		hintContent: 'Адыгейская межрайонная больница  им. К.М. Батмена',
		balloonContentBody: [
            '<strong>Адыгейская межрайонная больница  им. К.М. Батмена</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество коек: 105',
			'<br/>',
			'Плановая мощность: 300',
			'<br/>',
			'Количество врачей: 96',
			'<br/>',
			'Количество мед.персонала: 271',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Тлехас Ф.М.',
			'<br/>',
			'',
			'<br/>',
			'Регистратура',
			'<br/>',
			'887772 9-14-83',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
		//ФАП а. Ассоколай
	myGeoObject34 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.844717, 39.467581]
        },
            
        properties: {
			hintContent: 'ФАП а. Ассоколай',
			balloonContent: 'ФАП а. Ассоколай <br/> Прикреплено населения: 1520'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП с. Красное
	myGeoObject35 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.874203, 39.455229]
        },
            
        properties: {
			hintContent: 'ФАП с. Красное',
			balloonContent: 'ФАП с. Красное <br/> Прикреплено населения: 319'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Кунчукохабль
	myGeoObject36 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.981763, 39.475405]
        },
            
        properties: {
			hintContent: 'ФАП а. Кунчукохабль',
			balloonContent: 'ФАП а. Кунчукохабль <br/> Прикреплено населения: 543'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Казазов
	myGeoObject37 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.902697, 39.17579]
        },
            
        properties: {
			hintContent: 'ФАП х. Казазов',
			balloonContent: 'ФАП х. Казазов <br/> Прикреплено населения: 291'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Городской
	myGeoObject38 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.992919, 39.433068]
        },
            
        properties: {
			hintContent: 'ФАП х. Городской',
			balloonContent: 'ФАП х. Городской <br/> Прикреплено населения: 302'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Петров
	myGeoObject39 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.934718, 39.504448]
        },
            
        properties: {
			hintContent: 'ФАП х. Казазов',
			balloonContent: 'ФАП х. Казазов <br/> Прикреплено населения: 296'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Гатлукай
	myGeoObject40 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.894444,39.238889]
        },
            
        properties: {
			hintContent: 'ФАП а. Гатлукай',
			balloonContent: 'ФАП а. Гатлукай <br/> Прикреплено населения: 1558'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Псекупс
	myGeoObject41 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.831667,39.211111]
        },
            
        properties: {
			hintContent: 'ФАП а. Псекупс',
			balloonContent: 'ФАП а. Псекупс <br/> Прикреплено населения: 916'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Джиджихабльская врачебная амбулатория
	myGeoObject42 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.948056,39.403611]
        },
            
        properties: {
			hintContent: 'Джиджихабльская врачебная амбулатория',
			balloonContent: 'Джиджихабльская врачебная амбулатория <br/> Плановая мощность: 916'
		}
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
		//ФАП а. Тугургой
	myGeoObject43 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.9525,39.113056]
        },
            
        properties: {
			hintContent: 'ФАП а. Тугургой',
			balloonContent: 'ФАП а. Тугургой <br/> Прикреплено населения: 380'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Тауйхабль
	myGeoObject44 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.964444,39.373889]
        },
            
        properties: {
			hintContent: 'ФАП а. Тауйхабль',
			balloonContent: 'ФАП а. Тауйхабль <br/> Прикреплено населения: 212'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшикуйхабль
	myGeoObject45 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.941944,39.369167]
        },
            
        properties: {
			hintContent: 'ФАП а. Пшикуйхабль',
			balloonContent: 'ФАП а. Пшикуйхабль <br/> Прикреплено населения: 279'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Нешукай
	myGeoObject46 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.901944,39.418611]
        },
            
        properties: {
			hintContent: 'ФАП а. Нешукай',
			balloonContent: 'ФАП а. Нешукай <br/> Прикреплено населения: 939'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Красный
	myGeoObject47 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.856667,39.163611]
        },
            
        properties: {
			hintContent: 'ФАП п. Красный',
			balloonContent: 'ФАП п. Красный <br/> Плановая мощность: 173'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пчегатлукай
	myGeoObject48 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.885,39.264722]
        },
            
        properties: {
			hintContent: 'ФАП а. Пчегатлукай',
			balloonContent: 'ФАП а. Пчегатлукай <br/> Прикреплено населения: 868'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Теучежская больница
	myGeoObject49 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.887283,39.382906]
        },
            
        properties: {
			hintContent: 'Теучежская больница',
			balloonContentBody: [
            '<strong>Теучежская больница</strong>',
            '<br/>',
            'Прикреплено населения: 10456',
            '<br/>',
			'Плановая мощность: 370',
            '<br/>',
			'Количество коек: 33',
			'<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Ачох З.З.',
			'<br/>',
			'9-34-70',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
        ].join('')
		}
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Тлюстенхабльская врачебная амбулатория
	myGeoObject50 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.982222,39.101111]
        },
            
        properties: {
			hintContent: 'Тлюстенхабльская врачебная амбулатория',
			balloonContent: 'Тлюстенхабльская врачебная амбулатория <br/> Прикреплено населения: 6040<br/> Плановая мощность: 50'
		}
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Колос
	myGeoObject51 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.915278,39.390278]
        },
            
        properties: {
			hintContent: 'ФАП х. Колос',
			balloonContent: 'ФАП х. Колос <br/> Прикреплено населения: 165'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Начерезий
	myGeoObject52 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.922222,39.383056]
        },
            
        properties: {
			hintContent: 'ФАП а. Начерезий',
			balloonContent: 'ФАП а. Начерезий <br/> Прикреплено населения: 335'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Нововочепший
	myGeoObject53 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.904444,39.275278]
        },
            
        properties: {
			hintContent: 'ФАП х. Нововочепший',
			balloonContent: 'ФАП х. Нововочепший <br/> Прикреплено населения: 172'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Четук
	myGeoObject54 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.873056,39.152222]
        },
            
        properties: {
			hintContent: 'ФАП п. Четук',
			balloonContent: 'ФАП п. Четук <br/> Прикреплено населения: 344'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Вочепший
	myGeoObject55 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.872778,39.285556]
        },
            
        properties: {
			hintContent: 'ФАП а. Вочепший',
			balloonContent: 'ФАП а. Вочепший <br/> Прикреплено населения: 1381'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Габукайская врачебная амбулатория
	myGeoObject56 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.929444,39.559444]
        },
            
        properties: {
			hintContent: 'Габукайская врачебная амбулатория',
			balloonContent: 'Габукайская врачебная амбулатория <br/> Прикреплено населения: 2805<br/>Плановая мощность: 96'
		}
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Шевченко
	myGeoObject57 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.899167,39.521944]
        },
            
        properties: {
			hintContent: 'ФАП х. Шевченко',
			balloonContent: 'ФАП х. Шевченко <br/> Прикреплено населения: 671'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject58 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.921389,38.906389]
        },
            
        properties: {
		hintContent: 'Общество с ограниченной ответственностью "Центр здоровья"',
		balloonContentBody: [
            '<strong>Общество с ограниченной ответственностью "Центр здоровья"</strong>',
            '<br/>',
            'Прикреплено населения: 92737',
            '<br/>',
			'Количество коек: -',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject59 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.601111,40.115278]
        },
            
        properties: {
		hintContent: 'Общество с ограниченной ответственностью "ДИАЛИЗНЫЙ ЦЕНТР АДЫГЕИ"',
		balloonContentBody: [
            '<strong>Общество с ограниченной ответственностью "ДИАЛИЗНЫЙ ЦЕНТР АДЫГЕИ"</strong>',
            '<br/>',
            'Прикреплено населения: 449171',
            '<br/>',
			'Плановая мощность: 60',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject60 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.871456, 40.076558]
        },
            
        properties: {
		hintContent: 'Гиагинская ЦРБ',
		balloonContentBody: [
            '<strong>Гиагинская ЦРБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения:',
            '<br/>',
			'Прикреплено населения: 31213',
			'<br/>',
			'Количество коек: 104',
			'<br/>',
			'Количество врачей: 56',
			'<br/>',
			'Количество мед.персонала: 202',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Бурмистрова Н.И.',
			'<br/>',
			'9-70-70',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП п.Новый
	myGeoObject61 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.931917, 40.177133]
        },
            
        properties: {
			hintContent: 'ФАП п.Новый',
			balloonContent: 'ФАП п.Новый <br/> Прикреплено населения: 1291'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Садовый
	myGeoObject62 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.836667, 40.236389]
        },
            
        properties: {
			hintContent: 'ФАП х. Садовый',
			balloonContent: 'ФАП х. Садовый <br/> Прикреплено населения: 196'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Гиагинское поликлиническое отделение 
	myGeoObject63 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.873289, 40.065401]
        },
            
        properties: {
			hintContent: 'Гиагинское поликлиническое отделение ',
			balloonContent: 'Гиагинское поликлиническое отделение  <br/> Плановая мощность: 500<br/> Прикреплено населения: 13759'
		}
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//ДХ п. Черемушкин
	myGeoObject64 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.793611, 40.050278]
        },
            
        properties: {
			hintContent: 'ДХ п. Черемушкин ',
			balloonContent: 'ДХ п. Черемушкин'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ДХ х. Карцев
	myGeoObject65 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.748056,40.358611]
        },
            
        properties: {
			hintContent: 'ДХ х. Карцев',
			balloonContent: 'ДХ х. Карцев'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ФАП х.Вольно-Веселый
	myGeoObject66 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.9061,40.26321]
        },
            
        properties: {
			hintContent: 'ФАП х.Вольно-Веселый',
			balloonContent: 'ФАП х.Вольно-Веселый<br/> Прикреплено населения: 74'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Тамбовский
	myGeoObject67 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.75915,40.367414]
        },
            
        properties: {
			hintContent: 'ФАП х. Тамбовский',
			balloonContent: 'ФАП х. Тамбовский<br/> Прикреплено населения: 591'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Нижний Айрюм
	myGeoObject68 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.903056,40.184444]
        },
            
        properties: {
			hintContent: 'ФАП х. Нижний Айрюм',
			balloonContent: 'ФАП х. Нижний Айрюм<br/> Прикреплено населения: 278'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Прогресс
	myGeoObject69 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.869757,40.191021]
        },
            
        properties: {
			hintContent: 'ФАП х. Прогресс',
			balloonContent: 'ФАП х. Прогресс<br/> Прикреплено населения: 940'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Смолич-Малиновский
	myGeoObject70 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.867521,40.42655]
        },
            
        properties: {
			hintContent: 'ФАП х. Смолич-Малиновский',
			balloonContent: 'ФАП х. Смолич-Малиновский<br/> Прикреплено населения: 100'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП ст.Келермесская
	myGeoObject71 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.791706,40.132002]
        },
            
        properties: {
			hintContent: 'ФАП ст.Келермесская',
			balloonContent: 'ФАП ст.Келермесская<br/> Прикреплено населения: 2771'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП с. Сергиевское
	myGeoObject72 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.803333,40.346111]
        },
            
        properties: {
			hintContent: 'ФАП с. Сергиевское',
			balloonContent: 'ФАП с. Сергиевское<br/> Прикреплено населения: 1344'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Михельсон
	myGeoObject73 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.765595,40.306068]
        },
            
        properties: {
			hintContent: 'ФАП х. Михельсон',
			balloonContent: 'ФАП х. Михельсон<br/> Прикреплено населения: 21'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ДХ х. Красный Пахарь
	myGeoObject74 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.738889,40.298611]
        },
            
        properties: {
			hintContent: 'ДХ х. Красный Пахарь',
			balloonContent: 'ДХ х. Красный Пахарь'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ФАП п.Гончарка
	myGeoObject75 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.806832,39.955043]
        },
            
        properties: {
			hintContent: 'ФАП п.Гончарка',
			balloonContent: 'ФАП п.Гончарка<br/> Прикреплено населения: 1514'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Дондуковская УБ
	myGeoObject76 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.871475,40.3633]
        },
            
        properties: {
			hintContent: 'Дондуковская УБ',
			balloonContentBody: [
            '<strong>Дондуковская УБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения:',
            '<br/>',
			'Прикреплено населения: 6771',
			'<br/>',
			'Прикреплено населения: 6771',
			'<br/>',
			'Плановая мощность: 100',
			'<br/>',
			'Количество коек: 10',
			'<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Сазонов О.М.',
			'<br/>',
			'9-31-14',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
		}
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП п. Лесной
	myGeoObject77 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.797778,40.186389]
        },
            
        properties: {
			hintContent: 'ФАП п. Лесной',
			balloonContent: 'ФАП п. Лесной<br/> Прикреплено населения: 183'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ДХ с. Владимировское
	myGeoObject78 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.7475,40.196111]
        },
            
        properties: {
			hintContent: 'ДХ с. Владимировское',
			balloonContent: 'ДХ с. Владимировское'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	myGeoObject79 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.68,39.959722]
        },
            
        properties: {
		hintContent: 'Ханская  участковая  больница',
		balloonContentBody: [
            '<strong>Кошехабльская ЦРБ</strong>',
            '<br/>',
            'Прикреплено населения: 11145',
            '<br/>',
			'Плановая мощность: 150',
            '<br/>',
			'Количество коек: 13',
			'<br/>',
			'Количество врачей: 22',
			'<br/>',
			'Количество мед.персонала: 39',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Нартокова Л.В.',
			'<br/>',
			'56-51-73',
			'<br/>',
			'Регистратура',
			'<br/>',
			'56-64-61',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	myGeoObject80 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.598333,40.111389]
        },
            
        properties: {
		hintContent: 'Общество с ограниченной ответственностью "Изумруд"',
		balloonContentBody: [
            '<strong>Общество с ограниченной ответственностью "Изумруд"</strong>',
            '<br/>',
            'Прикреплено населения: 449171',
            '<br/>',
			'Плановая мощность: 217',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	 myGeoObject81 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.901389,40.490833]
        },
            
        properties: {
		hintContent: 'Кошехабльская ЦРБ',
		balloonContentBody: [
            '<strong>Кошехабльская ЦРБ</strong>',
            '<br/>',
            'Прикреплено населения: 24646',
            '<br/>',
			'Плановая мощность: 300',
            '<br/>',
			'Количество коек: 87',
			'<br/>',
			'Количество врачей: 61',
			'<br/>',
			'Количество мед.персонала: 188',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Пшизова З.А.',
			'<br/>',
			'9-14-50',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Вольненская врачебная амбулатория
	myGeoObject82 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.608611,40.716944]
        },
            
        properties: {
		hintContent: 'Вольненская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Вольненская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 4498',
            '<br/>',
			'Плановая мощность: 30',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП п. Комсомольский
	myGeoObject83 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.9025, 40.422222]
        },
            
        properties: {
			hintContent: 'ФАП п. Комсомольский',
			balloonContent: 'ФАП п. Комсомольский<br/>Прикреплено населения: 158'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Политотдел
	myGeoObject84 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.950278, 40.347222]
        },
            
        properties: {
			hintContent: 'ФАП х. Политотдел',
			balloonContent: 'ФАП х. Политотдел<br/>Прикреплено населения: 231'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Ходзенская врачебная амбулатория
	myGeoObject85 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.511111,40.711389]
        },
            
        properties: {
		hintContent: 'Ходзенская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Ходзенская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 2872',
            '<br/>',
			'Плановая мощность: 35',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х.Казенно-Кужорский
	myGeoObject86 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.671111, 40.662222]
        },
            
        properties: {
			hintContent: 'ФАП х.Казенно-Кужорский',
			balloonContent: 'ФАП х.Казенно-Кужорский<br/>Прикреплено населения: 801'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Врачебная амбулатория п. Дружба
	myGeoObject87 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.933889,40.375833]
        },
            
        properties: {
		hintContent: 'Врачебная амбулатория п. Дружба',
		balloonContentBody: [
            '<strong>Врачебная амбулатория п. Дружба</strong>',
            '<br/>',
            'Прикреплено населения: 5282',
            '<br/>',
			'Плановая мощность: 35',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Красный Фарс
	myGeoObject88 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.914167, 40.353333]
        },
            
        properties: {
			hintContent: 'ФАП х. Красный Фарс',
			balloonContent: 'ФАП х. Красный Фарс<br/>Прикреплено населения: 150'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Майская врачебная амбулатория
	myGeoObject89 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.783333,40.546111]
        },
            
        properties: {
		hintContent: 'Майская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Майская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 2626',
            '<br/>',
			'Плановая мощность: 70',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Врачебная амбулатория а. Блечепсин
	myGeoObject90 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.821389,40.496111]
        },
            
        properties: {
		hintContent: 'Врачебная амбулатория а. Блечепсин',
		balloonContentBody: [
            '<strong>Врачебная амбулатория а. Блечепсин</strong>',
            '<br/>',
            'Прикреплено населения: 3099',
            '<br/>',
			'Плановая мощность: 50',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Кармолино-Гидроицкий
	myGeoObject91 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.573056, 46.683333]
        },
            
        properties: {
			hintContent: 'ФАП х. Кармолино-Гидроицкий',
			balloonContent: 'ФАП х. Кармолино-Гидроицкий<br/>Прикреплено населения: 218'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Хачемзий
	myGeoObject92 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.950833, 40.318333]
        },
            
        properties: {
			hintContent: 'ФАП а. Хачемзий',
			balloonContent: 'ФАП а. Хачемзий<br/>Прикреплено населения: 685'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject93 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.731944,40.6225]
        },
            
        properties: {
		hintContent: 'Натырбовская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Натырбовская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 3914',
            '<br/>',
			'Плановая мощность: 70',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП а. Егерухай
	myGeoObject94 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.000278, 40.393611]
        },
            
        properties: {
			hintContent: 'ФАП а. Егерухай',
			balloonContent: 'ФАП а. Егерухай<br/>Прикреплено населения: 1620'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Шелковников
	myGeoObject95 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.574722, 40.717778]
        },
            
        properties: {
			hintContent: 'ФАП х. Шелковников',
			balloonContent: 'ФАП х. Шелковников<br/>Прикреплено населения: 213'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Игнатьевский
	myGeoObject96 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.841111, 40.461111]
        },
            
        properties: {
			hintContent: 'ФАП х. Игнатьевский',
			balloonContent: 'ФАП х. Игнатьевский<br/>Прикреплено населения: 958'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Красный
	myGeoObject97 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.773611, 40.519167]
        },
            
        properties: {
			hintContent: 'ФАП х. Красный',
			balloonContent: 'ФАП х. Красный<br/>Прикреплено населения: 220'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject98 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.1425,39.577778]
        },
            
        properties: {
		hintContent: 'Красногвардейская центральна районная больница',
		balloonContentBody: [
            '<strong>Красногвардейская центральна районная больница</strong>',
            '<br/>',
            'Прикреплено населения: 31157',
            '<br/>',
			'Количество коек: 115',
			'<br/>',
			'Количество врачей: 61',
			'<br/>',
			'Количество мед.персонала: 193',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Тхитлянов Э.А.',
			'<br/>',
			'',
			'<br/>',
			'Регистратура',
			'<br/>',
			'887778 5-20-75',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Врачебная амбулатория с.Садовое
	myGeoObject99 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.001667, 39.697778]
        },
            
        properties: {
			hintContent: 'Врачебная амбулатория с.Садовое',
			balloonContent: 'Врачебная амбулатория с.Садовое <br/>Прикреплено населения: 2951<br/> Плановая мощность: 10'
		}
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП Бжедугхабль
	myGeoObject100 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.977222, 39.706667]
        },
            
        properties: {
			hintContent: 'ФАП Бжедугхабль',
			balloonContent: 'ФАП Бжедугхабль <br/>Прикреплено населения: 1013'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Хатукайская врачебная амбулатория
	myGeoObject101 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.189722,39.665833]
        },
            
        properties: {
		hintContent: 'Хатукайская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Хатукайская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 5032',
            '<br/>',
			'Плановая мощность: 25',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ДХ х. Папенков
	myGeoObject102 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.074167, 39.587222]
        },
            
        properties: {
			hintContent: 'ДХ х. Папенков',
			balloonContent: 'ДХ х. Папенков'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ДХ п. Свободный
	myGeoObject103 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.188611, 39.591667]
        },
            
        properties: {
			hintContent: 'ДХ п. Свободный',
			balloonContent: 'ДХ п. Свободный'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//Врачебная амбулатория с.Белое
	myGeoObject104 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.049978,39.648537]
        },
            
        properties: {
		hintContent: 'Врачебная амбулатория с.Белое',
		balloonContentBody: [
            '<strong>Врачебная амбулатория с.Белое</strong>',
            '<br/>',
            'Прикреплено населения: 5483',
            '<br/>',
			'Плановая мощность: 15',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП Преображенское
	myGeoObject105 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.083611, 39.628611]
        },
            
        properties: {
			hintContent: 'ФАП Преображенское',
			balloonContent: 'ФАП Преображенское<br/>Прикреплено населения: 1444'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Еленовская врачебная амбулатория
	myGeoObject106 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.109444,39.688056]
        },
            
        properties: {
		hintContent: 'Еленовская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Еленовская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 3138',
            '<br/>',
			'Плановая мощность: 15',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП №1
	myGeoObject107 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.125, 39.654167]
        },
            
        properties: {
			hintContent: 'ФАП №1',
			balloonContent: 'ФАП №1<br/>Прикреплено населения: 476'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП №3
	myGeoObject108 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.086111, 39.7475]
        },
            
        properties: {
			hintContent: 'ФАП №3',
			balloonContent: 'ФАП №3<br/>Прикреплено населения: 883'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП Саратовский
	myGeoObject109 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.100833, 39.758333]
        },
            
        properties: {
			hintContent: 'ФАП Саратовский',
			balloonContent: 'ФАП Саратовский<br/>Прикреплено населения: 478'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП Джамбичий
	myGeoObject110 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.088611, 39.858889]
        },
            
        properties: {
			hintContent: 'ФАП Джамбичий',
			balloonContent: 'ФАП Джамбичий<br/>Прикреплено населения: 552'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП В-Назаровское
	myGeoObject111 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.003333, 39.753333]
        },
            
        properties: {
			hintContent: 'ФАП В-Назаровское',
			balloonContent: 'ФАП В-Назаровское<br/>Прикреплено населения: 564'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП Штурбино
	myGeoObject112 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.061389, 39.908056]
        },
            
        properties: {
			hintContent: 'ФАП Штурбино',
			balloonContent: 'ФАП Штурбино<br/>Прикреплено населения: 510'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ДХ п. Набережный
	myGeoObject113 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.211389, 39.632222]
        },
            
        properties: {
			hintContent: 'ДХ п. Набережный',
			balloonContent: 'ДХ п. Набережный'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ФАП Н-Севастопольское
	myGeoObject114 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.063889, 39.709722]
        },
            
        properties: {
			hintContent: 'ФАП Н-Севастопольское',
			balloonContent: 'ФАП Н-Севастопольское<br/>Прикреплено населения: 822'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Адамиевская врачебная амбулатория
	myGeoObject115 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.073333,39.500833]
        },
            
        properties: {
		hintContent: 'Адамиевская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Адамиевская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 1316',
            '<br/>',
			'Плановая мощность: 10',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ДХ п. Мирный
	myGeoObject116 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.059167, 39.5775]
        },
            
        properties: {
			hintContent: 'ДХ п. Мирный',
			balloonContent: 'ДХ п. Мирный'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	myGeoObject117 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.530096,40.176930]
        },
            
        properties: {
		hintContent: 'ЦРБ Майкопского района',
		balloonContentBody: [
            '<strong>ЦРБ Майкопского района</strong>',
            '<br/>',
            'Прикреплено населения: 59643',
            '<br/>',
			'Количество коек: 153',
			'<br/>',
			'Количество врачей: 119',
			'<br/>',
			'Количество мед.персонала: 399',
			'<br/>',
			'График работы:Пн-Пт 8-16 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Хаконов Р.А.',
			'<br/>',
			'2-92-25',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Амбулатория х.Северо-Восточные Сады
	myGeoObject118 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.637778,40.137778]
        },
            
        properties: {
		hintContent: 'Амбулатория х.Северо-Восточные Сады',
		balloonContentBody: [
            '<strong>Амбулатория х.Северо-Восточные Сады</strong>',
            '<br/>',
            'Прикреплено населения: 6800',
            '<br/>',
			'Плановая мощность: 50',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Побединская амбулатория
	myGeoObject119 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.558889,40.145]
        },
            
        properties: {
		hintContent: 'Побединская амбулатория',
		balloonContentBody: [
            '<strong>Побединская амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 5142',
            '<br/>',
			'Плановая мощность: 75',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Районная поликлиника
	myGeoObject120 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.509595,40.179493]
        },
            
        properties: {
		hintContent: 'Районная поликлиника',
		balloonContentBody: [
            '<strong>Районная поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 10875',
            '<br/>',
			'Плановая мощность: 600',
			'<br/>',
			'График работы:Пн-Пт 8-16 часов',
			'<br/>',
			'Регистратура',
			'<br/>',
			'88772 5-12-74',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Стоматологическая поликлиника
	myGeoObject121 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.509783,40.176074]
        },
            
        properties: {
		hintContent: 'Стоматологическая поликлиника',
		balloonContentBody: [
            '<strong>Стоматологическая поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 10875',
            '<br/>',
			'Плановая мощность: -',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Краснооктябрьская амбулатория
	myGeoObject122 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.578611,40.076111]
        },
            
        properties: {
		hintContent: 'Краснооктябрьская амбулатория',
		balloonContentBody: [
            '<strong>Краснооктябрьская амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 8010',
            '<br/>',
			'Плановая мощность: 100',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Отделение скорой медицинской помощи
	myGeoObject123 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.509483,40.179861]
        },
            
        properties: {
		hintContent: 'Отделение скорой медицинской помощи',
		balloonContentBody: [
            '<strong>Отделение скорой медицинской помощи</strong>',
            '<br/>',
            'Прикреплено населения: 60024',
        ].join('')
        }
    }, {
            
        preset: 'islands#grayCircleDotIcon',
    });
	
	//Абадзехская амбулатория
	myGeoObject124 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.389444,40.218611]
        },
            
        properties: {
		hintContent: 'Абадзехская амбулатория',
		balloonContentBody: [
            '<strong>Абадзехская амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 6489',
			'<br/>',
			'Плановая мощность: 100',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Каменномостская поликлиника
	myGeoObject125 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.312509,40.194346]
        },
            
        properties: {
		hintContent: 'Каменномостская поликлиника',
		balloonContentBody: [
            '<strong>Каменномостская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 7357',
			'<br/>',
			'Плановая мощность: 250',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Каменномостская участковая больница
	myGeoObject126 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.311577,40.193316]
        },
            
        properties: {
		hintContent: 'Каменномостская участковая больница',
		balloonContentBody: [
            '<strong>Каменномостская участковая больница</strong>',
            '<br/>',
            'Прикреплено населения: 7357',
			'<br/>',
			'Количество коек: 30',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Кужорская амбулатория
	myGeoObject127 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.681111,40.313889]
        },
            
        properties: {
		hintContent: 'Кужорская амбулатория',
		balloonContentBody: [
            '<strong>Кужорская амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 3825',
			'<br/>',
			'Плановая мощность: 100',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Тимирязева
	myGeoObject128 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.470278, 40.168333]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Тимирязева',
			balloonContent: 'Фельдшерско-акушерский пункт п.Тимирязева<br/>Прикреплено населения: 1152'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт с.Хамышки
	myGeoObject129 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.096944, 40.131111]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт с.Хамышки',
			balloonContent: 'Фельдшерско-акушерский пункт с.Хамышки<br/>Прикреплено населения: 781'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Новосвободная
	myGeoObject130 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.351389, 40.412222]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Новосвободная',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Новосвободная<br/>Прикреплено населения: 618'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Трехречный
	myGeoObject131 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.665, 40.383333]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Трехречный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Трехречный<br/>Прикреплено населения: 653'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Дагестанская
	myGeoObject132 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.368611, 40.015278]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Дагестанская',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Дагестанская<br/>Прикреплено населения: 513'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Безводная
	myGeoObject133 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.375833, 39.913611]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Безводная',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Безводная<br/>Прикреплено населения: 62'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Табачный
	myGeoObject134 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.565278, 40.080278]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Табачный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Табачный<br/>Прикреплено населения: 1926'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Совхозный
	myGeoObject135 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.543333, 40.150833]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Совхозный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Совхозный<br/>Прикреплено населения: 1468'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Цветочный
	myGeoObject136 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.491389, 40.144167]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Цветочный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Цветочный<br/>Прикреплено населения: 1432'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт с.Новопрохладное
	myGeoObject137 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.1375, 40.286667]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт с.Новопрохладное',
			balloonContent: 'Фельдшерско-акушерский пункт с.Новопрохладное<br/>Прикреплено населения: 155'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Победа
	myGeoObject138 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.294722, 40.31]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Победа',
			balloonContent: 'Фельдшерско-акушерский пункт п.Победа<br/>Прикреплено населения: 157'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Севастопольская
	myGeoObject139 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.348889, 40.316944]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Севастопольская',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Севастопольская<br/>Прикреплено населения: 617'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Красная Улька
	myGeoObject140 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.695833, 40.1775]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Красная Улька',
			balloonContent: 'Фельдшерско-акушерский пункт х.Красная Улька<br/>Прикреплено населения: 406'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Пролеарский
	myGeoObject141 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.616389, 40.175833]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Пролеарский',
			balloonContent: 'Фельдшерско-акушерский пункт х.Пролеарский<br/>Прикреплено населения: 1064'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Абадзехская
	myGeoObject142 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.39, 40.199167]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Абадзехская',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Абадзехская<br/>Прикреплено населения: 3643'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Садовый
	myGeoObject143 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.5525, 40.106944]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Садовый',
			balloonContent: 'Фельдшерско-акушерский пункт х.Садовый<br/>Прикреплено населения: 437'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Гражданский
	myGeoObject144 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.689444, 40.146111]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Гражданский',
			balloonContent: 'Фельдшерско-акушерский пункт х.Гражданский<br/>Прикреплено населения: 381'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Советский
	myGeoObject145 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.670556, 40.096667]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Советский',
			balloonContent: 'Фельдшерско-акушерский пункт х.Советский<br/>Прикреплено населения: 490'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Причтовский
	myGeoObject146 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.530278, 40.141944]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Причтовский',
			balloonContent: 'Фельдшерско-акушерский пункт х.Причтовский<br/>Прикреплено населения: 390'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Подгорный
	myGeoObject147 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.460556, 40.180556]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Подгорный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Подгорный<br/>Прикреплено населения: 121'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Даховская
	myGeoObject148 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.232778, 40.204167]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Даховская',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Даховская<br/>Прикреплено населения: 1388'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Усть-Сахрай
	myGeoObject149 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.21, 40.28]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Усть-Сахрай',
			balloonContent: 'Фельдшерско-акушерский пункт п.Усть-Сахрай<br/>Прикреплено населения: 306'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Первомайский
	myGeoObject150 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.412222, 40.177778]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Первомайский',
			balloonContent: 'Фельдшерско-акушерский пункт п.Первомайский<br/>Прикреплено населения: 1277'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт ст.Курджипская
	myGeoObject151 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.462222, 40.051667]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт ст.Курджипская',
			balloonContent: 'Фельдшерско-акушерский пункт ст.Курджипская<br/>Прикреплено населения: 1590'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Калинин
	myGeoObject152 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.699722, 40.132222]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Калинин',
			balloonContent: 'Фельдшерско-акушерский пункт х.Калинин<br/>Прикреплено населения: 276'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Ткачев
	myGeoObject153 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.725833, 40.201389]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Ткачев',
			balloonContent: 'Фельдшерско-акушерский пункт х.Ткачев<br/>Прикреплено населения: 227'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт а.Мафэхабль
	myGeoObject154 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.635833, 40.183056]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт а.Мафэхабль',
			balloonContent: 'Фельдшерско-акушерский пункт а.Мафэхабль<br/>Прикреплено населения: 177'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт п.Удобный
	myGeoObject155 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.551667, 40.156944]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт п.Удобный',
			balloonContent: 'Фельдшерско-акушерский пункт п.Удобный<br/>Прикреплено населения: 1407'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Фельдшерско-акушерский пункт х.Грозный
	myGeoObject156 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.558611, 40.131389]
        },
            
        properties: {
			hintContent: 'Фельдшерско-акушерский пункт х.Грозный',
			balloonContent: 'Фельдшерско-акушерский пункт х.Грозный<br/>Прикреплено населения: 670'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject157 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.610556,40.09]
        },
            
        properties: {
		hintContent: 'Майкопская городская детская поликлиника №1',
		balloonContentBody: [
            '<strong>Майкопская городская детская поликлиника №1</strong>',
            '<br/>',
            'Прикреплено населения: 16429',
            '<br/>',
			'Плановая мощность: 700',
            '<br/>',
			'Количество врачей: 34',
			'<br/>',
			'Количество мед.персонала: 89',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Владимирова Е. В.',
			'<br/>',
			'53-47-38',
			'<br/>',
			'Регистратура',
			'<br/>',
			'53-46-09',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	myGeoObject158 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.593448,40.122124]
        },
            
        properties: {
		hintContent: 'Майкопская детская городская поликлиника № 2',
		balloonContentBody: [
            '<strong>Майкопская детская городская поликлиника № 2</strong>',
            '<br/>',
            'Прикреплено населения: 8442',
            '<br/>',
			'Плановая мощность: 483',
            '<br/>',
			'Количество врачей: 24',
			'<br/>',
			'Количество мед.персонала: 74',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Швецова Н.М.',
			'<br/>',
			'54-17-80',
			'<br/>',
			'Регистратура',
			'<br/>',
			'54-02-82',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });

	myGeoObject159 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.617105,40.104722]
        },
            
        properties: {
		hintContent: '«Майкопская детская городская поликлиника № 2», 2-ое педиатрическое отделение',
		balloonContentBody: [
            '<strong>«Майкопская детская городская поликлиника № 2», 2-ое педиатрическое отделение </strong>',
            '<br/>',
            'Прикреплено населения: 5786',
            '<br/>',
			'Плановая мощность: 282',
			'<br/>',
			'Регистратура',
			'<br/>',
			'53-76-20',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	myGeoObject160 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.5975,40.109444]
        },
            
        properties: {
		hintContent: 'Майкопская городская клиническая больница',
		balloonContentBody: [
            '<strong>Майкопская городская клиническая больница</strong>',
            '<br/>',
			'Плановая мощность: 217',
            '<br/>',
			'Количество коек: 498',
			'<br/>',
			'Количество врачей: 78',
			'<br/>',
			'Количество мед.персонала: 178',
			'<br/>',
			'График работы:Пн-Пт 8-17 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Намитоков М.А.',
			'<br/>',
			'52-95-15',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-51-80',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	myGeoObject161 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.616111,40.064444]
        },
            
        properties: {
		hintContent: 'Майкопская городская поликлиника №1',
		balloonContentBody: [
            '<strong>Майкопская городская поликлиника №1</strong>',
            '<br/>',
			'Плановая мощность: 643',
            '<br/>',
			'Количество коек: 61021',
			'<br/>',
			'Количество врачей: 60',
			'<br/>',
			'Количество мед.персонала: 123',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Хакунова А.К.',
			'<br/>',
			'55-65-92',
			'<br/>',
			'Регистратура:',
			'<br/>',
			'55-65-80',
			'<br/>',
			'55-03-03',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Отделение  поселка  Западный
	myGeoObject162 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.628889,40.076389]
        },
            
        properties: {
		hintContent: 'Отделение  поселка  Западный',
		balloonContentBody: [
            '<strong>Отделение  поселка  Западный</strong>',
            '<br/>',
            'Прикреплено населения: 8546',
            '<br/>',
			'Плановая мощность: 59',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	// Клинико-диагностическая  лаборатория
	myGeoObject163 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.611389,40.094444]
        },
            
        properties: {
		hintContent: ' Клинико-диагностическая  лаборатория',
		balloonContentBody: [
            '<strong>Клинико-диагностическая лаборатория</strong>',
            '<br/>',
            'Прикреплено населения: 61021',
            '<br/>',
			'Плановая мощность: 120',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	// кабинет уролога, кабинет ЭФГДС
	myGeoObject164 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.611667,40.065278]
        },
            
        properties: {
		hintContent: 'кабинет уролога, кабинет ЭФГДС',
		balloonContentBody: [
            '<strong>кабинет уролога, кабинет ЭФГДС</strong>',
            '<br/>',
            'Прикреплено населения: 61021',
            '<br/>',
			'Плановая мощность: -',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//  Фельдшерско-акушерский  пункт
	myGeoObject165 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.613056,40.028333]
        },
            
        properties: {
		hintContent: 'Фельдшерско-акушерский  пункт',
		balloonContentBody: [
            '<strong>Фельдшерско-акушерский  пункт</strong>',
            '<br/>',
            'Прикреплено населения: 4842',
            '<br/>',
			'Плановая мощность: 18',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject166 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.601389,40.113889]
        },
            
        properties: {
		hintContent: 'Майкопская  городская  поликлиника  № 2',
		balloonContentBody: [
            '<strong>Майкопская  городская  поликлиника  № 2</strong>',
            '<br/>',
            'Прикреплено населения: 20696',
            '<br/>',
			'Плановая мощность: 55',
            '<br/>',
			'Количество врачей: 40',
			'<br/>',
			'Количество мед.персонала: 60',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Сосновский Д.Г.',
			'<br/>',
			'54-44-77',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-10-86',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Поликлиническое отделение № 2
	myGeoObject167 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.573333,40.127778]
        },
            
        properties: {
		hintContent: 'Поликлиническое отделение № 2',
		balloonContentBody: [
            '<strong>Поликлиническое отделение № 2</strong>',
            '<br/>',
            'Прикреплено населения: 11374',
            '<br/>',
			'Плановая мощность: 182',
			'Регистратура',
			'<br/>',
			'54-37-80',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Поликлиническое отделение № 3 Женская консультация
	myGeoObject168 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.588889,40.120556]
        },
            
        properties: {
		hintContent: 'Поликлиническое отделение № 3 Женская консультация',
		balloonContentBody: [
            '<strong>Поликлиническое отделение № 3<br/>Женская консультация</strong>',
            '<br/>',
            'Прикреплено населения: 19638',
            '<br/>',
			'Плановая мощность: 83',
			'Регистратура',
			'<br/>',
			'54-96-67',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	// Филиал поликлинического отделения № 2
	myGeoObject169 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.593333,40.132778]
        },
            
        properties: {
		hintContent: ' Филиал поликлинического отделения № 2',
		balloonContentBody: [
            '<strong> Филиал поликлинического отделения № 2</strong>',
            '<br/>',
            'Прикреплено населения: 3414',
            '<br/>',
			'Плановая мощность: -',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	myGeoObject170 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.618333,40.110833]
        },
            
        properties: {
		hintContent: 'Майкопская городская поликлиника № 3',
		balloonContentBody: [
            '<strong>Майкопская городская поликлиника № 3</strong>',
            '<br/>',
            'Прикреплено населения: 35313',
            '<br/>',
			'Плановая мощность: 572',
            '<br/>',
			'Количество врачей: 75',
			'<br/>',
			'Количество мед.персонала: 133',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Макрищева Е. С.',
			'<br/>',
			'52-11-16',
			'<br/>',
			'Регистратура',
			'<br/>',
			'52-12-40',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	myGeoObject171 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.603056,40.101944]
        },
            
        properties: {
		hintContent: 'Общество с ограниченной ответственностью "МРТ-ЭКСПЕРТ МАЙКОП"',
		balloonContentBody: [
            '<strong>Общество с ограниченной ответственностью "МРТ-ЭКСПЕРТ МАЙКОП"</strong>',
            '<br/>',
            'Прикреплено населения: 437942',
            '<br/>',
			'Плановая мощность: -',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject172 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.0275,40.222778]
        },
            
        properties: {
		hintContent: 'Шовгеновская центральная районная больница',
		balloonContentBody: [
            '<strong>Шовгеновская центральная районная больница</strong>',
            '<br/>',
            'Прикреплено населения: 14644',
            '<br/>',
			'Плановая мощность: 250',
            '<br/>',
			'Количество коек: 40',
			'<br/>',
			'Количество врачей: 20',
			'<br/>',
			'Количество мед.персонала: 126',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Панов Р.Г.',
			'<br/>',
			'9-21-96',
			'<br/>',
			'Регистратура',
			'<br/>',
			'887773 9-27-65',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП х. Дукмасов
	myGeoObject173 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.005833, 39.918611]
        },
            
        properties: {
			hintContent: 'ФАП х. Дукмасов',
			balloonContent: 'ФАП х. Дукмасов<br/>Прикреплено населения: 513'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Кабехабль
	myGeoObject174 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.055556, 40.180833]
        },
            
        properties: {
			hintContent: 'ФАП а. Кабехабль',
			balloonContent: 'ФАП а. Кабехабль<br/>Прикреплено населения: 1070'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Свободный Труд
	myGeoObject175 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.984167, 40.298056]
        },
            
        properties: {
			hintContent: 'ФАП х. Свободный Труд',
			balloonContent: 'ФАП х. Свободный Труд<br/>Прикреплено населения: 339'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Веселый
	myGeoObject176 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.058056, 40.065833]
        },
            
        properties: {
			hintContent: 'ФАП х. Веселый',
			balloonContent: 'ФАП х. Веселый<br/>Прикреплено населения: 276'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Зарево
	myGeoObject177 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.997222, 40.080278]
        },
            
        properties: {
			hintContent: 'ФАП п. Зарево',
			balloonContent: 'ФАП п. Зарево<br/>Прикреплено населения: 998'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшизов
	myGeoObject178 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.093333, 40.105556]
        },
            
        properties: {
			hintContent: 'ФАП а. Пшизов',
			balloonContent: 'ФАП а. Пшизов<br/>Прикреплено населения: 895'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Семено-Макаренский
	myGeoObject179 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.919167, 40.245278]
        },
            
        properties: {
			hintContent: 'ФАП х. Семено-Макаренский',
			balloonContent: 'ФАП х. Семено-Макаренский<br/>Прикреплено населения: 96'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Мамацев
	myGeoObject180 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.942778, 39.991389]
        },
            
        properties: {
			hintContent: 'ФАП х. Мамацев',
			balloonContent: 'ФАП х. Мамацев<br/>Прикреплено населения: 433'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Тихонов
	myGeoObject181 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.968611, 39.951944]
        },
            
        properties: {
			hintContent: 'ФАП х. Тихонов',
			balloonContent: 'ФАП х. Тихонов<br/>Прикреплено населения: 584'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Чернышев
	myGeoObject182 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.049167, 40.036944]
        },
            
        properties: {
			hintContent: 'ФАП х. Чернышев',
			balloonContent: 'ФАП х. Чернышев<br/>Прикреплено населения: 785'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Михайлов
	myGeoObject183 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.976667, 40.150556]
        },
            
        properties: {
			hintContent: 'ФАП х. Михайлов',
			balloonContent: 'ФАП х. Михайлов<br/>Прикреплено населения: 489'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Мокроназаров
	myGeoObject184 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.984444, 39.955278]
        },
            
        properties: {
			hintContent: 'ФАП х. Мокроназаров',
			balloonContent: 'ФАП х. Мокроназаров<br/>Прикреплено населения: 525'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Ульский
	myGeoObject185 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.035556, 40.067778]
        },
            
        properties: {
			hintContent: 'ФАП п. Ульский',
			balloonContent: 'ФАП п. Ульский<br/>Прикреплено населения: 137'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Хатажукай
	myGeoObject186 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.070556, 40.183611]
        },
            
        properties: {
			hintContent: 'ФАП а. Хатажукай',
			balloonContent: 'ФАП а. Хатажукай<br/>Прикреплено населения: 933'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшичо
	myGeoObject187 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.066944, 40.1775]
        },
            
        properties: {
			hintContent: 'ФАП а. Пшичо',
			balloonContent: 'ФАП а. Пшичо<br/>Прикреплено населения: 1083'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Киров
	myGeoObject188 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.0925, 40.264722]
        },
            
        properties: {
			hintContent: 'ФАП х. Киров',
			balloonContent: 'ФАП х. Киров<br/>Прикреплено населения: 107'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	myGeoObject189 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.000278,38.7775]
        },
            
        properties: {
		hintContent: 'Современный медицинский центр им. Х.М. Совмена - клиника XXI века',
		balloonContentBody: [
            '<strong>Современный медицинский центр им. Х.М. Совмена - клиника XXI века</strong>',
            '<br/>',
            'Прикреплено населения: 356434',
            '<br/>',
			'Плановая мощность: -',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#redDotIcon',
    });
	
	myGeoObject190 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.593611,40.109167]
        },
            
        properties: {
		hintContent: 'Станция скорой медицинской помощи города Майкопа',
		balloonContentBody: [
            '<strong>Станция скорой медицинской помощи города Майкопа</strong>',
            '<br/>',
            'Прикреплено населения: 229737',
            '<br/>',
			'Количество врачей: 25',
			'<br/>',
			'Количество мед.персонала: 147',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Есауленко И.В.',
			'<br/>',
			'52-25-60',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#grayCircleDotIcon',
    });
	
	myGeoObject191 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.927778,38.983611]
        },
            
        properties: {
		hintContent: 'Тахтамукайская ЦРБ',
		balloonContentBody: [
            '<strong>Тахтамукайская ЦРБ</strong>',
            '<br/>',
            'Прикреплено населения: 73762',
            '<br/>',
			'Плановая мощность: 110',
            '<br/>',
			'Количество коек: 70',
			'<br/>',
			'Количество врачей: 42',
			'<br/>',
			'Количество мед.персонала: 100',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Нехай С.Д.',
			'<br/>',
			'9-63-56',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Тахтамукайская поликлиника
	myGeoObject192 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.919211,38.986261]
        },
            
        properties: {
		hintContent: 'Тахтамукайская поликлиника',
		balloonContentBody: [
            '<strong>Тахтамукайская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 0',
            '<br/>',
			'Плановая мощность: 0',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Яблоновская поликлиника
	myGeoObject193 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.99,38.931667]
        },
            
        properties: {
		hintContent: 'Яблоновская поликлиника',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 32765',
            '<br/>',
			'Плановая мощность: 500',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Энемская районная больница
	myGeoObject194 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.919444,38.902778]
        },
            
        properties: {
		hintContent: 'Энемская районная больница',
		balloonContentBody: [
            '<strong>Энемская районная больница</strong>',
            '<br/>',
            'Прикреплено населения: 21463',
            '<br/>',
			'Количество коек: 107',
        ].join('')
        }
    }, {
            
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Энемская поликлиника
	myGeoObject195 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.924167,38.908333]
        },
            
        properties: {
		hintContent: 'Энемская поликлиника',
		balloonContentBody: [
            '<strong>Энемская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 21463',
            '<br/>',
			'Плановая мощность: -',
        ].join('')
        }
    }, {
            
        preset: 'islands#nightCircleDotIcon',
    });
	
	//ФАП х. Новый сад
	myGeoObject196 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.904444, 38.907778]
        },
            
        properties: {
			hintContent: 'ФАП х. Новый сад',
			balloonContent: 'ФАП х. Новый сад<br/>Прикреплено населения: 1309'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Дружный
	myGeoObject197 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.955556, 38.892222]
        },
            
        properties: {
			hintContent: 'ФАП п. Дружный',
			balloonContent: 'ФАП п. Дружный<br/>Прикреплено населения: 445'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Панахес
	myGeoObject198 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.986667, 38.718333]
        },
            
        properties: {
			hintContent: 'ФАП а. Панахес',
			balloonContent: 'ФАП а. Панахес<br/>Прикреплено населения: 1509'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Хаштук
	myGeoObject199 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.042222, 38.751667]
        },
            
        properties: {
			hintContent: 'ФАП а. Хаштук',
			balloonContent: 'ФАП а. Хаштук<br/>Прикреплено населения: 274'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Старобжегокай
	myGeoObject200 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.033611, 38.895556]
        },
            
        properties: {
			hintContent: 'ФАП а. Старобжегокай',
			balloonContent: 'ФАП а. Старобжегокай<br/>Прикреплено населения: 2275'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Новая Адыгея
	myGeoObject201 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.024722, 38.936111]
        },
            
        properties: {
			hintContent: 'ФАП а. Новая Адыгея',
			balloonContent: 'ФАП а. Новая Адыгея<br/>Прикреплено населения: 2609'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Натухай
	myGeoObject202 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.864722, 38.988333]
        },
            
        properties: {
			hintContent: 'ФАП а. Натухай',
			balloonContent: 'ФАП а. Натухай<br/>Прикреплено населения: 328'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п Прикубанский
	myGeoObject203 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.956944, 39.026944]
        },
            
        properties: {
			hintContent: 'ФАП п Прикубанский',
			balloonContent: 'ФАП п Прикубанский<br/>Прикреплено населения: 1080'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а.Новообжегокай
	myGeoObject204 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.933056, 38.835833]
        },
            
        properties: {
			hintContent: 'ФАП а.Новообжегокай',
			balloonContent: 'ФАП а.Новообжегокай<br/>Прикреплено населения: 369'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п.Кубаньстрой
	myGeoObject205 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.997222, 38.792222]
        },
            
        properties: {
			hintContent: 'ФАП п.Кубаньстрой',
			balloonContent: 'ФАП п.Кубаньстрой<br/>Прикреплено населения: 396'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Псейтук
	myGeoObject206 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.051944, 38.708333]
        },
            
        properties: {
			hintContent: 'ФАП а. Псейтук',
			balloonContent: 'ФАП а. Псейтук<br/>Прикреплено населения: 614'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Шенджий
	myGeoObject207 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.883611, 39.068889]
        },
            
        properties: {
			hintContent: 'ФАП а. Шенджий',
			balloonContent: 'ФАП а. Шенджий<br/>Прикреплено населения: 1934'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х.Суповский
	myGeoObject208 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.904444, 38.946944]
        },
            
        properties: {
			hintContent: 'ФАП х.Суповский',
			balloonContent: 'ФАП х.Суповский<br/>Прикреплено населения: 553'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Новый
	myGeoObject209 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.008056, 38.981667]
        },
            
        properties: {
			hintContent: 'ФАП п. Новый',
			balloonContent: 'ФАП п. Новый<br/>Прикреплено населения: 2003'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Хомуты
	myGeoObject210 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.998889, 38.869167]
        },
            
        properties: {
			hintContent: 'ФАП х. Хомуты',
			balloonContent: 'ФАП х. Хомуты<br/>Прикреплено населения: 586'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Отрадный
	myGeoObject211 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.875833, 38.955]
        },
            
        properties: {
			hintContent: 'ФАП п. Отрадный',
			balloonContent: 'ФАП п. Отрадный<br/>Прикреплено населения: 677'
		}
    }, {
            
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Домовое хозяйство х. Старомогилевский
	myGeoObject212 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.831667, 39.114167]
        },
            
        properties: {
			hintContent: 'Домовое хозяйство х. Старомогилевский',
			balloonContent: 'Домовое хозяйство х. Старомогилевский<br/>Прикреплено населения: 42'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//Домовое хозяйство п. Супс
	myGeoObject213 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.930162, 38.946127]
        },
            
        properties: {
			hintContent: 'Домовое хозяйство п. Супс',
			balloonContent: 'Домовое хозяйство п. Супс<br/>Прикреплено населения: 72'
		}
    }, {
            
        preset: 'islands#yellowCircleDotIcon',
    });

	//Афипсипская врачебная амбулатория
	myGeoObject214 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [45.001944,38.776667]
        },
            
        properties: {
		hintContent: 'Афипсипская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Афипсипская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 4953',
            '<br/>',
			'Плановая мощность: 27',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Козетская врачебная амбулатория
	myGeoObject215 = new ymaps.GeoObject({
            
        geometry: {
            type: "Point",
            coordinates: [44.9925,39.003611]
        },
            
        properties: {
		hintContent: 'Козетская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Козетская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 1917',
            '<br/>',
			'Плановая мощность: 10',
        ].join('')
        }
    }, {
            
        preset: 'islands#blueCircleDotIcon',
    });
	
	var obj = 
	[
	myGeoObject1,
	myGeoObject2,
	myGeoObject3,
	myGeoObject4,
	myGeoObject5,
	myGeoObject6,
	myGeoObject7,
	myGeoObject8,
	myGeoObject9,
	myGeoObject10,
	myGeoObject11,
	myGeoObject12,
	myGeoObject13,
	myGeoObject14,
	myGeoObject15,
	myGeoObject16,
	myGeoObject17,
	myGeoObject18,
	myGeoObject19,
	myGeoObject20,
	myGeoObject21,
	myGeoObject22,
	myGeoObject23,
	myGeoObject24,
	myGeoObject25,
	myGeoObject26,
	myGeoObject27,
	myGeoObject28,
	myGeoObject29,
	myGeoObject30,
	myGeoObject31,
	myGeoObject32,
	myGeoObject33,
	myGeoObject34,
	myGeoObject35,
	myGeoObject36,
	myGeoObject37,
	myGeoObject38,
	myGeoObject39,
	myGeoObject40,
	myGeoObject41,
	myGeoObject42,
	myGeoObject43,
	myGeoObject44,
	myGeoObject45,
	myGeoObject46,
	myGeoObject47,
	myGeoObject48,
	myGeoObject49,
	myGeoObject50,
	myGeoObject51,
	myGeoObject52,
	myGeoObject53,
	myGeoObject54,
	myGeoObject55,
	myGeoObject56,
	myGeoObject57,
	myGeoObject58,
	myGeoObject59,
	myGeoObject60,
	myGeoObject61,
	myGeoObject62,
	myGeoObject63,
	myGeoObject64,
	myGeoObject65,
	myGeoObject66,
	myGeoObject67,
	myGeoObject68,
	myGeoObject69,
	myGeoObject70,
	myGeoObject71,
	myGeoObject72,
	myGeoObject73,
	myGeoObject74,
	myGeoObject75,
	myGeoObject76,
	myGeoObject77,
	myGeoObject78,
	myGeoObject79,
	myGeoObject80,
	myGeoObject81,
	myGeoObject82,
	myGeoObject83,
	myGeoObject84,
	myGeoObject85,
	myGeoObject86,
	myGeoObject87,
	myGeoObject89,
	myGeoObject90,
	myGeoObject91,
	myGeoObject92,
	myGeoObject93,
	myGeoObject94,
	myGeoObject95,
	myGeoObject96,
	myGeoObject97,
	myGeoObject98,
	myGeoObject99,
	myGeoObject100,
	myGeoObject101,
	myGeoObject102,
	myGeoObject103,
	myGeoObject104,
	myGeoObject105,
	myGeoObject106,
	myGeoObject107,
	myGeoObject108,
	myGeoObject109,
	myGeoObject110,
	myGeoObject111,
	myGeoObject112,
	myGeoObject113,
	myGeoObject114,
	myGeoObject115,
	myGeoObject116,
	myGeoObject117,
	myGeoObject118,
	myGeoObject119,
	myGeoObject120,
	myGeoObject121,
	myGeoObject122,
	myGeoObject123,
	myGeoObject124,
	myGeoObject125,
	myGeoObject126,
	myGeoObject127,
	myGeoObject128,
	myGeoObject129,
	myGeoObject130,
	myGeoObject131,
	myGeoObject132,
	myGeoObject133,
	myGeoObject134,
	myGeoObject135,
	myGeoObject136,
	myGeoObject137,
	myGeoObject138,
	myGeoObject139,
	myGeoObject140,
	myGeoObject141,
	myGeoObject142,
	myGeoObject143,
	myGeoObject144,
	myGeoObject145,
	myGeoObject146,
	myGeoObject147,
	myGeoObject148,
	myGeoObject149,
	myGeoObject150,
	myGeoObject151,
	myGeoObject152,
	myGeoObject153,
	myGeoObject154,
	myGeoObject155,
	myGeoObject156,
	myGeoObject157,
	myGeoObject158,
	myGeoObject159,
	myGeoObject160,
	myGeoObject161,
	myGeoObject162,
	myGeoObject163,
	myGeoObject164,
	myGeoObject165,
	myGeoObject166,
	myGeoObject167,
	myGeoObject168,
	myGeoObject169,
	myGeoObject170,
	myGeoObject171,
	myGeoObject172,
	myGeoObject173,
	myGeoObject174,
	myGeoObject175,
	myGeoObject176,
	myGeoObject177,
	myGeoObject178,
	myGeoObject179,
	myGeoObject180,
	myGeoObject181,
	myGeoObject182,
	myGeoObject183,
	myGeoObject184,
	myGeoObject185,
	myGeoObject186,
	myGeoObject187,
	myGeoObject188,
	myGeoObject189,
	myGeoObject190,
	myGeoObject191,
	myGeoObject192,
	myGeoObject193,
	myGeoObject194,
	myGeoObject195,
	myGeoObject196,
	myGeoObject198,
	myGeoObject199,
	myGeoObject200,
	myGeoObject201,
	myGeoObject202,
	myGeoObject203,
	myGeoObject204,
	myGeoObject205,
	myGeoObject206,
	myGeoObject207,
	myGeoObject208,
	myGeoObject209,
	myGeoObject210,
	myGeoObject211,
	myGeoObject212,
	myGeoObject213,
	myGeoObject214,
	myGeoObject215
	];
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
	
