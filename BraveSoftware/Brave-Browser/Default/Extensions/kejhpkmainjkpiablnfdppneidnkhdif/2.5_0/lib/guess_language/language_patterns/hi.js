(function () {

var module = {
    exports: null
};

// For questions about the Hindi hyphenation patterns
// ask Santhosh Thottingal (santhosh dot thottingal at gmail dot com)
module.exports = {
	'id': 'hi',
	'leftmin': 2,
	'rightmin': 2,
	specialChars : unescape("आअइईउऊऋऎएऐऒऔकगखघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऴऱिीाुूृॆेॊाोैौ्ःं%u200D"),
	'patterns': {
		2 : "अ1आ1इ1ई1उ1ऊ1ऋ1ऎ1ए1ऐ1ऒ1औ1ि1ा1ी1ु1ू1ृ1ॆ1े1ॊ1ो1ौ1्2ः1ं11क1ग1ख1घ1ङ1च1छ1ज1झ1ञ1ट1ठ1ड1ढ1ण1त1थ1द1ध1न1प1फ1ब1भ1म1य1र1ल1व1श1ष1स1ह1ळ1ऴ1ऱ"
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
