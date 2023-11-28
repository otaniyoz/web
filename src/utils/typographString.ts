export default function typographString(s: string): string {
	if (typeof s !== 'string' || !s.length) return "";

  const russianRules = new Map([
		['^[ ]+|[ ]+$', ''],
		[' {2,}', ' '],
		['\u2060{1,}', ''],
		['[ ]+([.,!?":;])', '$1'],
		['[.]{3}', '\u2060.\u2060.\u2060.\u2060'],
		['[ ]?[-]{2}[ ]?', '\u00A0\u2014 '],
		['([0-9]+)([ ]?[-][ ]?)([0-9]+[ ]?)(?!=)', '$1\u2060.\u2060.\u2060.\u2060$3'],
    ['[$]{1}([0-9]+(\.[0-9]+)?)', '$1\u200A\u2060\$'],
    ['([0-9]+(\.[0-9]+)?)[$]{1}', '$1\u200A\u2060\$'],
    ['([0-9]+(\.[0-9]+)?)[%]{1}', '$1\u200A\u2060\%'],
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
		// MISC: 
		// -- replace three dots with three dots padded with no-breaks.
		['[.]{3}', '\u2060.\u2060.\u2060.\u2060'],
		// -- spell out digits 0...9
		// TODO: doesn't account for numeric range, e.g. 0...9
		['([ ]+)([0]{1})( [a-z.,]+)', '$1zero$3'],
		['^([0]{1})( [a-z.,]+)', 'zero$2'],
		['([ ]+)([1]{1})( [a-z.,]+)', '$1one$3'],
		['^([1]{1})( [a-z.,]+)', 'one$2'],
		['([ ]+)([2]{1})( [a-z.,]+)', '$1two$3'],
		['^([2]{1})( [a-z.,]+)', 'two$2'],
		['([ ]+)([3]{1})( [a-z.,]+)', '$1three$3'],
		['^([3]{1})( [a-z.,]+)', 'three$2'],
		['([ ]+)([4]{1})( [a-z.,]+)', '$1four$3'],
		['^([4]{1})( [a-z.,]+)', 'four$2'],
		['([ ]+)([5]{1})( [a-z.,]+)', '$1five$3'],
		['^([5]{1})( [a-z.,]+)', 'five$2'],
		['([ ]+)([6]{1})( [a-z.,]+)', '$1six$3'],
		['^([6]{1})( [a-z.,]+)', 'six$2'],
		['([ ]+)([7]{1})( [a-z.,]+)', '$1seven$3'],
		['^([7]{1})( [a-z.,]+)', 'seven$2'],
		['([ ]+)([8]{1})( [a-z.,]+)', '$1eight$3'],
		['^([8]{1})( [a-z.,]+)', 'eight$2'],
		['([ ]+)([9]{1})( [a-z.,]+)', '$1nine$3'],
		['^([9]{1})( [a-z.,]+)', 'nine$2'],
		// EM-DASH: replace two consequetive hyphens with an em-dash
		// linked to the preceeding word by a non-breaking space
		// and followed a regular space.
		['[ ]?[-]{2}[ ]?', '\u00A0\u2014\u0020'],
		// EN-DASH (NUMERICAL RANGE): 
		// replace a single hyphen between two numbers
		// not followed by an equality sign with an en-dash
		// enclosed in no-breaks without spaces.
		// TODO: unicode groups do not work for some reason.
		['([0-9]+)([ ]?[-][ ]?)([0-9]+[ ]?)(?!=)', '$1\u2060.\u2060.\u2060.\u2060$3'],
		// CURRENCY SIGN:
		// 100$ -> 100 ⁠$
		// $100 -> 100 ⁠$
    ['[$]{1}([0-9]+(\.[0-9]+)?)', '$1\u200A\u2060\$'],
    ['([0-9]+(\.[0-9]+)?)[$]{1}', '$1\u200A\u2060\$'],
		// PER CENT SIGN:
		// 100% -> 100 ⁠%
    ['([0-9]+(\.[0-9]+)?)[%]{1}', '$1\u200A\u2060\%'],
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

	// choose between russian or english rules by determing if most characters are cyrillic
	const cyrillicTemplate = new RegExp('[\u0430-\u044f]', 'gi');
	const matched = s.match(cyrillicTemplate);
	const rules = (matched !== null && matched !== undefined && matched?.length > s.length / 2) ? russianRules : englishRules; 
	// compile rules and apply regex
  for (const [k, v] of rules) {
		const r = new RegExp(k, 'gi');
		s = s.replace(r, v);
	}
	// this should handle capitalisation in headings and such for now
 	if (!s.includes('.')) {
		s = s.charAt(0).toUpperCase() + s.slice(1);
	}
  return s;
}