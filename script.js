// TASK1
let city1 = {
    name: "ГородN",
    population: 10000000
}

console.log(city1)
// TASK2
const maksTwen = {
    name: 'Mark',
    surname: 'Twen',
    age: 40
}

const sarahDoe = {
    name: 'Sarah',
    surname: 'Doe',
    age: 14
}
const johnDoe = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    hobbies: ['football', 'darts', 'swimming'],
    contacts: {
        phones: ['0987654', '1234567'],
        email: ['asd@asd.com', 'asdfd@asw.com']
    },
    address: {
        work: {
            city: 'Berlin',
            postCode: '03457'
        },
        home: {
            city: 'Munich',
            postCode: '12356'
        },
    },
    sallary: {
        main: 3000,
        bonus: 500,
        rate: 25
    },
    roles: {
        isAdmin: false,
        isModer: false,
        isUser: true
    },
    friends: [
        maksTwen,
        sarahDoe,
        {
            name: 'John',
            surname: 'Snow',
            age: 5000
        }
    ]
}

console.log(johnDoe.address.work.city);
console.log(johnDoe.friends[1].name);
console.log(`${johnDoe.contacts.phones[0]}, ${johnDoe.contacts.phones[1]}`);
function youngest(arr) {
    let min = arr.friends[0].age
    let youngest;
    for (let i = 0; i < arr.friends.length; i++) {
        if (min > arr.friends[i].age) {
            min = arr.friends[i].age
            youngest = arr.friends[i].name
        }
    }
    return youngest
}
console.log(youngest(johnDoe))
console.log(johnDoe.roles.isUser);


// TASK3
let camaro = {
    name: 'Camaro',
    year: 2012,
    weight: 1500,
    engine: 2,
    transmission: 'auto',
    wheelDrive: 'back',
    seats: 4,
    tankVolume: 72,
    clearance: 127,
    cabriolet: false
}

let teslaX = {
    name: 'TeslaX',
    year: 2015,
    weight: 2350,
    transmission: 'reductor',
    wheelDrive: 'full',
    seats: 5,
    clearance: 175,
    cabriolet: false
}

let mini = {
    name: 'Mini',
    year: 2014,
    weight: 1440,
    engine: 1.5,
    transmission: 'manual',
    wheelDrive: 'front',
    seats: 5,
    tankVolume: 51,
    clearance: 165,
    cabriolet: false
}

let mustang = {
    name: 'Mustang',
    year: 2017,
    weight: 1900,
    engine: 1.5,
    transmission: 'manual',
    wheelDrive: 'front',
    seats: 4,
    tankVolume: 51,
    clearance: 165,
    cabriolet: true
}

let lamborghini = {
    name: 'Lamborghini',
    year: 2016,
    weight: 1500,
    engine: 5.2,
    transmission: 'robot',
    wheelDrive: 'full',
    seats: 2,
    tankVolume: 80,
    clearance: 100,
    cabriolet: true
}

// TASK 4
let cars = [camaro, teslaX, mini, mustang, lamborghini]
function manualTransmission(arr) {
    let manual = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].transmission === 'manual') {
            manual += `${arr[i].name} `
        }
    }
    return `Авто с ручной коробкой: ${manual}`
}

console.log(manualTransmission(cars))

function heaviest(arr) {
    let max = arr[0].weight
    let maxName = arr[0].name;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].weight) {
            max = arr[i].weight
            maxName = arr[i].name
        }
    }
    return `Cамый тяжелый автомобиль ${maxName}, вес: ${max}`
}

console.log(heaviest(cars))

function oldest(arr) {
    let oldest = arr[0].year
    let oldestName = arr[0].name;
    for (let i = 0; i < arr.length; i++) {
        if (oldest > arr[i].year) {
            oldest = arr[i].year
            oldestName = arr[i].name
        }
    }
    return `Cамый старый автомобиль ${oldestName}, год: ${oldest}`
}

console.log(oldest(cars))

function largestVolume(arr) {
    let largest = arr[0].engine
    let largestName = arr[0].name;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i].engine) {
            largest = arr[i].engine
            largestName = arr[i].name
        }
    }
    return `Авто с самым большим объемом двигателя ${largestName}, объём: ${largest}`
}

console.log(largestVolume(cars))

function cabrio(arr) {
    let cabrio = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].cabriolet) {
            cabrio += `${arr[i].name} `
        }
    }
    return `Авто у которых откидывается крыша: ${cabrio}`
}

console.log(cabrio(cars))

function averageWeight(arr) {
    let weight = 0;
    for (let i = 0; i < arr.length; i++) {
        weight += arr[i].weight 
    }
    return `Cредний вес всех автомобилей: ${weight / arr.length}кг`
}

console.log(averageWeight(cars))

function averageEngine(arr) {
    let engine = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].engine) {
            engine += arr[i].engine
        }
    }
    return `Cредний обьем двигателей: ${engine / arr.length}`
}

console.log(averageEngine(cars))

// TASK 5 

const coordinates = {
    "results": [
        {
            "address_components": [
                {
                    "long_name": "5",
                    "short_name": "5",
                    "types": ["street_number"]
                },
                {
                    "long_name": "Киевский политехнический институт",
                    "short_name": "Киевский политехнический институт",
                    "types": ["establishment"]
                },
                {
                    "long_name": "вулиця Академіка Янгеля",
                    "short_name": "вулиця Академіка Янгеля",
                    "types": ["route"]
                },
                {
                    "long_name": "Солом'янський район",
                    "short_name": "Солом'янський район",
                    "types": ["sublocality_level_1", "sublocality", "political"]
                },
                {
                    "long_name": "Київ",
                    "short_name": "Київ",
                    "types": ["locality", "political"]
                },
                {
                    "long_name": "місто Київ",
                    "short_name": "місто Київ",
                    "types": ["administrative_area_level_2", "political"]
                },
                {
                    "long_name": "місто Київ",
                    "short_name": "місто Київ",
                    "types": ["administrative_area_level_1", "political"]
                },
                {
                    "long_name": "Украина",
                    "short_name": "UA",
                    "types": ["country", "political"]
                }
            ],
            "geometry": {
                "location": {
                    "lat": 50.449819,
                    "lng": 30.453404
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 50.4511679802915,
                        "lng": 30.4547529802915
                    },
                    "southwest": {
                        "lat": 50.4484700197085,
                        "lng": 30.4520550197085
                    }
                }
            },
            "types": ["street_address"]
        }
    ],
    "status": "OK"
}

console.log(`${coordinates.results[0].address_components[1].long_name}, ${coordinates.results[0].address_components[2].long_name}, ${coordinates.results[0].address_components[0].long_name}, ${coordinates.results[0].address_components[5].long_name}, ${coordinates.results[0].address_components[7].long_name}`);
console.log(`${coordinates.results[0].geometry.location.lat}, ${coordinates.results[0].geometry.location.lng}`)

// TASK 6
function newObject() {
    let key;
    let property;
    let obj = {};
    for (let i = 1; i > 0; i++) {
        key = prompt("Введите ключ");
        if (key === 'END') {
            break;
        }
        property = prompt("Введите свойство")
        if (property === 'END') {
            break
        }
        obj[key] = property
    }
    console.log(obj)
}
newObject()