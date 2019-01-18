var config = {
    matiz: [140, 255, 200, 0.7],
    xOffset: 140,
    yOffset: 0,
    ruido: 0,
    scl: 25,
    inc: 0.05,
    cols: 30,
    rows: 30,
    points: 0,
    bounds: 0,
    ibm: null,
    padding: 20,
    seed: 7662,
    message: 'W3TWARE',
    movers: null,
    recording: false,
    font: './OpenType/IBM-Plex-Mono/IBMPlexMono-Light.otf'
}, word = null, tmp = 'W3T', adjs;

function preload() {

    ibm = loadFont(String(config.font))


    // var scripts = [
    //     "UX"
    // ]

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 255, 255, 255, 1)
    background(0)
    textFont(ibm)
    textAlign(CENTER)
    textSize(height/20)
    //noCursor()



    noiseSeed(config.seed)
    randomSeed(config.seed)
    // pen = new Pen()


    
}

function draw() {
    background(0)
    word == 'W3T' || tmp == 'W3T' ? fill(255) : fill(...config.matiz);
    //strokeWeight(noise(config.yOffset) * 2)
    var s = Math.trunc(millis())
    
    if (s % 2 == 0) {
	word == null ? word = adjs[floor(random(adjs.length))].toUpperCase() : word = word;
	tmp = word
	text(word + 'WARE', width/2, height/5)
    } else {
	word = null
	text(tmp + 'WARE', width/2, height/5)
    }
    
    
    text(String(s), width/2, height-100)

    //config.xOffset > 230 ? config.xOffset = 30 : config.xOffset+=0.5;
    // config.yOffset > width ? config.yOffset = 0 : config.yOffset+=0.05;
    
    //if (recording === true) saveFrames('Test##' + 'png')
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
    
}

function mousePressed() {
    //location.reload()
}

function keyPressed() {
    switch (key) {
    case 'G':
        recording = !recording
        break;
	
    case 'S':
        saveCanvas('test', 'png')
        break;
	
    case 'R':
        location.reload()
        break;
    }
    
}

//Utilities

// function change_favicon(img) {
//   var favicon = document.querySelector('link[rel="shortcut icon"]');

//   if (!favicon) {
//       favicon = document.createElement('link');
//       favicon.setAttribute('rel', 'shortcut icon');
//       var head = document.querySelector('head');
//       head.appendChild(favicon);
//   }


//   favicon.setAttribute('type', 'image/png');
//   favicon.setAttribute('href', img);
// }

//For-each practice snippet (with 'thisArg')
// function Counter() {
//   this.sum = 0
//   this.count = 0
// }
// Counter.prototype.add = function(array) {
//   array.forEach(entry => {
//     this.sum += entry
//     ++this.count
//   }, this);
// }
// const obj = new Counter()
// obj.add([2, 5, 9])
// console.log(obj.count, obj.sum)  


adjs = [
    'aback',
    'abaft',
    'abandoned',
    'abashed',
    'aberrant',
    'abhorrent',
    'abiding',
    'abject',
    'ablaze',
    'able',
    'abnormal',
    'aboriginal',
    'abounding',
    'abrasive',
    'abrupt',
    'absent',
    'absorbed',
    'absorbing',
    'abstracted',
    'absurd',
    'abundant',
    'abusive',
    'acceptable',
    'accessible',
    'accidental',
    'accurate',
    'acid',
    'acidic',
    'acoustic',
    'acrid',
    'adamant',
    'adaptable',
    'addicted',
    'adhesive',
    'adjoining',
    'adorable',
    'adventurous',
    'afraid',
    'aggressive',
    'agonizing',
    'agreeable',
    'ahead',
    'ajar',
    'alert',
    'alike',
    'alive',
    'alleged',
    'alluring',
    'aloof',
    'amazing',
    'ambiguous',
    'ambitious',
    'amuck',
    'amused',
    'amusing',
    'ancient',
    'angry',
    'animated',
    'annoyed',
    'annoying',
    'anxious',
    'apathetic',
    'aquatic',
    'aromatic',
    'arrogant',
    'ashamed',
    'aspiring',
    'assorted',
    'astonishing',
    'attractive',
    'auspicious',
    'automatic',
    'available',
    'average',
    'aware',
    'awesome',
    'axiomatic',
    'bad',
    'barbarous',
    'bashful',
    'bawdy',
    'beautiful',
    'befitting',
    'belligerent',
    'beneficial',
    'bent',
    'berserk',
    'bewildered',
    'big',
    'billowy',
    'bite-sized',
    'bitter',
    'bizarre',
    'black',
    'black-and-white',
    'bloody',
    'blue',
    'blue-eyed',
    'blushing',
    'boiling',
    'boorish',
    'bored',
    'boring',
    'bouncy',
    'boundless',
    'brainy',
    'brash',
    'brave',
    'brawny',
    'breakable',
    'breezy',
    'brief',
    'bright',
    'broad',
    'broken',
    'brown',
    'bumpy',
    'burly',
    'bustling',
    'busy',
    'cagey',
    'calculating',
    'callous',
    'calm',
    'capable',
    'capricious',
    'careful',
    'careless',
    'caring',
    'cautious',
    'ceaseless',
    'certain',
    'changeable',
    'charming',
    'cheap',
    'cheerful',
    'chemical',
    'chief',
    'childlike',
    'chilly',
    'chivalrous',
    'chubby',
    'chunky',
    'clammy',
    'classy',
    'clean',
    'clear',
    'clever',
    'cloistered',
    'cloudy',
    'closed',
    'clumsy',
    'cluttered',
    'coherent',
    'cold',
    'colorful',
    'colossal',
    'combative',
    'comfortable',
    'common',
    'complete',
    'complex',
    'concerned',
    'condemned',
    'confused',
    'conscious',
    'cooing',
    'cool',
    'cooperative',
    'coordinated',
    'courageous',
    'cowardly',
    'crabby',
    'craven',
    'crazy',
    'creepy',
    'crooked',
    'crowded',
    'cruel',
    'cuddly',
    'cultured',
    'cumbersome',
    'curious',
    'curly',
    'curved',
    'curvy',
    'cut',
    'cute',
    'cynical',
    'daffy',
    'daily',
    'damaged',
    'damaging',
    'damp',
    'dangerous',
    'dapper',
    'dark',
    'dashing',
    'dazzling',
    'dead',
    'deadpan',
    'deafening',
    'dear',
    'debonair',
    'decisive',
    'decorous',
    'deep',
    'deeply',
    'defeated',
    'defective',
    'defiant',
    'delicate',
    'delicious',
    'delightful',
    'demonic',
    'delirious',
    'dependent',
    'depressed',
    'deranged',
    'descriptive',
    'deserted',
    'detailed',
    'determined',
    'devilish',
    'didactic',
    'different',
    'difficult',
    'diligent',
    'direful',
    'dirty',
    'disagreeable',
    'disastrous',
    'discreet',
    'disgusted',
    'disgusting',
    'disillusioned',
    'dispensable',
    'distinct',
    'disturbed',
    'divergent',
    'dizzy',
    'domineering',
    'doubtful',
    'drab',
    'draconian',
    'dramatic',
    'dreary',
    'drunk',
    'dry',
    'dull',
    'dusty',
    'dynamic',
    'dysfunctional',
    'eager',
    'early',
    'earsplitting',
    'earthy',
    'easy',
    'eatable',
    'economic',
    'educated',
    'efficacious',
    'efficient',
    'elastic',
    'elated',
    'elderly',
    'electric',
    'elegant',
    'elfin',
    'elite',
    'embarrassed',
    'eminent',
    'empty',
    'enchanted',
    'enchanting',
    'encouraging',
    'endurable',
    'energetic',
    'enormous',
    'entertaining',
    'enthusiastic',
    'envious',
    'equable',
    'equal',
    'erect',
    'erratic',
    'ethereal',
    'evanescent',
    'evasive',
    'even',
    'excellent',
    'excited',
    'exciting',
    'exclusive',
    'exotic',
    'expensive',
    'extra-large',
    'extra-small',
    'exuberant',
    'exultant',
    'fabulous',
    'faded',
    'faint',
    'fair',
    'faithful',
    'fallacious',
    'false',
    'familiar',
    'famous',
    'fanatical',
    'fancy',
    'fantastic',
    'far',
    'far-flung',
    'fascinated',
    'fast',
    'fat',
    'faulty',
    'fearful',
    'fearless',
    'feeble',
    'feigned',
    'female',
    'fertile',
    'festive',
    'few',
    'fierce',
    'filthy',
    'fine',
    'finicky',
    'first',
    'fixed',
    'flagrant',
    'flaky',
    'flashy',
    'flat',
    'flawless',
    'flimsy',
    'flippant',
    'flowery',
    'fluffy',
    'fluttering',
    'foamy',
    'foolish',
    'foregoing',
    'forgetful',
    'fortunate',
    'frail',
    'fragile',
    'frantic',
    'free',
    'freezing',
    'frequent',
    'fresh',
    'fretful',
    'friendly',
    'frightened',
    'frightening',
    'full',
    'fumbling',
    'functional',
    'funny',
    'furry',
    'furtive',
    'future',
    'futuristic',
    'fuzzy',
    'gabby',
    'gainful',
    'gamy',
    'gaping',
    'garrulous',
    'gaudy',
    'general',
    'gentle',
    'giant',
    'giddy',
    'gifted',
    'gigantic',
    'glamorous',
    'gleaming',
    'glib',
    'glistening',
    'glorious',
    'glossy',
    'godly',
    'good',
    'goofy',
    'gorgeous',
    'graceful',
    'grandiose',
    'grateful',
    'gratis',
    'gray',
    'greasy',
    'great',
    'greedy',
    'green',
    'grey',
    'grieving',
    'groovy',
    'grotesque',
    'grouchy',
    'grubby',
    'gruesome',
    'grumpy',
    'guarded',
    'guiltless',
    'gullible',
    'gusty',
    'guttural',
    'habitual',
    'half',
    'hallowed',
    'halting',
    'handsome',
    'handy',
    'hanging',
    'hapless',
    'happy',
    'hard',
    'hard-to-find',
    'harmonious',
    'harsh',
    'hateful',
    'heady',
    'healthy',
    'heartbreaking',
    'heavenly',
    'heavy',
    'hellish',
    'helpful',
    'helpless',
    'hesitant',
    'hideous',
    'high',
    'highfalutin',
    'high-pitched',
    'hilarious',
    'hissing',
    'historical',
    'holistic',
    'hollow',
    'homeless',
    'homely',
    'honorable',
    'horrible',
    'hospitable',
    'hot',
    'huge',
    'hulking',
    'humdrum',
    'humorous',
    'hungry',
    'hurried',
    'hurt',
    'hushed',
    'husky',
    'hypnotic',
    'hysterical',
    'icky',
    'icy',
    'idiotic',
    'ignorant',
    'ill',
    'illegal',
    'ill-fated',
    'ill-informed',
    'illustrious',
    'imaginary',
    'immense',
    'imminent',
    'impartial',
    'imperfect',
    'impolite',
    'important',
    'imported',
    'impossible',
    'incandescent',
    'incompetent',
    'inconclusive',
    'industrious',
    'incredible',
    'inexpensive',
    'infamous',
    'innate',
    'innocent',
    'inquisitive',
    'insidious',
    'instinctive',
    'intelligent',
    'interesting',
    'internal',
    'invincible',
    'irate',
    'irritating',
    'itchy',
    'jaded',
    'jagged',
    'jazzy',
    'jealous',
    'jittery',
    'jobless',
    'jolly',
    'joyous',
    'judicious',
    'juicy',
    'jumbled',
    'jumpy',
    'juvenile',
    'keen',
    'kind',
    'kindhearted',
    'kindly',
    'knotty',
    'knowing',
    'knowledgeable',
    'known',
    'labored',
    'lackadaisical',
    'lacking',
    'lame',
    'lamentable',
    'languid',
    'large',
    'last',
    'late',
    'laughable',
    'lavish',
    'lazy',
    'lean',
    'learned',
    'left',
    'legal',
    'lethal',
    'level',
    'lewd',
    'light',
    'like',
    'likeable',
    'limping',
    'literate',
    'little',
    'lively',
    'living',
    'lonely',
    'long',
    'longing',
    'long-term',
    'loose',
    'lopsided',
    'loud',
    'loutish',
    'lovely',
    'loving',
    'low',
    'lowly',
    'lucky',
    'ludicrous',
    'lumpy',
    'lush',
    'luxuriant',
    'lying',
    'lyrical',
    'macabre',
    'macho',
    'maddening',
    'madly',
    'magenta',
    'magical',
    'magnificent',
    'majestic',
    'makeshift',
    'male',
    'malicious',
    'mammoth',
    'maniacal',
    'many',
    'marked',
    'massive',
    'married',
    'marvelous',
    'material',
    'materialistic',
    'mature',
    'mean',
    'measly',
    'meaty',
    'medical',
    'meek',
    'mellow',
    'melodic',
    'melted',
    'merciful',
    'mere',
    'messy',
    'mighty',
    'military',
    'milky',
    'mindless',
    'miniature',
    'minor',
    'miscreant',
    'misty',
    'mixed',
    'moaning',
    'modern',
    'moldy',
    'momentous',
    'motionless',
    'mountainous',
    'muddled',
    'mundane',
    'murky',
    'mushy',
    'mute',
    'mysterious',
    'naive',
    'nappy',
    'narrow',
    'nasty',
    'natural',
    'naughty',
    'nauseating',
    'near',
    'neat',
    'nebulous',
    'necessary',
    'needless',
    'needy',
    'neighborly',
    'nervous',
    'new',
    'next',
    'nice',
    'nifty',
    'nimble',
    'nippy',
    'noiseless',
    'noisy',
    'nonchalant',
    'nondescript',
    'nonstop',
    'normal',
    'nostalgic',
    'nosy',
    'noxious',
    'numberless',
    'numerous',
    'nutritious',
    'nutty',
    'oafish',
    'obedient',
    'obeisant',
    'obese',
    'obnoxious',
    'obscene',
    'obsequious',
    'observant',
    'obsolete',
    'obtainable',
    'oceanic',
    'odd',
    'offbeat',
    'old',
    'old-fashioned',
    'omniscient',
    'onerous',
    'open',
    'opposite',
    'optimal',
    'orange',
    'ordinary',
    'organic',
    'ossified',
    'outgoing',
    'outrageous',
    'outstanding',
    'oval',
    'overconfident',
    'overjoyed',
    'overrated',
    'overt',
    'overwrought',
    'painful',
    'painstaking',
    'pale',
    'paltry',
    'panicky',
    'panoramic',
    'parallel',
    'parched',
    'parsimonious',
    'past',
    'pastoral',
    'pathetic',
    'peaceful',
    'penitent',
    'perfect',
    'periodic',
    'permissible',
    'perpetual',
    'petite',
    'phobic',
    'physical',
    'picayune',
    'pink',
    'piquant',
    'placid',
    'plain',
    'plant',
    'plastic',
    'plausible',
    'pleasant',
    'plucky',
    'pointless',
    'poised',
    'polite',
    'political',
    'poor',
    'possessive',
    'possible',
    'powerful',
    'precious',
    'premium',
    'present',
    'pretty',
    'previous',
    'pricey',
    'prickly',
    'private',
    'probable',
    'productive',
    'profuse',
    'protective',
    'proud',
    'psychedelic',
    'psychotic',
    'public',
    'puffy',
    'pumped',
    'puny',
    'purple',
    'purring',
    'pushy',
    'puzzled',
    'puzzling',
    'quaint',
    'quarrelsome',
    'questionable',
    'quick',
    'quiet',
    'quirky',
    'quixotic',
    'quizzical',
    'rabid',
    'racial',
    'ragged',
    'rainy',
    'rambunctious',
    'rampant',
    'rapid',
    'rare',
    'raspy',
    'ratty',
    'ready',
    'real',
    'rebel',
    'receptive',
    'recondite',
    'red',
    'redundant',
    'reflective',
    'regular',
    'relieved',
    'remarkable',
    'reminiscent',
    'repulsive',
    'resolute',
    'resonant',
    'responsible',
    'rhetorical',
    'rich',
    'right',
    'righteous',
    'rightful',
    'rigid',
    'ripe',
    'ritzy',
    'roasted',
    'robust',
    'romantic',
    'roomy',
    'rotten',
    'rough',
    'round',
    'royal',
    'ruddy',
    'rude',
    'rural',
    'rustic',
    'ruthless',
    'sable',
    'sad',
    'safe',
    'salty',
    'same',
    'sassy',
    'satisfying',
    'savory',
    'scandalous',
    'scarce',
    'scared',
    'scary',
    'scattered',
    'scientific',
    'scintillating',
    'scrawny',
    'screeching',
    'second',
    'second-hand',
    'secret',
    'secretive',
    'sedate',
    'seemly',
    'selective',
    'selfish',
    'separate',
    'serious',
    'shaggy',
    'shaky',
    'shallow',
    'sharp',
    'shiny',
    'shivering',
    'shocking',
    'short',
    'shrill',
    'shut',
    'shy',
    'sick',
    'silent',
    'silky',
    'silly',
    'simple',
    'simplistic',
    'sincere',
    'skillful',
    'skinny',
    'sleepy',
    'slim',
    'slimy',
    'slippery',
    'sloppy',
    'slow',
    'small',
    'smart',
    'smelly',
    'smiling',
    'smoggy',
    'smooth',
    'sneaky',
    'snobbish',
    'snotty',
    'soft',
    'soggy',
    'solid',
    'somber',
    'sophisticated',
    'sordid',
    'sore',
    'sour',
    'sparkling',
    'special',
    'spectacular',
    'spicy',
    'spiffy',
    'spiky',
    'spiritual',
    'spiteful',
    'splendid',
    'spooky',
    'spotless',
    'spotted',
    'spotty',
    'spurious',
    'squalid',
    'square',
    'squealing',
    'squeamish',
    'staking',
    'stale',
    'standing',
    'statuesque',
    'steadfast',
    'steady',
    'steep',
    'stereotyped',
    'sticky',
    'stiff',
    'stimulating',
    'stingy',
    'stormy',
    'straight',
    'strange',
    'striped',
    'strong',
    'stupendous',
    'sturdy',
    'subdued',
    'subsequent',
    'substantial',
    'successful',
    'succinct',
    'sudden',
    'sulky',
    'super',
    'superb',
    'superficial',
    'supreme',
    'swanky',
    'sweet',
    'sweltering',
    'swift',
    'symptomatic',
    'synonymous',
    'taboo',
    'tacit',
    'tacky',
    'talented',
    'tall',
    'tame',
    'tan',
    'tangible',
    'tangy',
    'tart',
    'tasteful',
    'tasteless',
    'tasty',
    'tawdry',
    'tearful',
    'tedious',
    'teeny',
    'teeny-tiny',
    'telling',
    'temporary',
    'ten',
    'tender',
    'tense',
    'tenuous',
    'terrific',
    'tested',
    'testy',
    'thankful',
    'therapeutic',
    'thick',
    'thin',
    'thinkable',
    'third',
    'thirsty',
    'thoughtful',
    'thoughtless',
    'threatening',
    'thundering',
    'tidy',
    'tight',
    'tightfisted',
    'tiny',
    'tired',
    'tiresome',
    'toothsome',
    'torpid',
    'tough',
    'towering',
    'tranquil',
    'trashy',
    'tremendous',
    'tricky',
    'trite',
    'troubled',
    'truculent',
    'true',
    'truthful',
    'typical',
    'ubiquitous',
    'ultra',
    'unable',
    'unaccountable',
    'unadvised',
    'unarmed',
    'unbecoming',
    'unbiased',
    'uncovered',
    'understood',
    'undesirable',
    'unequal',
    'unequaled',
    'uneven',
    'unhealthy',
    'uninterested',
    'unique',
    'unkempt',
    'unknown',
    'unnatural',
    'unruly',
    'unsightly',
    'unsuitable',
    'untidy',
    'unused',
    'unusual',
    'unwieldy',
    'unwritten',
    'upbeat',
    'uppity',
    'upset',
    'uptight',
    'used',
    'useful',
    'useless',
    'utopian',
    'vacuous',
    'vagabond',
    'vague',
    'valuable',
    'various',
    'vast',
    'vengeful',
    'venomous',
    'verdant',
    'versed',
    'victorious',
    'vigorous',
    'violent',
    'violet',
    'vivacious',
    'voiceless',
    'volatile',
    'voracious',
    'vulgar',
    'wacky',
    'waggish',
    'waiting',
    'wakeful',
    'wandering',
    'wanting',
    'warlike',
    'warm',
    'wary',
    'wasteful',
    'watery',
    'weak',
    'wealthy',
    'weary',
    'well-groomed',
    'well-made',
    'well-off',
    'well-to-do',
    'wet',
    'whimsical',
    'whispering',
    'white',
    'whole',
    'wholesale',
    'wicked',
    'wide',
    'wide-awake',
    'wiggly',
    'wild',
    'willing',
    'windy',
    'wiry',
    'wise',
    'wistful',
    'witty',
    'woebegone',
    'womanly',
    'wonderful',
    'wooden',
    'woozy',
    'workable',
    'worried',
    'worthless',
    'wrathful',
    'wretched',
    'wrong',
    'wry',
    'yellow',
    'yielding',
    'young',
    'youthful',
    'yummy',
    'zany',
    'zealous',
    'zesty',
    'zippy',
    'zonked',
]
