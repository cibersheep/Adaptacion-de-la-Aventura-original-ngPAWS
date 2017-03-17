// This file is (C) Carlos Sanchez 2014, released under the MIT license


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// GLOBAL VARIABLES AND CONSTANTS ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONSTANTS 
VOCABULARY_ID = 0;
VOCABULARY_WORD = 1;
VOCABULARY_TYPE = 2;

WORDTYPE_VERB = 0;
WORDTYPE_NOUN = 1
WORDTYPE_ADJECT = 2;
WORDTYPE_ADVERB = 3;
WORDTYPE_PRONOUN = 4;
WORDTYPE_CONJUNCTION = 5;
WORDTYPE_PREPOSITION = 6;

TIMER_MILLISECONDS  = 40;

RESOURCE_TYPE_IMG = 1;
RESOURCE_TYPE_SND = 2;

PROCESS_RESPONSE = 0;
PROCESS_DESCRIPTION = 1;
PROCESS_TURN = 2;

DIV_TEXT_SCROLL_STEP = 40;


// Aux
SET_VALUE = 255; // Value assigned by SET condact
EMPTY_WORD = 255; // Value for word types when no match is found (as for  sentences without adjective or name)
MAX_WORD_LENGHT = 10;  // Number of characters considered per word
FLAG_COUNT = 256;  // Number of flags
NUM_CONNECTION_VERBS = 14; // Number of verbs used as connection, from 0 to N - 1
NUM_CONVERTIBLE_NOUNS = 20;
NUM_PROPER_NOUNS = 50; // Number of proper nouns, can't be used as pronoun reference
EMPTY_OBJECT = 255; // To remark there is no object when the action requires a objno parameter
NO_EXIT = 255;  // If an exit does not exist, its value is this value
MAX_CHANNELS = 17; // Number of SFX channels
RESOURCES_DIR='dat/';


//Attributes
ATTR_LIGHT=0;			// Object produces light
ATTR_WEARABLE=1;		// Object is wearable
ATTR_CONTAINER=2;       // Object is a container
ATTR_NPC=3;             // Object is actually an NPC
ATTR_CONCEALED = 4; /// Present but not visible
ATTR_EDIBLE = 5;   /// Can be eaten
ATTR_DRINKABLE=6;
ATTR_ENTERABLE = 7;
ATTR_FEMALE = 8;
ATTR_LOCKABLE = 9;
ATTR_LOCKED = 10;
ATTR_MALE = 11;
ATTR_NEUTER=12;
ATTR_OPENABLE =13;
ATTR_OPEN=14;
ATTR_PLURALNAME = 15;
ATTR_TRANSPARENT=16;
ATTR_SCENERY=17;
ATTR_SUPPORTER = 18;
ATTR_SWITCHABLE=19;
ATTR_ON  =20;
ATTR_STATIC  =21;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// INTERNAL STRINGS ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General messages & strings
STR_NEWLINE = '<br />';
STR_PROMPT_START = '<span class="feedback">&gt; ';
STR_PROMPT_END = '</span>';
STR_RAMSAVE_FILENAME = 'RAMSAVE_SAVEGAME';



// Runtime error messages
STR_WRONG_SYSMESS = 'WARNING: System message requested does not exist.'; 
STR_WRONG_LOCATION = 'WARNING: Location requested does not exist.'; 
STR_WRONG_MESSAGE = 'WARNING: Message requested does not exist.'; 
STR_WRONG_PROCESS = 'WARNING: Process requested does not exist.' 
STR_RAMLOAD_ERROR= 'WARNING: You can\'t restore game as it has not yet been saved.'; 
STR_RUNTIME_VERSION  = 'ngPAWS runtime (C) 2014 Carlos Sanchez.  Released under {URL|http://www.opensource.org/licenses/MIT| MIT license}.\nBuzz sound libray (C) Jay Salvat. Released under the {URL|http://www.opensource.org/licenses/MIT| MIT license} \n jQuery (C) jQuery Foundation. Released under the {URL|https://jquery.org/license/| MIT license}.';
STR_TRANSCRIPT = 'To copy the transcript to your clipboard, press Ctrl+C, then press Enter';

STR_INVALID_TAG_SEQUENCE = 'Invalid tag sequence: ';
STR_INVALID_TAG_SEQUENCE_EMPTY = 'Invalid tag sequence.';
STR_INVALID_TAG_SEQUENCE_BADPARAMS = 'Invalid tag sequence: bad parameters.';
STR_INVALID_TAG_SEQUENCE_BADTAG = 'Invalid tag sequence: unknown tag.';
STR_BADIE = 'You are using a very old version of Internet Explorer. Some features of this product won\'t be avaliable, and other may not work properly. For a better experience please upgrade your browser or install some other one like Firefox, Chrome or Opera.\n\nIt\'s up to you to continue but be warned your experience may be affected.';
STR_INVALID_OBJECT = 'WARNING: Trying to access object that does not exist'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////     FLAGS     ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


FLAG_LIGHT = 0;
FLAG_OBJECTS_CARRIED_COUNT = 1;
FLAG_AUTODEC2 = 2; 
FLAG_AUTODEC3 = 3;
FLAG_AUTODEC4 = 4;
FLAG_AUTODEC5 = 5;
FLAG_AUTODEC6 = 6;
FLAG_AUTODEC7 = 7;
FLAG_AUTODEC8 = 8;
FLAG_AUTODEC9 = 9;
FLAG_AUTODEC10 = 10;
FLAG_ESCAPE = 11;
FLAG_PARSER_SETTINGS = 12;
FLAG_PICTURE_SETTINGS = 29
FLAG_SCORE = 30;
FLAG_TURNS_LOW = 31;
FLAG_TURNS_HIGH = 32;
FLAG_VERB = 33;
FLAG_NOUN1 =34;
FLAG_ADJECT1 = 35;
FLAG_ADVERB = 36;
FLAG_MAXOBJECTS_CARRIED = 37;
FLAG_LOCATION = 38;
FLAG_TOPLINE = 39;   // deprecated
FLAG_MODE = 40;  // deprecated
FLAG_PROTECT = 41;   // deprecated
FLAG_PROMPT = 42; 
FLAG_PREP = 43;
FLAG_NOUN2 = 44;
FLAG_ADJECT2 = 45;
FLAG_PRONOUN = 46;
FLAG_PRONOUN_ADJECT = 47;
FLAG_TIMEOUT_LENGTH = 48;
FLAG_TIMEOUT_SETTINGS = 49; 
FLAG_DOALL_LOC = 50;
FLAG_REFERRED_OBJECT = 51;
FLAG_MAXWEIGHT_CARRIED = 52;
FLAG_OBJECT_LIST_FORMAT = 53;
FLAG_REFERRED_OBJECT_LOCATION = 54;
FLAG_REFERRED_OBJECT_WEIGHT = 55;
FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES = 56;
FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES = 57;
FLAG_EXPANSION1 = 58;
FLAG_EXPANSION2 = 59;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// SPECIAL LOCATIONS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

LOCATION_WORN = 253;
LOCATION_CARRIED = 254;
LOCATION_NONCREATED = 252;
LOCATION_HERE = 255;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////  SYSTEM MESSAGES  ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



SYSMESS_ISDARK = 0;
SYSMESS_YOUCANSEE = 1;
SYSMESS_PROMPT0 = 2;
SYSMESS_PROMPT1 = 3;
SYSMESS_PROMPT2 = 4
SYSMESS_PROMPT3= 5;
SYSMESS_IDONTUNDERSTAND = 6;
SYSMESS_WRONGDIRECTION = 7
SYSMESS_CANTDOTHAT = 8;
SYSMESS_YOUARECARRYING = 9;
SYSMESS_WORN = 10;
SYSMESS_CARRYING_NOTHING = 11;
SYSMESS_AREYOUSURE = 12;
SYSMESS_PLAYAGAIN = 13;
SYSMESS_FAREWELL = 14;
SYSMESS_OK = 15;
SYSMESS_PRESSANYKEY = 16;
SYSMESS_TURNS_START = 17;
SYSMESS_TURNS_CONTINUE = 18;
SYSMESS_TURNS_PLURAL = 19;
SYSMESS_TURNS_END = 20;
SYSMESS_SCORE_START= 21;
SYSMESS_SCORE_END =22;
SYSMESS_YOURENOTWEARINGTHAT = 23;
SYSMESS_YOUAREALREADYWEARINGTHAT = 24;
SYSMESS_YOUALREADYHAVEOBJECT = 25;
SYSMESS_CANTSEETHAT = 26;
SYSMESS_CANTCARRYANYMORE = 27;
SYSMESS_YOUDONTHAVETHAT = 28;
SYSMESS_YOUAREALREADYWAERINGOBJECT = 29;
SYSMESS_YES = 30;
SYSMESS_NO = 31;
SYSMESS_MORE = 32;
SYSMESS_CARET = 33;
SYSMESS_TIMEOUT=35;
SYSMESS_YOUTAKEOBJECT = 36;
SYSMESS_YOUWEAROBJECT = 37;
SYSMESS_YOUREMOVEOBJECT = 38;
SYSMESS_YOUDROPOBJECT = 39;
SYSMESS_YOUCANTWEAROBJECT = 40;
SYSMESS_YOUCANTREMOVEOBJECT = 41;
SYSMESS_CANTREMOVE_TOOMANYOBJECTS = 42;
SYSMESS_WEIGHSTOOMUCH = 43;
SYSMESS_YOUPUTOBJECTIN = 44;
SYSMESS_YOUCANTTAKEOBJECTOUTOF = 45;
SYSMESS_LISTSEPARATOR = 46;
SYSMESS_LISTLASTSEPARATOR = 47;
SYSMESS_LISTEND = 48;
SYSMESS_YOUDONTHAVEOBJECT = 49;
SYSMESS_YOUARENOTWEARINGOBJECT = 50;
SYSMESS_PUTINTAKEOUTTERMINATION = 51;
SYSMESS_THATISNOTIN = 52;
SYSMESS_EMPTYOBJECTLIST = 53;
SYSMESS_FILENOTFOUND = 54;
SYSMESS_CORRUPTFILE = 55;
SYSMESS_IOFAILURE = 56;
SYSMESS_DIRECTORYFULL = 57;
SYSMESS_LOADFILE = 58;
SYSMESS_FILENOTFOUND = 59;
SYSMESS_SAVEFILE = 60;
SYSMESS_SORRY = 61;
SYSMESS_NONSENSE_SENTENCE = 62;
SYSMESS_NPCLISTSTART = 63;
SYSMESS_NPCLISTCONTINUE = 64;
SYSMESS_NPCLISTCONTINUE_PLURAL = 65;
SYSMESS_INSIDE_YOUCANSEE = 66;
SYSMESS_OVER_YOUCANSEE = 67;
SYSMESS_YOUPUTOBJECTON = 68;
SYSMESS_YOUCANTTAKEOBJECTFROM = 69;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// GLOBAL VARS //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Parser vars
var last_player_orders = [];   // Store last player orders, to be able to restore it when pressing arrow up
var last_player_orders_pointer = 0;
var parser_word_found;
var player_order_buffer = '';
var player_order = ''; // Current player order
var previous_verb = EMPTY_WORD;
var previous_noun = EMPTY_WORD;
var previous_adject = EMPTY_WORD;
var pronoun_suffixes = [];


//Settings
var graphicsON = true; 
var soundsON = true; 
var interruptDisabled = false;
var showWarnings = true;

// waitkey commands callback function
var waitkey_callback_function = [];

//PAUSE
var inPause=false;
var pauseRemainingTime = 0;



// Transcript
var inTranscript = false;
var transcript = '';


// Block
var inBlock = false;
var unblock_process = null;


// END
var inEND = false;

//QUIT
var inQUIT = false;

//ANYKEY
var inAnykey = false;

//GETKEY
var inGetkey = false;
var getkey_return_flag = null;

// Status flags
var done_flag;
var describe_location_flag;
var in_response;
var success;

// doall control
var doall_flag;
var process_in_doall;
var entry_for_doall	= '';
var current_process;


var timeout_progress = 0;
var ramsave_value = null;
var num_objects;


// The flags
var flags = new Array();


// The sound channels
var soundChannels = [];
var soundLoopCount = [];

//The last free object attribute
var nextFreeAttr = 22;

//Autocomplete array
var autocomplete = new Array();
var autocompleteStep = 0;
var autocompleteBaseWord = '';
// PROCESSES

interruptProcessExists = false;

function pro000()
{
process_restart=true;
pro000_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p000e0000:
	{
 		if (skipdoall('p000e0000')) break p000e0000;
 		ACChook(0);
		if (done_flag) break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0001:
	{
 		if (skipdoall('p000e0001')) break p000e0001;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0001;
			if (!CNDnoun1(20)) break p000e0001;
 		}
		if (!CNDprep(3)) break p000e0001;
 		ACCsynonym(75,255);
		{}

	}

	// PON TODO
	p000e0002:
	{
 		if (skipdoall('p000e0002')) break p000e0002;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0002;
			if (!CNDnoun1(20)) break p000e0002;
 		}
		if (!CNDprep(4)) break p000e0002;
 		ACCsynonym(74,255);
		{}

	}

	// AGARR TODO
	p000e0003:
	{
 		if (skipdoall('p000e0003')) break p000e0003;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0003;
			if (!CNDnoun1(20)) break p000e0003;
 		}
		if (!CNDisnotlight()) break p000e0003;
 		ACCwriteln(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0004:
	{
 		if (skipdoall('p000e0004')) break p000e0004;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0004;
			if (!CNDnoun1(20)) break p000e0004;
 		}
 		ACCobjat(getFlag(38),13);
		if (!CNDzero(13)) break p000e0004;
 		ACCwriteln(2);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0005:
	{
 		if (skipdoall('p000e0005')) break p000e0005;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0005;
			if (!CNDnoun1(20)) break p000e0005;
 		}
		entry_for_doall = 'p000e0006';
		process_in_doall = 0;
 		ACCdoall(255);
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0006:
	{
 		if (skipdoall('p000e0006')) break p000e0006;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0006;
			if (!CNDnoun1(20)) break p000e0006;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0006;
 		ACCwriteln(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0007:
	{
 		if (skipdoall('p000e0007')) break p000e0007;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0007;
			if (!CNDnoun1(20)) break p000e0007;
 		}
		entry_for_doall = 'p000e0008';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0008:
	{
 		if (skipdoall('p000e0008')) break p000e0008;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0008;
 		}
		if (!CNDnoteq(51,255)) break p000e0008;
		if (!CNDpresent(getFlag(51))) break p000e0008;
		if (!CNDonotzero(getFlag(51),2)) break p000e0008;
 		ACCcopyff(34,44);
 		ACCcopyff(35,45);
 		ACCsynonym(75,20);
 		ACClet(43,3);
		{}

	}

	// EXTRAE _
	p000e0009:
	{
 		if (skipdoall('p000e0009')) break p000e0009;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0009;
 		}
 		ACCwhatox2(13);
		{}

	}

	// EXTRAE TODO
	p000e0010:
	{
 		if (skipdoall('p000e0010')) break p000e0010;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0010;
			if (!CNDnoun1(20)) break p000e0010;
 		}
		if (!CNDprep(3)) break p000e0010;
		if (!CNDnoteq(13,255)) break p000e0010;
		if (!CNDonotzero(getFlag(13),2)) break p000e0010;
		if (!CNDabsent(getFlag(13))) break p000e0010;
 		ACCwriteln(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0011:
	{
 		if (skipdoall('p000e0011')) break p000e0011;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0011;
			if (!CNDnoun1(20)) break p000e0011;
 		}
		if (!CNDprep(3)) break p000e0011;
		if (!CNDnoteq(13,255)) break p000e0011;
		if (!CNDonotzero(getFlag(13),18)) break p000e0011;
		if (!CNDabsent(getFlag(13))) break p000e0011;
 		ACCwriteln(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0012:
	{
 		if (skipdoall('p000e0012')) break p000e0012;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0012;
			if (!CNDnoun1(20)) break p000e0012;
 		}
		if (!CNDprep(3)) break p000e0012;
		if (!CNDnoteq(13,255)) break p000e0012;
		if (!CNDonotzero(getFlag(13),2)) break p000e0012;
		if (!CNDpresent(getFlag(13))) break p000e0012;
 		ACCobjat(getFlag(13),14);
		if (!CNDzero(14)) break p000e0012;
 		ACCwriteln(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0013:
	{
 		if (skipdoall('p000e0013')) break p000e0013;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0013;
			if (!CNDnoun1(20)) break p000e0013;
 		}
		if (!CNDprep(3)) break p000e0013;
		if (!CNDnoteq(13,255)) break p000e0013;
		if (!CNDonotzero(getFlag(13),18)) break p000e0013;
		if (!CNDpresent(getFlag(13))) break p000e0013;
 		ACCobjat(getFlag(13),14);
		if (!CNDzero(14)) break p000e0013;
 		ACCwriteln(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0014:
	{
 		if (skipdoall('p000e0014')) break p000e0014;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0014;
			if (!CNDnoun1(20)) break p000e0014;
 		}
		if (!CNDprep(3)) break p000e0014;
		if (!CNDnoteq(13,255)) break p000e0014;
		if (!CNDonotzero(getFlag(13),2)) break p000e0014;
		if (!CNDpresent(getFlag(13))) break p000e0014;
		entry_for_doall = 'p000e0015';
		process_in_doall = 0;
 		ACCdoall(getFlag(13));
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0015:
	{
 		if (skipdoall('p000e0015')) break p000e0015;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0015;
			if (!CNDnoun1(20)) break p000e0015;
 		}
		if (!CNDprep(3)) break p000e0015;
		if (!CNDnoteq(13,255)) break p000e0015;
		if (!CNDonotzero(getFlag(13),18)) break p000e0015;
		if (!CNDpresent(getFlag(13))) break p000e0015;
		entry_for_doall = 'p000e0016';
		process_in_doall = 0;
 		ACCdoall(getFlag(13));
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0016:
	{
 		if (skipdoall('p000e0016')) break p000e0016;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0016;
 		}
		if (!CNDnoteq(51,255)) break p000e0016;
		if (!CNDpresent(getFlag(51))) break p000e0016;
		if (!CNDprep(4)) break p000e0016;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0016;
		if (!CNDpresent(getFlag(13))) break p000e0016;
 		ACCsynonym(74,255);
 		ACClet(43,4);
		{}

	}

	// PON _
	p000e0017:
	{
 		if (skipdoall('p000e0017')) break p000e0017;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0017;
 		}
		if (!CNDnoteq(51,255)) break p000e0017;
		if (!CNDpresent(getFlag(51))) break p000e0017;
		if (!CNDprep(4)) break p000e0017;
 		ACCsynonym(74,255);
		{}

	}

	// ECHA _
	p000e0018:
	{
 		if (skipdoall('p000e0018')) break p000e0018;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0018;
 		}
 		ACCwhatox2(13);
		{}

	}

	// ECHA TODO
	p000e0019:
	{
 		if (skipdoall('p000e0019')) break p000e0019;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0019;
			if (!CNDnoun1(20)) break p000e0019;
 		}
		if (!CNDprep(4)) break p000e0019;
		if (!CNDnoteq(13,255)) break p000e0019;
		if (!CNDonotzero(getFlag(13),2)) break p000e0019;
		if (!CNDabsent(getFlag(13))) break p000e0019;
 		ACCwriteln(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0020:
	{
 		if (skipdoall('p000e0020')) break p000e0020;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0020;
			if (!CNDnoun1(20)) break p000e0020;
 		}
		if (!CNDprep(4)) break p000e0020;
		if (!CNDnoteq(13,255)) break p000e0020;
		if (!CNDonotzero(getFlag(13),18)) break p000e0020;
		if (!CNDabsent(getFlag(13))) break p000e0020;
 		ACCwriteln(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0021:
	{
 		if (skipdoall('p000e0021')) break p000e0021;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0021;
			if (!CNDnoun1(20)) break p000e0021;
 		}
		if (!CNDprep(4)) break p000e0021;
		if (!CNDnoteq(13,255)) break p000e0021;
		if (!CNDonotzero(getFlag(13),2)) break p000e0021;
		if (!CNDcarried(getFlag(13))) break p000e0021;
 		ACCobjat(254,14);
		if (!CNDeq(14,1)) break p000e0021;
 		ACCwriteln(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0022:
	{
 		if (skipdoall('p000e0022')) break p000e0022;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0022;
			if (!CNDnoun1(20)) break p000e0022;
 		}
		if (!CNDprep(4)) break p000e0022;
		if (!CNDnoteq(13,255)) break p000e0022;
		if (!CNDonotzero(getFlag(13),18)) break p000e0022;
		if (!CNDcarried(getFlag(13))) break p000e0022;
 		ACCobjat(254,14);
		if (!CNDeq(14,1)) break p000e0022;
 		ACCwriteln(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0023:
	{
 		if (skipdoall('p000e0023')) break p000e0023;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0023;
			if (!CNDnoun1(20)) break p000e0023;
 		}
		if (!CNDprep(4)) break p000e0023;
		if (!CNDnoteq(13,255)) break p000e0023;
		if (!CNDonotzero(getFlag(13),2)) break p000e0023;
		if (!CNDisat(getFlag(13),getFlag(38))) break p000e0023;
 		ACCobjat(254,14);
		if (!CNDzero(14)) break p000e0023;
 		ACCwriteln(12);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0024:
	{
 		if (skipdoall('p000e0024')) break p000e0024;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0024;
			if (!CNDnoun1(20)) break p000e0024;
 		}
		if (!CNDprep(4)) break p000e0024;
		if (!CNDnoteq(13,255)) break p000e0024;
		if (!CNDonotzero(getFlag(13),18)) break p000e0024;
		if (!CNDisat(getFlag(13),getFlag(38))) break p000e0024;
 		ACCobjat(254,14);
		if (!CNDzero(14)) break p000e0024;
 		ACCwriteln(13);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0025:
	{
 		if (skipdoall('p000e0025')) break p000e0025;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0025;
			if (!CNDnoun1(20)) break p000e0025;
 		}
		if (!CNDprep(4)) break p000e0025;
		if (!CNDnoteq(13,255)) break p000e0025;
		if (!CNDonotzero(getFlag(13),2)) break p000e0025;
		if (!CNDpresent(getFlag(13))) break p000e0025;
		entry_for_doall = 'p000e0026';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0026:
	{
 		if (skipdoall('p000e0026')) break p000e0026;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0026;
			if (!CNDnoun1(20)) break p000e0026;
 		}
		if (!CNDprep(4)) break p000e0026;
		if (!CNDnoteq(13,255)) break p000e0026;
		if (!CNDonotzero(getFlag(13),18)) break p000e0026;
		if (!CNDpresent(getFlag(13))) break p000e0026;
		entry_for_doall = 'p000e0027';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// DESVESTIR TODO
	p000e0027:
	{
 		if (skipdoall('p000e0027')) break p000e0027;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0027;
			if (!CNDnoun1(20)) break p000e0027;
 		}
 		ACCobjat(253,13);
		if (!CNDzero(13)) break p000e0027;
 		ACCwriteln(14);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR TODO
	p000e0028:
	{
 		if (skipdoall('p000e0028')) break p000e0028;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0028;
			if (!CNDnoun1(20)) break p000e0028;
 		}
		entry_for_doall = 'p000e0029';
		process_in_doall = 0;
 		ACCdoall(253);
		break pro000_restart;
		{}

	}

	// PON TODO
	p000e0029:
	{
 		if (skipdoall('p000e0029')) break p000e0029;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0029;
			if (!CNDnoun1(20)) break p000e0029;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0029;
 		ACCwriteln(15);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON TODO
	p000e0030:
	{
 		if (skipdoall('p000e0030')) break p000e0030;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0030;
			if (!CNDnoun1(20)) break p000e0030;
 		}
		entry_for_doall = 'p000e0031';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0031:
	{
 		if (skipdoall('p000e0031')) break p000e0031;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0031;
			if (!CNDnoun1(20)) break p000e0031;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0031;
 		ACCwriteln(16);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0032:
	{
 		if (skipdoall('p000e0032')) break p000e0032;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0032;
			if (!CNDnoun1(20)) break p000e0032;
 		}
		if (!CNDeq(1,1)) break p000e0032;
		entry_for_doall = 'p000e0033';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0033:
	{
 		if (skipdoall('p000e0033')) break p000e0033;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0033;
			if (!CNDnoun1(20)) break p000e0033;
 		}
		if (!CNDgt(1,1)) break p000e0033;
 		ACCwriteln(17);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ TODO
	p000e0034:
	{
 		if (skipdoall('p000e0034')) break p000e0034;
 		if (in_response)
		{
			if (!CNDnoun1(20)) break p000e0034;
 		}
 		ACCwriteln(18);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0035:
	{
 		if (skipdoall('p000e0035')) break p000e0035;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0035;
 		}
 		ACCsynonym(103,255);
		{}

	}

	// APAGA _
	p000e0036:
	{
 		if (skipdoall('p000e0036')) break p000e0036;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0036;
 		}
 		ACCsynonym(104,255);
		{}

	}

	// ANDA _
	p000e0037:
	{
 		if (skipdoall('p000e0037')) break p000e0037;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0037;
 		}
		if (!CNDlt(34,14)) break p000e0037;
 		ACCcopyff(34,33);
		{}

	}

	// _ _
	p000e0038:
	{
 		if (skipdoall('p000e0038')) break p000e0038;
		if (!CNDprep(4)) break p000e0038;
		if (!CNDeq(33,255)) break p000e0038;
		if (!CNDeq(34,255)) break p000e0038;
 		ACCsynonym(12,255);
 		ACClet(43,255);
		{}

	}

	// _ _
	p000e0039:
	{
 		if (skipdoall('p000e0039')) break p000e0039;
		if (!CNDprep(13)) break p000e0039;
		if (!CNDeq(33,255)) break p000e0039;
		if (!CNDeq(34,255)) break p000e0039;
 		ACCsynonym(13,255);
 		ACClet(43,255);
		{}

	}

	// D _
	p000e0040:
	{
 		if (skipdoall('p000e0040')) break p000e0040;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0040;
 		}
		if (!CNDnoteq(34,255)) break p000e0040;
		if (!CNDprep(4)) break p000e0040;
 		ACCsynonym(30,255);
		{}

	}

	// D _
	p000e0041:
	{
 		if (skipdoall('p000e0041')) break p000e0041;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0041;
 		}
		if (!CNDnoteq(34,255)) break p000e0041;
 		ACCsynonym(30,255);
		{}

	}

	// D _
	p000e0042:
	{
 		if (skipdoall('p000e0042')) break p000e0042;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0042;
 		}
		if (!CNDbnotzero(12,1)) break p000e0042;
 		ACCsynonym(30,255);
		{}

	}

	// REBUSCA _
	p000e0043:
	{
 		if (skipdoall('p000e0043')) break p000e0043;
 		if (in_response)
		{
			if (!CNDverb(78)) break p000e0043;
 		}
 		ACCsynonym(30,255);
 		ACClet(43,4);
		{}

	}

	// ARRANCA _
	p000e0044:
	{
 		if (skipdoall('p000e0044')) break p000e0044;
 		if (in_response)
		{
			if (!CNDverb(79)) break p000e0044;
 		}
 		ACCsynonym(32,255);
 		ACClet(43,3);
		{}

	}

	// EXITS _
	p000e0045:
	{
 		if (skipdoall('p000e0045')) break p000e0045;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0045;
 		}
		if (!CNDeq(34,255)) break p000e0045;
		if (!CNDbnotzero(12,1)) break p000e0045;
 		ACCsynonym(30,255);
		{}

	}

	// EXITS _
	p000e0046:
	{
 		if (skipdoall('p000e0046')) break p000e0046;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0046;
 		}
		if (!CNDnoteq(34,255)) break p000e0046;
 		ACCsynonym(30,255);
		{}

	}

	// CONSULTA _
	p000e0047:
	{
 		if (skipdoall('p000e0047')) break p000e0047;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0047;
 		}
		if (!CNDnoteq(34,255)) break p000e0047;
		if (!CNDnoteq(51,255)) break p000e0047;
		if (!CNDonotzero(getFlag(51),3)) break p000e0047;
 		ACCsynonym(31,255);
		{}

	}

	// _ _
	p000e0048:
	{
 		if (skipdoall('p000e0048')) break p000e0048;
		if (!CNDprep(9)) break p000e0048;
		if (!CNDbzero(12,2)) break p000e0048;
		if (!CNDnoteq(34,255)) break p000e0048;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0048;
		if (!CNDnoteq(44,255)) break p000e0048;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0048;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0049:
	{
 		if (skipdoall('p000e0049')) break p000e0049;
		if (!CNDprep(2)) break p000e0049;
		if (!CNDbzero(12,2)) break p000e0049;
		if (!CNDnoteq(34,255)) break p000e0049;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0049;
		if (!CNDnoteq(44,255)) break p000e0049;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0049;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0050:
	{
 		if (skipdoall('p000e0050')) break p000e0050;
		if (!CNDprep(4)) break p000e0050;
		if (!CNDbzero(12,2)) break p000e0050;
		if (!CNDnoteq(51,255)) break p000e0050;
		if (!CNDpresent(getFlag(51))) break p000e0050;
		if (!CNDonotzero(getFlag(51),2)) break p000e0050;
		if (!CNDnoteq(44,255)) break p000e0050;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0050;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0051:
	{
 		if (skipdoall('p000e0051')) break p000e0051;
		if (!CNDprep(3)) break p000e0051;
		if (!CNDbzero(12,2)) break p000e0051;
		if (!CNDnoteq(51,255)) break p000e0051;
		if (!CNDpresent(getFlag(51))) break p000e0051;
		if (!CNDonotzero(getFlag(51),2)) break p000e0051;
		if (!CNDnoteq(44,255)) break p000e0051;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0051;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// AGARR _
	p000e0052:
	{
 		if (skipdoall('p000e0052')) break p000e0052;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0052;
 		}
		if (!CNDprep(3)) break p000e0052;
 		ACCsynonym(75,255);
		{}

	}

	// _ _
	p000e0053:
	{
 		if (skipdoall('p000e0053')) break p000e0053;
 		ACChook(19);
		if (done_flag) break pro000_restart;
		{}

	}

	// AD _
	p000e0054:
	{
 		if (skipdoall('p000e0054')) break p000e0054;
 		if (in_response)
		{
			if (!CNDverb(115)) break p000e0054;
 		}
 		ACCwriteln(20);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0055:
	{
 		if (skipdoall('p000e0055')) break p000e0055;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0055;
 		}
		if (!CNDat(28)) break p000e0055;
 		ACCprocess(7);
		{}

	}

	//  _
	p000e0056:
	{
 		if (skipdoall('p000e0056')) break p000e0056;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0056;
 		}
		if (!CNDat(9)) break p000e0056;
 		ACCprocess(7);
		{}

	}

	//  _
	p000e0057:
	{
 		if (skipdoall('p000e0057')) break p000e0057;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0057;
 		}
		if (!CNDat(17)) break p000e0057;
 		ACCprocess(8);
		{}

	}

	//  _
	p000e0058:
	{
 		if (skipdoall('p000e0058')) break p000e0058;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0058;
 		}
		if (!CNDat(23)) break p000e0058;
 		ACCprocess(7);
		{}

	}

	//  _
	p000e0059:
	{
 		if (skipdoall('p000e0059')) break p000e0059;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0059;
 		}
		if (!CNDat(9)) break p000e0059;
 		ACCprocess(7);
		{}

	}

	//  _
	p000e0060:
	{
 		if (skipdoall('p000e0060')) break p000e0060;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0060;
 		}
		if (!CNDat(17)) break p000e0060;
 		ACCprocess(8);
		{}

	}

	//  _
	p000e0061:
	{
 		if (skipdoall('p000e0061')) break p000e0061;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0061;
 		}
		if (!CNDat(17)) break p000e0061;
 		ACCprocess(8);
		{}

	}

	// ASCENDER _
	p000e0062:
	{
 		if (skipdoall('p000e0062')) break p000e0062;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0062;
 		}
		if (!CNDat(11)) break p000e0062;
 		ACCgoto(10);
 		ACCclear(0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0063:
	{
 		if (skipdoall('p000e0063')) break p000e0063;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0063;
 		}
		if (!CNDat(10)) break p000e0063;
		if (!CNDcarried(0)) break p000e0063;
		if (!CNDonotzero(0,20)) break p000e0063;
 		ACCclear(0);
 		ACCgoto(11);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0064:
	{
 		if (skipdoall('p000e0064')) break p000e0064;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0064;
 		}
		if (!CNDat(10)) break p000e0064;
 		ACCgoto(11);
 		ACCset(0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0065:
	{
 		if (skipdoall('p000e0065')) break p000e0065;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0065;
 		}
		if (!CNDat(12)) break p000e0065;
 		ACCprocess(6);
		{}

	}

	// BAJA _
	p000e0066:
	{
 		if (skipdoall('p000e0066')) break p000e0066;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0066;
 		}
		if (!CNDat(28)) break p000e0066;
 		ACCprocess(7);
		{}

	}

	// BAJA _
	p000e0067:
	{
 		if (skipdoall('p000e0067')) break p000e0067;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0067;
 		}
		if (!CNDat(9)) break p000e0067;
 		ACCprocess(7);
		{}

	}

	// ENTRA _
	p000e0068:
	{
 		if (skipdoall('p000e0068')) break p000e0068;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0068;
 		}
		if (!CNDat(26)) break p000e0068;
		if (!CNDzero(140)) break p000e0068;
 		ACCwrite(21);
 		ACCwrite(22);
 		ACCwriteln(23);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0069:
	{
 		if (skipdoall('p000e0069')) break p000e0069;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0069;
 		}
		if (!CNDat(26)) break p000e0069;
		if (!CNDeq(140,1)) break p000e0069;
 		ACCwrite(24);
 		ACCwrite(25);
 		ACCwriteln(26);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0070:
	{
 		if (skipdoall('p000e0070')) break p000e0070;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0070;
 		}
		if (!CNDat(26)) break p000e0070;
		if (!CNDeq(140,2)) break p000e0070;
 		ACCwrite(27);
 		ACCwriteln(28);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0071:
	{
 		if (skipdoall('p000e0071')) break p000e0071;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0071;
 		}
		if (!CNDat(26)) break p000e0071;
		if (!CNDeq(1,5)) break p000e0071;
		if (!CNDnotzero(110)) break p000e0071;
 		ACCgoto(30);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0072:
	{
 		if (skipdoall('p000e0072')) break p000e0072;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0072;
 		}
		if (!CNDat(26)) break p000e0072;
 		ACCwriteln(29);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0073:
	{
 		if (skipdoall('p000e0073')) break p000e0073;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0073;
 		}
		if (!CNDat(12)) break p000e0073;
 		ACCprocess(6);
		{}

	}

	//  _
	p000e0074:
	{
 		if (skipdoall('p000e0074')) break p000e0074;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0074;
 		}
		if (!CNDat(17)) break p000e0074;
 		ACCprocess(8);
		{}

	}

	// ESCUCHA _
	p000e0075:
	{
 		if (skipdoall('p000e0075')) break p000e0075;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0075;
 		}
		if (!CNDat(19)) break p000e0075;
 		ACCwriteln(30);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0076:
	{
 		if (skipdoall('p000e0076')) break p000e0076;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0076;
 		}
 		ACCwriteln(31);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0077:
	{
 		if (skipdoall('p000e0077')) break p000e0077;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0077;
 		}
 		ACCprocess(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0078:
	{
 		if (skipdoall('p000e0078')) break p000e0078;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0078;
 		}
 		ACCwriteln(32);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// EMPUJA ENANO
	p000e0079:
	{
 		if (skipdoall('p000e0079')) break p000e0079;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0079;
			if (!CNDnoun1(68)) break p000e0079;
 		}
		if (!CNDat(12)) break p000e0079;
		if (!CNDlt(102,255)) break p000e0079;
 		ACCset(102);
 		ACCwriteln(33);
 		ACCpause(100);
 		function anykey00000() 
		{
 		ACCwriteln(34);
 		ACClet(5,4);
 		ACCdone();
		return;
		}
 		waitKey(anykey00000);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0080:
	{
 		if (skipdoall('p000e0080')) break p000e0080;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0080;
			if (!CNDnoun1(90)) break p000e0080;
 		}
		if (!CNDpresent(4)) break p000e0080;
		if (!CNDnotcarr(4)) break p000e0080;
 		ACCget(4);
		if (!success) break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0081:
	{
 		if (skipdoall('p000e0081')) break p000e0081;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0081;
			if (!CNDnoun1(90)) break p000e0081;
 		}
		if (!CNDeq(44,255)) break p000e0081;
 		ACClet(43,9);
 		ACClet(44,54);
		{}

	}

	// ABRE BARRO
	p000e0082:
	{
 		if (skipdoall('p000e0082')) break p000e0082;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0082;
			if (!CNDnoun1(90)) break p000e0082;
 		}
		if (!CNDprep(9)) break p000e0082;
		if (!CNDnoun2(54)) break p000e0082;
		if (!CNDat(26)) break p000e0082;
		if (!CNDcarried(4)) break p000e0082;
		if (!CNDzero(140)) break p000e0082;
 		ACClet(140,1);
 		ACCwriteln(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0083:
	{
 		if (skipdoall('p000e0083')) break p000e0083;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0083;
			if (!CNDnoun1(90)) break p000e0083;
 		}
		if (!CNDnotcarr(4)) break p000e0083;
 		ACCwriteln(36);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0084:
	{
 		if (skipdoall('p000e0084')) break p000e0084;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0084;
			if (!CNDnoun1(89)) break p000e0084;
 		}
		if (!CNDprep(9)) break p000e0084;
		if (!CNDnoun2(54)) break p000e0084;
		if (!CNDat(26)) break p000e0084;
		if (!CNDcarried(4)) break p000e0084;
		if (!CNDzero(140)) break p000e0084;
 		ACClet(140,1);
 		ACCwrite(37);
 		ACCwriteln(38);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0085:
	{
 		if (skipdoall('p000e0085')) break p000e0085;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0085;
			if (!CNDnoun1(89)) break p000e0085;
 		}
		if (!CNDat(26)) break p000e0085;
		if (!CNDeq(140,2)) break p000e0085;
 		ACClet(140,3);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0086:
	{
 		if (skipdoall('p000e0086')) break p000e0086;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0086;
			if (!CNDnoun1(89)) break p000e0086;
 		}
		if (!CNDat(26)) break p000e0086;
 		ACCwriteln(39);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA PUERT
	p000e0087:
	{
 		if (skipdoall('p000e0087')) break p000e0087;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0087;
			if (!CNDnoun1(89)) break p000e0087;
 		}
		if (!CNDat(26)) break p000e0087;
		if (!CNDeq(140,2)) break p000e0087;
 		ACClet(140,3);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EMPUJA PUERT
	p000e0088:
	{
 		if (skipdoall('p000e0088')) break p000e0088;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0088;
			if (!CNDnoun1(89)) break p000e0088;
 		}
		if (!CNDat(26)) break p000e0088;
 		ACCwriteln(40);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA BARRO
	p000e0089:
	{
 		if (skipdoall('p000e0089')) break p000e0089;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0089;
			if (!CNDnoun1(90)) break p000e0089;
 		}
		if (!CNDat(26)) break p000e0089;
		if (!CNDcarried(4)) break p000e0089;
		if (!CNDeq(140,0)) break p000e0089;
 		ACClet(140,1);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0090:
	{
 		if (skipdoall('p000e0090')) break p000e0090;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0090;
			if (!CNDnoun1(90)) break p000e0090;
 		}
		if (!CNDat(26)) break p000e0090;
		if (!CNDcarried(4)) break p000e0090;
		if (!CNDnotzero(140)) break p000e0090;
 		ACCwriteln(41);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0091:
	{
 		if (skipdoall('p000e0091')) break p000e0091;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0091;
			if (!CNDnoun1(89)) break p000e0091;
 		}
		if (!CNDat(26)) break p000e0091;
		if (!CNDeq(140,3)) break p000e0091;
 		ACClet(140,2);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CERRAR BARRO
	p000e0092:
	{
 		if (skipdoall('p000e0092')) break p000e0092;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0092;
			if (!CNDnoun1(90)) break p000e0092;
 		}
		if (!CNDat(26)) break p000e0092;
		if (!CNDeq(140,1)) break p000e0092;
 		ACClet(140,0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// GOLPEA ENANO
	p000e0093:
	{
 		if (skipdoall('p000e0093')) break p000e0093;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0093;
			if (!CNDnoun1(68)) break p000e0093;
 		}
		if (!CNDat(12)) break p000e0093;
		if (!CNDlt(102,255)) break p000e0093;
 		ACCprocess(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR MONED
	p000e0094:
	{
 		if (skipdoall('p000e0094')) break p000e0094;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0094;
			if (!CNDnoun1(51)) break p000e0094;
 		}
		if (!CNDat(11)) break p000e0094;
		if (!CNDpresent(1)) break p000e0094;
		if (!CNDislight()) break p000e0094;
 		ACCget(1);
		if (!success) break pro000_restart;
 		ACCset(120);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR MONED
	p000e0095:
	{
 		if (skipdoall('p000e0095')) break p000e0095;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0095;
			if (!CNDnoun1(51)) break p000e0095;
 		}
		if (!CNDat(11)) break p000e0095;
		if (!CNDislight()) break p000e0095;
		if (!CNDabsent(1)) break p000e0095;
 		ACCwrite(42);
 		ACCpause(100);
 		function anykey00001() 
		{
 		ACCwriteln(43);
 		ACCdone();
		return;
		}
 		waitKey(anykey00001);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// AGARR LLAVE
	p000e0096:
	{
 		if (skipdoall('p000e0096')) break p000e0096;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0096;
			if (!CNDnoun1(54)) break p000e0096;
 		}
		if (!CNDat(17)) break p000e0096;
		if (!CNDeq(103,1)) break p000e0096;
 		ACCwriteln(44);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR ENANO
	p000e0097:
	{
 		if (skipdoall('p000e0097')) break p000e0097;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0097;
			if (!CNDnoun1(68)) break p000e0097;
 		}
		if (!CNDat(12)) break p000e0097;
		if (!CNDlt(102,255)) break p000e0097;
 		ACCprocess(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BARRO
	p000e0098:
	{
 		if (skipdoall('p000e0098')) break p000e0098;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0098;
			if (!CNDnoun1(90)) break p000e0098;
 		}
 		ACClet(33,20);
		{}

	}

	// DESVESTIR BARRO
	p000e0099:
	{
 		if (skipdoall('p000e0099')) break p000e0099;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0099;
			if (!CNDnoun1(90)) break p000e0099;
 		}
 		ACClet(33,20);
		{}

	}

	// AGARR BARRO
	p000e0100:
	{
 		if (skipdoall('p000e0100')) break p000e0100;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0100;
			if (!CNDnoun1(90)) break p000e0100;
 		}
		if (!CNDat(26)) break p000e0100;
		if (!CNDeq(140,1)) break p000e0100;
 		ACClet(140,2);
 		ACCwriteln(45);
 		ACCanykey();
 		function anykey00002() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00002);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// AGARR BARRO
	p000e0101:
	{
 		if (skipdoall('p000e0101')) break p000e0101;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0101;
			if (!CNDnoun1(90)) break p000e0101;
 		}
		if (!CNDat(26)) break p000e0101;
 		ACCwriteln(46);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0102:
	{
 		if (skipdoall('p000e0102')) break p000e0102;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0102;
			if (!CNDnoun1(90)) break p000e0102;
 		}
		if (!CNDat(26)) break p000e0102;
		if (!CNDeq(140,1)) break p000e0102;
 		ACCwriteln(47);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0103:
	{
 		if (skipdoall('p000e0103')) break p000e0103;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0103;
			if (!CNDnoun1(90)) break p000e0103;
 		}
		if (!CNDat(26)) break p000e0103;
		if (!CNDeq(140,2)) break p000e0103;
 		ACCwriteln(48);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0104:
	{
 		if (skipdoall('p000e0104')) break p000e0104;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0104;
			if (!CNDnoun1(90)) break p000e0104;
 		}
		if (!CNDat(26)) break p000e0104;
 		ACCwriteln(49);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0105:
	{
 		if (skipdoall('p000e0105')) break p000e0105;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0105;
			if (!CNDnoun1(20)) break p000e0105;
 		}
		if (!CNDat(18)) break p000e0105;
		if (!CNDzero(1)) break p000e0105;
 		ACCwriteln(50);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0106:
	{
 		if (skipdoall('p000e0106')) break p000e0106;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0106;
			if (!CNDnoun1(20)) break p000e0106;
 		}
		if (!CNDat(18)) break p000e0106;
 		ACCgoto(10);
 		ACCdropall();
 		ACCgoto(18);
 		ACCwriteln(51);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0107:
	{
 		if (skipdoall('p000e0107')) break p000e0107;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0107;
 		}
		if (!CNDat(18)) break p000e0107;
 		ACCgoto(10);
 		ACCwhato();
		if (!CNDlt(51,255)) break p000e0107;
		if (!CNDeq(54,254)) break p000e0107;
 		ACCcopyff(55,38);
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCpause(50);
 		function anykey00003() 
		{
 		ACCwriteln(52);
 		ACCgoto(18);
 		ACCdone();
		return;
		}
 		waitKey(anykey00003);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0108:
	{
 		if (skipdoall('p000e0108')) break p000e0108;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0108;
 		}
		if (!CNDat(17)) break p000e0108;
 		ACCwhato();
		if (!CNDlt(51,255)) break p000e0108;
		if (!CNDeq(54,254)) break p000e0108;
 		ACCwriteln(53);
 		ACCputo(16);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0109:
	{
 		if (skipdoall('p000e0109')) break p000e0109;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0109;
 		}
		if (!CNDat(9)) break p000e0109;
 		ACCprocess(7);
		{}

	}

	// BRINCA _
	p000e0110:
	{
 		if (skipdoall('p000e0110')) break p000e0110;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0110;
 		}
		if (!CNDat(12)) break p000e0110;
 		ACCprocess(6);
		{}

	}

	// BRINCA _
	p000e0111:
	{
 		if (skipdoall('p000e0111')) break p000e0111;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0111;
 		}
		if (!CNDat(17)) break p000e0111;
 		ACCprocess(8);
		{}

	}

	// BRINCA _
	p000e0112:
	{
 		if (skipdoall('p000e0112')) break p000e0112;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0112;
 		}
		if (!CNDat(28)) break p000e0112;
 		ACCprocess(7);
		{}

	}

	// BRINCA _
	p000e0113:
	{
 		if (skipdoall('p000e0113')) break p000e0113;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0113;
 		}
 		ACCwriteln(54);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0114:
	{
 		if (skipdoall('p000e0114')) break p000e0114;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0114;
			if (!CNDnoun1(50)) break p000e0114;
 		}
		if (!CNDcarried(0)) break p000e0114;
		if (!CNDnotzero(110)) break p000e0114;
		if (!CNDat(11)) break p000e0114;
		if (!CNDozero(0,20)) break p000e0114;
 		ACCoset(0,20);
 		ACCwriteln(55);
 		ACCclear(0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0115:
	{
 		if (skipdoall('p000e0115')) break p000e0115;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0115;
			if (!CNDnoun1(50)) break p000e0115;
 		}
		if (!CNDcarried(0)) break p000e0115;
		if (!CNDnotzero(110)) break p000e0115;
		if (!CNDozero(0,20)) break p000e0115;
 		ACCoset(0,20);
 		ACCclear(0);
 		ACCwriteln(56);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0116:
	{
 		if (skipdoall('p000e0116')) break p000e0116;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0116;
			if (!CNDnoun1(50)) break p000e0116;
 		}
		if (!CNDcarried(0)) break p000e0116;
		if (!CNDzero(110)) break p000e0116;
 		ACCwriteln(57);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0117:
	{
 		if (skipdoall('p000e0117')) break p000e0117;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0117;
			if (!CNDnoun1(50)) break p000e0117;
 		}
		if (!CNDcarried(0)) break p000e0117;
		if (!CNDat(11)) break p000e0117;
		if (!CNDonotzero(0,20)) break p000e0117;
 		ACCoclear(0,20);
 		ACCset(0);
 		ACCwriteln(58);
 		ACCpause(5);
 		function anykey00004() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00004);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0118:
	{
 		if (skipdoall('p000e0118')) break p000e0118;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0118;
			if (!CNDnoun1(50)) break p000e0118;
 		}
		if (!CNDcarried(0)) break p000e0118;
		if (!CNDonotzero(0,20)) break p000e0118;
 		ACCoclear(0,20);
 		ACCwriteln(59);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0119:
	{
 		if (skipdoall('p000e0119')) break p000e0119;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0119;
 		}
 		ACCmessage(36);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE CARTE
	p000e0120:
	{
 		if (skipdoall('p000e0120')) break p000e0120;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0120;
			if (!CNDnoun1(93)) break p000e0120;
 		}
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0121:
	{
 		if (skipdoall('p000e0121')) break p000e0121;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0121;
 		}
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0122:
	{
 		if (skipdoall('p000e0122')) break p000e0122;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0122;
			if (!CNDnoun1(60)) break p000e0122;
 		}
		if (!CNDat(4)) break p000e0122;
 		ACCwriteln(60);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0123:
	{
 		if (skipdoall('p000e0123')) break p000e0123;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0123;
			if (!CNDnoun1(60)) break p000e0123;
 		}
		if (!CNDat(5)) break p000e0123;
 		ACCwriteln(61);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0124:
	{
 		if (skipdoall('p000e0124')) break p000e0124;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0124;
			if (!CNDnoun1(60)) break p000e0124;
 		}
		if (!CNDat(5)) break p000e0124;
 		ACCwriteln(62);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0125:
	{
 		if (skipdoall('p000e0125')) break p000e0125;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0125;
			if (!CNDnoun1(60)) break p000e0125;
 		}
		if (!CNDat(6)) break p000e0125;
 		ACCwriteln(63);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0126:
	{
 		if (skipdoall('p000e0126')) break p000e0126;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0126;
			if (!CNDnoun1(53)) break p000e0126;
 		}
		if (!CNDcarried(3)) break p000e0126;
		if (!CNDozero(3,22)) break p000e0126;
 		ACCwriteln(64);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0127:
	{
 		if (skipdoall('p000e0127')) break p000e0127;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0127;
			if (!CNDnoun1(53)) break p000e0127;
 		}
		if (!CNDcarried(3)) break p000e0127;
 		ACCoclear(3,22);
 		ACCwriteln(65);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0128:
	{
 		if (skipdoall('p000e0128')) break p000e0128;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0128;
			if (!CNDnoun1(53)) break p000e0128;
 		}
		if (!CNDcarried(3)) break p000e0128;
		if (!CNDonotzero(3,22)) break p000e0128;
 		ACCwriteln(66);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0129:
	{
 		if (skipdoall('p000e0129')) break p000e0129;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0129;
			if (!CNDnoun1(53)) break p000e0129;
 		}
		if (!CNDat(3)) break p000e0129;
		if (!CNDcarried(3)) break p000e0129;
 		ACCoset(3,22);
 		ACCwriteln(67);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0130:
	{
 		if (skipdoall('p000e0130')) break p000e0130;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0130;
			if (!CNDnoun1(53)) break p000e0130;
 		}
		if (!CNDat(19)) break p000e0130;
		if (!CNDcarried(3)) break p000e0130;
 		ACCoset(3,22);
 		ACCwriteln(68);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0131:
	{
 		if (skipdoall('p000e0131')) break p000e0131;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0131;
			if (!CNDnoun1(53)) break p000e0131;
 		}
		if (!CNDat(24)) break p000e0131;
		if (!CNDcarried(3)) break p000e0131;
 		ACCoset(3,22);
 		ACCwriteln(69);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0132:
	{
 		if (skipdoall('p000e0132')) break p000e0132;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0132;
			if (!CNDnoun1(53)) break p000e0132;
 		}
		if (!CNDat(25)) break p000e0132;
		if (!CNDcarried(3)) break p000e0132;
 		ACCoset(3,22);
 		ACCwriteln(70);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0133:
	{
 		if (skipdoall('p000e0133')) break p000e0133;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0133;
			if (!CNDnoun1(53)) break p000e0133;
 		}
		if (!CNDcarried(3)) break p000e0133;
 		ACCwriteln(71);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME TORTI
	p000e0134:
	{
 		if (skipdoall('p000e0134')) break p000e0134;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0134;
			if (!CNDnoun1(52)) break p000e0134;
 		}
		if (!CNDcarried(2)) break p000e0134;
 		ACCdestroy(2);
 		ACCmessage(4);
 		ACClet(5,4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE AGUA
	p000e0135:
	{
 		if (skipdoall('p000e0135')) break p000e0135;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0135;
			if (!CNDnoun1(57)) break p000e0135;
 		}
		if (!CNDcarried(3)) break p000e0135;
 		ACCoclear(3,22);
 		ACCwriteln(72);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR ARBOL
	p000e0136:
	{
 		if (skipdoall('p000e0136')) break p000e0136;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0136;
			if (!CNDnoun1(58)) break p000e0136;
 		}
		if (!CNDat(17)) break p000e0136;
 		ACCwriteln(73);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA ARBOL
	p000e0137:
	{
 		if (skipdoall('p000e0137')) break p000e0137;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0137;
			if (!CNDnoun1(58)) break p000e0137;
 		}
		if (!CNDat(17)) break p000e0137;
 		ACClet(33,49);
		{}

	}

	// AGITA ARBOL
	p000e0138:
	{
 		if (skipdoall('p000e0138')) break p000e0138;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0138;
			if (!CNDnoun1(58)) break p000e0138;
 		}
		if (!CNDat(17)) break p000e0138;
		if (!CNDlt(103,2)) break p000e0138;
 		ACClet(51,4);
 		ACCwriteln(74);
 		ACCplace(4,16);
 		ACCset(103);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA ARBOL
	p000e0139:
	{
 		if (skipdoall('p000e0139')) break p000e0139;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0139;
			if (!CNDnoun1(58)) break p000e0139;
 		}
		if (!CNDat(17)) break p000e0139;
 		ACCwriteln(75);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON PILA
	p000e0140:
	{
 		if (skipdoall('p000e0140')) break p000e0140;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0140;
			if (!CNDnoun1(55)) break p000e0140;
 		}
 		ACClet(33,74);
		{}

	}

	// ECHA PILA
	p000e0141:
	{
 		if (skipdoall('p000e0141')) break p000e0141;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0141;
			if (!CNDnoun1(55)) break p000e0141;
 		}
 		ACClet(43,4);
 		ACClet(44,50);
		{}

	}

	// ECHA PILA
	p000e0142:
	{
 		if (skipdoall('p000e0142')) break p000e0142;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0142;
			if (!CNDnoun1(55)) break p000e0142;
 		}
		if (!CNDprep(2)) break p000e0142;
 		ACClet(43,4);
		{}

	}

	// ECHA PILA
	p000e0143:
	{
 		if (skipdoall('p000e0143')) break p000e0143;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0143;
			if (!CNDnoun1(55)) break p000e0143;
 		}
		if (!CNDprep(4)) break p000e0143;
		if (!CNDnoun2(50)) break p000e0143;
		if (!CNDcarried(0)) break p000e0143;
		if (!CNDnotzero(110)) break p000e0143;
 		ACCwriteln(76);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA PILA
	p000e0144:
	{
 		if (skipdoall('p000e0144')) break p000e0144;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0144;
			if (!CNDnoun1(55)) break p000e0144;
 		}
		if (!CNDprep(4)) break p000e0144;
		if (!CNDnoun2(50)) break p000e0144;
		if (!CNDcarried(5)) break p000e0144;
		if (!CNDcarried(0)) break p000e0144;
 		ACCdestroy(5);
 		ACCset(110);
 		ACCwriteln(77);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA PILA
	p000e0145:
	{
 		if (skipdoall('p000e0145')) break p000e0145;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0145;
			if (!CNDnoun1(55)) break p000e0145;
 		}
		if (!CNDprep(4)) break p000e0145;
		if (!CNDnoun2(50)) break p000e0145;
		if (!CNDnotcarr(5)) break p000e0145;
 		ACCwriteln(78);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA PILA
	p000e0146:
	{
 		if (skipdoall('p000e0146')) break p000e0146;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0146;
			if (!CNDnoun1(55)) break p000e0146;
 		}
		if (!CNDprep(4)) break p000e0146;
		if (!CNDnoun2(50)) break p000e0146;
		if (!CNDnotcarr(0)) break p000e0146;
 		ACCwriteln(79);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR PILA
	p000e0147:
	{
 		if (skipdoall('p000e0147')) break p000e0147;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0147;
			if (!CNDnoun1(55)) break p000e0147;
 		}
 		ACClet(33,75);
 		ACClet(43,3);
 		ACClet(44,50);
		{}

	}

	// EXTRAE PILA
	p000e0148:
	{
 		if (skipdoall('p000e0148')) break p000e0148;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0148;
			if (!CNDnoun1(55)) break p000e0148;
 		}
		if (!CNDcarried(0)) break p000e0148;
		if (!CNDnotzero(110)) break p000e0148;
		if (!CNDgt(1,4)) break p000e0148;
 		ACCwriteln(80);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE PILA
	p000e0149:
	{
 		if (skipdoall('p000e0149')) break p000e0149;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0149;
			if (!CNDnoun1(55)) break p000e0149;
 		}
		if (!CNDprep(3)) break p000e0149;
		if (!CNDnoun2(50)) break p000e0149;
		if (!CNDzero(110)) break p000e0149;
		if (!CNDcarried(0)) break p000e0149;
 		ACCwriteln(81);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE PILA
	p000e0150:
	{
 		if (skipdoall('p000e0150')) break p000e0150;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0150;
			if (!CNDnoun1(55)) break p000e0150;
 		}
		if (!CNDprep(3)) break p000e0150;
		if (!CNDnoun2(50)) break p000e0150;
		if (!CNDcarried(0)) break p000e0150;
 		ACCoclear(0,20);
		if (!CNDat(11)) break p000e0150;
 		ACCset(0);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCclear(110);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EXTRAE PILA
	p000e0151:
	{
 		if (skipdoall('p000e0151')) break p000e0151;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0151;
			if (!CNDnoun1(55)) break p000e0151;
 		}
		if (!CNDprep(3)) break p000e0151;
		if (!CNDnoun2(50)) break p000e0151;
		if (!CNDcarried(0)) break p000e0151;
		if (!CNDnotzero(110)) break p000e0151;
 		ACCclear(110);
 		ACCoclear(0,20);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// EXTRAE PILA
	p000e0152:
	{
 		if (skipdoall('p000e0152')) break p000e0152;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0152;
			if (!CNDnoun1(55)) break p000e0152;
 		}
		if (!CNDprep(3)) break p000e0152;
		if (!CNDnoun2(50)) break p000e0152;
		if (!CNDcarried(0)) break p000e0152;
		if (!CNDnotzero(110)) break p000e0152;
 		ACCoclear(0,20);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCclear(110);
 		ACCok();
		break pro000_restart;
		{}

	}

	// EXTRAE BARRO
	p000e0153:
	{
 		if (skipdoall('p000e0153')) break p000e0153;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0153;
			if (!CNDnoun1(90)) break p000e0153;
 		}
		if (!CNDprep(3)) break p000e0153;
		if (!CNDnoun2(89)) break p000e0153;
		if (!CNDat(26)) break p000e0153;
		if (!CNDeq(140,1)) break p000e0153;
 		ACClet(140,2);
 		ACCwriteln(82);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// SENTAR SILLA
	p000e0154:
	{
 		if (skipdoall('p000e0154')) break p000e0154;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0154;
			if (!CNDnoun1(83)) break p000e0154;
 		}
		if (!CNDat(18)) break p000e0154;
 		ACCwrite(83);
 		ACCpause(30);
 		function anykey00005() 
		{
 		ACCmessage(36);
 		ACCdone();
		return;
		}
 		waitKey(anykey00005);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESTRUIR BOTEL
	p000e0155:
	{
 		if (skipdoall('p000e0155')) break p000e0155;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0155;
			if (!CNDnoun1(53)) break p000e0155;
 		}
		if (!CNDcarried(3)) break p000e0155;
 		ACCdestroy(3);
 		ACClet(5,4);
 		ACCok();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0156:
	{
 		if (skipdoall('p000e0156')) break p000e0156;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0156;
 		}
		if (!CNDat(12)) break p000e0156;
 		ACCprocess(6);
		{}

	}

	// BRINCA _
	p000e0157:
	{
 		if (skipdoall('p000e0157')) break p000e0157;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0157;
 		}
		if (!CNDat(9)) break p000e0157;
 		ACCprocess(7);
		{}

	}

	// BRINCA _
	p000e0158:
	{
 		if (skipdoall('p000e0158')) break p000e0158;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0158;
 		}
		if (!CNDat(28)) break p000e0158;
 		ACCprocess(7);
		{}

	}

	// BRINCA _
	p000e0159:
	{
 		if (skipdoall('p000e0159')) break p000e0159;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0159;
 		}
		if (!CNDat(23)) break p000e0159;
 		ACCprocess(7);
		{}

	}

	// CABRON _
	p000e0160:
	{
 		if (skipdoall('p000e0160')) break p000e0160;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0160;
 		}
		if (!CNDnotzero(254)) break p000e0160;
 		ACCclear(254);
 		ACCmessage(46);
 		ACCpause(200);
 		function anykey00006() 
		{
 		ACCprocess(5);
		}
 		waitKey(anykey00006);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// CABRON _
	p000e0161:
	{
 		if (skipdoall('p000e0161')) break p000e0161;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0161;
 		}
 		ACCset(254);
 		ACCdropall();
 		ACCwriteln(84);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ MIERDA
	p000e0162:
	{
 		if (skipdoall('p000e0162')) break p000e0162;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p000e0162;
 		}
		if (!CNDnotzero(254)) break p000e0162;
 		ACCclear(254);
 		ACCmessage(46);
 		ACCpause(200);
 		function anykey00007() 
		{
 		ACCprocess(5);
		}
 		waitKey(anykey00007);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// _ MIERDA
	p000e0163:
	{
 		if (skipdoall('p000e0163')) break p000e0163;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p000e0163;
 		}
 		ACCdropall();
 		ACCset(254);
 		ACCwriteln(85);
 		ACCpause(2);
 		function anykey00008() 
		{
 		ACCgoto(3);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00008);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0164:
	{
 		if (skipdoall('p000e0164')) break p000e0164;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0164;
 		}
 		ACCquit();
 		function anykey00009() 
		{
 		ACCprint(21);
		}
 		waitKey(anykey00009);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0165:
	{
 		if (skipdoall('p000e0165')) break p000e0165;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0165;
 		}
 		ACCok();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0166:
	{
 		if (skipdoall('p000e0166')) break p000e0166;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0166;
 		}
		if (!CNDat(12)) break p000e0166;
		if (!CNDlt(102,255)) break p000e0166;
 		ACCwriteln(86);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR ENANO
	p000e0167:
	{
 		if (skipdoall('p000e0167')) break p000e0167;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0167;
			if (!CNDnoun1(68)) break p000e0167;
 		}
		if (!CNDat(12)) break p000e0167;
		if (!CNDlt(102,255)) break p000e0167;
 		ACCprocess(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0168:
	{
 		if (skipdoall('p000e0168')) break p000e0168;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0168;
 		}
		if (!CNDat(20)) break p000e0168;
		if (!CNDgt(101,2)) break p000e0168;
		if (!CNDlt(101,5)) break p000e0168;
 		ACCwriteln(87);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0169:
	{
 		if (skipdoall('p000e0169')) break p000e0169;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0169;
 		}
		if (!CNDeq(101,4)) break p000e0169;
 		ACCwriteln(88);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR ELFIT
	p000e0170:
	{
 		if (skipdoall('p000e0170')) break p000e0170;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0170;
			if (!CNDnoun1(104)) break p000e0170;
 		}
		if (!CNDat(20)) break p000e0170;
		if (!CNDgt(101,2)) break p000e0170;
		if (!CNDlt(101,5)) break p000e0170;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0171:
	{
 		if (skipdoall('p000e0171')) break p000e0171;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0171;
 		}
		if (!CNDeq(101,4)) break p000e0171;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0172:
	{
 		if (skipdoall('p000e0172')) break p000e0172;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0172;
 		}
		if (!CNDat(20)) break p000e0172;
		if (!CNDeq(101,3)) break p000e0172;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0173:
	{
 		if (skipdoall('p000e0173')) break p000e0173;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0173;
 		}
		if (!CNDat(12)) break p000e0173;
 		ACCprocess(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA ELFIT
	p000e0174:
	{
 		if (skipdoall('p000e0174')) break p000e0174;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0174;
			if (!CNDnoun1(104)) break p000e0174;
 		}
		if (!CNDeq(101,4)) break p000e0174;
 		ACClet(101,3);
 		ACCwriteln(89);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON BOTA
	p000e0175:
	{
 		if (skipdoall('p000e0175')) break p000e0175;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0175;
			if (!CNDnoun1(101)) break p000e0175;
 		}
		if (!CNDcarried(6)) break p000e0175;
 		ACCwriteln(90);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA BOTA
	p000e0176:
	{
 		if (skipdoall('p000e0176')) break p000e0176;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0176;
			if (!CNDnoun1(101)) break p000e0176;
 		}
		if (!CNDat(12)) break p000e0176;
		if (!CNDpresent(6)) break p000e0176;
		if (!CNDnotcarr(6)) break p000e0176;
 		ACCget(6);
		if (!success) break pro000_restart;
		{}

	}

	// DA BOTA
	p000e0177:
	{
 		if (skipdoall('p000e0177')) break p000e0177;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0177;
			if (!CNDnoun1(101)) break p000e0177;
 		}
		if (!CNDat(12)) break p000e0177;
		if (!CNDeq(44,255)) break p000e0177;
 		ACClet(43,2);
 		ACClet(44,68);
		{}

	}

	// DA BOTA
	p000e0178:
	{
 		if (skipdoall('p000e0178')) break p000e0178;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0178;
			if (!CNDnoun1(101)) break p000e0178;
 		}
		if (!CNDprep(2)) break p000e0178;
		if (!CNDnoun2(68)) break p000e0178;
		if (!CNDat(12)) break p000e0178;
		if (!CNDcarried(6)) break p000e0178;
		if (!CNDlt(102,255)) break p000e0178;
 		ACCdestroy(6);
 		ACCset(102);
 		ACCcreate(0);
 		ACCextern(91);
 		ACCwriteln(92);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LLAVE
	p000e0179:
	{
 		if (skipdoall('p000e0179')) break p000e0179;
 		if (in_response)
		{
			if (!CNDnoun1(54)) break p000e0179;
 		}
		if (!CNDat(26)) break p000e0179;
		if (!CNDeq(33,255)) break p000e0179;
		if (!CNDzero(140)) break p000e0179;
 		ACCwriteln(93);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0180:
	{
 		if (skipdoall('p000e0180')) break p000e0180;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0180;
 		}
		if (!CNDat(20)) break p000e0180;
		if (!CNDgt(101,2)) break p000e0180;
		if (!CNDlt(101,5)) break p000e0180;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0181:
	{
 		if (skipdoall('p000e0181')) break p000e0181;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0181;
 		}
		if (!CNDeq(101,4)) break p000e0181;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0182:
	{
 		if (skipdoall('p000e0182')) break p000e0182;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0182;
 		}
		if (!CNDat(20)) break p000e0182;
		if (!CNDeq(101,3)) break p000e0182;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0183:
	{
 		if (skipdoall('p000e0183')) break p000e0183;
 		ACChook(94);
		if (done_flag) break pro000_restart;
		{}

	}

	//  _
	p000e0184:
	{
 		if (skipdoall('p000e0184')) break p000e0184;
 		if (in_response)
		{
			if (!CNDverb(14)) break p000e0184;
 		}
 		ACCinven();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0185:
	{
 		if (skipdoall('p000e0185')) break p000e0185;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0185;
 		}
		if (!CNDnoteq(51,255)) break p000e0185;
		if (!CNDpresent(getFlag(51))) break p000e0185;
		if (!CNDonotzero(getFlag(51),7)) break p000e0185;
 		ACCgoto(getFlag(51));
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// SENTAR _
	p000e0186:
	{
 		if (skipdoall('p000e0186')) break p000e0186;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0186;
 		}
 		ACCwriteln(95);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTARSE _
	p000e0187:
	{
 		if (skipdoall('p000e0187')) break p000e0187;
 		if (in_response)
		{
			if (!CNDverb(53)) break p000e0187;
 		}
 		ACCwriteln(96);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXAMINARSE _
	p000e0188:
	{
 		if (skipdoall('p000e0188')) break p000e0188;
 		if (in_response)
		{
			if (!CNDverb(85)) break p000e0188;
 		}
 		ACCwriteln(97);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGISTRARS _
	p000e0189:
	{
 		if (skipdoall('p000e0189')) break p000e0189;
 		if (in_response)
		{
			if (!CNDverb(84)) break p000e0189;
 		}
 		ACCwriteln(98);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MATARSE _
	p000e0190:
	{
 		if (skipdoall('p000e0190')) break p000e0190;
 		if (in_response)
		{
			if (!CNDverb(81)) break p000e0190;
 		}
 		ACCwriteln(99);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LAVARSE _
	p000e0191:
	{
 		if (skipdoall('p000e0191')) break p000e0191;
 		if (in_response)
		{
			if (!CNDverb(88)) break p000e0191;
 		}
 		ACCwriteln(100);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0192:
	{
 		if (skipdoall('p000e0192')) break p000e0192;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0192;
 		}
 		ACCwriteln(101);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0193:
	{
 		if (skipdoall('p000e0193')) break p000e0193;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0193;
 		}
 		ACCquit();
 		function anykey00010() 
		{
 		ACCturns();
 		ACCend();
		return;
		}
 		waitKey(anykey00010);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// GRABA _
	p000e0194:
	{
 		if (skipdoall('p000e0194')) break p000e0194;
 		if (in_response)
		{
			if (!CNDverb(26)) break p000e0194;
 		}
 		ACCsave();
		break pro000_restart;
		{}

	}

	// CARGA _
	p000e0195:
	{
 		if (skipdoall('p000e0195')) break p000e0195;
 		if (in_response)
		{
			if (!CNDverb(27)) break p000e0195;
 		}
 		ACCload();
		break pro000_restart;
		{}

	}

	// GRABARAM _
	p000e0196:
	{
 		if (skipdoall('p000e0196')) break p000e0196;
 		if (in_response)
		{
			if (!CNDverb(28)) break p000e0196;
 		}
 		ACCramsave();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CARGARAM _
	p000e0197:
	{
 		if (skipdoall('p000e0197')) break p000e0197;
 		if (in_response)
		{
			if (!CNDverb(29)) break p000e0197;
 		}
 		ACCramload(255);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// TRANSCRIP _
	p000e0198:
	{
 		if (skipdoall('p000e0198')) break p000e0198;
 		if (in_response)
		{
			if (!CNDverb(68)) break p000e0198;
 		}
 		ACCtranscript(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0199:
	{
 		if (skipdoall('p000e0199')) break p000e0199;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0199;
 		}
		if (!CNDprep(3)) break p000e0199;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0199;
		if (!CNDonotzero(getFlag(14),2)) break p000e0199;
 		ACCsynonym(75,255);
		{}

	}

	// AGARR _
	p000e0200:
	{
 		if (skipdoall('p000e0200')) break p000e0200;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0200;
 		}
		if (!CNDeq(34,255)) break p000e0200;
		if (!CNDbnotzero(12,1)) break p000e0200;
 		ACCwriteln(102);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0201:
	{
 		if (skipdoall('p000e0201')) break p000e0201;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0201;
 		}
		if (!CNDeq(34,255)) break p000e0201;
		if (!CNDbzero(12,1)) break p000e0201;
 		ACCwriteln(103);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0202:
	{
 		if (skipdoall('p000e0202')) break p000e0202;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0202;
 		}
		if (!CNDnoteq(51,255)) break p000e0202;
		if (!CNDonotzero(getFlag(51),21)) break p000e0202;
 		ACCwriteln(104);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0203:
	{
 		if (skipdoall('p000e0203')) break p000e0203;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0203;
 		}
 		ACCautog();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0204:
	{
 		if (skipdoall('p000e0204')) break p000e0204;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0204;
 		}
		if (!CNDprep(4)) break p000e0204;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0204;
		if (!CNDonotzero(getFlag(14),2)) break p000e0204;
 		ACCsynonym(74,255);
		{}

	}

	// DEJA _
	p000e0205:
	{
 		if (skipdoall('p000e0205')) break p000e0205;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0205;
 		}
		if (!CNDeq(34,255)) break p000e0205;
		if (!CNDbnotzero(12,1)) break p000e0205;
 		ACCwriteln(105);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0206:
	{
 		if (skipdoall('p000e0206')) break p000e0206;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0206;
 		}
		if (!CNDeq(34,255)) break p000e0206;
		if (!CNDbzero(12,1)) break p000e0206;
 		ACCwriteln(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0207:
	{
 		if (skipdoall('p000e0207')) break p000e0207;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0207;
 		}
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0208:
	{
 		if (skipdoall('p000e0208')) break p000e0208;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0208;
 		}
 		ACCwhatox2(15);
		{}

	}

	// EXTRAE _
	p000e0209:
	{
 		if (skipdoall('p000e0209')) break p000e0209;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0209;
 		}
		if (!CNDeq(34,255)) break p000e0209;
		if (!CNDbzero(12,1)) break p000e0209;
 		ACCwriteln(107);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0210:
	{
 		if (skipdoall('p000e0210')) break p000e0210;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0210;
 		}
		if (!CNDeq(34,255)) break p000e0210;
		if (!CNDbnotzero(12,1)) break p000e0210;
 		ACCwriteln(108);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0211:
	{
 		if (skipdoall('p000e0211')) break p000e0211;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0211;
 		}
		if (!CNDnoteq(34,255)) break p000e0211;
		if (!CNDeq(51,255)) break p000e0211;
 		ACCwriteln(109);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0212:
	{
 		if (skipdoall('p000e0212')) break p000e0212;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0212;
 		}
		if (!CNDbzero(12,2)) break p000e0212;
		if (!CNDeq(44,255)) break p000e0212;
		if (!CNDbnotzero(12,1)) break p000e0212;
 		ACCwriteln(110);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0213:
	{
 		if (skipdoall('p000e0213')) break p000e0213;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0213;
 		}
		if (!CNDnoteq(51,255)) break p000e0213;
		if (!CNDworn(getFlag(51))) break p000e0213;
		if (!CNDonotzero(getFlag(51),1)) break p000e0213;
 		ACCwriteln(111);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0214:
	{
 		if (skipdoall('p000e0214')) break p000e0214;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0214;
 		}
		if (!CNDnoteq(51,255)) break p000e0214;
		if (!CNDeq(44,255)) break p000e0214;
		if (!CNDbzero(12,1)) break p000e0214;
 		ACCwriteln(112);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0215:
	{
 		if (skipdoall('p000e0215')) break p000e0215;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0215;
 		}
		if (!CNDnoteq(51,255)) break p000e0215;
		if (!CNDcarried(getFlag(51))) break p000e0215;
		if (!CNDeq(44,255)) break p000e0215;
		if (!CNDbnotzero(12,1)) break p000e0215;
 		ACCwriteln(113);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0216:
	{
 		if (skipdoall('p000e0216')) break p000e0216;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0216;
 		}
		if (!CNDeq(15,255)) break p000e0216;
 		ACCwriteln(114);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0217:
	{
 		if (skipdoall('p000e0217')) break p000e0217;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0217;
 		}
		if (!CNDnoteq(15,255)) break p000e0217;
		if (!CNDonotzero(getFlag(15),2)) break p000e0217;
		if (!CNDsame(51,15)) break p000e0217;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0218:
	{
 		if (skipdoall('p000e0218')) break p000e0218;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0218;
 		}
		if (!CNDnoteq(15,255)) break p000e0218;
		if (!CNDonotzero(getFlag(15),2)) break p000e0218;
		if (!CNDonotzero(getFlag(15),13)) break p000e0218;
		if (!CNDozero(getFlag(15),14)) break p000e0218;
		if (!CNDpresent(getFlag(15))) break p000e0218;
 		ACCwriteln(115);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0219:
	{
 		if (skipdoall('p000e0219')) break p000e0219;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0219;
 		}
		if (!CNDnoteq(15,255)) break p000e0219;
		if (!CNDonotzero(getFlag(15),2)) break p000e0219;
		if (!CNDonotzero(getFlag(15),9)) break p000e0219;
		if (!CNDozero(getFlag(15),10)) break p000e0219;
		if (!CNDpresent(getFlag(15))) break p000e0219;
 		ACCwriteln(116);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0220:
	{
 		if (skipdoall('p000e0220')) break p000e0220;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0220;
 		}
		if (!CNDnoteq(15,255)) break p000e0220;
		if (!CNDonotzero(getFlag(15),2)) break p000e0220;
		if (!CNDabsent(getFlag(15))) break p000e0220;
 		ACCwriteln(117);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0221:
	{
 		if (skipdoall('p000e0221')) break p000e0221;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0221;
 		}
		if (!CNDnoteq(15,255)) break p000e0221;
		if (!CNDonotzero(getFlag(15),2)) break p000e0221;
		if (!CNDabsent(getFlag(15))) break p000e0221;
 		ACCwriteln(118);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0222:
	{
 		if (skipdoall('p000e0222')) break p000e0222;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0222;
 		}
		if (!CNDnoteq(15,255)) break p000e0222;
		if (!CNDonotzero(getFlag(15),2)) break p000e0222;
		if (!CNDpresent(getFlag(15))) break p000e0222;
 		ACCautot(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0223:
	{
 		if (skipdoall('p000e0223')) break p000e0223;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0223;
 		}
		if (!CNDnoteq(15,255)) break p000e0223;
		if (!CNDonotzero(getFlag(15),18)) break p000e0223;
		if (!CNDpresent(getFlag(15))) break p000e0223;
 		ACCautot(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0224:
	{
 		if (skipdoall('p000e0224')) break p000e0224;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0224;
 		}
		if (!CNDnoteq(15,255)) break p000e0224;
 		ACCwriteln(119);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0225:
	{
 		if (skipdoall('p000e0225')) break p000e0225;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0225;
 		}
 		ACCwhatox2(15);
		{}

	}

	// ECHA _
	p000e0226:
	{
 		if (skipdoall('p000e0226')) break p000e0226;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0226;
 		}
		if (!CNDeq(34,255)) break p000e0226;
		if (!CNDbzero(12,1)) break p000e0226;
 		ACCwriteln(120);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0227:
	{
 		if (skipdoall('p000e0227')) break p000e0227;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0227;
 		}
		if (!CNDeq(34,255)) break p000e0227;
		if (!CNDbnotzero(12,1)) break p000e0227;
 		ACCwriteln(121);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0228:
	{
 		if (skipdoall('p000e0228')) break p000e0228;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0228;
 		}
		if (!CNDnoteq(34,255)) break p000e0228;
		if (!CNDeq(51,255)) break p000e0228;
 		ACCwriteln(122);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0229:
	{
 		if (skipdoall('p000e0229')) break p000e0229;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0229;
 		}
		if (!CNDbzero(12,2)) break p000e0229;
		if (!CNDeq(44,255)) break p000e0229;
		if (!CNDbnotzero(12,1)) break p000e0229;
 		ACCwriteln(123);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0230:
	{
 		if (skipdoall('p000e0230')) break p000e0230;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0230;
 		}
		if (!CNDnoteq(51,255)) break p000e0230;
		if (!CNDworn(getFlag(51))) break p000e0230;
		if (!CNDonotzero(getFlag(51),1)) break p000e0230;
 		ACCwriteln(124);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0231:
	{
 		if (skipdoall('p000e0231')) break p000e0231;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0231;
 		}
		if (!CNDnoteq(51,255)) break p000e0231;
		if (!CNDnotcarr(getFlag(51))) break p000e0231;
 		ACCwriteln(125);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0232:
	{
 		if (skipdoall('p000e0232')) break p000e0232;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0232;
 		}
		if (!CNDnoteq(51,255)) break p000e0232;
		if (!CNDcarried(getFlag(51))) break p000e0232;
		if (!CNDeq(44,255)) break p000e0232;
		if (!CNDbzero(12,1)) break p000e0232;
 		ACCwriteln(126);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0233:
	{
 		if (skipdoall('p000e0233')) break p000e0233;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0233;
 		}
		if (!CNDnoteq(51,255)) break p000e0233;
		if (!CNDcarried(getFlag(51))) break p000e0233;
		if (!CNDeq(44,255)) break p000e0233;
		if (!CNDbnotzero(12,1)) break p000e0233;
 		ACCwriteln(127);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0234:
	{
 		if (skipdoall('p000e0234')) break p000e0234;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0234;
 		}
		if (!CNDnoteq(51,255)) break p000e0234;
		if (!CNDcarried(getFlag(51))) break p000e0234;
		if (!CNDnoteq(44,255)) break p000e0234;
		if (!CNDeq(15,255)) break p000e0234;
 		ACCwriteln(128);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0235:
	{
 		if (skipdoall('p000e0235')) break p000e0235;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0235;
 		}
		if (!CNDnoteq(15,255)) break p000e0235;
		if (!CNDonotzero(getFlag(15),2)) break p000e0235;
		if (!CNDsame(51,15)) break p000e0235;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0236:
	{
 		if (skipdoall('p000e0236')) break p000e0236;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0236;
 		}
		if (!CNDnoteq(15,255)) break p000e0236;
		if (!CNDonotzero(getFlag(15),18)) break p000e0236;
		if (!CNDsame(51,15)) break p000e0236;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0237:
	{
 		if (skipdoall('p000e0237')) break p000e0237;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0237;
 		}
		if (!CNDnoteq(51,255)) break p000e0237;
		if (!CNDcarried(getFlag(51))) break p000e0237;
		if (!CNDnoteq(44,255)) break p000e0237;
		if (!CNDnoteq(15,255)) break p000e0237;
		if (!CNDozero(getFlag(15),2)) break p000e0237;
		if (!CNDozero(getFlag(15),18)) break p000e0237;
		if (!CNDpresent(getFlag(15))) break p000e0237;
 		ACCwriteln(129);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0238:
	{
 		if (skipdoall('p000e0238')) break p000e0238;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0238;
 		}
		if (!CNDnoteq(51,255)) break p000e0238;
		if (!CNDcarried(getFlag(51))) break p000e0238;
		if (!CNDnoteq(44,255)) break p000e0238;
		if (!CNDnoteq(15,255)) break p000e0238;
		if (!CNDonotzero(getFlag(15),2)) break p000e0238;
		if (!CNDabsent(getFlag(15))) break p000e0238;
 		ACCwriteln(130);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0239:
	{
 		if (skipdoall('p000e0239')) break p000e0239;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0239;
 		}
		if (!CNDnoteq(51,255)) break p000e0239;
		if (!CNDcarried(getFlag(51))) break p000e0239;
		if (!CNDnoteq(44,255)) break p000e0239;
		if (!CNDnoteq(15,255)) break p000e0239;
		if (!CNDonotzero(getFlag(15),18)) break p000e0239;
		if (!CNDabsent(getFlag(15))) break p000e0239;
 		ACCwriteln(131);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0240:
	{
 		if (skipdoall('p000e0240')) break p000e0240;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0240;
 		}
		if (!CNDnoteq(51,255)) break p000e0240;
		if (!CNDcarried(getFlag(51))) break p000e0240;
		if (!CNDnoteq(44,255)) break p000e0240;
		if (!CNDnoteq(15,255)) break p000e0240;
		if (!CNDonotzero(getFlag(15),2)) break p000e0240;
		if (!CNDpresent(getFlag(15))) break p000e0240;
		if (!CNDonotzero(getFlag(15),13)) break p000e0240;
		if (!CNDozero(getFlag(15),14)) break p000e0240;
 		ACCwriteln(132);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0241:
	{
 		if (skipdoall('p000e0241')) break p000e0241;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0241;
 		}
		if (!CNDnoteq(51,255)) break p000e0241;
		if (!CNDcarried(getFlag(51))) break p000e0241;
		if (!CNDnoteq(44,255)) break p000e0241;
		if (!CNDnoteq(15,255)) break p000e0241;
		if (!CNDonotzero(getFlag(15),2)) break p000e0241;
		if (!CNDpresent(getFlag(15))) break p000e0241;
		if (!CNDonotzero(getFlag(15),9)) break p000e0241;
		if (!CNDozero(getFlag(15),10)) break p000e0241;
 		ACCwriteln(133);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0242:
	{
 		if (skipdoall('p000e0242')) break p000e0242;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0242;
 		}
		if (!CNDnoteq(51,255)) break p000e0242;
		if (!CNDcarried(getFlag(51))) break p000e0242;
		if (!CNDnoteq(44,255)) break p000e0242;
		if (!CNDnoteq(15,255)) break p000e0242;
		if (!CNDonotzero(getFlag(15),2)) break p000e0242;
		if (!CNDpresent(getFlag(15))) break p000e0242;
 		ACCautop(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0243:
	{
 		if (skipdoall('p000e0243')) break p000e0243;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0243;
 		}
		if (!CNDnoteq(51,255)) break p000e0243;
		if (!CNDcarried(getFlag(51))) break p000e0243;
		if (!CNDnoteq(44,255)) break p000e0243;
		if (!CNDnoteq(15,255)) break p000e0243;
		if (!CNDonotzero(getFlag(15),18)) break p000e0243;
		if (!CNDpresent(getFlag(15))) break p000e0243;
 		ACCautop(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0244:
	{
 		if (skipdoall('p000e0244')) break p000e0244;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0244;
 		}
		if (!CNDeq(34,255)) break p000e0244;
		if (!CNDbnotzero(12,1)) break p000e0244;
 		ACCwriteln(134);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0245:
	{
 		if (skipdoall('p000e0245')) break p000e0245;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0245;
 		}
		if (!CNDeq(34,255)) break p000e0245;
		if (!CNDbzero(12,1)) break p000e0245;
 		ACCwriteln(135);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0246:
	{
 		if (skipdoall('p000e0246')) break p000e0246;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0246;
 		}
 		ACCautor();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0247:
	{
 		if (skipdoall('p000e0247')) break p000e0247;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0247;
 		}
		if (!CNDeq(34,255)) break p000e0247;
		if (!CNDbnotzero(12,1)) break p000e0247;
 		ACCwriteln(136);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0248:
	{
 		if (skipdoall('p000e0248')) break p000e0248;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0248;
 		}
		if (!CNDeq(34,255)) break p000e0248;
		if (!CNDbzero(12,1)) break p000e0248;
 		ACCwriteln(137);
		{}

	}

	// PON _
	p000e0249:
	{
 		if (skipdoall('p000e0249')) break p000e0249;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0249;
 		}
 		ACCautow();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0250:
	{
 		if (skipdoall('p000e0250')) break p000e0250;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0250;
 		}
		if (!CNDprep(3)) break p000e0250;
		if (!CNDeq(34,255)) break p000e0250;
		if (!CNDbnotzero(12,1)) break p000e0250;
 		ACCwriteln(138);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0251:
	{
 		if (skipdoall('p000e0251')) break p000e0251;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0251;
 		}
		if (!CNDprep(3)) break p000e0251;
		if (!CNDeq(34,255)) break p000e0251;
		if (!CNDbzero(12,1)) break p000e0251;
 		ACCwriteln(139);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0252:
	{
 		if (skipdoall('p000e0252')) break p000e0252;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0252;
 		}
		if (!CNDprep(3)) break p000e0252;
		if (!CNDnoteq(34,255)) break p000e0252;
		if (!CNDnoteq(51,255)) break p000e0252;
		if (!CNDonotzero(getFlag(51),3)) break p000e0252;
		if (!CNDpresent(getFlag(51))) break p000e0252;
 		ACCwriteln(140);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0253:
	{
 		if (skipdoall('p000e0253')) break p000e0253;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0253;
 		}
		if (!CNDprep(3)) break p000e0253;
		if (!CNDnoteq(34,255)) break p000e0253;
		if (!CNDnoteq(51,255)) break p000e0253;
		if (!CNDonotzero(getFlag(51),3)) break p000e0253;
		if (!CNDabsent(getFlag(51))) break p000e0253;
 		ACCwriteln(141);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0254:
	{
 		if (skipdoall('p000e0254')) break p000e0254;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0254;
 		}
		if (!CNDprep(3)) break p000e0254;
		if (!CNDnoteq(34,255)) break p000e0254;
		if (!CNDeq(51,255)) break p000e0254;
 		ACCwriteln(142);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0255:
	{
 		if (skipdoall('p000e0255')) break p000e0255;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0255;
 		}
		if (!CNDprep(3)) break p000e0255;
		if (!CNDnoteq(51,255)) break p000e0255;
		if (!CNDpresent(getFlag(51))) break p000e0255;
 		ACCwriteln(143);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0256:
	{
 		if (skipdoall('p000e0256')) break p000e0256;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0256;
 		}
		if (!CNDprep(3)) break p000e0256;
		if (!CNDnoteq(51,255)) break p000e0256;
		if (!CNDabsent(getFlag(51))) break p000e0256;
 		ACCwriteln(144);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0257:
	{
 		if (skipdoall('p000e0257')) break p000e0257;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0257;
 		}
		if (!CNDprep(4)) break p000e0257;
		if (!CNDeq(34,255)) break p000e0257;
		if (!CNDbnotzero(12,1)) break p000e0257;
 		ACCwriteln(145);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0258:
	{
 		if (skipdoall('p000e0258')) break p000e0258;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0258;
 		}
		if (!CNDprep(4)) break p000e0258;
		if (!CNDeq(34,255)) break p000e0258;
		if (!CNDbzero(12,1)) break p000e0258;
 		ACCwriteln(146);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0259:
	{
 		if (skipdoall('p000e0259')) break p000e0259;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0259;
 		}
		if (!CNDlt(34,12)) break p000e0259;
 		ACCwriteln(147);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0260:
	{
 		if (skipdoall('p000e0260')) break p000e0260;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0260;
 		}
		if (!CNDeq(34,255)) break p000e0260;
		if (!CNDbnotzero(12,1)) break p000e0260;
 		ACCwriteln(148);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0261:
	{
 		if (skipdoall('p000e0261')) break p000e0261;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0261;
 		}
		if (!CNDeq(34,255)) break p000e0261;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0262:
	{
 		if (skipdoall('p000e0262')) break p000e0262;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0262;
 		}
		if (!CNDeq(34,255)) break p000e0262;
		if (!CNDbnotzero(12,1)) break p000e0262;
 		ACCwriteln(149);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0263:
	{
 		if (skipdoall('p000e0263')) break p000e0263;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0263;
 		}
		if (!CNDeq(34,255)) break p000e0263;
		if (!CNDbzero(12,1)) break p000e0263;
 		ACCwriteln(150);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0264:
	{
 		if (skipdoall('p000e0264')) break p000e0264;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0264;
 		}
		if (!CNDnoteq(34,255)) break p000e0264;
		if (!CNDnoteq(51,255)) break p000e0264;
		if (!CNDonotzero(getFlag(51),3)) break p000e0264;
		if (!CNDpresent(getFlag(51))) break p000e0264;
 		ACCwriteln(151);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0265:
	{
 		if (skipdoall('p000e0265')) break p000e0265;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0265;
 		}
		if (!CNDnoteq(34,255)) break p000e0265;
		if (!CNDnoteq(51,255)) break p000e0265;
		if (!CNDonotzero(getFlag(51),3)) break p000e0265;
		if (!CNDabsent(getFlag(51))) break p000e0265;
 		ACCwriteln(152);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0266:
	{
 		if (skipdoall('p000e0266')) break p000e0266;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0266;
 		}
		if (!CNDnoteq(34,255)) break p000e0266;
		if (!CNDeq(51,255)) break p000e0266;
 		ACCwriteln(153);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0267:
	{
 		if (skipdoall('p000e0267')) break p000e0267;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0267;
 		}
		if (!CNDnoteq(51,255)) break p000e0267;
		if (!CNDpresent(getFlag(51))) break p000e0267;
 		ACCwriteln(154);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0268:
	{
 		if (skipdoall('p000e0268')) break p000e0268;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0268;
 		}
		if (!CNDnoteq(51,255)) break p000e0268;
		if (!CNDabsent(getFlag(51))) break p000e0268;
 		ACCwriteln(155);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLORA _
	p000e0269:
	{
 		if (skipdoall('p000e0269')) break p000e0269;
 		if (in_response)
		{
			if (!CNDverb(93)) break p000e0269;
 		}
 		ACCwriteln(156);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACORDARSE _
	p000e0270:
	{
 		if (skipdoall('p000e0270')) break p000e0270;
 		if (in_response)
		{
			if (!CNDverb(94)) break p000e0270;
 		}
 		ACCwriteln(157);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0271:
	{
 		if (skipdoall('p000e0271')) break p000e0271;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0271;
 		}
 		ACCwriteln(158);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0272:
	{
 		if (skipdoall('p000e0272')) break p000e0272;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0272;
 		}
 		ACCwriteln(159);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0273:
	{
 		if (skipdoall('p000e0273')) break p000e0273;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0273;
 		}
		if (!CNDeq(34,255)) break p000e0273;
		if (!CNDbnotzero(12,1)) break p000e0273;
 		ACCwriteln(160);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0274:
	{
 		if (skipdoall('p000e0274')) break p000e0274;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0274;
 		}
		if (!CNDeq(34,255)) break p000e0274;
		if (!CNDbzero(12,1)) break p000e0274;
 		ACCwriteln(161);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0275:
	{
 		if (skipdoall('p000e0275')) break p000e0275;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0275;
 		}
		if (!CNDnoteq(34,255)) break p000e0275;
		if (!CNDnoteq(51,255)) break p000e0275;
		if (!CNDonotzero(getFlag(51),3)) break p000e0275;
		if (!CNDpresent(getFlag(51))) break p000e0275;
 		ACCwriteln(162);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0276:
	{
 		if (skipdoall('p000e0276')) break p000e0276;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0276;
 		}
		if (!CNDnoteq(34,255)) break p000e0276;
		if (!CNDnoteq(51,255)) break p000e0276;
		if (!CNDonotzero(getFlag(51),21)) break p000e0276;
		if (!CNDpresent(getFlag(51))) break p000e0276;
 		ACCwriteln(163);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0277:
	{
 		if (skipdoall('p000e0277')) break p000e0277;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0277;
 		}
		if (!CNDnoteq(34,255)) break p000e0277;
		if (!CNDnoteq(51,255)) break p000e0277;
		if (!CNDonotzero(getFlag(51),3)) break p000e0277;
		if (!CNDabsent(getFlag(51))) break p000e0277;
 		ACCwriteln(164);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0278:
	{
 		if (skipdoall('p000e0278')) break p000e0278;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0278;
 		}
		if (!CNDnoteq(34,255)) break p000e0278;
		if (!CNDnoteq(51,255)) break p000e0278;
		if (!CNDonotzero(getFlag(51),21)) break p000e0278;
		if (!CNDabsent(getFlag(51))) break p000e0278;
 		ACCwriteln(165);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0279:
	{
 		if (skipdoall('p000e0279')) break p000e0279;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0279;
 		}
		if (!CNDnoteq(34,255)) break p000e0279;
		if (!CNDeq(51,255)) break p000e0279;
 		ACCwriteln(166);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0280:
	{
 		if (skipdoall('p000e0280')) break p000e0280;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0280;
 		}
		if (!CNDnoteq(51,255)) break p000e0280;
		if (!CNDpresent(getFlag(51))) break p000e0280;
 		ACCwriteln(167);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0281:
	{
 		if (skipdoall('p000e0281')) break p000e0281;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0281;
 		}
		if (!CNDnoteq(51,255)) break p000e0281;
		if (!CNDabsent(getFlag(51))) break p000e0281;
 		ACCwriteln(168);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0282:
	{
 		if (skipdoall('p000e0282')) break p000e0282;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0282;
 		}
		if (!CNDeq(34,255)) break p000e0282;
		if (!CNDbnotzero(12,1)) break p000e0282;
 		ACCwriteln(169);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0283:
	{
 		if (skipdoall('p000e0283')) break p000e0283;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0283;
 		}
		if (!CNDeq(34,255)) break p000e0283;
		if (!CNDbzero(12,1)) break p000e0283;
 		ACCwriteln(170);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0284:
	{
 		if (skipdoall('p000e0284')) break p000e0284;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0284;
 		}
		if (!CNDnoteq(34,255)) break p000e0284;
		if (!CNDnoteq(51,255)) break p000e0284;
		if (!CNDonotzero(getFlag(51),3)) break p000e0284;
		if (!CNDpresent(getFlag(51))) break p000e0284;
 		ACCwriteln(171);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0285:
	{
 		if (skipdoall('p000e0285')) break p000e0285;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0285;
 		}
		if (!CNDnoteq(34,255)) break p000e0285;
		if (!CNDnoteq(51,255)) break p000e0285;
		if (!CNDonotzero(getFlag(51),3)) break p000e0285;
		if (!CNDabsent(getFlag(51))) break p000e0285;
 		ACCwriteln(172);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0286:
	{
 		if (skipdoall('p000e0286')) break p000e0286;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0286;
 		}
		if (!CNDnoteq(34,255)) break p000e0286;
		if (!CNDeq(51,255)) break p000e0286;
 		ACCwriteln(173);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0287:
	{
 		if (skipdoall('p000e0287')) break p000e0287;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0287;
 		}
		if (!CNDnoteq(51,255)) break p000e0287;
		if (!CNDpresent(getFlag(51))) break p000e0287;
 		ACCwriteln(174);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0288:
	{
 		if (skipdoall('p000e0288')) break p000e0288;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0288;
 		}
		if (!CNDnoteq(51,255)) break p000e0288;
		if (!CNDabsent(getFlag(51))) break p000e0288;
 		ACCwriteln(175);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0289:
	{
 		if (skipdoall('p000e0289')) break p000e0289;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0289;
 		}
		if (!CNDeq(34,255)) break p000e0289;
		if (!CNDbnotzero(12,1)) break p000e0289;
 		ACCwriteln(176);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0290:
	{
 		if (skipdoall('p000e0290')) break p000e0290;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0290;
 		}
		if (!CNDeq(34,255)) break p000e0290;
		if (!CNDbzero(12,1)) break p000e0290;
 		ACCwriteln(177);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0291:
	{
 		if (skipdoall('p000e0291')) break p000e0291;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0291;
 		}
		if (!CNDnoteq(51,255)) break p000e0291;
		if (!CNDonotzero(getFlag(51),3)) break p000e0291;
		if (!CNDpresent(getFlag(51))) break p000e0291;
 		ACCwriteln(178);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0292:
	{
 		if (skipdoall('p000e0292')) break p000e0292;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0292;
 		}
		if (!CNDnoteq(51,255)) break p000e0292;
		if (!CNDonotzero(getFlag(51),21)) break p000e0292;
		if (!CNDpresent(getFlag(51))) break p000e0292;
 		ACCwriteln(179);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0293:
	{
 		if (skipdoall('p000e0293')) break p000e0293;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0293;
 		}
		if (!CNDnoteq(51,255)) break p000e0293;
		if (!CNDonotzero(getFlag(51),3)) break p000e0293;
		if (!CNDabsent(getFlag(51))) break p000e0293;
 		ACCwriteln(180);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0294:
	{
 		if (skipdoall('p000e0294')) break p000e0294;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0294;
 		}
		if (!CNDnoteq(51,255)) break p000e0294;
		if (!CNDonotzero(getFlag(51),21)) break p000e0294;
		if (!CNDabsent(getFlag(51))) break p000e0294;
 		ACCwriteln(181);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0295:
	{
 		if (skipdoall('p000e0295')) break p000e0295;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0295;
 		}
		if (!CNDnoteq(34,255)) break p000e0295;
		if (!CNDeq(51,255)) break p000e0295;
 		ACCwriteln(182);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0296:
	{
 		if (skipdoall('p000e0296')) break p000e0296;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0296;
 		}
		if (!CNDnoteq(51,255)) break p000e0296;
		if (!CNDpresent(getFlag(51))) break p000e0296;
 		ACCwriteln(183);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0297:
	{
 		if (skipdoall('p000e0297')) break p000e0297;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0297;
 		}
		if (!CNDnoteq(51,255)) break p000e0297;
		if (!CNDabsent(getFlag(51))) break p000e0297;
 		ACCwriteln(184);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0298:
	{
 		if (skipdoall('p000e0298')) break p000e0298;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0298;
 		}
		if (!CNDeq(34,255)) break p000e0298;
		if (!CNDbnotzero(12,1)) break p000e0298;
 		ACCwriteln(185);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0299:
	{
 		if (skipdoall('p000e0299')) break p000e0299;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0299;
 		}
		if (!CNDeq(34,255)) break p000e0299;
		if (!CNDbzero(12,1)) break p000e0299;
 		ACCwriteln(186);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0300:
	{
 		if (skipdoall('p000e0300')) break p000e0300;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0300;
 		}
		if (!CNDnoteq(51,255)) break p000e0300;
		if (!CNDonotzero(getFlag(51),3)) break p000e0300;
		if (!CNDpresent(getFlag(51))) break p000e0300;
 		ACCwriteln(187);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0301:
	{
 		if (skipdoall('p000e0301')) break p000e0301;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0301;
 		}
		if (!CNDnoteq(51,255)) break p000e0301;
		if (!CNDonotzero(getFlag(51),21)) break p000e0301;
		if (!CNDpresent(getFlag(51))) break p000e0301;
 		ACCwriteln(188);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0302:
	{
 		if (skipdoall('p000e0302')) break p000e0302;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0302;
 		}
		if (!CNDnoteq(51,255)) break p000e0302;
		if (!CNDonotzero(getFlag(51),3)) break p000e0302;
		if (!CNDabsent(getFlag(51))) break p000e0302;
 		ACCwriteln(189);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0303:
	{
 		if (skipdoall('p000e0303')) break p000e0303;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0303;
 		}
		if (!CNDnoteq(51,255)) break p000e0303;
		if (!CNDonotzero(getFlag(51),21)) break p000e0303;
		if (!CNDabsent(getFlag(51))) break p000e0303;
 		ACCwriteln(190);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0304:
	{
 		if (skipdoall('p000e0304')) break p000e0304;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0304;
 		}
		if (!CNDnoteq(34,255)) break p000e0304;
		if (!CNDeq(51,255)) break p000e0304;
 		ACCwriteln(191);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0305:
	{
 		if (skipdoall('p000e0305')) break p000e0305;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0305;
 		}
		if (!CNDnoteq(51,255)) break p000e0305;
		if (!CNDcarried(getFlag(51))) break p000e0305;
 		ACCwriteln(192);
 		ACCplace(getFlag(51),getFlag(38));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0306:
	{
 		if (skipdoall('p000e0306')) break p000e0306;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0306;
 		}
		if (!CNDnoteq(51,255)) break p000e0306;
		if (!CNDnotcarr(getFlag(51))) break p000e0306;
 		ACCwriteln(193);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0307:
	{
 		if (skipdoall('p000e0307')) break p000e0307;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0307;
 		}
		if (!CNDnoteq(51,255)) break p000e0307;
		if (!CNDonotzero(getFlag(51),3)) break p000e0307;
		if (!CNDpresent(getFlag(51))) break p000e0307;
 		ACCwriteln(194);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0308:
	{
 		if (skipdoall('p000e0308')) break p000e0308;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0308;
 		}
		if (!CNDnoteq(51,255)) break p000e0308;
		if (!CNDonotzero(getFlag(51),3)) break p000e0308;
		if (!CNDabsent(getFlag(51))) break p000e0308;
 		ACCwriteln(195);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0309:
	{
 		if (skipdoall('p000e0309')) break p000e0309;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0309;
 		}
		if (!CNDeq(34,255)) break p000e0309;
 		ACCwriteln(196);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0310:
	{
 		if (skipdoall('p000e0310')) break p000e0310;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0310;
 		}
		if (!CNDeq(34,255)) break p000e0310;
		if (!CNDbnotzero(12,1)) break p000e0310;
 		ACCwriteln(197);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0311:
	{
 		if (skipdoall('p000e0311')) break p000e0311;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0311;
 		}
		if (!CNDeq(34,255)) break p000e0311;
		if (!CNDbzero(12,1)) break p000e0311;
 		ACCwriteln(198);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0312:
	{
 		if (skipdoall('p000e0312')) break p000e0312;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0312;
 		}
		if (!CNDnoteq(34,255)) break p000e0312;
		if (!CNDnoteq(51,255)) break p000e0312;
		if (!CNDonotzero(getFlag(51),3)) break p000e0312;
		if (!CNDpresent(getFlag(51))) break p000e0312;
 		ACCwriteln(199);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0313:
	{
 		if (skipdoall('p000e0313')) break p000e0313;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0313;
 		}
		if (!CNDnoteq(34,255)) break p000e0313;
		if (!CNDnoteq(51,255)) break p000e0313;
		if (!CNDonotzero(getFlag(51),21)) break p000e0313;
		if (!CNDpresent(getFlag(51))) break p000e0313;
 		ACCwriteln(200);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0314:
	{
 		if (skipdoall('p000e0314')) break p000e0314;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0314;
 		}
		if (!CNDnoteq(34,255)) break p000e0314;
		if (!CNDnoteq(51,255)) break p000e0314;
		if (!CNDonotzero(getFlag(51),3)) break p000e0314;
		if (!CNDabsent(getFlag(51))) break p000e0314;
 		ACCwriteln(201);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0315:
	{
 		if (skipdoall('p000e0315')) break p000e0315;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0315;
 		}
		if (!CNDnoteq(34,255)) break p000e0315;
		if (!CNDeq(51,255)) break p000e0315;
 		ACCwriteln(202);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0316:
	{
 		if (skipdoall('p000e0316')) break p000e0316;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0316;
 		}
		if (!CNDnoteq(51,255)) break p000e0316;
		if (!CNDpresent(getFlag(51))) break p000e0316;
		if (!CNDozero(getFlag(51),5)) break p000e0316;
 		ACCwriteln(203);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0317:
	{
 		if (skipdoall('p000e0317')) break p000e0317;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0317;
 		}
		if (!CNDnoteq(51,255)) break p000e0317;
		if (!CNDpresent(getFlag(51))) break p000e0317;
		if (!CNDonotzero(getFlag(51),5)) break p000e0317;
 		ACCwriteln(204);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0318:
	{
 		if (skipdoall('p000e0318')) break p000e0318;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0318;
 		}
		if (!CNDnoteq(51,255)) break p000e0318;
		if (!CNDabsent(getFlag(51))) break p000e0318;
 		ACCwriteln(205);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0319:
	{
 		if (skipdoall('p000e0319')) break p000e0319;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0319;
 		}
		if (!CNDeq(34,255)) break p000e0319;
		if (!CNDbnotzero(12,1)) break p000e0319;
 		ACCwriteln(206);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0320:
	{
 		if (skipdoall('p000e0320')) break p000e0320;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0320;
 		}
		if (!CNDeq(34,255)) break p000e0320;
		if (!CNDbzero(12,1)) break p000e0320;
 		ACCwriteln(207);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0321:
	{
 		if (skipdoall('p000e0321')) break p000e0321;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0321;
 		}
		if (!CNDnoteq(34,255)) break p000e0321;
		if (!CNDnoteq(51,255)) break p000e0321;
		if (!CNDonotzero(getFlag(51),3)) break p000e0321;
		if (!CNDpresent(getFlag(51))) break p000e0321;
 		ACCwriteln(208);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0322:
	{
 		if (skipdoall('p000e0322')) break p000e0322;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0322;
 		}
		if (!CNDnoteq(34,255)) break p000e0322;
		if (!CNDnoteq(51,255)) break p000e0322;
		if (!CNDonotzero(getFlag(51),3)) break p000e0322;
		if (!CNDabsent(getFlag(51))) break p000e0322;
 		ACCwriteln(209);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0323:
	{
 		if (skipdoall('p000e0323')) break p000e0323;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0323;
 		}
		if (!CNDnoteq(34,255)) break p000e0323;
		if (!CNDeq(51,255)) break p000e0323;
 		ACCwriteln(210);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0324:
	{
 		if (skipdoall('p000e0324')) break p000e0324;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0324;
 		}
		if (!CNDnoteq(51,255)) break p000e0324;
		if (!CNDpresent(getFlag(51))) break p000e0324;
		if (!CNDozero(getFlag(51),6)) break p000e0324;
 		ACCwriteln(211);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0325:
	{
 		if (skipdoall('p000e0325')) break p000e0325;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0325;
 		}
		if (!CNDnoteq(51,255)) break p000e0325;
		if (!CNDpresent(getFlag(51))) break p000e0325;
		if (!CNDonotzero(getFlag(51),6)) break p000e0325;
 		ACCwriteln(212);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0326:
	{
 		if (skipdoall('p000e0326')) break p000e0326;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0326;
 		}
		if (!CNDnoteq(51,255)) break p000e0326;
		if (!CNDabsent(getFlag(51))) break p000e0326;
 		ACCwriteln(213);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAGA _
	p000e0327:
	{
 		if (skipdoall('p000e0327')) break p000e0327;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0327;
 		}
 		ACCwriteln(214);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0328:
	{
 		if (skipdoall('p000e0328')) break p000e0328;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0328;
 		}
		if (!CNDeq(34,255)) break p000e0328;
		if (!CNDbnotzero(12,1)) break p000e0328;
 		ACCwriteln(215);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0329:
	{
 		if (skipdoall('p000e0329')) break p000e0329;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0329;
 		}
		if (!CNDeq(34,255)) break p000e0329;
		if (!CNDbzero(12,1)) break p000e0329;
 		ACCwriteln(216);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0330:
	{
 		if (skipdoall('p000e0330')) break p000e0330;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0330;
 		}
		if (!CNDnoteq(34,255)) break p000e0330;
		if (!CNDnoteq(51,255)) break p000e0330;
		if (!CNDonotzero(getFlag(51),3)) break p000e0330;
		if (!CNDpresent(getFlag(51))) break p000e0330;
 		ACCwriteln(217);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0331:
	{
 		if (skipdoall('p000e0331')) break p000e0331;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0331;
 		}
		if (!CNDnoteq(34,255)) break p000e0331;
		if (!CNDnoteq(51,255)) break p000e0331;
		if (!CNDonotzero(getFlag(51),3)) break p000e0331;
		if (!CNDabsent(getFlag(51))) break p000e0331;
 		ACCwriteln(218);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0332:
	{
 		if (skipdoall('p000e0332')) break p000e0332;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0332;
 		}
		if (!CNDnoteq(34,255)) break p000e0332;
		if (!CNDeq(51,255)) break p000e0332;
 		ACCwriteln(219);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0333:
	{
 		if (skipdoall('p000e0333')) break p000e0333;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0333;
 		}
		if (!CNDnoteq(51,255)) break p000e0333;
		if (!CNDpresent(getFlag(51))) break p000e0333;
 		ACCwriteln(220);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0334:
	{
 		if (skipdoall('p000e0334')) break p000e0334;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0334;
 		}
		if (!CNDnoteq(51,255)) break p000e0334;
		if (!CNDabsent(getFlag(51))) break p000e0334;
 		ACCwriteln(221);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0335:
	{
 		if (skipdoall('p000e0335')) break p000e0335;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0335;
 		}
		if (!CNDeq(34,255)) break p000e0335;
		if (!CNDbnotzero(12,1)) break p000e0335;
 		ACCwriteln(222);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0336:
	{
 		if (skipdoall('p000e0336')) break p000e0336;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0336;
 		}
		if (!CNDeq(34,255)) break p000e0336;
		if (!CNDbzero(12,1)) break p000e0336;
 		ACCwriteln(223);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0337:
	{
 		if (skipdoall('p000e0337')) break p000e0337;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0337;
 		}
		if (!CNDnoteq(34,255)) break p000e0337;
		if (!CNDnoteq(51,255)) break p000e0337;
		if (!CNDonotzero(getFlag(51),3)) break p000e0337;
		if (!CNDpresent(getFlag(51))) break p000e0337;
 		ACCwriteln(224);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0338:
	{
 		if (skipdoall('p000e0338')) break p000e0338;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0338;
 		}
		if (!CNDnoteq(34,255)) break p000e0338;
		if (!CNDnoteq(51,255)) break p000e0338;
		if (!CNDonotzero(getFlag(51),3)) break p000e0338;
		if (!CNDabsent(getFlag(51))) break p000e0338;
 		ACCwriteln(225);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0339:
	{
 		if (skipdoall('p000e0339')) break p000e0339;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0339;
 		}
		if (!CNDnoteq(34,255)) break p000e0339;
		if (!CNDeq(51,255)) break p000e0339;
 		ACCwriteln(226);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0340:
	{
 		if (skipdoall('p000e0340')) break p000e0340;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0340;
 		}
		if (!CNDnoteq(51,255)) break p000e0340;
		if (!CNDpresent(getFlag(51))) break p000e0340;
 		ACCwriteln(227);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0341:
	{
 		if (skipdoall('p000e0341')) break p000e0341;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0341;
 		}
		if (!CNDnoteq(51,255)) break p000e0341;
		if (!CNDabsent(getFlag(51))) break p000e0341;
 		ACCwriteln(228);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0342:
	{
 		if (skipdoall('p000e0342')) break p000e0342;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0342;
 		}
		if (!CNDeq(34,255)) break p000e0342;
		if (!CNDbnotzero(12,1)) break p000e0342;
 		ACCwriteln(229);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0343:
	{
 		if (skipdoall('p000e0343')) break p000e0343;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0343;
 		}
		if (!CNDeq(34,255)) break p000e0343;
		if (!CNDbzero(12,1)) break p000e0343;
 		ACCwriteln(230);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0344:
	{
 		if (skipdoall('p000e0344')) break p000e0344;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0344;
 		}
		if (!CNDnoteq(34,255)) break p000e0344;
		if (!CNDnoteq(51,255)) break p000e0344;
		if (!CNDonotzero(getFlag(51),3)) break p000e0344;
		if (!CNDpresent(getFlag(51))) break p000e0344;
 		ACCwriteln(231);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0345:
	{
 		if (skipdoall('p000e0345')) break p000e0345;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0345;
 		}
		if (!CNDnoteq(34,255)) break p000e0345;
		if (!CNDnoteq(51,255)) break p000e0345;
		if (!CNDonotzero(getFlag(51),3)) break p000e0345;
		if (!CNDabsent(getFlag(51))) break p000e0345;
 		ACCwriteln(232);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0346:
	{
 		if (skipdoall('p000e0346')) break p000e0346;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0346;
 		}
		if (!CNDnoteq(34,255)) break p000e0346;
		if (!CNDeq(51,255)) break p000e0346;
 		ACCwriteln(233);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0347:
	{
 		if (skipdoall('p000e0347')) break p000e0347;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0347;
 		}
		if (!CNDnoteq(51,255)) break p000e0347;
		if (!CNDpresent(getFlag(51))) break p000e0347;
		if (!CNDonotzero(getFlag(51),5)) break p000e0347;
 		ACCwriteln(234);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0348:
	{
 		if (skipdoall('p000e0348')) break p000e0348;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0348;
 		}
		if (!CNDnoteq(51,255)) break p000e0348;
		if (!CNDpresent(getFlag(51))) break p000e0348;
		if (!CNDonotzero(getFlag(51),6)) break p000e0348;
 		ACCwriteln(235);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0349:
	{
 		if (skipdoall('p000e0349')) break p000e0349;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0349;
 		}
		if (!CNDnoteq(51,255)) break p000e0349;
		if (!CNDpresent(getFlag(51))) break p000e0349;
 		ACCwriteln(236);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0350:
	{
 		if (skipdoall('p000e0350')) break p000e0350;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0350;
 		}
		if (!CNDnoteq(51,255)) break p000e0350;
		if (!CNDpresent(getFlag(51))) break p000e0350;
		if (!CNDonotzero(getFlag(51),5)) break p000e0350;
 		ACCwriteln(237);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0351:
	{
 		if (skipdoall('p000e0351')) break p000e0351;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0351;
 		}
		if (!CNDnoteq(51,255)) break p000e0351;
		if (!CNDabsent(getFlag(51))) break p000e0351;
 		ACCwriteln(238);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0352:
	{
 		if (skipdoall('p000e0352')) break p000e0352;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0352;
 		}
		if (!CNDeq(34,255)) break p000e0352;
		if (!CNDbnotzero(12,1)) break p000e0352;
 		ACCwriteln(239);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0353:
	{
 		if (skipdoall('p000e0353')) break p000e0353;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0353;
 		}
		if (!CNDeq(34,255)) break p000e0353;
		if (!CNDbzero(12,1)) break p000e0353;
 		ACCwriteln(240);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0354:
	{
 		if (skipdoall('p000e0354')) break p000e0354;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0354;
 		}
		if (!CNDnoteq(34,255)) break p000e0354;
		if (!CNDnoteq(51,255)) break p000e0354;
		if (!CNDonotzero(getFlag(51),3)) break p000e0354;
		if (!CNDpresent(getFlag(51))) break p000e0354;
 		ACCwriteln(241);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0355:
	{
 		if (skipdoall('p000e0355')) break p000e0355;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0355;
 		}
		if (!CNDnoteq(34,255)) break p000e0355;
		if (!CNDnoteq(51,255)) break p000e0355;
		if (!CNDonotzero(getFlag(51),3)) break p000e0355;
		if (!CNDabsent(getFlag(51))) break p000e0355;
 		ACCwriteln(242);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0356:
	{
 		if (skipdoall('p000e0356')) break p000e0356;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0356;
 		}
		if (!CNDnoteq(34,255)) break p000e0356;
		if (!CNDeq(51,255)) break p000e0356;
 		ACCwriteln(243);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0357:
	{
 		if (skipdoall('p000e0357')) break p000e0357;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0357;
 		}
		if (!CNDnoteq(51,255)) break p000e0357;
		if (!CNDpresent(getFlag(51))) break p000e0357;
 		ACCwriteln(244);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0358:
	{
 		if (skipdoall('p000e0358')) break p000e0358;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0358;
 		}
		if (!CNDnoteq(51,255)) break p000e0358;
		if (!CNDabsent(getFlag(51))) break p000e0358;
 		ACCwriteln(245);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0359:
	{
 		if (skipdoall('p000e0359')) break p000e0359;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0359;
 		}
		if (!CNDeq(34,255)) break p000e0359;
		if (!CNDbnotzero(12,1)) break p000e0359;
 		ACCwriteln(246);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0360:
	{
 		if (skipdoall('p000e0360')) break p000e0360;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0360;
 		}
		if (!CNDeq(34,255)) break p000e0360;
		if (!CNDbzero(12,1)) break p000e0360;
 		ACCwriteln(247);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0361:
	{
 		if (skipdoall('p000e0361')) break p000e0361;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0361;
 		}
		if (!CNDnoteq(34,255)) break p000e0361;
		if (!CNDnoteq(51,255)) break p000e0361;
		if (!CNDonotzero(getFlag(51),3)) break p000e0361;
		if (!CNDpresent(getFlag(51))) break p000e0361;
 		ACCwriteln(248);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0362:
	{
 		if (skipdoall('p000e0362')) break p000e0362;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0362;
 		}
		if (!CNDnoteq(34,255)) break p000e0362;
		if (!CNDnoteq(51,255)) break p000e0362;
		if (!CNDonotzero(getFlag(51),3)) break p000e0362;
		if (!CNDabsent(getFlag(51))) break p000e0362;
 		ACCwriteln(249);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0363:
	{
 		if (skipdoall('p000e0363')) break p000e0363;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0363;
 		}
		if (!CNDnoteq(34,255)) break p000e0363;
		if (!CNDeq(51,255)) break p000e0363;
 		ACCwriteln(250);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0364:
	{
 		if (skipdoall('p000e0364')) break p000e0364;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0364;
 		}
		if (!CNDnoteq(51,255)) break p000e0364;
		if (!CNDpresent(getFlag(51))) break p000e0364;
 		ACCwriteln(251);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0365:
	{
 		if (skipdoall('p000e0365')) break p000e0365;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0365;
 		}
		if (!CNDnoteq(51,255)) break p000e0365;
		if (!CNDabsent(getFlag(51))) break p000e0365;
 		ACCwriteln(252);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0366:
	{
 		if (skipdoall('p000e0366')) break p000e0366;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0366;
 		}
 		ACCsysmess(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCANSA _
	p000e0367:
	{
 		if (skipdoall('p000e0367')) break p000e0367;
 		if (in_response)
		{
			if (!CNDverb(61)) break p000e0367;
 		}
 		ACCwriteln(253);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0368:
	{
 		if (skipdoall('p000e0368')) break p000e0368;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0368;
 		}
 		ACCwriteln(254);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ORA _
	p000e0369:
	{
 		if (skipdoall('p000e0369')) break p000e0369;
 		if (in_response)
		{
			if (!CNDverb(59)) break p000e0369;
 		}
 		ACCwriteln(255);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAVA _
	p000e0370:
	{
 		if (skipdoall('p000e0370')) break p000e0370;
 		if (in_response)
		{
			if (!CNDverb(51)) break p000e0370;
 		}
 		ACCwriteln(256);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PENSAR _
	p000e0371:
	{
 		if (skipdoall('p000e0371')) break p000e0371;
 		if (in_response)
		{
			if (!CNDverb(60)) break p000e0371;
 		}
 		ACCwriteln(257);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCANSA _
	p000e0372:
	{
 		if (skipdoall('p000e0372')) break p000e0372;
 		if (in_response)
		{
			if (!CNDverb(61)) break p000e0372;
 		}
 		ACCwriteln(258);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CANTA _
	p000e0373:
	{
 		if (skipdoall('p000e0373')) break p000e0373;
 		if (in_response)
		{
			if (!CNDverb(44)) break p000e0373;
 		}
 		ACCwriteln(259);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BAILA _
	p000e0374:
	{
 		if (skipdoall('p000e0374')) break p000e0374;
 		if (in_response)
		{
			if (!CNDverb(112)) break p000e0374;
 		}
 		ACCwriteln(260);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0375:
	{
 		if (skipdoall('p000e0375')) break p000e0375;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0375;
 		}
		if (!CNDeq(34,255)) break p000e0375;
		if (!CNDbnotzero(12,1)) break p000e0375;
 		ACCwriteln(261);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0376:
	{
 		if (skipdoall('p000e0376')) break p000e0376;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0376;
 		}
		if (!CNDeq(34,255)) break p000e0376;
		if (!CNDbzero(12,1)) break p000e0376;
 		ACCwriteln(262);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0377:
	{
 		if (skipdoall('p000e0377')) break p000e0377;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0377;
 		}
		if (!CNDnoteq(34,255)) break p000e0377;
		if (!CNDnoteq(51,255)) break p000e0377;
		if (!CNDonotzero(getFlag(51),3)) break p000e0377;
		if (!CNDpresent(getFlag(51))) break p000e0377;
 		ACCwriteln(263);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0378:
	{
 		if (skipdoall('p000e0378')) break p000e0378;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0378;
 		}
		if (!CNDnoteq(34,255)) break p000e0378;
		if (!CNDnoteq(51,255)) break p000e0378;
		if (!CNDonotzero(getFlag(51),3)) break p000e0378;
		if (!CNDabsent(getFlag(51))) break p000e0378;
 		ACCwriteln(264);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0379:
	{
 		if (skipdoall('p000e0379')) break p000e0379;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0379;
 		}
		if (!CNDnoteq(34,255)) break p000e0379;
		if (!CNDeq(51,255)) break p000e0379;
 		ACCwriteln(265);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0380:
	{
 		if (skipdoall('p000e0380')) break p000e0380;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0380;
 		}
		if (!CNDnoteq(51,255)) break p000e0380;
		if (!CNDpresent(getFlag(51))) break p000e0380;
 		ACCwriteln(266);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0381:
	{
 		if (skipdoall('p000e0381')) break p000e0381;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0381;
 		}
		if (!CNDnoteq(51,255)) break p000e0381;
		if (!CNDabsent(getFlag(51))) break p000e0381;
 		ACCwriteln(267);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0382:
	{
 		if (skipdoall('p000e0382')) break p000e0382;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0382;
 		}
		if (!CNDeq(34,255)) break p000e0382;
		if (!CNDbnotzero(12,1)) break p000e0382;
 		ACCwriteln(268);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0383:
	{
 		if (skipdoall('p000e0383')) break p000e0383;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0383;
 		}
		if (!CNDeq(34,255)) break p000e0383;
		if (!CNDbzero(12,1)) break p000e0383;
 		ACCwriteln(269);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0384:
	{
 		if (skipdoall('p000e0384')) break p000e0384;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0384;
 		}
		if (!CNDnoteq(34,255)) break p000e0384;
		if (!CNDnoteq(51,255)) break p000e0384;
		if (!CNDonotzero(getFlag(51),3)) break p000e0384;
		if (!CNDpresent(getFlag(51))) break p000e0384;
 		ACCwriteln(270);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0385:
	{
 		if (skipdoall('p000e0385')) break p000e0385;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0385;
 		}
		if (!CNDnoteq(34,255)) break p000e0385;
		if (!CNDnoteq(51,255)) break p000e0385;
		if (!CNDonotzero(getFlag(51),3)) break p000e0385;
		if (!CNDabsent(getFlag(51))) break p000e0385;
 		ACCwriteln(271);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0386:
	{
 		if (skipdoall('p000e0386')) break p000e0386;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0386;
 		}
		if (!CNDnoteq(34,255)) break p000e0386;
		if (!CNDeq(51,255)) break p000e0386;
 		ACCwriteln(272);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0387:
	{
 		if (skipdoall('p000e0387')) break p000e0387;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0387;
 		}
		if (!CNDnoteq(51,255)) break p000e0387;
		if (!CNDpresent(getFlag(51))) break p000e0387;
 		ACCwriteln(273);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0388:
	{
 		if (skipdoall('p000e0388')) break p000e0388;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0388;
 		}
		if (!CNDnoteq(51,255)) break p000e0388;
		if (!CNDabsent(getFlag(51))) break p000e0388;
 		ACCwriteln(274);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA _
	p000e0389:
	{
 		if (skipdoall('p000e0389')) break p000e0389;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0389;
 		}
 		ACCwriteln(275);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0390:
	{
 		if (skipdoall('p000e0390')) break p000e0390;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0390;
 		}
		if (!CNDeq(34,255)) break p000e0390;
		if (!CNDbnotzero(12,1)) break p000e0390;
 		ACCwriteln(276);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0391:
	{
 		if (skipdoall('p000e0391')) break p000e0391;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0391;
 		}
		if (!CNDeq(34,255)) break p000e0391;
		if (!CNDbzero(12,1)) break p000e0391;
 		ACCwriteln(277);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0392:
	{
 		if (skipdoall('p000e0392')) break p000e0392;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0392;
 		}
		if (!CNDnoteq(34,255)) break p000e0392;
		if (!CNDnoteq(51,255)) break p000e0392;
		if (!CNDonotzero(getFlag(51),3)) break p000e0392;
		if (!CNDpresent(getFlag(51))) break p000e0392;
 		ACCwriteln(278);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0393:
	{
 		if (skipdoall('p000e0393')) break p000e0393;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0393;
 		}
		if (!CNDnoteq(34,255)) break p000e0393;
		if (!CNDnoteq(51,255)) break p000e0393;
		if (!CNDonotzero(getFlag(51),3)) break p000e0393;
		if (!CNDabsent(getFlag(51))) break p000e0393;
 		ACCwriteln(279);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0394:
	{
 		if (skipdoall('p000e0394')) break p000e0394;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0394;
 		}
		if (!CNDnoteq(34,255)) break p000e0394;
		if (!CNDeq(51,255)) break p000e0394;
 		ACCwriteln(280);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0395:
	{
 		if (skipdoall('p000e0395')) break p000e0395;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0395;
 		}
		if (!CNDnoteq(51,255)) break p000e0395;
		if (!CNDpresent(getFlag(51))) break p000e0395;
 		ACCwriteln(281);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0396:
	{
 		if (skipdoall('p000e0396')) break p000e0396;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0396;
 		}
		if (!CNDnoteq(51,255)) break p000e0396;
		if (!CNDabsent(getFlag(51))) break p000e0396;
 		ACCwriteln(282);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0397:
	{
 		if (skipdoall('p000e0397')) break p000e0397;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0397;
 		}
		if (!CNDeq(34,255)) break p000e0397;
		if (!CNDbnotzero(12,1)) break p000e0397;
 		ACCwriteln(283);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0398:
	{
 		if (skipdoall('p000e0398')) break p000e0398;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0398;
 		}
		if (!CNDeq(34,255)) break p000e0398;
		if (!CNDbzero(12,1)) break p000e0398;
 		ACCwriteln(284);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0399:
	{
 		if (skipdoall('p000e0399')) break p000e0399;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0399;
 		}
		if (!CNDnoteq(34,255)) break p000e0399;
		if (!CNDnoteq(51,255)) break p000e0399;
		if (!CNDonotzero(getFlag(51),3)) break p000e0399;
		if (!CNDpresent(getFlag(51))) break p000e0399;
 		ACCwriteln(285);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0400:
	{
 		if (skipdoall('p000e0400')) break p000e0400;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0400;
 		}
		if (!CNDnoteq(34,255)) break p000e0400;
		if (!CNDnoteq(51,255)) break p000e0400;
		if (!CNDonotzero(getFlag(51),3)) break p000e0400;
		if (!CNDabsent(getFlag(51))) break p000e0400;
 		ACCwriteln(286);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0401:
	{
 		if (skipdoall('p000e0401')) break p000e0401;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0401;
 		}
		if (!CNDnoteq(34,255)) break p000e0401;
		if (!CNDeq(51,255)) break p000e0401;
 		ACCwriteln(287);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0402:
	{
 		if (skipdoall('p000e0402')) break p000e0402;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0402;
 		}
		if (!CNDnoteq(51,255)) break p000e0402;
		if (!CNDpresent(getFlag(51))) break p000e0402;
 		ACCwriteln(288);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0403:
	{
 		if (skipdoall('p000e0403')) break p000e0403;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0403;
 		}
		if (!CNDnoteq(51,255)) break p000e0403;
		if (!CNDabsent(getFlag(51))) break p000e0403;
 		ACCwriteln(289);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0404:
	{
 		if (skipdoall('p000e0404')) break p000e0404;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0404;
 		}
		if (!CNDeq(34,255)) break p000e0404;
		if (!CNDbnotzero(12,1)) break p000e0404;
 		ACCwriteln(290);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0405:
	{
 		if (skipdoall('p000e0405')) break p000e0405;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0405;
 		}
		if (!CNDeq(34,255)) break p000e0405;
		if (!CNDbzero(12,1)) break p000e0405;
 		ACCwriteln(291);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0406:
	{
 		if (skipdoall('p000e0406')) break p000e0406;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0406;
 		}
		if (!CNDnoteq(51,255)) break p000e0406;
		if (!CNDonotzero(getFlag(51),3)) break p000e0406;
		if (!CNDpresent(getFlag(51))) break p000e0406;
 		ACCwriteln(292);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0407:
	{
 		if (skipdoall('p000e0407')) break p000e0407;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0407;
 		}
		if (!CNDnoteq(51,255)) break p000e0407;
		if (!CNDonotzero(getFlag(51),3)) break p000e0407;
		if (!CNDabsent(getFlag(51))) break p000e0407;
 		ACCwriteln(293);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0408:
	{
 		if (skipdoall('p000e0408')) break p000e0408;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0408;
 		}
		if (!CNDnoteq(34,255)) break p000e0408;
		if (!CNDeq(51,255)) break p000e0408;
 		ACCwriteln(294);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0409:
	{
 		if (skipdoall('p000e0409')) break p000e0409;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0409;
 		}
		if (!CNDnoteq(51,255)) break p000e0409;
		if (!CNDpresent(getFlag(51))) break p000e0409;
 		ACCwriteln(295);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0410:
	{
 		if (skipdoall('p000e0410')) break p000e0410;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0410;
 		}
		if (!CNDnoteq(51,255)) break p000e0410;
		if (!CNDabsent(getFlag(51))) break p000e0410;
 		ACCwriteln(296);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0411:
	{
 		if (skipdoall('p000e0411')) break p000e0411;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0411;
 		}
		if (!CNDeq(34,255)) break p000e0411;
		if (!CNDbnotzero(12,1)) break p000e0411;
 		ACCwriteln(297);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0412:
	{
 		if (skipdoall('p000e0412')) break p000e0412;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0412;
 		}
		if (!CNDeq(34,255)) break p000e0412;
		if (!CNDbzero(12,1)) break p000e0412;
 		ACCwriteln(298);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0413:
	{
 		if (skipdoall('p000e0413')) break p000e0413;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0413;
 		}
		if (!CNDnoteq(34,255)) break p000e0413;
		if (!CNDeq(51,255)) break p000e0413;
 		ACCwriteln(299);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0414:
	{
 		if (skipdoall('p000e0414')) break p000e0414;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0414;
 		}
		if (!CNDnoteq(51,255)) break p000e0414;
		if (!CNDpresent(getFlag(51))) break p000e0414;
 		ACCwriteln(300);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0415:
	{
 		if (skipdoall('p000e0415')) break p000e0415;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0415;
 		}
		if (!CNDnoteq(51,255)) break p000e0415;
		if (!CNDabsent(getFlag(51))) break p000e0415;
 		ACCwriteln(301);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0416:
	{
 		if (skipdoall('p000e0416')) break p000e0416;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0416;
 		}
		if (!CNDeq(34,255)) break p000e0416;
		if (!CNDbnotzero(12,1)) break p000e0416;
 		ACCwriteln(302);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0417:
	{
 		if (skipdoall('p000e0417')) break p000e0417;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0417;
 		}
		if (!CNDeq(34,255)) break p000e0417;
		if (!CNDbzero(12,1)) break p000e0417;
 		ACCwriteln(303);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0418:
	{
 		if (skipdoall('p000e0418')) break p000e0418;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0418;
 		}
		if (!CNDnoteq(51,255)) break p000e0418;
		if (!CNDonotzero(getFlag(51),3)) break p000e0418;
		if (!CNDpresent(getFlag(51))) break p000e0418;
 		ACCwriteln(304);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0419:
	{
 		if (skipdoall('p000e0419')) break p000e0419;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0419;
 		}
		if (!CNDnoteq(51,255)) break p000e0419;
		if (!CNDonotzero(getFlag(51),21)) break p000e0419;
		if (!CNDpresent(getFlag(51))) break p000e0419;
 		ACCwriteln(305);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0420:
	{
 		if (skipdoall('p000e0420')) break p000e0420;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0420;
 		}
		if (!CNDnoteq(51,255)) break p000e0420;
		if (!CNDonotzero(getFlag(51),3)) break p000e0420;
		if (!CNDabsent(getFlag(51))) break p000e0420;
 		ACCwriteln(306);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0421:
	{
 		if (skipdoall('p000e0421')) break p000e0421;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0421;
 		}
		if (!CNDnoteq(34,255)) break p000e0421;
		if (!CNDeq(51,255)) break p000e0421;
 		ACCwriteln(307);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0422:
	{
 		if (skipdoall('p000e0422')) break p000e0422;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0422;
 		}
		if (!CNDnoteq(51,255)) break p000e0422;
		if (!CNDpresent(getFlag(51))) break p000e0422;
 		ACCwriteln(308);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0423:
	{
 		if (skipdoall('p000e0423')) break p000e0423;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0423;
 		}
		if (!CNDnoteq(51,255)) break p000e0423;
		if (!CNDabsent(getFlag(51))) break p000e0423;
 		ACCwriteln(309);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0424:
	{
 		if (skipdoall('p000e0424')) break p000e0424;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0424;
 		}
		if (!CNDeq(34,255)) break p000e0424;
		if (!CNDbnotzero(12,1)) break p000e0424;
 		ACCwriteln(310);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0425:
	{
 		if (skipdoall('p000e0425')) break p000e0425;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0425;
 		}
		if (!CNDeq(34,255)) break p000e0425;
		if (!CNDbzero(12,1)) break p000e0425;
 		ACCwriteln(311);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0426:
	{
 		if (skipdoall('p000e0426')) break p000e0426;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0426;
 		}
		if (!CNDnoteq(51,255)) break p000e0426;
		if (!CNDonotzero(getFlag(51),3)) break p000e0426;
		if (!CNDpresent(getFlag(51))) break p000e0426;
 		ACCwriteln(312);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0427:
	{
 		if (skipdoall('p000e0427')) break p000e0427;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0427;
 		}
		if (!CNDnoteq(51,255)) break p000e0427;
		if (!CNDonotzero(getFlag(51),3)) break p000e0427;
		if (!CNDabsent(getFlag(51))) break p000e0427;
 		ACCwriteln(313);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0428:
	{
 		if (skipdoall('p000e0428')) break p000e0428;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0428;
 		}
		if (!CNDnoteq(34,255)) break p000e0428;
		if (!CNDeq(51,255)) break p000e0428;
 		ACCwriteln(314);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0429:
	{
 		if (skipdoall('p000e0429')) break p000e0429;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0429;
 		}
		if (!CNDnoteq(51,255)) break p000e0429;
		if (!CNDpresent(getFlag(51))) break p000e0429;
 		ACCwriteln(315);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0430:
	{
 		if (skipdoall('p000e0430')) break p000e0430;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0430;
 		}
		if (!CNDnoteq(51,255)) break p000e0430;
		if (!CNDabsent(getFlag(51))) break p000e0430;
 		ACCwriteln(316);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0431:
	{
 		if (skipdoall('p000e0431')) break p000e0431;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0431;
 		}
		if (!CNDeq(34,255)) break p000e0431;
		if (!CNDbnotzero(12,1)) break p000e0431;
 		ACCwriteln(317);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0432:
	{
 		if (skipdoall('p000e0432')) break p000e0432;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0432;
 		}
		if (!CNDeq(34,255)) break p000e0432;
		if (!CNDbzero(12,1)) break p000e0432;
 		ACCwriteln(318);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0433:
	{
 		if (skipdoall('p000e0433')) break p000e0433;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0433;
 		}
		if (!CNDnoteq(51,255)) break p000e0433;
		if (!CNDonotzero(getFlag(51),3)) break p000e0433;
		if (!CNDpresent(getFlag(51))) break p000e0433;
 		ACCwriteln(319);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0434:
	{
 		if (skipdoall('p000e0434')) break p000e0434;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0434;
 		}
		if (!CNDnoteq(51,255)) break p000e0434;
		if (!CNDonotzero(getFlag(51),3)) break p000e0434;
		if (!CNDabsent(getFlag(51))) break p000e0434;
 		ACCwriteln(320);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0435:
	{
 		if (skipdoall('p000e0435')) break p000e0435;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0435;
 		}
		if (!CNDnoteq(34,255)) break p000e0435;
		if (!CNDeq(51,255)) break p000e0435;
 		ACCwriteln(321);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0436:
	{
 		if (skipdoall('p000e0436')) break p000e0436;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0436;
 		}
		if (!CNDnoteq(51,255)) break p000e0436;
		if (!CNDpresent(getFlag(51))) break p000e0436;
 		ACCwriteln(322);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0437:
	{
 		if (skipdoall('p000e0437')) break p000e0437;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0437;
 		}
		if (!CNDnoteq(51,255)) break p000e0437;
		if (!CNDabsent(getFlag(51))) break p000e0437;
 		ACCwriteln(323);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0438:
	{
 		if (skipdoall('p000e0438')) break p000e0438;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0438;
 		}
		if (!CNDeq(34,255)) break p000e0438;
		if (!CNDbnotzero(12,1)) break p000e0438;
 		ACCwriteln(324);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0439:
	{
 		if (skipdoall('p000e0439')) break p000e0439;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0439;
 		}
		if (!CNDeq(34,255)) break p000e0439;
		if (!CNDbzero(12,1)) break p000e0439;
 		ACCwriteln(325);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0440:
	{
 		if (skipdoall('p000e0440')) break p000e0440;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0440;
 		}
		if (!CNDnoteq(34,255)) break p000e0440;
		if (!CNDeq(51,255)) break p000e0440;
 		ACCwriteln(326);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0441:
	{
 		if (skipdoall('p000e0441')) break p000e0441;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0441;
 		}
		if (!CNDnoteq(51,255)) break p000e0441;
		if (!CNDpresent(getFlag(51))) break p000e0441;
		if (!CNDonotzero(getFlag(51),2)) break p000e0441;
 		ACCwriteln(327);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0442:
	{
 		if (skipdoall('p000e0442')) break p000e0442;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0442;
 		}
		if (!CNDnoteq(51,255)) break p000e0442;
		if (!CNDpresent(getFlag(51))) break p000e0442;
		if (!CNDozero(getFlag(51),2)) break p000e0442;
 		ACCwriteln(328);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0443:
	{
 		if (skipdoall('p000e0443')) break p000e0443;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0443;
 		}
		if (!CNDnoteq(51,255)) break p000e0443;
		if (!CNDabsent(getFlag(51))) break p000e0443;
 		ACCwriteln(329);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NADA _
	p000e0444:
	{
 		if (skipdoall('p000e0444')) break p000e0444;
 		if (in_response)
		{
			if (!CNDverb(56)) break p000e0444;
 		}
 		ACCwriteln(330);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCALA _
	p000e0445:
	{
 		if (skipdoall('p000e0445')) break p000e0445;
 		if (in_response)
		{
			if (!CNDverb(57)) break p000e0445;
 		}
 		ACCwriteln(331);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0446:
	{
 		if (skipdoall('p000e0446')) break p000e0446;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0446;
 		}
		if (!CNDeq(34,255)) break p000e0446;
		if (!CNDbnotzero(12,1)) break p000e0446;
 		ACCwriteln(332);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0447:
	{
 		if (skipdoall('p000e0447')) break p000e0447;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0447;
 		}
		if (!CNDeq(34,255)) break p000e0447;
		if (!CNDbzero(12,1)) break p000e0447;
 		ACCwriteln(333);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0448:
	{
 		if (skipdoall('p000e0448')) break p000e0448;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0448;
 		}
		if (!CNDnoteq(51,255)) break p000e0448;
		if (!CNDonotzero(getFlag(51),3)) break p000e0448;
		if (!CNDpresent(getFlag(51))) break p000e0448;
 		ACCwriteln(334);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0449:
	{
 		if (skipdoall('p000e0449')) break p000e0449;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0449;
 		}
		if (!CNDnoteq(51,255)) break p000e0449;
		if (!CNDonotzero(getFlag(51),3)) break p000e0449;
		if (!CNDabsent(getFlag(51))) break p000e0449;
 		ACCwriteln(335);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0450:
	{
 		if (skipdoall('p000e0450')) break p000e0450;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0450;
 		}
		if (!CNDnoteq(34,255)) break p000e0450;
		if (!CNDeq(51,255)) break p000e0450;
 		ACCwriteln(336);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0451:
	{
 		if (skipdoall('p000e0451')) break p000e0451;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0451;
 		}
		if (!CNDnoteq(51,255)) break p000e0451;
		if (!CNDpresent(getFlag(51))) break p000e0451;
 		ACCwriteln(337);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0452:
	{
 		if (skipdoall('p000e0452')) break p000e0452;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0452;
 		}
		if (!CNDnoteq(51,255)) break p000e0452;
		if (!CNDabsent(getFlag(51))) break p000e0452;
 		ACCwriteln(338);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0453:
	{
 		if (skipdoall('p000e0453')) break p000e0453;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0453;
 		}
		if (!CNDeq(34,255)) break p000e0453;
		if (!CNDbnotzero(12,1)) break p000e0453;
 		ACCwriteln(339);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0454:
	{
 		if (skipdoall('p000e0454')) break p000e0454;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0454;
 		}
		if (!CNDeq(34,255)) break p000e0454;
		if (!CNDbzero(12,1)) break p000e0454;
 		ACCwriteln(340);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0455:
	{
 		if (skipdoall('p000e0455')) break p000e0455;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0455;
 		}
		if (!CNDnoteq(51,255)) break p000e0455;
		if (!CNDonotzero(getFlag(51),3)) break p000e0455;
		if (!CNDpresent(getFlag(51))) break p000e0455;
 		ACCwriteln(341);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0456:
	{
 		if (skipdoall('p000e0456')) break p000e0456;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0456;
 		}
		if (!CNDnoteq(51,255)) break p000e0456;
		if (!CNDonotzero(getFlag(51),3)) break p000e0456;
		if (!CNDabsent(getFlag(51))) break p000e0456;
 		ACCwriteln(342);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0457:
	{
 		if (skipdoall('p000e0457')) break p000e0457;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0457;
 		}
		if (!CNDnoteq(34,255)) break p000e0457;
		if (!CNDeq(51,255)) break p000e0457;
 		ACCwriteln(343);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0458:
	{
 		if (skipdoall('p000e0458')) break p000e0458;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0458;
 		}
		if (!CNDnoteq(51,255)) break p000e0458;
		if (!CNDpresent(getFlag(51))) break p000e0458;
 		ACCwriteln(344);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0459:
	{
 		if (skipdoall('p000e0459')) break p000e0459;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0459;
 		}
		if (!CNDnoteq(51,255)) break p000e0459;
		if (!CNDabsent(getFlag(51))) break p000e0459;
 		ACCwriteln(345);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0460:
	{
 		if (skipdoall('p000e0460')) break p000e0460;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0460;
 		}
		if (!CNDeq(34,255)) break p000e0460;
		if (!CNDbnotzero(12,1)) break p000e0460;
 		ACCwriteln(346);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0461:
	{
 		if (skipdoall('p000e0461')) break p000e0461;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0461;
 		}
		if (!CNDeq(34,255)) break p000e0461;
		if (!CNDbzero(12,1)) break p000e0461;
 		ACCwriteln(347);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0462:
	{
 		if (skipdoall('p000e0462')) break p000e0462;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0462;
 		}
		if (!CNDnoteq(34,255)) break p000e0462;
		if (!CNDnoteq(51,255)) break p000e0462;
		if (!CNDonotzero(getFlag(51),3)) break p000e0462;
		if (!CNDpresent(getFlag(51))) break p000e0462;
 		ACCwriteln(348);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0463:
	{
 		if (skipdoall('p000e0463')) break p000e0463;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0463;
 		}
		if (!CNDnoteq(34,255)) break p000e0463;
		if (!CNDnoteq(51,255)) break p000e0463;
		if (!CNDonotzero(getFlag(51),3)) break p000e0463;
		if (!CNDabsent(getFlag(51))) break p000e0463;
 		ACCwriteln(349);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0464:
	{
 		if (skipdoall('p000e0464')) break p000e0464;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0464;
 		}
		if (!CNDnoteq(34,255)) break p000e0464;
		if (!CNDeq(51,255)) break p000e0464;
 		ACCwriteln(350);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0465:
	{
 		if (skipdoall('p000e0465')) break p000e0465;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0465;
 		}
		if (!CNDnoteq(51,255)) break p000e0465;
		if (!CNDpresent(getFlag(51))) break p000e0465;
 		ACCwriteln(351);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0466:
	{
 		if (skipdoall('p000e0466')) break p000e0466;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0466;
 		}
		if (!CNDnoteq(51,255)) break p000e0466;
		if (!CNDabsent(getFlag(51))) break p000e0466;
 		ACCwriteln(352);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0467:
	{
 		if (skipdoall('p000e0467')) break p000e0467;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0467;
 		}
		if (!CNDeq(34,255)) break p000e0467;
		if (!CNDbnotzero(12,1)) break p000e0467;
 		ACCwriteln(353);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0468:
	{
 		if (skipdoall('p000e0468')) break p000e0468;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0468;
 		}
		if (!CNDeq(34,255)) break p000e0468;
		if (!CNDbzero(12,1)) break p000e0468;
 		ACCwriteln(354);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0469:
	{
 		if (skipdoall('p000e0469')) break p000e0469;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0469;
 		}
		if (!CNDnoteq(34,255)) break p000e0469;
		if (!CNDnoteq(51,255)) break p000e0469;
		if (!CNDonotzero(getFlag(51),3)) break p000e0469;
		if (!CNDpresent(getFlag(51))) break p000e0469;
 		ACCwriteln(355);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0470:
	{
 		if (skipdoall('p000e0470')) break p000e0470;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0470;
 		}
		if (!CNDnoteq(34,255)) break p000e0470;
		if (!CNDnoteq(51,255)) break p000e0470;
		if (!CNDonotzero(getFlag(51),3)) break p000e0470;
		if (!CNDabsent(getFlag(51))) break p000e0470;
 		ACCwriteln(356);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0471:
	{
 		if (skipdoall('p000e0471')) break p000e0471;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0471;
 		}
		if (!CNDnoteq(34,255)) break p000e0471;
		if (!CNDeq(51,255)) break p000e0471;
 		ACCwriteln(357);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0472:
	{
 		if (skipdoall('p000e0472')) break p000e0472;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0472;
 		}
		if (!CNDnoteq(51,255)) break p000e0472;
		if (!CNDpresent(getFlag(51))) break p000e0472;
 		ACCwriteln(358);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0473:
	{
 		if (skipdoall('p000e0473')) break p000e0473;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0473;
 		}
		if (!CNDnoteq(51,255)) break p000e0473;
		if (!CNDabsent(getFlag(51))) break p000e0473;
 		ACCwriteln(359);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0474:
	{
 		if (skipdoall('p000e0474')) break p000e0474;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0474;
 		}
		if (!CNDeq(34,255)) break p000e0474;
		if (!CNDbnotzero(12,1)) break p000e0474;
 		ACCwriteln(360);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0475:
	{
 		if (skipdoall('p000e0475')) break p000e0475;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0475;
 		}
		if (!CNDeq(34,255)) break p000e0475;
		if (!CNDbzero(12,1)) break p000e0475;
 		ACCwriteln(361);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0476:
	{
 		if (skipdoall('p000e0476')) break p000e0476;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0476;
 		}
		if (!CNDnoteq(34,255)) break p000e0476;
		if (!CNDeq(51,255)) break p000e0476;
 		ACCwriteln(362);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0477:
	{
 		if (skipdoall('p000e0477')) break p000e0477;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0477;
 		}
		if (!CNDnoteq(51,255)) break p000e0477;
		if (!CNDpresent(getFlag(51))) break p000e0477;
		if (!CNDonotzero(getFlag(51),19)) break p000e0477;
		if (!CNDozero(getFlag(51),20)) break p000e0477;
 		ACCoset(getFlag(51),20);
 		ACCwriteln(363);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0478:
	{
 		if (skipdoall('p000e0478')) break p000e0478;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0478;
 		}
		if (!CNDnoteq(51,255)) break p000e0478;
		if (!CNDpresent(getFlag(51))) break p000e0478;
		if (!CNDonotzero(getFlag(51),19)) break p000e0478;
		if (!CNDonotzero(getFlag(51),20)) break p000e0478;
 		ACCwriteln(364);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0479:
	{
 		if (skipdoall('p000e0479')) break p000e0479;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0479;
 		}
		if (!CNDnoteq(51,255)) break p000e0479;
		if (!CNDpresent(getFlag(51))) break p000e0479;
 		ACCwriteln(365);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0480:
	{
 		if (skipdoall('p000e0480')) break p000e0480;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0480;
 		}
		if (!CNDnoteq(51,255)) break p000e0480;
		if (!CNDabsent(getFlag(51))) break p000e0480;
 		ACCwriteln(366);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0481:
	{
 		if (skipdoall('p000e0481')) break p000e0481;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0481;
 		}
		if (!CNDeq(34,255)) break p000e0481;
		if (!CNDbnotzero(12,1)) break p000e0481;
 		ACCwriteln(367);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0482:
	{
 		if (skipdoall('p000e0482')) break p000e0482;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0482;
 		}
		if (!CNDeq(34,255)) break p000e0482;
		if (!CNDbzero(12,1)) break p000e0482;
 		ACCwriteln(368);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0483:
	{
 		if (skipdoall('p000e0483')) break p000e0483;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0483;
 		}
		if (!CNDnoteq(34,255)) break p000e0483;
		if (!CNDeq(51,255)) break p000e0483;
 		ACCwriteln(369);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0484:
	{
 		if (skipdoall('p000e0484')) break p000e0484;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0484;
 		}
		if (!CNDnoteq(51,255)) break p000e0484;
		if (!CNDpresent(getFlag(51))) break p000e0484;
		if (!CNDonotzero(getFlag(51),19)) break p000e0484;
		if (!CNDonotzero(getFlag(51),20)) break p000e0484;
 		ACCoclear(getFlag(51),20);
 		ACCwriteln(370);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0485:
	{
 		if (skipdoall('p000e0485')) break p000e0485;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0485;
 		}
		if (!CNDnoteq(51,255)) break p000e0485;
		if (!CNDpresent(getFlag(51))) break p000e0485;
		if (!CNDonotzero(getFlag(51),19)) break p000e0485;
		if (!CNDozero(getFlag(51),20)) break p000e0485;
 		ACCwriteln(371);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0486:
	{
 		if (skipdoall('p000e0486')) break p000e0486;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0486;
 		}
		if (!CNDnoteq(51,255)) break p000e0486;
		if (!CNDpresent(getFlag(51))) break p000e0486;
 		ACCwriteln(372);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0487:
	{
 		if (skipdoall('p000e0487')) break p000e0487;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0487;
 		}
		if (!CNDnoteq(51,255)) break p000e0487;
		if (!CNDabsent(getFlag(51))) break p000e0487;
 		ACCwriteln(373);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0488:
	{
 		if (skipdoall('p000e0488')) break p000e0488;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0488;
 		}
		if (!CNDeq(34,255)) break p000e0488;
		if (!CNDbnotzero(12,1)) break p000e0488;
 		ACCwriteln(374);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0489:
	{
 		if (skipdoall('p000e0489')) break p000e0489;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0489;
 		}
		if (!CNDeq(34,255)) break p000e0489;
		if (!CNDbzero(12,1)) break p000e0489;
 		ACCwriteln(375);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0490:
	{
 		if (skipdoall('p000e0490')) break p000e0490;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0490;
 		}
		if (!CNDnoteq(34,255)) break p000e0490;
		if (!CNDeq(51,255)) break p000e0490;
 		ACCwriteln(376);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0491:
	{
 		if (skipdoall('p000e0491')) break p000e0491;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0491;
 		}
		if (!CNDnoteq(51,255)) break p000e0491;
		if (!CNDpresent(getFlag(51))) break p000e0491;
		if (!CNDonotzero(getFlag(51),13)) break p000e0491;
		if (!CNDozero(getFlag(51),14)) break p000e0491;
		if (!CNDozero(getFlag(51),10)) break p000e0491;
 		ACCoset(getFlag(51),14);
 		ACCwriteln(377);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0492:
	{
 		if (skipdoall('p000e0492')) break p000e0492;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0492;
 		}
		if (!CNDnoteq(51,255)) break p000e0492;
		if (!CNDpresent(getFlag(51))) break p000e0492;
		if (!CNDonotzero(getFlag(51),13)) break p000e0492;
		if (!CNDozero(getFlag(51),14)) break p000e0492;
		if (!CNDonotzero(getFlag(51),10)) break p000e0492;
 		ACCwriteln(378);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0493:
	{
 		if (skipdoall('p000e0493')) break p000e0493;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0493;
 		}
		if (!CNDnoteq(51,255)) break p000e0493;
		if (!CNDpresent(getFlag(51))) break p000e0493;
		if (!CNDonotzero(getFlag(51),13)) break p000e0493;
		if (!CNDonotzero(getFlag(51),14)) break p000e0493;
 		ACCwriteln(379);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0494:
	{
 		if (skipdoall('p000e0494')) break p000e0494;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0494;
 		}
		if (!CNDnoteq(51,255)) break p000e0494;
		if (!CNDpresent(getFlag(51))) break p000e0494;
		if (!CNDonotzero(getFlag(51),13)) break p000e0494;
		if (!CNDonotzero(getFlag(51),14)) break p000e0494;
 		ACCwriteln(380);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0495:
	{
 		if (skipdoall('p000e0495')) break p000e0495;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0495;
 		}
		if (!CNDnoteq(51,255)) break p000e0495;
		if (!CNDpresent(getFlag(51))) break p000e0495;
 		ACCwriteln(381);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0496:
	{
 		if (skipdoall('p000e0496')) break p000e0496;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0496;
 		}
		if (!CNDnoteq(51,255)) break p000e0496;
		if (!CNDabsent(getFlag(51))) break p000e0496;
 		ACCwriteln(382);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0497:
	{
 		if (skipdoall('p000e0497')) break p000e0497;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0497;
 		}
		if (!CNDeq(34,255)) break p000e0497;
 		ACCwriteln(383);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0498:
	{
 		if (skipdoall('p000e0498')) break p000e0498;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0498;
 		}
		if (!CNDeq(34,255)) break p000e0498;
		if (!CNDbzero(12,1)) break p000e0498;
 		ACCwriteln(384);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0499:
	{
 		if (skipdoall('p000e0499')) break p000e0499;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0499;
 		}
		if (!CNDnoteq(34,255)) break p000e0499;
		if (!CNDeq(51,255)) break p000e0499;
 		ACCwriteln(385);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0500:
	{
 		if (skipdoall('p000e0500')) break p000e0500;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0500;
 		}
		if (!CNDnoteq(51,255)) break p000e0500;
		if (!CNDpresent(getFlag(51))) break p000e0500;
		if (!CNDonotzero(getFlag(51),13)) break p000e0500;
		if (!CNDonotzero(getFlag(51),14)) break p000e0500;
 		ACCoclear(getFlag(51),14);
 		ACCwriteln(386);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0501:
	{
 		if (skipdoall('p000e0501')) break p000e0501;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0501;
 		}
		if (!CNDnoteq(51,255)) break p000e0501;
		if (!CNDpresent(getFlag(51))) break p000e0501;
		if (!CNDonotzero(getFlag(51),13)) break p000e0501;
		if (!CNDozero(getFlag(51),14)) break p000e0501;
 		ACCwriteln(387);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0502:
	{
 		if (skipdoall('p000e0502')) break p000e0502;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0502;
 		}
		if (!CNDnoteq(51,255)) break p000e0502;
		if (!CNDpresent(getFlag(51))) break p000e0502;
 		ACCwriteln(388);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0503:
	{
 		if (skipdoall('p000e0503')) break p000e0503;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0503;
 		}
		if (!CNDnoteq(51,255)) break p000e0503;
		if (!CNDabsent(getFlag(51))) break p000e0503;
 		ACCwriteln(389);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0504:
	{
 		if (skipdoall('p000e0504')) break p000e0504;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0504;
 		}
		if (!CNDeq(34,255)) break p000e0504;
		if (!CNDbnotzero(12,1)) break p000e0504;
 		ACCwriteln(390);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0505:
	{
 		if (skipdoall('p000e0505')) break p000e0505;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0505;
 		}
		if (!CNDeq(34,255)) break p000e0505;
		if (!CNDbzero(12,1)) break p000e0505;
 		ACCwriteln(391);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0506:
	{
 		if (skipdoall('p000e0506')) break p000e0506;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0506;
 		}
		if (!CNDnoteq(34,255)) break p000e0506;
		if (!CNDeq(51,255)) break p000e0506;
 		ACCwriteln(392);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0507:
	{
 		if (skipdoall('p000e0507')) break p000e0507;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0507;
 		}
		if (!CNDnoteq(51,255)) break p000e0507;
		if (!CNDpresent(getFlag(51))) break p000e0507;
 		ACCwriteln(393);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0508:
	{
 		if (skipdoall('p000e0508')) break p000e0508;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0508;
 		}
		if (!CNDnoteq(51,255)) break p000e0508;
		if (!CNDabsent(getFlag(51))) break p000e0508;
 		ACCwriteln(394);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0509:
	{
 		if (skipdoall('p000e0509')) break p000e0509;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0509;
 		}
		if (!CNDeq(34,255)) break p000e0509;
		if (!CNDbnotzero(12,1)) break p000e0509;
 		ACCwriteln(395);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0510:
	{
 		if (skipdoall('p000e0510')) break p000e0510;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0510;
 		}
		if (!CNDeq(34,255)) break p000e0510;
		if (!CNDbzero(12,1)) break p000e0510;
 		ACCwriteln(396);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0511:
	{
 		if (skipdoall('p000e0511')) break p000e0511;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0511;
 		}
		if (!CNDnoteq(51,255)) break p000e0511;
		if (!CNDonotzero(getFlag(51),3)) break p000e0511;
		if (!CNDpresent(getFlag(51))) break p000e0511;
 		ACCwriteln(397);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0512:
	{
 		if (skipdoall('p000e0512')) break p000e0512;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0512;
 		}
		if (!CNDnoteq(51,255)) break p000e0512;
		if (!CNDonotzero(getFlag(51),5)) break p000e0512;
		if (!CNDpresent(getFlag(51))) break p000e0512;
 		ACCwriteln(398);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0513:
	{
 		if (skipdoall('p000e0513')) break p000e0513;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0513;
 		}
		if (!CNDnoteq(51,255)) break p000e0513;
		if (!CNDonotzero(getFlag(51),3)) break p000e0513;
		if (!CNDabsent(getFlag(51))) break p000e0513;
 		ACCwriteln(399);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0514:
	{
 		if (skipdoall('p000e0514')) break p000e0514;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0514;
 		}
		if (!CNDnoteq(34,255)) break p000e0514;
		if (!CNDeq(51,255)) break p000e0514;
 		ACCwriteln(400);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0515:
	{
 		if (skipdoall('p000e0515')) break p000e0515;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0515;
 		}
		if (!CNDnoteq(51,255)) break p000e0515;
		if (!CNDpresent(getFlag(51))) break p000e0515;
 		ACCwriteln(401);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0516:
	{
 		if (skipdoall('p000e0516')) break p000e0516;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0516;
 		}
		if (!CNDnoteq(51,255)) break p000e0516;
		if (!CNDabsent(getFlag(51))) break p000e0516;
 		ACCwriteln(402);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0517:
	{
 		if (skipdoall('p000e0517')) break p000e0517;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0517;
 		}
		if (!CNDeq(34,255)) break p000e0517;
		if (!CNDbnotzero(12,1)) break p000e0517;
 		ACCwriteln(403);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0518:
	{
 		if (skipdoall('p000e0518')) break p000e0518;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0518;
 		}
		if (!CNDeq(34,255)) break p000e0518;
		if (!CNDbzero(12,1)) break p000e0518;
 		ACCwriteln(404);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0519:
	{
 		if (skipdoall('p000e0519')) break p000e0519;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0519;
 		}
		if (!CNDnoteq(34,255)) break p000e0519;
		if (!CNDnoteq(51,255)) break p000e0519;
		if (!CNDonotzero(getFlag(51),3)) break p000e0519;
		if (!CNDpresent(getFlag(51))) break p000e0519;
 		ACCwriteln(405);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0520:
	{
 		if (skipdoall('p000e0520')) break p000e0520;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0520;
 		}
		if (!CNDnoteq(34,255)) break p000e0520;
		if (!CNDnoteq(51,255)) break p000e0520;
		if (!CNDonotzero(getFlag(51),3)) break p000e0520;
		if (!CNDabsent(getFlag(51))) break p000e0520;
 		ACCwriteln(406);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0521:
	{
 		if (skipdoall('p000e0521')) break p000e0521;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0521;
 		}
		if (!CNDnoteq(34,255)) break p000e0521;
		if (!CNDeq(51,255)) break p000e0521;
 		ACCwriteln(407);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0522:
	{
 		if (skipdoall('p000e0522')) break p000e0522;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0522;
 		}
		if (!CNDnoteq(51,255)) break p000e0522;
		if (!CNDpresent(getFlag(51))) break p000e0522;
 		ACCwriteln(408);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0523:
	{
 		if (skipdoall('p000e0523')) break p000e0523;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0523;
 		}
		if (!CNDnoteq(51,255)) break p000e0523;
		if (!CNDabsent(getFlag(51))) break p000e0523;
 		ACCwriteln(409);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0524:
	{
 		if (skipdoall('p000e0524')) break p000e0524;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0524;
 		}
		if (!CNDeq(34,255)) break p000e0524;
		if (!CNDbnotzero(12,1)) break p000e0524;
 		ACCwriteln(410);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0525:
	{
 		if (skipdoall('p000e0525')) break p000e0525;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0525;
 		}
		if (!CNDeq(34,255)) break p000e0525;
		if (!CNDbzero(12,1)) break p000e0525;
 		ACCwriteln(411);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0526:
	{
 		if (skipdoall('p000e0526')) break p000e0526;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0526;
 		}
		if (!CNDnoteq(34,255)) break p000e0526;
		if (!CNDnoteq(51,255)) break p000e0526;
		if (!CNDonotzero(getFlag(51),3)) break p000e0526;
		if (!CNDpresent(getFlag(51))) break p000e0526;
 		ACCwriteln(412);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0527:
	{
 		if (skipdoall('p000e0527')) break p000e0527;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0527;
 		}
		if (!CNDnoteq(34,255)) break p000e0527;
		if (!CNDnoteq(51,255)) break p000e0527;
		if (!CNDonotzero(getFlag(51),3)) break p000e0527;
		if (!CNDabsent(getFlag(51))) break p000e0527;
 		ACCwriteln(413);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0528:
	{
 		if (skipdoall('p000e0528')) break p000e0528;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0528;
 		}
		if (!CNDnoteq(34,255)) break p000e0528;
		if (!CNDeq(51,255)) break p000e0528;
 		ACCwriteln(414);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0529:
	{
 		if (skipdoall('p000e0529')) break p000e0529;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0529;
 		}
		if (!CNDnoteq(51,255)) break p000e0529;
		if (!CNDpresent(getFlag(51))) break p000e0529;
 		ACCwriteln(415);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0530:
	{
 		if (skipdoall('p000e0530')) break p000e0530;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0530;
 		}
		if (!CNDnoteq(51,255)) break p000e0530;
		if (!CNDabsent(getFlag(51))) break p000e0530;
 		ACCwriteln(416);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0531:
	{
 		if (skipdoall('p000e0531')) break p000e0531;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0531;
 		}
		if (!CNDeq(34,255)) break p000e0531;
		if (!CNDbnotzero(12,1)) break p000e0531;
 		ACCwriteln(417);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0532:
	{
 		if (skipdoall('p000e0532')) break p000e0532;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0532;
 		}
		if (!CNDeq(34,255)) break p000e0532;
		if (!CNDbzero(12,1)) break p000e0532;
 		ACCwriteln(418);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0533:
	{
 		if (skipdoall('p000e0533')) break p000e0533;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0533;
 		}
		if (!CNDnoteq(34,255)) break p000e0533;
		if (!CNDnoteq(51,255)) break p000e0533;
		if (!CNDonotzero(getFlag(51),3)) break p000e0533;
		if (!CNDpresent(getFlag(51))) break p000e0533;
 		ACCwriteln(419);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0534:
	{
 		if (skipdoall('p000e0534')) break p000e0534;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0534;
 		}
		if (!CNDnoteq(34,255)) break p000e0534;
		if (!CNDnoteq(51,255)) break p000e0534;
		if (!CNDonotzero(getFlag(51),3)) break p000e0534;
		if (!CNDabsent(getFlag(51))) break p000e0534;
 		ACCwriteln(420);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0535:
	{
 		if (skipdoall('p000e0535')) break p000e0535;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0535;
 		}
		if (!CNDnoteq(34,255)) break p000e0535;
		if (!CNDeq(51,255)) break p000e0535;
 		ACCwriteln(421);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0536:
	{
 		if (skipdoall('p000e0536')) break p000e0536;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0536;
 		}
		if (!CNDnoteq(51,255)) break p000e0536;
		if (!CNDpresent(getFlag(51))) break p000e0536;
 		ACCwriteln(422);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0537:
	{
 		if (skipdoall('p000e0537')) break p000e0537;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0537;
 		}
		if (!CNDnoteq(51,255)) break p000e0537;
		if (!CNDabsent(getFlag(51))) break p000e0537;
 		ACCwriteln(423);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0538:
	{
 		if (skipdoall('p000e0538')) break p000e0538;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0538;
 		}
		if (!CNDeq(34,255)) break p000e0538;
		if (!CNDbnotzero(12,1)) break p000e0538;
 		ACCwriteln(424);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0539:
	{
 		if (skipdoall('p000e0539')) break p000e0539;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0539;
 		}
		if (!CNDeq(34,255)) break p000e0539;
		if (!CNDbzero(12,1)) break p000e0539;
 		ACCwriteln(425);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0540:
	{
 		if (skipdoall('p000e0540')) break p000e0540;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0540;
 		}
		if (!CNDnoteq(34,255)) break p000e0540;
		if (!CNDnoteq(51,255)) break p000e0540;
		if (!CNDonotzero(getFlag(51),3)) break p000e0540;
		if (!CNDpresent(getFlag(51))) break p000e0540;
 		ACCwriteln(426);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0541:
	{
 		if (skipdoall('p000e0541')) break p000e0541;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0541;
 		}
		if (!CNDnoteq(34,255)) break p000e0541;
		if (!CNDnoteq(51,255)) break p000e0541;
		if (!CNDonotzero(getFlag(51),3)) break p000e0541;
		if (!CNDabsent(getFlag(51))) break p000e0541;
 		ACCwriteln(427);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0542:
	{
 		if (skipdoall('p000e0542')) break p000e0542;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0542;
 		}
		if (!CNDnoteq(34,255)) break p000e0542;
		if (!CNDeq(51,255)) break p000e0542;
 		ACCwriteln(428);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0543:
	{
 		if (skipdoall('p000e0543')) break p000e0543;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0543;
 		}
		if (!CNDnoteq(51,255)) break p000e0543;
		if (!CNDpresent(getFlag(51))) break p000e0543;
 		ACCwriteln(429);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0544:
	{
 		if (skipdoall('p000e0544')) break p000e0544;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0544;
 		}
		if (!CNDnoteq(51,255)) break p000e0544;
		if (!CNDabsent(getFlag(51))) break p000e0544;
 		ACCwriteln(430);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXITS _
	p000e0545:
	{
 		if (skipdoall('p000e0545')) break p000e0545;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0545;
 		}
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0546:
	{
 		if (skipdoall('p000e0546')) break p000e0546;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0546;
 		}
 		ACChelp();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VERSION _
	p000e0547:
	{
 		if (skipdoall('p000e0547')) break p000e0547;
 		if (in_response)
		{
			if (!CNDverb(70)) break p000e0547;
 		}
 		ACCversion();
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0548:
	{
 		if (skipdoall('p000e0548')) break p000e0548;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0548;
 		}
		if (!CNDsame(46,34)) break p000e0548;
 		ACCwhatox(13);
		if (!CNDonotzero(getFlag(13),3)) break p000e0548;
		if (!CNDnoteq(44,255)) break p000e0548;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// DA _
	p000e0549:
	{
 		if (skipdoall('p000e0549')) break p000e0549;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0549;
 		}
		if (!CNDprep(2)) break p000e0549;
		if (!CNDbzero(12,2)) break p000e0549;
		if (!CNDeq(44,255)) break p000e0549;
		if (!CNDbnotzero(12,1)) break p000e0549;
 		ACCwriteln(431);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0550:
	{
 		if (skipdoall('p000e0550')) break p000e0550;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0550;
 		}
		if (!CNDeq(34,255)) break p000e0550;
		if (!CNDbzero(12,1)) break p000e0550;
 		ACCwriteln(432);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0551:
	{
 		if (skipdoall('p000e0551')) break p000e0551;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0551;
 		}
		if (!CNDeq(34,255)) break p000e0551;
		if (!CNDbnotzero(12,1)) break p000e0551;
 		ACCwriteln(433);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0552:
	{
 		if (skipdoall('p000e0552')) break p000e0552;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0552;
 		}
		if (!CNDnoteq(34,255)) break p000e0552;
		if (!CNDeq(51,255)) break p000e0552;
 		ACCwriteln(434);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0553:
	{
 		if (skipdoall('p000e0553')) break p000e0553;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0553;
 		}
		if (!CNDnoteq(51,255)) break p000e0553;
		if (!CNDworn(getFlag(51))) break p000e0553;
		if (!CNDonotzero(getFlag(51),1)) break p000e0553;
 		ACCwriteln(435);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0554:
	{
 		if (skipdoall('p000e0554')) break p000e0554;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0554;
 		}
		if (!CNDnoteq(51,255)) break p000e0554;
		if (!CNDnotcarr(getFlag(51))) break p000e0554;
 		ACCwriteln(436);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0555:
	{
 		if (skipdoall('p000e0555')) break p000e0555;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0555;
 		}
		if (!CNDnoteq(51,255)) break p000e0555;
		if (!CNDcarried(getFlag(51))) break p000e0555;
		if (!CNDeq(44,255)) break p000e0555;
		if (!CNDbzero(12,1)) break p000e0555;
 		ACCwriteln(437);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0556:
	{
 		if (skipdoall('p000e0556')) break p000e0556;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0556;
 		}
		if (!CNDnoteq(51,255)) break p000e0556;
		if (!CNDcarried(getFlag(51))) break p000e0556;
		if (!CNDeq(44,255)) break p000e0556;
		if (!CNDbnotzero(12,1)) break p000e0556;
 		ACCwriteln(438);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0557:
	{
 		if (skipdoall('p000e0557')) break p000e0557;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0557;
 		}
		if (!CNDnoteq(51,255)) break p000e0557;
		if (!CNDcarried(getFlag(51))) break p000e0557;
		if (!CNDnoteq(44,255)) break p000e0557;
 		ACCwhatox2(15);
		if (!CNDeq(15,255)) break p000e0557;
 		ACCwriteln(439);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0558:
	{
 		if (skipdoall('p000e0558')) break p000e0558;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0558;
 		}
		if (!CNDnoteq(51,255)) break p000e0558;
		if (!CNDcarried(getFlag(51))) break p000e0558;
		if (!CNDnoteq(44,255)) break p000e0558;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0558;
		if (!CNDozero(getFlag(13),3)) break p000e0558;
 		ACCwriteln(440);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0559:
	{
 		if (skipdoall('p000e0559')) break p000e0559;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0559;
 		}
		if (!CNDnoteq(51,255)) break p000e0559;
		if (!CNDcarried(getFlag(51))) break p000e0559;
		if (!CNDnoteq(44,255)) break p000e0559;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0559;
		if (!CNDonotzero(getFlag(13),3)) break p000e0559;
		if (!CNDabsent(getFlag(13))) break p000e0559;
 		ACCwriteln(441);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0560:
	{
 		if (skipdoall('p000e0560')) break p000e0560;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0560;
 		}
		if (!CNDnoteq(51,255)) break p000e0560;
		if (!CNDcarried(getFlag(51))) break p000e0560;
		if (!CNDnoteq(44,255)) break p000e0560;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0560;
		if (!CNDonotzero(getFlag(13),3)) break p000e0560;
		if (!CNDpresent(getFlag(13))) break p000e0560;
 		ACCwriteln(442);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0561:
	{
 		if (skipdoall('p000e0561')) break p000e0561;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0561;
 		}
		if (!CNDsame(46,34)) break p000e0561;
 		ACCwhatox(13);
		if (!CNDonotzero(getFlag(13),3)) break p000e0561;
		if (!CNDnoteq(44,255)) break p000e0561;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// ENSEÑA _
	p000e0562:
	{
 		if (skipdoall('p000e0562')) break p000e0562;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0562;
 		}
		if (!CNDprep(2)) break p000e0562;
		if (!CNDbzero(12,2)) break p000e0562;
		if (!CNDeq(44,255)) break p000e0562;
		if (!CNDbnotzero(12,1)) break p000e0562;
 		ACCwriteln(443);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0563:
	{
 		if (skipdoall('p000e0563')) break p000e0563;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0563;
 		}
		if (!CNDeq(34,255)) break p000e0563;
		if (!CNDbzero(12,1)) break p000e0563;
 		ACCwriteln(444);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0564:
	{
 		if (skipdoall('p000e0564')) break p000e0564;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0564;
 		}
		if (!CNDeq(34,255)) break p000e0564;
		if (!CNDbnotzero(12,1)) break p000e0564;
 		ACCwriteln(445);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0565:
	{
 		if (skipdoall('p000e0565')) break p000e0565;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0565;
 		}
		if (!CNDnoteq(34,255)) break p000e0565;
		if (!CNDeq(51,255)) break p000e0565;
 		ACCwriteln(446);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0566:
	{
 		if (skipdoall('p000e0566')) break p000e0566;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0566;
 		}
		if (!CNDnoteq(51,255)) break p000e0566;
		if (!CNDworn(getFlag(51))) break p000e0566;
		if (!CNDonotzero(getFlag(51),1)) break p000e0566;
 		ACCwriteln(447);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0567:
	{
 		if (skipdoall('p000e0567')) break p000e0567;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0567;
 		}
		if (!CNDnoteq(51,255)) break p000e0567;
		if (!CNDnotcarr(getFlag(51))) break p000e0567;
 		ACCwriteln(448);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0568:
	{
 		if (skipdoall('p000e0568')) break p000e0568;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0568;
 		}
		if (!CNDnoteq(51,255)) break p000e0568;
		if (!CNDcarried(getFlag(51))) break p000e0568;
		if (!CNDeq(44,255)) break p000e0568;
		if (!CNDbzero(12,1)) break p000e0568;
 		ACCwriteln(449);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0569:
	{
 		if (skipdoall('p000e0569')) break p000e0569;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0569;
 		}
		if (!CNDnoteq(51,255)) break p000e0569;
		if (!CNDcarried(getFlag(51))) break p000e0569;
		if (!CNDeq(44,255)) break p000e0569;
		if (!CNDbnotzero(12,1)) break p000e0569;
 		ACCwriteln(450);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0570:
	{
 		if (skipdoall('p000e0570')) break p000e0570;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0570;
 		}
		if (!CNDnoteq(51,255)) break p000e0570;
		if (!CNDcarried(getFlag(51))) break p000e0570;
		if (!CNDnoteq(44,255)) break p000e0570;
 		ACCwhatox2(13);
		if (!CNDeq(13,255)) break p000e0570;
 		ACCwriteln(451);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0571:
	{
 		if (skipdoall('p000e0571')) break p000e0571;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0571;
 		}
		if (!CNDnoteq(51,255)) break p000e0571;
		if (!CNDcarried(getFlag(51))) break p000e0571;
		if (!CNDnoteq(44,255)) break p000e0571;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0571;
		if (!CNDozero(getFlag(13),3)) break p000e0571;
 		ACCwriteln(452);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0572:
	{
 		if (skipdoall('p000e0572')) break p000e0572;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0572;
 		}
		if (!CNDnoteq(51,255)) break p000e0572;
		if (!CNDcarried(getFlag(51))) break p000e0572;
		if (!CNDnoteq(44,255)) break p000e0572;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0572;
		if (!CNDonotzero(getFlag(13),3)) break p000e0572;
		if (!CNDabsent(getFlag(13))) break p000e0572;
 		ACCwriteln(453);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0573:
	{
 		if (skipdoall('p000e0573')) break p000e0573;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0573;
 		}
		if (!CNDnoteq(51,255)) break p000e0573;
		if (!CNDcarried(getFlag(51))) break p000e0573;
		if (!CNDnoteq(44,255)) break p000e0573;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0573;
		if (!CNDonotzero(getFlag(13),3)) break p000e0573;
		if (!CNDpresent(getFlag(13))) break p000e0573;
 		ACCwriteln(454);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0574:
	{
 		if (skipdoall('p000e0574')) break p000e0574;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0574;
 		}
		if (!CNDeq(34,255)) break p000e0574;
		if (!CNDbnotzero(12,1)) break p000e0574;
 		ACCwriteln(455);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0575:
	{
 		if (skipdoall('p000e0575')) break p000e0575;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0575;
 		}
		if (!CNDeq(34,255)) break p000e0575;
		if (!CNDbzero(12,1)) break p000e0575;
 		ACCwriteln(456);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0576:
	{
 		if (skipdoall('p000e0576')) break p000e0576;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0576;
 		}
		if (!CNDnoteq(34,255)) break p000e0576;
		if (!CNDnoteq(51,255)) break p000e0576;
		if (!CNDonotzero(getFlag(51),3)) break p000e0576;
		if (!CNDpresent(getFlag(51))) break p000e0576;
 		ACCwriteln(457);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0577:
	{
 		if (skipdoall('p000e0577')) break p000e0577;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0577;
 		}
		if (!CNDnoteq(34,255)) break p000e0577;
		if (!CNDnoteq(51,255)) break p000e0577;
		if (!CNDonotzero(getFlag(51),3)) break p000e0577;
		if (!CNDabsent(getFlag(51))) break p000e0577;
 		ACCwriteln(458);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0578:
	{
 		if (skipdoall('p000e0578')) break p000e0578;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0578;
 		}
		if (!CNDnoteq(34,255)) break p000e0578;
		if (!CNDeq(51,255)) break p000e0578;
 		ACCwriteln(459);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0579:
	{
 		if (skipdoall('p000e0579')) break p000e0579;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0579;
 		}
		if (!CNDnoteq(51,255)) break p000e0579;
		if (!CNDpresent(getFlag(51))) break p000e0579;
 		ACCwriteln(460);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0580:
	{
 		if (skipdoall('p000e0580')) break p000e0580;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0580;
 		}
		if (!CNDnoteq(51,255)) break p000e0580;
		if (!CNDabsent(getFlag(51))) break p000e0580;
 		ACCwriteln(461);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0581:
	{
 		if (skipdoall('p000e0581')) break p000e0581;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0581;
 		}
		if (!CNDnoteq(34,255)) break p000e0581;
		if (!CNDnoteq(51,255)) break p000e0581;
		if (!CNDonotzero(getFlag(51),3)) break p000e0581;
		if (!CNDpresent(getFlag(51))) break p000e0581;
 		ACCwriteln(462);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0582:
	{
 		if (skipdoall('p000e0582')) break p000e0582;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0582;
 		}
		if (!CNDnoteq(34,255)) break p000e0582;
		if (!CNDnoteq(51,255)) break p000e0582;
		if (!CNDonotzero(getFlag(51),3)) break p000e0582;
		if (!CNDabsent(getFlag(51))) break p000e0582;
 		ACCwriteln(463);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0583:
	{
 		if (skipdoall('p000e0583')) break p000e0583;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0583;
 		}
 		ACCwriteln(464);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0584:
	{
 		if (skipdoall('p000e0584')) break p000e0584;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0584;
 		}
		if (!CNDnoteq(34,255)) break p000e0584;
		if (!CNDnoteq(51,255)) break p000e0584;
		if (!CNDonotzero(getFlag(51),3)) break p000e0584;
		if (!CNDpresent(getFlag(51))) break p000e0584;
 		ACCwriteln(465);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0585:
	{
 		if (skipdoall('p000e0585')) break p000e0585;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0585;
 		}
		if (!CNDnoteq(34,255)) break p000e0585;
		if (!CNDnoteq(51,255)) break p000e0585;
		if (!CNDonotzero(getFlag(51),3)) break p000e0585;
		if (!CNDabsent(getFlag(51))) break p000e0585;
 		ACCwriteln(466);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0586:
	{
 		if (skipdoall('p000e0586')) break p000e0586;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0586;
 		}
 		ACCwriteln(467);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0587:
	{
 		if (skipdoall('p000e0587')) break p000e0587;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0587;
 		}
		if (!CNDeq(34,255)) break p000e0587;
		if (!CNDbnotzero(12,1)) break p000e0587;
 		ACCwriteln(468);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0588:
	{
 		if (skipdoall('p000e0588')) break p000e0588;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0588;
 		}
		if (!CNDeq(34,255)) break p000e0588;
		if (!CNDbzero(12,1)) break p000e0588;
 		ACCwriteln(469);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0589:
	{
 		if (skipdoall('p000e0589')) break p000e0589;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0589;
 		}
		if (!CNDnoteq(34,255)) break p000e0589;
		if (!CNDnoteq(51,255)) break p000e0589;
		if (!CNDonotzero(getFlag(51),3)) break p000e0589;
		if (!CNDpresent(getFlag(51))) break p000e0589;
 		ACCwriteln(470);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0590:
	{
 		if (skipdoall('p000e0590')) break p000e0590;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0590;
 		}
		if (!CNDnoteq(34,255)) break p000e0590;
		if (!CNDnoteq(51,255)) break p000e0590;
		if (!CNDonotzero(getFlag(51),3)) break p000e0590;
		if (!CNDabsent(getFlag(51))) break p000e0590;
 		ACCwriteln(471);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0591:
	{
 		if (skipdoall('p000e0591')) break p000e0591;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0591;
 		}
		if (!CNDnoteq(34,255)) break p000e0591;
		if (!CNDeq(51,255)) break p000e0591;
 		ACCwriteln(472);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0592:
	{
 		if (skipdoall('p000e0592')) break p000e0592;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0592;
 		}
		if (!CNDnoteq(51,255)) break p000e0592;
		if (!CNDpresent(getFlag(51))) break p000e0592;
		if (!CNDgt(55,52)) break p000e0592;
 		ACCwriteln(473);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0593:
	{
 		if (skipdoall('p000e0593')) break p000e0593;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0593;
 		}
		if (!CNDnoteq(51,255)) break p000e0593;
		if (!CNDpresent(getFlag(51))) break p000e0593;
 		ACCwriteln(474);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0594:
	{
 		if (skipdoall('p000e0594')) break p000e0594;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0594;
 		}
		if (!CNDnoteq(51,255)) break p000e0594;
		if (!CNDabsent(getFlag(51))) break p000e0594;
 		ACCwriteln(475);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0595:
	{
 		if (skipdoall('p000e0595')) break p000e0595;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0595;
 		}
		if (!CNDeq(34,255)) break p000e0595;
		if (!CNDbnotzero(12,1)) break p000e0595;
 		ACCwriteln(476);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0596:
	{
 		if (skipdoall('p000e0596')) break p000e0596;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0596;
 		}
		if (!CNDeq(34,255)) break p000e0596;
		if (!CNDbzero(12,1)) break p000e0596;
 		ACCwriteln(477);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0597:
	{
 		if (skipdoall('p000e0597')) break p000e0597;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0597;
 		}
		if (!CNDnoteq(34,255)) break p000e0597;
		if (!CNDnoteq(51,255)) break p000e0597;
		if (!CNDonotzero(getFlag(51),3)) break p000e0597;
		if (!CNDpresent(getFlag(51))) break p000e0597;
 		ACCwriteln(478);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0598:
	{
 		if (skipdoall('p000e0598')) break p000e0598;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0598;
 		}
		if (!CNDnoteq(34,255)) break p000e0598;
		if (!CNDnoteq(51,255)) break p000e0598;
		if (!CNDonotzero(getFlag(51),3)) break p000e0598;
		if (!CNDabsent(getFlag(51))) break p000e0598;
 		ACCwriteln(479);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0599:
	{
 		if (skipdoall('p000e0599')) break p000e0599;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0599;
 		}
		if (!CNDnoteq(34,255)) break p000e0599;
		if (!CNDeq(51,255)) break p000e0599;
 		ACCwriteln(480);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0600:
	{
 		if (skipdoall('p000e0600')) break p000e0600;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0600;
 		}
		if (!CNDnoteq(51,255)) break p000e0600;
		if (!CNDpresent(getFlag(51))) break p000e0600;
 		ACCwriteln(481);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0601:
	{
 		if (skipdoall('p000e0601')) break p000e0601;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0601;
 		}
		if (!CNDnoteq(51,255)) break p000e0601;
		if (!CNDabsent(getFlag(51))) break p000e0601;
 		ACCwriteln(482);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0602:
	{
 		if (skipdoall('p000e0602')) break p000e0602;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0602;
 		}
		if (!CNDeq(34,255)) break p000e0602;
		if (!CNDbnotzero(12,1)) break p000e0602;
 		ACCwriteln(483);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0603:
	{
 		if (skipdoall('p000e0603')) break p000e0603;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0603;
 		}
		if (!CNDeq(34,255)) break p000e0603;
		if (!CNDbzero(12,1)) break p000e0603;
 		ACCwriteln(484);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0604:
	{
 		if (skipdoall('p000e0604')) break p000e0604;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0604;
 		}
		if (!CNDnoteq(34,255)) break p000e0604;
		if (!CNDnoteq(51,255)) break p000e0604;
		if (!CNDonotzero(getFlag(51),3)) break p000e0604;
		if (!CNDpresent(getFlag(51))) break p000e0604;
 		ACCwriteln(485);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0605:
	{
 		if (skipdoall('p000e0605')) break p000e0605;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0605;
 		}
		if (!CNDnoteq(34,255)) break p000e0605;
		if (!CNDnoteq(51,255)) break p000e0605;
		if (!CNDonotzero(getFlag(51),3)) break p000e0605;
		if (!CNDabsent(getFlag(51))) break p000e0605;
 		ACCwriteln(486);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0606:
	{
 		if (skipdoall('p000e0606')) break p000e0606;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0606;
 		}
		if (!CNDnoteq(34,255)) break p000e0606;
		if (!CNDeq(51,255)) break p000e0606;
 		ACCwriteln(487);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0607:
	{
 		if (skipdoall('p000e0607')) break p000e0607;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0607;
 		}
		if (!CNDnoteq(51,255)) break p000e0607;
		if (!CNDpresent(getFlag(51))) break p000e0607;
 		ACCwriteln(488);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0608:
	{
 		if (skipdoall('p000e0608')) break p000e0608;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0608;
 		}
		if (!CNDnoteq(51,255)) break p000e0608;
		if (!CNDabsent(getFlag(51))) break p000e0608;
 		ACCwriteln(489);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0609:
	{
 		if (skipdoall('p000e0609')) break p000e0609;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0609;
 		}
		if (!CNDeq(34,255)) break p000e0609;
		if (!CNDbnotzero(12,1)) break p000e0609;
 		ACCwriteln(490);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0610:
	{
 		if (skipdoall('p000e0610')) break p000e0610;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0610;
 		}
		if (!CNDeq(34,255)) break p000e0610;
		if (!CNDbzero(12,1)) break p000e0610;
 		ACCwriteln(491);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0611:
	{
 		if (skipdoall('p000e0611')) break p000e0611;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0611;
 		}
		if (!CNDnoteq(34,255)) break p000e0611;
		if (!CNDnoteq(51,255)) break p000e0611;
		if (!CNDonotzero(getFlag(51),3)) break p000e0611;
		if (!CNDpresent(getFlag(51))) break p000e0611;
 		ACCwriteln(492);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0612:
	{
 		if (skipdoall('p000e0612')) break p000e0612;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0612;
 		}
		if (!CNDnoteq(34,255)) break p000e0612;
		if (!CNDnoteq(51,255)) break p000e0612;
		if (!CNDonotzero(getFlag(51),3)) break p000e0612;
		if (!CNDabsent(getFlag(51))) break p000e0612;
 		ACCwriteln(493);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0613:
	{
 		if (skipdoall('p000e0613')) break p000e0613;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0613;
 		}
		if (!CNDnoteq(34,255)) break p000e0613;
		if (!CNDeq(51,255)) break p000e0613;
 		ACCwriteln(494);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0614:
	{
 		if (skipdoall('p000e0614')) break p000e0614;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0614;
 		}
		if (!CNDnoteq(51,255)) break p000e0614;
		if (!CNDpresent(getFlag(51))) break p000e0614;
 		ACCwriteln(495);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0615:
	{
 		if (skipdoall('p000e0615')) break p000e0615;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0615;
 		}
		if (!CNDnoteq(51,255)) break p000e0615;
		if (!CNDabsent(getFlag(51))) break p000e0615;
 		ACCwriteln(496);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0616:
	{
 		if (skipdoall('p000e0616')) break p000e0616;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0616;
 		}
		if (!CNDeq(34,255)) break p000e0616;
		if (!CNDbnotzero(12,1)) break p000e0616;
 		ACCwriteln(497);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0617:
	{
 		if (skipdoall('p000e0617')) break p000e0617;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0617;
 		}
		if (!CNDeq(34,255)) break p000e0617;
		if (!CNDbzero(12,1)) break p000e0617;
 		ACCwriteln(498);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0618:
	{
 		if (skipdoall('p000e0618')) break p000e0618;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0618;
 		}
		if (!CNDnoteq(34,255)) break p000e0618;
		if (!CNDnoteq(51,255)) break p000e0618;
		if (!CNDonotzero(getFlag(51),3)) break p000e0618;
		if (!CNDpresent(getFlag(51))) break p000e0618;
 		ACCwriteln(499);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0619:
	{
 		if (skipdoall('p000e0619')) break p000e0619;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0619;
 		}
		if (!CNDnoteq(34,255)) break p000e0619;
		if (!CNDnoteq(51,255)) break p000e0619;
		if (!CNDonotzero(getFlag(51),3)) break p000e0619;
		if (!CNDabsent(getFlag(51))) break p000e0619;
 		ACCwriteln(500);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0620:
	{
 		if (skipdoall('p000e0620')) break p000e0620;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0620;
 		}
		if (!CNDnoteq(34,255)) break p000e0620;
		if (!CNDeq(51,255)) break p000e0620;
 		ACCwriteln(501);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0621:
	{
 		if (skipdoall('p000e0621')) break p000e0621;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0621;
 		}
		if (!CNDnoteq(51,255)) break p000e0621;
		if (!CNDpresent(getFlag(51))) break p000e0621;
 		ACCwriteln(502);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0622:
	{
 		if (skipdoall('p000e0622')) break p000e0622;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0622;
 		}
		if (!CNDnoteq(51,255)) break p000e0622;
		if (!CNDabsent(getFlag(51))) break p000e0622;
 		ACCwriteln(503);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0623:
	{
 		if (skipdoall('p000e0623')) break p000e0623;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0623;
 		}
		if (!CNDeq(34,255)) break p000e0623;
		if (!CNDbnotzero(12,1)) break p000e0623;
 		ACCwriteln(504);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0624:
	{
 		if (skipdoall('p000e0624')) break p000e0624;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0624;
 		}
		if (!CNDeq(34,255)) break p000e0624;
		if (!CNDbzero(12,1)) break p000e0624;
 		ACCwriteln(505);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0625:
	{
 		if (skipdoall('p000e0625')) break p000e0625;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0625;
 		}
		if (!CNDnoteq(34,255)) break p000e0625;
		if (!CNDeq(51,255)) break p000e0625;
 		ACCwriteln(506);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0626:
	{
 		if (skipdoall('p000e0626')) break p000e0626;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0626;
 		}
		if (!CNDnoteq(51,255)) break p000e0626;
		if (!CNDpresent(getFlag(51))) break p000e0626;
 		ACCwriteln(507);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0627:
	{
 		if (skipdoall('p000e0627')) break p000e0627;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0627;
 		}
		if (!CNDnoteq(51,255)) break p000e0627;
		if (!CNDabsent(getFlag(51))) break p000e0627;
 		ACCwriteln(508);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0628:
	{
 		if (skipdoall('p000e0628')) break p000e0628;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0628;
 		}
		if (!CNDeq(34,255)) break p000e0628;
		if (!CNDbnotzero(12,1)) break p000e0628;
 		ACCwriteln(509);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0629:
	{
 		if (skipdoall('p000e0629')) break p000e0629;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0629;
 		}
		if (!CNDeq(34,255)) break p000e0629;
		if (!CNDbzero(12,1)) break p000e0629;
 		ACCwriteln(510);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0630:
	{
 		if (skipdoall('p000e0630')) break p000e0630;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0630;
 		}
		if (!CNDnoteq(34,255)) break p000e0630;
		if (!CNDnoteq(51,255)) break p000e0630;
		if (!CNDonotzero(getFlag(51),3)) break p000e0630;
		if (!CNDpresent(getFlag(51))) break p000e0630;
 		ACCwriteln(511);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0631:
	{
 		if (skipdoall('p000e0631')) break p000e0631;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0631;
 		}
		if (!CNDnoteq(34,255)) break p000e0631;
		if (!CNDnoteq(51,255)) break p000e0631;
		if (!CNDonotzero(getFlag(51),3)) break p000e0631;
		if (!CNDabsent(getFlag(51))) break p000e0631;
 		ACCwriteln(512);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0632:
	{
 		if (skipdoall('p000e0632')) break p000e0632;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0632;
 		}
		if (!CNDnoteq(34,255)) break p000e0632;
		if (!CNDeq(51,255)) break p000e0632;
 		ACCwriteln(513);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0633:
	{
 		if (skipdoall('p000e0633')) break p000e0633;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0633;
 		}
		if (!CNDnoteq(51,255)) break p000e0633;
		if (!CNDpresent(getFlag(51))) break p000e0633;
 		ACCwriteln(514);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0634:
	{
 		if (skipdoall('p000e0634')) break p000e0634;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0634;
 		}
		if (!CNDnoteq(51,255)) break p000e0634;
		if (!CNDabsent(getFlag(51))) break p000e0634;
 		ACCwriteln(515);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0635:
	{
 		if (skipdoall('p000e0635')) break p000e0635;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0635;
 		}
		if (!CNDeq(34,255)) break p000e0635;
		if (!CNDbnotzero(12,1)) break p000e0635;
 		ACCwriteln(516);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0636:
	{
 		if (skipdoall('p000e0636')) break p000e0636;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0636;
 		}
		if (!CNDeq(34,255)) break p000e0636;
		if (!CNDbzero(12,1)) break p000e0636;
 		ACCwriteln(517);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0637:
	{
 		if (skipdoall('p000e0637')) break p000e0637;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0637;
 		}
		if (!CNDnoteq(34,255)) break p000e0637;
		if (!CNDnoteq(51,255)) break p000e0637;
		if (!CNDonotzero(getFlag(51),3)) break p000e0637;
		if (!CNDpresent(getFlag(51))) break p000e0637;
 		ACCwriteln(518);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0638:
	{
 		if (skipdoall('p000e0638')) break p000e0638;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0638;
 		}
		if (!CNDnoteq(34,255)) break p000e0638;
		if (!CNDnoteq(51,255)) break p000e0638;
		if (!CNDonotzero(getFlag(51),3)) break p000e0638;
		if (!CNDabsent(getFlag(51))) break p000e0638;
 		ACCwriteln(519);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0639:
	{
 		if (skipdoall('p000e0639')) break p000e0639;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0639;
 		}
		if (!CNDnoteq(34,255)) break p000e0639;
		if (!CNDeq(51,255)) break p000e0639;
 		ACCwriteln(520);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0640:
	{
 		if (skipdoall('p000e0640')) break p000e0640;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0640;
 		}
		if (!CNDnoteq(51,255)) break p000e0640;
		if (!CNDpresent(getFlag(51))) break p000e0640;
 		ACCwriteln(521);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0641:
	{
 		if (skipdoall('p000e0641')) break p000e0641;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0641;
 		}
		if (!CNDnoteq(51,255)) break p000e0641;
		if (!CNDabsent(getFlag(51))) break p000e0641;
 		ACCwriteln(522);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0642:
	{
 		if (skipdoall('p000e0642')) break p000e0642;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0642;
 		}
		if (!CNDeq(34,255)) break p000e0642;
		if (!CNDbnotzero(12,1)) break p000e0642;
 		ACCwriteln(523);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0643:
	{
 		if (skipdoall('p000e0643')) break p000e0643;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0643;
 		}
		if (!CNDeq(34,255)) break p000e0643;
		if (!CNDbzero(12,1)) break p000e0643;
 		ACCwriteln(524);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0644:
	{
 		if (skipdoall('p000e0644')) break p000e0644;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0644;
 		}
		if (!CNDnoteq(34,255)) break p000e0644;
		if (!CNDnoteq(51,255)) break p000e0644;
		if (!CNDonotzero(getFlag(51),3)) break p000e0644;
		if (!CNDpresent(getFlag(51))) break p000e0644;
 		ACCwriteln(525);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0645:
	{
 		if (skipdoall('p000e0645')) break p000e0645;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0645;
 		}
		if (!CNDnoteq(34,255)) break p000e0645;
		if (!CNDnoteq(51,255)) break p000e0645;
		if (!CNDonotzero(getFlag(51),3)) break p000e0645;
		if (!CNDabsent(getFlag(51))) break p000e0645;
 		ACCwriteln(526);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0646:
	{
 		if (skipdoall('p000e0646')) break p000e0646;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0646;
 		}
		if (!CNDnoteq(34,255)) break p000e0646;
		if (!CNDeq(51,255)) break p000e0646;
 		ACCwriteln(527);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0647:
	{
 		if (skipdoall('p000e0647')) break p000e0647;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0647;
 		}
		if (!CNDnoteq(51,255)) break p000e0647;
		if (!CNDpresent(getFlag(51))) break p000e0647;
 		ACCwriteln(528);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0648:
	{
 		if (skipdoall('p000e0648')) break p000e0648;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0648;
 		}
		if (!CNDnoteq(51,255)) break p000e0648;
		if (!CNDabsent(getFlag(51))) break p000e0648;
 		ACCwriteln(529);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0649:
	{
 		if (skipdoall('p000e0649')) break p000e0649;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0649;
 		}
		if (!CNDeq(34,255)) break p000e0649;
		if (!CNDbnotzero(12,1)) break p000e0649;
 		ACCwriteln(530);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0650:
	{
 		if (skipdoall('p000e0650')) break p000e0650;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0650;
 		}
		if (!CNDeq(34,255)) break p000e0650;
		if (!CNDbzero(12,1)) break p000e0650;
 		ACCwriteln(531);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0651:
	{
 		if (skipdoall('p000e0651')) break p000e0651;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0651;
 		}
		if (!CNDnoteq(34,255)) break p000e0651;
		if (!CNDnoteq(51,255)) break p000e0651;
		if (!CNDonotzero(getFlag(51),3)) break p000e0651;
		if (!CNDpresent(getFlag(51))) break p000e0651;
 		ACCwriteln(532);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0652:
	{
 		if (skipdoall('p000e0652')) break p000e0652;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0652;
 		}
		if (!CNDnoteq(34,255)) break p000e0652;
		if (!CNDnoteq(51,255)) break p000e0652;
		if (!CNDonotzero(getFlag(51),3)) break p000e0652;
		if (!CNDabsent(getFlag(51))) break p000e0652;
 		ACCwriteln(533);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0653:
	{
 		if (skipdoall('p000e0653')) break p000e0653;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0653;
 		}
		if (!CNDnoteq(34,255)) break p000e0653;
		if (!CNDeq(51,255)) break p000e0653;
 		ACCwriteln(534);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0654:
	{
 		if (skipdoall('p000e0654')) break p000e0654;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0654;
 		}
		if (!CNDnoteq(51,255)) break p000e0654;
		if (!CNDpresent(getFlag(51))) break p000e0654;
 		ACCwriteln(535);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0655:
	{
 		if (skipdoall('p000e0655')) break p000e0655;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0655;
 		}
		if (!CNDnoteq(51,255)) break p000e0655;
		if (!CNDabsent(getFlag(51))) break p000e0655;
 		ACCwriteln(536);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0656:
	{
 		if (skipdoall('p000e0656')) break p000e0656;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0656;
 		}
		if (!CNDeq(34,255)) break p000e0656;
		if (!CNDbnotzero(12,1)) break p000e0656;
 		ACCwriteln(537);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0657:
	{
 		if (skipdoall('p000e0657')) break p000e0657;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0657;
 		}
		if (!CNDeq(34,255)) break p000e0657;
		if (!CNDbzero(12,1)) break p000e0657;
 		ACCwriteln(538);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0658:
	{
 		if (skipdoall('p000e0658')) break p000e0658;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0658;
 		}
		if (!CNDnoteq(34,255)) break p000e0658;
		if (!CNDnoteq(51,255)) break p000e0658;
		if (!CNDonotzero(getFlag(51),3)) break p000e0658;
		if (!CNDpresent(getFlag(51))) break p000e0658;
 		ACCwriteln(539);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0659:
	{
 		if (skipdoall('p000e0659')) break p000e0659;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0659;
 		}
		if (!CNDnoteq(34,255)) break p000e0659;
		if (!CNDnoteq(51,255)) break p000e0659;
		if (!CNDonotzero(getFlag(51),3)) break p000e0659;
		if (!CNDabsent(getFlag(51))) break p000e0659;
 		ACCwriteln(540);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0660:
	{
 		if (skipdoall('p000e0660')) break p000e0660;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0660;
 		}
		if (!CNDnoteq(34,255)) break p000e0660;
		if (!CNDeq(51,255)) break p000e0660;
 		ACCwriteln(541);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0661:
	{
 		if (skipdoall('p000e0661')) break p000e0661;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0661;
 		}
		if (!CNDnoteq(51,255)) break p000e0661;
		if (!CNDpresent(getFlag(51))) break p000e0661;
 		ACCwriteln(542);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0662:
	{
 		if (skipdoall('p000e0662')) break p000e0662;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0662;
 		}
		if (!CNDnoteq(51,255)) break p000e0662;
		if (!CNDabsent(getFlag(51))) break p000e0662;
 		ACCwriteln(543);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0663:
	{
 		if (skipdoall('p000e0663')) break p000e0663;
		if (!CNDlt(33,14)) break p000e0663;
		if (!CNDmove(38)) break p000e0663;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0664:
	{
 		if (skipdoall('p000e0664')) break p000e0664;
		if (!CNDlt(33,14)) break p000e0664;
 		ACCplus(33,1002);
 		ACCwrite(544);
 		ACCmes(getFlag(33));
 		ACCwrite(545);
 		ACCminus(33,1002);
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0665:
	{
 		if (skipdoall('p000e0665')) break p000e0665;
 		ACChook(546);
		if (done_flag) break pro000_restart;
		{}

	}


}
}

function pro001()
{
process_restart=true;
pro001_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p001e0000:
	{
 		if (skipdoall('p001e0000')) break p001e0000;
 		ACChook(547);
		if (done_flag) break pro001_restart;
		{}

	}

	// _ _
	p001e0001:
	{
 		if (skipdoall('p001e0001')) break p001e0001;
		if (!CNDat(0)) break p001e0001;
 		ACCtitle(548);
 		ACCbset(12,5);
 		ACCset(203);
 		ACClet(53,64);
 		ACCoclear(3,22);
 		ACCcommand(0);
 		ACCblock(549,257,17);
		{}

	}

	// _ _
	p001e0002:
	{
 		if (skipdoall('p001e0002')) break p001e0002;
		if (!CNDat(0)) break p001e0002;
		if (!CNDnotzero(255)) break p001e0002;
 		ACCgoto(2);
		{}

	}

	// _ _
	p001e0003:
	{
 		if (skipdoall('p001e0003')) break p001e0003;
		if (!CNDatgt(12)) break p001e0003;
		if (!CNDatlt(16)) break p001e0003;
 		ACCwriteln(550);
		{}

	}

	// _ _
	p001e0004:
	{
 		if (skipdoall('p001e0004')) break p001e0004;
		if (!CNDat(1)) break p001e0004;
 		ACCmessage(77);
 		ACCanykey();
 		function anykey00012() 
		{
 		ACCcls();
 		ACCgoto(2);
 		ACCdesc();
		return;
		}
 		function anykey00011() 
		{
 		ACCcls();
 		ACCmes(99);
 		ACCanykey();
 		waitKey(anykey00012);
		}
 		waitKey(anykey00011);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0005:
	{
 		if (skipdoall('p001e0005')) break p001e0005;
		if (!CNDat(1)) break p001e0005;
 		ACCcls();
 		ACCset(255);
 		ACCgoto(2);
		{}

	}

	// _ _
	p001e0006:
	{
 		if (skipdoall('p001e0006')) break p001e0006;
		if (!CNDat(2)) break p001e0006;
 		ACCability(5,255);
 		ACClet(53,64);
 		ACCgoto(3);
 		ACCdesc();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0007:
	{
 		if (skipdoall('p001e0007')) break p001e0007;
 		ACCtime(47,1);
		{}

	}

	// _ _
	p001e0008:
	{
 		if (skipdoall('p001e0008')) break p001e0008;
		if (!CNDat(17)) break p001e0008;
		if (!CNDlt(103,255)) break p001e0008;
 		ACCwriteln(551);
		{}

	}

	// _ _
	p001e0009:
	{
 		if (skipdoall('p001e0009')) break p001e0009;
		if (!CNDat(20)) break p001e0009;
		if (!CNDzero(101)) break p001e0009;
 		ACClet(101,1);
		{}

	}

	// _ _
	p001e0010:
	{
 		if (skipdoall('p001e0010')) break p001e0010;
		if (!CNDnotat(19)) break p001e0010;
		if (!CNDeq(101,1)) break p001e0010;
 		ACClet(101,2);
		{}

	}

	// _ _
	p001e0011:
	{
 		if (skipdoall('p001e0011')) break p001e0011;
		if (!CNDat(20)) break p001e0011;
		if (!CNDeq(101,2)) break p001e0011;
 		ACCwriteln(552);
		{}

	}

	// _ _
	p001e0012:
	{
 		if (skipdoall('p001e0012')) break p001e0012;
		if (!CNDat(20)) break p001e0012;
		if (!CNDeq(101,3)) break p001e0012;
 		ACCwriteln(553);
		{}

	}

	// _ _
	p001e0013:
	{
 		if (skipdoall('p001e0013')) break p001e0013;
		if (!CNDat(12)) break p001e0013;
		if (!CNDzero(102)) break p001e0013;
 		ACClet(102,1);
		{}

	}

	// _ _
	p001e0014:
	{
 		if (skipdoall('p001e0014')) break p001e0014;
		if (!CNDnotat(12)) break p001e0014;
		if (!CNDeq(102,1)) break p001e0014;
 		ACClet(102,2);
		{}

	}

	// _ _
	p001e0015:
	{
 		if (skipdoall('p001e0015')) break p001e0015;
		if (!CNDat(12)) break p001e0015;
		if (!CNDeq(102,2)) break p001e0015;
 		ACClet(102,3);
		{}

	}

	// _ _
	p001e0016:
	{
 		if (skipdoall('p001e0016')) break p001e0016;
		if (!CNDnotat(12)) break p001e0016;
		if (!CNDeq(102,3)) break p001e0016;
 		ACClet(102,4);
		{}

	}

	// _ _
	p001e0017:
	{
 		if (skipdoall('p001e0017')) break p001e0017;
		if (!CNDat(26)) break p001e0017;
 		ACCwrite(554);
		if (!CNDeq(101,4)) break p001e0017;
		if (!CNDlt(140,3)) break p001e0017;
 		ACCwriteln(555);
		{}

	}

	//  _
	p001e0018:
	{
 		if (skipdoall('p001e0018')) break p001e0018;
 		if (in_response)
		{
			if (!CNDverb(3)) break p001e0018;
 		}
		if (!CNDat(26)) break p001e0018;
		if (!CNDeq(101,4)) break p001e0018;
		if (!CNDeq(140,3)) break p001e0018;
 		ACCwriteln(556);
		{}

	}

	// _ _
	p001e0019:
	{
 		if (skipdoall('p001e0019')) break p001e0019;
		if (!CNDat(26)) break p001e0019;
		if (!CNDeq(140,0)) break p001e0019;
 		ACCpicture(26);
 		ACCmes(53);
 		ACCmes(55);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0020:
	{
 		if (skipdoall('p001e0020')) break p001e0020;
		if (!CNDat(26)) break p001e0020;
		if (!CNDeq(140,1)) break p001e0020;
 		ACCpicture(26);
 		ACCmes(53);
 		ACCmes(56);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0021:
	{
 		if (skipdoall('p001e0021')) break p001e0021;
		if (!CNDat(26)) break p001e0021;
		if (!CNDeq(140,2)) break p001e0021;
 		ACCpicture(259);
 		ACCmes(53);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0022:
	{
 		if (skipdoall('p001e0022')) break p001e0022;
		if (!CNDat(26)) break p001e0022;
		if (!CNDeq(140,3)) break p001e0022;
 		ACCpicture(27);
 		ACCwriteln(557);
		{}

	}

	// _ _
	p001e0023:
	{
 		if (skipdoall('p001e0023')) break p001e0023;
		if (!CNDat(26)) break p001e0023;
		if (!CNDeq(101,4)) break p001e0023;
		if (!CNDeq(140,3)) break p001e0023;
 		ACCset(101);
 		ACCnewline();
 		ACCwriteln(558);
 		ACCwrite(559);
 		ACCwriteln(560);
 		ACCplace(2,18);
		{}

	}

	// _ _
	p001e0024:
	{
 		if (skipdoall('p001e0024')) break p001e0024;
		if (!CNDeq(101,4)) break p001e0024;
 		ACCplus(100,1);
		if (!CNDeq(100,2)) break p001e0024;
 		ACCclear(100);
		{}

	}

	// _ _
	p001e0025:
	{
 		if (skipdoall('p001e0025')) break p001e0025;
		if (!CNDeq(101,4)) break p001e0025;
		if (!CNDzero(100)) break p001e0025;
		if (!CNDnotat(26)) break p001e0025;
 		ACCnewline();
 		ACCwriteln(561);
		{}

	}

	// _ _
	p001e0026:
	{
 		if (skipdoall('p001e0026')) break p001e0026;
		if (!CNDeq(101,4)) break p001e0026;
		if (!CNDeq(100,1)) break p001e0026;
		if (!CNDnotat(26)) break p001e0026;
 		ACCnewline();
 		ACCwriteln(562);
		{}

	}

	// _ _
	p001e0027:
	{
 		if (skipdoall('p001e0027')) break p001e0027;
		if (!CNDat(12)) break p001e0027;
 		ACCwrite(563);
		{}

	}

	// _ _
	p001e0028:
	{
 		if (skipdoall('p001e0028')) break p001e0028;
		if (!CNDat(12)) break p001e0028;
		if (!CNDlt(102,255)) break p001e0028;
 		ACCwriteln(564);
		{}

	}

	// _ _
	p001e0029:
	{
 		if (skipdoall('p001e0029')) break p001e0029;
		if (!CNDat(12)) break p001e0029;
		if (!CNDeq(102,255)) break p001e0029;
 		ACCwriteln(565);
		{}

	}

	// _ _
	p001e0030:
	{
 		if (skipdoall('p001e0030')) break p001e0030;
		if (!CNDat(29)) break p001e0030;
 		ACCcommand(0);
 		ACCwrite(566);
 		ACCprint(31);
 		ACCwriteln(567);
 		ACCnewline();
 		ACCwriteln(568);
		{}

	}

	// _ _
	p001e0031:
	{
 		if (skipdoall('p001e0031')) break p001e0031;
		if (!CNDislight()) break p001e0031;
 		ACClistobj();
 		ACClistnpc(getFlag(38));
		{}

	}


}
}

function pro002()
{
process_restart=true;
pro002_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p002e0000:
	{
 		if (skipdoall('p002e0000')) break p002e0000;
 		ACChook(569);
		if (done_flag) break pro002_restart;
		{}

	}


}
}

function pro003()
{
process_restart=true;
pro003_restart: while(process_restart)
{
	process_restart=false;
	// AYUDA _
	p003e0000:
	{
 		if (skipdoall('p003e0000')) break p003e0000;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0000;
 		}
		if (!CNDnotzero(5)) break p003e0000;
 		ACCmessage(96);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0001:
	{
 		if (skipdoall('p003e0001')) break p003e0001;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0001;
 		}
		if (!CNDat(11)) break p003e0001;
		if (!CNDabsent(0)) break p003e0001;
 		ACCmessage(8);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0002:
	{
 		if (skipdoall('p003e0002')) break p003e0002;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0002;
 		}
		if (!CNDatgt(12)) break p003e0002;
		if (!CNDatlt(16)) break p003e0002;
 		ACCmessage(9);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0003:
	{
 		if (skipdoall('p003e0003')) break p003e0003;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0003;
 		}
		if (!CNDat(26)) break p003e0003;
		if (!CNDeq(140,0)) break p003e0003;
 		ACCmessage(10);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0004:
	{
 		if (skipdoall('p003e0004')) break p003e0004;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0004;
 		}
		if (!CNDat(26)) break p003e0004;
		if (!CNDeq(140,3)) break p003e0004;
 		ACCwriteln(570);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0005:
	{
 		if (skipdoall('p003e0005')) break p003e0005;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0005;
 		}
		if (!CNDat(23)) break p003e0005;
 		ACCwriteln(571);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0006:
	{
 		if (skipdoall('p003e0006')) break p003e0006;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0006;
 		}
		if (!CNDat(20)) break p003e0006;
		if (!CNDnotcarr(0)) break p003e0006;
 		ACCmessage(8);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// _ _
	p003e0007:
	{
 		if (skipdoall('p003e0007')) break p003e0007;
		if (!CNDchance(10)) break p003e0007;
 		ACCmessage(36);
		{}

	}

	// _ _
	p003e0008:
	{
 		if (skipdoall('p003e0008')) break p003e0008;
 		ACCmessage(11);
 		ACCnewline();
 		ACCwriteln(572);
 		ACChelp();
 		ACCdone();
		break pro003_restart;
		{}

	}


}
}

function pro004()
{
process_restart=true;
pro004_restart: while(process_restart)
{
	process_restart=false;
	// EX ESTRU
	p004e0000:
	{
 		if (skipdoall('p004e0000')) break p004e0000;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0000;
			if (!CNDnoun1(114)) break p004e0000;
 		}
		if (!CNDat(21)) break p004e0000;
 		ACCwriteln(573);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESTRU
	p004e0001:
	{
 		if (skipdoall('p004e0001')) break p004e0001;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0001;
			if (!CNDnoun1(114)) break p004e0001;
 		}
		if (!CNDat(22)) break p004e0001;
 		ACCwriteln(574);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESTRU
	p004e0002:
	{
 		if (skipdoall('p004e0002')) break p004e0002;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0002;
			if (!CNDnoun1(114)) break p004e0002;
 		}
		if (!CNDat(23)) break p004e0002;
 		ACClet(34,78);
		{}

	}

	// EX CAMIN
	p004e0003:
	{
 		if (skipdoall('p004e0003')) break p004e0003;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0003;
			if (!CNDnoun1(66)) break p004e0003;
 		}
		if (!CNDat(21)) break p004e0003;
 		ACCwriteln(575);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CAMIN
	p004e0004:
	{
 		if (skipdoall('p004e0004')) break p004e0004;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0004;
			if (!CNDnoun1(66)) break p004e0004;
 		}
		if (!CNDat(22)) break p004e0004;
 		ACCwriteln(576);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CAMIN
	p004e0005:
	{
 		if (skipdoall('p004e0005')) break p004e0005;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0005;
			if (!CNDnoun1(66)) break p004e0005;
 		}
		if (!CNDat(9)) break p004e0005;
 		ACCwriteln(577);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAMPA
	p004e0006:
	{
 		if (skipdoall('p004e0006')) break p004e0006;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0006;
			if (!CNDnoun1(50)) break p004e0006;
 		}
		if (!CNDpresent(0)) break p004e0006;
		if (!CNDozero(0,20)) break p004e0006;
 		ACCmessage(16);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAMPA
	p004e0007:
	{
 		if (skipdoall('p004e0007')) break p004e0007;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0007;
			if (!CNDnoun1(50)) break p004e0007;
 		}
		if (!CNDpresent(0)) break p004e0007;
		if (!CNDonotzero(0,20)) break p004e0007;
 		ACCmessage(15);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX MONED
	p004e0008:
	{
 		if (skipdoall('p004e0008')) break p004e0008;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0008;
			if (!CNDnoun1(51)) break p004e0008;
 		}
		if (!CNDpresent(1)) break p004e0008;
 		ACCmessage(17);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX TORTI
	p004e0009:
	{
 		if (skipdoall('p004e0009')) break p004e0009;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0009;
			if (!CNDnoun1(52)) break p004e0009;
 		}
		if (!CNDpresent(2)) break p004e0009;
 		ACCmessage(19);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTA
	p004e0010:
	{
 		if (skipdoall('p004e0010')) break p004e0010;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0010;
			if (!CNDnoun1(101)) break p004e0010;
 		}
		if (!CNDpresent(6)) break p004e0010;
 		ACCwriteln(578);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTEL
	p004e0011:
	{
 		if (skipdoall('p004e0011')) break p004e0011;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0011;
			if (!CNDnoun1(53)) break p004e0011;
 		}
		if (!CNDpresent(3)) break p004e0011;
		if (!CNDozero(3,22)) break p004e0011;
 		ACCwriteln(579);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTEL
	p004e0012:
	{
 		if (skipdoall('p004e0012')) break p004e0012;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0012;
			if (!CNDnoun1(53)) break p004e0012;
 		}
		if (!CNDpresent(3)) break p004e0012;
		if (!CNDonotzero(3,22)) break p004e0012;
 		ACCwriteln(580);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LLAVE
	p004e0013:
	{
 		if (skipdoall('p004e0013')) break p004e0013;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0013;
			if (!CNDnoun1(54)) break p004e0013;
 		}
		if (!CNDpresent(4)) break p004e0013;
 		ACCmessage(21);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PILA
	p004e0014:
	{
 		if (skipdoall('p004e0014')) break p004e0014;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0014;
			if (!CNDnoun1(55)) break p004e0014;
 		}
		if (!CNDpresent(5)) break p004e0014;
 		ACCmessage(22);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0015:
	{
 		if (skipdoall('p004e0015')) break p004e0015;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0015;
			if (!CNDnoun1(56)) break p004e0015;
 		}
		if (!CNDat(3)) break p004e0015;
 		ACCwriteln(581);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0016:
	{
 		if (skipdoall('p004e0016')) break p004e0016;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0016;
			if (!CNDnoun1(56)) break p004e0016;
 		}
		if (!CNDat(8)) break p004e0016;
 		ACCwriteln(582);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX HUMO
	p004e0017:
	{
 		if (skipdoall('p004e0017')) break p004e0017;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0017;
			if (!CNDnoun1(122)) break p004e0017;
 		}
		if (!CNDat(8)) break p004e0017;
 		ACCwriteln(583);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX FUEGO
	p004e0018:
	{
 		if (skipdoall('p004e0018')) break p004e0018;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0018;
			if (!CNDnoun1(123)) break p004e0018;
 		}
		if (!CNDat(8)) break p004e0018;
 		ACCwriteln(584);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESPIRAL
	p004e0019:
	{
 		if (skipdoall('p004e0019')) break p004e0019;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0019;
			if (!CNDnoun1(78)) break p004e0019;
 		}
		if (!CNDat(8)) break p004e0019;
 		ACCwriteln(585);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0020:
	{
 		if (skipdoall('p004e0020')) break p004e0020;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0020;
			if (!CNDnoun1(56)) break p004e0020;
 		}
		if (!CNDat(26)) break p004e0020;
 		ACCwriteln(586);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOCA
	p004e0021:
	{
 		if (skipdoall('p004e0021')) break p004e0021;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0021;
			if (!CNDnoun1(111)) break p004e0021;
 		}
		if (!CNDat(10)) break p004e0021;
 		ACCwriteln(587);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0022:
	{
 		if (skipdoall('p004e0022')) break p004e0022;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0022;
			if (!CNDnoun1(57)) break p004e0022;
 		}
		if (!CNDat(11)) break p004e0022;
		if (!CNDpresent(0)) break p004e0022;
		if (!CNDonotzero(0,20)) break p004e0022;
 		ACCwrite(588);
 		ACCpause(15);
 		function anykey00013() 
		{
 		ACCwriteln(589);
 		ACCdone();
		return;
		}
 		waitKey(anykey00013);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0023:
	{
 		if (skipdoall('p004e0023')) break p004e0023;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0023;
			if (!CNDnoun1(57)) break p004e0023;
 		}
		if (!CNDat(11)) break p004e0023;
		if (!CNDislight()) break p004e0023;
		if (!CNDzero(120)) break p004e0023;
 		ACCwrite(590);
 		ACCpause(15);
 		function anykey00014() 
		{
 		ACCwriteln(591);
 		ACCcreate(1);
 		ACCset(120);
 		ACCdone();
		return;
		}
 		waitKey(anykey00014);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0024:
	{
 		if (skipdoall('p004e0024')) break p004e0024;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0024;
			if (!CNDnoun1(57)) break p004e0024;
 		}
		if (!CNDat(3)) break p004e0024;
 		ACCwriteln(592);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0025:
	{
 		if (skipdoall('p004e0025')) break p004e0025;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0025;
			if (!CNDnoun1(58)) break p004e0025;
 		}
		if (!CNDat(3)) break p004e0025;
 		ACCwriteln(593);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0026:
	{
 		if (skipdoall('p004e0026')) break p004e0026;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0026;
			if (!CNDnoun1(57)) break p004e0026;
 		}
		if (!CNDat(24)) break p004e0026;
 		ACCwriteln(594);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0027:
	{
 		if (skipdoall('p004e0027')) break p004e0027;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0027;
			if (!CNDnoun1(58)) break p004e0027;
 		}
		if (!CNDat(24)) break p004e0027;
 		ACCwriteln(595);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0028:
	{
 		if (skipdoall('p004e0028')) break p004e0028;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0028;
			if (!CNDnoun1(80)) break p004e0028;
 		}
		if (!CNDat(24)) break p004e0028;
 		ACCwriteln(596);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LECHO
	p004e0029:
	{
 		if (skipdoall('p004e0029')) break p004e0029;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0029;
			if (!CNDnoun1(86)) break p004e0029;
 		}
		if (!CNDat(24)) break p004e0029;
 		ACCwriteln(597);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0030:
	{
 		if (skipdoall('p004e0030')) break p004e0030;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0030;
			if (!CNDnoun1(80)) break p004e0030;
 		}
		if (!CNDat(25)) break p004e0030;
 		ACCwriteln(598);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LECHO
	p004e0031:
	{
 		if (skipdoall('p004e0031')) break p004e0031;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0031;
			if (!CNDnoun1(86)) break p004e0031;
 		}
		if (!CNDat(25)) break p004e0031;
 		ACCwriteln(599);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0032:
	{
 		if (skipdoall('p004e0032')) break p004e0032;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0032;
			if (!CNDnoun1(57)) break p004e0032;
 		}
		if (!CNDat(25)) break p004e0032;
 		ACCwriteln(600);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0033:
	{
 		if (skipdoall('p004e0033')) break p004e0033;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0033;
			if (!CNDnoun1(56)) break p004e0033;
 		}
		if (!CNDat(4)) break p004e0033;
 		ACCwriteln(601);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0034:
	{
 		if (skipdoall('p004e0034')) break p004e0034;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0034;
			if (!CNDnoun1(58)) break p004e0034;
 		}
		if (!CNDat(3)) break p004e0034;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0035:
	{
 		if (skipdoall('p004e0035')) break p004e0035;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0035;
			if (!CNDnoun1(58)) break p004e0035;
 		}
		if (!CNDat(6)) break p004e0035;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0036:
	{
 		if (skipdoall('p004e0036')) break p004e0036;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0036;
			if (!CNDnoun1(58)) break p004e0036;
 		}
		if (!CNDat(8)) break p004e0036;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0037:
	{
 		if (skipdoall('p004e0037')) break p004e0037;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0037;
			if (!CNDnoun1(58)) break p004e0037;
 		}
		if (!CNDat(17)) break p004e0037;
		if (!CNDlt(103,2)) break p004e0037;
 		ACCmessage(72);
 		ACClet(103,1);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0038:
	{
 		if (skipdoall('p004e0038')) break p004e0038;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0038;
			if (!CNDnoun1(58)) break p004e0038;
 		}
		if (!CNDat(16)) break p004e0038;
 		ACCwriteln(602);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0039:
	{
 		if (skipdoall('p004e0039')) break p004e0039;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0039;
			if (!CNDnoun1(58)) break p004e0039;
 		}
		if (!CNDatgt(12)) break p004e0039;
		if (!CNDatlt(24)) break p004e0039;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VOLCA
	p004e0040:
	{
 		if (skipdoall('p004e0040')) break p004e0040;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0040;
			if (!CNDnoun1(62)) break p004e0040;
 		}
		if (!CNDatgt(5)) break p004e0040;
		if (!CNDatlt(10)) break p004e0040;
 		ACCmessage(27);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAVA
	p004e0041:
	{
 		if (skipdoall('p004e0041')) break p004e0041;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0041;
			if (!CNDnoun1(63)) break p004e0041;
 		}
		if (!CNDat(6)) break p004e0041;
 		ACCwriteln(603);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAVA
	p004e0042:
	{
 		if (skipdoall('p004e0042')) break p004e0042;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0042;
			if (!CNDnoun1(63)) break p004e0042;
 		}
		if (!CNDat(12)) break p004e0042;
 		ACCwriteln(604);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PRECI
	p004e0043:
	{
 		if (skipdoall('p004e0043')) break p004e0043;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0043;
			if (!CNDnoun1(67)) break p004e0043;
 		}
		if (!CNDat(9)) break p004e0043;
 		ACCwriteln(605);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ENANO
	p004e0044:
	{
 		if (skipdoall('p004e0044')) break p004e0044;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0044;
			if (!CNDnoun1(68)) break p004e0044;
 		}
		if (!CNDat(12)) break p004e0044;
		if (!CNDlt(102,255)) break p004e0044;
 		ACCwriteln(606);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX COLIN
	p004e0045:
	{
 		if (skipdoall('p004e0045')) break p004e0045;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0045;
			if (!CNDnoun1(65)) break p004e0045;
 		}
		if (!CNDat(6)) break p004e0045;
 		ACCwriteln(607);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ROCA
	p004e0046:
	{
 		if (skipdoall('p004e0046')) break p004e0046;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0046;
			if (!CNDnoun1(119)) break p004e0046;
 		}
		if (!CNDat(7)) break p004e0046;
 		ACCwriteln(608);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESPINO
	p004e0047:
	{
 		if (skipdoall('p004e0047')) break p004e0047;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0047;
			if (!CNDnoun1(121)) break p004e0047;
 		}
		if (!CNDat(5)) break p004e0047;
 		ACCwriteln(609);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX HABIT
	p004e0048:
	{
 		if (skipdoall('p004e0048')) break p004e0048;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0048;
			if (!CNDnoun1(69)) break p004e0048;
 		}
		if (!CNDat(10)) break p004e0048;
 		ACCdesc();
		break pro004_restart;
		{}

	}

	// EX VENTA
	p004e0049:
	{
 		if (skipdoall('p004e0049')) break p004e0049;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0049;
			if (!CNDnoun1(73)) break p004e0049;
 		}
		if (!CNDat(10)) break p004e0049;
 		ACCmessage(30);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESCAL
	p004e0050:
	{
 		if (skipdoall('p004e0050')) break p004e0050;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0050;
			if (!CNDnoun1(74)) break p004e0050;
 		}
		if (!CNDat(10)) break p004e0050;
 		ACCmessage(31);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX DESCO
	p004e0051:
	{
 		if (skipdoall('p004e0051')) break p004e0051;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0051;
			if (!CNDnoun1(71)) break p004e0051;
 		}
		if (!CNDat(10)) break p004e0051;
 		ACCwriteln(610);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PARED
	p004e0052:
	{
 		if (skipdoall('p004e0052')) break p004e0052;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0052;
			if (!CNDnoun1(70)) break p004e0052;
 		}
		if (!CNDat(10)) break p004e0052;
 		ACCwriteln(611);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX SUELO
	p004e0053:
	{
 		if (skipdoall('p004e0053')) break p004e0053;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0053;
			if (!CNDnoun1(72)) break p004e0053;
 		}
		if (!CNDat(10)) break p004e0053;
 		ACCwriteln(612);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESCAL
	p004e0054:
	{
 		if (skipdoall('p004e0054')) break p004e0054;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0054;
			if (!CNDnoun1(74)) break p004e0054;
 		}
		if (!CNDat(11)) break p004e0054;
		if (!CNDpresent(0)) break p004e0054;
		if (!CNDonotzero(0,20)) break p004e0054;
 		ACCmessage(32);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CHARC
	p004e0055:
	{
 		if (skipdoall('p004e0055')) break p004e0055;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0055;
			if (!CNDnoun1(75)) break p004e0055;
 		}
		if (!CNDat(11)) break p004e0055;
		if (!CNDislight()) break p004e0055;
		if (!CNDzero(120)) break p004e0055;
 		ACCwrite(613);
 		ACCpause(10);
 		function anykey00015() 
		{
 		ACCwriteln(614);
 		ACCcreate(1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00015);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX CHARC
	p004e0056:
	{
 		if (skipdoall('p004e0056')) break p004e0056;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0056;
			if (!CNDnoun1(75)) break p004e0056;
 		}
		if (!CNDat(11)) break p004e0056;
		if (!CNDislight()) break p004e0056;
 		ACCwrite(615);
 		ACCpause(10);
 		function anykey00016() 
		{
 		ACCwriteln(616);
 		ACCdone();
		return;
		}
 		waitKey(anykey00016);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX ESPIRAL
	p004e0057:
	{
 		if (skipdoall('p004e0057')) break p004e0057;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0057;
			if (!CNDnoun1(78)) break p004e0057;
 		}
		if (!CNDat(23)) break p004e0057;
 		ACCwriteln(617);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX MESA
	p004e0058:
	{
 		if (skipdoall('p004e0058')) break p004e0058;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0058;
			if (!CNDnoun1(82)) break p004e0058;
 		}
		if (!CNDat(18)) break p004e0058;
 		ACCmessage(34);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX SILLA
	p004e0059:
	{
 		if (skipdoall('p004e0059')) break p004e0059;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0059;
			if (!CNDnoun1(83)) break p004e0059;
 		}
		if (!CNDat(18)) break p004e0059;
 		ACCmessage(34);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX GRIETA
	p004e0060:
	{
 		if (skipdoall('p004e0060')) break p004e0060;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0060;
			if (!CNDnoun1(87)) break p004e0060;
 		}
		if (!CNDat(25)) break p004e0060;
 		ACCwriteln(618);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PUERT
	p004e0061:
	{
 		if (skipdoall('p004e0061')) break p004e0061;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0061;
			if (!CNDnoun1(89)) break p004e0061;
 		}
		if (!CNDat(26)) break p004e0061;
		if (!CNDlt(140,2)) break p004e0061;
 		ACCwriteln(619);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX DEPRE
	p004e0062:
	{
 		if (skipdoall('p004e0062')) break p004e0062;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0062;
			if (!CNDnoun1(88)) break p004e0062;
 		}
		if (!CNDat(26)) break p004e0062;
 		ACCwriteln(620);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0063:
	{
 		if (skipdoall('p004e0063')) break p004e0063;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0063;
			if (!CNDnoun1(80)) break p004e0063;
 		}
		if (!CNDat(26)) break p004e0063;
 		ACCwriteln(621);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ENTRADA
	p004e0064:
	{
 		if (skipdoall('p004e0064')) break p004e0064;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0064;
			if (!CNDnoun1(110)) break p004e0064;
 		}
		if (!CNDat(26)) break p004e0064;
 		ACCwriteln(622);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0065:
	{
 		if (skipdoall('p004e0065')) break p004e0065;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0065;
			if (!CNDnoun1(90)) break p004e0065;
 		}
		if (!CNDat(26)) break p004e0065;
		if (!CNDeq(140,0)) break p004e0065;
 		ACCwriteln(623);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0066:
	{
 		if (skipdoall('p004e0066')) break p004e0066;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0066;
			if (!CNDnoun1(90)) break p004e0066;
 		}
		if (!CNDat(26)) break p004e0066;
		if (!CNDeq(140,1)) break p004e0066;
 		ACCwriteln(624);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0067:
	{
 		if (skipdoall('p004e0067')) break p004e0067;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0067;
			if (!CNDnoun1(90)) break p004e0067;
 		}
		if (!CNDat(26)) break p004e0067;
		if (!CNDeq(140,2)) break p004e0067;
 		ACCwriteln(625);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CANON
	p004e0068:
	{
 		if (skipdoall('p004e0068')) break p004e0068;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0068;
			if (!CNDnoun1(120)) break p004e0068;
 		}
		if (!CNDat(28)) break p004e0068;
 		ACCwriteln(626);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CASCA
	p004e0069:
	{
 		if (skipdoall('p004e0069')) break p004e0069;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0069;
			if (!CNDnoun1(92)) break p004e0069;
 		}
		if (!CNDat(28)) break p004e0069;
 		ACCwriteln(627);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PRECI
	p004e0070:
	{
 		if (skipdoall('p004e0070')) break p004e0070;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0070;
			if (!CNDnoun1(67)) break p004e0070;
 		}
		if (!CNDat(28)) break p004e0070;
 		ACCwriteln(628);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CORTADO
	p004e0071:
	{
 		if (skipdoall('p004e0071')) break p004e0071;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0071;
			if (!CNDnoun1(118)) break p004e0071;
 		}
		if (!CNDat(28)) break p004e0071;
 		ACCwriteln(629);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// _ CARTE
	p004e0072:
	{
 		if (skipdoall('p004e0072')) break p004e0072;
 		if (in_response)
		{
			if (!CNDnoun1(93)) break p004e0072;
 		}
		if (!CNDat(18)) break p004e0072;
 		ACCmessage(13);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0073:
	{
 		if (skipdoall('p004e0073')) break p004e0073;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0073;
			if (!CNDnoun1(104)) break p004e0073;
 		}
		if (!CNDat(20)) break p004e0073;
		if (!CNDpresent(0)) break p004e0073;
		if (!CNDonotzero(0,20)) break p004e0073;
		if (!CNDeq(101,2)) break p004e0073;
 		ACCmessage(63);
 		ACClet(101,3);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0074:
	{
 		if (skipdoall('p004e0074')) break p004e0074;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0074;
			if (!CNDnoun1(104)) break p004e0074;
 		}
		if (!CNDat(20)) break p004e0074;
		if (!CNDeq(101,2)) break p004e0074;
 		ACCmessage(64);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BRILL
	p004e0075:
	{
 		if (skipdoall('p004e0075')) break p004e0075;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0075;
			if (!CNDnoun1(107)) break p004e0075;
 		}
		if (!CNDat(17)) break p004e0075;
		if (!CNDlt(103,2)) break p004e0075;
 		ACCmessage(72);
 		ACClet(103,1);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0076:
	{
 		if (skipdoall('p004e0076')) break p004e0076;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0076;
 		}
		if (!CNDisnotlight()) break p004e0076;
 		ACCwriteln(630);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0077:
	{
 		if (skipdoall('p004e0077')) break p004e0077;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0077;
 		}
		if (!CNDprep(4)) break p004e0077;
		if (!CNDeq(34,255)) break p004e0077;
		if (!CNDbnotzero(12,1)) break p004e0077;
 		ACCwriteln(631);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0078:
	{
 		if (skipdoall('p004e0078')) break p004e0078;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0078;
 		}
		if (!CNDprep(4)) break p004e0078;
		if (!CNDeq(34,255)) break p004e0078;
		if (!CNDbzero(12,1)) break p004e0078;
 		ACCwriteln(632);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0079:
	{
 		if (skipdoall('p004e0079')) break p004e0079;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0079;
 		}
		if (!CNDeq(34,255)) break p004e0079;
		if (!CNDbnotzero(12,1)) break p004e0079;
 		ACCwriteln(633);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0080:
	{
 		if (skipdoall('p004e0080')) break p004e0080;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0080;
 		}
		if (!CNDeq(34,255)) break p004e0080;
		if (!CNDbzero(12,1)) break p004e0080;
 		ACCwriteln(634);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0081:
	{
 		if (skipdoall('p004e0081')) break p004e0081;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0081;
 		}
		if (!CNDprep(4)) break p004e0081;
		if (!CNDnoteq(51,255)) break p004e0081;
		if (!CNDonotzero(getFlag(51),3)) break p004e0081;
		if (!CNDpresent(getFlag(51))) break p004e0081;
 		ACCwriteln(635);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0082:
	{
 		if (skipdoall('p004e0082')) break p004e0082;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0082;
 		}
		if (!CNDnoteq(51,255)) break p004e0082;
		if (!CNDonotzero(getFlag(51),3)) break p004e0082;
		if (!CNDabsent(getFlag(51))) break p004e0082;
 		ACCwriteln(636);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0083:
	{
 		if (skipdoall('p004e0083')) break p004e0083;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0083;
 		}
		if (!CNDnoteq(34,255)) break p004e0083;
		if (!CNDnoteq(51,255)) break p004e0083;
		if (!CNDonotzero(getFlag(51),3)) break p004e0083;
		if (!CNDpresent(getFlag(51))) break p004e0083;
 		ACCwriteln(637);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0084:
	{
 		if (skipdoall('p004e0084')) break p004e0084;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0084;
 		}
		if (!CNDnoteq(34,255)) break p004e0084;
		if (!CNDnoteq(51,255)) break p004e0084;
		if (!CNDonotzero(getFlag(51),3)) break p004e0084;
		if (!CNDabsent(getFlag(51))) break p004e0084;
 		ACCwriteln(638);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0085:
	{
 		if (skipdoall('p004e0085')) break p004e0085;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0085;
 		}
		if (!CNDprep(4)) break p004e0085;
		if (!CNDnoteq(34,255)) break p004e0085;
		if (!CNDeq(51,255)) break p004e0085;
 		ACCwriteln(639);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0086:
	{
 		if (skipdoall('p004e0086')) break p004e0086;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0086;
 		}
		if (!CNDnoteq(34,255)) break p004e0086;
		if (!CNDeq(51,255)) break p004e0086;
 		ACCwriteln(640);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0087:
	{
 		if (skipdoall('p004e0087')) break p004e0087;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0087;
 		}
		if (!CNDnoteq(51,255)) break p004e0087;
		if (!CNDpresent(getFlag(51))) break p004e0087;
		if (!CNDonotzero(getFlag(51),2)) break p004e0087;
		if (!CNDonotzero(getFlag(51),16)) break p004e0087;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0087;
 		ACCwrite(641);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(642);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0088:
	{
 		if (skipdoall('p004e0088')) break p004e0088;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0088;
 		}
		if (!CNDnoteq(51,255)) break p004e0088;
		if (!CNDpresent(getFlag(51))) break p004e0088;
		if (!CNDonotzero(getFlag(51),2)) break p004e0088;
		if (!CNDozero(getFlag(51),13)) break p004e0088;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0088;
 		ACCwrite(643);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(644);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0089:
	{
 		if (skipdoall('p004e0089')) break p004e0089;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0089;
 		}
		if (!CNDnoteq(51,255)) break p004e0089;
		if (!CNDpresent(getFlag(51))) break p004e0089;
		if (!CNDonotzero(getFlag(51),2)) break p004e0089;
		if (!CNDonotzero(getFlag(51),13)) break p004e0089;
		if (!CNDonotzero(getFlag(51),14)) break p004e0089;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0089;
 		ACCwrite(645);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(646);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0090:
	{
 		if (skipdoall('p004e0090')) break p004e0090;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0090;
 		}
		if (!CNDnoteq(51,255)) break p004e0090;
		if (!CNDpresent(getFlag(51))) break p004e0090;
		if (!CNDonotzero(getFlag(51),2)) break p004e0090;
		if (!CNDonotzero(getFlag(51),13)) break p004e0090;
		if (!CNDozero(getFlag(51),14)) break p004e0090;
 		ACCwriteln(647);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0091:
	{
 		if (skipdoall('p004e0091')) break p004e0091;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0091;
 		}
		if (!CNDnoteq(51,255)) break p004e0091;
		if (!CNDpresent(getFlag(51))) break p004e0091;
		if (!CNDonotzero(getFlag(51),2)) break p004e0091;
		if (!CNDonotzero(getFlag(51),9)) break p004e0091;
		if (!CNDozero(getFlag(51),10)) break p004e0091;
 		ACCwriteln(648);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0092:
	{
 		if (skipdoall('p004e0092')) break p004e0092;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0092;
 		}
		if (!CNDnoteq(51,255)) break p004e0092;
		if (!CNDpresent(getFlag(51))) break p004e0092;
		if (!CNDonotzero(getFlag(51),18)) break p004e0092;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0092;
 		ACCwrite(649);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(650);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0093:
	{
 		if (skipdoall('p004e0093')) break p004e0093;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0093;
 		}
		if (!CNDnoteq(51,255)) break p004e0093;
		if (!CNDpresent(getFlag(51))) break p004e0093;
 		ACCwriteln(651);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0094:
	{
 		if (skipdoall('p004e0094')) break p004e0094;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0094;
 		}
		if (!CNDnoteq(51,255)) break p004e0094;
		if (!CNDabsent(getFlag(51))) break p004e0094;
 		ACCwriteln(652);
 		ACCdone();
		break pro004_restart;
		{}

	}


}
}

function pro005()
{
process_restart=true;
pro005_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p005e0000:
	{
 		if (skipdoall('p005e0000')) break p005e0000;
 		ACCpause(15);
 		function anykey00017() 
		{
 		ACCgoto(29);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00017);
		done_flag=true;
		break pro005_restart;
		{}

	}


}
}

function pro006()
{
process_restart=true;
pro006_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p006e0000:
	{
 		if (skipdoall('p006e0000')) break p006e0000;
 		ACCwriteln(653);
 		ACCpause(150);
 		function anykey00020() 
		{
 		ACCprocess(5);
		}
 		function anykey00019() 
		{
 		ACCwriteln(654);
 		ACCanykey();
 		waitKey(anykey00020);
		}
 		function anykey00018() 
		{
 		ACCmessage(43);
 		ACCpause(150);
 		waitKey(anykey00019);
		}
 		waitKey(anykey00018);
		done_flag=true;
		break pro006_restart;
		{}

	}


}
}

function pro007()
{
process_restart=true;
pro007_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p007e0000:
	{
 		if (skipdoall('p007e0000')) break p007e0000;
 		ACCmessage(41);
 		ACCpause(150);
 		function anykey00023() 
		{
 		ACCprocess(5);
		}
 		function anykey00022() 
		{
 		ACCmessage(43);
 		ACCanykey();
 		waitKey(anykey00023);
		}
 		function anykey00021() 
		{
 		ACCmessage(42);
 		ACCpause(150);
 		waitKey(anykey00022);
		}
 		waitKey(anykey00021);
		done_flag=true;
		break pro007_restart;
		{}

	}


}
}

function pro008()
{
process_restart=true;
pro008_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p008e0000:
	{
 		if (skipdoall('p008e0000')) break p008e0000;
 		ACCmessage(41);
 		ACCpause(150);
 		function anykey00025() 
		{
 		ACCmessage(43);
 		ACCprocess(5);
		}
 		function anykey00024() 
		{
 		ACCwriteln(655);
 		ACCpause(150);
 		waitKey(anykey00025);
		}
 		waitKey(anykey00024);
		done_flag=true;
		break pro008_restart;
		{}

	}


}
}

function pro009()
{
process_restart=true;
pro009_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p009e0000:
	{
 		if (skipdoall('p009e0000')) break p009e0000;
		if (!CNDparse()) break p009e0000;
		if (!CNDnoteq(101,3)) break p009e0000;
 		ACCwriteln(656);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ _
	p009e0001:
	{
 		if (skipdoall('p009e0001')) break p009e0001;
		if (!CNDeq(101,3)) break p009e0001;
		if (!CNDzero(104)) break p009e0001;
 		ACCnewline();
 		ACCwriteln(657);
 		ACCset(104);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// AYUDA _
	p009e0002:
	{
 		if (skipdoall('p009e0002')) break p009e0002;
 		if (in_response)
		{
			if (!CNDverb(34)) break p009e0002;
 		}
 		ACCwriteln(658);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// CABRON _
	p009e0003:
	{
 		if (skipdoall('p009e0003')) break p009e0003;
 		if (in_response)
		{
			if (!CNDverb(119)) break p009e0003;
 		}
 		ACClet(101,3);
		if (!CNDnotat(20)) break p009e0003;
 		ACCwriteln(659);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// CABRON _
	p009e0004:
	{
 		if (skipdoall('p009e0004')) break p009e0004;
 		if (in_response)
		{
			if (!CNDverb(119)) break p009e0004;
 		}
 		ACCwriteln(660);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ ESTAS
	p009e0005:
	{
 		if (skipdoall('p009e0005')) break p009e0005;
 		if (in_response)
		{
			if (!CNDnoun1(15)) break p009e0005;
 		}
 		ACCnewline();
 		ACCwriteln(661);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ CABAÑ
	p009e0006:
	{
 		if (skipdoall('p009e0006')) break p009e0006;
 		if (in_response)
		{
			if (!CNDnoun1(56)) break p009e0006;
 		}
 		ACCwriteln(662);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ SIGUE
	p009e0007:
	{
 		if (skipdoall('p009e0007')) break p009e0007;
 		if (in_response)
		{
			if (!CNDnoun1(106)) break p009e0007;
 		}
 		ACClet(33,120);
		{}

	}

	// ACERCATE _
	p009e0008:
	{
 		if (skipdoall('p009e0008')) break p009e0008;
 		if (in_response)
		{
			if (!CNDverb(120)) break p009e0008;
 		}
 		ACClet(101,4);
 		ACCwriteln(663);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ LLAMAS
	p009e0009:
	{
 		if (skipdoall('p009e0009')) break p009e0009;
 		if (in_response)
		{
			if (!CNDnoun1(109)) break p009e0009;
 		}
 		ACCwriteln(664);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ HOLA
	p009e0010:
	{
 		if (skipdoall('p009e0010')) break p009e0010;
 		if (in_response)
		{
			if (!CNDnoun1(115)) break p009e0010;
 		}
 		ACCwriteln(665);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ _
	p009e0011:
	{
 		if (skipdoall('p009e0011')) break p009e0011;
 		ACCwriteln(666);
 		ACCdone();
		break pro009_restart;
		{}

	}


}
}

function pro010()
{
process_restart=true;
pro010_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p010e0000:
	{
 		if (skipdoall('p010e0000')) break p010e0000;
		if (!CNDparse()) break p010e0000;
 		ACCwriteln(667);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// AYUDA _
	p010e0001:
	{
 		if (skipdoall('p010e0001')) break p010e0001;
 		if (in_response)
		{
			if (!CNDverb(34)) break p010e0001;
 		}
 		ACCwriteln(668);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ MIERDA
	p010e0002:
	{
 		if (skipdoall('p010e0002')) break p010e0002;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p010e0002;
 		}
 		ACCprocess(11);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// CABRON _
	p010e0003:
	{
 		if (skipdoall('p010e0003')) break p010e0003;
 		if (in_response)
		{
			if (!CNDverb(119)) break p010e0003;
 		}
 		ACCprocess(11);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ ESTAS
	p010e0004:
	{
 		if (skipdoall('p010e0004')) break p010e0004;
 		if (in_response)
		{
			if (!CNDnoun1(15)) break p010e0004;
 		}
 		ACCwriteln(669);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// ACERCATE _
	p010e0005:
	{
 		if (skipdoall('p010e0005')) break p010e0005;
 		if (in_response)
		{
			if (!CNDverb(120)) break p010e0005;
 		}
 		ACCwriteln(670);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ SIGUE
	p010e0006:
	{
 		if (skipdoall('p010e0006')) break p010e0006;
 		if (in_response)
		{
			if (!CNDnoun1(106)) break p010e0006;
 		}
 		ACCwriteln(671);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// BESA _
	p010e0007:
	{
 		if (skipdoall('p010e0007')) break p010e0007;
 		if (in_response)
		{
			if (!CNDverb(62)) break p010e0007;
 		}
 		ACCwriteln(672);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ LLAMAS
	p010e0008:
	{
 		if (skipdoall('p010e0008')) break p010e0008;
 		if (in_response)
		{
			if (!CNDnoun1(109)) break p010e0008;
 		}
 		ACCwriteln(673);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ HOLA
	p010e0009:
	{
 		if (skipdoall('p010e0009')) break p010e0009;
 		if (in_response)
		{
			if (!CNDnoun1(115)) break p010e0009;
 		}
 		ACCwriteln(674);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ _
	p010e0010:
	{
 		if (skipdoall('p010e0010')) break p010e0010;
 		ACCwriteln(675);
 		ACCdone();
		break pro010_restart;
		{}

	}


}
}

function pro011()
{
process_restart=true;
pro011_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p011e0000:
	{
 		if (skipdoall('p011e0000')) break p011e0000;
 		ACCset(102);
 		ACCwriteln(676);
 		ACCpause(100);
 		function anykey00028() 
		{
 		ACCprocess(6);
 		ACCok();
		return;
		}
 		function anykey00027() 
		{
 		ACCwriteln(678);
 		ACCpause(200);
 		waitKey(anykey00028);
		}
 		function anykey00026() 
		{
 		ACCwrite(677);
 		ACCpause(200);
 		waitKey(anykey00027);
		}
 		waitKey(anykey00026);
		done_flag=true;
		break pro011_restart;
		{}

	}


}
}

function pro012()
{
process_restart=true;
pro012_restart: while(process_restart)
{
	process_restart=false;

}
}

function pro013()
{
process_restart=true;
pro013_restart: while(process_restart)
{
	process_restart=false;

}
}

function pro014()
{
process_restart=true;
pro014_restart: while(process_restart)
{
	process_restart=false;

}
}

function pro015()
{
process_restart=true;
pro015_restart: while(process_restart)
{
	process_restart=false;

}
}

function pro016()
{
process_restart=true;
pro016_restart: while(process_restart)
{
	process_restart=false;

}
}

function pro017()
{
process_restart=true;
pro017_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p017e0000:
	{
 		if (skipdoall('p017e0000')) break p017e0000;
 		ACCcommand(1);
 		ACCgoto(1);
 		ACCdesc();
		break pro017_restart;
		{}

	}


}
}

last_process = 17;
// This file is (C) Carlos Sanchez 2014, released under the MIT license

// This function is called first by the start() function that runs when the game starts for the first time
var h_init = function()
{
}


// This function is called last by the start() function that runs when the game starts for the first time
var h_post =  function()
{
}

// This function is called when the engine tries to write any text
var h_writeText =  function (text)
{
	return text;
}

//This function is called every time the user types any order
var h_playerOrder = function(player_order)
{
	return player_order;
}

// This function is called every time a location is described, just after the location text is written
var h_description_init =  function ()
{
}

// This function is called every time a location is described, just after the process 1 is executed
var h_description_post = function()
{
}


// this function is called when the savegame object has been created, in order to be able to add more custom properties
var h_saveGame = function(savegame_object)
{
	return savegame_object;
}


// this function is called after the restore game function has restored the standard information in savegame, in order to restore any additional data included in a patched (by h_saveGame) savegame.
var h_restoreGame = function(savegame_object)
{
}

// this funcion is called before writing a message about player order beeing impossible to understand
var h_invalidOrder = function(player_order)
{
}

// this function is called when a sequence tag is found giving a chance for any hook library to provide a response
// tagparams receives the params inside the tag as an array  {XXXX|nn|mm|yy} => ['XXXX', 'nn', 'mm', 'yy']
var h_sequencetag = function (tagparams)
{
	return '';
}

// this function is called from certain points in the response or process tables via the HOOK condact. Depending on the string received it can do something or not.
// it's designed to allow direct javascript code to take control in the start database just installing a plugin library (avoiding the wirter need to enter code to activate the library)
var h_code = function(str)
{
	return false;
}


// this function is called from the keydown evente handler used by block and other functions to emulate a pause or waiting for a keypress. It is designed to allow plugin condacts or
// libraries to attend those key presses and react accordingly. In case a hook function decides that the standard keydown functions should not be processed, the hook function should return false.
// Also, any h_keydown replacement should probably do the same.
var h_keydown = function (event)
{
	return true;
}


// this function is called every time a process is called,  either by the internall loop of by the PROCESS condact, just before running it.
var h_preProcess = function(procno)
{

}

// this function is called every time a process is called just after the process exits (no matter which DONE status it has), either by the internall loop of by the PROCESS condact
var h_postProcess= function (procno)
{

}// This file is (C) Carlos Sanchez 2014, and is released under the MIT license
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ACCdesc()
{
	describe_location_flag = true;
	ACCbreak(); // Cancel doall loop
}


function ACCdone()
{
	done_flag = true;
}

function CNDat(locno)
{
  return (loc_here()==locno);
}

function CNDnotat(locno)
{
	 return (loc_here()!=locno);
}


function CNDatgt(locno)
{
	 return (loc_here()>locno);
}


function CNDatlt(locno)
{
	 return (loc_here()<locno);
}

function CNDpresent(objno)
{
	var loc = getObjectLocation(objno);
	if (loc == loc_here()) return true;
	if (loc == LOCATION_WORN) return true;
	if (loc == LOCATION_CARRIED) return true;
	if ( (!bittest(getFlag(FLAG_PARSER_SETTINGS),7)) && (objectIsContainer(loc) || objectIsSupporter(loc))  &&  (loc<=last_object_number)  && (CNDpresent(loc)) )  // Extended context and object in another object that is present
	{
		if (objectIsSupporter(loc)) return true;  // On supporter
		if ( objectIsContainer(loc) && objectIsAttr(loc, ATTR_OPENABLE) && objectIsAttr(loc, ATTR_OPEN)) return true; // In a openable & open container
		if ( objectIsContainer(loc) && (!objectIsAttr(loc, ATTR_OPENABLE)) ) return true; // In a not openable container
	}
	return false;
}

function CNDabsent(objno)
{
	return !CNDpresent(objno);
}

function CNDworn(objno)
{
	return (getObjectLocation(objno) == LOCATION_WORN);
}

function CNDnotworn(objno)
{
	return !CNDworn(objno);
}

function CNDcarried(objno)
{
	return (getObjectLocation(objno) == LOCATION_CARRIED);	
}

function CNDnotcarr(objno)
{
	return !CNDcarried(objno);
}


function CNDchance(percent)
{
	 var val = Math.floor((Math.random()*101));
	 return (val<=percent);
}

function CNDzero(flagno)
{
	return (getFlag(flagno) == 0);
}

function CNDnotzero(flagno)
{
	 return !CNDzero(flagno)
}


function CNDeq(flagno, value)
{
	return (getFlag(flagno) == value);
}

function CNDnoteq(flagno,value)
{
	return !CNDeq(flagno, value);
}

function CNDgt(flagno, value)
{
	return (getFlag(flagno) > value);
}

function CNDlt(flagno, value)
{
	return (getFlag(flagno) < value);
}


function CNDadject1(wordno)
{
	return (getFlag(FLAG_ADJECT1) == wordno);
}

function CNDadverb(wordno)
{
	return (getFlag(FLAG_ADVERB) == wordno);
}


function CNDtimeout()
{
	 return bittest(getFlag(FLAG_TIMEOUT_SETTINGS),7);
}


function CNDisat(objno, locno)
{
	return (getObjectLocation(objno) == locno);

}


function CNDisnotat(objno, locno)
{
	return !CNDisat(objno, locno);
}



function CNDprep(wordno)
{
	return (getFlag(FLAG_PREP) == wordno);
}




function CNDnoun2(wordno)
{
	return (getFlag(FLAG_NOUN2) == wordno);
}

function CNDadject2(wordno)
{
	return (getFlag(FLAG_ADJECT2) == wordno);
}

function CNDsame(flagno1,flagno2)
{
	return (getFlag(flagno1) == getFlag(flagno2));
}


function CNDnotsame(flagno1,flagno2)
{
	return (getFlag(flagno1) != getFlag(flagno2));
}

function ACCinven()
{
	var count = 0;
	writeSysMessage(SYSMESS_YOUARECARRYING);
	ACCnewline();
	var listnpcs_with_objects = !bittest(getFlag(FLAG_PARSER_SETTINGS),3);
	var i;
	for (i=0;i<num_objects;i++)
	{
		if ((getObjectLocation(i)) == LOCATION_CARRIED)
		{
			
			if ((listnpcs_with_objects) || (!objectIsNPC(i)))
			{
				writeObject(i);
				if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
				ACCnewline();
				count++;
			}
		}
		if (getObjectLocation(i) == LOCATION_WORN)
		{
			if (listnpcs_with_objects || (!objectIsNPC(i)))
			{
				writeObject(i);
				writeSysMessage(SYSMESS_WORN);
				count++;
				ACCnewline();
			}
		}
	}
	if (!count) 
	{
		 writeSysMessage(SYSMESS_CARRYING_NOTHING);
		 ACCnewline();
	}

	if (!listnpcs_with_objects)
	{
		var numNPC = getNPCCountAt(LOCATION_CARRIED);
		if (numNPC)	ACClistnpc(LOCATION_CARRIED);
	}
	done_flag = true;
}

function desc()
{
	describe_location_flag = true;
}


function ACCquit()
{
	inQUIT = true;
	writeSysMessage(SYSMESS_AREYOUSURE);
}


function ACCend()
{
	$('.input').hide();
	inEND = true;
	writeSysMessage(SYSMESS_PLAYAGAIN);
	done_flag = true;
}


function done()
{
	done_flag = true;
}

function ACCok()
{
	writeSysMessage(SYSMESS_OK);
	done_flag = true;
}



function ACCramsave()
{
	ramsave_value = getSaveGameObject();
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	localStorage.setItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME, savegame);
}

function ACCramload()
{
	if (ramsave_value==null) 
	{
		var json_str = localStorage.getItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME);
		if (json_str)
		{
			savegame_object = JSON.parse(json_str.trim());
			restoreSaveGameObject(savegame_object);
			ACCdesc();
			focusInput();
			return;
		}
		else
		{
			writeText (STR_RAMLOAD_ERROR); 
			done_flag = true; 
			return;
		}
	}
	restoreSaveGameObject(ramsave_value);
	ACCdesc();
}

function ACCsave()
{
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	filename = prompt(getSysMessageText(SYSMESS_SAVEFILE),'').toUpperCase();; 
	localStorage.setItem('ngpaws_savegame_' + filename.toUpperCase(), savegame);
	ACCok();
}

 
function ACCload() 	
{
	var json_str;
	filename = prompt(getSysMessageText(SYSMESS_LOADFILE),'').toUpperCase();;
	json_str = localStorage.getItem('ngpaws_savegame_' + filename.toUpperCase());
	if (json_str)
	{
		savegame_object = JSON.parse(json_str.trim());
		restoreSaveGameObject(savegame_object);
	}
	else
	{
		writeSysMessage(SYSMESS_FILENOTFOUND);
		done_flag = true; return;
	}
	ACCdesc();
	focusInput();
}



function ACCturns()
{
	var turns = getFlag(FLAG_TURNS_HIGH) * 256 +  getFlag(FLAG_TURNS_LOW);
	writeSysMessage(SYSMESS_TURNS_START);
	writeText(turns + '');
	writeSysMessage(SYSMESS_TURNS_CONTINUE);
	if (turns > 1) writeSysMessage(SYSMESS_TURNS_PLURAL);
	writeSysMessage(SYSMESS_TURNS_END);
}

function ACCscore()
{
	var score = getFlag(FLAG_SCORE);
	writeSysMessage(SYSMESS_SCORE_START);
	writeTex(score + '');
	writeSysMessage(SYSMESS_SCORE_END);
}


function ACCcls()
{
	clearScreen();
}

function dropall()
{
	// Done in two different loops cause PAW did it like that, just a question of retro compatibility
	var i;
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_CARRIED)setObjectLocation(i, getFlag(FLAG_LOCATION));
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_WORN)setObjectLocation(i, getFlag(FLAG_LOCATION));
}


function ACCautog()
{
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),7))  // Extended context for objects
	for (var i=0; i<num_objects;i++) // Try to find it in present containers/supporters
	{
		if (CNDpresent(i) && (isAccesibleContainer(i) || objectIsAttr(i, ATTR_SUPPORTER)) )  // If there is another object present that is an accesible container or a supporter
		{
			objno =findMatchingObject(i);
			if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
		}
	}
	writeSysMessage(SYSMESS_CANTSEETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautod()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };  
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautow()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautor()
{
	var objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	writeSysMessage(SYSMESS_YOURENOTWEARINGTHAT);
	ACCnewtext();
	ACCdone();
}



function ACCpause(value)
{
 if (value == 0) value = 256;
 pauseRemainingTime = Math.floor(value /50 * 1000);	
 inPause = true;
 showAnykeyLayer();
} 

function ACCgoto(locno)
{
 	setFlag(FLAG_LOCATION,locno);
}

function ACCmessage(mesno)
{
	writeMessage(mesno);
	ACCnewline();
}


function ACCremove(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case loc_here():
			writeSysMessage(SYSMESS_YOUARENOTWEARINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case LOCATION_WORN:
			if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
			{
				writeSysMessage(SYSMESS_CANTREMOVE_TOOMANYOBJECTS);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_CARRIED);
			writeSysMessage(SYSMESS_YOUREMOVEOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUARENOTWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}


function trytoGet(objno)  // auxiliaty function for ACCget
{
	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		doall_flag = false;
		return;
	}
	var weight = getLocationObjectsWeight(objno);
	weight += getObjectWeight(objno);
	weight +=  getLocationObjectsWeight(LOCATION_CARRIED);
	weight +=  getLocationObjectsWeight(LOCATION_WORN);
	if (weight > getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}
	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;
}


 function ACCget(objno)
 {
 	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():
			trytoGet(objno);
			break;

		default: 
			if  ((locno<=last_object_number) && (CNDpresent(locno)))    // If it's not here, carried or worn but it present, that means that bit 7 of flag 12 is cleared, thus you can get objects from present containers/supporters
			{
				trytoGet(objno);
			}
			else
			{
				writeSysMessage(SYSMESS_CANTSEETHAT);
				ACCnewtext();
				ACCdone();
				return;
				break;
		    }
	}
 }

function ACCdrop(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			setObjectLocation(objno, loc_here());
			writeSysMessage(SYSMESS_YOUDROPOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}

function ACCwear(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWAERINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			if (!objectIsWearable(objno))
			{
				writeSysMessage(SYSMESS_YOUCANTWEAROBJECT);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_WORN);
			writeSysMessage(SYSMESS_YOUWEAROBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}



function ACCdestroy(objno)
{
	setObjectLocation(objno, LOCATION_NONCREATED);
}


function ACCcreate(objno)
{
	setObjectLocation(objno, loc_here());
}


function ACCswap(objno1,objno2)
{
	var locno1 = getObjectLocation (objno1);
	var locno2 = getObjectLocation (objno2);
	ACCplace (objno1,locno2);
	ACCplace (objno2,locno1);
	setReferredObject(objno2);
}


function ACCplace(objno, locno)
{
	setObjectLocation(objno, locno);
}

function ACCset(flagno)
{
	setFlag(flagno, SET_VALUE);
}

function ACCclear(flagno)
{
	setFlag(flagno,0);
}

function ACCplus(flagno,value)
{
	var newval = getFlag(flagno) + value;
	setFlag(flagno, newval);
}

function ACCminus(flagno,value)
{
    var newval = getFlag(flagno) - value;
    if (newval < 0) newval = 0;
	setFlag(flagno, newval);
}

function ACClet(flagno,value)
{
	setFlag(flagno,value);
}

function ACCnewline()
{
	writeText(STR_NEWLINE);
}

function ACCprint(flagno)
{
	writeText(getFlag(flagno) +'');
}

function ACCsysmess(sysno)
{
	writeSysMessage(sysno);
}

function ACCcopyof(objno,flagno)
{
	setFlag(flagno, getObjectLocation(objno))
}

function ACCcopyoo(objno1, objno2)
{
	setObjectLocation(objno2,getObjectLocation(objno1));
	setReferredObject(objno2);
}

function ACCcopyfo(flagno,objno)
{
	setObjectLocation(objno, getFlag(flagno));
}

function ACCcopyff(flagno1, flagno2)
{
	setFlag(flagno2, getFlag(flagno1));
}

function ACCadd(flagno1, flagno2)
{
	var newval = getFlag(flagno1) + getFlag(flagno2);
	setFlag(flagno2, newval);
}

function ACCsub(flagno1,flagno2)
{
	var newval = getFlag(flagno2) - getFlag(flagno1);
	if (newval < 0) newval = 0;
	setFlag(flagno2, newval);
}


function CNDparse()
{
	return (!getLogicSentence());
}


function ACClistat(locno, container_objno)   // objno is a container/suppoter number, used to list contents of objects
{
  var listingContainer = false;
  if (arguments.length > 1) listingContainer = true;
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);  
  objscount = objscount - concealed_or_scenery_objcount;
  if (!listingContainer) setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
  if (!objscount) return;
  var continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  if (listingContainer) 
  	{
  		writeText(' (');
  		if (objectIsAttr(container_objno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_OVER_YOUCANSEE); else if (objectIsAttr(container_objno, ATTR_CONTAINER)) writeSysMessage(SYSMESS_INSIDE_YOUCANSEE);
  		continouslisting = true;  // listing contents of container always continuous
  	}
  
  if (!listingContainer)
  {
    setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
    if (!continouslisting) ACCnewline();
  }
  var progresscount = 0;
  for (var i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if  ( ((!objectIsNPC(i)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)))  && (!objectIsAttr(i,ATTR_CONCEALED)) && (!objectIsAttr(i,ATTR_SCENERY))   ) // if not an NPC or parser setting say NPCs are considered objects, and object is not concealed nor scenery
  		  { 
  		     writeText(getObjectText(i)); 
  		     if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
  		     progresscount++
  		     if (continouslisting)
  		     {
		  			if (progresscount <= objscount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  					if (progresscount == objscount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  					if (!listingContainer) if (progresscount == objscount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
  if (arguments.length > 1) writeText(')');
}


function ACClistnpc(locno)
{
  var npccount =  getNPCCountAt(locno);
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  if (!npccount) return;
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  writeSysMessage(SYSMESS_NPCLISTSTART);
  if (!continouslisting) ACCnewline();
  if (npccount==1)  writeSysMessage(SYSMESS_NPCLISTCONTINUE); else writeSysMessage(SYSMESS_NPCLISTCONTINUE_PLURAL);
  var progresscount = 0;
  var i;
  for (i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if ( (objectIsNPC(i)) && (!objectIsAttr(i,ATTR_CONCEALED)) ) // only NPCs not concealed
  		  { 
  		     writeText(getObjectText(i)); 
  		     progresscount++
  		     if (continouslisting)
  		     {
		  	 	if (progresscount <= npccount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  			 	if (progresscount == npccount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  			 	if (progresscount == npccount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
}


function ACClistobj()
{
  var locno = loc_here();
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);

  objscount = objscount - concealed_or_scenery_objcount;
  if (objscount)
  {
	  writeSysMessage(SYSMESS_YOUCANSEE);
      ACClistat(loc_here());
  }
}

function ACCprocess(procno)
{
	if (procno > last_process) 
	{
		writeText(STR_WRONG_PROCESS);
		ACCnewtext();
		ACCdone();
	}
	callProcess(procno);
    if (describe_location_flag) done_flag = true;
}

function ACCmes(mesno)
{
	writeMessage(mesno);
}

function ACCmode(mode)
{
	setFlag(FLAG_MODE, mode);
}

function ACCtime(length, settings)
{
	setFlag(FLAG_TIMEOUT_LENGTH, length);
	setFlag(FLAG_TIMEOUT_SETTINGS, settings);
}

function ACCdoall(locno)
{
	doall_flag = true;
	if (locno == LOCATION_HERE) locno = loc_here();
	// Each object will be considered for doall loop if is at locno and it's not the object specified by the NOUN2/ADJECT2 pair and it's not a NPC (or setting to consider NPCs as objects is set)
	setFlag(FLAG_DOALL_LOC, locno);
	var doall_obj;
	doall_loop:
	for (doall_obj=0;(doall_obj<num_objects) && (doall_flag);doall_obj++)  
	{
		if (getObjectLocation(doall_obj) == locno)
			if ((!objectIsNPC(doall_obj)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3))) 
 			 if (!objectIsAttr(doall_obj, ATTR_CONCEALED)) 
 			  if (!objectIsAttr(doall_obj, ATTR_SCENERY)) 
				if (!( (objectsNoun[doall_obj]==getFlag(FLAG_NOUN2))  &&    ((objectsAdjective[doall_obj]==getFlag(FLAG_ADJECT2)) || (objectsAdjective[doall_obj]==EMPTY_WORD)) ) ) // implements "TAKE ALL EXCEPT BIG SWORD"
				{
					setFlag(FLAG_NOUN1, objectsNoun[doall_obj]);
					setFlag(FLAG_ADJECT1, objectsAdjective[doall_obj]);
					setReferredObject(doall_obj);
					callProcess(process_in_doall);
					if (describe_location_flag) 
						{
							doall_flag = false;
							entry_for_doall = '';
							break doall_loop;
						}
				}
	}
	doall_flag = false;
	entry_for_doall = '';
	if (describe_location_flag) descriptionLoop();
}

function ACCprompt(value)  // deprecated
{
	setFlag(FLAG_PROMPT, value);
}


function ACCweigh(objno, flagno)
{
	var weight = getObjectWeight(objno);
	setFlag(flagno, weight);
}

function ACCputin(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if (getObjectLocation(objno) == LOCATION_WORN)
	{
		writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == LOCATION_CARRIED)
	{
		setObjectLocation(objno, locno);
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUPUTOBJECTON); else writeSysMessage(SYSMESS_YOUPUTOBJECTIN);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		success = true;
		return;
	}

	writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
	ACCnewtext();
	ACCdone();
}


function ACCtakeout(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if ((getObjectLocation(objno) == LOCATION_WORN) || (getObjectLocation(objno) == LOCATION_CARRIED))
	{
		writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectWeight(objno) + getLocationObjectsWeight(LOCATION_WORN) + getLocationObjectsWeight(LOCATION_CARRIED) >  getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{		
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		return;
	}

	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;


}
function ACCnewtext()
{
	player_order_buffer = '';
}

function ACCability(maxObjectsCarried, maxWeightCarried)
{
	setFlag(FLAG_MAXOBJECTS_CARRIED, maxObjectsCarried);
	setFlag(FLAG_MAXWEIGHT_CARRIED, maxWeightCarried);
}

function ACCweight(flagno)
{
	var weight_carried = getLocationObjectsWeight(LOCATION_CARRIED);
	var weight_worn = getLocationObjectsWeight(LOCATION_WORN);
	var total_weight = weight_worn + weight_carried;
	setFlag(flagno, total_weight);
}


function ACCrandom(flagno)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*100)));
}

function ACCwhato()
{
	var whatofound = getReferredObject();
	if (whatofound != EMPTY_OBJECT) setReferredObject(whatofound);
}

function ACCputo(locno)
{
	setObjectLocation(getFlag(FLAG_REFERRED_OBJECT), locno);
}

function ACCnotdone()
{
	done_flag = true;
}

function ACCautop(locno)
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautot(locno)
{

	var objno =findMatchingObject(locno);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };

	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
			writeText(getObjectFixArticles(locno));
			writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION)
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
	
}


function CNDmove(flagno)
{
	var locno = getFlag(flagno);
	var dirno = getFlag(FLAG_VERB);
	var destination = getConnection( locno,  dirno);
	if (destination != -1) 
		{
			 setFlag(flagno, destination);
			 return true;
		}
	return false;
}


function ACCextern(writeno)
{
	eval(writemessages[writeno]);
}


function ACCpicture(picno)
{
	drawPicture(picno);
}



function ACCgraphic(option)
{
	graphicsON = (option==1);  
	if (!graphicsON) hideGraphicsWindow();	
}

function ACCbeep(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'play');
}

function ACCsound(value)
{
	soundsON = (value==1);  
	if (!soundsON) sfxstopall();
}

function CNDozero(objno, attrno)
{
	if (attrno > 63) return false;
	return !objectIsAttr(objno, attrno);

}

function CNDonotzero(objno, attrno)
{
	return objectIsAttr(objno, attrno);
}

function ACCoset(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		attrs = getObjectLowAttributes(objno);
		var attrs = bitset(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitset(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}

function ACCoclear(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitclear(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitclear(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}


function CNDislight()
{
	if (!isDarkHere()) return true;
	return lightObjectsPresent();
}



function CNDisnotlight()
{
	return ! CNDislight();
}

function ACCversion()
{
	writeText(filterText(STR_RUNTIME_VERSION));
}


function ACCwrite(writeno)
{
	writeWriteMessage(writeno);
}

function ACCwriteln(writeno)
{
	writeWriteMessage(writeno);
	ACCnewline();
}

function ACCrestart()
{
  process_restart = true;
}


function ACCtranscript()
{
	$('#transcript_area').html(transcript);
	$('.transcript_layer').show();
	inTranscript = true;
}

function ACCanykey()
{
	writeSysMessage(SYSMESS_PRESSANYKEY);
	inAnykey = true;
}

function ACCgetkey(flagno)
{
	getkey_return_flag = flagno;
	inGetkey = true;
}


//////////////////
//   LEGACY     //
//////////////////

// From PAW PC
function ACCbell()
{
 	// Empty, PAW PC legacy, just does nothing 
}


// From PAW Spectrum
function ACCreset()
{
	// Legacy condact, does nothing now
}


function ACCpaper(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCink(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCborder(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCcharset(value)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCline(lineno)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCinput()
{
	// Legacy condact, does nothing now
}

function ACCsaveat()
{
	// Legacy condact, does nothing now
}

function ACCbackat()
{
	// Legacy condact, does nothing now
}

function ACCprintat()
{
	// Legacy condact, does nothing now
}

function ACCprotect()
{
	// Legacy condact, does nothing now
}

// From Superglus


function ACCdebug()
{
	// Legacy condact, does nothing now		
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS FOR COMPILER //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CNDverb(wordno)
{
	return (getFlag(FLAG_VERB) == wordno);
}


function CNDnoun1(wordno)
{
	return (getFlag(FLAG_NOUN1) == wordno);
}

//   PLUGINS    ;

//CND ISMUSIC C 0 0 0 0

function CNDismusic()
{
	return (CNDissound(0));	
}

//CND SOFTBLOCK A 2 0 0 0

function ACCsoftblock(procno)
{
   inBlock = true;
   disableInterrupt();

   $('.block_layer').css('display','none');
   $('.block_text').html('');
   $('.block_graphics').html('');
   $('.block_layer').css('background','transparent');
   if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
   $('.block_layer').css('display','block');
}
//CND PAUSEVIDEO A 0 0 0 0


function ACCpausevideo()
{
	if (typeof videoElement != 'undefined') 
		if (!videoElement.ended) 
		if (!videoElement.paused)
		   videoElement.pause();
}

//CND ISNOTMOV C 0 0 0 0

function CNDisnotmov()
{
	return !CNDismov();	
}

//CND SYNONYM A 15 13 0 0

function ACCsynonym(wordno1, wordno2)
{
   if (wordno1!=EMPTY_WORD) setFlag(FLAG_VERB, wordno1);
   if (wordno2!=EMPTY_WORD)	setFlag(FLAG_NOUN1, wordno2);
}
//CND ISDONE C 0 0 0 0

function CNDisdone()
{
	return done_flag;	
}

//CND BNOTZERO C 1 2 0 0

function CNDbnotzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (bittest(getFlag(flagno), bitno));
}

//CND ISNOTDOALL C 0 0 0 0

function CNDisnotdoall()
{
	return !CNDisdoall();
}

//CND WHATOX2 A 1 0 0 0

function ACCwhatox2(flagno)
{	
	var auxNoun = getFlag(FLAG_NOUN1);
	var auxAdj = getFlag(FLAG_ADJECT1);
	setFlag(FLAG_NOUN1, getFlag(FLAG_NOUN2));
	setFlag(FLAG_ADJECT1, getFlag(FLAG_ADJECT2));
	var whatox2found = getReferredObject();
	setFlag(flagno,whatox2found);
	setFlag(FLAG_NOUN1, auxNoun);
	setFlag(FLAG_ADJECT1, auxAdj);
}
//CND ZONE C 8 8 0 0

function CNDzone(locno1, locno2)
{

	if (loc_here()<locno1) return false;
	if (loc_here()>locno2) return false;
	return true;
}
//CND GE C 1 2 0 0

function CNDge(flagno, valor)
{
	return (getFlag(flagno)>=valor);
}
//CND YOUTUBE A 14 0 0 0

function ACCyoutube(strno)
{

	var str = '<iframe id="youtube" width="560" height="315" src="http://www.youtube.com/embed/' + writemessages[strno] + '?autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#youtube').css('height','100%');
	$('#youtube').css('display','block');
	$('#youtube').css('margin-left','auto');
	$('#youtube').css('margin-right','auto');
	$('.graphics').show();
}


// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_youtube_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#youtube").length > 0) $("#youtube").remove();	
	old_youtube_h_description_init();
}
//CND LE C 1 2 0 0

function CNDle(flagno, valor)
{
	return (getFlag(flagno) <= valor);
}
//CND RNDWRITELN A 14 14 14 0

function ACCrndwriteln(writeno1,writeno2,writeno3)
{
	ACCrndwrite(writeno1,writeno2,writeno3);
	ACCnewline();
}
//CND HELP A 0 0 0 0

function ACChelp()
{
	if (getLang()=='EN') EnglishHelp(); else SpanishHelp();
}	

function EnglishHelp()
{
	writeText('HOW DO I SEND COMMANDS TO THE PC?');
	writeText(STR_NEWLINE);
	writeText('Use simple orders: OPEN DOOR, TAKE KEY, GO UP, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I MOVE IN THE MAP?');
	writeText(STR_NEWLINE);
	writeText('Usually you will have to use compass directions as north (shortcut: "N"), south (S), east (E), west (W) or other directions (up, down, enter, leave, etc.). Some games allow complex order like "go to well". Usually you would be able to know avaliable exits by location description, some games also provide the "EXITS" command.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK MY INVENTORY?');
	writeText(STR_NEWLINE);
	writeText('type INVENTORY (shortcut "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I USE THE OBJECTS?');
	writeText(STR_NEWLINE);
	writeText('Use the proper verb, that is, instead of USE KEY type OPEN.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK SOMETHING CLOSELY?');
	writeText(STR_NEWLINE);
	writeText('Use "examine" verb: EXAMINE DISH. (shortcut: EX)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I SEE AGAIN THE CURRENT LOCATION DSCRIPTION?');
	writeText(STR_NEWLINE);
	writeText('Type LOOK (shortcut "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I TALK TO OTHER CHARACTERS?');
	writeText(STR_NEWLINE);
	writeText('Most common methods are [CHARACTER, SENTENCE] or [SAY CHARACTER "SENTENCE"]. For instance: [JOHN, HELLO] o [SAY JOHN "HELLO"]. Some games also allow just [TALK TO JOHN]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING IN A CONTAINER, HOW CAN I TAKE SOMETHING OUT?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY IN BOX. TAKE KEY OUT OF BOX. INSERT KEY IN BOX. EXTRACT KEY FROM BOX.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING ON SOMETHING ELSE?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY ON TABLE. TAKE KEY FROM TABLE');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

function SpanishHelp()
{
	writeText('¿CÓMO DOY ORDENES AL PERSONAJE?');
	writeText(STR_NEWLINE);
	writeText('Utiliza órdenes en imperativo o infinitivo: ABRE PUERTA, COGER LLAVE, SUBIR, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO ME MUEVO POR EL JUEGO?');
	writeText(STR_NEWLINE);
	writeText('Por regla general, mediante los puntos cardinales como norte (abreviado «N»), sur (S), este (E), oeste (O) o direcciones espaciales (arriba, abajo, bajar, subir, entrar, salir, etc.). Algunas aventuras permiten también cosas como «ir a pozo». Normalmente podrás saber en qué dirección puedes ir por la descripción del sitio, aunque algunos juegos facilitan el comando «SALIDAS» que te dirá exactamente cuáles hay.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO SABER QUÉ OBJETOS LLEVO?');
	writeText(STR_NEWLINE);
	writeText('Teclea INVENTARIO (abreviado «I»)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO USO LOS OBJETOS?');
	writeText(STR_NEWLINE);
	writeText('Utiliza el verbo correcto, en lugar de USAR ESCOBA escribe BARRER.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO MIRAR DE CERCA UN OBJETO U OBSERVARLO MÁS DETALLADAMENTE?');
	writeText(STR_NEWLINE);
	writeText('Con el verbo examinar: EXAMINAR PLATO. Generalmente se puede usar la abreviatura «EX»: EX PLATO.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO VER DE NUEVO LA DESCRIPCIÓN DEL SITIO DONDE ESTOY?');
	writeText(STR_NEWLINE);
	writeText('Escribe MIRAR (abreviado «M»).');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO HABLO CON LOS PERSONAJES?');
	writeText(STR_NEWLINE);
	writeText('Los modos más comunes son [DECIR, FRASE] o [DECIR A PERSONAJE "FRASE"]. Por ejemplo: [DECIR, HOLA] o [DECIR A LUIS "HOLA"]. En algunas aventuras también se puede utilizar el formato [HABLAR A LUIS]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO METO ALGO EN UN CONTENEDOR? ¿CÓMO LO SACO?');
	writeText(STR_NEWLINE);
	writeText('METER LLAVE EN CAJA. SACAR LLAVE DE CAJA');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PONGO ALGO SOBRE ALGO? ¿CÓMO LO QUITO?');
	writeText(STR_NEWLINE);
	writeText('PONER LLAVE EN MESA. COGER LLAVE DE MESA');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

//CND MUL A 1 2 0 0

function ACCmul(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) * valor));
}
//CND LISTCONTENTS A 9 0 0 0

function ACClistcontents(locno)
{
   ACClistat(locno, locno)
}
//CND ISNOTDONE C 0 0 0 0

function CNDisnotdone()
{
	return !CNDisdone();
}

//CND SILENCE A 2 0 0 0

function ACCsilence(channelno)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxstop(channelno);
}
//CND BCLEAR A 1 2 0 0

function ACCbclear(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitclear(getFlag(flagno), bitno));
}
//CND ISVIDEO C 0 0 0 0

function CNDisvideo()
{
	if (typeof videoElement == 'undefined') return false;
	if (!videoLoopCount) return false;
	if (videoElement.paused) return false;
	return true;
}

//CND WARNINGS A 2 0 0 0

function ACCwarnings(value)
{
	if (value) showWarnings = true; else showWarnings = false;
}
//CND FADEOUT A 2 2 0 0

function ACCfadeout(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxfadeout(channelno, value);
}
//CND WHATOX A 1 0 0 0

function ACCwhatox(flagno)
{
	var whatoxfound = getReferredObject();
	setFlag(flagno,whatoxfound);
}

//CND RESP A 0 0 0 0

function ACCresp()
{
	in_response = true;
}	

//CND VOLUMEVIDEO A 2 0 0 0


function ACCvolumevideo(value)
{
	if (typeof videoElement != 'undefined') 
		videoElement.volume = value  / 65535;
}

//CND ISNOTRESP C 0 0 0 0

function CNDisnotresp()
{
	return !in_response;	
}

//CND MOD A 1 2 0 0

function ACCmod(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) % valor));
}
//CND PICTUREAT A 2 2 2 0

/*
In order to determine the actual size of both background image and pictureat image they should be loaded, thus two chained "onload" are needed. That is, 
background image is loaded to determine its size, then pictureat image is loaded to determine its size. Size of currently displayed background image cannot
be used as it may have been already stretched.
*/

function ACCpictureat(x,y,picno)
{
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (!filename) return;

	// Check location has a picture, otherwise exit
	var currentBackgroundScreenImage = $('.location_picture');
	if (!currentBackgroundScreenImage) return;

	// Create a new image with the contents of current background image, to be able to calculate original height of image
	var virtualBackgroundImage = new Image();
	// Pass required data as image properties in order to be avaliable at "onload" event
	virtualBackgroundImage.bg_data=[];
	virtualBackgroundImage.bg_data.filename = filename; 
	virtualBackgroundImage.bg_data.x = x;
	virtualBackgroundImage.bg_data.y = y;
	virtualBackgroundImage.bg_data.picno = picno;
	virtualBackgroundImage.bg_data.currentBackgroundScreenImage = currentBackgroundScreenImage;


	// Event triggered when virtual background image is loaded
	virtualBackgroundImage.onload = function()
		{
			var originalBackgroundImageHeight = this.height;
			var scale = this.bg_data.currentBackgroundScreenImage.height() / originalBackgroundImageHeight;

			// Create a new image with the contents of picture to show with PICTUREAT, to be able to calculate height of image
			var virtualPictureAtImage = new Image();
			// Also pass data from background image as property so they are avaliable in the onload event
			virtualPictureAtImage.pa_data = [];
			virtualPictureAtImage.pa_data.x = this.bg_data.x;
			virtualPictureAtImage.pa_data.y = this.bg_data.y;
			virtualPictureAtImage.pa_data.picno = this.bg_data.picno;
			virtualPictureAtImage.pa_data.filename = this.bg_data.filename;
			virtualPictureAtImage.pa_data.scale = scale;
			virtualPictureAtImage.pa_data.currentBackgroundImageWidth = this.bg_data.currentBackgroundScreenImage.width();
			
			// Event triggered when virtual PCITUREAT image is loaded
			virtualPictureAtImage.onload = function ()
			{
		    		var imageHeight = this.height; 
					var x = Math.floor(this.pa_data.x * this.pa_data.scale);
					var y = Math.floor(this.pa_data.y * this.pa_data.scale);
					var newimageHeight = Math.floor(imageHeight * this.pa_data.scale);
					var actualBackgroundImageX = Math.floor((parseInt($('.graphics').width()) - this.pa_data.currentBackgroundImageWidth)/2);;
					var id = 'pictureat_' + this.pa_data.picno;

					// Add new image, notice we are not using the virtual image, but creating a new one
					$('.graphics').append('<img  alt="" id="'+id+'" style="display:none" />');				
					$('#' + id).css('position','absolute');
					$('#' + id).css('left', actualBackgroundImageX + x  + 'px');
					$('#' + id).css('top',y + 'px');
					$('#' + id).css('z-index','100');
					$('#' + id).attr('src', this.pa_data.filename);
					$('#' + id).css('height',newimageHeight + 'px');
					$('#' + id).show();
			}

			// Assign the virtual pictureat image the destinationsrc to trigger the "onload" event
			virtualPictureAtImage.src = this.bg_data.filename;
			};

	// Assign the virtual background image same src as current background to trigger the "onload" event
	virtualBackgroundImage.src = currentBackgroundScreenImage.attr("src");

}

//CND ISNOTSOUND C 1 0 0 0

function CNDisnotsound(channelno)
{
  if ((channelno <1) || (channelno >MAX_CHANNELS)) return false;
  return !(CNDissound(channelno));
}
//CND ATGE C 8 0 0 0

function CNDatge(locno)
{
	return (getFlag(FLAG_LOCATION) >= locno);
}

//CND SETWEIGHT A 4 2 0 0

function ACCsetweight(objno, value)
{
   objectsWeight[objno] = value;
}

//CND COMMAND A 2 0 0 0

function ACCcommand(value)
{
	if (value) {$('.input').show();$('.input').focus();} else $('.input').hide();
}
//CND ISMOV C 0 0 0 0

function CNDismov()
{
	if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)==EMPTY_WORD)) return true;

	if ((getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_VERB)==EMPTY_WORD)) return true;

    if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS)) return true;
    
    return false;
}

//CND OBJAT A 9 1 0 0

function ACCobjat(locno, flagno)
{
	setFlag(flagno, getObjectCountAt(locno));
}
//CND BLOCK A 14 2 2 0

function ACCblock(writeno, picno, procno)
{
   inBlock = true;
   disableInterrupt();
   $('.block_layer').hide();
   var text = getWriteMessageText(writeno);
   $('.block_text').html(text);
   
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var imgsrc = '<img class="block_picture" src="' + filename + '" />';
		$('.block_graphics').html(imgsrc);
	}
    if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
    $('.block_layer').show();

}
//CND CLEAREXIT A 2 0 0 0

function ACCclearexit(wordno)
{
	if ((wordno >= NUM_CONNECTION_VERBS) || (wordno< 0 )) return;
	setConnection(loc_here(),wordno, -1);
}
//CND ISDOALL C 0 0 0 0

function CNDisdoall()
{
	return doall_flag;	
}

//CND GETEXIT A 2 2 0 0

function ACCgetexit(value,flagno)
{
	if (value >= NUM_CONNECTION_VERBS) 
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	var locno = getConnection(loc_here(),value);
	if (locno == -1)
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	setFlag(flagno,locno);
}
//CND VOLUME A 2 2 0 0

function ACCvolume(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxvolume(channelno, value);
}

//CND RNDWRITE A 14 14 14 0

function ACCrndwrite(writeno1,writeno2,writeno3)
{
	var val = Math.floor((Math.random()*3));
	switch (val)
	{
		case 0 : writeWriteMessage(writeno1);break;
		case 1 : writeWriteMessage(writeno2);break;
		case 2 : writeWriteMessage(writeno3);break;
	}
}
//CND LOG A 14 0 0 0

function ACClog(writeno)
{
  console_log(writemessages[writeno]);
}
//CND BSET A 1 2 0 0

function ACCbset(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitset(getFlag(flagno),bitno));
}
//CND HOOK A 14 0 0 5

function ACChook(writeno)
{
	h_code(writemessages[writeno]);
}
//CND ASK W 14 14 1 0

// Global vars for ASK


var inAsk = false;
var ask_responses = null;
var ask_flagno = null;



function ACCask(writeno, writenoOptions, flagno)
{
	inAsk = true;
	writeWriteMessage(writeno);
	ask_responses = getWriteMessageText(writenoOptions);
	ask_flagno = flagno;
}



// hook replacement
var old_ask_h_keydown  = h_keydown;
h_keydown  = function (event)
{
	if (inAsk)
	{
		var keyCodeAsChar = String.fromCharCode(event.keyCode).toLowerCase();
		if (ask_responses.indexOf(keyCodeAsChar)!= -1)
		{
			setFlag(ask_flagno, ask_responses.indexOf(keyCodeAsChar));
			inAsk = false;
			event.preventDefault();
            $('.input').show();
		    $('.input').focus();
		    hideBlock();
			waitKeyCallback();
		};
		return false; // if we are in ASK condact, no keypress should be considered other than ASK response
	} else return old_ask_h_keydown(event);
}

//CND SPACE A 0 0 0 0

function ACCspace()
{
	writeText(' ');
}
//CND TEXTPIC A 2 2 0 0

function ACCtextpic(picno, align)
{
	var style = '';
	var post = '';
	var pre = '';
	switch(align)
	{
		case 0: post='<br style="clear:left">';break;
		case 1: style = 'float:left'; break;
		case 2: style = 'float:right'; break;
		case 3: pre='<center>';post='</center><br style="clear:left">';break;
	}
	filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var texto = pre + "<img alt='' class='textpic' style='"+style+"' src='"+filename+"' />" + post;
		writeText(texto);
		$(".text").scrollTop($(".text")[0].scrollHeight);
	}
}
//CND OBJNOTFOUND C 2 9 0 0

function CNDobjnotfound(attrno, locno)
{
	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return false; }

	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return true;
}
//CND SETEXIT A 2 2 0 0

function ACCsetexit(value, locno)
{
	if (value < NUM_CONNECTION_VERBS) setConnection(loc_here(), value, locno);
}
//CND ATLE C 8 0 0 0

function CNDatle(locno)
{
	return (getFlag(FLAG_LOCATION) <= locno);
}

//CND BNEG A 1 2 0 0

function ACCbneg(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitneg(getFlag(flagno),bitno));
}
//CND FADEIN A 2 2 2 0

function ACCfadein(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'fadein');
}
//CND ONEG A 4 2 0 0

function ACConeg(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitneg(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitneg(attrs, attrno);
	setObjectHighAttributes(objno, attrs);
}

//CND BZERO C 1 2 0 0

function CNDbzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (!bittest(getFlag(flagno), bitno));
}
//CND NORESP A 0 0 0 0

function ACCnoresp()
{
	in_response = false;
}	

//CND EXITS A 8 5 0 0

function ACCexits(locno,mesno)
{
  if ((getFlag(FLAG_LIGHT) == 0) || ((getFlag(FLAG_LIGHT) != 0) && lightObjectsPresent()))
  {
  		var exitcount = 0;
  		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1) exitcount++;
      if (exitcount)
      {
    		writeMessage(mesno);
    		var exitcountprogress = 0;
    		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1)
    		{ 
    			exitcountprogress++;
    			writeMessage(mesno + 2 + i);
    			if (exitcountprogress == exitcount) writeSysMessage(SYSMESS_LISTEND);
    			if (exitcountprogress == exitcount-1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
    			if (exitcountprogress <= exitcount-2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  		  }
      } else writeMessage(mesno + 1);
  } else writeMessage(mesno + 1);
}

//CND BREAK A 0 0 0 0

function ACCbreak()
{
	doall_flag = false; 
	entry_for_doall = '';
}
//CND DIV A 1 2 0 0

function ACCdiv(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) / valor));
}
//CND ISNOTMUSIC C 0 0 0 0

function CNDisnotmusic()
{
  return !CNDismusic();
}

//CND OBJFOUND C 2 9 0 0

function CNDobjfound(attrno, locno)
{

	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return true; }
	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return false;
}

//CND RANDOMX A 1 2 0 0

function ACCrandomx(flagno, value)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*value)));
}
//CND ISSOUND C 1 0 0 0

function CNDissound(channelno)
{
	if ((channelno <1 ) || (channelno > MAX_CHANNELS)) return false;
    return channelActive(channelno);
}
//CND RESUMEVIDEO A 0 0 0 0


function ACCresumevideo()
{
	if (typeof videoElement != 'undefined') 
		if (videoElement.paused)
		  videoElement.play();
}

//CND TITLE A 14 0 0 0

function ACCtitle(writeno)
{
	document.title = writemessages[writeno];
}
//CND ISRESP C 0 0 0 0

function CNDisresp()
{
	return in_response;	
}

//CND PLAYVIDEO A 14 2 2 0

var videoLoopCount;
var videoEscapable;
var videoElement;

function ACCplayvideo(strno, loopCount, settings)
{
	videoEscapable = settings & 1; // if bit 0 of settings is 1, video can be interrupted with ESC key
	if (loopCount == 0) loopCount = -1;
	videoLoopCount = loopCount;

	str = '<video id="videoframe" height="100%">';
	str = str + '<source src="dat/' + writemessages[strno] + '.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">';
	str = str + '<source src="dat/' + writemessages[strno] + '.webm" type="video/webm" codecs="vp8.0, vorbis">';
	str = str + '<source src="dat/' + writemessages[strno] + '.ogg" type="video/ogg" codecs="theora, vorbis">';
	str = str + '</video>';
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#videoframe').css('height','100%');
	$('#videoframe').css('display','block');
	$('#videoframe').css('margin-left','auto');
	$('#videoframe').css('margin-right','auto');
	$('#graphics').show();
	videoElement = document.getElementById('videoframe');
	videoElement.onended = function() 
	{
    	if (videoLoopCount == -1) videoElement.play();
    	else
    	{
    		videoLoopCount--;
    		if (videoLoopCount) videoElement.play();
    	}
	};
	videoElement.play();

}

// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_video_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#videoframe").length > 0) $("#videoframe").remove();	
	old_video_h_description_init();
}

// Hook into keypress to cancel video playing if ESC is pressed and video is skippable

var old_video_h_keydown =  h_keydown;
h_keydown = function (event)
{
 	if ((event.keyCode == 27) && (typeof videoElement != 'undefined') && (!videoElement.ended) && (videoEscapable)) 
 	{
 		videoElement.pause(); 
 		return false;  // we've finished attending ESC press
 	}
 	else return old_video_h_keydown(event);
}




//CND NPCAT A 9 1 0 0

function ACCnpcat(locno, flagno)
{
	setFlag(flagno,getNPCCountAt(locno));
}

//CND ISMUSIC C 0 0 0 0

function CNDismusic()
{
	return (CNDissound(0));	
}

//CND SOFTBLOCK A 2 0 0 0

function ACCsoftblock(procno)
{
   inBlock = true;
   disableInterrupt();

   $('.block_layer').css('display','none');
   $('.block_text').html('');
   $('.block_graphics').html('');
   $('.block_layer').css('background','transparent');
   if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
   $('.block_layer').css('display','block');
}
//CND PAUSEVIDEO A 0 0 0 0


function ACCpausevideo()
{
	if (typeof videoElement != 'undefined') 
		if (!videoElement.ended) 
		if (!videoElement.paused)
		   videoElement.pause();
}

//CND ISNOTMOV C 0 0 0 0

function CNDisnotmov()
{
	return !CNDismov();	
}

//CND SYNONYM A 15 13 0 0

function ACCsynonym(wordno1, wordno2)
{
   if (wordno1!=EMPTY_WORD) setFlag(FLAG_VERB, wordno1);
   if (wordno2!=EMPTY_WORD)	setFlag(FLAG_NOUN1, wordno2);
}
//CND ISDONE C 0 0 0 0

function CNDisdone()
{
	return done_flag;	
}

//CND BNOTZERO C 1 2 0 0

function CNDbnotzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (bittest(getFlag(flagno), bitno));
}

//CND ISNOTDOALL C 0 0 0 0

function CNDisnotdoall()
{
	return !CNDisdoall();
}

//CND WHATOX2 A 1 0 0 0

function ACCwhatox2(flagno)
{	
	var auxNoun = getFlag(FLAG_NOUN1);
	var auxAdj = getFlag(FLAG_ADJECT1);
	setFlag(FLAG_NOUN1, getFlag(FLAG_NOUN2));
	setFlag(FLAG_ADJECT1, getFlag(FLAG_ADJECT2));
	var whatox2found = getReferredObject();
	setFlag(flagno,whatox2found);
	setFlag(FLAG_NOUN1, auxNoun);
	setFlag(FLAG_ADJECT1, auxAdj);
}
//CND ZONE C 8 8 0 0

function CNDzone(locno1, locno2)
{

	if (loc_here()<locno1) return false;
	if (loc_here()>locno2) return false;
	return true;
}
//CND GE C 1 2 0 0

function CNDge(flagno, valor)
{
	return (getFlag(flagno)>=valor);
}
//CND YOUTUBE A 14 0 0 0

function ACCyoutube(strno)
{

	var str = '<iframe id="youtube" width="560" height="315" src="http://www.youtube.com/embed/' + writemessages[strno] + '?autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#youtube').css('height','100%');
	$('#youtube').css('display','block');
	$('#youtube').css('margin-left','auto');
	$('#youtube').css('margin-right','auto');
	$('.graphics').show();
}


// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_youtube_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#youtube").length > 0) $("#youtube").remove();	
	old_youtube_h_description_init();
}
//CND LE C 1 2 0 0

function CNDle(flagno, valor)
{
	return (getFlag(flagno) <= valor);
}
//CND RNDWRITELN A 14 14 14 0

function ACCrndwriteln(writeno1,writeno2,writeno3)
{
	ACCrndwrite(writeno1,writeno2,writeno3);
	ACCnewline();
}
//CND HELP A 0 0 0 0

function ACChelp()
{
	if (getLang()=='EN') EnglishHelp(); else SpanishHelp();
}	

function EnglishHelp()
{
	writeText('HOW DO I SEND COMMANDS TO THE PC?');
	writeText(STR_NEWLINE);
	writeText('Use simple orders: OPEN DOOR, TAKE KEY, GO UP, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I MOVE IN THE MAP?');
	writeText(STR_NEWLINE);
	writeText('Usually you will have to use compass directions as north (shortcut: "N"), south (S), east (E), west (W) or other directions (up, down, enter, leave, etc.). Some games allow complex order like "go to well". Usually you would be able to know avaliable exits by location description, some games also provide the "EXITS" command.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK MY INVENTORY?');
	writeText(STR_NEWLINE);
	writeText('type INVENTORY (shortcut "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I USE THE OBJECTS?');
	writeText(STR_NEWLINE);
	writeText('Use the proper verb, that is, instead of USE KEY type OPEN.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK SOMETHING CLOSELY?');
	writeText(STR_NEWLINE);
	writeText('Use "examine" verb: EXAMINE DISH. (shortcut: EX)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I SEE AGAIN THE CURRENT LOCATION DSCRIPTION?');
	writeText(STR_NEWLINE);
	writeText('Type LOOK (shortcut "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I TALK TO OTHER CHARACTERS?');
	writeText(STR_NEWLINE);
	writeText('Most common methods are [CHARACTER, SENTENCE] or [SAY CHARACTER "SENTENCE"]. For instance: [JOHN, HELLO] o [SAY JOHN "HELLO"]. Some games also allow just [TALK TO JOHN]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING IN A CONTAINER, HOW CAN I TAKE SOMETHING OUT?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY IN BOX. TAKE KEY OUT OF BOX. INSERT KEY IN BOX. EXTRACT KEY FROM BOX.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING ON SOMETHING ELSE?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY ON TABLE. TAKE KEY FROM TABLE');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

function SpanishHelp()
{
	writeText('¿CÓMO DOY ORDENES AL PERSONAJE?');
	writeText(STR_NEWLINE);
	writeText('Utiliza órdenes en imperativo o infinitivo: ABRE PUERTA, COGER LLAVE, SUBIR, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO ME MUEVO POR EL JUEGO?');
	writeText(STR_NEWLINE);
	writeText('Por regla general, mediante los puntos cardinales como norte (abreviado «N»), sur (S), este (E), oeste (O) o direcciones espaciales (arriba, abajo, bajar, subir, entrar, salir, etc.). Algunas aventuras permiten también cosas como «ir a pozo». Normalmente podrás saber en qué dirección puedes ir por la descripción del sitio, aunque algunos juegos facilitan el comando «SALIDAS» que te dirá exactamente cuáles hay.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO SABER QUÉ OBJETOS LLEVO?');
	writeText(STR_NEWLINE);
	writeText('Teclea INVENTARIO (abreviado «I»)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO USO LOS OBJETOS?');
	writeText(STR_NEWLINE);
	writeText('Utiliza el verbo correcto, en lugar de USAR ESCOBA escribe BARRER.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO MIRAR DE CERCA UN OBJETO U OBSERVARLO MÁS DETALLADAMENTE?');
	writeText(STR_NEWLINE);
	writeText('Con el verbo examinar: EXAMINAR PLATO. Generalmente se puede usar la abreviatura «EX»: EX PLATO.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO VER DE NUEVO LA DESCRIPCIÓN DEL SITIO DONDE ESTOY?');
	writeText(STR_NEWLINE);
	writeText('Escribe MIRAR (abreviado «M»).');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO HABLO CON LOS PERSONAJES?');
	writeText(STR_NEWLINE);
	writeText('Los modos más comunes son [DECIR, FRASE] o [DECIR A PERSONAJE "FRASE"]. Por ejemplo: [DECIR, HOLA] o [DECIR A LUIS "HOLA"]. En algunas aventuras también se puede utilizar el formato [HABLAR A LUIS]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO METO ALGO EN UN CONTENEDOR? ¿CÓMO LO SACO?');
	writeText(STR_NEWLINE);
	writeText('METER LLAVE EN CAJA. SACAR LLAVE DE CAJA');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PONGO ALGO SOBRE ALGO? ¿CÓMO LO QUITO?');
	writeText(STR_NEWLINE);
	writeText('PONER LLAVE EN MESA. COGER LLAVE DE MESA');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

//CND MUL A 1 2 0 0

function ACCmul(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) * valor));
}
//CND LISTCONTENTS A 9 0 0 0

function ACClistcontents(locno)
{
   ACClistat(locno, locno)
}
//CND ISNOTDONE C 0 0 0 0

function CNDisnotdone()
{
	return !CNDisdone();
}

//CND SILENCE A 2 0 0 0

function ACCsilence(channelno)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxstop(channelno);
}
//CND BCLEAR A 1 2 0 0

function ACCbclear(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitclear(getFlag(flagno), bitno));
}
//CND ISVIDEO C 0 0 0 0

function CNDisvideo()
{
	if (typeof videoElement == 'undefined') return false;
	if (!videoLoopCount) return false;
	if (videoElement.paused) return false;
	return true;
}

//CND WARNINGS A 2 0 0 0

function ACCwarnings(value)
{
	if (value) showWarnings = true; else showWarnings = false;
}
//CND FADEOUT A 2 2 0 0

function ACCfadeout(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxfadeout(channelno, value);
}
//CND WHATOX A 1 0 0 0

function ACCwhatox(flagno)
{
	var whatoxfound = getReferredObject();
	setFlag(flagno,whatoxfound);
}

//CND RESP A 0 0 0 0

function ACCresp()
{
	in_response = true;
}	

//CND VOLUMEVIDEO A 2 0 0 0


function ACCvolumevideo(value)
{
	if (typeof videoElement != 'undefined') 
		videoElement.volume = value  / 65535;
}

//CND ISNOTRESP C 0 0 0 0

function CNDisnotresp()
{
	return !in_response;	
}

//CND MOD A 1 2 0 0

function ACCmod(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) % valor));
}
//CND PICTUREAT A 2 2 2 0

/*
In order to determine the actual size of both background image and pictureat image they should be loaded, thus two chained "onload" are needed. That is, 
background image is loaded to determine its size, then pictureat image is loaded to determine its size. Size of currently displayed background image cannot
be used as it may have been already stretched.
*/

function ACCpictureat(x,y,picno)
{
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (!filename) return;

	// Check location has a picture, otherwise exit
	var currentBackgroundScreenImage = $('.location_picture');
	if (!currentBackgroundScreenImage) return;

	// Create a new image with the contents of current background image, to be able to calculate original height of image
	var virtualBackgroundImage = new Image();
	// Pass required data as image properties in order to be avaliable at "onload" event
	virtualBackgroundImage.bg_data=[];
	virtualBackgroundImage.bg_data.filename = filename; 
	virtualBackgroundImage.bg_data.x = x;
	virtualBackgroundImage.bg_data.y = y;
	virtualBackgroundImage.bg_data.picno = picno;
	virtualBackgroundImage.bg_data.currentBackgroundScreenImage = currentBackgroundScreenImage;


	// Event triggered when virtual background image is loaded
	virtualBackgroundImage.onload = function()
		{
			var originalBackgroundImageHeight = this.height;
			var scale = this.bg_data.currentBackgroundScreenImage.height() / originalBackgroundImageHeight;

			// Create a new image with the contents of picture to show with PICTUREAT, to be able to calculate height of image
			var virtualPictureAtImage = new Image();
			// Also pass data from background image as property so they are avaliable in the onload event
			virtualPictureAtImage.pa_data = [];
			virtualPictureAtImage.pa_data.x = this.bg_data.x;
			virtualPictureAtImage.pa_data.y = this.bg_data.y;
			virtualPictureAtImage.pa_data.picno = this.bg_data.picno;
			virtualPictureAtImage.pa_data.filename = this.bg_data.filename;
			virtualPictureAtImage.pa_data.scale = scale;
			virtualPictureAtImage.pa_data.currentBackgroundImageWidth = this.bg_data.currentBackgroundScreenImage.width();
			
			// Event triggered when virtual PCITUREAT image is loaded
			virtualPictureAtImage.onload = function ()
			{
		    		var imageHeight = this.height; 
					var x = Math.floor(this.pa_data.x * this.pa_data.scale);
					var y = Math.floor(this.pa_data.y * this.pa_data.scale);
					var newimageHeight = Math.floor(imageHeight * this.pa_data.scale);
					var actualBackgroundImageX = Math.floor((parseInt($('.graphics').width()) - this.pa_data.currentBackgroundImageWidth)/2);;
					var id = 'pictureat_' + this.pa_data.picno;

					// Add new image, notice we are not using the virtual image, but creating a new one
					$('.graphics').append('<img  alt="" id="'+id+'" style="display:none" />');				
					$('#' + id).css('position','absolute');
					$('#' + id).css('left', actualBackgroundImageX + x  + 'px');
					$('#' + id).css('top',y + 'px');
					$('#' + id).css('z-index','100');
					$('#' + id).attr('src', this.pa_data.filename);
					$('#' + id).css('height',newimageHeight + 'px');
					$('#' + id).show();
			}

			// Assign the virtual pictureat image the destinationsrc to trigger the "onload" event
			virtualPictureAtImage.src = this.bg_data.filename;
			};

	// Assign the virtual background image same src as current background to trigger the "onload" event
	virtualBackgroundImage.src = currentBackgroundScreenImage.attr("src");

}

//CND ISNOTSOUND C 1 0 0 0

function CNDisnotsound(channelno)
{
  if ((channelno <1) || (channelno >MAX_CHANNELS)) return false;
  return !(CNDissound(channelno));
}
//CND ATGE C 8 0 0 0

function CNDatge(locno)
{
	return (getFlag(FLAG_LOCATION) >= locno);
}

//CND SETWEIGHT A 4 2 0 0

function ACCsetweight(objno, value)
{
   objectsWeight[objno] = value;
}

//CND COMMAND A 2 0 0 0

function ACCcommand(value)
{
	if (value) {$('.input').show();$('.input').focus();} else $('.input').hide();
}
//CND ISMOV C 0 0 0 0

function CNDismov()
{
	if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)==EMPTY_WORD)) return true;

	if ((getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_VERB)==EMPTY_WORD)) return true;

    if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS)) return true;
    
    return false;
}

//CND OBJAT A 9 1 0 0

function ACCobjat(locno, flagno)
{
	setFlag(flagno, getObjectCountAt(locno));
}
//CND BLOCK A 14 2 2 0

function ACCblock(writeno, picno, procno)
{
   inBlock = true;
   disableInterrupt();
   $('.block_layer').hide();
   var text = getWriteMessageText(writeno);
   $('.block_text').html(text);
   
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var imgsrc = '<img class="block_picture" src="' + filename + '" />';
		$('.block_graphics').html(imgsrc);
	}
    if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
    $('.block_layer').show();

}
//CND CLEAREXIT A 2 0 0 0

function ACCclearexit(wordno)
{
	if ((wordno >= NUM_CONNECTION_VERBS) || (wordno< 0 )) return;
	setConnection(loc_here(),wordno, -1);
}
//CND ISDOALL C 0 0 0 0

function CNDisdoall()
{
	return doall_flag;	
}

//CND GETEXIT A 2 2 0 0

function ACCgetexit(value,flagno)
{
	if (value >= NUM_CONNECTION_VERBS) 
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	var locno = getConnection(loc_here(),value);
	if (locno == -1)
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	setFlag(flagno,locno);
}
//CND VOLUME A 2 2 0 0

function ACCvolume(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxvolume(channelno, value);
}

//CND RNDWRITE A 14 14 14 0

function ACCrndwrite(writeno1,writeno2,writeno3)
{
	var val = Math.floor((Math.random()*3));
	switch (val)
	{
		case 0 : writeWriteMessage(writeno1);break;
		case 1 : writeWriteMessage(writeno2);break;
		case 2 : writeWriteMessage(writeno3);break;
	}
}
//CND LOG A 14 0 0 0

function ACClog(writeno)
{
  console_log(writemessages[writeno]);
}
//CND BSET A 1 2 0 0

function ACCbset(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitset(getFlag(flagno),bitno));
}
//CND HOOK A 14 0 0 5

function ACChook(writeno)
{
	h_code(writemessages[writeno]);
}
//CND ASK W 14 14 1 0

// Global vars for ASK


var inAsk = false;
var ask_responses = null;
var ask_flagno = null;



function ACCask(writeno, writenoOptions, flagno)
{
	inAsk = true;
	writeWriteMessage(writeno);
	ask_responses = getWriteMessageText(writenoOptions);
	ask_flagno = flagno;
}



// hook replacement
var old_ask_h_keydown  = h_keydown;
h_keydown  = function (event)
{
	if (inAsk)
	{
		var keyCodeAsChar = String.fromCharCode(event.keyCode).toLowerCase();
		if (ask_responses.indexOf(keyCodeAsChar)!= -1)
		{
			setFlag(ask_flagno, ask_responses.indexOf(keyCodeAsChar));
			inAsk = false;
			event.preventDefault();
            $('.input').show();
		    $('.input').focus();
		    hideBlock();
			waitKeyCallback();
		};
		return false; // if we are in ASK condact, no keypress should be considered other than ASK response
	} else return old_ask_h_keydown(event);
}

//CND SPACE A 0 0 0 0

function ACCspace()
{
	writeText(' ');
}
//CND TEXTPIC A 2 2 0 0

function ACCtextpic(picno, align)
{
	var style = '';
	var post = '';
	var pre = '';
	switch(align)
	{
		case 0: post='<br style="clear:left">';break;
		case 1: style = 'float:left'; break;
		case 2: style = 'float:right'; break;
		case 3: pre='<center>';post='</center><br style="clear:left">';break;
	}
	filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var texto = pre + "<img alt='' class='textpic' style='"+style+"' src='"+filename+"' />" + post;
		writeText(texto);
		$(".text").scrollTop($(".text")[0].scrollHeight);
	}
}
//CND OBJNOTFOUND C 2 9 0 0

function CNDobjnotfound(attrno, locno)
{
	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return false; }

	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return true;
}
//CND SETEXIT A 2 2 0 0

function ACCsetexit(value, locno)
{
	if (value < NUM_CONNECTION_VERBS) setConnection(loc_here(), value, locno);
}
//CND ATLE C 8 0 0 0

function CNDatle(locno)
{
	return (getFlag(FLAG_LOCATION) <= locno);
}

//CND BNEG A 1 2 0 0

function ACCbneg(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitneg(getFlag(flagno),bitno));
}
//CND FADEIN A 2 2 2 0

function ACCfadein(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'fadein');
}
//CND ONEG A 4 2 0 0

function ACConeg(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitneg(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitneg(attrs, attrno);
	setObjectHighAttributes(objno, attrs);
}

//CND BZERO C 1 2 0 0

function CNDbzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (!bittest(getFlag(flagno), bitno));
}
//CND NORESP A 0 0 0 0

function ACCnoresp()
{
	in_response = false;
}	

//CND EXITS A 8 5 0 0

function ACCexits(locno,mesno)
{
  if ((getFlag(FLAG_LIGHT) == 0) || ((getFlag(FLAG_LIGHT) != 0) && lightObjectsPresent()))
  {
  		var exitcount = 0;
  		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1) exitcount++;
      if (exitcount)
      {
    		writeMessage(mesno);
    		var exitcountprogress = 0;
    		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1)
    		{ 
    			exitcountprogress++;
    			writeMessage(mesno + 2 + i);
    			if (exitcountprogress == exitcount) writeSysMessage(SYSMESS_LISTEND);
    			if (exitcountprogress == exitcount-1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
    			if (exitcountprogress <= exitcount-2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  		  }
      } else writeMessage(mesno + 1);
  } else writeMessage(mesno + 1);
}

//CND BREAK A 0 0 0 0

function ACCbreak()
{
	doall_flag = false; 
	entry_for_doall = '';
}
//CND DIV A 1 2 0 0

function ACCdiv(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) / valor));
}
//CND ISNOTMUSIC C 0 0 0 0

function CNDisnotmusic()
{
  return !CNDismusic();
}

//CND OBJFOUND C 2 9 0 0

function CNDobjfound(attrno, locno)
{

	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return true; }
	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return false;
}

//CND RANDOMX A 1 2 0 0

function ACCrandomx(flagno, value)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*value)));
}
//CND ISSOUND C 1 0 0 0

function CNDissound(channelno)
{
	if ((channelno <1 ) || (channelno > MAX_CHANNELS)) return false;
    return channelActive(channelno);
}
//CND RESUMEVIDEO A 0 0 0 0


function ACCresumevideo()
{
	if (typeof videoElement != 'undefined') 
		if (videoElement.paused)
		  videoElement.play();
}

//CND TITLE A 14 0 0 0

function ACCtitle(writeno)
{
	document.title = writemessages[writeno];
}
//CND ISRESP C 0 0 0 0

function CNDisresp()
{
	return in_response;	
}

//CND PLAYVIDEO A 14 2 2 0

var videoLoopCount;
var videoEscapable;
var videoElement;

function ACCplayvideo(strno, loopCount, settings)
{
	videoEscapable = settings & 1; // if bit 0 of settings is 1, video can be interrupted with ESC key
	if (loopCount == 0) loopCount = -1;
	videoLoopCount = loopCount;

	str = '<video id="videoframe" height="100%">';
	str = str + '<source src="dat/' + writemessages[strno] + '.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">';
	str = str + '<source src="dat/' + writemessages[strno] + '.webm" type="video/webm" codecs="vp8.0, vorbis">';
	str = str + '<source src="dat/' + writemessages[strno] + '.ogg" type="video/ogg" codecs="theora, vorbis">';
	str = str + '</video>';
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#videoframe').css('height','100%');
	$('#videoframe').css('display','block');
	$('#videoframe').css('margin-left','auto');
	$('#videoframe').css('margin-right','auto');
	$('#graphics').show();
	videoElement = document.getElementById('videoframe');
	videoElement.onended = function() 
	{
    	if (videoLoopCount == -1) videoElement.play();
    	else
    	{
    		videoLoopCount--;
    		if (videoLoopCount) videoElement.play();
    	}
	};
	videoElement.play();

}

// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_video_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#videoframe").length > 0) $("#videoframe").remove();	
	old_video_h_description_init();
}

// Hook into keypress to cancel video playing if ESC is pressed and video is skippable

var old_video_h_keydown =  h_keydown;
h_keydown = function (event)
{
 	if ((event.keyCode == 27) && (typeof videoElement != 'undefined') && (!videoElement.ended) && (videoEscapable)) 
 	{
 		videoElement.pause(); 
 		return false;  // we've finished attending ESC press
 	}
 	else return old_video_h_keydown(event);
}




//CND NPCAT A 9 1 0 0

function ACCnpcat(locno, flagno)
{
	setFlag(flagno,getNPCCountAt(locno));
}

// This file is (C) Carlos Sanchez 2014, released under the MIT license


// IMPORTANT: Please notice this file must be encoded with the same encoding the index.html file is, so the "normalize" function works properly.
//            As currently the ngpwas compiler generates utf-8, and the index.html is using utf-8 also, this file must be using that encoding.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                         Auxiliary functions                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General functions
String.prototype.rights= function(n){
    if (n <= 0)
       return "";
    else if (n > String(this).length)
       return this;
    else {
       var iLen = String(this).length;
       return String(this).substring(iLen, iLen - n);
    }
}


String.prototype.firstToLower= function()
{
	return  this.charAt(0).toLowerCase() + this.slice(1);	
}


// Returns true if using Internet Explorer 9 or below, where some features are not supported
function isBadIE () {
  var myNav = navigator.userAgent.toLowerCase();
  if (myNav.indexOf('msie') == -1) return false;
  ieversion =  parseInt(myNav.split('msie')[1]);
  return (ieversion<10);
}


function runningLocal()
{
	return (window.location.protocol == 'file:');
}


// Levenshtein function

function getLevenshteinDistance (a, b)
{
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};

// waitKey helper for all key-wait condacts

function waitKey(callbackFunction)
{
	waitkey_callback_function.push(callbackFunction);
	showAnykeyLayer();
}

function waitKeyCallback()
{
 	var callback = waitkey_callback_function.pop();
	callback();
	if (describe_location_flag) descriptionLoop();  		
}


// Check DOALL entry

function skipdoall(entry)
{
	return  ((doall_flag==true) && (entry_for_doall!='') && (current_process==process_in_doall) && (entry_for_doall > entry));
}

// Dynamic attribute use functions
function getNextFreeAttribute()
{
	var value = nextFreeAttr;
	nextFreeAttr++;
	return value;
}


// Gender functions

function getSimpleGender(objno)  // Simple, for english
{
 	isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	if (isPlural) return "P";
 	isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	if (isFemale) return "F";
 	isMale = objectIsAttr(objno, ATTR_MALE);
 	if (isMale) return "M";
    return "N"; // Neuter
}

function getAdvancedGender(objno)  // Complex, for spanish
{
 	var isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	var isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	var isMale = objectIsAttr(objno, ATTR_MALE);

 	if (!isPlural) 
 	{
	 	if (isFemale) return "F";
	 	if (isMale) return "M";
	    return "N"; // Neuter
 	}
 	else
 	{
	 	if (isFemale) return "PF";
	 	if (isMale) return "PM";
	 	return "PN"; // Neuter plural
 	}

}

function getLang()
{
	var value = bittest(getFlag(FLAG_PARSER_SETTINGS),5);
	if (value) return "ES"; else return "EN";
}

function getObjectFixArticles(objno)
{
	var object_text = getObjectText(objno);
	var object_words = object_text.split(' ');
	if (object_words.length == 1) return object_text;
	var candidate = object_words[0];
	object_words.splice(0, 1);
	if (getLang()=='EN')
	{
		if ((candidate!='an') && (candidate!='a') && (candidate!='some')) return object_text;
		return 'the ' + object_words.join(' ');
	}
	else
	{
		if ( (candidate!='un') && (candidate!='una') && (candidate!='unos') && (candidate!='unas') && (candidate!='alguna') && (candidate!='algunos') && (candidate!='algunas') && (candidate!='algun')) return object_text;
		var gender = getAdvancedGender(objno);
		if (gender == 'F') return 'la ' + object_words.join(' ');
		if (gender == 'M') return 'el ' + object_words.join(' ');
		if (gender == 'N') return 'el ' + object_words.join(' ');
		if (gender == 'PF') return 'las ' + object_words.join(' ');
		if (gender == 'PM') return 'los ' + object_words.join(' ');
		if (gender == 'PN') return 'los ' + object_words.join(' ');
	}	


}



// JS level log functions
function console_log(string)
{
	if (typeof console != "undefined") console.log(string);
}


// Resources functions
function getResourceById(resource_type, id)
{
	for (var i=0;i<resources.length;i++)
	 if ((resources[i][0] == resource_type) && (resources[i][1]==id)) return resources[i][2];
	return false; 
}

// Flag read/write functions
function getFlag(flagno)
{
	 return flags[flagno];
}

function setFlag(flagno, value)
{
	 flags[flagno] = value;
}

// Locations functions
function loc_here()  // Returns current location, avoid direct use of flags
{
	 return getFlag(FLAG_LOCATION);
}


// Connections functions

function setConnection(locno1, dirno, locno2)
{
	connections[locno1][dirno] = locno2;
}

function getConnection(locno, dirno)
{
	return connections[locno][dirno];
}

// Objects text functions

function getObjectText(objno)
{
	return filterText(objects[objno]);
}


// Message text functions
function getMessageText(mesno)
{
	return filterText(messages[mesno]);
}

function getSysMessageText(sysno)
{
	return filterText(sysmessages[sysno]);
}

function getWriteMessageText(writeno)
{
	return filterText(writemessages[writeno]);
}

// Location text functions
function getLocationText(locno)
{
	return  filterText(locations[locno]);
}



// Output processing functions
function implementTag(tag)
{
	tagparams = tag.split('|');
	for (var tagindex=0;tagindex<tagparams.length-1;tagindex++) tagparams[tagindex] = tagparams[tagindex].trim();
	if (tagparams.length == 0) {writeWarning(STR_INVALID_TAG_SEQUENCE_EMPTY); return ''}

	var resolved_hook_value = h_sequencetag(tagparams);
	if (resolved_hook_value!='') return resolved_hook_value;

	switch(tagparams[0].toUpperCase())
	{
		case 'URL': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					return '<a target="newWindow" href="' + tagparams[1]+ '">' + tagparams[2] + '</a>'; // Note: _blank would get the underscore character replaced by current selected object so I prefer to use a different target name as most browsers will open a new window
					break;
		case 'CLASS': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'STYLE': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'INK': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'PAPER': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="background-color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'OBJECT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objects[getFlag(tagparams[1])]) return getObjectFixArticles(getFlag(tagparams[1])); else return '';
					   break;
		case 'WEIGHT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objectsWeight[getFlag(tagparams[1])]) return objectsWeight[getFlag(tagparams[1])]; else return '';
					   break;
		case 'OLOCATION': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					      if(objectsLocation[getFlag(tagparams[1])]) return objectsLocation[getFlag(tagparams[1])]; else return '';
					      break;
		case 'MESSAGE':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(messages[getFlag(tagparams[1])]) return getMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'SYSMESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(sysmessages[getFlag(tagparams[1])]) return getSysMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'LOCATION':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(locations[getFlag(tagparams[1])]) return getLocationText(getFlag(tagparams[1])); else return '';
					   break;
		case 'PROCESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   callProcess(tagparams[1]);
					   return "";
					   break;
		case 'ACTION': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   return '<a href="javascript: void(0)" onclick="orderEnteredLoop(\'' + tagparams[1]+ '\')">' + tagparams[2] + '</a>';
					   break;
		case 'RESTART': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="restart()">' + tagparams[1] + '</a>';
					    break;
		case 'EXTERN': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="' + tagparams[1] + ' ">' + tagparams[2] + '</a>';
					    break;
		case 'TEXTPIC': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						var style = '';
						var post = '';
						var pre = '';
						align = tagparams[2];
						switch(align)
						{
							case 1: style = 'float:left'; break;
							case 2: style = 'float:right'; break;
							case 3: post = '<br />';
							case 4: pre='<center>';post='</center>';break;
						}
						return pre + "<img class='textpic' style='"+style+"' src='"+ RESOURCES_DIR + tagparams[1]+"' />" + post;
					    break;
		case 'HTML': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return tagparams[1];
					    break;
		case 'FLAG': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return getFlag(tagparams[1]);
					    break;
		case 'OREF': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
   			        if(objects[getFlag(FLAG_REFERRED_OBJECT)]) return getObjectFixArticles(getFlag(FLAG_REFERRED_OBJECT)); else return '';
					break;
		case 'TT':  
		case 'TOOLTIP':
					if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					var title = tagparams[1];
					var text = tagparams[2];
					return "<span title='"+title+"'>"+text+"</span>";
					break;
		case 'OPRO': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};  // returns the pronoun for a given object, used for english start database
					 switch (getSimpleGender(getFlag(FLAG_REFERRED_OBJECT)))
					 {
					 	case 'M' : return "him";
					 	case "F" : return "her";
					 	case "N" : return "it";
					 	case "P" : return "them";  // plural returns them
					 }
					break;

		default : return '[[[' + STR_INVALID_TAG_SEQUENCE_BADTAG + ' : ' + tagparams[0] + ']]]';
	}
}

function processTags(text)
{
	//Apply the {} tags filtering
	var pre, post, innerTag;
	tagfilter:
	while (text.indexOf('{') != -1)
	{
		if (( text.indexOf('}') == -1 ) || ((text.indexOf('}') < text.indexOf('{'))))
		{
			writeWarning(STR_INVALID_TAG_SEQUENCE + text);
			break tagfilter;
		}
		pre = text.substring(0,text.indexOf('{'));
		var openbracketcont = 1;
		pointer = text.indexOf('{') + 1;
		innerTag = ''
		while (openbracketcont>0)
		{
			if (text.charAt(pointer) == '{') openbracketcont++;
			if (text.charAt(pointer) == '}') openbracketcont--;
			innerTag = innerTag + text.charAt(pointer);
			pointer++;
		}
		innerTag = innerTag.substring(0,innerTag.length - 1);
		post = text.substring(pointer);
		if (innerTag.indexOf('{') != -1 ) innerTag = processTags(innerTag); 
		innerTag = implementTag(innerTag);
		text = pre + innerTag + post;
	}
	return text;
}

function filterText(text)
{
	// ngPAWS sequences
	text = processTags(text);


	// Superglus sequences (only \n remains)
    text = text.replace(/\n/g, STR_NEWLINE);

	// PAWS sequences (only underscore)
	objno = getFlag(FLAG_REFERRED_OBJECT);
	if ((objno != EMPTY_OBJECT) && (objects[objno]))	text = text.replace(/_/g,objects[objno].firstToLower()); else text = text.replace(/_/g,'');
	text = text.replace(/¬/g,' ');

	return text;
}


// Text Output functions
function writeText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	text = h_writeText(text); // hook
	$('.text').append(text);
	$('.text').scrollTop($('.text')[0].scrollHeight);
	addToTranscript(text);
	if (!skipAutoComplete) addToAutoComplete(text);
	focusInput();
}

function writeWarning(text)
{
	if (showWarnings) writeText(text)
}

function addToTranscript(text)
{
	transcript = transcript + text;		
}

function writelnText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	writeText(text + STR_NEWLINE, skipAutoComplete);
}

function writeMessage(mesno)
{
	if (messages[mesno]!=null) writeText(getMessageText(mesno)); else writeWarning(STR_NEWLINE + STR_WRONG_MESSAGE + ' [' + mesno + ']');
}

function writeSysMessage(sysno)
{
		if (sysmessages[sysno]!=null) writeText(getSysMessageText(sysno)); else writeWarning(STR_NEWLINE + STR_WRONG_SYSMESS + ' [' + sysno + ']');
		$(".text").scrollTop($(".text")[0].scrollHeight);
}

function writeWriteMessage(writeno)
{
		writeText(getWriteMessageText(writeno)); 
}

function writeObject(objno)
{
	writeText(getObjectText(objno));
}

function clearTextWindow()
{
	$('.text').empty();
}


function clearInputWindow()
{
	$('.prompt').val('');
}


function writeLocation(locno)
{
	if (locations[locno]!=null) writeText(getLocationText(locno) + STR_NEWLINE); else writeWarning(STR_NEWLINE + STR_WRONG_LOCATION + ' [' + locno + ']');
}

// Screen control functions

function clearGraphicsWindow()
{
	$('.graphics').empty();	
}


function clearScreen()
{
	clearInputWindow();
	clearTextWindow();
	clearGraphicsWindow();
}

function copyOrderToTextWindow(player_order)
{

	last_player_orders.push(player_order);
	last_player_orders_pointer = 0;
	clearInputWindow();
	writelnText(STR_PROMPT_START + player_order + STR_PROMPT_END, false);
}

function get_prev_player_order()
{
	if (!last_player_orders.length) return '';
	var last = last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];
	if (last_player_orders_pointer < last_player_orders.length - 1) last_player_orders_pointer++;
	return last;
}

function get_next_player_order()
{
	if (!last_player_orders.length) return '';
	if (last_player_orders_pointer > 0) last_player_orders_pointer--;
	return last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];

}



// Graphics functions


function hideGraphicsWindow()
{
		$('.text').removeClass('half_text');
		$('.text').addClass('all_text');
		$('.graphics').removeClass('half_graphics');
		$('.graphics').addClass('hidden');
		if ($('.location_picture')) $('.location_picture').remove();
}



function drawPicture(picno)  
{
	var pictureDraw = false;
	if (graphicsON) 
	{
		if ((isDarkHere()) && (!lightObjectsPresent())) picno = 0;
		var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
		if (filename)
		{
			$('.graphics').removeClass('hidden');
			$('.graphics').addClass('half_graphics');
			$('.text').removeClass('all_text');
			$('.text').addClass('half_text');
			$('.graphics').html('<img alt="" class="location_picture" src="' +  filename + '" />');
			$('.location_picture').css('height','100%');
			pictureDraw = true;
		}
	}

	if (!pictureDraw) hideGraphicsWindow();
}




function clearPictureAt() // deletes all pictures drawn by "pictureAT" condact
{
	$.each($('.graphics img'), function () {
		if ($(this)[0].className!= 'location_picture') $(this).remove();
	});

}

// Turns functions

function incTurns()
{
	turns = getFlag(FLAG_TURNS_LOW) + 256 * getFlag(FLAG_TURNS_HIGH)  + 1;
	setFlag(FLAG_TURNS_LOW, turns % 256);
	setFlag(FLAG_TURNS_HIGH, Math.floor(turns / 256));
}

// input box functions

function disableInput()
{
	$(".input").prop('disabled', true); 
}

function enableInput()
{
	$(".input").prop('disabled', false); 
}

function focusInput()
{
	$(".prompt").focus();
	timeout_progress = 0;
}

// Object default attributes functions

function objectIsNPC(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_NPC);
}

function objectIsLight(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_LIGHT);
}

function objectIsWearable(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_WEARABLE);
}

function objectIsContainer(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_CONTAINER);
}

function objectIsSupporter(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_SUPPORTER);
}


function objectIsAttr(objno, attrno)
{
	if (attrno > 63) return false;
	var attrs = getObjectLowAttributes(objno);
	if (attrno > 31)
	{
		attrs = getObjectHighAttributes(objno);
		attrno = attrno - 32;
	}
	return bittest(attrs, attrno);
}

function isAccesibleContainer(objno)
{
	if (objectIsSupporter(objno)) return true;   // supporter
	if ( objectIsContainer(objno) && !objectIsAttr(objno, ATTR_OPENABLE) ) return true;  // No openable container
	if ( objectIsContainer(objno) && objectIsAttr(objno, ATTR_OPENABLE) && objectIsAttr(objno, ATTR_OPEN)  )  return true;  // No openable & open container
	return false;
}

//Objects and NPC functions

function findMatchingObject(locno)
{
	for (var i=0;i<num_objects;i++)
		if ((locno==-1) || (getObjectLocation(i) == locno))
		 if (((objectsNoun[i]) == getFlag(FLAG_NOUN1)) && (((objectsAdjective[i]) == EMPTY_WORD) || ((objectsAdjective[i]) == getFlag(FLAG_ADJECT1))))  return i;
	return EMPTY_OBJECT;
}

function getReferredObject()
{
	var objectfound = EMPTY_OBJECT; 
	refobject_search: 
	{
		object_id = findMatchingObject(LOCATION_CARRIED);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(LOCATION_WORN);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(loc_here());
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(-1);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	
	}
	return objectfound;
}


function getObjectLowAttributes(objno)
{
	return objectsAttrLO[objno];
}

function getObjectHighAttributes(objno)
{
	return objectsAttrHI[objno]
}


function setObjectLowAttributes(objno, attrs)
{
	objectsAttrLO[objno] = attrs;
}

function setObjectHighAttributes(objno, attrs)
{
	objectsAttrHI[objno] = attrs;
}


function getObjectLocation(objno)
{
	if (objno > last_object_number) 
		writeWarning(STR_INVALID_OBJECT + ' [' + objno + ']');
	return objectsLocation[objno];
}

function setObjectLocation(objno, locno)
{
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) - 1);
	objectsLocation[objno] = locno;
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) + 1);
}



// Sets all flags associated to  referred object by current LS  
function setReferredObject(objno) 
{
	if (objno == EMPTY_OBJECT)
	{
		setFlag(FLAG_REFERRED_OBJECT, EMPTY_OBJECT);
		setFlag(FLAG_REFERRED_OBJECT_LOCATION, LOCATION_NONCREATED);
		setFlag(FLAG_REFERRED_OBJECT_WEIGHT, 0);
		setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, 0);
		setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, 0);
		return;
	}
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setFlag(FLAG_REFERRED_OBJECT_LOCATION, getObjectLocation(objno));
	setFlag(FLAG_REFERRED_OBJECT_WEIGHT, getObjectWeight(objno));
	setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, getObjectLowAttributes(objno));
	setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, getObjectHighAttributes(objno));

}


function getObjectWeight(objno) 
{
	var weight = objectsWeight[objno];
	if ( ((objectIsContainer(objno)) || (objectIsSupporter(objno))) && (weight!=0)) // Container with zero weigth are magic boxes, anything you put inside weigths zero
  		weight = weight + getLocationObjectsWeight(objno);
	return weight;
}


function getLocationObjectsWeight(locno) 
{
	var weight = 0;
	for (var i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			objweight = objectsWeight[i];
			weight += objweight;
			if (objweight > 0)
			{
				if (  (objectIsContainer(i)) || (objectIsSupporter(i)) )
				{	
					weight += getLocationObjectsWeight(i);
				}
			}
		}
	}
	return weight;
}

function getObjectCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			attr = getObjectLowAttributes(i);
			if (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)) count ++;  // Parser settings say we should include NPCs as objects
			 else if (!objectIsNPC(i)) count++;     // or object is not an NPC
		}
	}
	return count;
}


function getObjectCountAtWithAttr(locno, attrnoArray) 
{
	var count = 0;
	for (var i=0;i<num_objects;i++)
		if (getObjectLocation(i) == locno)  
			for (var j=0;j<attrnoArray.length;j++)
				if (objectIsAttr(i, attrnoArray[j])) count++;
	return count;
}


function getNPCCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
		if ((getObjectLocation(i) == locno) &&  (objectIsNPC(i))) count++;
	return count;
}


// Location light function

function lightObjectsAt(locno) 
{
	return getObjectCountAtWithAttr(locno, [ATTR_LIGHT]) > 0;
}


function lightObjectsPresent() 
{
  if (lightObjectsAt(LOCATION_CARRIED)) return true;
  if (lightObjectsAt(LOCATION_WORN)) return true;
  if (lightObjectsAt(loc_here())) return true;
  return false;
}


function isDarkHere()
{
	return (getFlag(FLAG_LIGHT) != 0);
}

// Sound functions


function preloadsfx()
{
	for (var i=0;i<resources.length;i++)
	 	if (resources[i][0] == 'RESOURCE_TYPE_SND') 
	 	{
	 		var fileparts = resources[i][2].split('.');
			var basename = fileparts[0];
			var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] , preload: true} );
	 	}
}

function sfxplay(sfxno, channelno, times, method)
{

	if (!soundsON) return;
	if ((channelno <0) || (channelno >MAX_CHANNELS)) return;
	if (times == 0) times = -1; // more than 4000 million times
	var filename = getResourceById(RESOURCE_TYPE_SND, sfxno);
	if (filename)
	{
		var fileparts = filename.split('.');
		var basename = fileparts[0];
		var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] });
		if (soundChannels[channelno]) soundChannels[channelno].stop();
		soundLoopCount[channelno] = times;
		mySound.bind("ended", function(e) {
			for (sndloop=0;sndloop<MAX_CHANNELS;sndloop++)
				if (soundChannels[sndloop] == this)
				{
					if (soundLoopCount[sndloop]==-1) {this.play(); return }
					soundLoopCount[sndloop]--;
					if (soundLoopCount[sndloop] > 0) {this.play(); return }
					sfxstop(sndloop);
					return;
				}
		});
		soundChannels[channelno] = mySound;
		if (method=='play')	mySound.play(); else mySound.fadeIn(2000);
	}
}

function playLocationMusic(locno)
{
	if (soundsON) 
		{
			sfxstop(0);
			sfxplay(locno, 0, 0, 'play');
		}
}

function musicplay(musicno, times)  
{
	sfxplay(musicno, 0, times);
}

function channelActive(channelno)
{
	if (soundChannels[channelno]) return true; else return false;
}


function sfxstopall() 
{
	for (channelno=0;channelno<MAX_CHANNELS;channelno++) sfxstop(channelno);

}


function sfxstop(channelno)
{
	if (soundChannels[channelno]) 
		{
			soundChannels[channelno].unbind('ended');
			soundChannels[channelno].stop();
			soundChannels[channelno] = null;
		}
}

function sfxvolume(channelno, value)
{
	if (soundChannels[channelno]) soundChannels[channelno].setVolume(Math.floor( value * 100 / 65535)); // Inherited volume condact uses a number among 0 and 65535, buzz library uses 0-100.
}

function isSFXPlaying(channelno)
{
	if (!soundChannels[channelno]) return false;
	return true;
}


function sfxfadeout(channelno, value)
{
	if (!soundChannels[channelno]) return;
	soundChannels[channelno].fadeOut(value, function() { sfxstop(channelno) });
}

// *** Process functions ***

function callProcess(procno)
{
	if (inEND) return;
	current_process = procno;
	var prostr = procno.toString(); 
	while (prostr.length < 3) prostr = "0" + prostr;
	if (procno==0) in_response = true;
	if (doall_flag && in_response) done_flag = false;
	if (!in_response) done_flag = false;
	h_preProcess(procno);
    eval("pro" + prostr + "()");
	h_postProcess(procno);
	if (procno==0) in_response = false;
}

// Bitwise functions

function bittest(value, bitno)
{
	mask = 1 << bitno;
	return ((value & mask) != 0);
}

function bitset(value, bitno)
{

	mask = 1 << bitno;
	return value | mask;
}

function bitclear(value, bitno)
{
	mask = 1 << bitno;
	return value & (~mask);
}


function bitneg(value, bitno) 
{
	mask = 1 << bitno;
	return value ^ mask;

}

// Savegame functions
function getSaveGameObject()
{
	var savegame_object = new Object();
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	savegame_object.flags = flags.slice();
	savegame_object.objectsLocation = objectsLocation.slice();
	savegame_object.objectsWeight = objectsWeight.slice();
	savegame_object.objectsAttrLO = objectsAttrLO.slice();
	savegame_object.objectsAttrHI = objectsAttrHI.slice();
	savegame_object.connections = connections.slice();
	savegame_object = h_saveGame(savegame_object);
	return savegame_object;
}

function restoreSaveGameObject(savegame_object)
{
	flags = savegame_object.flags;
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	objectsLocation = savegame_object.objectsLocation.slice();
	objectsWeight = savegame_object.objectsWeight.slice();
	objectsAttrLO = savegame_object.objectsAttrLO.slice();
	objectsAttrHI = savegame_object.objectsAttrHI.slice();
	connections = savegame_object.connections.slice();
	h_restoreGame(savegame_object);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        The parser                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function loadPronounSufixes()
{

    var swapped;

	for (var j=0;j<vocabulary.length;j++) if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_PRONOUN)
			 pronoun_suffixes.push(vocabulary[j][VOCABULARY_WORD]);
	// Now sort them so the longest are first, so you rather replace SELOS in (COGESELOS=>COGE SELOS == >TAKE THEM) than LOS (COGESELOS==> COGESE LOS ==> TAKExx THEM) that woul not be understood (COGESE is not a verb, COGE is)
    do {
        swapped = false;
        for (var i=0; i < pronoun_suffixes.length-1; i++) 
        {
            if (pronoun_suffixes[i].length < pronoun_suffixes[i+1].length) 
            {
                var temp = pronoun_suffixes[i];
                pronoun_suffixes[i] = pronoun_suffixes[i+1];
                pronoun_suffixes[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function findVocabulary(word, forceDisableLevenshtein)  
{
	// Pending: in general this function is not very efficient. A solution where the vocabulary array is sorted by word so the first search can be binary search
	//          and possible typos are precalculated, so the distance is a lookup table instead of a function, would be much more efficient. On the other hand,
	//          the current solution is fast enough with a 1000+ words game that I don't consider improving this function to have high priority now.

	// Search word in vocabulary
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_WORD] == word)
			 return vocabulary[j];

	if (forceDisableLevenshtein) return null;

	if (word.length <=4) return null; // Don't try to fix typo for words with less than 5 length

	if (bittest(getFlag(FLAG_PARSER_SETTINGS), 8)) return null; // If matching is disabled, we won't try to use levhenstein distance

	// Search words in vocabulary with a Levenshtein distance of 1
	var distance2_match = null;
	for (var k=0;k<vocabulary.length;k++)
	{
		if ([WORDTYPE_VERB,WORDTYPE_NOUN,WORDTYPE_ADJECT,WORDTYPE_ADVERB].indexOf(vocabulary[k][VOCABULARY_TYPE])  != -1 )
		{
			var distance = getLevenshteinDistance(vocabulary[k][VOCABULARY_WORD], word);
			if ((!distance2_match) && (distance==2)) distance2_match = vocabulary[k]; // Save first word with distance=2, in case we don't find any word with distance 1
			if (distance <= 1) return vocabulary[k];
		}
	} 

	// If we found any word with distance 2, return it, only if word was at least 7 characters long
	if ((distance2_match) &&  (word.length >6)) return distance2_match;

	// Word not found
	return null;
}

function normalize(player_order)   
// Removes accented characters and makes sure every sentence separator (colon, semicolon, quotes, etc.) has one space before and after. Also, all separators are converted to comma
{
	var originalchars = 'áéíóúäëïöüâêîôûàèìòùÁÉÍÓÚÄËÏÖÜÂÊÎÔÛÀÈÌÒÙ';
	var i;
	var output = '';
	var pos;

	for (i=0;i<player_order.length;i++) 
	{
		pos = originalchars.indexOf(player_order.charAt(i));
		if (pos!=-1) output = output + "aeiou".charAt(pos % 5); else 
		{
			ch = player_order.charAt(i);
			if ((ch=='.') || (ch==',') || (ch==';') || (ch=='"') || (ch=='\'')) output = output + ' , '; else output = output + player_order.charAt(i); 
		}

	}
	return output;
}

function toParserBuffer(player_order)  // Converts a player order in a list of sentences separated by dot.
{
     player_order = normalize(player_order);
     player_order = player_order.toUpperCase();
    
	 var words = player_order.split(' ');
	 for (var q=0;q<words.length;q++)
	 {
	 	words[q] = words[q].trim();
	 	if  (words[q]!=',')
	 	{
	 		words[q] = words[q].trim();
	 		foundWord = findVocabulary(words[q], false);
	 		if (foundWord)
	 		{
	 			if (foundWord[VOCABULARY_TYPE]==WORDTYPE_CONJUNCTION)
	 			{
	 			words[q] = ','; // Replace conjunctions with commas
		 		} 
	 		}
	 	}
	 }

	 var output = '';
	 for (q=0;q<words.length;q++)
	 {
	 	if (words[q] == ',') output = output + ','; else output = output + words[q] + ' ';
	 }
	 output = output.replace(/ ,/g,',');
	 output = output.trim();
	 player_order_buffer = output;
}

function getSentencefromBuffer()
{
	var sentences = player_order_buffer.split(',');
	var result = sentences[0];
	sentences.splice(0,1);
	player_order_buffer = sentences.join();
	return result;
}

function processPronounSufixes(words)  
{
	// This procedure will split pronominal sufixes into separated words, so COGELA will become COGE LA at the end, and work exactly as TAKE IT does.
	// it's only for spanish so if lang is english then it makes no changes
	if (getLang() == 'EN') return words;
	var verbFound = false;
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),0)) return words;  // If pronoun sufixes inactive, just do nothing
	// First, we clear the word list from any match with pronouns, cause if we already have something that matches pronouns, probably is just concidence, like in COGE LA LLAVE
	var filtered_words = [];
	for (var q=0;q < words.length;q++)
	{
		foundWord = findVocabulary(words[q], false);
		if (foundWord) 
			{
				if (foundWord[VOCABULARY_TYPE] != WORDTYPE_PRONOUN) filtered_words[filtered_words.length] = words[q];
			}
			else filtered_words[filtered_words.length] = words[q];
	}
	words = filtered_words;

	// Now let's start trying to get sufixes
	new_words = [];
	for (var k=0;k < words.length;k++)
	{
		words[k] = words[k].trim();
		foundWord = findVocabulary(words[k], true); // true to disable Levenshtein distance applied
		if (foundWord) if (foundWord[VOCABULARY_TYPE] == WORDTYPE_VERB) verbFound = true;  // If we found a verb, we don't look for pronoun sufixes, as they have to come together with verb
		suffixFound = false;
		pronunsufix_search:
		for (var l=0;(l<pronoun_suffixes.length) && (!suffixFound) && (!verbFound);l++)
		{

			if (pronoun_suffixes[l] == words[k].rights(pronoun_suffixes[l].length))
			{
				var verb_part = words[k].substring(0,words[k].length - pronoun_suffixes[l].length);
				var checkWord = findVocabulary(verb_part, false);
				if ((!checkWord)  || (checkWord[VOCABULARY_TYPE] != WORDTYPE_VERB))  // If the part before the supposed-to-be pronoun sufix is not a verb, then is not a pronoun sufix
				{
					new_words.push(words[k]);	
					continue pronunsufix_search;
				}
				new_words.push(verb_part);  // split the word in two parts: verb + pronoun. Since that very moment it works like in english (COGERLO ==> COGER LO as of TAKE IT)
				new_words.push(pronoun_suffixes[l]);
				suffixFound = true;
				verbFound = true;
			}
		}
		if (!suffixFound) new_words.push(words[k]);
	}
	return new_words;
}

function getLogicSentence()
{
	parser_word_found = false; ;
	aux_verb = -1;
	aux_noun1 = -1;
	aux_adject1 = -1;
	aux_adverb = -1;
	aux_pronoun = -1
	aux_pronoun_adject = -1
	aux_preposition = -1;
	aux_noun2 = -1;
	aux_adject2 = -1;
	initializeLSWords();
	SL_found = false;

	var order = getSentencefromBuffer();
	setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS),1)); // Initialize flag that says an unknown word was found in the sentence


	words = order.split(" ");
	words = processPronounSufixes(words);
	wordsearch_loop:
	for (var i=0;i<words.length;i++)
	{
		original_word = currentword = words[i];
		if (currentword.length>10) currentword = currentword.substring(0,MAX_WORD_LENGHT);
		foundWord = findVocabulary(currentword, false);
		if (foundWord)
		{
			wordtype = foundWord[VOCABULARY_TYPE];
			word_id = foundWord[VOCABULARY_ID];

			switch (wordtype)
			{
				case WORDTYPE_VERB: if (aux_verb == -1)  aux_verb = word_id; 
				        			break;

				case WORDTYPE_NOUN: if (aux_noun1 == -1) aux_noun1 = word_id; else if (aux_noun2 == -1) aux_noun2 = word_id;
									break;

				case WORDTYPE_ADJECT: if (aux_adject1 == -1) aux_adject1 = word_id; else if (aux_adject2 == -1) aux_adject2 = word_id;
									  break;

				case WORDTYPE_ADVERB: if (aux_adverb == -1) aux_adverb = word_id;
				        			  break;

				case WORDTYPE_PRONOUN: if (aux_pronoun == -1) 
											{
												aux_pronoun = word_id;
												if ((previous_noun != EMPTY_WORD) && (aux_noun1 == -1))
												{
													aux_noun1 = previous_noun;
													if (previous_adject != EMPTY_WORD) aux_adject1 = previous_adject;
												}
											}

				        			   break;

				case WORDTYPE_CONJUNCTION: break wordsearch_loop; // conjunction or nexus. Should not appear in this function, just added for security
				
				case WORDTYPE_PREPOSITION: if (aux_preposition == -1) aux_preposition = word_id;
										   if (aux_noun1!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),2));  // Set bit that determines that a preposition word was found after first noun
										   break;
			}

			// Nouns that can be converted to verbs
			if ((aux_noun1!=-1) && (aux_verb==-1) && (aux_noun1 < NUM_CONVERTIBLE_NOUNS))
			{
				aux_verb = aux_noun1;
				aux_noun1 = -1;
			}

			if ((aux_verb==-1) && (aux_noun1!=-1) && (previous_verb!=EMPTY_WORD)) aux_verb = previous_verb;  // Support "TAKE SWORD AND SHIELD" --> "TAKE WORD AND TAKE SHIELD"

			if ((aux_verb!=-1) || (aux_noun1!=-1) || (aux_adject1!=-1 || (aux_preposition!=-1) || (aux_adverb!=-1))) SL_found = true;



		} else if (aux_verb!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),1));  // Set bit that determines that an unknown word was found after the verb
	}

	if (SL_found)
	{
		if (aux_verb != -1) setFlag(FLAG_VERB, aux_verb);
		if (aux_noun1 != -1) setFlag(FLAG_NOUN1, aux_noun1);
		if (aux_adject1 != -1) setFlag(FLAG_ADJECT1, aux_adject1);
		if (aux_adverb != -1) setFlag(FLAG_ADVERB, aux_adverb);
		if (aux_pronoun != -1) 
			{
				setFlag(FLAG_PRONOUN, aux_noun1);
				setFlag(FLAG_PRONOUN_ADJECT, aux_adject1);
			}
			else
			{
				setFlag(FLAG_PRONOUN, EMPTY_WORD);
				setFlag(FLAG_PRONOUN_ADJECT, EMPTY_WORD);
			}
		if (aux_preposition != -1) setFlag(FLAG_PREP, aux_preposition);
		if (aux_noun2 != -1) setFlag(FLAG_NOUN2, aux_noun2);
		if (aux_adject2 != -1) setFlag(FLAG_ADJECT2, aux_adject2);
		setReferredObject(getReferredObject());
		previous_verb = aux_verb;
		if ((aux_noun1!=-1) && (aux_noun1>=NUM_PROPER_NOUNS))
		{
			previous_noun = aux_noun1;
			if (aux_adject1!=-1) previous_adject = aux_adject1;
		}
		
	}
	if ((aux_verb + aux_noun1+ aux_adject1 + aux_adverb + aux_pronoun + aux_preposition + aux_noun2 + aux_adject2) != -8) parser_word_found = true;

	return SL_found;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        Main functions and main loop                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Interrupt functions

function enableInterrupt()
{
	interruptDisabled = false;
}

function disableInterrupt()
{
	interruptDisabled = true;
}

function timer()
{
	// Timeout control
	timeout_progress=  timeout_progress + 1/32;  //timer happens every 40 milliseconds, but timeout counter should only increase every 1.28 seconds (according to PAWS documentation)
	timeout_length = getFlag(FLAG_TIMEOUT_LENGTH);
	if ((timeout_length) && (timeout_progress> timeout_length))  // time for timeout
	{
		timeout_progress = 0;
		if (($('.prompt').val() == '')  || (($('.prompt').val()!='') && (!bittest(getFlag(FLAG_TIMEOUT_SETTINGS),0))) )  // but first check there is no text type, or is allowed to timeout when text typed already
		{
			setFlag(FLAG_TIMEOUT_SETTINGS, bitset(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
			writeSysMessage(SYSMESS_TIMEOUT);	
			callProcess(PROCESS_TURN);
		}
	}	

	// PAUSE condact control
	if (inPause)
	{
		pauseRemainingTime = pauseRemainingTime - 40; // every tick = 40 milliseconds
		if (pauseRemainingTime<=0)
		{
			inPause = false;
			hideAnykeyLayer();
			waitKeyCallback()
		}
	}

	// Interrupt process control
	if (!interruptDisabled)
	if (interruptProcessExists)
	{
		callProcess(interrupt_proc);
		setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
	}

	// Set timer again
	setTimeout(function (){
	     	timer();
     },TIMER_MILLISECONDS);
}

// Initialize and finalize functions

function farewell()
{
	writeSysMessage(SYSMESS_FAREWELL);
	ACCnewline();
}


function initializeConnections()
{
  connections = [].concat(connections_start);
}

function initializeObjects()
{
  for (i=0;i<objects.length;i++)
  {
  	objectsAttrLO = [].concat(objectsAttrLO_start);
  	objectsAttrHI = [].concat(objectsAttrHI_start);
  	objectsLocation = [].concat(objectsLocation_start);
  	objectsWeight = [].concat(objectsWeight_start);
  }
}

function  initializeLSWords()
{
  setFlag(FLAG_PREP,EMPTY_WORD);
  setFlag(FLAG_NOUN2,EMPTY_WORD);
  setFlag(FLAG_ADJECT2,EMPTY_WORD);
  setFlag(FLAG_PRONOUN,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_VERB,EMPTY_WORD);
  setFlag(FLAG_NOUN1,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_ADVERB,EMPTY_WORD);
}


function initializeFlags()
{
  flags = [];
  for (var  i=0;i<FLAG_COUNT;i++) flags.push(0);
  setFlag(FLAG_MAXOBJECTS_CARRIED,4);
  setFlag(FLAG_PARSER_SETTINGS,9); // Pronoun sufixes active, DOALL and others ignore NPCs, etc. 00001001
  setFlag(FLAG_MAXWEIGHT_CARRIED,10);
  initializeLSWords();
  setFlag(FLAG_OBJECT_LIST_FORMAT,64); // List objects in a single sentence (comma separated)
  setFlag(FLAG_OBJECTS_CARRIED_COUNT,carried_objects);  // FALTA: el compilador genera esta variable, hay que cambiarlo en el compilador, ERA numero_inicial_de_objetos_llevados
}

function initializeInternalVars()
{
	num_objects = last_object_number + 1;
	transcript = '';
	timeout_progress = 0;
	previous_noun = EMPTY_WORD;
	previous_verb = EMPTY_WORD;
	previous_adject = EMPTY_WORD;
	player_order_buffer = '';
	last_player_orders = [];
	last_player_orders_pointer = 0;
	graphicsON = true; 
	soundsON = true; 
	interruptDisabled = false;
	unblock_process = null;
	done_flag = false;
	describe_location_flag =false;
	in_response = false;
	success = false;
	doall_flag = false;
	entry_for_doall	= '';
}

function initializeSound()
{
	sfxstopall();
}




function initialize()
{
	preloadsfx();
	initializeInternalVars();
	initializeSound();
	initializeFlags();
	initializeObjects();
	initializeConnections();
}



// Main loops

function descriptionLoop()
{
	do
	{
		describe_location_flag = false;
		if (!getFlag(FLAG_MODE)) clearTextWindow();
		if ((isDarkHere()) && (!lightObjectsPresent())) writeSysMessage(SYSMESS_ISDARK); else writeLocation(loc_here()); 
		//h_description_init(); //CiberSheep check before publishing
		playLocationMusic(loc_here());
		if (loc_here()) drawPicture(loc_here()); else hideGraphicsWindow(); // Don't show picture at location 0
		ACCminus(FLAG_AUTODEC2,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC3,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC4,1);
		callProcess(PROCESS_DESCRIPTION);
		h_description_post();
		if (describe_location_flag) continue; // descriptionLoop() again without nesting
		describe_location_flag = false;
		callProcess(PROCESS_TURN);
		if (describe_location_flag) continue; 
		describe_location_flag = false;
		focusInput();
		break; // Dirty trick to make this happen just one, but many times if descriptioLoop() should be repeated
	} while (true);

}

function orderEnteredLoop(player_order)
{
	previous_verb = EMPTY_WORD;
	setFlag(FLAG_TIMEOUT_SETTINGS, bitclear(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
	if (player_order == '') {writeSysMessage(SYSMESS_SORRY); ACCnewline(); return; };	
	player_order = h_playerOrder(player_order); //hook
	copyOrderToTextWindow(player_order);
	toParserBuffer(player_order);
	do 
	{
		describe_location_flag = false;
		ACCminus(FLAG_AUTODEC5,1);
		ACCminus(FLAG_AUTODEC6,1);
		ACCminus(FLAG_AUTODEC7,1);
		ACCminus(FLAG_AUTODEC8,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC9,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC10,1);
		
		if (describe_location_flag) 
		{
			descriptionLoop();
			return;
		};

		if (getLogicSentence())
		{
			incTurns();
			done_flag = false;
			callProcess(PROCESS_RESPONSE); // Response table
			if (describe_location_flag) 
			{
				descriptionLoop();
				return;
			};
			if (!done_flag) 
			{
				if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (CNDmove(FLAG_LOCATION)))
				{
					descriptionLoop();
					return;
				} else if (getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) {writeSysMessage(SYSMESS_WRONGDIRECTION);ACCnewline();}	else {writeSysMessage(SYSMESS_CANTDOTHAT);ACCnewline();};

			}
		} else
		{
			h_invalidOrder(player_order);
			if (parser_word_found) {writeSysMessage(SYSMESS_IDONTUNDERSTAND);   ACCnewline() }
			    		      else {writeSysMessage(SYSMESS_NONSENSE_SENTENCE); ACCnewline() };	
		}  
		callProcess(PROCESS_TURN);
	} while (player_order_buffer !='');
	previous_verb = ''; // Can't use previous verb if a new order is typed (we keep previous noun though, it can be used)
	focusInput();
}


function restart()
{
	location.reload();	
}


function hideBlock()
{
	clearInputWindow();
    $('.block_layer').hide('slow');
    enableInterrupt();   	
    $('.input').show();  
    focusInput();
}

function hideAnykeyLayer()
{
	$('.anykey_layer').hide();
    $('.input').show();  
    focusInput();   
}

function showAnykeyLayer()
{
	$('.anykey_layer').show();
    $('.input').hide();  
}

//called when the block layer is closed
function closeBlock()
{
	if (!inBlock) return;
	inBlock = false;
	hideBlock();
    var proToCall = unblock_process;
	unblock_process = null;
	callProcess(proToCall);
	if (describe_location_flag) descriptionLoop();
}

function setInputPlaceHolder()
{
	var prompt_msg = getFlag(FLAG_PROMPT);
	if (!prompt_msg)
	{
		var random = Math.floor((Math.random()*100));
		if (random<30) prompt_msg = SYSMESS_PROMPT0; else
		if ((random>=30) && (random<60)) prompt_msg = SYSMESS_PROMPT1; else
		if ((random>=60) && (random<90)) prompt_msg = SYSMESS_PROMPT2; else
		if (random>=90) prompt_msg = SYSMESS_PROMPT3;
	}
	$('.prompt').attr('placeholder', getSysMessageText(prompt_msg));
}


function divTextScrollUp()
{
   	var currentPos = $('.text').scrollTop();
	if (currentPos>=DIV_TEXT_SCROLL_STEP) $('.text').scrollTop(currentPos - DIV_TEXT_SCROLL_STEP);
}

function divTextScrollDown()
{
   	var currentPos = $('.text').scrollTop();
   	if (currentPos <= ($('.text')[0].scrollHeight - DIV_TEXT_SCROLL_STEP)) $('.text').scrollTop(currentPos + DIV_TEXT_SCROLL_STEP);
}

// Autocomplete functions

function predictiveText(currentText)
{
	if (currentText == '') return currentText;
	var wordToComplete;
	var words = currentText.split(' ');
	if (autocompleteStep!=0) wordToComplete = autocompleteBaseWord; else wordToComplete = words[words.length-1];
	words[words.length-1] = completedWord(wordToComplete);
	return words.join(' ');
}


function initAutoComplete()
{
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_VERB)
			if (vocabulary[j][VOCABULARY_WORD].length >= 3)
				autocomplete.push(vocabulary[j][VOCABULARY_WORD].toLowerCase());
}

function addToAutoComplete(sentence)
{
	var words = sentence.split(' ');
	for (var i=0;i<words.length;i++)
	{
		var finalWord = '';
		for (var j=0;j<words[i].length;j++)
		{
			var c = words[i][j].toLowerCase();
			if ("abcdefghijklmnopqrstuvwxyzáéíóúàèìòùçäëïÖüâêîôû".indexOf(c) != -1) finalWord = finalWord + c;
			else break;
		}
	
		if (finalWord.length>=3) 
		{
			var index = autocomplete.indexOf(finalWord);
			if (index!=-1) autocomplete.splice(index,1);
			autocomplete.push(finalWord);
		}
	}
}

function completedWord(word)
{
	if (word=='') return '';
   autocompleteBaseWord  =word;
   var foundCount = 0;
   for (var i = autocomplete.length-1;i>=0; i--)
   {
   	  if (autocomplete[i].length > word.length) 
   	  	 if (autocomplete[i].indexOf(word)==0) 
   	  	 	{
   	  	 		foundCount++;
   	  	 		if (foundCount>autocompleteStep)
   	  	 		{
   	  	 			autocompleteStep++;
   	  	 			return autocomplete[i];
   	  	 		}
   	  	 	}
   }
   return word;
}


// Exacution starts here, called by the html file on document.ready()
function start()
{
	h_init(); //hook
	$('.graphics').addClass('half_graphics');
	$('.text').addClass('half_text');
	if (isBadIE()) alert(STR_BADIE)
	loadPronounSufixes();	
    setInputPlaceHolder();
    initAutoComplete();

	// Assign keypress action for input box (detect enter key press)
	$('.prompt').keypress(function(e) {  
    	if (e.which == 13) 
    	{ 
    		setInputPlaceHolder();
    		player_order = $('.prompt').val();
    		if (player_order.charAt(0) == '#')
    		{
    			addToTranscript(player_order + STR_NEWLINE);
    			clearInputWindow();
    		} 
    		else
    		if (player_order!='') 
    				orderEnteredLoop(player_order);
    	}
    });

	// Assign arrow up key press to recover last order
    $('.prompt').keyup( function(e) {
    	if (e.which  == 38) $('.prompt').val(get_prev_player_order());
    	if (e.which  == 40) $('.prompt').val(get_next_player_order());
    });


    // Assign tab keydown to complete word
    $('.prompt').keydown( function(e) {
    	if (e.which == 9) 
    		{
    			$('.prompt').val(predictiveText($('.prompt').val()));
    			e.preventDefault();
    		} else 
    		{
		    	autocompleteStep = 0;
    			autocompleteBaseWord = ''; // Any keypress other than tab resets the autocomplete feature
    		}
    });

    //Detect resize to change flag 12
     $(window).resize(function () {
     	setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
     	clearPictureAt();
     	return;
     });


     // assign any click on block layer --> close it
     $(document).click( function(e) {
     	if (inBlock)
     	{
     		closeBlock();
     		e.preventDefault();
     		return;
     	}

     	if (inAnykey)  // return for ANYKEY, accepts mouse click
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		waitKeyCallback();
     		e.preventDefault();
     		return;
    	}

     });

     //Make tap act as click
    document.addEventListener('touchstart', function(e) {$(document).click(); }, false);   
     
     
	$(document).keydown(function(e) {

		if (!h_keydown(e)) return; // hook

		// if waiting for END response
		if (inEND)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endYESresponseCode == e.keyCode) location.reload(); 
			if (endNOresponseCode == e.keyCode)  
			{
				inEND = false;
				sfxstopall();
				$('body').hide('slow');
			}
			return;
		}


		// if waiting for QUIT response
		if (inQUIT)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endNOresponseCode == e.keyCode) 
			{
	           inQUIT=false;
			   waitkey_callback_function.pop();
			   hideAnykeyLayer();
			   e.preventDefault();
			}

			if (endYESresponseCode == e.keyCode) 
			{
				inQUIT=false;
     			e.preventDefault();
				waitKeyCallback();
     			return;				
			}
		}


		if (inGetkey)  // return for getkey
     	{
     		setFlag(getkey_return_flag, e.keyCode);
     		getkey_return_flag = null;
     		inGetkey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
      	}


     	if (inAnykey)  // return for anykey
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
     	}

		// if keypress and block displayed, close it
     	if (inBlock)
     		{
     			closeBlock();
     			e.preventDefault();
     			return;
     		}


     	// if ESC pressed and transcript layer visible, close it
     	if ((inTranscript) &&  (e.keyCode == 27)) 
     		{
     			$('.transcript_layer').hide();
     			inTranscript = false;
     			e.preventDefault();
     			return;
     		}

     	// Scroll text window using PgUp/PgDown
        if (e.keyCode==33)  // PgUp
        {
        	divTextScrollUp();
        	e.preventDefault();
        	return;
        }
        if (e.keyCode==34)  // PgDown
        {
        	divTextScrollDown();
        }


	});


    $(document).bind('mousewheel',function(e)
    {
  		if(e.originalEvent.wheelDelta /120 > 0) divTextScrollUp(); else divTextScrollDown();
    });


	initialize();
	descriptionLoop();
	focusInput();
	
	h_post();  //hook

    // Start interrupt process
    setTimeout(function (){
    	timer();
    },TIMER_MILLISECONDS);

}

$('document').ready(
	function ()
	{
		start();
	}
	);

// VOCABULARY

vocabulary = [];
vocabulary.push([2, "A", 6]);
vocabulary.push([11, "ABAJO", 1]);
vocabulary.push([25, "ABANDONA", 0]);
vocabulary.push([25, "ABANDONDAR", 0]);
vocabulary.push([25, "ABANDONO", 0]);
vocabulary.push([105, "ABRAZA", 0]);
vocabulary.push([105, "ABRAZAR", 0]);
vocabulary.push([64, "ABRE", 0]);
vocabulary.push([64, "ABRIR", 0]);
vocabulary.push([40, "ACARICIA", 0]);
vocabulary.push([40, "ACARICIAR", 0]);
vocabulary.push([99, "ACERCA", 0]);
vocabulary.push([99, "ACERCAR", 0]);
vocabulary.push([120, "ACERCATE", 0]);
vocabulary.push([94, "ACORDARSE", 0]);
vocabulary.push([94, "ACORDARTE", 0]);
vocabulary.push([103, "ACTIVA", 0]);
vocabulary.push([103, "ACTIVAR", 0]);
vocabulary.push([94, "ACUERDATE", 0]);
vocabulary.push([115, "AD", 0]);
vocabulary.push([106, "ADQUIERE", 0]);
vocabulary.push([106, "ADQUIERESE", 0]);
vocabulary.push([106, "ADQUIRIR", 0]);
vocabulary.push([20, "AGARR", 0]);
vocabulary.push([20, "AGARRA", 0]);
vocabulary.push([20, "AGARRAR", 0]);
vocabulary.push([20, "AGARRO", 0]);
vocabulary.push([49, "AGITA", 0]);
vocabulary.push([49, "AGITAR", 0]);
vocabulary.push([49, "AGITO", 0]);
vocabulary.push([46, "AGREDE", 0]);
vocabulary.push([46, "AGREDIR", 0]);
vocabulary.push([57, "AGUA", 1]);
vocabulary.push([77, "AGUJE", 1]);
vocabulary.push([77, "AGUJERO", 1]);
vocabulary.push([60, "AIRE", 1]);
vocabulary.push([2, "AL", 6]);
vocabulary.push([11, "ALTOS", 2]);
vocabulary.push([90, "ANDA", 0]);
vocabulary.push([90, "ANDAR", 0]);
vocabulary.push([54, "ANUDA", 0]);
vocabulary.push([54, "ANUDAR", 0]);
vocabulary.push([67, "APAGA", 0]);
vocabulary.push([67, "APAGAR", 0]);
vocabulary.push([67, "APAGO", 0]);
vocabulary.push([111, "APRETAR", 0]);
vocabulary.push([111, "APRIETA", 0]);
vocabulary.push([111, "APRIETO", 0]);
vocabulary.push([99, "APROXIMA", 0]);
vocabulary.push([99, "APROXIMAR", 0]);
vocabulary.push([58, "ARBOL", 1]);
vocabulary.push([79, "ARRANCA", 0]);
vocabulary.push([79, "ARRANCAR", 0]);
vocabulary.push([83, "ARRASTRA", 0]);
vocabulary.push([83, "ARRASTRAR", 0]);
vocabulary.push([10, "ARRIBA", 1]);
vocabulary.push([99, "ARRIMA", 0]);
vocabulary.push([99, "ARRIMAR", 0]);
vocabulary.push([32, "ARROJA", 0]);
vocabulary.push([32, "ARROJAR", 0]);
vocabulary.push([32, "ARROJARSE", 0]);
vocabulary.push([32, "ARROJASE", 0]);
vocabulary.push([32, "ARROJO", 0]);
vocabulary.push([57, "ARROY", 1]);
vocabulary.push([57, "ARROYO", 1]);
vocabulary.push([57, "ARROYUELO", 1]);
vocabulary.push([10, "ASCENDER", 0]);
vocabulary.push([10, "ASCIENDE", 0]);
vocabulary.push([46, "ASESINA", 0]);
vocabulary.push([46, "ASESINAR", 0]);
vocabulary.push([116, "ASOMA", 0]);
vocabulary.push([116, "ASOMAR", 0]);
vocabulary.push([116, "ASOMO", 0]);
vocabulary.push([117, "ASUST", 0]);
vocabulary.push([117, "ASUSTAR", 0]);
vocabulary.push([117, "ASUSTO", 0]);
vocabulary.push([54, "ATA", 0]);
vocabulary.push([46, "ATACA", 0]);
vocabulary.push([46, "ATACAR", 0]);
vocabulary.push([54, "ATAR", 0]);
vocabulary.push([34, "AYUDA", 0]);
vocabulary.push([60, "AZUFR", 1]);
vocabulary.push([60, "AZUFRE", 1]);
vocabulary.push([112, "BAILA", 0]);
vocabulary.push([112, "BAILAR", 0]);
vocabulary.push([11, "BAJA", 0]);
vocabulary.push([11, "BAJAR", 0]);
vocabulary.push([11, "BAJARSE", 0]);
vocabulary.push([11, "BAJARTE", 0]);
vocabulary.push([11, "BAJATE", 0]);
vocabulary.push([8, "BAJO", 6]);
vocabulary.push([50, "BALANCEA", 0]);
vocabulary.push([50, "BALANCEAR", 0]);
vocabulary.push([50, "BALANCEARS", 0]);
vocabulary.push([50, "BALANCEART", 0]);
vocabulary.push([50, "BALANCEATE", 0]);
vocabulary.push([90, "BARRO", 1]);
vocabulary.push([39, "BEBE", 0]);
vocabulary.push([39, "BEBER", 0]);
vocabulary.push([39, "BEBERSE", 0]);
vocabulary.push([39, "BEBERTE", 0]);
vocabulary.push([39, "BEBETE", 0]);
vocabulary.push([39, "BEBO", 0]);
vocabulary.push([62, "BESA", 0]);
vocabulary.push([62, "BESAME", 0]);
vocabulary.push([62, "BESAR", 0]);
vocabulary.push([111, "BOCA", 1]);
vocabulary.push([76, "BORDE", 1]);
vocabulary.push([58, "BOSQU", 1]);
vocabulary.push([58, "BOSQUE", 1]);
vocabulary.push([101, "BOTA", 1]);
vocabulary.push([101, "BOTAS", 1]);
vocabulary.push([53, "BOTEL", 1]);
vocabulary.push([53, "BOTELLA", 1]);
vocabulary.push([107, "BRILL", 1]);
vocabulary.push([107, "BRILLO", 1]);
vocabulary.push([45, "BRINCA", 0]);
vocabulary.push([45, "BRINCAR", 0]);
vocabulary.push([45, "BRINCARSE", 0]);
vocabulary.push([45, "BRINCARTE", 0]);
vocabulary.push([45, "BRINCATE", 0]);
vocabulary.push([118, "BUSCA", 0]);
vocabulary.push([118, "BUSCAR", 0]);
vocabulary.push([118, "BUSCO", 0]);
vocabulary.push([56, "CABAÑ", 1]);
vocabulary.push([56, "CABAÑA", 1]);
vocabulary.push([119, "CABRON", 0]);
vocabulary.push([47, "CAGA", 0]);
vocabulary.push([47, "CAGAR", 0]);
vocabulary.push([47, "CAGARSE", 0]);
vocabulary.push([47, "CAGARTE", 0]);
vocabulary.push([47, "CAGATE", 0]);
vocabulary.push([66, "CAMIN", 1]);
vocabulary.push([90, "CAMINA", 0]);
vocabulary.push([90, "CAMINAR", 0]);
vocabulary.push([66, "CAMINO", 1]);
vocabulary.push([90, "CANDA", 1]);
vocabulary.push([90, "CANDADO", 1]);
vocabulary.push([120, "CANON", 1]);
vocabulary.push([44, "CANTA", 0]);
vocabulary.push([44, "CANTAR", 0]);
vocabulary.push([119, "CAPULLO", 0]);
vocabulary.push([27, "CARGA", 0]);
vocabulary.push([27, "CARGAR", 0]);
vocabulary.push([29, "CARGARAM", 0]);
vocabulary.push([93, "CARTE", 1]);
vocabulary.push([93, "CARTEL", 1]);
vocabulary.push([56, "CASA", 1]);
vocabulary.push([92, "CASCA", 1]);
vocabulary.push([92, "CASCADA", 1]);
vocabulary.push([56, "CASIT", 1]);
vocabulary.push([56, "CASITA", 1]);
vocabulary.push([51, "CAVA", 0]);
vocabulary.push([51, "CAVAR", 0]);
vocabulary.push([56, "CAVER", 1]);
vocabulary.push([56, "CAVERNA", 1]);
vocabulary.push([19, "CERRADURA", 1]);
vocabulary.push([65, "CERRAR", 0]);
vocabulary.push([75, "CHARC", 1]);
vocabulary.push([75, "CHARCO", 1]);
vocabulary.push([75, "CHARCOS", 1]);
vocabulary.push([77, "CHILLA", 0]);
vocabulary.push([77, "CHILLAR", 0]);
vocabulary.push([63, "CHUPA", 0]);
vocabulary.push([63, "CHUPAR", 0]);
vocabulary.push([65, "CIERRA", 0]);
vocabulary.push([79, "CLARO", 1]);
vocabulary.push([65, "CLOSE", 0]);
vocabulary.push([20, "COGE", 0]);
vocabulary.push([20, "COGER", 0]);
vocabulary.push([20, "COJO", 0]);
vocabulary.push([65, "COLIN", 1]);
vocabulary.push([65, "COLINA", 1]);
vocabulary.push([50, "COLUMPIARS", 0]);
vocabulary.push([50, "COLUMPIART", 0]);
vocabulary.push([50, "COLUMPIATE", 0]);
vocabulary.push([38, "COME", 0]);
vocabulary.push([38, "COMER", 0]);
vocabulary.push([38, "COMERSE", 0]);
vocabulary.push([38, "COMERTE", 0]);
vocabulary.push([38, "COMETE", 0]);
vocabulary.push([38, "COMO", 0]);
vocabulary.push([106, "COMPRA", 0]);
vocabulary.push([106, "COMPRAR", 0]);
vocabulary.push([106, "COMPRARSE", 0]);
vocabulary.push([106, "COMPRARTE", 0]);
vocabulary.push([106, "COMPRASE", 0]);
vocabulary.push([106, "COMPRATE", 0]);
vocabulary.push([9, "CON", 6]);
vocabulary.push([103, "CONECTA", 0]);
vocabulary.push([103, "CONECTAR", 0]);
vocabulary.push([107, "CONSULTA", 0]);
vocabulary.push([107, "CONSULTAR", 0]);
vocabulary.push([90, "CORRE", 0]);
vocabulary.push([90, "CORRER", 0]);
vocabulary.push([52, "CORTA", 0]);
vocabulary.push([118, "CORTADO", 1]);
vocabulary.push([52, "CORTAR", 0]);
vocabulary.push([6, "CUIDADOSAM", 3]);
vocabulary.push([119, "CULO", 0]);
vocabulary.push([24, "D", 0]);
vocabulary.push([73, "DA", 0]);
vocabulary.push([73, "DALE", 0]);
vocabulary.push([112, "DANZA", 0]);
vocabulary.push([112, "DANZAR", 0]);
vocabulary.push([73, "DAR", 0]);
vocabulary.push([73, "DARLE", 0]);
vocabulary.push([73, "DARSE", 0]);
vocabulary.push([73, "DARTE", 0]);
vocabulary.push([3, "DE", 6]);
vocabulary.push([8, "DEBAJO", 6]);
vocabulary.push([31, "DECIR", 0]);
vocabulary.push([47, "DEFECA", 0]);
vocabulary.push([47, "DEFECAR", 0]);
vocabulary.push([47, "DEFECARSE", 0]);
vocabulary.push([47, "DEFECARTE", 0]);
vocabulary.push([47, "DEFECATE", 0]);
vocabulary.push([21, "DEJA", 0]);
vocabulary.push([21, "DEJAR", 0]);
vocabulary.push([21, "DEJO", 0]);
vocabulary.push([3, "DEL", 6]);
vocabulary.push([14, "DELANTE", 6]);
vocabulary.push([4, "DENTRO", 6]);
vocabulary.push([88, "DEPRE", 1]);
vocabulary.push([88, "DEPRESION", 1]);
vocabulary.push([104, "DESACTIVA", 0]);
vocabulary.push([104, "DESACTIVAR", 0]);
vocabulary.push([98, "DESATA", 0]);
vocabulary.push([98, "DESATAR", 0]);
vocabulary.push([61, "DESCANSA", 0]);
vocabulary.push([61, "DESCANSAR", 0]);
vocabulary.push([11, "DESCENDER", 0]);
vocabulary.push([11, "DESCIENDE", 0]);
vocabulary.push([71, "DESCO", 1]);
vocabulary.push([71, "DESCONCHAD", 1]);
vocabulary.push([104, "DESCONECTA", 0]);
vocabulary.push([24, "DESCRIBE", 0]);
vocabulary.push([24, "DESCRIBIR", 0]);
vocabulary.push([24, "DESCRIBO", 0]);
vocabulary.push([5, "DESDE", 6]);
vocabulary.push([97, "DESDOBLA", 0]);
vocabulary.push([97, "DESDOBLAR", 0]);
vocabulary.push([51, "DESENTERRA", 0]);
vocabulary.push([51, "DESENTIERR", 0]);
vocabulary.push([87, "DESPERTAR", 0]);
vocabulary.push([87, "DESPERTARS", 0]);
vocabulary.push([87, "DESPERTART", 0]);
vocabulary.push([87, "DESPIERTA", 0]);
vocabulary.push([87, "DESPIERTAT", 0]);
vocabulary.push([110, "DESPLAZA", 0]);
vocabulary.push([110, "DESPLAZAR", 0]);
vocabulary.push([69, "DESTRUIR", 0]);
vocabulary.push([69, "DESTRUYE", 0]);
vocabulary.push([22, "DESVESTIR", 0]);
vocabulary.push([22, "DESVESTIRS", 0]);
vocabulary.push([22, "DESVESTIRT", 0]);
vocabulary.push([22, "DESVISTE", 0]);
vocabulary.push([22, "DESVISTO", 0]);
vocabulary.push([7, "DETRAS", 6]);
vocabulary.push([31, "DI", 0]);
vocabulary.push([31, "DIGO", 0]);
vocabulary.push([90, "DIRIGETE", 0]);
vocabulary.push([90, "DIRIGIRSE", 0]);
vocabulary.push([90, "DIRIGIRTE", 0]);
vocabulary.push([96, "DOBLA", 0]);
vocabulary.push([96, "DOBLAR", 0]);
vocabulary.push([61, "DORMIR", 0]);
vocabulary.push([61, "DORMIRSE", 0]);
vocabulary.push([61, "DORMIRTE", 0]);
vocabulary.push([73, "DOY", 0]);
vocabulary.push([61, "DUERME", 0]);
vocabulary.push([6, "DURA", 2]);
vocabulary.push([6, "DURO", 2]);
vocabulary.push([4, "E", 1]);
vocabulary.push([74, "ECHA", 0]);
vocabulary.push([74, "ECHAR", 0]);
vocabulary.push([61, "ECHARSE", 0]);
vocabulary.push([61, "ECHARTE", 0]);
vocabulary.push([61, "ECHATE", 0]);
vocabulary.push([104, "ELFIT", 1]);
vocabulary.push([104, "ELFITO", 1]);
vocabulary.push([104, "ELFO", 1]);
vocabulary.push([33, "EMPUJA", 0]);
vocabulary.push([33, "EMPUJAR", 0]);
vocabulary.push([33, "EMPUJO", 0]);
vocabulary.push([4, "EN", 6]);
vocabulary.push([68, "ENANO", 1]);
vocabulary.push([66, "ENCENDER", 0]);
vocabulary.push([10, "ENCENDIDA", 2]);
vocabulary.push([66, "ENCIENDE", 0]);
vocabulary.push([66, "ENCIENDO", 0]);
vocabulary.push([16, "ENCIMA", 6]);
vocabulary.push([54, "ENLAZA", 0]);
vocabulary.push([54, "ENLAZAR", 0]);
vocabulary.push([36, "ENSEÑA", 0]);
vocabulary.push([36, "ENSEÑAR", 0]);
vocabulary.push([36, "ENSEÑARSE", 0]);
vocabulary.push([36, "ENSEÑASE", 0]);
vocabulary.push([51, "ENTERRAR", 0]);
vocabulary.push([51, "ENTIERRA", 0]);
vocabulary.push([2, "ENTONCES", 5]);
vocabulary.push([12, "ENTRA", 0]);
vocabulary.push([110, "ENTRADA", 1]);
vocabulary.push([12, "ENTRAR", 0]);
vocabulary.push([15, "ENTRE", 6]);
vocabulary.push([12, "ENTRO", 0]);
vocabulary.push([47, "ERUCTA", 0]);
vocabulary.push([47, "ERUCTAR", 0]);
vocabulary.push([47, "ERUCTARSE", 0]);
vocabulary.push([47, "ERUCTARTE", 0]);
vocabulary.push([47, "ERUCTATE", 0]);
vocabulary.push([74, "ESCAL", 1]);
vocabulary.push([57, "ESCALA", 0]);
vocabulary.push([57, "ESCALAR", 0]);
vocabulary.push([74, "ESCALERA", 1]);
vocabulary.push([91, "ESCONDE", 0]);
vocabulary.push([91, "ESCONDER", 0]);
vocabulary.push([92, "ESCONDERSE", 0]);
vocabulary.push([92, "ESCONDERTE", 0]);
vocabulary.push([92, "ESCONDETE", 0]);
vocabulary.push([37, "ESCUCHA", 0]);
vocabulary.push([37, "ESCUCHAR", 0]);
vocabulary.push([37, "ESCUCHO", 0]);
vocabulary.push([48, "ESCUPE", 0]);
vocabulary.push([48, "ESCUPIR", 0]);
vocabulary.push([87, "ESPABILAR", 0]);
vocabulary.push([87, "ESPABILARS", 0]);
vocabulary.push([87, "ESPABILART", 0]);
vocabulary.push([87, "ESPABILATE", 0]);
vocabulary.push([43, "ESPERA", 0]);
vocabulary.push([43, "ESPERAR", 0]);
vocabulary.push([43, "ESPERO", 0]);
vocabulary.push([121, "ESPINO", 1]);
vocabulary.push([78, "ESPIRAL", 1]);
vocabulary.push([15, "ESTAS", 1]);
vocabulary.push([4, "ESTE", 1]);
vocabulary.push([79, "ESTIRA", 0]);
vocabulary.push([79, "ESTIRAR", 0]);
vocabulary.push([46, "ESTRANGULA", 0]);
vocabulary.push([114, "ESTRU", 1]);
vocabulary.push([114, "ESTRUCTURA", 1]);
vocabulary.push([111, "ESTRUJA", 0]);
vocabulary.push([111, "ESTRUJAR", 0]);
vocabulary.push([30, "EX", 0]);
vocabulary.push([30, "EXAMINA", 0]);
vocabulary.push([30, "EXAMINAR", 0]);
vocabulary.push([85, "EXAMINARSE", 0]);
vocabulary.push([85, "EXAMINARTE", 0]);
vocabulary.push([85, "EXAMINATE", 0]);
vocabulary.push([30, "EXAMINO", 0]);
vocabulary.push([51, "EXCAVA", 0]);
vocabulary.push([51, "EXCAVAR", 0]);
vocabulary.push([12, "EXCEPTO", 6]);
vocabulary.push([41, "EXITS", 0]);
vocabulary.push([67, "EXTINGUE", 0]);
vocabulary.push([67, "EXTINGUIR", 0]);
vocabulary.push([75, "EXTRAE", 0]);
vocabulary.push([75, "EXTRAER", 0]);
vocabulary.push([75, "EXTRAIGO", 0]);
vocabulary.push([104, "FIGUR", 1]);
vocabulary.push([104, "FIGURA", 1]);
vocabulary.push([25, "FIN", 0]);
vocabulary.push([119, "FOLLAR", 0]);
vocabulary.push([60, "FRAGA", 1]);
vocabulary.push([60, "FRAGANCIA", 1]);
vocabulary.push([101, "FREGAR", 0]);
vocabulary.push([101, "FRIEGA", 0]);
vocabulary.push([101, "FROTA", 0]);
vocabulary.push([101, "FROTAR", 0]);
vocabulary.push([123, "FUEGO", 1]);
vocabulary.push([13, "FUERA", 6]);
vocabulary.push([119, "GILIPOLLAS", 0]);
vocabulary.push([35, "GIRA", 0]);
vocabulary.push([35, "GIRAR", 0]);
vocabulary.push([35, "GIRO", 0]);
vocabulary.push([72, "GOLPEA", 0]);
vocabulary.push([72, "GOLPEAR", 0]);
vocabulary.push([26, "GRABA", 0]);
vocabulary.push([26, "GRABAR", 0]);
vocabulary.push([28, "GRABARAM", 0]);
vocabulary.push([31, "GRAFI", 1]);
vocabulary.push([31, "GRAFICOS", 1]);
vocabulary.push([3, "GRANDE", 2]);
vocabulary.push([87, "GRIETA", 1]);
vocabulary.push([87, "GRIETAS", 1]);
vocabulary.push([77, "GRITA", 0]);
vocabulary.push([77, "GRITAR", 0]);
vocabulary.push([26, "GUARDA", 0]);
vocabulary.push([26, "GUARDAR", 0]);
vocabulary.push([69, "HABIT", 1]);
vocabulary.push([69, "HABITACION", 1]);
vocabulary.push([31, "HABLA", 0]);
vocabulary.push([31, "HABLAR", 0]);
vocabulary.push([31, "HABLO", 0]);
vocabulary.push([6, "HACIA", 6]);
vocabulary.push([115, "HOLA", 1]);
vocabulary.push([42, "HUELE", 0]);
vocabulary.push([90, "HUIR", 0]);
vocabulary.push([122, "HUMO", 1]);
vocabulary.push([42, "HUSMEA", 0]);
vocabulary.push([42, "HUSMEAR", 0]);
vocabulary.push([90, "HUYE", 0]);
vocabulary.push([14, "I", 1]);
vocabulary.push([119, "IDIOTA", 0]);
vocabulary.push([119, "IMBECIL", 0]);
vocabulary.push([66, "INCENDIA", 0]);
vocabulary.push([66, "INCENDIAR", 0]);
vocabulary.push([89, "INCREPA", 0]);
vocabulary.push([89, "INCREPAR", 0]);
vocabulary.push([38, "INGERIR", 0]);
vocabulary.push([38, "INGIERE", 0]);
vocabulary.push([74, "INSERTA", 0]);
vocabulary.push([74, "INSERTAR", 0]);
vocabulary.push([74, "INSERTO", 0]);
vocabulary.push([30, "INSPECCION", 0]);
vocabulary.push([89, "INSULTA", 0]);
vocabulary.push([89, "INSULTAR", 0]);
vocabulary.push([12, "INTERNARTE", 0]);
vocabulary.push([12, "INTERNATE", 0]);
vocabulary.push([74, "INTRODUCE", 0]);
vocabulary.push([12, "INTRODUCET", 0]);
vocabulary.push([74, "INTRODUCIR", 0]);
vocabulary.push([74, "INTRODUZCO", 0]);
vocabulary.push([14, "INVEN", 1]);
vocabulary.push([14, "INVENTARIO", 1]);
vocabulary.push([90, "IR", 0]);
vocabulary.push([90, "IRSE", 0]);
vocabulary.push([90, "IRTE", 0]);
vocabulary.push([119, "JODE", 0]);
vocabulary.push([119, "JODER", 0]);
vocabulary.push([119, "JODES", 0]);
vocabulary.push([119, "JOPUTA", 0]);
vocabulary.push([99, "JUNTA", 0]);
vocabulary.push([99, "JUNTAR", 0]);
vocabulary.push([2, "LA", 4]);
vocabulary.push([63, "LAME", 0]);
vocabulary.push([63, "LAMER", 0]);
vocabulary.push([50, "LAMPA", 1]);
vocabulary.push([50, "LAMPARA", 1]);
vocabulary.push([32, "LANZA", 0]);
vocabulary.push([32, "LANZAR", 0]);
vocabulary.push([32, "LANZARSE", 0]);
vocabulary.push([32, "LANZASE", 0]);
vocabulary.push([32, "LANZO", 0]);
vocabulary.push([9, "LARGA", 2]);
vocabulary.push([9, "LARGO", 2]);
vocabulary.push([2, "LAS", 4]);
vocabulary.push([63, "LAVA", 1]);
vocabulary.push([101, "LAVAR", 0]);
vocabulary.push([88, "LAVARSE", 0]);
vocabulary.push([88, "LAVARTE", 0]);
vocabulary.push([88, "LAVATE", 0]);
vocabulary.push([2, "LE", 4]);
vocabulary.push([86, "LECHO", 1]);
vocabulary.push([109, "LEE", 0]);
vocabulary.push([109, "LEER", 0]);
vocabulary.push([109, "LEERSE", 0]);
vocabulary.push([109, "LEERTE", 0]);
vocabulary.push([109, "LEETE", 0]);
vocabulary.push([3, "LENTAMENTE", 3]);
vocabulary.push([109, "LEO", 0]);
vocabulary.push([2, "LES", 4]);
vocabulary.push([93, "LETRE", 1]);
vocabulary.push([93, "LETRERO", 1]);
vocabulary.push([114, "LEVANTA", 0]);
vocabulary.push([114, "LEVANTAR", 0]);
vocabulary.push([53, "LEVANTARSE", 0]);
vocabulary.push([53, "LEVANTARTE", 0]);
vocabulary.push([53, "LEVANTATE", 0]);
vocabulary.push([101, "LIMPIA", 0]);
vocabulary.push([101, "LIMPIAR", 0]);
vocabulary.push([88, "LIMPIARSE", 0]);
vocabulary.push([88, "LIMPIARTE", 0]);
vocabulary.push([88, "LIMPIATE", 0]);
vocabulary.push([50, "LINTE", 1]);
vocabulary.push([50, "LINTERNA", 1]);
vocabulary.push([76, "LLAMA", 0]);
vocabulary.push([76, "LLAMAR", 0]);
vocabulary.push([109, "LLAMAS", 1]);
vocabulary.push([76, "LLAMO", 0]);
vocabulary.push([54, "LLAVE", 1]);
vocabulary.push([55, "LLENA", 0]);
vocabulary.push([55, "LLENAR", 0]);
vocabulary.push([55, "LLENO", 0]);
vocabulary.push([93, "LLORA", 0]);
vocabulary.push([93, "LLORAR", 0]);
vocabulary.push([15, "LLORAS", 1]);
vocabulary.push([93, "LLORIQUEA", 0]);
vocabulary.push([93, "LLORIQUEAR", 0]);
vocabulary.push([2, "LO", 4]);
vocabulary.push([27, "LOAD", 0]);
vocabulary.push([2, "LOS", 4]);
vocabulary.push([46, "LUCHAR", 0]);
vocabulary.push([116, "LUZ", 1]);
vocabulary.push([24, "M", 0]);
vocabulary.push([63, "MAGMA", 1]);
vocabulary.push([121, "MALEZA", 1]);
vocabulary.push([119, "MARICA", 0]);
vocabulary.push([38, "MASTICA", 0]);
vocabulary.push([38, "MASTICAR", 0]);
vocabulary.push([46, "MATA", 0]);
vocabulary.push([46, "MATAR", 0]);
vocabulary.push([81, "MATARSE", 0]);
vocabulary.push([81, "MATARTE", 0]);
vocabulary.push([81, "MATATE", 0]);
vocabulary.push([46, "MATO", 0]);
vocabulary.push([47, "MEA", 0]);
vocabulary.push([47, "MEAR", 0]);
vocabulary.push([47, "MEARSE", 0]);
vocabulary.push([47, "MEARTE", 0]);
vocabulary.push([47, "MEATE", 0]);
vocabulary.push([49, "MENEA", 0]);
vocabulary.push([49, "MENEAR", 0]);
vocabulary.push([82, "MESA", 1]);
vocabulary.push([82, "MESAS", 1]);
vocabulary.push([74, "METE", 0]);
vocabulary.push([74, "METER", 0]);
vocabulary.push([117, "MIERDA", 1]);
vocabulary.push([24, "MIRA", 0]);
vocabulary.push([24, "MIRAR", 0]);
vocabulary.push([85, "MIRARSE", 0]);
vocabulary.push([85, "MIRARTE", 0]);
vocabulary.push([85, "MIRATE", 0]);
vocabulary.push([24, "MIRO", 0]);
vocabulary.push([51, "MONED", 1]);
vocabulary.push([51, "MONEDA", 1]);
vocabulary.push([36, "MOSTRAR", 0]);
vocabulary.push([36, "MOSTRARSE", 0]);
vocabulary.push([110, "MOVER", 0]);
vocabulary.push([36, "MUESTRA", 0]);
vocabulary.push([36, "MUESTRASE", 0]);
vocabulary.push([110, "MUEVE", 0]);
vocabulary.push([110, "MUEVO", 0]);
vocabulary.push([2, "N", 1]);
vocabulary.push([56, "NADA", 0]);
vocabulary.push([56, "NADAR", 0]);
vocabulary.push([6, "NE", 1]);
vocabulary.push([7, "NO", 1]);
vocabulary.push([109, "NOMBR", 1]);
vocabulary.push([109, "NOMBRE", 1]);
vocabulary.push([46, "NOQUEA", 0]);
vocabulary.push([46, "NOQUEAR", 0]);
vocabulary.push([6, "NORDESTE", 1]);
vocabulary.push([6, "NORESTE", 1]);
vocabulary.push([7, "NOROESTE", 1]);
vocabulary.push([2, "NORTE", 1]);
vocabulary.push([5, "NUEVA", 2]);
vocabulary.push([5, "NUEVO", 2]);
vocabulary.push([5, "O", 1]);
vocabulary.push([30, "OBSERVA", 0]);
vocabulary.push([30, "OBSERVAR", 0]);
vocabulary.push([91, "OCULTA", 0]);
vocabulary.push([91, "OCULTAR", 0]);
vocabulary.push([92, "OCULTARSE", 0]);
vocabulary.push([92, "OCULTARTE", 0]);
vocabulary.push([92, "OCULTATE", 0]);
vocabulary.push([15, "OCURRE", 1]);
vocabulary.push([5, "OESTE", 1]);
vocabulary.push([73, "OFRECE", 0]);
vocabulary.push([73, "OFRECER", 0]);
vocabulary.push([73, "OFRECERSE", 0]);
vocabulary.push([73, "OFRECESE", 0]);
vocabulary.push([37, "OIGO", 0]);
vocabulary.push([37, "OIR", 0]);
vocabulary.push([42, "OLER", 0]);
vocabulary.push([42, "OLFATEA", 0]);
vocabulary.push([42, "OLFATEAR", 0]);
vocabulary.push([64, "OPEN", 0]);
vocabulary.push([59, "ORA", 0]);
vocabulary.push([59, "ORAR", 0]);
vocabulary.push([47, "ORINA", 0]);
vocabulary.push([47, "ORINAR", 0]);
vocabulary.push([47, "ORINARSE", 0]);
vocabulary.push([47, "ORINARTE", 0]);
vocabulary.push([47, "ORINATE", 0]);
vocabulary.push([37, "OYE", 0]);
vocabulary.push([63, "PALADEA", 0]);
vocabulary.push([63, "PALADEAR", 0]);
vocabulary.push([40, "PALPA", 0]);
vocabulary.push([40, "PALPAR", 0]);
vocabulary.push([10, "PARA", 6]);
vocabulary.push([70, "PARED", 1]);
vocabulary.push([70, "PAREDES", 1]);
vocabulary.push([69, "PARTE", 0]);
vocabulary.push([69, "PARTIR", 0]);
vocabulary.push([15, "PASA", 1]);
vocabulary.push([46, "PATEA", 0]);
vocabulary.push([46, "PATEAR", 0]);
vocabulary.push([31, "PEDIR", 0]);
vocabulary.push([72, "PEGAR", 0]);
vocabulary.push([72, "PEGO", 0]);
vocabulary.push([60, "PENSAR", 0]);
vocabulary.push([2, "PEQUEÑA", 2]);
vocabulary.push([2, "PEQUEÑO", 2]);
vocabulary.push([60, "PESTE", 1]);
vocabulary.push([81, "PICNI", 1]);
vocabulary.push([81, "PICNIC", 1]);
vocabulary.push([31, "PIDO", 0]);
vocabulary.push([60, "PIENSA", 0]);
vocabulary.push([55, "PILA", 1]);
vocabulary.push([55, "PILAS", 1]);
vocabulary.push([46, "PISOTEA", 0]);
vocabulary.push([46, "PISOTEAR", 0]);
vocabulary.push([71, "PON", 0]);
vocabulary.push([71, "PONER", 0]);
vocabulary.push([71, "PONERSE", 0]);
vocabulary.push([71, "PONERTE", 0]);
vocabulary.push([71, "PONGO", 0]);
vocabulary.push([71, "PONSE", 0]);
vocabulary.push([71, "PONTE", 0]);
vocabulary.push([11, "POR", 6]);
vocabulary.push([111, "POZO", 1]);
vocabulary.push([67, "PRECI", 1]);
vocabulary.push([67, "PRECIPICIO", 1]);
vocabulary.push([31, "PREGUNTA", 0]);
vocabulary.push([31, "PREGUNTAR", 0]);
vocabulary.push([31, "PREGUNTO", 0]);
vocabulary.push([66, "PRENDE", 0]);
vocabulary.push([66, "PRENDER", 0]);
vocabulary.push([63, "PROBAR", 0]);
vocabulary.push([63, "PRUEBA", 0]);
vocabulary.push([89, "PUERT", 1]);
vocabulary.push([89, "PUERTA", 1]);
vocabulary.push([101, "PULE", 0]);
vocabulary.push([101, "PULIR", 0]);
vocabulary.push([119, "PUTA", 0]);
vocabulary.push([15, "QUE", 1]);
vocabulary.push([69, "QUEBRAR", 0]);
vocabulary.push([66, "QUEMA", 0]);
vocabulary.push([66, "QUEMAR", 0]);
vocabulary.push([69, "QUIEBRA", 0]);
vocabulary.push([15, "QUIER", 1]);
vocabulary.push([15, "QUIERES", 1]);
vocabulary.push([22, "QUITA", 0]);
vocabulary.push([22, "QUITAR", 0]);
vocabulary.push([22, "QUITARSE", 0]);
vocabulary.push([22, "QUITARTE", 0]);
vocabulary.push([22, "QUITASE", 0]);
vocabulary.push([22, "QUITATE", 0]);
vocabulary.push([22, "QUITO", 0]);
vocabulary.push([15, "RABIA", 1]);
vocabulary.push([99, "RAM", 1]);
vocabulary.push([58, "RAMA", 1]);
vocabulary.push([58, "RAMAS", 1]);
vocabulary.push([29, "RAMLOAD", 0]);
vocabulary.push([66, "RAMPA", 1]);
vocabulary.push([28, "RAMSAVE", 0]);
vocabulary.push([2, "RAPIDAMENT", 3]);
vocabulary.push([102, "RASCA", 0]);
vocabulary.push([102, "RASCAR", 0]);
vocabulary.push([52, "RASGA", 0]);
vocabulary.push([52, "RASGAR", 0]);
vocabulary.push([102, "RASPA", 0]);
vocabulary.push([102, "RASPAR", 0]);
vocabulary.push([78, "REBUSCA", 0]);
vocabulary.push([78, "REBUSCAR", 0]);
vocabulary.push([94, "RECORDAR", 0]);
vocabulary.push([94, "RECUERDA", 0]);
vocabulary.push([73, "REGALA", 0]);
vocabulary.push([73, "REGALAR", 0]);
vocabulary.push([73, "REGALARSE", 0]);
vocabulary.push([73, "REGALASE", 0]);
vocabulary.push([78, "REGISTRA", 0]);
vocabulary.push([78, "REGISTRAR", 0]);
vocabulary.push([84, "REGISTRARS", 0]);
vocabulary.push([84, "REGISTRART", 0]);
vocabulary.push([84, "REGISTRATE", 0]);
vocabulary.push([89, "REJA", 1]);
vocabulary.push([89, "REJAS", 1]);
vocabulary.push([55, "RELLENA", 0]);
vocabulary.push([55, "RELLENAR", 0]);
vocabulary.push([49, "REMOVER", 0]);
vocabulary.push([49, "REMUEVE", 0]);
vocabulary.push([31, "RESPONDE", 0]);
vocabulary.push([31, "RESPONDER", 0]);
vocabulary.push([58, "RETORCER", 0]);
vocabulary.push([58, "RETUERCE", 0]);
vocabulary.push([99, "REUNE", 0]);
vocabulary.push([99, "REUNIR", 0]);
vocabulary.push([59, "REZA", 0]);
vocabulary.push([59, "REZAR", 0]);
vocabulary.push([25, "RINDO", 0]);
vocabulary.push([57, "RIO", 1]);
vocabulary.push([119, "ROCA", 1]);
vocabulary.push([119, "ROCAS", 1]);
vocabulary.push([69, "ROMPE", 0]);
vocabulary.push([69, "ROMPER", 0]);
vocabulary.push([69, "ROMPO", 0]);
vocabulary.push([61, "RONCA", 0]);
vocabulary.push([61, "RONCAR", 0]);
vocabulary.push([35, "ROTA", 0]);
vocabulary.push([35, "ROTAR", 0]);
vocabulary.push([35, "ROTO", 0]);
vocabulary.push([5, "RUIDOSAMEN", 3]);
vocabulary.push([3, "S", 1]);
vocabulary.push([63, "SABOREA", 0]);
vocabulary.push([63, "SABOREAR", 0]);
vocabulary.push([75, "SACA", 0]);
vocabulary.push([75, "SACAR", 0]);
vocabulary.push([22, "SACARSE", 0]);
vocabulary.push([22, "SACARTE", 0]);
vocabulary.push([22, "SACASE", 0]);
vocabulary.push([22, "SACATE", 0]);
vocabulary.push([75, "SACO", 0]);
vocabulary.push([49, "SACUDE", 0]);
vocabulary.push([49, "SACUDIR", 0]);
vocabulary.push([49, "SACUDO", 0]);
vocabulary.push([13, "SAL", 0]);
vocabulary.push([13, "SALGO", 0]);
vocabulary.push([41, "SALIDAS", 0]);
vocabulary.push([13, "SALIR", 0]);
vocabulary.push([45, "SALTA", 0]);
vocabulary.push([45, "SALTAR", 0]);
vocabulary.push([45, "SALTARSE", 0]);
vocabulary.push([45, "SALTARTE", 0]);
vocabulary.push([45, "SALTATE", 0]);
vocabulary.push([45, "SALTO", 0]);
vocabulary.push([113, "SALUDA", 0]);
vocabulary.push([113, "SALUDAR", 0]);
vocabulary.push([113, "SALUDO", 0]);
vocabulary.push([26, "SALVA", 0]);
vocabulary.push([26, "SALVAR", 0]);
vocabulary.push([26, "SAVE", 0]);
vocabulary.push([8, "SE", 1]);
vocabulary.push([2, "SELA", 4]);
vocabulary.push([2, "SELAS", 4]);
vocabulary.push([2, "SELO", 4]);
vocabulary.push([2, "SELOS", 4]);
vocabulary.push([66, "SENDA", 1]);
vocabulary.push([23, "SENTAR", 0]);
vocabulary.push([23, "SENTARSE", 0]);
vocabulary.push([23, "SENTARTE", 0]);
vocabulary.push([100, "SEPARA", 0]);
vocabulary.push([100, "SEPARAR", 0]);
vocabulary.push([23, "SIENTATE", 0]);
vocabulary.push([23, "SIENTO", 0]);
vocabulary.push([106, "SIGUE", 1]);
vocabulary.push([106, "SIGUEME", 1]);
vocabulary.push([4, "SILENCIOSA", 3]);
vocabulary.push([83, "SILLA", 1]);
vocabulary.push([9, "SO", 1]);
vocabulary.push([67, "SOFOCA", 0]);
vocabulary.push([67, "SOFOCAR", 0]);
vocabulary.push([93, "SOLLOZA", 0]);
vocabulary.push([93, "SOLLOZAR", 0]);
vocabulary.push([21, "SOLTAR", 0]);
vocabulary.push([95, "SOPLA", 0]);
vocabulary.push([95, "SOPLAR", 0]);
vocabulary.push([7, "SUAVE", 2]);
vocabulary.push([10, "SUBE", 0]);
vocabulary.push([10, "SUBETE", 0]);
vocabulary.push([10, "SUBIR", 0]);
vocabulary.push([10, "SUBIRSE", 0]);
vocabulary.push([10, "SUBIRTE", 0]);
vocabulary.push([10, "SUBO", 0]);
vocabulary.push([15, "SUCED", 1]);
vocabulary.push([15, "SUCEDE", 1]);
vocabulary.push([15, "SUCEDIDO", 1]);
vocabulary.push([8, "SUDESTE", 1]);
vocabulary.push([72, "SUELO", 1]);
vocabulary.push([21, "SUELTA", 0]);
vocabulary.push([21, "SUELTO", 0]);
vocabulary.push([81, "SUICIDARSE", 0]);
vocabulary.push([81, "SUICIDARTE", 0]);
vocabulary.push([81, "SUICIDATE", 0]);
vocabulary.push([3, "SUR", 1]);
vocabulary.push([8, "SURESTE", 1]);
vocabulary.push([9, "SUROESTE", 1]);
vocabulary.push([36, "TIEMP", 1]);
vocabulary.push([36, "TIEMPO", 1]);
vocabulary.push([32, "TIRA", 0]);
vocabulary.push([32, "TIRAR", 0]);
vocabulary.push([32, "TIRARSE", 0]);
vocabulary.push([32, "TIRASE", 0]);
vocabulary.push([32, "TIRO", 0]);
vocabulary.push([40, "TOCA", 0]);
vocabulary.push([40, "TOCAR", 0]);
vocabulary.push([20, "TODO", 1]);
vocabulary.push([20, "TOMA", 0]);
vocabulary.push([20, "TOMAR", 0]);
vocabulary.push([20, "TOMO", 0]);
vocabulary.push([58, "TORCER", 0]);
vocabulary.push([78, "TORRE", 1]);
vocabulary.push([52, "TORTI", 1]);
vocabulary.push([52, "TORTILLA", 1]);
vocabulary.push([46, "TORTURA", 0]);
vocabulary.push([46, "TORTURAR", 0]);
vocabulary.push([38, "TRAGA", 0]);
vocabulary.push([38, "TRAGAR", 0]);
vocabulary.push([38, "TRAGARSE", 0]);
vocabulary.push([38, "TRAGARTE", 0]);
vocabulary.push([38, "TRAGATE", 0]);
vocabulary.push([6, "TRANQUILAM", 3]);
vocabulary.push([68, "TRANSCRIP", 0]);
vocabulary.push([68, "TRANSCRIPC", 0]);
vocabulary.push([68, "TRANSCRIPT", 0]);
vocabulary.push([7, "TRAS", 6]);
vocabulary.push([57, "TREPA", 0]);
vocabulary.push([57, "TREPAR", 0]);
vocabulary.push([57, "TREPO", 0]);
vocabulary.push([58, "TUERCE", 0]);
vocabulary.push([99, "UNE", 0]);
vocabulary.push([99, "UNIR", 0]);
vocabulary.push([80, "USA", 0]);
vocabulary.push([80, "USAR", 0]);
vocabulary.push([80, "UTILIZA", 0]);
vocabulary.push([80, "UTILIZAR", 0]);
vocabulary.push([86, "VACIA", 0]);
vocabulary.push([86, "VACIAR", 0]);
vocabulary.push([86, "VACIO", 0]);
vocabulary.push([80, "VALLE", 1]);
vocabulary.push([90, "VE", 0]);
vocabulary.push([120, "VEN", 0]);
vocabulary.push([120, "VENIR", 0]);
vocabulary.push([73, "VENTA", 1]);
vocabulary.push([120, "VENTE", 0]);
vocabulary.push([70, "VERSION", 0]);
vocabulary.push([86, "VERTER", 0]);
vocabulary.push([86, "VERTIR", 0]);
vocabulary.push([71, "VESTIR", 0]);
vocabulary.push([71, "VESTIRSE", 0]);
vocabulary.push([71, "VESTIRTE", 0]);
vocabulary.push([90, "VETE", 0]);
vocabulary.push([4, "VIEJA", 2]);
vocabulary.push([4, "VIEJO", 2]);
vocabulary.push([106, "VIENES", 1]);
vocabulary.push([86, "VIERTE", 0]);
vocabulary.push([71, "VISTE", 0]);
vocabulary.push([71, "VISTESE", 0]);
vocabulary.push([56, "VIVES", 1]);
vocabulary.push([62, "VOLCA", 1]);
vocabulary.push([62, "VOLCAN", 1]);
vocabulary.push([35, "VOLTEA", 0]);
vocabulary.push([35, "VOLTEAR", 0]);
vocabulary.push([47, "VOMITA", 0]);
vocabulary.push([47, "VOMITAR", 0]);
vocabulary.push([47, "VOMITARSE", 0]);
vocabulary.push([47, "VOMITARTE", 0]);
vocabulary.push([47, "VOMITATE", 0]);
vocabulary.push([41, "X", 0]);
vocabulary.push([82, "XYZZY", 0]);
vocabulary.push([2, "Y", 5]);
vocabulary.push([101, "ZAPAT", 1]);
vocabulary.push([101, "ZAPATO", 1]);
vocabulary.push([101, "ZAPATOS", 1]);



// SYS MESSAGES

total_sysmessages=68;

sysmessages = [];

sysmessages[0] = "No puedes ver nada, está muy oscuro y aquí apesta.\n";
sysmessages[1] = "Puedes ver: ";
sysmessages[2] = "¿Qué quieres hacer ahora?      ";
sysmessages[3] = "¿Cuál es tu siguiente orden?";
sysmessages[4] = "¿Qué vas a hacer ahora?       ";
sysmessages[5] = "Teclea tus órdenes";
sysmessages[6] = "¿Cómo? Por favor, prueba con otras palabras.\n";
sysmessages[7] = "No puedes ir en esa dirección.\n";
sysmessages[8] = "¿Perdón?";
sysmessages[9] = "Llevas: ";
sysmessages[10] = " (puesto/a)";
sysmessages[11] = "ningún objeto.\n";
sysmessages[12] = "¿Seguro? \n";
sysmessages[13] = "¿Juegas de nuevo? \n";
sysmessages[14] = "Adiós...";
sysmessages[15] = "Perfecto.\n";
sysmessages[16] = "Pulsa una tecla para continuar.\n";
sysmessages[17] = "Has realizado ";
sysmessages[18] = " turno";
sysmessages[19] = "s";
sysmessages[20] = ".\n";
sysmessages[21] = "Tu puntuación es del ";
sysmessages[22] = "%.\n";
sysmessages[23] = "No llevas puesto eso.\n";
sysmessages[24] = "No puedes, ya llevas eso puesto.\n";
sysmessages[25] = "Ya tienes {OREF}.\n";
sysmessages[26] = "No ves eso por aquí.\n";
sysmessages[27] = "No puedes llevar más cosas.\n";
sysmessages[28] = "No tienes eso.\n";
sysmessages[29] = "Pero si ya llevas puesto {OREF}.\n";
sysmessages[30] = "S";
sysmessages[31] = "N";
sysmessages[32] = "Más...";
sysmessages[33] = "> ";
sysmessages[34] = "";
sysmessages[35] = "El tiempo pasa...\n";
sysmessages[36] = "Coges {OREF}.\n";
sysmessages[37] = "Te pones {OREF}.\n";
sysmessages[38] = "Te quitas {OREF}.\n";
sysmessages[39] = "Dejas {OREF}.\n";
sysmessages[40] = "No puedes ponerte {OREF}.\n";
sysmessages[41] = "No puedes quitarte {OREF}.\n";
sysmessages[42] = "No puedes quitarte {OREF}.  ¡Tienes demasiadas cosas en las manos!\n";
sysmessages[43] = "Desgraciadamente {OREF} pesa demasiado.\n";
sysmessages[44] = "Pones {OREF} en ";
sysmessages[45] = "Me temo que {OREF} no está en ";
sysmessages[46] = ", ";
sysmessages[47] = " y¬";
sysmessages[48] = ".\n";
sysmessages[49] = "No tienes {OREF}.\n";
sysmessages[50] = "No llevas puesto {OREF}.\n";
sysmessages[51] = ".\n";
sysmessages[52] = "Eso no está en ";
sysmessages[53] = "ningún objeto\n";
sysmessages[54] = "Fichero no encontrado.\n";
sysmessages[55] = "Fichero corrupto.\n";
sysmessages[56] = "Error de lectura/escritura. Fichero no grabado.\n";
sysmessages[57] = "Directorio lleno.\n";
sysmessages[58] = "Introduce el nombre con el que grabaste la partida.";
sysmessages[59] = "No se encontró ninguna partida grabada con ese nombre. Confirma que el nombre es correcto y que realizaste dicha partida en este mismo navegador.";
sysmessages[60] = "Introduce el nombre con el que grabar la partida. Necesitarás recordar ese nombre para poder recuperarla posteriormente.";
sysmessages[61] = "";
sysmessages[62] = "¿Perdón? Por favor, prueba con otras palabras.\n";
sysmessages[63] = "Aquí ";
sysmessages[64] = "está ";
sysmessages[65] = "están ";
sysmessages[66] = "dentro hay ";
sysmessages[67] = "encima hay ";

// USER MESSAGES

total_messages=95;

messages = [];

messages[0] = "";
messages[1] = "";
messages[2] = "";
messages[3] = "¡Qué horror, el palizas otra vez! ¡Prefiero la muerte!";
messages[4] = "¡Riquísima!";
messages[5] = "Algo que has hecho te impide completar la aventura.";
messages[6] = "";
messages[7] = "";
messages[8] = "¡Busca luz!";
messages[9] = "¡Deja objetos como pistas!";
messages[10] = "¿Qué necesita un candado?";
messages[11] = "Sé lógico y hazte un mapa.";
messages[12] = "";
messages[13] = "Pone: «CUIDADO CON TUS OBJETOS».";
messages[14] = "";
messages[15] = "Está encendida.";
messages[16] = "Está apagada.";
messages[17] = "Esta antigua moneda perteneció a los Elfos.";
messages[18] = "?";
messages[19] = "Dejaría satisfecho hasta a un oso.";
messages[20] = "";
messages[21] = "Lleva la insignia del Rey Elfo.";
messages[22] = "«SEMPER LUX» (No lo creas).";
messages[26] = "No estás en clase de botánica.";
messages[27] = "Un bujero quecha humo y pedorreta.";
messages[28] = "";
messages[29] = "";
messages[30] = "Tiene una fuerte reja.";
messages[31] = "Baja p'abajo.";
messages[32] = "Sube p'arriba.\n";
messages[34] = "De hechura rústica y buena madera. Muy usada por los enanos del bosque.";
messages[35] = "";
messages[36] = "¡Tate pa la faena!";
messages[37] = "";
messages[38] = "Es muy fuerte. Impide la entrada.";
messages[39] = "";
messages[40] = "";
messages[41] = "Con un gracioso saltito emprendes el vuelo.";
messages[42] = "Tremendo batacazo en el fondo del abismo.";
messages[43] = "Pareces estar un poco muerto.\n";
messages[46] = "\nYa te lo advertí...";
messages[47] = "      ¡¡¡FELICIDADES!!!";
messages[48] = "   CLAVE DE ACCESO:  TIMACUS ";
messages[49] = "   CLAVE DE ACCESO:  WHALKIRA ";
messages[50] = "   CLAVE DE ACCESO:  BATRACCIO ";
messages[51] = "   CLAVE DE ACCESO:  GUACHARO ";
messages[52] = "";
messages[53] = " Hay una fuerte reja metálica";
messages[54] = ". Detrás de ella se ve una misteriosa entrada a las profundidades.";
messages[55] = " cerrada con un candado";
messages[56] = " con un candado abierto";
messages[58] = "Al quitarlo... ¡desaparece de tus manos!";
messages[63] = "Es un elfo que llora acurrucado junto a un árbol.";
messages[64] = "No hay suficiente luz.";
messages[65] = "Y desesperado Don Enano se lanza al volcán. ¡Descanse en paz!";
messages[71] = " El sol hace brillar algo en una rama.";
messages[72] = "¡Parece una llave!";
messages[77] = "\1<div style='padding:2em 2%; text-align:center'> AVENTURA ORIGINAL I \n\n  LA BÚSQUEDA \n\n\n\n Dirección: Andrés Samudio\n Programación: Manuel González\n Gráficos: Carlos Marqués\n\n (c) 1989 Aventuras AD </div>\n\n";
messages[96] = "¡Ya no tiene solución!";
messages[98] = "";
messages[99] = "\1<div style='padding:2em 2%; text-align:center'>                ********\n            ¡LA GRAN CAVERNA!\n\n   ORIGEN DE LEYENDAS SOBRE FABULOSAS      RIQUEZAS Y TERRIBLES PELIGROS.\n            ¿MITO O REALIDAD?\n\n SIGUIENDO EL BORROSO MAPA QUE TE DIO UN EXTRAÑO (POR CIERTO, MUY RICO) A QUIEN  SALVASTE DE LAS GARRAS DE UNOS TROLLS    HAS LLEGADO A ESTE APACIBLE VALLE.  \n\n     PRESIENTES QUE ESTAS MUY CERCA,    PERO DE REPENTE EL VIEJO MAPA SE    DESHACE EN TUS MANOS MIENTRAS UNA            CALIDA BRISA TE SUSURRA:\n    «SOLO LOS VALIENTES QUE DOMINEN     LA MAGIA MERECERAN MIS TESOROS»\n                ¡SUERTE!\n\n                 ****** </div>";
messages[100] = "";
messages[101] = "No hay ninguna salida";
messages[102] = "Sur";
messages[103] = "Este";
messages[104] = "Oeste";
messages[105] = "Noreste";
messages[106] = "Noroeste";
messages[107] = "Sureste";
messages[108] = "Suroeste";
messages[109] = "Subir";
messages[110] = "Bajar";
messages[111] = "Entrar";
messages[112] = "Salir";
messages[113] = "Norte";
messages[114] = "Las salidas posibles son ";
messages[116] = ", ";
messages[117] = " y ";
messages[118] = "La única salida es \n\n";
messages[1000] = "Salidas visibles: ";
messages[1001] = "No hay salidas visibles.";
messages[1002] = "";
messages[1003] = "";
messages[1004] = "al {ACTION|norte|norte}";
messages[1005] = "al {ACTION|sur|sur}";
messages[1006] = "al {ACTION|este|este}";
messages[1007] = "al {ACTION|oeste|oeste}";
messages[1008] = "al {ACTION|noreste|noreste}";
messages[1009] = "al {ACTION|noroeste|noroeste}";
messages[1010] = "al {ACTION|sureste|sureste}";
messages[1011] = "al {ACTION|suroeste|suroeste}";
messages[1012] = "{ACTION|arriba|arriba}";
messages[1013] = "{ACTION|abajo|abajo}";
messages[1014] = "{ACTION|dentro|dentro}";
messages[1015] = "{ACTION|fuera|fuera}";

// WRITE MESSAGES

total_writemessages=679;

writemessages = [];

writemessages[0] = "RESPONSE_START";
writemessages[1] = "No ves nada.";
writemessages[2] = "No hay nada por aquí.";
writemessages[3] = "No llevas nada.";
writemessages[4] = "No ves eso por aquí.";
writemessages[5] = "No ves eso por aquí.";
writemessages[6] = "No hay nada ahí.";
writemessages[7] = "No hay nada ahí.";
writemessages[8] = "No ves eso por aquí.";
writemessages[9] = "No ves eso por aquí.";
writemessages[10] = "No llevas nada.";
writemessages[11] = "No llevas nada.";
writemessages[12] = "No llevas nada.";
writemessages[13] = "No llevas nada";
writemessages[14] = "No llevas nada puesto.";
writemessages[15] = "No llevas nada para ponerte.";
writemessages[16] = "No llevas nada.";
writemessages[17] = "¡No puedes tirarlo todo a la vez!";
writemessages[18] = "Por favor, intenta especificar un poco más.";
writemessages[19] = "RESPONSE_USER";
writemessages[20] = "También participaron: Eva Samitier, Juan Darder, Juanjo Muñoz y Tim Gilberts (some bugs).";
writemessages[21] = " Hay una fuerte reja metálica";
writemessages[22] = " cerrada con un candado";
writemessages[23] = ".";
writemessages[24] = " Hay una fuerte reja metálica";
writemessages[25] = " con un candado abierto";
writemessages[26] = ".";
writemessages[27] = " Hay una fuerte reja metálica";
writemessages[28] = ".";
writemessages[29] = "Para entrar y sobrevivir en las profundidades necesitas más cosas.";
writemessages[30] = "Oyes el susurro del viento, el canto de los pájaros y el murmullo del agua.";
writemessages[31] = "Si en vez de escuchar tanto, teclearas más, oirías: «Clik, Clak, Clok».";
writemessages[32] = "¿Te parece forma de solucionar las cosas?";
writemessages[33] = "¡El enano ha caído al volcán!";
writemessages[34] = "¡Asesino nanicida!";
writemessages[35] = "Para lo viejo que parece, se ha abierto sin ningún problema.";
writemessages[36] = "Estiras de él pero está cerrado. No se abre.";
writemessages[37] = "Para ello, abres el candado que ";
writemessages[38] = "con lo viejo que parece, se ha abierto sin ningún problema.";
writemessages[39] = "Mmm... no puedes porque tiene el candado puesto.";
writemessages[40] = "Empujas y empujas sin conseguir nada. En muy resistente y todavía está el candado puesto.";
writemessages[41] = "Pero si ya está abierto.";
writemessages[42] = "Te arrastras como una cucaracha por todo el suelo";
writemessages[43] = " pero de monedas nada, ¡listillo!";
writemessages[44] = "La llave está demasiado lejos.";
writemessages[45] = "Al quitarlo... ¡desaparece de tus manos!";
writemessages[46] = "Lo tienes en la mano, sigue en la reja. Cerrado. ¿Y ahora qué?";
writemessages[47] = "Te haces daño en la mano. ¡A quién se le ocurre!";
writemessages[48] = "¿Qué candado? Vas y golpeas la pared. La violencia no es la solución.";
writemessages[49] = "No consigues más que hacerte daño. Cabeza de chorlito.";
writemessages[50] = "No tienes nada.";
writemessages[51] = "¿No sabes leer? ¡Un enanito desaparece con lo dejado!";
writemessages[52] = "¿No sabes leer? ¡Un enanito desaparece con lo dejado!";
writemessages[53] = "¡{OREF} ha caído al suelo!";
writemessages[54] = "Nunca te lo habías pasado bien haciendo el tonto. Venga, déjate ya de perder el tiempo.";
writemessages[55] = "Enciendes la linterna que ilumina el lugar.";
writemessages[56] = "Enciendes la linterna.";
writemessages[57] = "No tiene pilas.";
writemessages[58] = "Apagas la linterna y la oscuridad se apodera del lugar.";
writemessages[59] = "Apagas la linterna.";
writemessages[60] = "Curioso, la peste a azufre parece venir del este.";
writemessages[61] = "Uff, te estás empezando a marear del pestazo a azufre. Parece que hacia el este es más fuerte.";
writemessages[62] = "El olor a azufre se intensifica cada vez más hacie el este.";
writemessages[63] = "Uff, te estás empezando a marear del pestazo a azufre. Parece que hacia el este es más fuerte.";
writemessages[64] = "Ya está vacía.";
writemessages[65] = "Derramas el agua que hay en ella hasta que no queda nada.";
writemessages[66] = "No cabe más agua ya.";
writemessages[67] = "Casi sin esfuerzo, llenas la botella de agua.";
writemessages[68] = "No te resulta demasiado difícil llenarla de agua.";
writemessages[69] = "Genial. Ya está llena de agua.";
writemessages[70] = "Mmm... a ver... listo. Botella llena.";
writemessages[71] = "No puedes llenarla si no hay agua cerca.";
writemessages[72] = "Pero qué sed tenías.";
writemessages[73] = "Ya te estás agarrando a las ramas. Si no, ya hubieras caído.";
writemessages[74] = "¡La llave ha caído al suelo!";
writemessages[75] = "La rama se mueve y se mueve.";
writemessages[76] = "La linterna ya tiene las pilas puestas.";
writemessages[77] = "Vale, linterna lista.";
writemessages[78] = "No tienes la pila, así que...";
writemessages[79] = "No tienes la linterna... ¿Dónde está?";
writemessages[80] = "Ya no puedes llevar más trastos.";
writemessages[81] = "La linterna no tiene las pilas puestas.";
writemessages[82] = "Al quitarlo... ¡desaparece de tus manos!";
writemessages[83] = "Te sientas... y te levantas para seguir jugando. ";
writemessages[84] = "No hace falta decir groserías.";
writemessages[85] = "No hace falta decir groserías.";
writemessages[86] = "El enano está muy cabreado para finuras y con malos modales intenta deshacerse de ti.";
writemessages[87] = "Te observa tímidamente y esboza una sonrisa.";
writemessages[88] = "Te observa por unos instantes y esboza una sonrisa.";
writemessages[89] = "Muy ofendido, Elfito, se las pira llorando.";
writemessages[90] = "Las botas son pequeñas para tus pies.";
writemessages[91] = "previous_noun=50";
writemessages[92] = "Don Enano se calza, y agradecido, te deja una linterna.";
writemessages[93] = "Pues ya lo sabes.";
writemessages[94] = "RESPONSE_DEFAULT_START";
writemessages[95] = "Ahora mismo no te apetece.";
writemessages[96] = "Estás bien así.";
writemessages[97] = "Te miras de arriba a abajo pero no ves nada especial.";
writemessages[98] = "No encuentras nada destacable.";
writemessages[99] = "Esa no es la solución...";
writemessages[100] = "Ahora mismo no te apetece...";
writemessages[101] = "Has jugado a demasiadas aventuras conversacionales...";
writemessages[102] = "No puedes coger eso que dices.";
writemessages[103] = "Por favor, especifica qué quieres coger.";
writemessages[104] = "Mejor no coges {OREF}, está bien donde está.";
writemessages[105] = "No puedes dejar eso que dices.";
writemessages[106] = "Por favor, especifica qué quieres dejar.";
writemessages[107] = "Por favor, especifica qué quieres sacar.";
writemessages[108] = "No puedes sacar eso que dices.";
writemessages[109] = "No puedes sacar eso.";
writemessages[110] = "No puedes sacar eso.";
writemessages[111] = "No puedes sacar {OREF} de ningún sitio, en todo caso puedes quitártelo porque lo llevas puesto...";
writemessages[112] = "¿De dónde quieres sacar eso?";
writemessages[113] = "No puedes sacar {OREF} de eso.";
writemessages[114] = "¿De dónde dices que quieres sacar {OREF}?";
writemessages[115] = "Antes abre {OBJECT|15}.";
writemessages[116] = "Antes abre {OBJECT|15}.";
writemessages[117] = "No puedes sacar nada de ahí porque no está aquí.";
writemessages[118] = "No puedes coger nada de ahí porque no está aquí.";
writemessages[119] = "No puedes sacar cosas de ahí.";
writemessages[120] = "Por favor, especifica qué quieres meter.";
writemessages[121] = "No puedes meter eso que dices.";
writemessages[122] = "No puedes meter eso.";
writemessages[123] = "No puedes meter eso.";
writemessages[124] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[125] = "No llevas {OREF}.";
writemessages[126] = "¿Dónde quieres meter eso?";
writemessages[127] = "No puedes meter {OREF} a eso.";
writemessages[128] = "¿Dónde dices que quieres meter {OREF}?";
writemessages[129] = "No puedes meter cosas dentro de eso...";
writemessages[130] = "No puedes meter {OREF} ahí porque no llevas eso.";
writemessages[131] = "No puedes meter {OREF} ahí porque no llevas eso.";
writemessages[132] = "Antes abre {OBJECT|15}.";
writemessages[133] = "Antes abre {OBJECT|15}";
writemessages[134] = "No te puedes quitar eso que dices.";
writemessages[135] = "Por favor, especifica qué quieres quitarte.";
writemessages[136] = "No te puedes poner eso que dices.";
writemessages[137] = "Por favor, especifica qué quieres ponerte.";
writemessages[138] = "No puedes tirar de eso que dices.";
writemessages[139] = "Por favor, especifica de qué quieres tirar.";
writemessages[140] = "No sería adecuado.";
writemessages[141] = "No está aquí.";
writemessages[142] = "No ves mucho sentido a tirar de eso.";
writemessages[143] = "No parece que se consiga nada tirando de {OREF}.";
writemessages[144] = "Para tirar de {OREF} tendría que estar aquí.";
writemessages[145] = "No puedes examinar dentro de eso que dices..";
writemessages[146] = "Por favor, especifica dentro de qué quieres examinar.";
writemessages[147] = "No ves nada interesante hacia allí.";
writemessages[148] = "No puedes mirar eso que dices.";
writemessages[149] = "No puedes esconder eso que dices.";
writemessages[150] = "Por favor, especifica qué quieres esconder.";
writemessages[151] = "Piensas que no conseguirás que pase desapercibido.";
writemessages[152] = "No está aquí.";
writemessages[153] = "No crees que eso sirva de algo...";
writemessages[154] = "Escondiendo {OREF} no solucionarás nada.";
writemessages[155] = "No ves {OREF} por aquí.";
writemessages[156] = "La autocompasión no conduce a nada.";
writemessages[157] = "No recuerdas nada que te pueda ser útil.";
writemessages[158] = "No hay respuesta alguna.";
writemessages[159] = "Esa es una opción muy cobarde.";
writemessages[160] = "No puedes empujar eso que dices.";
writemessages[161] = "Por favor, especifica qué quieres empujar.";
writemessages[162] = "No crees que le guste demasiado.";
writemessages[163] = "No se mueve.";
writemessages[164] = "No está aquí.";
writemessages[165] = "No ves eso por aquí.";
writemessages[166] = "No ves mucho sentido a empujar eso.";
writemessages[167] = "No parece que se consiga nada empujando {OREF}.";
writemessages[168] = "Para empujar {OREF} tendría que estar aquí.";
writemessages[169] = "No puedes mover eso que dices.";
writemessages[170] = "Por favor, especifica qué quieres mover.";
writemessages[171] = "No crees que le guste demasiado.";
writemessages[172] = "No está aquí.";
writemessages[173] = "No ves mucho sentido a mover eso.";
writemessages[174] = "No parece que se consiga nada moviendo {OREF}.";
writemessages[175] = "Para mover {OREF} tendría que estar aquí.";
writemessages[176] = "No puedes girar eso que dices.";
writemessages[177] = "Por favor, especifica qué quieres girar.";
writemessages[178] = "No sería apropiado.";
writemessages[179] = "No ves utilidad en girar eso.";
writemessages[180] = "No está aquí.";
writemessages[181] = "No ves eso por aquí.";
writemessages[182] = "No ves mucho sentido a girar eso.";
writemessages[183] = "No ves sentido a girar {OREF}.";
writemessages[184] = "Girar {OREF} requiere su presencia.";
writemessages[185] = "No puedes lanzar eso que dices.";
writemessages[186] = "Por favor, especifica qué quieres lanzar.";
writemessages[187] = "La violencia no es la solución.";
writemessages[188] = "No puedes lanzar eso.";
writemessages[189] = "No está aquí.";
writemessages[190] = "No ves eso por aquí.";
writemessages[191] = "No, no ves sentido a lanzar eso.";
writemessages[192] = "Lanzas {OREF}.";
writemessages[193] = "Desgraciadamente no llevas {OREF}.";
writemessages[194] = "No parece decir nada.";
writemessages[195] = "No está aquí.";
writemessages[196] = "Prestas atención a ver si oyes algo más pero no escuchas nada en especial.";
writemessages[197] = "No puedes comer eso que dices.";
writemessages[198] = "Por favor, especifica qué quieres comer.";
writemessages[199] = "No crees que se deje. En cualquier caso no es muy apropiado.";
writemessages[200] = "No es muy buena idea que te comas eso.";
writemessages[201] = "No está aquí.";
writemessages[202] = "No quieres comer eso.";
writemessages[203] = "No ves sentido a comerte {OREF}.";
writemessages[204] = "Te comes {OREF}.";
writemessages[205] = "Para comerte {OREF} debería estar aquí.";
writemessages[206] = "No puedes beber eso que dices.";
writemessages[207] = "Por favor, especifica qué quieres beber.";
writemessages[208] = "Estás perdiendo el rumbo.";
writemessages[209] = "No está aquí.";
writemessages[210] = "No quieres beber eso.";
writemessages[211] = "No ves sentido a beberte {OREF}.";
writemessages[212] = "Te bebes {OREF}.";
writemessages[213] = "Para beberte {OREF} debería estar aquí.";
writemessages[214] = "No tienes ganas.";
writemessages[215] = "No puedes escupir a eso que dices.";
writemessages[216] = "Por favor, especifica a qué quieres escupir.";
writemessages[217] = "Eso sería de muy mala educación.";
writemessages[218] = "No está aquí.";
writemessages[219] = "No le ves sentido a escupir a eso.";
writemessages[220] = "No quieres escupir a {OREF}.";
writemessages[221] = "No ves {OREF} por aquí.";
writemessages[222] = "No puedes tocar eso que dices.";
writemessages[223] = "Por favor, especifica qué quieres tocar.";
writemessages[224] = "No se deja.";
writemessages[225] = "No está aquí.";
writemessages[226] = "No le ves sentido a tocar eso.";
writemessages[227] = "No quieres tocar {OREF}.";
writemessages[228] = "No ves {OREF} por aquí.";
writemessages[229] = "No puedes oler eso que dices.";
writemessages[230] = "Por favor, especifica qué quieres oler.";
writemessages[231] = "Es de mala educación.";
writemessages[232] = "No está aquí.";
writemessages[233] = "No le ves sentido a oler eso.";
writemessages[234] = "La verdad es que {OREF} huele bien.";
writemessages[235] = "La verdad es que {OREF} huele bien.";
writemessages[236] = "No quieres oler {OREF}.";
writemessages[237] = "La verdad es que {OREF} huele bien.";
writemessages[238] = "No ves {OREF} por aquí.";
writemessages[239] = "No puedes agitar eso que dices.";
writemessages[240] = "Por favor, especifica qué quieres agitar.";
writemessages[241] = "No crees que le guste demasiado.";
writemessages[242] = "No está aquí.";
writemessages[243] = "No le ves sentido a agitar eso.";
writemessages[244] = "No quieres agitar {OREF}.";
writemessages[245] = "No ves {OREF} por aquí.";
writemessages[246] = "No puedes balancearte en eso que dices.";
writemessages[247] = "Por favor, especifica dónde quieres balancearte.";
writemessages[248] = "No crees que le guste demasiado.";
writemessages[249] = "No está aquí.";
writemessages[250] = "No es algo adecuado para balancearse.";
writemessages[251] = "Crees que {OREF} no es algo adecuado para balancearse.";
writemessages[252] = "No ves {OREF} por aquí.";
writemessages[253] = "No tienes sueño.";
writemessages[254] = "Saltas, sin conseguir nada.";
writemessages[255] = "Rezas todo lo que sabes.";
writemessages[256] = "No quieres cavar aquí.";
writemessages[257] = "Pensar siempre es bueno.";
writemessages[258] = "No tienes sueño.";
writemessages[259] = "Cantas fatal.";
writemessages[260] = "La verdad es que bailar no se te da muy bien...";
writemessages[261] = "No puedes atacar a eso que dices.";
writemessages[262] = "Por favor, especifica a qué o a quién quieres atacar.";
writemessages[263] = "La violencia no es buena.";
writemessages[264] = "No está aquí.";
writemessages[265] = "La violencia no es la solución.";
writemessages[266] = "Atacar {OREF} no solucionará nada.";
writemessages[267] = "No ves {OREF} por aquí, en cualquier caso la violencia no es la solución.";
writemessages[268] = "No puedes golpear a eso que dices.";
writemessages[269] = "Por favor, especifica a qué o a quién quieres golpear.";
writemessages[270] = "La violencia no es buena.";
writemessages[271] = "No está aquí.";
writemessages[272] = "La violencia no es la solución.";
writemessages[273] = "Golpear {OREF} no solucionará nada.";
writemessages[274] = "No ves {OREF} por aquí, en cualquier caso la violencia no es la solución.";
writemessages[275] = "USAR es demasiado genérico. Por favor, sé más concreto. Por ejemplo, si quieres barrer el suelo utiliza BARRER SUELO, no USAR ESCOBA.";
writemessages[276] = "No puedes limpiar eso que dices.";
writemessages[277] = "Por favor, especifica qué quieres limpiar.";
writemessages[278] = "No se deja.";
writemessages[279] = "No está aquí.";
writemessages[280] = "No le ves sentido a limpiar eso.";
writemessages[281] = "Limpias {OREF}. No hay efecto alguno.";
writemessages[282] = "No ves {OREF} por aquí.";
writemessages[283] = "No puedes rascar eso que dices.";
writemessages[284] = "Por favor, especifica qué quieres rascar.";
writemessages[285] = "No se deja.";
writemessages[286] = "No está aquí.";
writemessages[287] = "No quieres rascar eso.";
writemessages[288] = "Rascas {OREF}. No hay efecto alguno.";
writemessages[289] = "No ves {OREF}_ por aquí.";
writemessages[290] = "No puedes quemar eso que dices.";
writemessages[291] = "Por favor, especifica qué quieres quemar.";
writemessages[292] = "La barbarie no solucionará tus problemas.";
writemessages[293] = "No está aquí.";
writemessages[294] = "No le ves sentido a quemar eso.";
writemessages[295] = "Quemar {OREF} no es la solución.";
writemessages[296] = "No ves {OREF} por aquí.";
writemessages[297] = "No puedes apagar eso que dices.";
writemessages[298] = "Por favor, especifica qué quieres apagar.";
writemessages[299] = "No le ves sentido a apagar eso.";
writemessages[300] = "No quieres apagar {OREF}.";
writemessages[301] = "No ves {OREF} por aquí.";
writemessages[302] = "No puedes cortar eso que dices.";
writemessages[303] = "Por favor, especifica qué quieres cortar.";
writemessages[304] = "La violencia no es la solución.";
writemessages[305] = "No crees que cortar eso sea de mucha utilidad.";
writemessages[306] = "No está aquí.";
writemessages[307] = "No le ves sentido a cortar eso.";
writemessages[308] = "No ves sentido a cortar {OREF}.";
writemessages[309] = "No ves {OREF} por aquí.";
writemessages[310] = "No puedes atar eso que dices.";
writemessages[311] = "Por favor, especifica qué quieres atar.";
writemessages[312] = "Crees que no se va a dejar.";
writemessages[313] = "No está aquí.";
writemessages[314] = "No le ves sentido a atar eso.";
writemessages[315] = "No quieres atar {OREF}.";
writemessages[316] = "No ves {OREF} por aquí.";
writemessages[317] = "No puedes desatar eso que dices.";
writemessages[318] = "Por favor, especifica qué quieres desatar.";
writemessages[319] = "¿Desatarle?.";
writemessages[320] = "No está aquí.";
writemessages[321] = "No le ves sentido a desatar eso.";
writemessages[322] = "¿Desatar {OREF}?, ¿para qué?";
writemessages[323] = "No ves {OREF} por aquí.";
writemessages[324] = "No puedes llenar eso que dices.";
writemessages[325] = "Por favor, especifica qué quieres llenar.";
writemessages[326] = "No le ves sentido a llenar eso.";
writemessages[327] = "No quieres llenar {OREF}.";
writemessages[328] = "No puedes llenar {OREF}.";
writemessages[329] = "No ves {OREF} por aquí.";
writemessages[330] = "Mejor no.";
writemessages[331] = "No te apetece trepar.";
writemessages[332] = "No puedes retorcer eso que dices.";
writemessages[333] = "Por favor, especifica qué quieres retorcer.";
writemessages[334] = "La violencia no es la solución.";
writemessages[335] = "No está aquí.";
writemessages[336] = "No le ves sentido a retorcer eso.";
writemessages[337] = "No quieres retorcer {OREF}.";
writemessages[338] = "No ves {OREF} por aquí.";
writemessages[339] = "No puedes apretar eso que dices.";
writemessages[340] = "Por favor, especifica qué quieres apretar.";
writemessages[341] = "La violencia no es la solución.";
writemessages[342] = "No está aquí.";
writemessages[343] = "No le ves sentido a apretar eso.";
writemessages[344] = "No quieres apretar {OREF}.";
writemessages[345] = "No ves {OREF} por aquí.";
writemessages[346] = "No puedes besar eso que dices.";
writemessages[347] = "Por favor, especifica a qué o a quién quieres besar.";
writemessages[348] = "No se deja.";
writemessages[349] = "No está aquí.";
writemessages[350] = "No quieres besar eso.";
writemessages[351] = "No quieres besar {OREF}.";
writemessages[352] = "No ves {OREF} por aquí.";
writemessages[353] = "No puedes abrazar eso que dices.";
writemessages[354] = "Por favor, especifica a qué o a quién quieres abrazar.";
writemessages[355] = "Ni se deja, ni crees que sea muy apropiado.";
writemessages[356] = "No está aquí.";
writemessages[357] = "No quieres abrazar eso.";
writemessages[358] = "No quieres abrazar {OREF}.";
writemessages[359] = "No ves {OREF} por aquí.";
writemessages[360] = "No puedes conectar eso que dices.";
writemessages[361] = "Por favor, especifica qué quieres conectar.";
writemessages[362] = "No ves la manera de conectar eso.";
writemessages[363] = "Activas {OREF}.";
writemessages[364] = "Ya lo está.";
writemessages[365] = "No ves la manera de activar {OREF}.";
writemessages[366] = "No ves {OREF} por aquí.";
writemessages[367] = "No puedes desconectar eso que dices.";
writemessages[368] = "Por favor, especifica qué quieres desconectar.";
writemessages[369] = "No le ves sentido a desconectar eso.";
writemessages[370] = "Desactivas {OREF}.";
writemessages[371] = "Ya lo está.";
writemessages[372] = "No puedes desconectar {OREF}.";
writemessages[373] = "No ves {OREF} por aquí.";
writemessages[374] = "No puedes abrir eso que dices.";
writemessages[375] = "Por favor, especifica qué quieres abrir.";
writemessages[376] = "No le ves sentido a abrir eso.";
writemessages[377] = "Abres {OREF}.";
writemessages[378] = "Está cerrado con llave.";
writemessages[379] = "Ya lo está.";
writemessages[380] = "Ya lo está.";
writemessages[381] = "No puedes abrir {OREF}.";
writemessages[382] = "No ves {OREF} por aquí.";
writemessages[383] = "No puedes cerrar eso que dices.";
writemessages[384] = "Por favor, especifica qué quieres cerrar.";
writemessages[385] = "No le ves sentido a cerrar eso.";
writemessages[386] = "Cierras {OREF}.";
writemessages[387] = "Ya lo está.";
writemessages[388] = "No puedes cerrar {OREF}.";
writemessages[389] = "No ves {OREF} por aquí.";
writemessages[390] = "No puedes leer eso que dices.";
writemessages[391] = "Por favor, especifica qué quieres leer.";
writemessages[392] = "No le ves sentido a leer eso.";
writemessages[393] = "No puedes leer {OREF}.";
writemessages[394] = "No ves {OREF} por aquí.";
writemessages[395] = "No puedes chupar eso que dices.";
writemessages[396] = "Por favor, especifica qué quieres chupar.";
writemessages[397] = "Eso sería muy poco apropiado.";
writemessages[398] = "Piensas en comerte {OREF} pero te contienes.";
writemessages[399] = "No está aquí.";
writemessages[400] = "No te imaginas chupando eso.";
writemessages[401] = "No quieres chupar {OREF}.";
writemessages[402] = "No ves {OREF} por aquí.";
writemessages[403] = "No puedes romper eso que dices.";
writemessages[404] = "Por favor, especifica qué quieres romper.";
writemessages[405] = "La violencia no es buena.";
writemessages[406] = "No está aquí.";
writemessages[407] = "La violencia no es la solución.";
writemessages[408] = "Romper {OREF} no solucionará nada.";
writemessages[409] = "No ves {OREF} por aquí; en cualquier caso, romper eso no es la solución.";
writemessages[410] = "No puedes comprar eso que dices.";
writemessages[411] = "Por favor, especifica qué quieres comprar.";
writemessages[412] = "Todo el mundo tiene un precio... pero no está en venta.";
writemessages[413] = "No está aquí.";
writemessages[414] = "No hay nada en venta.";
writemessages[415] = "No hay nada en venta.";
writemessages[416] = "No ves {OREF} por aquí.";
writemessages[417] = "No puedes doblar eso que dices.";
writemessages[418] = "Por favor, especifica qué quieres doblar.";
writemessages[419] = "Piensas que ya está bien como está...";
writemessages[420] = "No está aquí.";
writemessages[421] = "Prefieres no doblar eso.";
writemessages[422] = "Doblar {OREF} no solucionará nada.";
writemessages[423] = "No ves {OREF} por aquí.";
writemessages[424] = "No puedes desdoblar eso que dices.";
writemessages[425] = "Por favor, especifica qué quieres desdoblar.";
writemessages[426] = "Piensas que ya está bien como está...";
writemessages[427] = "No está aquí.";
writemessages[428] = "¿Para qué quieres desdoblar eso?";
writemessages[429] = "¿Desdoblar {OREF}?, ¿para qué?";
writemessages[430] = "No ves {OREF} por aquí.";
writemessages[431] = "No puedes dar eso.";
writemessages[432] = "Por favor, especifica qué quieres dar.";
writemessages[433] = "No puedes dar eso que dices.";
writemessages[434] = "No puedes dar eso.";
writemessages[435] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[436] = "No llevas {OREF}.";
writemessages[437] = "¿A quién quieres dar eso?";
writemessages[438] = "No puedes darle {OREF} a eso.";
writemessages[439] = "No puedes darle {OREF} a eso.";
writemessages[440] = "Estás perdiendo la cabeza...";
writemessages[441] = "No le puedes dar {OREF} porque no está aquí.";
writemessages[442] = "Le ofreces {OREF} pero no le hace ni caso.";
writemessages[443] = "No puedes mostrar eso.";
writemessages[444] = "Por favor, especifica qué quieres mostrar.";
writemessages[445] = "No puedes mostrar eso que dices.";
writemessages[446] = "No puedes mostrar eso.";
writemessages[447] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[448] = "No llevas {OREF}.";
writemessages[449] = "¿A quién quieres mostrar eso?";
writemessages[450] = "No puedes mostrarle {OREF} a eso.";
writemessages[451] = "No puedes mostrarle {OREF} a eso.";
writemessages[452] = "Estás perdiendo la cabeza...";
writemessages[453] = "No le puedes mostrar {OREF} porque no está aquí.";
writemessages[454] = "Le muestras {OREF} pero no le hace ni caso.";
writemessages[455] = "No puedes soplar eso que dices.";
writemessages[456] = "Por favor, especifica a qué quieres soplar.";
writemessages[457] = "No crees que le guste demasiado.";
writemessages[458] = "No está aquí.";
writemessages[459] = "No le ves sentido a soplar eso.";
writemessages[460] = "No quieres soplar {OREF}.";
writemessages[461] = "No ves eso que dices.";
writemessages[462] = "Mejor no, puede enfadarse.";
writemessages[463] = "Gritas con fuerza pero no te oye.";
writemessages[464] = "Gritas lo más fuerte que puedes y... no sucede nada.";
writemessages[465] = "No crees que haga falta.";
writemessages[466] = "No está aquí.";
writemessages[467] = "Pellizcas tu mejilla creyendo que despertarás pero... no estás soñando...¿o sí?";
writemessages[468] = "No puedes levantar eso que dices.";
writemessages[469] = "Por favor, especifica qué quieres levantar.";
writemessages[470] = "No crees que le guste demasiado.";
writemessages[471] = "No está aquí.";
writemessages[472] = "No ves mucho sentido a levantar eso.";
writemessages[473] = "No puedes levantar {OREF}. Pesa demasiado.";
writemessages[474] = "No conseguirás nada levantando eso.";
writemessages[475] = "Para levantar {OREF} tendría que estar aquí.";
writemessages[476] = "No puedes arrastrar eso que dices.";
writemessages[477] = "Por favor, especifica qué quieres arrastrar.";
writemessages[478] = "No crees que le guste demasiado.";
writemessages[479] = "No está aquí.";
writemessages[480] = "No ves mucho sentido a arrastrar eso.";
writemessages[481] = "No parece que se consiga nada arrastrando {OREF}.";
writemessages[482] = "Para arrastrar {OREF} tendría que estar aquí.";
writemessages[483] = "No puedes vaciar eso que dices.";
writemessages[484] = "Por favor, especifica qué quieres vaciar.";
writemessages[485] = "No es lo más apropiado.";
writemessages[486] = "No está aquí.";
writemessages[487] = "No le ves sentido a vaciar eso.";
writemessages[488] = "No quieres vaciar {OREF}.";
writemessages[489] = "No ves {OREF} por aquí.";
writemessages[490] = "No puedes llamar a eso que dices.";
writemessages[491] = "Por favor, especifica a qué o a quién quieres llamar.";
writemessages[492] = "No hay respuesta...";
writemessages[493] = "No está aquí.";
writemessages[494] = "No le ves sentido a llamar a eso.";
writemessages[495] = "No quieres llamar a {OREF}.";
writemessages[496] = "No ves {OREF} por aquí.";
writemessages[497] = "No puedes preguntar a eso que dices.";
writemessages[498] = "Por favor, especifica a quién quieres preguntar.";
writemessages[499] = "No hay respuesta alguna...";
writemessages[500] = "No está aquí.";
writemessages[501] = "No le ves sentido a preguntar a eso.";
writemessages[502] = "No quieres preguntar a {OREF}.";
writemessages[503] = "No ves {OREF} por aquí.";
writemessages[504] = "No puedes consultar eso que dices.";
writemessages[505] = "Por favor, especifica qué quieres consultar.";
writemessages[506] = "No le ves sentido a consultar eso.";
writemessages[507] = "No quieres consultar {OREF}.";
writemessages[508] = "No ves {OREF} por aquí.";
writemessages[509] = "No puedes insultar a eso que dices.";
writemessages[510] = "Por favor, especifica a quién quieres insultar.";
writemessages[511] = "No parece hacerte ni caso...";
writemessages[512] = "No está aquí.";
writemessages[513] = "No conseguirás nada insultando a eso.";
writemessages[514] = "Estás perdiendo la cabeza...";
writemessages[515] = "Ni ves eso que dices, ni crees que sea útil insultarle.";
writemessages[516] = "No puedes unir eso que dices.";
writemessages[517] = "Por favor, especifica qué quieres unir.";
writemessages[518] = "No crees que le guste demasiado.";
writemessages[519] = "No está aquí.";
writemessages[520] = "No ves mucho sentido a unir eso.";
writemessages[521] = "No parece que se consiga nada uniendo {OREF}.";
writemessages[522] = "Para unir {OREF} tendría que estar aquí.";
writemessages[523] = "No puedes separar eso que dices.";
writemessages[524] = "Por favor, especifica qué quieres separar.";
writemessages[525] = "No crees que le guste demasiado.";
writemessages[526] = "No está aquí.";
writemessages[527] = "No ves mucho sentido a separar eso.";
writemessages[528] = "No parece que se consiga nada separando {OREF}.";
writemessages[529] = "Para separar {OREF}, tendría que estar aquí.";
writemessages[530] = "No puedes hablar con eso que dices.";
writemessages[531] = "Por favor, especifica con quién quieres hablar.";
writemessages[532] = "No parece interesarse por tu charla.";
writemessages[533] = "No está aquí.";
writemessages[534] = "No quieres hablarle a eso.";
writemessages[535] = "Estás perdiendo la cabeza...";
writemessages[536] = "Ni ves eso que dices, ni crees que sea útil hablarle.";
writemessages[537] = "No puedes ir ahí donde dices.";
writemessages[538] = "Por favor, especifica dónde quieres ir.";
writemessages[539] = "Prefieres no acercarte más...";
writemessages[540] = "No sabes dónde está.";
writemessages[541] = "No le ves sentido a ir hacia eso.";
writemessages[542] = "No quieres ir a {OREF}.";
writemessages[543] = "No ves eso que dices.";
writemessages[544] = "No puedes ir ";
writemessages[545] = ". ";
writemessages[546] = "RESPONSE_DEFAULT_END";
writemessages[547] = "PRO1";
writemessages[548] = "La aventura original";
writemessages[549] = "La aventura original (1ª parte)";
writemessages[550] = "Esta parte del bosque es muy densa, los árboles te impiden orientarte bien y son todos muy parecidos. Vagas por entre la maleza buscando tu rumbo pero pronto te das cuenta de que estás algo despistadillo.";
writemessages[551] = "El sol hace brillar algo en una rama.";
writemessages[552] = "Oyes un débil llanto y con dificultad ves una figura traslúcida.";
writemessages[553] = "«¡Mi casa!»";
writemessages[554] = "Estás en una depresión de siete metros. El valle se estrecha hacia el sur.";
writemessages[555] = " Elfito da saltos de alegría.";
writemessages[556] = " Elfito da saltos de alegría.";
writemessages[557] = " Tienes ante ti la entrada a La Gran Caverna.";
writemessages[558] = "Elfito dice: «¡Mi casa!»";
writemessages[559] = "«Mi agradecimiento está sobre la mesa.» ";
writemessages[560] = "Y penetra en las profundidades.";
writemessages[561] = "«No es aquí.»";
writemessages[562] = "«¡Mi casa!»";
writemessages[563] = "El calor que se desprende de la burbujeante lava es asfixiante. Un enorme penacho de cenizas se desprende flotando perezosamente del ardiente magma, dejando una peste cosa mala. Imprudentemente estás haciendo el payaso en el peligroso borde del volcán";
writemessages[564] = " junto a un enano que rabia de amargura.";
writemessages[565] = ".";
writemessages[566] = "Has jugado durante ";
writemessages[567] = " turnos.";
writemessages[568] = "{RESTART|Volver a jugar}";
writemessages[569] = "PRO2";
writemessages[570] = "No llevas todos los objetos que necesitas, por lo tanto la magia de La Gran Caverna te impide el paso.";
writemessages[571] = "Examina lo que has encontrado. Explora toda la zona.";
writemessages[572] = "Algunas de las preguntas más frecuentes son:";
writemessages[573] = "No la ves desde aquí.";
writemessages[574] = "No estás suficientemente cerca.";
writemessages[575] = "Es una sólida y bella construcción.";
writemessages[576] = "Continúa hacia una extraña construcción.";
writemessages[577] = "No hay nada que te llame la atención. Acaban aquí.";
writemessages[578] = "Estas botas tienen un tacón muy alto pero no son de tu número.";
writemessages[579] = "Es de vidrio y está vacía.";
writemessages[580] = "La tienes llena de agua fresca y fertilizante.";
writemessages[581] = "Es una sólida construcción que antaño perteneció a los dueños del valle, hoy está abandonada.";
writemessages[582] = "Se ve tan pequeña que parece de juguete.";
writemessages[583] = "La columna de humo sube de forma lenta, casi poética.";
writemessages[584] = "La imagen del volcán es aterradora. Suerte que está lejos.";
writemessages[585] = "Está hacia al sur. No sabrías describirla muy bien desde aquí.";
writemessages[586] = "La entrada es pequeña pero lo suficientemente amplia para que pases por ella y penetres a un Mundo Mágico.";
writemessages[587] = "La boca del pozo está muy oscura.";
writemessages[588] = "Chapoteas tocando gelatinosas babosidades ";
writemessages[589] = "¡pero de monedas nada, listillo!";
writemessages[590] = "Chapoteas tocando asquerosas gelatinosas babosidades ";
writemessages[591] = "y de pronto descubres que hay ¡una moneda!";
writemessages[592] = "Dicen que las aguas de este río tienen la mágica propiedad de hacer crecer semillas muy viejas.";
writemessages[593] = "No dan muchas ganas de meterse en él pero no conseguirás nada quedándote aquí. ¿Con qué tipo de criaturas te vas a encontrar?";
writemessages[594] = "Has oído decir que las aguas de este río tienen mágicas propiedades. Que pueden hacer crecer semillas de cualquier tipo.";
writemessages[595] = "Es un bosque frondoso. Si no fuera por el valle en el que estás, no verías el sol.";
writemessages[596] = "Es un lugar bellísimo pero no deberías admirar los parajes, esta es una tierra que seguro está llena de peligros...";
writemessages[597] = "El agua corre. Ves que el caudal mengua hacia el sur.";
writemessages[598] = "Sientes una extraña sensación. Algo te da muy mala espina...";
writemessages[599] = "Cada vez más seco, el agua se pierde entre las grietas.";
writemessages[600] = "Sabes de buena tinta que las aguas de este río son mágicas. Dicen que pueden hacer crecer todo tipo de semillas.";
writemessages[601] = "Inlcuso desde aquí se puede apreciar el mal estado en el que está.";
writemessages[602] = "Por su posición y solidez proporciona una fácil subida.";
writemessages[603] = "¿Estás de broma? Es demasiado peligroso. Te estás quedando sin cejas del calor que notas ya desde aquí.";
writemessages[604] = "¿Estás de broma? Si antes ya era peligroso ahora vas a arder si te acercas más.";
writemessages[605] = "Solo de imaginar que te asomas al vacío ya te estás mareando, como para acercarse.";
writemessages[606] = "Como los del circo. Parece tener muy mala uva. Para comunicarte, «háblale».";
writemessages[607] = "Seguro que desde allí hay buenas vistas.";
writemessages[608] = "De un color oscuro. Cada una de una forma más excepcional que la anterior.";
writemessages[609] = "No serviría de mucho. Ni tan siquiera si pudieras acercar la mano.";
writemessages[610] = "¡Puaj! No te quieres acercar más. ¡Qué asco! ¿Qué es eso que está pegado ahí? Mejor no saberlo.";
writemessages[611] = "¡Aj! Si sigues investigando vas acabar por vomitar. ¡Qué asco!";
writemessages[612] = "¡Buaaaaagghhh! No... argh... es pegajoso... ¡puaj!";
writemessages[613] = "Chapoteas tocando asquerosas gelatinosas babosidades ";
writemessages[614] = "y de pronto descubres que hay ¡una moneda!";
writemessages[615] = "Chapoteas tocando gelatinosas babosidades ";
writemessages[616] = "¡pero de monedas nada, listillo!";
writemessages[617] = "Es una construcción altísima y de un brillo metálico, pero de superficie tan resbaladiza que la hace inexpugnable.";
writemessages[618] = "Son ranuras estrechas por las que se cuela el agua del río.";
writemessages[619] = "Es muy fuerte. Impide la entrada.";
writemessages[620] = "Esta zona es la más inquietante de las que has estado desde hace un rato.";
writemessages[621] = "Mmmm... hacia el sur se hace cada vez más estrecho. Hacia el norte se ensancha.";
writemessages[622] = "Un aire pútrido te da en la cara. El olor es tan nauseabundo que te preguntas si todo esto merece la pena.";
writemessages[623] = "No parece que se pueda forzar con nada. Habrá que buscar la llave que lo abre.";
writemessages[624] = "Está abierto pero sigue ahí puesto.";
writemessages[625] = "Ha desaparecido delante de tus ojos";
writemessages[626] = "Es un lugar excepcional, imaginas cómo debió ser hace años, cuando el río caía por aquí.";
writemessages[627] = "Este lugar es la Gran Cascada del jefe de los enanos, aunque ya no haya agua. Ahora, es un lugar tan bello como desolador.";
writemessages[628] = "¡Uuaahhh! Te estás mareando de lo profundo que es. Deja de hacer tonterías que te vas a matar.";
writemessages[629] = "Ves la pared casi vertical. Imposible de escalar, ni tan siquiera teniendo el equipo adecuado. Como para intentarlo sin él: Muerte segura.";
writemessages[630] = "No ves nada de nada.";
writemessages[631] = "No puedes examinar dentro de eso que dices.";
writemessages[632] = "Por favor, especifica dentro de qué quieres examinar.";
writemessages[633] = "No puedes examinar eso que dices.";
writemessages[634] = "Por favor, especifica qué o a quién quieres examinar.";
writemessages[635] = "Vaya ocurrencia...";
writemessages[636] = "No está aquí.";
writemessages[637] = "Es de mala educación.";
writemessages[638] = "No está aquí.";
writemessages[639] = "No le ves sentido a examinar dentro de eso.";
writemessages[640] = "No le ves sentido a examinar eso.";
writemessages[641] = "Examinas {OREF} pero no ves nada especial ";
writemessages[642] = ".";
writemessages[643] = "Examinas {OREF} pero no ves nada especial ";
writemessages[644] = ".";
writemessages[645] = "Examinas {OREF} pero no ves nada especial";
writemessages[646] = ".";
writemessages[647] = "Examinas {OREF} pero no ves nada especial. Si lo abres podrás ver su contenido.";
writemessages[648] = "Examinas {OREF} pero no ves nada especial. Si lo abres podrás ver su contenido.";
writemessages[649] = "Examinas {OREF} pero no ves nada especial ";
writemessages[650] = ".";
writemessages[651] = "Examinas {OREF} pero no ves nada especial.";
writemessages[652] = "No ves {OREF} por aquí.";
writemessages[653] = "La lava te reduce a cenizas.";
writemessages[654] = "Flotas en forma de nube.";
writemessages[655] = "Te rompes el hocico contra la raíz del árbol.";
writemessages[656] = "«¿Qué dices?»";
writemessages[657] = "«¡Mi casa!»";
writemessages[658] = "«Cuando encuentre mi casa.»";
writemessages[659] = "Muy contrariado Elfito no puede aguantar las lágrimas y se va. Lo has perdido de vista.";
writemessages[660] = "«¡Qué grosería! ¡Qué mala educación!»";
writemessages[661] = "«¡No encuentro mi casa!»";
writemessages[662] = "«En la Gran Caverna.»";
writemessages[663] = "Oh, qué amable. Gracias.";
writemessages[664] = "«Mi nombre es Elfito.»";
writemessages[665] = "Te dice: «¡Hola tú!»";
writemessages[666] = "«¡No quiero!»";
writemessages[667] = "«Pero ¿qué dices?»";
writemessages[668] = "«¡No me da la gana!»";
writemessages[669] = "«¡Quiero ser más alto!»";
writemessages[670] = "«No quiero ir a ninguna parte ¿Por qué no me dejas en paz?»";
writemessages[671] = "«No quiero seguirte. Déjame tranquilo ya.»";
writemessages[672] = "«¿Quién te has creído que soy? ¿Quién te piensas que eres?»";
writemessages[673] = "«Don Enano»";
writemessages[674] = "Sí, sí... hola, hola. Ahora, piérdete.";
writemessages[675] = "«¡Largo de aquí!»";
writemessages[676] = "Cabreadísimo te ataca, echándose encima de ti.";
writemessages[677] = "Lucháis, forcejeando como dos locos, en el borde del volcán...";
writemessages[678] = " ¡y os precipitáis hacia el abismo!";

// LOCATION MESSAGES

total_location_messages=49;

locations = [];

locations[0] = "\1<div style='padding:2em 2%; text-align:center'>LA AVENTURA ORIGINAL</div>\n";
locations[1] = "";
locations[2] = "";
locations[3] = "Estás justo en la frontera entre las tierras áridas del norte y la zona húmeda y boscosa del sur. Muy cerca hacia el este hay una cabaña de ladrillos rodeada por un frondoso bosque. Un río poco caudaloso fluye hacia el sur.";
locations[4] = "En campo abierto, rodeado por escasa vegetación. Un camino va hacia la cabaña abandonada y desde el este te llega una peste a azufre.";
locations[5] = "Esta es una zona muy árida donde solo crecen malezas espinosas. La fragancia azufrada ya empieza a molestar.";
locations[6] = "Estás en un terreno tapizado de lava vomitada por el activo volcán norteño. Hacia el sur hay una colinita que se eleva suavemente.";
locations[7] = "En este lugar el paisaje es alucinante, lleno de rocas erosionadas y partidas, mudos testigos de anteriores erupciones producidas por el furioso volcán del norte.";
locations[8] = "Desde la colina contemplas el fiero espectáculo de fuego, humo y cenizas producido por el volcán. Hacia el oeste, a lo lejos, y rodeada de denso bosque, se ve una casita. Una senda parte hacia el este, y al sur queda el bosque, tras el que ves una extraña torre en espiral rodeada de nubes.";
locations[9] = "¡Cuidado! Estás al borde del precipicio donde antaño se suicidaban los enanos celosos. Aquí terminan (aparte de las pasiones desenfrenadas) tanto la senda del oeste como el camino del norte.";
locations[10] = "Estás en una habitación bastante guarra. Las paredes desconchadas y el suelo roto indican que hace tiempo fue abandonada. Ves la oscura boca de un pozo por la que baja una herrumbrosa escalera.";
locations[11] = "¡Puaf! El fondo del pozo está casi seco (por suerte para ti, curiosón). Solo quedan algunos charcos malolientes de agua estancada. La estrechez de las mohosas paredes y el enorme silencio que reina hacen que tengas por única compañía el latido desbocado de tu corazón.";
locations[12] = "";
locations[13] = "";
locations[14] = "";
locations[15] = "";
locations[16] = "Te encuentras en lo profundo del bosque rodeado por densa vegetación y junto a un enorme árbol con desgajadas ramas que llegan al suelo.";
locations[17] = "Ya estás sentado entre las ramas del enorme árbol. Tienes una espléndida vista de toda la región. Al norte queda el fardón volcán. Rodeada de bosque está la casita. Hacia el oeste un profundo valle se extiende de norte a sur. En la lejanía, al sur se yergue la misteriosa espiral. Al este solo hay vacío y nubes.";
locations[18] = "En esta zona los enanos hacían sus pícnics (aunque las malas lenguas dicen que eran verdaderas orgías). Hay varias sillas junto a una mesa y un árbol con un curioso letrero.";
locations[19] = "Este es un bosquecillo muy agradable al lado este del valle. Oyes el murmullo de una corriente de agua cerca.";
locations[20] = "Aquí el bosque es bastante cerrado, con árboles por todas partes. ";
locations[21] = "Estás al comienzo de una maravillosa rampa artificial fabricada en medio del bosque, no se sabe hace cuantos años ni por quién.";
locations[22] = "Sigues en la rampa artificial construida en medio del bosque. Frente a ti ves la base de una extraña, pero bellísima estructura.";
locations[23] = "La rampa te conduce hasta un majestuoso claro. Ante ti se eleva la espiral, pulida, brillante y sobre todo impresionante. Detrás, el suelo cae bruscamente.";
locations[24] = "Estás al comienzo del valle, al lado de un alegre arroyuelo que juguetea sobre el lecho rocoso en su camino hacia el sur. Hay bosque a ambos lados.";
locations[25] = "El valle se hace más estrecho y profundo. El arroyo es cada vez menos caudaloso, y ahora no tan alegre, porque poco a poco se va filtrando por las numerosas grietas del rocoso lecho.";
locations[26] = "";
locations[27] = "";
locations[28] = "El cañón se abre en lo que fue antes una cascada y hoy solo un precipicio rocoso. Un enorme cortado parte el paisaje de este a oeste y, desde tus quinientos metros de altura, tienes una vista maravillosa de las tierras del sur. Desde el norte llega el viento a través de la garganta rocosa.";
locations[29] = "";
locations[30] = "Con un click la puerta se cierra mágicamente...";
locations[31] = "";
locations[32] = "";
locations[33] = "";
locations[34] = "";
locations[35] = "";
locations[36] = "";
locations[37] = "";
locations[38] = "";
locations[39] = "";
locations[40] = "";
locations[41] = "";
locations[42] = "";
locations[43] = "";
locations[44] = "";
locations[45] = "";
locations[46] = "";
locations[47] = "";
locations[48] = "";

// CONNECTIONS

connections = [];
connections_start = [];

connections[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[1] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[2] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[3] = [ -1, -1, 4, 24, 10, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1 ];
connections[4] = [ -1, -1, 4, 3, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[5] = [ -1, -1, 5, -1, 6, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[6] = [ -1, -1, 12, 8, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[7] = [ -1, -1, 12, 9, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[8] = [ -1, -1, 6, 13, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[9] = [ -1, -1, 7, 0, 0, 8, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections[10] = [ -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, 0, -1, 3, -1, -1 ];
connections[11] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1 ];
connections[12] = [ -1, -1, 0, 7, 12, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections[13] = [ -1, -1, 13, 16, 13, 14, 13, 13, 13, 15, -1, -1, -1, -1, -1, -1 ];
connections[14] = [ -1, -1, 14, 14, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[15] = [ -1, -1, 14, 18, 15, 14, -1, -1, 16, -1, -1, -1, -1, -1, -1, -1 ];
connections[16] = [ -1, -1, 15, 14, 14, 14, -1, -1, -1, -1, 17, -1, -1, -1, -1, -1 ];
connections[17] = [ -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, 16, -1, -1, -1, -1 ];
connections[18] = [ -1, -1, -1, -1, 19, 24, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[19] = [ -1, -1, -1, 20, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[20] = [ -1, -1, 19, 21, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[21] = [ -1, -1, 20, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[22] = [ -1, -1, 21, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[23] = [ -1, -1, 22, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[24] = [ -1, -1, 3, 25, 18, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[25] = [ -1, -1, 24, 26, 14, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[26] = [ -1, -1, 25, 28, 20, 20, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1 ];
connections[27] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[28] = [ -1, -1, 26, -1, 20, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[29] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[30] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[31] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[32] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[33] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[34] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[35] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[36] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[37] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[38] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[39] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[40] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[41] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[42] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[43] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[44] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[45] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[46] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[47] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[48] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];

connections_start[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[1] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[2] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[3] = [ -1, -1, 4, 24, 10, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1 ];
connections_start[4] = [ -1, -1, 4, 3, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[5] = [ -1, -1, 5, -1, 6, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[6] = [ -1, -1, 12, 8, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[7] = [ -1, -1, 12, 9, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[8] = [ -1, -1, 6, 13, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[9] = [ -1, -1, 7, 0, 0, 8, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections_start[10] = [ -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, 0, -1, 3, -1, -1 ];
connections_start[11] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1 ];
connections_start[12] = [ -1, -1, 0, 7, 12, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections_start[13] = [ -1, -1, 13, 16, 13, 14, 13, 13, 13, 15, -1, -1, -1, -1, -1, -1 ];
connections_start[14] = [ -1, -1, 14, 14, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[15] = [ -1, -1, 14, 18, 15, 14, -1, -1, 16, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[16] = [ -1, -1, 15, 14, 14, 14, -1, -1, -1, -1, 17, -1, -1, -1, -1, -1 ];
connections_start[17] = [ -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, 16, -1, -1, -1, -1 ];
connections_start[18] = [ -1, -1, -1, -1, 19, 24, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[19] = [ -1, -1, -1, 20, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[20] = [ -1, -1, 19, 21, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[21] = [ -1, -1, 20, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[22] = [ -1, -1, 21, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[23] = [ -1, -1, 22, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[24] = [ -1, -1, 3, 25, 18, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[25] = [ -1, -1, 24, 26, 14, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[26] = [ -1, -1, 25, 28, 20, 20, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1 ];
connections_start[27] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[28] = [ -1, -1, 26, -1, 20, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[29] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[30] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[31] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[32] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[33] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[34] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[35] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[36] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[37] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[38] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[39] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[40] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[41] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[42] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[43] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[44] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[45] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[46] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[47] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[48] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];


resources=[];
resources.push([RESOURCE_TYPE_IMG, 257, "dat/intro.png"]);
resources.push([RESOURCE_TYPE_IMG, 3, "dat/loc03.png"]);
resources.push([RESOURCE_TYPE_IMG, 4, "dat/loc04.png"]);
resources.push([RESOURCE_TYPE_IMG, 5, "dat/loc05.png"]);
resources.push([RESOURCE_TYPE_IMG, 6, "dat/loc06.png"]);
resources.push([RESOURCE_TYPE_IMG, 7, "dat/loc07.png"]);
resources.push([RESOURCE_TYPE_IMG, 8, "dat/loc08.png"]);
resources.push([RESOURCE_TYPE_IMG, 9, "dat/loc09.png"]);
resources.push([RESOURCE_TYPE_IMG, 10, "dat/loc10.png"]);
resources.push([RESOURCE_TYPE_IMG, 11, "dat/loc11.png"]);
resources.push([RESOURCE_TYPE_IMG, 12, "dat/loc12.png"]);
resources.push([RESOURCE_TYPE_IMG, 13, "dat/loc13.png"]);
resources.push([RESOURCE_TYPE_IMG, 14, "dat/loc14.png"]);
resources.push([RESOURCE_TYPE_IMG, 15, "dat/loc15.png"]);
resources.push([RESOURCE_TYPE_IMG, 16, "dat/loc16.png"]);
resources.push([RESOURCE_TYPE_IMG, 17, "dat/loc17.png"]);
resources.push([RESOURCE_TYPE_IMG, 18, "dat/loc18.png"]);
resources.push([RESOURCE_TYPE_IMG, 19, "dat/loc19.png"]);
resources.push([RESOURCE_TYPE_IMG, 20, "dat/loc20.png"]);
resources.push([RESOURCE_TYPE_IMG, 21, "dat/loc21.png"]);
resources.push([RESOURCE_TYPE_IMG, 22, "dat/loc22.png"]);
resources.push([RESOURCE_TYPE_IMG, 23, "dat/loc23.png"]);
resources.push([RESOURCE_TYPE_IMG, 24, "dat/loc24.png"]);
resources.push([RESOURCE_TYPE_IMG, 25, "dat/loc25.png"]);
resources.push([RESOURCE_TYPE_IMG, 26, "dat/loc26.png"]);
resources.push([RESOURCE_TYPE_IMG, 27, "dat/loc26abierta.png"]);
resources.push([RESOURCE_TYPE_IMG, 259, "dat/loc26sincand.png"]);
resources.push([RESOURCE_TYPE_IMG, 28, "dat/loc28.png"]);
resources.push([RESOURCE_TYPE_IMG, 29, "dat/loc29.png"]);


 //OBJECTS

objects = [];
objectsAttrLO = [];
objectsAttrHI = [];
objectsLocation = [];
objectsNoun = [];
objectsAdjective = [];
objectsWeight = [];
objectsAttrLO_start = [];
objectsAttrHI_start = [];
objectsLocation_start = [];
objectsWeight_start = [];

objects[0] = "una linterna {TEXTPIC|iconolinterna.svg|0}";
objectsNoun[0] = 50;
objectsAdjective[0] = 255;
objectsLocation[0] = 252;
objectsLocation_start[0] = 252;
objectsWeight[0] = 1;
objectsWeight_start[0] = 1;
objectsAttrLO[0] = 524548;
objectsAttrLO_start[0] = 524548;
objectsAttrHI[0] = 0;
objectsAttrHI_start[0] = 0;

objects[1] = "una moneda";
objectsNoun[1] = 51;
objectsAdjective[1] = 255;
objectsLocation[1] = 252;
objectsLocation_start[1] = 252;
objectsWeight[1] = 1;
objectsWeight_start[1] = 1;
objectsAttrLO[1] = 256;
objectsAttrLO_start[1] = 256;
objectsAttrHI[1] = 0;
objectsAttrHI_start[1] = 0;

objects[2] = "una tortilla";
objectsNoun[2] = 52;
objectsAdjective[2] = 255;
objectsLocation[2] = 252;
objectsLocation_start[2] = 252;
objectsWeight[2] = 1;
objectsWeight_start[2] = 1;
objectsAttrLO[2] = 288;
objectsAttrLO_start[2] = 288;
objectsAttrHI[2] = 0;
objectsAttrHI_start[2] = 0;

objects[3] = "una botella";
objectsNoun[3] = 53;
objectsAdjective[3] = 255;
objectsLocation[3] = 28;
objectsLocation_start[3] = 28;
objectsWeight[3] = 1;
objectsWeight_start[3] = 1;
objectsAttrLO[3] = 4194560;
objectsAttrLO_start[3] = 4194560;
objectsAttrHI[3] = 0;
objectsAttrHI_start[3] = 0;

objects[4] = "una llave";
objectsNoun[4] = 54;
objectsAdjective[4] = 255;
objectsLocation[4] = 252;
objectsLocation_start[4] = 252;
objectsWeight[4] = 1;
objectsWeight_start[4] = 1;
objectsAttrLO[4] = 256;
objectsAttrLO_start[4] = 256;
objectsAttrHI[4] = 0;
objectsAttrHI_start[4] = 0;

objects[5] = "una pila eléctrica";
objectsNoun[5] = 55;
objectsAdjective[5] = 255;
objectsLocation[5] = 8;
objectsLocation_start[5] = 8;
objectsWeight[5] = 1;
objectsWeight_start[5] = 1;
objectsAttrLO[5] = 256;
objectsAttrLO_start[5] = 256;
objectsAttrHI[5] = 0;
objectsAttrHI_start[5] = 0;

objects[6] = "una pareja de botas";
objectsNoun[6] = 101;
objectsAdjective[6] = 255;
objectsLocation[6] = 23;
objectsLocation_start[6] = 23;
objectsWeight[6] = 1;
objectsWeight_start[6] = 1;
objectsAttrLO[6] = 33026;
objectsAttrLO_start[6] = 33026;
objectsAttrHI[6] = 0;
objectsAttrHI_start[6] = 0;

last_object_number =  6; 
carried_objects = 0;
total_object_messages=7;

