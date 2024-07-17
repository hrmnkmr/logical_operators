var num = 15;
if ((num >= 10) && (num <= 20)) {
	console.log("ANDの条件と一致した処理");
	console.log('10以上かつ20以下です');
} else {
	console.log("ANDの条件と一致しなかった処理");
	console.log(num);
};
var num = 8;
if ((num <= 10) || (num >= 20)) {
	console.log("ANDの条件と一致した処理");
	console.log('10以下または20以上です');
} else {
	console.log("ANDの条件と一致しなかった処理");
	console.log(num);
};
var num = 15;
if (!(num <= 10)) {
	console.log("NOTの条件と一致した処理");
	console.log('10以上です');
} else {
	console.log("NOTの条件と一致しなかった処理");
	console.log(num);
};