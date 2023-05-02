export default function typographString(s: string): string {
	if (typeof s !== 'string' || !s.length) return "";

  const russianRules = new Map([
		['^[ ]+|[ ]+$', ''],
		[' {2,}', ' '],
		['\u2060{1,}', ''],
		['[ ]+([.,!?":;])', '$1'],
		['[.]{3}', '\u2060\u2026'],
		['[ ]?[-]{2}[ ]?', '\u00A0\u2014 '],
		['([0-9]+)([ ]?[-][ ]?)([0-9]+[ ]?)(?!=)', '$1\u2012$3'],
		['([0-9]+)([ ]?[-][ ]?)([0-9]+)([ ]?[=]+[ ]?)([0-9]+)', '$1\u00A0\u2212\u00A0$3\u00A0\=\u00A0$5'],
		['([0-9]+)([ ]?[+][ ]?)([0-9]+)([ ]?[=]+[ ]?)([0-9]+)', '$1\u00A0\u002B\u00A0$3\u00A0=\u00A0$5'],
		['(?![0-9]+[ ]?)([-][ ]?)(?=[0-9]+[ ]?)(?!=)', '\u2212'],
		['(?![0-9]+[ ]?)([+][ ]?)(?=[0-9]+[ ]?)(?!=)', '\u002B'],
		['([ \u00A0]+)([\u0430-\u044f]{1,3})(?=[ \u00A0]+)', '$1$2\u00A0'],
		['[ \u00A0]{2,}', '\u00A0'],
		['([0-9\u0430-\u044f]+)([ ]?[-][ ]?)(?=[\u0430-\u044f]+)', '$1\u2011'],
		['([ ]?|^)"([^"]+)"', '$1\u001e\u2060$2\u2060\u001c'],
		["([ ]?|^)'([^']+)'", '$1«\u2060$2\u2060»'],
	]);

  const englishRules = new Map([
		// SPACES: remove leading and trailing spaces.
		['^[ ]+|[ ]+$', ''],
		// replace multiple consequetive spaces with a single space.
		[' {2,}', ' '],
		// remove no-breaks
		['\u2060{1,}', ''],
		// remove spaces before selected punctuation marks.
		['[ ]+([.,!?":;])', '$1'],
		// MISC: replace three dots with ellipsis
		// linked to the previous word with a no-break.
		['[.]{3}', '\u2060\u2026'],
		// EM-DASH: replace two consequetive hyphens with an em-dash
		// linked to the preceeding word by a non-breaking space
		// and followed a regular space.
		['[ ]?[-]{2}[ ]?', '\u00A0\u2014\u0020'],
		// EN-DASH (NUMERICAL RANGE): 
		// replace a single hyphen between two numbers
		// not followed by an equality sign with an en-dash
		// enclosed in no-breaks without spaces.
		// TODO: unicode groups do not work for some reason.
		['([0-9]+)([ ]?[-][ ]?)([0-9]+[ ]?)(?!=)', '$1\u2012$3'],
		// MINUS (EQUATIONS AND NEGATIVE NUMBERS)
		// replace a hyphen inside an equation with a unicode minus,
		// remove whitespace between parts of the equation,
		// and link everything with no-break space and no-breaks.
		['([0-9]+)([ ]?[-][ ]?)([0-9]+)([ ]?[=]+[ ]?)([0-9]+)', '$1\u00A0\u2212\u00A0$3\u00A0=\u00A0$5'],
		['([0-9]+)([ ]?[+][ ]?)([0-9]+)([ ]?[=]+[ ]?)([0-9]+)', '$1\u00A0\u002B\u00A0$3\u00A0=\u00A0$5'],
		['(?![0-9]+[ ]?)([-][ ]?)(?=[0-9]+[ ]?)(?!=)', '\u2212'],
		['(?![0-9]+[ ]?)([+][ ]?)(?=[0-9]+[ ]?)(?!=)', '\u002B'],
		// CONJUCTIONS
		// add no-breaks after conjuctions of up to three letters in length;
		// ideally, it should be checking against a list of conjuctions to avoid false positives,
		// but not sure how to get one at the moment.
		// NOTE: to account for all the rules applied before, instead of simple white-space,
		// regex template includes no-break space and a unicode space.
		['([ \u0020\u00A0])([a-z&]{1,3})(?=[ \u0020\u00A0]+)', '$1$2\u00A0'],
		['[ \u0020]{2,}', '\u0020'],
		['[ \u00A0]{2,}', '\u00A0'],
		// HYPHEN: add no-breaks to hyphenated words.
		['([0-9a-z]+)([ ]?[-][ ]?)(?=[a-z]+)', '$1\u2011'],
		// APOSTROPHE
		["([a-z]+)'([a-z]+)", '$1\u2019$2'], // this is a hack to account for apostrophe
		// QUOTES: replace dumb quotes i.e. '' and ""
		// with smart quotes following uk conventions
		// i.e. '' =>  ‘’ and "" => “”
		['([ ]?|^)"([^"]+)"', '$1\u2060\u201c\u2060$2\u2060\u201d'],
		["([ ]?|^)'([^']+)'", '$1\u2060\u2018\u2060$2\u2060\u2019'],
	]);

	const compiledRules = new Map();
	// choose between russian or english rules
	let rules = russianRules;
	if (/[\P{Cyrillic}]/.test(s)) {
		rules = englishRules;
	}
	// compile rules
  for (const [k, v] of rules) {
		const r = new RegExp(k, 'gi');
		compiledRules.set(r, v);
	}
	// apply regex
	for (const [k, v] of compiledRules) {
		s = s.replace(k, v);
	}
  return s;
}