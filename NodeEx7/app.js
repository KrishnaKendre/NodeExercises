var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight.create(pdxlax);

pl.triggerDepart();

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight.create(ausdca);

console.log(pl.getInformation());

console.log('The destination of this flight is currently headed to: ' + pl.flightDestination());

console.log(ad.getInformation());

console.log('The destination of this flight is currently headed to: ' + ad.flightDestination());

console.log('The number of flights created ' + flight.getCount());

console.log('The destinations served over this airline: ' + flight.getDestinations());