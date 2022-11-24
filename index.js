const NUMBER_TO_WORDS = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'quarter',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	21: 'twenty one',
	22: 'twenty two',
	23: 'twenty three',
	24: 'twenty four',
	25: 'twenty five',
	26: 'twenty six',
	27: 'twenty seven',
	28: 'twenty eight',
	29: 'twenty nine',
	30: 'half',
	45: 'quarter',
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
	let message = '';
	if (time === '0:00') {
		message = 'midnight';
	} else if (time === '12:00') {
		message = 'midday';
	}

	if (message) return message;

	const splittedTime = time.split(':');

	const hour = +splittedTime[0];
	let minutes = +splittedTime[1];

	if (minutes === 0) {
		message = `${NUMBER_TO_WORDS[hour]} o'clock`;
	} else if (minutes <= 30) {
		message = `${NUMBER_TO_WORDS[minutes]} past ${NUMBER_TO_WORDS[hour]}`;
	} else if (minutes > 30) {
		minutes = 60 % minutes;

		message = `${NUMBER_TO_WORDS[minutes]} to ${NUMBER_TO_WORDS[hour + 1]}`
	}

	return message;
}

module.exports = { convertTimeToWords };
