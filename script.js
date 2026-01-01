//your JS code here. If required.

function daysOfYear(year){
	if (year !>== 1 && !<= 9999){
		return console.log('enter valid year')
	}

	if(year %400 == 0 || (year %4 == 0 && year %100 !== 0)){
		return 366
	}else{
		return 365
	}
}

daysOfYear(2024)