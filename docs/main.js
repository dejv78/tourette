(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/lex/fesm5/tourette-lex.js":
/*!****************************************!*\
  !*** ./dist/lex/fesm5/tourette-lex.js ***!
  \****************************************/
/*! exports provided: AnalysisService, AnalysisParams, TK_UNKNOWN, TK_PUNCTUATION, TK_EMPTY_LINE, TK_CONJUNCTION, TK_PREPOSITION, TK_NUMBER, TK_PRONOUN, TK_PART, PUNCT_TYPE_END_OF_SENTENCE, NUMBER_TYPE_BASIC, NUMBER_TYPE_HAFO, NUMBER_TYPE_ROW, NUMBER_TYPE_KND, PRONOUN_TYPE_PERSONAL, PRONOUN_TYPE_OWNERSHIP, PRONOUN_TYPE_POINTING, PRONOUN_TYPE_QUESTION, PRONOUN_TYPE_RELATION, PRONOUN_TYPE_INDEFINITE, PRONOUN_TYPE_NEGATIVE, GENDER_UNKNOWN, GENDER_MALE, GENDER_FEMALE, GENDER_MIDDLE, GENDER_FEMALE_MIDDLE, FALL_1, FALL_2, FALL_3, FALL_4, FALL_5, FALL_6, FALL_7, AMOUNT_UNKNOWN, AMOUNT_SINGLE, AMOUNT_MULTIPLE, Token, Line, AnalysisResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisService", function() { return AnalysisService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisParams", function() { return AnalysisParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_UNKNOWN", function() { return TK_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PUNCTUATION", function() { return TK_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_EMPTY_LINE", function() { return TK_EMPTY_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_CONJUNCTION", function() { return TK_CONJUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PREPOSITION", function() { return TK_PREPOSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_NUMBER", function() { return TK_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PRONOUN", function() { return TK_PRONOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PART", function() { return TK_PART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUNCT_TYPE_END_OF_SENTENCE", function() { return PUNCT_TYPE_END_OF_SENTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_BASIC", function() { return NUMBER_TYPE_BASIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_HAFO", function() { return NUMBER_TYPE_HAFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_ROW", function() { return NUMBER_TYPE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_KND", function() { return NUMBER_TYPE_KND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_PERSONAL", function() { return PRONOUN_TYPE_PERSONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_OWNERSHIP", function() { return PRONOUN_TYPE_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_POINTING", function() { return PRONOUN_TYPE_POINTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_QUESTION", function() { return PRONOUN_TYPE_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_RELATION", function() { return PRONOUN_TYPE_RELATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_INDEFINITE", function() { return PRONOUN_TYPE_INDEFINITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_NEGATIVE", function() { return PRONOUN_TYPE_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_UNKNOWN", function() { return GENDER_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_MALE", function() { return GENDER_MALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_FEMALE", function() { return GENDER_FEMALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_MIDDLE", function() { return GENDER_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_FEMALE_MIDDLE", function() { return GENDER_FEMALE_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_1", function() { return FALL_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_2", function() { return FALL_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_3", function() { return FALL_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_4", function() { return FALL_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_5", function() { return FALL_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_6", function() { return FALL_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_7", function() { return FALL_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_UNKNOWN", function() { return AMOUNT_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_SINGLE", function() { return AMOUNT_SINGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_MULTIPLE", function() { return AMOUNT_MULTIPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisResult", function() { return AnalysisResult; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TK_UNKNOWN = 'nn';
/** @type {?} */
var TK_PUNCTUATION = 'ip';
/** @type {?} */
var TK_EMPTY_LINE = '-';
/** @type {?} */
var TK_CONJUNCTION = 'sp';
/** @type {?} */
var TK_PREPOSITION = 'přl';
/** @type {?} */
var TK_NUMBER = 'čís';
/** @type {?} */
var TK_PRONOUN = 'záj';
/** @type {?} */
var TK_PART = 'čst';
/** @type {?} */
var PUNCT_TYPE_END_OF_SENTENCE = 'kv';
/** @type {?} */
var NUMBER_TYPE_BASIC = 'z';
/** @type {?} */
var NUMBER_TYPE_HAFO = 'h';
/** @type {?} */
var NUMBER_TYPE_ROW = 'ř';
/** @type {?} */
var NUMBER_TYPE_KND = 'd';
/** @type {?} */
var PRONOUN_TYPE_PERSONAL = 'osb';
/** @type {?} */
var PRONOUN_TYPE_OWNERSHIP = 'při';
/** @type {?} */
var PRONOUN_TYPE_POINTING = 'uka';
/** @type {?} */
var PRONOUN_TYPE_QUESTION = 'táz';
/** @type {?} */
var PRONOUN_TYPE_RELATION = 'vzt';
/** @type {?} */
var PRONOUN_TYPE_INDEFINITE = 'neu';
/** @type {?} */
var PRONOUN_TYPE_NEGATIVE = 'záp';
/** @type {?} */
var GENDER_UNKNOWN = '-';
/** @type {?} */
var GENDER_MALE = 'm';
/** @type {?} */
var GENDER_FEMALE = 'ž';
/** @type {?} */
var GENDER_MIDDLE = 's';
/** @type {?} */
var GENDER_FEMALE_MIDDLE = 'ž/s';
/** @type {?} */
var FALL_1 = '1';
/** @type {?} */
var FALL_2 = '2';
/** @type {?} */
var FALL_3 = '3';
/** @type {?} */
var FALL_4 = '4';
/** @type {?} */
var FALL_5 = '5';
/** @type {?} */
var FALL_6 = '6';
/** @type {?} */
var FALL_7 = '7';
/** @type {?} */
var AMOUNT_UNKNOWN = '-';
/** @type {?} */
var AMOUNT_SINGLE = 'j';
/** @type {?} */
var AMOUNT_MULTIPLE = 'm';
var Token = /** @class */ (function () {
    function Token(text, kind) {
        this.text = text;
        this.kind = kind ? kind : TK_UNKNOWN;
    }
    return Token;
}());
var Line = /** @class */ (function () {
    function Line(tokens) {
        this.tokens = tokens;
    }
    return Line;
}());
var AnalysisResult = /** @class */ (function () {
    function AnalysisResult(lines) {
        this.lines = lines;
    }
    return AnalysisResult;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchResult = /** @class */ (function () {
    function SearchResult(fragment, hit, index) {
        this.fragment = fragment;
        this.hit = hit;
        this.index = index;
    }
    return SearchResult;
}());
var RegexSearch = /** @class */ (function () {
    function RegexSearch(pattern, flags) {
        this.pattern = pattern;
        this.flags = flags;
        this.regexp = new RegExp(pattern, flags);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    RegexSearch.prototype.exec = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var oldindex = 0;
        /** @type {?} */
        var myArray;
        while ((myArray = this.regexp.exec(text)) !== null) {
            console.log("Text: [" + text + "] From: " + oldindex + ", To hit: " + myArray.index + ", To: " + this.regexp.lastIndex);
            result.push(new SearchResult(text.substring(oldindex, myArray.index), false, oldindex));
            result.push(new SearchResult(text.substring(myArray.index, this.regexp.lastIndex), true, myArray.index));
            oldindex = this.regexp.lastIndex;
        }
        if (!oldindex) {
            result.push(new SearchResult(text.substring(oldindex, text.length), false, oldindex));
        }
        console.log(result);
        return result;
    };
    return RegexSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SyllablesCounter = /** @class */ (function () {
    function SyllablesCounter() {
        this.regexp = new RegExp('[aáeéiíyýoóuúů]+', 'ig');
    }
    /**
     * @param {?} token
     * @return {?}
     */
    SyllablesCounter.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if ((token.kind === TK_EMPTY_LINE) || (token.kind === TK_PUNCTUATION)) {
            return;
        }
        /** @type {?} */
        var first = true;
        /** @type {?} */
        var syllablesCount = 0;
        /** @type {?} */
        var myArray;
        while ((myArray = this.regexp.exec(token.text)) !== null) {
            syllablesCount++;
            if (first) {
                first = false;
                if (myArray.index >= 3) {
                    syllablesCount++;
                }
            }
        }
        //console.log(`Token: [${token.text}] Syllables: ${syllablesCount}`);
        token.syllables = syllablesCount ? syllablesCount : (token.text.trim().length >= 1) ? 1 : 0;
    };
    return SyllablesCounter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmptyLineDetector = /** @class */ (function () {
    function EmptyLineDetector() {
    }
    /**
     * @param {?} token
     * @return {?}
     */
    EmptyLineDetector.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if (token.text.trim() === '') {
            token.kind = TK_EMPTY_LINE;
        }
    };
    return EmptyLineDetector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Conjunctions = /** @class */ (function () {
    function Conjunctions() {
        this.cj = ['a', 'ani', 'nebo', 'ale', 'avšak', 'ba', 'i', 'dokonce', 'nebo', 'anebo', 'tudíž', 'totiž', 'neboť', 'proto'];
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Conjunctions.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var e_1, _a;
        if (token.kind === TK_UNKNOWN) {
            /** @type {?} */
            var text = token.text.toLowerCase().trim();
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.cj), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    if (c === text) {
                        token.kind = TK_CONJUNCTION;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    return Conjunctions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Prepositions = /** @class */ (function () {
    function Prepositions() {
        this.preps = new Map();
        this.preps.set('2', ['z', 'ze', 'od', 'do', 'u', 'bez', 'během', 'kvůli', 'za', 'kromě']);
        this.preps.set('3', ['k', 'ke', 'proti', 'díky', 'vůči']);
        this.preps.set('4', ['pro', 'přes', 'ob']);
        this.preps.set('6', ['při']);
        this.preps.set('4/6', ['o', 'v', 've', 'po', 'na']);
        this.preps.set('4/7', ['nad', 'pod', 'před', 'mezi']);
        this.preps.set('2/4/7', ['za', 's']);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Prepositions.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if (token.kind === TK_UNKNOWN) {
            /** @type {?} */
            var text_1 = token.text.toLowerCase().trim();
            this.preps.forEach(function (value, key) {
                var e_1, _a;
                try {
                    for (var value_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                        var c = value_1_1.value;
                        if (c === text_1) {
                            Prepositions.setPreposition(token, key);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }
    };
    /**
     * @private
     * @param {?} token
     * @param {?} fall
     * @return {?}
     */
    Prepositions.setPreposition = /**
     * @private
     * @param {?} token
     * @param {?} fall
     * @return {?}
     */
    function (token, fall) {
        token.kind = TK_PREPOSITION;
        token.fall = fall;
    };
    return Prepositions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.posts = new Map();
        this.numbers = new Map();
        this.posts.set(NUMBER_TYPE_BASIC, ['náct', 'cet', 'sát', 'stě', 'sta']);
        this.posts.set(NUMBER_TYPE_KND, ['tery']);
        /** @type {?} */
        var m_hafo = new Map();
        m_hafo.set(GENDER_UNKNOWN, ['stovky', 'tisíce', 'tisícovky', 'desetitisíce', 'statisíce', 'miliony', 'miliardy']);
        /** @type {?} */
        var m_zakl = new Map();
        m_zakl.set(GENDER_UNKNOWN, ['tři', 'čtyři', 'pět', 'šest', 'sedm', 'osm', 'devět', 'deset', 'sto', 'tisíc', 'milion']);
        m_zakl.set(GENDER_MALE, ['jeden', 'dva']);
        m_zakl.set(GENDER_FEMALE, ['jedna']);
        m_zakl.set(GENDER_MIDDLE, ['jedno']);
        m_zakl.set(GENDER_FEMALE_MIDDLE, ['dvě']);
        /** @type {?} */
        var m_rad = new Map();
        m_rad.set(GENDER_UNKNOWN, ['první', 'třetí', 'tisící', 'desetitisící', 'statisící']);
        m_rad.set(GENDER_MALE, ['prvý', 'druhý', 'druhej', 'čtvrtý', 'pátý', 'šestý', 'sedmý', 'osmý', 'devátý', 'desátý', 'stý', 'milontý']);
        m_rad.set(GENDER_FEMALE, ['prvá', 'druhá', 'čtvrtá', 'pátá', 'šestá', 'sedmá', 'osmá', 'devátá', 'desátá', 'stá', 'milontá']);
        m_rad.set(GENDER_MIDDLE, ['prvé', 'druhé', 'čtvrté', 'páté', 'šesté', 'sedmé', 'osmé', 'deváté', 'desáté', 'sté', 'milonté']);
        /** @type {?} */
        var m_druh = new Map();
        m_druh.set(GENDER_UNKNOWN, ['jedny', 'dvoje', 'troje', 'čtvery', 'patery']);
        this.numbers.set(NUMBER_TYPE_BASIC, m_zakl);
        this.numbers.set(NUMBER_TYPE_HAFO, m_hafo);
        this.numbers.set(NUMBER_TYPE_ROW, m_rad);
        this.numbers.set(NUMBER_TYPE_KND, m_druh);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Numbers.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var _this = this;
        if (token.kind === TK_UNKNOWN) {
            /** @type {?} */
            var text_1 = token.text.toLowerCase().trim();
            this.numbers.forEach(function (value1, key1) {
                value1.forEach(function (value2, key2) {
                    var e_1, _a;
                    try {
                        for (var value2_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(value2), value2_1_1 = value2_1.next(); !value2_1_1.done; value2_1_1 = value2_1.next()) {
                            var c = value2_1_1.value;
                            if (c === text_1) {
                                Numbers.setNumber(token, key1, key2);
                                return;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (value2_1_1 && !value2_1_1.done && (_a = value2_1.return)) _a.call(value2_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                });
            });
            this.posts.forEach(function (value1, key1) {
                var e_2, _a;
                try {
                    for (var value1_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(value1), value1_1_1 = value1_1.next(); !value1_1_1.done; value1_1_1 = value1_1.next()) {
                        var c = value1_1_1.value;
                        if (text_1.endsWith(c)) {
                            if (key1 === NUMBER_TYPE_BASIC) {
                                /** @type {?} */
                                var m_zakl = _this.numbers.get(key1);
                                _this.parseNumbers(m_zakl, value1, text_1, token, key1);
                            }
                            if (key1 === NUMBER_TYPE_KND) {
                                /** @type {?} */
                                var m_druh = _this.numbers.get(key1);
                                _this.parseNumbers(m_druh, value1, text_1, token, key1);
                            }
                            return;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (value1_1_1 && !value1_1_1.done && (_a = value1_1.return)) _a.call(value1_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        }
    };
    /**
     * @private
     * @param {?} map
     * @param {?} value1
     * @param {?} text
     * @param {?} token
     * @param {?} key1
     * @return {?}
     */
    Numbers.prototype.parseNumbers = /**
     * @private
     * @param {?} map
     * @param {?} value1
     * @param {?} text
     * @param {?} token
     * @param {?} key1
     * @return {?}
     */
    function (map, value1, text, token, key1) {
        map.forEach(function (value2, key2) {
            var e_3, _a;
            try {
                for (var value1_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(value1), value1_2_1 = value1_2.next(); !value1_2_1.done; value1_2_1 = value1_2.next()) {
                    var c2 = value1_2_1.value;
                    if (text.startsWith(c2)) {
                        Numbers.setNumber(token, key1, key2);
                        return;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (value1_2_1 && !value1_2_1.done && (_a = value1_2.return)) _a.call(value1_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
    };
    /**
     * @private
     * @param {?} token
     * @param {?} type
     * @param {?} gender
     * @return {?}
     */
    Numbers.setNumber = /**
     * @private
     * @param {?} token
     * @param {?} type
     * @param {?} gender
     * @return {?}
     */
    function (token, type, gender) {
        token.kind = TK_NUMBER;
        token.type = type;
        token.gender = gender;
    };
    return Numbers;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PronounProps = /** @class */ (function () {
    function PronounProps(type, fall, gender, amount) {
        this.type = type;
        this.fall = fall;
        this.gender = gender;
        this.amount = amount;
    }
    return PronounProps;
}());
/**
 * Zájména
 */
var /**
 * Zájména
 */
Pronouns = /** @class */ (function () {
    function Pronouns() {
        this.pronouns = new Map();
        this.pronouns.set('já', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
        this.pronouns.set('ty', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
        this.pronouns.set('on', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('ona', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));
        this.pronouns.set('ono', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
        this.pronouns.set('my', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_MULTIPLE));
        this.pronouns.set('vy', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_MULTIPLE));
        this.pronouns.set('oni', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
        this.pronouns.set('ony', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_FEMALE_MIDDLE, AMOUNT_MULTIPLE));
        this.pronouns.set('můj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('tvůj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('jeho', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('její', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE, AMOUNT_SINGLE));
        this.pronouns.set('náš', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('naše', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('váš', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('vaše', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('jejich', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('svůj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('svoje', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('ten', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('tento', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('tenhle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('ta', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));
        this.pronouns.set('tahle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('to', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
        this.pronouns.set('tohle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
        this.pronouns.set('ti', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
        this.pronouns.set('tito', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
        this.pronouns.set('ti', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
        this.pronouns.set('ty', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
        this.pronouns.set('tyto', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
        this.pronouns.set('tyhle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
        this.pronouns.set('kdo', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('co', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
        this.pronouns.set('jaký', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('který', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('čí', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('jenž', new PronounProps(PRONOUN_TYPE_RELATION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('jež', new PronounProps(PRONOUN_TYPE_RELATION, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));
        this.pronouns.set('někdo', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
        this.pronouns.set('něco', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
        this.pronouns.set('kdokoli', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('kdokoliv', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('cokoli', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('cokoliv', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('kdekdo', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('kdosi', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('každý', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_UNKNOWN));
        this.pronouns.set('každá', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_UNKNOWN));
        this.pronouns.set('každé', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('všechen', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_UNKNOWN));
        this.pronouns.set('všechna', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_UNKNOWN));
        this.pronouns.set('všechno', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('všichni', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
        this.pronouns.set('všechny', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
        this.pronouns.set('nikdo', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('nic', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('ničí', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
        this.pronouns.set('nijaký', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
        this.pronouns.set('nijaká', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_FEMALE, AMOUNT_SINGLE));
        this.pronouns.set('nijaké', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MIDDLE, AMOUNT_UNKNOWN));
        this.pronouns.set('žádný', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MALE, AMOUNT_UNKNOWN));
        this.pronouns.set('žádná', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_FEMALE, AMOUNT_UNKNOWN));
        this.pronouns.set('žádné', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Pronouns.prototype.analyze = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if (token.kind !== TK_UNKNOWN) {
            return;
        }
        /** @type {?} */
        var text = token.text.toLowerCase().trim();
        this.pronouns.forEach(function (value, key) {
            if (key === text) {
                token.kind = TK_PRONOUN;
                token.type = value.type;
                token.gender = value.gender;
                token.fall = value.fall;
                token.amount = value.amount;
                return;
            }
        });
    };
    return Pronouns;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnalysisService = /** @class */ (function () {
    function AnalysisService() {
        this.punctuationSearch = new RegexSearch('[\,\.\?\;\:]+', 'ig');
        this.tokenAnalyzers = [];
        this.tokenAnalyzers.push(new EmptyLineDetector());
        this.tokenAnalyzers.push(new SyllablesCounter());
        this.tokenAnalyzers.push(new Numbers());
        this.tokenAnalyzers.push(new Conjunctions());
        this.tokenAnalyzers.push(new Prepositions());
        this.tokenAnalyzers.push(new Pronouns());
    }
    /**
     * @param {?} text
     * @param {?} params
     * @return {?}
     */
    AnalysisService.prototype.analyze = /**
     * @param {?} text
     * @param {?} params
     * @return {?}
     */
    function (text, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(_this, void 0, void 0, function () {
                        var result;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.split(text)];
                                case 1:
                                    result = _a.sent();
                                    resolve(result);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    AnalysisService.prototype.split = /**
     * @private
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f;
                        /** @type {?} */
                        var linesRaw = text.split('\n');
                        /** @type {?} */
                        var lines = [];
                        try {
                            for (var linesRaw_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(linesRaw), linesRaw_1_1 = linesRaw_1.next(); !linesRaw_1_1.done; linesRaw_1_1 = linesRaw_1.next()) {
                                var line = linesRaw_1_1.value;
                                /** @type {?} */
                                var tokensRaw = line.split(' ');
                                /** @type {?} */
                                var tokens = [];
                                try {
                                    for (var tokensRaw_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(tokensRaw), tokensRaw_1_1 = tokensRaw_1.next(); !tokensRaw_1_1.done; tokensRaw_1_1 = tokensRaw_1.next()) {
                                        var token = tokensRaw_1_1.value;
                                        /** @type {?} */
                                        var subtokens = _this.detectPunctuation(token);
                                        try {
                                            for (var subtokens_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(subtokens), subtokens_1_1 = subtokens_1.next(); !subtokens_1_1.done; subtokens_1_1 = subtokens_1.next()) {
                                                var subtoken = subtokens_1_1.value;
                                                tokens.push(subtoken);
                                            }
                                        }
                                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                        finally {
                                            try {
                                                if (subtokens_1_1 && !subtokens_1_1.done && (_c = subtokens_1.return)) _c.call(subtokens_1);
                                            }
                                            finally { if (e_3) throw e_3.error; }
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (tokensRaw_1_1 && !tokensRaw_1_1.done && (_b = tokensRaw_1.return)) _b.call(tokensRaw_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                lines.push(new Line(tokens));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (linesRaw_1_1 && !linesRaw_1_1.done && (_a = linesRaw_1.return)) _a.call(linesRaw_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (var lines_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(lines), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {
                                var line = lines_1_1.value;
                                try {
                                    for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(line.tokens), _h = _g.next(); !_h.done; _h = _g.next()) {
                                        var token = _h.value;
                                        try {
                                            for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(_this.tokenAnalyzers), _k = _j.next(); !_k.done; _k = _j.next()) {
                                                var analyzer = _k.value;
                                                analyzer.analyze(token);
                                            }
                                        }
                                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                        finally {
                                            try {
                                                if (_k && !_k.done && (_f = _j.return)) _f.call(_j);
                                            }
                                            finally { if (e_6) throw e_6.error; }
                                        }
                                    }
                                }
                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                finally {
                                    try {
                                        if (_h && !_h.done && (_e = _g.return)) _e.call(_g);
                                    }
                                    finally { if (e_5) throw e_5.error; }
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (lines_1_1 && !lines_1_1.done && (_d = lines_1.return)) _d.call(lines_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        resolve(new AnalysisResult(lines));
                    })];
            });
        });
    };
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    AnalysisService.prototype.detectPunctuation = /**
     * @private
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var e_7, _a;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var search = this.punctuationSearch.exec(token);
        try {
            for (var search_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(search), search_1_1 = search_1.next(); !search_1_1.done; search_1_1 = search_1.next()) {
                var sr = search_1_1.value;
                /** @type {?} */
                var t = new Token(sr.fragment, sr.hit ? TK_PUNCTUATION : TK_UNKNOWN);
                if (t.kind === TK_PUNCTUATION) {
                    t.type = (t.text.indexOf(',') >= 0) ? null : PUNCT_TYPE_END_OF_SENTENCE;
                }
                result.push(t);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (search_1_1 && !search_1_1.done && (_a = search_1.return)) _a.call(search_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return result;
    };
    AnalysisService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AnalysisService.ctorParameters = function () { return []; };
    /** @nocollapse */ AnalysisService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AnalysisService_Factory() { return new AnalysisService(); }, token: AnalysisService, providedIn: "root" });
    return AnalysisService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnalysisParams = /** @class */ (function () {
    function AnalysisParams() {
    }
    return AnalysisParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=tourette-lex.js.map

/***/ }),

/***/ "./projects/lex/src/lib/analysis.service.ts":
/*!**************************************************!*\
  !*** ./projects/lex/src/lib/analysis.service.ts ***!
  \**************************************************/
/*! exports provided: AnalysisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisService", function() { return AnalysisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");
/* harmony import */ var _util_regex_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/regex-search */ "./projects/lex/src/lib/util/regex-search.ts");
/* harmony import */ var _analyzers_syllables_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analyzers/syllables-counter */ "./projects/lex/src/lib/analyzers/syllables-counter.ts");
/* harmony import */ var _analyzers_empty_line_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analyzers/empty-line-detector */ "./projects/lex/src/lib/analyzers/empty-line-detector.ts");
/* harmony import */ var _analyzers_conjunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analyzers/conjunctions */ "./projects/lex/src/lib/analyzers/conjunctions.ts");
/* harmony import */ var _analyzers_prepositions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analyzers/prepositions */ "./projects/lex/src/lib/analyzers/prepositions.ts");
/* harmony import */ var _analyzers_numbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analyzers/numbers */ "./projects/lex/src/lib/analyzers/numbers.ts");
/* harmony import */ var _analyzers_pronouns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analyzers/pronouns */ "./projects/lex/src/lib/analyzers/pronouns.ts");
/* harmony import */ var _analyzers_parts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analyzers/parts */ "./projects/lex/src/lib/analyzers/parts.ts");
/* harmony import */ var _analyzers_nouns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analyzers/nouns */ "./projects/lex/src/lib/analyzers/nouns.ts");
/* harmony import */ var _analyzers_verbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analyzers/verbs */ "./projects/lex/src/lib/analyzers/verbs.ts");
/* harmony import */ var _analyzers_adjectives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analyzers/adjectives */ "./projects/lex/src/lib/analyzers/adjectives.ts");
/* harmony import */ var _analyzers_adverbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./analyzers/adverbs */ "./projects/lex/src/lib/analyzers/adverbs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var AnalysisService = /** @class */ (function () {
    function AnalysisService() {
        this.punctuationSearch = new _util_regex_search__WEBPACK_IMPORTED_MODULE_2__["RegexSearch"]('[\,\.\?\;\:]+', 'ig');
        this.tokenAnalyzers = [];
        this.tokenAnalyzers.push(new _analyzers_empty_line_detector__WEBPACK_IMPORTED_MODULE_4__["EmptyLineDetector"]());
        this.tokenAnalyzers.push(new _analyzers_syllables_counter__WEBPACK_IMPORTED_MODULE_3__["SyllablesCounter"]());
        this.tokenAnalyzers.push(new _analyzers_parts__WEBPACK_IMPORTED_MODULE_9__["Parts"]());
        this.tokenAnalyzers.push(new _analyzers_numbers__WEBPACK_IMPORTED_MODULE_7__["Numbers"]());
        this.tokenAnalyzers.push(new _analyzers_conjunctions__WEBPACK_IMPORTED_MODULE_5__["Conjunctions"]());
        this.tokenAnalyzers.push(new _analyzers_prepositions__WEBPACK_IMPORTED_MODULE_6__["Prepositions"]());
        this.tokenAnalyzers.push(new _analyzers_pronouns__WEBPACK_IMPORTED_MODULE_8__["Pronouns"]());
        this.tokenAnalyzers.push(new _analyzers_nouns__WEBPACK_IMPORTED_MODULE_10__["Nouns"]());
        this.tokenAnalyzers.push(new _analyzers_adjectives__WEBPACK_IMPORTED_MODULE_12__["Adjectives"]());
        this.tokenAnalyzers.push(new _analyzers_verbs__WEBPACK_IMPORTED_MODULE_11__["Verbs"]());
        this.tokenAnalyzers.push(new _analyzers_adverbs__WEBPACK_IMPORTED_MODULE_13__["Adverbs"]());
    }
    AnalysisService.prototype.analyze = function (text, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.split(text)];
                                case 1:
                                    result = _a.sent();
                                    resolve(result);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AnalysisService.prototype.split = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var linesRaw = text.split('\n');
                        var lines = [];
                        //Pregenerate tokens
                        for (var _i = 0, linesRaw_1 = linesRaw; _i < linesRaw_1.length; _i++) {
                            var line = linesRaw_1[_i];
                            var tokensRaw = line.trim().split(' ');
                            var tokens = [];
                            for (var _a = 0, tokensRaw_1 = tokensRaw; _a < tokensRaw_1.length; _a++) {
                                var token = tokensRaw_1[_a];
                                var subtokens = _this.detectPunctuation(token);
                                for (var _b = 0, subtokens_1 = subtokens; _b < subtokens_1.length; _b++) {
                                    var subtoken = subtokens_1[_b];
                                    tokens.push(subtoken);
                                }
                            }
                            lines.push(new _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["Line"](tokens));
                        }
                        //Analyze tokens
                        //TODO: Generate sentences, and analyze tokens according to sentences instead of lines.
                        //TODO: Pass current sentence to analyzer, along with token.
                        //TODO: Return lines as usual.
                        for (var _c = 0, lines_1 = lines; _c < lines_1.length; _c++) {
                            var line = lines_1[_c];
                            for (var _d = 0, _e = line.tokens; _d < _e.length; _d++) {
                                var token = _e[_d];
                                for (var _f = 0, _g = _this.tokenAnalyzers; _f < _g.length; _f++) {
                                    var analyzer = _g[_f];
                                    analyzer.analyze(token);
                                }
                            }
                        }
                        resolve(new _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["AnalysisResult"](lines));
                    })];
            });
        });
    };
    AnalysisService.prototype.detectPunctuation = function (token) {
        var result = [];
        var search = this.punctuationSearch.exec(token);
        for (var _i = 0, search_1 = search; _i < search_1.length; _i++) {
            var sr = search_1[_i];
            var t = new _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["Token"](sr.fragment, sr.hit ? _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["TK_PUNCTUATION"] : _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["TK_UNKNOWN"]);
            if (t.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["TK_PUNCTUATION"]) {
                t.type = (t.text.indexOf(',') >= 0) ? null : _model_analysis_result__WEBPACK_IMPORTED_MODULE_1__["PUNCT_TYPE_END_OF_SENTENCE"];
            }
            result.push(t);
        }
        return result;
    };
    AnalysisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AnalysisService);
    return AnalysisService;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/adjectives.ts":
/*!******************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/adjectives.ts ***!
  \******************************************************/
/*! exports provided: Adjectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adjectives", function() { return Adjectives; });
/**
 * Přídavná jména
 */
var Adjectives = /** @class */ (function () {
    function Adjectives() {
    }
    Adjectives.prototype.analyze = function (token) {
    };
    return Adjectives;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/adverbs.ts":
/*!***************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/adverbs.ts ***!
  \***************************************************/
/*! exports provided: Adverbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adverbs", function() { return Adverbs; });
/**
 * Příslovce
 */
var Adverbs = /** @class */ (function () {
    function Adverbs() {
    }
    Adverbs.prototype.analyze = function (token) {
    };
    return Adverbs;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/conjunctions.ts":
/*!********************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/conjunctions.ts ***!
  \********************************************************/
/*! exports provided: Conjunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conjunctions", function() { return Conjunctions; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

/**
 * Spojky
 */
var Conjunctions = /** @class */ (function () {
    function Conjunctions() {
        this.cj = ['a', 'ani', 'nebo', 'ale', 'avšak', 'ba', 'i', 'dokonce', 'nebo', 'anebo', 'tudíž', 'totiž', 'neboť', 'proto'];
    }
    Conjunctions.prototype.analyze = function (token) {
        if (token.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_UNKNOWN"]) {
            var text = token.text.toLowerCase().trim();
            for (var _i = 0, _a = this.cj; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c === text) {
                    token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_CONJUNCTION"];
                }
            }
        }
    };
    return Conjunctions;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/empty-line-detector.ts":
/*!***************************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/empty-line-detector.ts ***!
  \***************************************************************/
/*! exports provided: EmptyLineDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLineDetector", function() { return EmptyLineDetector; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

/**
 * Detekce prázdných řádků
 */
var EmptyLineDetector = /** @class */ (function () {
    function EmptyLineDetector() {
    }
    EmptyLineDetector.prototype.analyze = function (token) {
        if (token.text.trim() === '') {
            token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_EMPTY_LINE"];
        }
    };
    return EmptyLineDetector;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/nouns.ts":
/*!*************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/nouns.ts ***!
  \*************************************************/
/*! exports provided: Nouns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nouns", function() { return Nouns; });
/**
 * Podstatná jména
 */
var Nouns = /** @class */ (function () {
    function Nouns() {
    }
    Nouns.prototype.analyze = function (token) {
    };
    return Nouns;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/numbers.ts":
/*!***************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/numbers.ts ***!
  \***************************************************/
/*! exports provided: Numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numbers", function() { return Numbers; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

/**
 * Číslovky
 */
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.posts = new Map();
        this.numbers = new Map();
        this.posts.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_BASIC"], ['náct', 'cet', 'sát', 'stě', 'sta']);
        this.posts.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_KND"], ['tery']);
        var m_hafo = new Map();
        m_hafo.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], ['stovky', 'tisíce', 'tisícovky', 'desetitisíce', 'statisíce', 'miliony', 'miliardy']);
        var m_zakl = new Map();
        m_zakl.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], ['tři', 'čtyři', 'pět', 'šest', 'sedm', 'osm', 'devět', 'deset', 'sto', 'tisíc', 'milion']);
        m_zakl.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], ['jeden', 'dva']);
        m_zakl.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], ['jedna']);
        m_zakl.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], ['jedno']);
        m_zakl.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE_MIDDLE"], ['dvě']);
        var m_rad = new Map();
        m_rad.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], ['první', 'třetí', 'tisící', 'desetitisící', 'statisící']);
        m_rad.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], ['prvý', 'druhý', 'druhej', 'čtvrtý', 'pátý', 'šestý', 'sedmý', 'osmý', 'devátý', 'desátý', 'stý', 'milontý']);
        m_rad.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], ['prvá', 'druhá', 'čtvrtá', 'pátá', 'šestá', 'sedmá', 'osmá', 'devátá', 'desátá', 'stá', 'milontá']);
        m_rad.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], ['prvé', 'druhé', 'čtvrté', 'páté', 'šesté', 'sedmé', 'osmé', 'deváté', 'desáté', 'sté', 'milonté']);
        var m_druh = new Map();
        m_druh.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], ['jedny', 'dvoje', 'troje', 'čtvery', 'patery']);
        this.numbers.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_BASIC"], m_zakl);
        this.numbers.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_HAFO"], m_hafo);
        this.numbers.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_ROW"], m_rad);
        this.numbers.set(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_KND"], m_druh);
    }
    Numbers.prototype.analyze = function (token) {
        var _this = this;
        if (token.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_UNKNOWN"]) {
            var text_1 = token.text.toLowerCase().trim();
            this.numbers.forEach(function (value1, key1) {
                value1.forEach(function (value2, key2) {
                    for (var _i = 0, value2_1 = value2; _i < value2_1.length; _i++) {
                        var c = value2_1[_i];
                        if (c === text_1) {
                            Numbers.setNumber(token, key1, key2);
                            return;
                        }
                    }
                });
            });
            this.posts.forEach(function (value1, key1) {
                for (var _i = 0, value1_1 = value1; _i < value1_1.length; _i++) {
                    var c = value1_1[_i];
                    if (text_1.endsWith(c)) {
                        if (key1 === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_BASIC"]) {
                            var m_zakl = _this.numbers.get(key1);
                            _this.parseNumbers(m_zakl, value1, text_1, token, key1);
                        }
                        if (key1 === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["NUMBER_TYPE_KND"]) {
                            var m_druh = _this.numbers.get(key1);
                            _this.parseNumbers(m_druh, value1, text_1, token, key1);
                        }
                        return;
                    }
                }
            });
        }
    };
    Numbers.prototype.parseNumbers = function (map, value1, text, token, key1) {
        map.forEach(function (value2, key2) {
            for (var _i = 0, value1_2 = value1; _i < value1_2.length; _i++) {
                var c2 = value1_2[_i];
                if (text.startsWith(c2)) {
                    Numbers.setNumber(token, key1, key2);
                    return;
                }
            }
        });
    };
    Numbers.setNumber = function (token, type, gender) {
        token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_NUMBER"];
        token.type = type;
        token.gender = gender;
    };
    return Numbers;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/parts.ts":
/*!*************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/parts.ts ***!
  \*************************************************/
/*! exports provided: Parts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parts", function() { return Parts; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

var Parts = /** @class */ (function () {
    function Parts() {
        this.parts = ["ať", "kéž", "nejspíš", "zajisté", "prostě", "snad", "asi", "právě", "možná", "právě", "jen", "také", "ano", "ne", "nikoli", "nikoliv", "samozřejmě", "bohužel", "každopádně", "naštěstí", "příliš", "velmi", "velice", "převelice", "moc", "třeba", "teprve", "teprv", "pouze", "přímo"];
    }
    Parts.prototype.analyze = function (token) {
        if (token.kind !== _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_UNKNOWN"]) {
            return;
        }
        var text = token.text.toLowerCase().trim();
        for (var _i = 0, _a = this.parts; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c === text) {
                token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_PART"];
            }
        }
    };
    return Parts;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/prepositions.ts":
/*!********************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/prepositions.ts ***!
  \********************************************************/
/*! exports provided: Prepositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prepositions", function() { return Prepositions; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

/**
 * Předložky
 */
var Prepositions = /** @class */ (function () {
    function Prepositions() {
        this.preps = new Map();
        this.preps.set('2', ['z', 'ze', 'od', 'do', 'u', 'bez', 'během', 'kvůli', 'za', 'kromě']);
        this.preps.set('3', ['k', 'ke', 'proti', 'díky', 'vůči']);
        this.preps.set('4', ['pro', 'přes', 'ob']);
        this.preps.set('6', ['při']);
        this.preps.set('4/6', ['o', 'v', 've', 'po', 'na']);
        this.preps.set('4/7', ['nad', 'pod', 'před', 'mezi']);
        this.preps.set('2/4/7', ['za', 's']);
    }
    Prepositions.prototype.analyze = function (token) {
        if (token.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_UNKNOWN"]) {
            var text_1 = token.text.toLowerCase().trim();
            this.preps.forEach(function (value, key) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var c = value_1[_i];
                    if (c === text_1) {
                        Prepositions.setPreposition(token, key);
                    }
                }
            });
        }
    };
    Prepositions.setPreposition = function (token, fall) {
        token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_PREPOSITION"];
        token.fall = fall;
    };
    return Prepositions;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/pronouns.ts":
/*!****************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/pronouns.ts ***!
  \****************************************************/
/*! exports provided: PronounProps, Pronouns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronounProps", function() { return PronounProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pronouns", function() { return Pronouns; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

var PronounProps = /** @class */ (function () {
    function PronounProps(type, fall, gender, amount) {
        this.type = type;
        this.fall = fall;
        this.gender = gender;
        this.amount = amount;
    }
    return PronounProps;
}());

/**
 * Zájména
 */
var Pronouns = /** @class */ (function () {
    function Pronouns() {
        this.pronouns = new Map();
        this.pronouns.set('já', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('ty', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('on', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('ona', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('ono', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('my', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('vy', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('oni', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('ony', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_PERSONAL"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('můj', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('tvůj', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('jeho', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('její', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('náš', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('naše', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('váš', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('vaše', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('jejich', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('svůj', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('svoje', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_OWNERSHIP"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('ten', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('tento', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('tenhle', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('ta', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('tahle', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('to', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('tohle', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('ti', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('tito', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('ti', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('ty', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('tyto', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('tyhle', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_POINTING"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('kdo', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('kdopak', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('co', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('copak', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('jaký', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('jakýpak', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('který', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('kterýpak', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('čí', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('čípak', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_QUESTION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('jenž', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_RELATION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('jež', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_RELATION"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('někdo', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('něco', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('kdokoli', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('kdokoliv', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('cokoli', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('cokoliv', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('kdekdo', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('kdosi', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('každý', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('každá', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('každé', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('všechen', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('všechna', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('všechno', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('všichni', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('všechny', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_INDEFINITE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_MULTIPLE"]));
        this.pronouns.set('nikdo', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('nic', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_1"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('ničí', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_UNKNOWN"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('nijaký', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('nijaká', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_SINGLE"]));
        this.pronouns.set('nijaké', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('žádný', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('žádná', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_FEMALE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
        this.pronouns.set('žádné', new PronounProps(_model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["PRONOUN_TYPE_NEGATIVE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["FALL_2"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["GENDER_MIDDLE"], _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UNKNOWN"]));
    }
    Pronouns.prototype.analyze = function (token) {
        if (token.kind !== _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_UNKNOWN"]) {
            return;
        }
        var text = token.text.toLowerCase().trim();
        this.pronouns.forEach(function (value, key) {
            if (key === text) {
                token.kind = _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_PRONOUN"];
                token.type = value.type;
                token.gender = value.gender;
                token.fall = value.fall;
                token.amount = value.amount;
                return;
            }
        });
    };
    return Pronouns;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/syllables-counter.ts":
/*!*************************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/syllables-counter.ts ***!
  \*************************************************************/
/*! exports provided: SyllablesCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllablesCounter", function() { return SyllablesCounter; });
/* harmony import */ var _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");

/**
 * Počítadlo slabik
 */
var SyllablesCounter = /** @class */ (function () {
    function SyllablesCounter() {
        this.regexp = new RegExp('[aáeéiíyýoóuúů]+', 'ig');
    }
    SyllablesCounter.prototype.analyze = function (token) {
        if ((token.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_EMPTY_LINE"]) || (token.kind === _model_analysis_result__WEBPACK_IMPORTED_MODULE_0__["TK_PUNCTUATION"])) {
            return;
        }
        var first = true;
        var syllablesCount = 0;
        var myArray;
        while ((myArray = this.regexp.exec(token.text)) !== null) {
            syllablesCount++;
            if (first) {
                first = false;
                if (myArray.index >= 3) {
                    syllablesCount++;
                }
            }
        }
        //console.log(`Token: [${token.text}] Syllables: ${syllablesCount}`);
        token.syllables = syllablesCount ? syllablesCount : (token.text.trim().length >= 1) ? 1 : 0;
    };
    return SyllablesCounter;
}());



/***/ }),

/***/ "./projects/lex/src/lib/analyzers/verbs.ts":
/*!*************************************************!*\
  !*** ./projects/lex/src/lib/analyzers/verbs.ts ***!
  \*************************************************/
/*! exports provided: Verbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verbs", function() { return Verbs; });
/**
 * Slovesa
 */
var Verbs = /** @class */ (function () {
    function Verbs() {
    }
    Verbs.prototype.analyze = function (token) {
    };
    return Verbs;
}());



/***/ }),

/***/ "./projects/lex/src/lib/model/analysis-result.ts":
/*!*******************************************************!*\
  !*** ./projects/lex/src/lib/model/analysis-result.ts ***!
  \*******************************************************/
/*! exports provided: TK_UNKNOWN, TK_PUNCTUATION, TK_EMPTY_LINE, TK_CONJUNCTION, TK_PREPOSITION, TK_NUMBER, TK_PRONOUN, TK_PART, PUNCT_TYPE_END_OF_SENTENCE, NUMBER_TYPE_BASIC, NUMBER_TYPE_HAFO, NUMBER_TYPE_ROW, NUMBER_TYPE_KND, PRONOUN_TYPE_PERSONAL, PRONOUN_TYPE_OWNERSHIP, PRONOUN_TYPE_POINTING, PRONOUN_TYPE_QUESTION, PRONOUN_TYPE_RELATION, PRONOUN_TYPE_INDEFINITE, PRONOUN_TYPE_NEGATIVE, GENDER_UNKNOWN, GENDER_MALE, GENDER_FEMALE, GENDER_MIDDLE, GENDER_FEMALE_MIDDLE, FALL_1, FALL_2, FALL_3, FALL_4, FALL_5, FALL_6, FALL_7, AMOUNT_UNKNOWN, AMOUNT_SINGLE, AMOUNT_MULTIPLE, Token, Line, AnalysisResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_UNKNOWN", function() { return TK_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PUNCTUATION", function() { return TK_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_EMPTY_LINE", function() { return TK_EMPTY_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_CONJUNCTION", function() { return TK_CONJUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PREPOSITION", function() { return TK_PREPOSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_NUMBER", function() { return TK_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PRONOUN", function() { return TK_PRONOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TK_PART", function() { return TK_PART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUNCT_TYPE_END_OF_SENTENCE", function() { return PUNCT_TYPE_END_OF_SENTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_BASIC", function() { return NUMBER_TYPE_BASIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_HAFO", function() { return NUMBER_TYPE_HAFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_ROW", function() { return NUMBER_TYPE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_TYPE_KND", function() { return NUMBER_TYPE_KND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_PERSONAL", function() { return PRONOUN_TYPE_PERSONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_OWNERSHIP", function() { return PRONOUN_TYPE_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_POINTING", function() { return PRONOUN_TYPE_POINTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_QUESTION", function() { return PRONOUN_TYPE_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_RELATION", function() { return PRONOUN_TYPE_RELATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_INDEFINITE", function() { return PRONOUN_TYPE_INDEFINITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRONOUN_TYPE_NEGATIVE", function() { return PRONOUN_TYPE_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_UNKNOWN", function() { return GENDER_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_MALE", function() { return GENDER_MALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_FEMALE", function() { return GENDER_FEMALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_MIDDLE", function() { return GENDER_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER_FEMALE_MIDDLE", function() { return GENDER_FEMALE_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_1", function() { return FALL_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_2", function() { return FALL_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_3", function() { return FALL_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_4", function() { return FALL_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_5", function() { return FALL_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_6", function() { return FALL_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALL_7", function() { return FALL_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_UNKNOWN", function() { return AMOUNT_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_SINGLE", function() { return AMOUNT_SINGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_MULTIPLE", function() { return AMOUNT_MULTIPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisResult", function() { return AnalysisResult; });
var TK_UNKNOWN = 'nn';
var TK_PUNCTUATION = 'ip';
var TK_EMPTY_LINE = '-';
var TK_CONJUNCTION = 'sp';
var TK_PREPOSITION = 'přl';
var TK_NUMBER = 'čís';
var TK_PRONOUN = 'záj';
var TK_PART = 'čst';
var PUNCT_TYPE_END_OF_SENTENCE = 'kv';
var NUMBER_TYPE_BASIC = 'z';
var NUMBER_TYPE_HAFO = 'h';
var NUMBER_TYPE_ROW = 'ř';
var NUMBER_TYPE_KND = 'd';
var PRONOUN_TYPE_PERSONAL = 'osb';
var PRONOUN_TYPE_OWNERSHIP = 'při';
var PRONOUN_TYPE_POINTING = 'uka';
var PRONOUN_TYPE_QUESTION = 'táz';
var PRONOUN_TYPE_RELATION = 'vzt';
var PRONOUN_TYPE_INDEFINITE = 'neu';
var PRONOUN_TYPE_NEGATIVE = 'záp';
var GENDER_UNKNOWN = '-';
var GENDER_MALE = 'm';
var GENDER_FEMALE = 'ž';
var GENDER_MIDDLE = 's';
var GENDER_FEMALE_MIDDLE = 'ž/s';
var FALL_1 = '1';
var FALL_2 = '2';
var FALL_3 = '3';
var FALL_4 = '4';
var FALL_5 = '5';
var FALL_6 = '6';
var FALL_7 = '7';
var AMOUNT_UNKNOWN = '-';
var AMOUNT_SINGLE = 'j';
var AMOUNT_MULTIPLE = 'm';
var Token = /** @class */ (function () {
    function Token(text, kind) {
        this.text = text;
        this.kind = kind ? kind : TK_UNKNOWN;
    }
    return Token;
}());

var Line = /** @class */ (function () {
    function Line(tokens) {
        this.tokens = tokens;
    }
    ;
    return Line;
}());

var AnalysisResult = /** @class */ (function () {
    function AnalysisResult(lines) {
        this.lines = lines;
    }
    ;
    return AnalysisResult;
}());



/***/ }),

/***/ "./projects/lex/src/lib/util/regex-search.ts":
/*!***************************************************!*\
  !*** ./projects/lex/src/lib/util/regex-search.ts ***!
  \***************************************************/
/*! exports provided: SearchResult, RegexSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResult", function() { return SearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexSearch", function() { return RegexSearch; });
var SearchResult = /** @class */ (function () {
    function SearchResult(fragment, hit, index) {
        this.fragment = fragment;
        this.hit = hit;
        this.index = index;
    }
    return SearchResult;
}());

var RegexSearch = /** @class */ (function () {
    function RegexSearch(pattern, flags) {
        this.pattern = pattern;
        this.flags = flags;
        this.regexp = new RegExp(pattern, flags);
    }
    RegexSearch.prototype.exec = function (text) {
        var result = [];
        var oldindex = 0;
        var myArray;
        while ((myArray = this.regexp.exec(text)) !== null) {
            //console.log(`Text: [${text}] From: ${oldindex}, To hit: ${myArray.index}, To: ${this.regexp.lastIndex}`);
            result.push(new SearchResult(text.substring(oldindex, myArray.index), false, oldindex));
            result.push(new SearchResult(text.substring(myArray.index, this.regexp.lastIndex), true, myArray.index));
            oldindex = this.regexp.lastIndex;
        }
        if (!oldindex) {
            result.push(new SearchResult(text.substring(oldindex, text.length), false, oldindex));
        }
        return result;
    };
    return RegexSearch;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n<span>Tourette</span>&nbsp;<span class=\"minor\">| lyrics </span>\n</mat-toolbar>\n<mat-tab-group>\n\n  <mat-tab label=\"Text\">\n    <div class=\"framed workspace\">\n      <div class=\"framed column\">\n        <div class=\"framed top\">\n          <app-song-selector (onSongChanged)=\"onTextChanged($event)\"></app-song-selector>\n        </div>\n        <div class=\"framed fill\">\n          <!--suppress HtmlFormInputWithoutLabel -->\n          <textarea #ta (change)=\"onTextChanged(ta.value)\" (keyup)=\"onTextChanged(ta.value)\" (paste)=\"onTextChanged(ta.value)\">{{text}}</textarea>\n        </div>\n        <div class=\"framed full bottom\">\n          <button mat-flat-button color=\"primary\" (click)=\"modify()\">Upravit</button>\n        </div>\n      </div>\n      <div class=\"framed column\">\n        <div class=\"framed top\">\n        </div>\n        <div class=\"framed fill\">\n          <!--suppress HtmlFormInputWithoutLabel -->\n          <textarea>{{result}}</textarea>\n        </div>\n        <div class=\"framed bottom\">\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Analýza\">\n    <div class=\"workspace\">\n      <div class=\"framed column\">\n        <app-analysis [analysis]=\"analysis\"></app-analysis>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch; }\n\n.minor {\n  opacity: 0.5; }\n\n.framed {\n  border: none; }\n\n.fill {\n  flex-grow: 1;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  margin: 36px 0; }\n\n.full {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  flex-grow: 0; }\n\n@media screen and (min-width: 1200px) {\n  .top {\n    overflow-y: auto;\n    flex: 0 0 144px;\n    min-height: 144px;\n    max-height: 144px;\n    height: 144px; } }\n\n@media screen and (min-width: 1200px) {\n  .bottom {\n    overflow-y: auto;\n    flex: 0 0 36px;\n    min-height: 36px;\n    max-height: 36px;\n    height: 36px; } }\n\n.workspace {\n  flex-grow: 1;\n  width: 100%;\n  min-height: 1600px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch; }\n\n@media screen and (min-width: 1200px) {\n    .workspace {\n      flex-grow: 1;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      align-items: stretch;\n      width: 1100px;\n      min-height: 800px; } }\n\n@media screen and (min-width: 1500px) {\n    .workspace {\n      width: 1400px; } }\n\n.column {\n  flex: 1 1 50%;\n  padding: 24px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch; }\n\ntextarea {\n  flex-grow: 1;\n  background-color: #262626;\n  border: 1px solid #595959;\n  padding: 24px;\n  color: inherit;\n  outline: none;\n  resize: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2NvZGUvcGVyc29uYWwvdG91cmV0dGUvc3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFhO0VDZWIsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkRoQnNCO0VDaUJ0QixrQkFBaUI7RUFDakIscUJEbEIrQixFQUNoQzs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUNFWixhQUFZO0VBQ1osY0FBYTtFQUNiLHVCREhzQjtFQ0l0QixrQkFBaUI7RUFDakIscUJETCtCO0VBQy9CLGVBQW1CLEVBQ3BCOztBQUVEO0VDSEUsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkRFc0I7RUNEdEIsa0JBQWlCO0VBQ2pCLHFCREErQjtFQUMvQixhQUFZLEVBQ2I7O0FBR0M7RUFERjtJQ01FLGlCQUFnQjtJQUNoQixnQkRMNkI7SUNNN0Isa0JETjZCO0lDTzdCLGtCRFA2QjtJQ1E3QixjRFI2QixFQUU5QixFQUFBOztBQUdDO0VBREY7SUNBRSxpQkFBZ0I7SUFDaEIsZURDNEI7SUNBNUIsaUJEQTRCO0lDQzVCLGlCREQ0QjtJQ0U1QixhREY0QixFQUU3QixFQUFBOztBQUdEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkM1QnlCO0VBSXpCLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJEdUJzQjtFQ3RCdEIsa0JBQWlCO0VBQ2pCLHFCRHFCK0IsRUFVaEM7O0FBUkM7SUFORjtNQ3JCRSxhQUFZO01BQ1osY0FBYTtNQUNiLG9CRDBCcUI7TUN6QnJCLGtCQUFpQjtNQUNqQixxQkR3QjhCO01BQzVCLGNDbkN1QjtNRG9DdkIsa0JDakNzQixFRHNDekIsRUFBQTs7QUFIQztJQVhGO01BWUksY0N0Q3FCLEVEd0N4QixFQUFBOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGNDdkRhO0VBZ0JiLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJEc0NzQjtFQ3JDdEIsa0JBQWlCO0VBQ2pCLHFCRG9DK0IsRUFDaEM7O0FBRUQ7RUFDRSxhQUFZO0VDcENaLDBCQW5CaUQ7RUFvQmpELDBCQW5CaUQ7RUFvQmpELGNBMUJhO0VEOERiLGVBQWM7RUFDZCxjQUFhO0VBQ2IsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnY29tbW9uJztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBAaW5jbHVkZSBmbGV4ZWQoY29sdW1uLCBzdHJldGNoKTtcbn1cblxuLm1pbm9yIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZnJhbWVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmlsbCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgQGluY2x1ZGUgZmxleGVkKGNvbHVtbiwgc3RyZXRjaCk7XG4gIG1hcmdpbjogJG1hcmdpbi1sIDA7XG59XG5cbi5mdWxsIHtcbiAgQGluY2x1ZGUgZmxleGVkKGNvbHVtbiwgc3RyZXRjaCk7XG4gIGZsZXgtZ3JvdzogMDtcbn1cblxuLnRvcCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR3LWxpbS1kb3VibGUpIHtcbiAgICBAaW5jbHVkZSBmaXhlZC1oZWlnaHQoMTQ0cHgpO1xuICB9XG59XG5cbi5ib3R0b20ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdy1saW0tZG91YmxlKSB7XG4gICAgQGluY2x1ZGUgZml4ZWQtaGVpZ2h0KDM2cHgpO1xuICB9XG59XG5cblxuLndvcmtzcGFjZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6ICRoLXdvcmtzcGFjZS1zaW5nbGU7XG4gIEBpbmNsdWRlIGZsZXhlZChjb2x1bW4sIHN0cmV0Y2gpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR3LWxpbS1kb3VibGUpIHtcbiAgICBAaW5jbHVkZSBmbGV4ZWQocm93LCBzdHJldGNoKTtcbiAgICB3aWR0aDogJHctd29ya3NwYWNlLW5hcnJvdztcbiAgICBtaW4taGVpZ2h0OiAkaC13b3Jrc3BhY2UtZG91YmxlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR3LWxpbS13aWRlcikge1xuICAgIHdpZHRoOiAkdy13b3Jrc3BhY2Utd2lkZTtcbiAgfVxufVxuXG4uY29sdW1uIHtcbiAgZmxleDogMSAxIDUwJTtcbiAgcGFkZGluZzogJG1hcmdpbi1tO1xuICBAaW5jbHVkZSBmbGV4ZWQoY29sdW1uLCBzdHJldGNoKTtcbn1cblxudGV4dGFyZWEge1xuICBmbGV4LWdyb3c6IDE7XG4gIEBpbmNsdWRlIGFyZWEoKTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuIiwiJG1hcmdpbi14bDogNDhweDtcbiRtYXJnaW4tbDogMzZweDtcbiRtYXJnaW4tbTogMjRweDtcbiRtYXJnaW4tczogMTJweDtcbiRtYXJnaW4teHM6IDZweDtcblxuJGNvbC1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xuJGNvbC1iYWNrZ3JvdW5kLWRrOiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCBibGFjaywgODApO1xuJGNvbC1iYWNrZ3JvdW5kLWx0OiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCB3aGl0ZSwgODApO1xuXG4kdy1saW0tZG91YmxlOiAxMjAwcHg7XG4kdy1saW0td2lkZXI6IDE1MDBweDtcbiR3LXdvcmtzcGFjZS1uYXJyb3c6IDExMDBweDtcbiR3LXdvcmtzcGFjZS13aWRlOiAxNDAwcHg7XG4kaC13b3Jrc3BhY2Utc2luZ2xlOiAxNjAwcHg7XG4kaC13b3Jrc3BhY2UtZG91YmxlOiA4MDBweDtcblxuQG1peGluIGZsZXhlZCgkZGlyZWN0aW9uLCAkYWxpZ24pIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG59XG5cbkBtaXhpbiBhcmVhKCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sLWJhY2tncm91bmQtZGs7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2wtYmFja2dyb3VuZC1sdDtcbiAgcGFkZGluZzogJG1hcmdpbi1tO1xufVxuXG5AbWl4aW4gZml4ZWQtaGVpZ2h0KCRoZWlnaHQpIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleDogMCAwICRoZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gIG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_lex_src_lib_analysis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/lex/src/lib/analysis.service */ "./projects/lex/src/lib/analysis.service.ts");
/* harmony import */ var _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/lex/src/lib/model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(analyzer) {
        this.analyzer = analyzer;
        this.text = '';
        this.analysis = new _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["AnalysisResult"]([]);
        this.result = '';
    }
    AppComponent.prototype.onTextChanged = function (text) {
        this.text = text;
    };
    AppComponent.prototype.modify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.analyzer.analyze(this.text, null)];
                    case 1:
                        _a.analysis = _b.sent();
                        this.result = this.text;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_projects_lex_src_lib_analysis_service__WEBPACK_IMPORTED_MODULE_1__["AnalysisService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createFLSInstance, init, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFLSInstance", function() { return createFLSInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/analysis/analysis.component */ "./src/app/components/analysis/analysis.component.ts");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.tokens */ "./src/app/app.tokens.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d78ng_file_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @d78ng/file-loader */ "./node_modules/@d78ng/file-loader/fesm5/d78ng-file-loader.js");
/* harmony import */ var _components_song_selector_song_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/song-selector/song-selector.component */ "./src/app/components/song-selector/song-selector.component.ts");
/* harmony import */ var lex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lex */ "./dist/lex/fesm5/tourette-lex.js");
/* harmony import */ var _components_analysis_token_analysis_token_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/analysis-token/analysis-token.component */ "./src/app/components/analysis-token/analysis-token.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












function createFLSInstance(http) {
    return new _d78ng_file_loader__WEBPACK_IMPORTED_MODULE_8__["FileLoaderService"](http);
}
function init(songs) {
    var _this = this;
    return function () {
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([
                                songs.load('https://dejv78.github.io/tourette/assets/songs.json', '/assets/songs.json'),
                            ])];
                    case 1:
                        _a.sent();
                        resolve(true);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Init failed', { error: error_1 });
                        resolve(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisComponent"],
                _components_song_selector_song_selector_component__WEBPACK_IMPORTED_MODULE_9__["SongSelectorComponent"],
                _components_analysis_token_analysis_token_component__WEBPACK_IMPORTED_MODULE_11__["AnalysisTokenComponent"],
            ],
            providers: [
                { provide: _app_tokens__WEBPACK_IMPORTED_MODULE_6__["DATA_SONGS"], useFactory: createFLSInstance, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: init, deps: [_app_tokens__WEBPACK_IMPORTED_MODULE_6__["DATA_SONGS"]], multi: true },
                lex__WEBPACK_IMPORTED_MODULE_10__["AnalysisService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.tokens.ts":
/*!*******************************!*\
  !*** ./src/app/app.tokens.ts ***!
  \*******************************/
/*! exports provided: DATA_SONGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SONGS", function() { return DATA_SONGS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DATA_SONGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("data.songs");


/***/ }),

/***/ "./src/app/components/analysis-token/analysis-token.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/analysis-token/analysis-token.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngClass]=\"cls\" [matTooltip]=\"tooltip\">\n  <span class=\"tabbed\" [ngClass]=\"cls\">{{token.kind}}</span>\n  <span class=\"flexible\"></span>\n  <span *ngIf=\"token.syllables\" class=\"colored\" [ngClass]=\"cls\">{{token.syllables}}</span>\n</div>\n<div class=\"text\" [ngClass]=\"cls\">\n  {{token.text}}\n</div>\n<div class=\"footer\" [ngClass]=\"cls\">\n  <span class=\"colored\" [ngClass]=\"cls\" *ngIf=\"details\">{{details}}</span>&nbsp;\n</div>\n"

/***/ }),

/***/ "./src/app/components/analysis-token/analysis-token.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/analysis-token/analysis-token.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  flex-grow: 0;\n  margin: 6px;\n  min-width: 60px; }\n\n.header {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n  border-color: grey;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  font-size: 0.75em; }\n\n.header.punct {\n    border-color: silver; }\n\n.header.empty {\n    border-color: darkslateblue; }\n\n.header.conj {\n    border-color: darksalmon; }\n\n.header.prep {\n    border-color: lightcoral; }\n\n.header.num {\n    border-color: powderblue; }\n\n.header.pronoun {\n    border-color: aquamarine; }\n\n.header.part {\n    border-color: lavender; }\n\n.text {\n  background-color: #1b1b1b;\n  color: grey; }\n\n.text.punct {\n    color: silver; }\n\n.text.empty {\n    color: darkslateblue; }\n\n.text.conj {\n    color: darksalmon; }\n\n.text.prep {\n    color: lightcoral; }\n\n.text.num {\n    color: powderblue; }\n\n.text.pronoun {\n    color: aquamarine; }\n\n.text.part {\n    color: lavender; }\n\n.footer {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: flex-start;\n  border-color: grey;\n  font-size: 0.75em;\n  border-top-style: solid;\n  border-top-width: 1px; }\n\n.footer.punct {\n    border-color: silver; }\n\n.footer.empty {\n    border-color: darkslateblue; }\n\n.footer.conj {\n    border-color: darksalmon; }\n\n.footer.prep {\n    border-color: lightcoral; }\n\n.footer.num {\n    border-color: powderblue; }\n\n.footer.pronoun {\n    border-color: aquamarine; }\n\n.footer.part {\n    border-color: lavender; }\n\n.tabbed {\n  padding: 0 2px;\n  color: #262626;\n  font-weight: bolder;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  flex-grow: 0;\n  background-color: grey; }\n\n.tabbed.punct {\n    background-color: silver; }\n\n.tabbed.empty {\n    background-color: darkslateblue; }\n\n.tabbed.conj {\n    background-color: darksalmon; }\n\n.tabbed.prep {\n    background-color: lightcoral; }\n\n.tabbed.num {\n    background-color: powderblue; }\n\n.tabbed.pronoun {\n    background-color: aquamarine; }\n\n.tabbed.part {\n    background-color: lavender; }\n\n.colored {\n  color: grey; }\n\n.colored.punct {\n    color: silver; }\n\n.colored.empty {\n    color: darkslateblue; }\n\n.colored.conj {\n    color: darksalmon; }\n\n.colored.prep {\n    color: lightcoral; }\n\n.colored.num {\n    color: powderblue; }\n\n.colored.pronoun {\n    color: aquamarine; }\n\n.colored.part {\n    color: lavender; }\n\n.flexible {\n  flex: 1 0 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9hcHAvY29tcG9uZW50cy9hbmFseXNpcy10b2tlbi9hbmFseXNpcy10b2tlbi5jb21wb25lbnQuc2NzcyIsIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9zdHlsZXMvX2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDZ0JFLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJEakJzQjtFQ2tCdEIsa0JBQWlCO0VBQ2pCLHFCRG5CK0I7RUFDL0IsYUFBWTtFQUNaLFlDRGE7RURFYixnQkFBZSxFQUNoQjs7QUF1Q0Q7RUM1QkUsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkQyQm1CO0VDMUJuQixrQkFBaUI7RUFDakIsc0JEeUI2QjtFQTFCN0IsbUJBWHFCO0VBdUNyQiwyQkFBMEI7RUFDMUIseUJBekNnQjtFQTBDaEIsa0JBQWlCLEVBQ2xCOztBQTlCQztJQUNFLHFCQVp5QixFQWExQjs7QUFDRDtJQUNFLDRCQWQwQixFQWUzQjs7QUFDRDtJQUNFLHlCQWhCNkIsRUFpQjlCOztBQUNEO0lBQ0UseUJBbEI2QixFQW1COUI7O0FBQ0Q7SUFDRSx5QkFwQndCLEVBcUJ6Qjs7QUFDRDtJQUNFLHlCQXRCeUIsRUF1QjFCOztBQUNEO0lBQ0UsdUJBeEJvQixFQXlCckI7O0FBWUg7RUFDRSwwQkFBb0Q7RUFsQ3BELFlBWHFCLEVBK0N0Qjs7QUFuQ0M7SUFDRSxjQVp5QixFQWExQjs7QUFDRDtJQUNFLHFCQWQwQixFQWUzQjs7QUFDRDtJQUNFLGtCQWhCNkIsRUFpQjlCOztBQUNEO0lBQ0Usa0JBbEI2QixFQW1COUI7O0FBQ0Q7SUFDRSxrQkFwQndCLEVBcUJ6Qjs7QUFDRDtJQUNFLGtCQXRCeUIsRUF1QjFCOztBQUNEO0lBQ0UsZ0JBeEJvQixFQXlCckI7O0FBaUJIO0VDekNFLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JEd0NtQjtFQ3ZDbkIsa0JBQWlCO0VBQ2pCLHdCRHNDK0I7RUF2Qy9CLG1CQVhxQjtFQW9EckIsa0JBQWlCO0VBQ2pCLHdCQUF1QjtFQUN2QixzQkF2RGdCLEVBeURqQjs7QUE1Q0M7SUFDRSxxQkFaeUIsRUFhMUI7O0FBQ0Q7SUFDRSw0QkFkMEIsRUFlM0I7O0FBQ0Q7SUFDRSx5QkFoQjZCLEVBaUI5Qjs7QUFDRDtJQUNFLHlCQWxCNkIsRUFtQjlCOztBQUNEO0lBQ0UseUJBcEJ3QixFQXFCekI7O0FBQ0Q7SUFDRSx5QkF0QnlCLEVBdUIxQjs7QUFDRDtJQUNFLHVCQXhCb0IsRUF5QnJCOztBQTBCSDtFQUNFLGVBQWM7RUFDZCxlQy9EaUQ7RURnRWpELG9CQUFtQjtFQUNuQiw2QkFBNEI7RUFDNUIsNEJBQTJCO0VBQzNCLGFBQVk7RUFyRFosdUJBWHFCLEVBa0V0Qjs7QUF0REM7SUFDRSx5QkFaeUIsRUFhMUI7O0FBQ0Q7SUFDRSxnQ0FkMEIsRUFlM0I7O0FBQ0Q7SUFDRSw2QkFoQjZCLEVBaUI5Qjs7QUFDRDtJQUNFLDZCQWxCNkIsRUFtQjlCOztBQUNEO0lBQ0UsNkJBcEJ3QixFQXFCekI7O0FBQ0Q7SUFDRSw2QkF0QnlCLEVBdUIxQjs7QUFDRDtJQUNFLDJCQXhCb0IsRUF5QnJCOztBQW9DSDtFQXpERSxZQVhxQixFQXNFdEI7O0FBMURDO0lBQ0UsY0FaeUIsRUFhMUI7O0FBQ0Q7SUFDRSxxQkFkMEIsRUFlM0I7O0FBQ0Q7SUFDRSxrQkFoQjZCLEVBaUI5Qjs7QUFDRDtJQUNFLGtCQWxCNkIsRUFtQjlCOztBQUNEO0lBQ0Usa0JBcEJ3QixFQXFCekI7O0FBQ0Q7SUFDRSxrQkF0QnlCLEVBdUIxQjs7QUFDRDtJQUNFLGdCQXhCb0IsRUF5QnJCOztBQXdDSDtFQUNFLGVDaEZhLEVEaUZkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbmFseXNpcy10b2tlbi9hbmFseXNpcy10b2tlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2NvbW1vbic7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgZmxleGVkKGNvbHVtbiwgc3RyZXRjaCk7XG4gIGZsZXgtZ3JvdzogMDtcbiAgbWFyZ2luOiAkbWFyZ2luLXhzO1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG5cbiRib3JkZXItd2lkdGg6IDFweDtcbiRjb2wta2luZC1kZWZhdWx0OiBncmV5O1xuJGNvbC1raW5kLXB1bmN0dWF0aW9uOiBzaWx2ZXI7XG4kY29sLWtpbmQtZW1wdHk6IGRhcmtzbGF0ZWJsdWU7XG4kY29sLWtpbmQtY29uanVuY3Rpb246IGRhcmtzYWxtb247XG4kY29sLWtpbmQtcHJlcG9zaXRpb246IGxpZ2h0Y29yYWw7XG4kY29sLWtpbmQtbnVtYmVyOiBwb3dkZXJibHVlO1xuJGNvbC1raW5kLXByb25vdW46IGFxdWFtYXJpbmU7XG4kY29sLWtpbmQtcGFydDogbGF2ZW5kZXI7XG5cblxuQG1peGluIGtpbmQtY29sb3IoJHByb3ApIHtcbiAgI3skcHJvcH06ICRjb2wta2luZC1kZWZhdWx0O1xuICAmLnB1bmN0IHtcbiAgICAjeyRwcm9wfTogJGNvbC1raW5kLXB1bmN0dWF0aW9uO1xuICB9XG4gICYuZW1wdHkge1xuICAgICN7JHByb3B9OiAkY29sLWtpbmQtZW1wdHk7XG4gIH1cbiAgJi5jb25qIHtcbiAgICAjeyRwcm9wfTogJGNvbC1raW5kLWNvbmp1bmN0aW9uO1xuICB9XG4gICYucHJlcCB7XG4gICAgI3skcHJvcH06ICRjb2wta2luZC1wcmVwb3NpdGlvbjtcbiAgfVxuICAmLm51bSB7XG4gICAgI3skcHJvcH06ICRjb2wta2luZC1udW1iZXI7XG4gIH1cbiAgJi5wcm9ub3VuIHtcbiAgICAjeyRwcm9wfTogJGNvbC1raW5kLXByb25vdW47XG4gIH1cbiAgJi5wYXJ0IHtcbiAgICAjeyRwcm9wfTogJGNvbC1raW5kLXBhcnQ7XG4gIH1cbn1cblxuXG4uaGVhZGVyIHtcbiAgQGluY2x1ZGUgZmxleGVkKHJvdywgZmxleC1lbmQpO1xuICBAaW5jbHVkZSBraW5kLWNvbG9yKGJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cblxuLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtaXgoJGNvbC1iYWNrZ3JvdW5kLWRrLCBibGFjaywgNzApO1xuICBAaW5jbHVkZSBraW5kLWNvbG9yKGNvbG9yKTtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXhlZChyb3csIGZsZXgtc3RhcnQpO1xuICBAaW5jbHVkZSBraW5kLWNvbG9yKGJvcmRlci1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogJGJvcmRlci13aWR0aDtcblxufVxuXG4udGFiYmVkIHtcbiAgcGFkZGluZzogMCAycHg7XG4gIGNvbG9yOiAkY29sLWJhY2tncm91bmRfZGs7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgZmxleC1ncm93OiAwO1xuICBAaW5jbHVkZSBraW5kLWNvbG9yKGJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uY29sb3JlZCB7XG4gIEBpbmNsdWRlIGtpbmQtY29sb3IoY29sb3IpO1xufVxuXG4uZmxleGlibGUge1xuICBmbGV4OiAxIDAgJG1hcmdpbi1zO1xufVxuIiwiJG1hcmdpbi14bDogNDhweDtcbiRtYXJnaW4tbDogMzZweDtcbiRtYXJnaW4tbTogMjRweDtcbiRtYXJnaW4tczogMTJweDtcbiRtYXJnaW4teHM6IDZweDtcblxuJGNvbC1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xuJGNvbC1iYWNrZ3JvdW5kLWRrOiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCBibGFjaywgODApO1xuJGNvbC1iYWNrZ3JvdW5kLWx0OiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCB3aGl0ZSwgODApO1xuXG4kdy1saW0tZG91YmxlOiAxMjAwcHg7XG4kdy1saW0td2lkZXI6IDE1MDBweDtcbiR3LXdvcmtzcGFjZS1uYXJyb3c6IDExMDBweDtcbiR3LXdvcmtzcGFjZS13aWRlOiAxNDAwcHg7XG4kaC13b3Jrc3BhY2Utc2luZ2xlOiAxNjAwcHg7XG4kaC13b3Jrc3BhY2UtZG91YmxlOiA4MDBweDtcblxuQG1peGluIGZsZXhlZCgkZGlyZWN0aW9uLCAkYWxpZ24pIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG59XG5cbkBtaXhpbiBhcmVhKCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sLWJhY2tncm91bmQtZGs7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2wtYmFja2dyb3VuZC1sdDtcbiAgcGFkZGluZzogJG1hcmdpbi1tO1xufVxuXG5AbWl4aW4gZml4ZWQtaGVpZ2h0KCRoZWlnaHQpIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleDogMCAwICRoZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gIG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/analysis-token/analysis-token.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/analysis-token/analysis-token.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalysisTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisTokenComponent", function() { return AnalysisTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lex */ "./dist/lex/fesm5/tourette-lex.js");
/* harmony import */ var _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/lex/src/lib/model/analysis-result */ "./projects/lex/src/lib/model/analysis-result.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalysisTokenComponent = /** @class */ (function () {
    function AnalysisTokenComponent() {
        this.cls = {};
    }
    AnalysisTokenComponent_1 = AnalysisTokenComponent;
    AnalysisTokenComponent.prototype.ngOnInit = function () {
        switch (this.token.kind) {
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_PUNCTUATION"]: {
                this.tooltip = (this.token.type === _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PUNCT_TYPE_END_OF_SENTENCE"]) ? "Konec věty" : "Čárka";
                this.cls.punct = true;
                this.details = (this.token.type === _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PUNCT_TYPE_END_OF_SENTENCE"]) ? 'kv' : null;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_EMPTY_LINE"]: {
                this.tooltip = "Prázdný řádek";
                this.cls.empty = true;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_CONJUNCTION"]: {
                this.tooltip = "Spojka";
                this.cls.conj = true;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_PREPOSITION"]: {
                this.tooltip = "P\u0159edlo\u017Eka, " + this.token.fall + ". p\u00E1d";
                this.cls.prep = true;
                this.details = "p:" + this.token.fall;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_NUMBER"]: {
                this.tooltip = "\u010C\u00EDslovka, " + AnalysisTokenComponent_1.numType2str(this.token.type) + ", " + AnalysisTokenComponent_1.gender2str(this.token.gender) + " ";
                this.cls.num = true;
                this.details = "t:" + this.token.type + "  r:" + this.token.gender;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_PRONOUN"]: {
                this.tooltip = "Z\u00E1jm\u00E9no, " + AnalysisTokenComponent_1.pronounType2str(this.token.type) + ", " + AnalysisTokenComponent_1.gender2str(this.token.gender) + ", " + AnalysisTokenComponent_1.fall2str(this.token.fall) + ", , " + AnalysisTokenComponent_1.amount2str(this.token.amount) + "  ";
                this.cls.pronoun = true;
                this.details = "t:" + this.token.type + "  r:" + this.token.gender + "  p:" + this.token.fall + "  \u010D:" + this.token.amount;
                break;
            }
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["TK_PART"]: {
                this.tooltip = "\u010C\u00E1stice";
                this.cls.part = true;
                break;
            }
            default: {
                this.tooltip = "Neznámé";
            }
        }
    };
    AnalysisTokenComponent.fall2str = function (f) {
        return f + '. pád';
    };
    AnalysisTokenComponent.amount2str = function (a) {
        switch (a) {
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["AMOUNT_SINGLE"]: return 'číslo jednotné';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["AMOUNT_MULTIPLE"]: return 'číslo množné';
            default: return 'číslo neznámé';
        }
    };
    AnalysisTokenComponent.numType2str = function (t) {
        switch (t) {
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["NUMBER_TYPE_HAFO"]: return 'hafo';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["NUMBER_TYPE_KND"]: return 'druhová';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["NUMBER_TYPE_ROW"]: return 'řadová';
            default: return 'základní';
        }
    };
    AnalysisTokenComponent.pronounType2str = function (t) {
        switch (t) {
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_PERSONAL"]: return 'osobní';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_POINTING"]: return 'ukazovací';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_QUESTION"]: return 'tázací';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_RELATION"]: return 'vztažné';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_OWNERSHIP"]: return 'přivlastňovací';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["PRONOUN_TYPE_NEGATIVE"]: return 'záporné';
            default: return 'neurčité';
        }
    };
    AnalysisTokenComponent.gender2str = function (g) {
        switch (g) {
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["GENDER_MALE"]: return 'rod mužský';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["GENDER_FEMALE"]: return 'rod ženský';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["GENDER_MIDDLE"]: return 'rod střední';
            case _projects_lex_src_lib_model_analysis_result__WEBPACK_IMPORTED_MODULE_2__["GENDER_FEMALE_MIDDLE"]: return 'rod ženský, nebo střední';
            default: return 'rod neznámý';
        }
    };
    var AnalysisTokenComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", lex__WEBPACK_IMPORTED_MODULE_1__["Token"])
    ], AnalysisTokenComponent.prototype, "token", void 0);
    AnalysisTokenComponent = AnalysisTokenComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis-token',
            template: __webpack_require__(/*! ./analysis-token.component.html */ "./src/app/components/analysis-token/analysis-token.component.html"),
            styles: [__webpack_require__(/*! ./analysis-token.component.scss */ "./src/app/components/analysis-token/analysis-token.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalysisTokenComponent);
    return AnalysisTokenComponent;
}());



/***/ }),

/***/ "./src/app/components/analysis/analysis.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/analysis/analysis.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\" *ngFor=\"let line of analysis.lines\">\n  <app-analysis-token *ngFor=\"let token of line.tokens\" [token]=\"token\"></app-analysis-token>\n  <!--<div *ngFor=\"let token of line.tokens\">{{token.text}}</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/analysis/analysis.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/analysis/analysis.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 36px;\n  flex-grow: 1;\n  background-color: #262626;\n  border: 1px solid #595959;\n  padding: 24px; }\n\n.line {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  flex-grow: 0;\n  justify-content: flex-start;\n  margin: 6px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9hcHAvY29tcG9uZW50cy9hbmFseXNpcy9hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9zdHlsZXMvX2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NGYTtFREdiLGFBQVk7RUNzQlosMEJBbkJpRDtFQW9CakQsMEJBbkJpRDtFQW9CakQsY0ExQmEsRURJZDs7QUFFRDtFQ1VFLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JEWG1CO0VDWW5CLGtCQUFpQjtFQUNqQixvQkRiMkI7RUFDM0IsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixjQUFvQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hbHlzaXMvYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdjb21tb24nO1xuXG46aG9zdCB7XG4gIHBhZGRpbmc6ICRtYXJnaW4tbDtcbiAgZmxleC1ncm93OiAxO1xuICBAaW5jbHVkZSBhcmVhKCk7XG59XG5cbi5saW5lIHtcbiAgQGluY2x1ZGUgZmxleGVkKHJvdywgY2VudGVyKTtcbiAgZmxleC1ncm93OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogJG1hcmdpbi14cyAwO1xufVxuIiwiJG1hcmdpbi14bDogNDhweDtcbiRtYXJnaW4tbDogMzZweDtcbiRtYXJnaW4tbTogMjRweDtcbiRtYXJnaW4tczogMTJweDtcbiRtYXJnaW4teHM6IDZweDtcblxuJGNvbC1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xuJGNvbC1iYWNrZ3JvdW5kLWRrOiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCBibGFjaywgODApO1xuJGNvbC1iYWNrZ3JvdW5kLWx0OiBtaXgoJGNvbC1iYWNrZ3JvdW5kLCB3aGl0ZSwgODApO1xuXG4kdy1saW0tZG91YmxlOiAxMjAwcHg7XG4kdy1saW0td2lkZXI6IDE1MDBweDtcbiR3LXdvcmtzcGFjZS1uYXJyb3c6IDExMDBweDtcbiR3LXdvcmtzcGFjZS13aWRlOiAxNDAwcHg7XG4kaC13b3Jrc3BhY2Utc2luZ2xlOiAxNjAwcHg7XG4kaC13b3Jrc3BhY2UtZG91YmxlOiA4MDBweDtcblxuQG1peGluIGZsZXhlZCgkZGlyZWN0aW9uLCAkYWxpZ24pIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG59XG5cbkBtaXhpbiBhcmVhKCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sLWJhY2tncm91bmQtZGs7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2wtYmFja2dyb3VuZC1sdDtcbiAgcGFkZGluZzogJG1hcmdpbi1tO1xufVxuXG5AbWl4aW4gZml4ZWQtaGVpZ2h0KCRoZWlnaHQpIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleDogMCAwICRoZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gIG1heC1oZWlnaHQ6ICRoZWlnaHQ7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/analysis/analysis.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/analysis/analysis.component.ts ***!
  \***********************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lex */ "./dist/lex/fesm5/tourette-lex.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalysisComponent = /** @class */ (function () {
    function AnalysisComponent() {
    }
    AnalysisComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", lex__WEBPACK_IMPORTED_MODULE_1__["AnalysisResult"])
    ], AnalysisComponent.prototype, "analysis", void 0);
    AnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis',
            template: __webpack_require__(/*! ./analysis.component.html */ "./src/app/components/analysis/analysis.component.html"),
            styles: [__webpack_require__(/*! ./analysis.component.scss */ "./src/app/components/analysis/analysis.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalysisComponent);
    return AnalysisComponent;
}());



/***/ }),

/***/ "./src/app/components/song-selector/song-selector.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/song-selector/song-selector.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-flat-button color=\"warn\" (click)=\"setSong(null)\">Vymazat</button>\n<button mat-flat-button *ngFor=\"let song of songs\" (click)=\"setSong(song)\">{{song.artist ? song.artist + ' - ' + song.title : song.title}}</button>\n"

/***/ }),

/***/ "./src/app/components/song-selector/song-selector.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/song-selector/song-selector.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-flow: row wrap; }\n\nbutton {\n  margin: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jb2RlL3BlcnNvbmFsL3RvdXJldHRlL3NyYy9hcHAvY29tcG9uZW50cy9zb25nLXNlbGVjdG9yL3Nvbmctc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCIvY29kZS9wZXJzb25hbC90b3VyZXR0ZS9zcmMvc3R5bGVzL19jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxZQ0phLEVES2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nvbmctc2VsZWN0b3Ivc29uZy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2NvbW1vbic7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAkbWFyZ2luLXhzXG59XG4iLCIkbWFyZ2luLXhsOiA0OHB4O1xuJG1hcmdpbi1sOiAzNnB4O1xuJG1hcmdpbi1tOiAyNHB4O1xuJG1hcmdpbi1zOiAxMnB4O1xuJG1hcmdpbi14czogNnB4O1xuXG4kY29sLWJhY2tncm91bmQ6ICMzMDMwMzA7XG4kY29sLWJhY2tncm91bmQtZGs6IG1peCgkY29sLWJhY2tncm91bmQsIGJsYWNrLCA4MCk7XG4kY29sLWJhY2tncm91bmQtbHQ6IG1peCgkY29sLWJhY2tncm91bmQsIHdoaXRlLCA4MCk7XG5cbiR3LWxpbS1kb3VibGU6IDEyMDBweDtcbiR3LWxpbS13aWRlcjogMTUwMHB4O1xuJHctd29ya3NwYWNlLW5hcnJvdzogMTEwMHB4O1xuJHctd29ya3NwYWNlLXdpZGU6IDE0MDBweDtcbiRoLXdvcmtzcGFjZS1zaW5nbGU6IDE2MDBweDtcbiRoLXdvcmtzcGFjZS1kb3VibGU6IDgwMHB4O1xuXG5AbWl4aW4gZmxleGVkKCRkaXJlY3Rpb24sICRhbGlnbikge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbn1cblxuQG1peGluIGFyZWEoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2wtYmFja2dyb3VuZC1kaztcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbC1iYWNrZ3JvdW5kLWx0O1xuICBwYWRkaW5nOiAkbWFyZ2luLW07XG59XG5cbkBtaXhpbiBmaXhlZC1oZWlnaHQoJGhlaWdodCkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmbGV4OiAwIDAgJGhlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgbWF4LWhlaWdodDogJGhlaWdodDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/song-selector/song-selector.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/song-selector/song-selector.component.ts ***!
  \*********************************************************************/
/*! exports provided: SongSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongSelectorComponent", function() { return SongSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.tokens */ "./src/app/app.tokens.ts");
/* harmony import */ var _d78ng_file_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @d78ng/file-loader */ "./node_modules/@d78ng/file-loader/fesm5/d78ng-file-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SongSelectorComponent = /** @class */ (function () {
    function SongSelectorComponent(songFile) {
        this.onSongChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.songs = songFile.data.songs;
    }
    SongSelectorComponent.prototype.setSong = function (song) {
        if (song) {
            this.onSongChanged.emit(song.lyrics);
        }
        else {
            this.onSongChanged.emit('');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SongSelectorComponent.prototype, "onSongChanged", void 0);
    SongSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-selector',
            template: __webpack_require__(/*! ./song-selector.component.html */ "./src/app/components/song-selector/song-selector.component.html"),
            styles: [__webpack_require__(/*! ./song-selector.component.scss */ "./src/app/components/song-selector/song-selector.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_tokens__WEBPACK_IMPORTED_MODULE_1__["DATA_SONGS"])),
        __metadata("design:paramtypes", [_d78ng_file_loader__WEBPACK_IMPORTED_MODULE_2__["FileLoaderService"]])
    ], SongSelectorComponent);
    return SongSelectorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /code/personal/tourette/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map