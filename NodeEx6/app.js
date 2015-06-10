var flight = require('./flight');

flight.setOrigin('LAX');
flight.setDestination('DCA');
flight.setNumber(120);

console.log(flight.getInfo());