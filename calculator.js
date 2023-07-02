const scores = {
	1: 1,
	2: 2,
	3: 4,
	4: 7,
	6: 15,
	8: 21
}

const playerScores = [4, 8, 2, 1]; //32

const calculate = (pScores) => pScores.reduce((accum, value) => {
	return accum + scores[value];
}, 0)


console.log(calculate(process.argv.slice(2)));