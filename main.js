/*
* For accented characters possibly needed in the future visit http://www.javascripter.net/faq/accentedcharacters.htm 
*/
console.log('Loaded Content Script...');

function getContent() {
    var template, 
    	contentsSize = contents.length, 
    	seed = Math.floor(Math.random() * contentsSize);
    var pronunciation = contents[seed].mex.py.replace(/-/g, '\u2022'); // g is for global (all hyphens); \u2022 is for bullet point
    template = '<section class="card content" id="' + 
    			contents[seed].img + '"><span class="' + 
    			contents[seed].tag + 
    			'"></span><div class="img-wrapper"><div class="' + 
    			contents[seed].img + 
    			'-img"></div></div><div class=l-box><h1><span id=hiragana>' + 
    			contents[seed].mex.wd + "</span> | <span id=meaning>" + 
    			contents[seed].mean + 
    			"</span></h1><p id=romaji class=show>" + 
    			pronunciation + 
    			"</p><p class=kanji></p></section>";
	$(document).ready(function(){
		addImageCSS(seed);
	});
    return template;
}

function addImageCSS(seed) {
	let imageName = contents[seed].img;
	let imageClassName = contents[seed].img + "-img";
	let imageNameURL = "../images/" + imageName + ".jpeg";
	$("." + imageClassName).css({"background": "url("+imageNameURL+") no-repeat center center",
						"-webkit-background-size": "contain",
					    "-moz-background-size": "contain",
					    "background-size": "contain",
					    "display": "block",
					    "height": "510px", // replace these with the height and margin below and the image will fit to the most it can and move left aligned
					    "width": "450px",
					    // "height": "350px",
					    // "margin": "2em",
					    "position": "relative"
					});

}

var setting = document.getElementById("setting-container");
document.querySelector("#setting").onclick = function() {
    setting.show(), setting.open && (document.querySelector("#container").onclick = function() { setting.close()})
}, document.querySelector("#close-setting").onclick = function() {
    setting.close()
};

var contents = [{
        img: "water",
        mean: "water",
        mex: {
            wd: "agua",
            py: "ah-gwa"
        },
        id: "399"
    }, {
        img: "fire",
        mean: "fire",
        mex: {
            wd: "fuego",
            py: "foo-weh-go"
        },
        id: ""
    }, {
        img: "soccer",
        mean: "soccer",
        mex: {
            wd: "fútbol",
            py: "foot-bowl"
        },
        id: "531"
    }, {
        img: "goodmorning",
        mean: "goodmorning",
        mex: {
            wd: "buenos d&iacuteas",
            py: "boo-eh-nos-di-ahs"
        },
        id: ""
    }, {
        img: "horses",
        mean: "horses",
        mex: {
            wd: "caballos",
            py: "ca-bah-yohs"
        },
        id: "199"
    }, {
        img: "horses2",
        mean: "horses",
        mex: {
            wd: "caballos",
            py: "ca-bah-yohs"
        },
        id: ""
    }, {
        img: "car",
        mean: "car",
        mex: {
            wd: "coche",
            py: "ko-cheh"
        },
        id: "431"
    }, {
        img: "car2",
        mean: "car",
        mex: {
            wd: "coche",
            py: "ko-cheh"
        },
        id: ""
    }, {
        img: "sun",
        mean: "sun",
        mex: {
            wd: "sol",
            py: "sol"
        },
        id: "331"
    }, {
        img: "stars",
        mean: "stars",
        mex: {
            wd: "estrellas",
            py: "es-tre-yas"
        },
        id: ""
    }, {
        img: "happy",
        mean: "happy",
        mex: {
            wd: "contento",
            py: "con-ten-to"
        },
        id: "99"
    }, {
        img: "sea",
        mean: "sea",
        mex: {
            wd: "mar",
            py: "mar"
        },
        id: ""
    }, {
        img: "mountains",
        mean: "mountains",
        mex: {
            wd: "Monta&ntildea",
            py: "moan-tā-neas"
        },
        id: "131"
    }, {
        img: "moon",
        mean: "moon",
        mex: {
            wd: "luna",
            py: "lu-na"
        },
        id: ""
    }];

//contents = kata.concat(hira);

/* localStorage stuff */
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("contents", contents);
	console.log(contents);
} else {
    // Sorry! No Web Storage support..
    console.log("Sorry! No Web Storage support..");
}

document.getElementById("cardContainer").innerHTML = getContent();