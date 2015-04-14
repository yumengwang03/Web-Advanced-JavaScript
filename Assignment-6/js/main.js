

var victimList = {
	david: {
		firstName: 'David Arthur',
		lastName: 'Faraday',
		age: '17',
		killedDate: '12/20/1968',		
		location: 'Lake Herman Road, Benicia, California',
		killType: 'Shot'
	},

	betty: {
		firstName: 'Betty Lou',
		lastName: 'Jenson',
		age: '16',
		killedDate: '12/20/1968',		
		location: 'Lake Herman Road, Benicia, California',
		killType: 'Shot'
	}, 

	michael: {
		firstName: 'Michael Renault',
		lastName: 'Mageau',
		age: '19',
		killedDate: '7/4/1969',		
		location: 'Blue Rock Springs Park, Vallejo, California',
		killType: 'Shot (survived)'
	},

	bryan: {
		firstName: 'Bryan Calvin',
		lastName: 'Hartnell',
		age: '20',
		killedDate: '9/27/1969',		
		location: 'Lake Berryessa, Napa County, California',
		killType: 'Stabbed'
	},

	cecelia: {
		firstName: 'Cecelia Ann',
		lastName: 'Shepard',
		age: '22',
		killedDate: '9/27/1969',		
		location: 'Lake Berryessa, Napa County, California',
		killType: 'Stabbed'
	},

	paul: {
		firstName: 'Paul Lee',
		lastName: 'Stine',
		age: '29',
		killedDate: '10/11/1969',		
		location: 'Presidio Heights, San Francisco, California',
		killType: 'Shot'
	}
}

console.log(victimList);

for(var victim in victimList){
	var victimInfo = victimList[victim];

var container = document.createElement('div');
var title = document.createElement('h3');
var title2 = document.createElement('h3');
var title3 = document.createElement('h3');
var title4 = document.createElement('h3');
var title5 = document.createElement('h3');
var title6 = document.createElement('h3');
title.innerHTML = 'Name: ' + victimInfo.firstName + ' ' + victimInfo.lastName;
title2.innerHTML = 'Age: ' + victimInfo.age;
title3.innerHTML = 'Killed Date: ' + victimInfo.killedDate;
title4.innerHTML = 'Location: ' + victimInfo.location;
title5.innerHTML = 'Killed Type: ' + victimInfo.killType;
title6.innerHTML = '- - - - - - - - - -';

container.appendChild(title);
container.appendChild(title2);
container.appendChild(title3);
container.appendChild(title4);
container.appendChild(title5);
container.appendChild(title6);
document.body.appendChild(container);
} 





