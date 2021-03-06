(function () {

var module = {
    exports: null
};

// For questions about the Telugu hyphenation patterns
// ask Santhosh Thottingal (santhosh dot thottingal at gmail dot com)
module.exports = {
	'id': 'te',
	'leftmin': 2,
	'rightmin': 2,
	'patterns': {
		2 : "అ1ఆ1ఇ1ఈ1ఉ1ఊ1ఋ1ఎ1ఏ1ఐ1ఒ1ఔ1ి1ా1ీ1ు1ూ1ృ1ె1ే1ొ1ో1ౌ1్2ః1ం11క1గ1ఖ1ఘ1ఙ1చ1ఛ1జ1ఝ1ఞ1ట1ఠ1డ1ఢ1ణ1త1థ1ద1ధ1న1ప1ఫ1బ1భ1మ1య1ర1ల1వ1శ1ష1స1హ1ళ1ఱ"
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());
