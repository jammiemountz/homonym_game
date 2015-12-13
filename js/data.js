var homonyms = {
  'a': 'ah',
  'acts': 'ax',
  'ad': 'add',
  'au pair': 'oh, pear.',
  'ail': 'ale',
  'aunt': 'ant',
  'ate': 'eight',
  'bail': 'bale',
  'bald': 'bawled',
  'bard': 'barred',
  'base': 'bass',
  'bay': 'bae',
  'beau': 'bow',
  'board': 'bored',
  'blew': 'blue',
  'brake': 'break',
  'cache': 'cash',
  'ceiling': 'sealing',
  'cell': 'sell',
  'days': 'daze',
  'facts': 'fax',
  'fir': 'fur',
  'flea': 'flee',
  'flour': 'flower',
  'gnu': 'new',
  'groan': 'grown',
  'gym': 'jim',
  'heal': 'heel',
  'heroine': 'heroin',
  'him': 'hymn',
  'know': 'no',
  'lead': 'led',
  'meat': 'meet',
  'leak': 'leek',
  'made': 'maid',
  'mown': 'moan',
  'won': 'one',
  'pea': 'pee',
  'pedal': 'petal',
  'pie': 'pi',
  'rack': 'wrack',
  'raise': 'rays',
  'road': 'rode',
  'see': 'sea',
  'shoe': 'shoo',
  'stair': 'stare'

  // ADD YOUR OWN HOMONYMS WITH A PR!
}


var wordOptions = [];
for (var key in homonyms) {
  wordOptions.push(key)
}

var regMode = true;

var imageClassNames = ['liz', 'tracey', 'jenna', 'kenneth', 'hazel', 'jack', 'frank']
