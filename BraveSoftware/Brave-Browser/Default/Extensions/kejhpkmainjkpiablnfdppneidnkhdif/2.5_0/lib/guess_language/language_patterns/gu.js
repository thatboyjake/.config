(function () {

var module = {
    exports: null
};

// For questions about the Gujarati hyphenation patterns
// ask Santhosh Thottingal (santhosh dot thottingal at gmail dot com)
module.exports = {
	'id': 'gu',
	'leftmin': 2,
	'rightmin': 2,
	specialChars : unescape("આઅઇઈઉઊઋએઐઔકગખઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળિીાુૂૃેાોૈૌ્ઃં%u200D"),
	'patterns': {
		2 : "અ1આ1ઇ1ઈ1ઉ1ઊ1ઋ1એ1ઐ1ઔ1િ1ા1ી1ુ1ૂ1ૃ1ે1ો1ૌ1્2ઃ1ં11ક1ગ1ખ1ઘ1ઙ1ચ1છ1જ1ઝ1ઞ1ટ1ઠ1ડ1ઢ1ણ1ત1થ1દ1ધ1ન1પ1ફ1બ1ભ1મ1ય1ર1લ1વ1શ1ષ1સ1હ1ળ"
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
