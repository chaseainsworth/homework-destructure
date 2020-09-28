/*You will probably not have to take destructuring to such a level as this but this is for you 
to really wrap your brains around the mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

//3.  Destructure this object literal so that each value can be called by its key. Re-name the
//     array values for the 'names' key of the ocean object to AT, PA, IN, and AR

    const water = {
    lake: {
    description: 'surrounded by land',
    popular: { state: 'Michigan', name: 'Lake Michigan' },
    },
    river: {
    definition: 'flows towards ocean',
    known: { place: 'New York', label: 'Hudson River' },
    },
    ocean: {
    context: 'body of water that composes much of a planet hydrosphere',
    names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    },
    };

    
    const {lake: {description, popular}, river: {definition, known}, ocean: {context, names: [AT, PA, IN, AR]}} = water //?
    
    console.log(AT);

//4.  Using destructuring create a new array that maps through the items array and 
//     from each item in the loop, a string of the color and shape values should be logged. 
//     for example one loop should return 'blue circle' from the items array. This is not a 
//     function. you will just map and use the items array as the only array.

    let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
    ];

    const [{color, shape}] = items

    items.map(item => console.log(`${item.color} ${item.shape}`));

//5.  Deconstruct the complete car object literal
    //Find a way to call just one variable name for each of the carTypes
    //rename the array values inside the otherShops array to third, fourth, and for the last two 
    //   values they should be in an array called fifth.

    const car = {
    carTypes: {
    one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
    two: {
    make: 'toyota',
    model: 'Landcruiser',
    year: 2018,
    },
    },
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
    main: 'Dealership',
    second: 'Roe Park Car Shop',
    otherShops: [
    'Bozo Repair',
    'Johnson Body',
    'Fixer Upper Central',
    'Last Chance Repairs',
    ],
    },
    };

    const {carTypes: {one: {make, model, year}, two: {make: make2, model: model2, year: year2}}, numWheels, gps, autoSteer, repairPlaces: {main, second, otherShops}} = car;

    // const otherShops = []

    console.log(car) //?

/*6.  Create a class Cars that takes make, color, and year
    Instantiate 4 cars, car1,car2, car3, car4
    Using destructuring declare the make, color and year variables for each car and console.log 
    the variables OR SHOULD I SAY declare the make, color and year and list a string for each 
    showing their values.*/
    
    class Cars {
        constructor(make, color, year) {
            this.make = make;
            this.color = color;
            this.year = year;
        }
    };

    const car1 = new Cars('toyota', 'black', 1990);
    const car2 = new Cars('tesla', 'blue', 2015);
    const car3 = new Cars('GMC', 'red', 2001);
    const car4 = new Cars('ford', 'white', 1962);

    let allCars = {...car1, ...car2, ...car3, ...car4};

    console.log(allCars) //?
    
    // console.log({model2, color2, year2} = car2);
    // console.log({model1, color1, year1} = car1);
    // console.log({model1, color1, year1} = car1);
    
 //7. Using destructuring, choose all the schools with a gpa higher than 3.5,
      //and list the chosen object ascending by major and log the average gpa,
      //use method chaining if you can

let schoolArray = [
    { school: 'Pataway', major: 'comp sci', grade: 'sophomore', gpa: 3.2 },
    { school: 'Bronxville', major: 'medicine', grade: 'junior', gpa: 4.0 },
    { school: 'Scarsdale', major: 'accounting', grade: 'freshman', gpa: 2.6 },
    { school: 'Peekskill', major: 'liberal arts', grade: 'freshman', gpa: 4.0 },
    { school: 'Anopram', major: 'accounting', grade: 'senior', gpa: 3.7 },
];

const [{gpa}] = schoolArray;

let goodGrades = schoolArray.filter(value => value.gpa > 3.5); //?

const [{major}] = goodGrades;

let majorSort = goodGrades.sort((a, b) => (a.major) - (b.major)); //?

