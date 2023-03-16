const month = [5];
let day = 13;

const timeWarp = (newMonth, newDay) => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const days  = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// if (newDay <= days[newMonth - 1])
	// 	console.log('true');
	if (newDay > 0 &&  newDay <= days[newMonth - 1] && months[newMonth - 1] != undefined ){
		day = newDay;
		month.pop();
		month.push(newMonth);
		console.log(months[newMonth - 1] + ' ' + newDay);
	}
}

timeWarp(2, 3);
timeWarp(5, 10);
timeWarp(11, 20);

