var gameDifficulty;
var myTimer;
var focusTimer;

// 80
var para1 = 'the and that plane have for not with free mind strong warm sleep book mark bird soon body dog write way cause cut you this but his from they say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look should only come its';
// var para1 = 'the and that';

// 71
var para2 = 'vulnerable unequivocal trajectory threshold jurisdiction phenomenon gregarious facilitate fiduciary eventually environment abdicate aberration abstain mountain machine contain develop possible schemer discipline medicate refract thereafter letter often money simple rebrace sentence interpolate instinct drabness underwood stinging blooming concord outrang wholesale rumpless dimness revival empathy rundown indulgence inspirit lovey verdict branch copywriter measure produce nothing question complete though enough unfinished country between remember interest people thousand language morning laceration perhaps listen picture';

// 65
var para3 = 'hippopotomonstrosesquipedaliophobia xenophobia transformation jurisprudence kaleidoscope oliguretic infrastructure nonlepidopterous velvetiness magnetometry unparceling economist uncollegiate petitory unmaniacal aluminosity unpacified preadherence reconstructiveness uncurableness inconsiderate premaking criminatory uncontrastable disassociated chlorellaceous non-metalliferous computerizing alliterativeness fibrinogenous depopulate caryatides macroclimatology hypnotisable impervious untouchability unbiddable triradiate-lodestone reconverged calciphilic kleptomania advertising libellant vulgariser nonwavering alienator originate microcline boutonniere tectonic overflatten untravestied obliging subinfeudating incompatibly supercalifragilisticexpialidocious agglutinability infinitize nomination aerodyne capsulized eruption cellophane';

var wordsPerMinute;
var totalChars;
var wordsList;
var wordCount;
var errorCount;
var correctWords;
var totalPossibleCorrectWords;
var hasBeenTypedBefore;

$(document).ready(function() {
    showMenus();
    createListeners();
    document.getElementById('typeInput').onkeydown = function(event) {
        if (event.keyCode == 27) {
            endGame();
        } else {
            verifyInput();
        }
    }
});

function verifyInput() {
    var keyAudio = new Audio('click.mp3');
    keyAudio.play();

    var typedWords = document.getElementById('typeInput').value;
    typedWord = typedWords.replace(' ', '')
    if (event.keyCode == 32 || event.keyCode == 13) {
        if (typedWord === wordsList[wordCount]) {
            wordCount += 1;
            hasBeenTypedBefore = false;
        } else {
            document.getElementById('typeInput').style.color = 'red';
            errorCount += 1;
            if (!hasBeenTypedBefore) {
                hasBeenTypedBefore = true;
                correctWords -= 1;
            }
            $("#currentWord").effect("shake");
        }

        document.getElementById('typeInput').style.color = 'black';
        document.getElementById('typeInput').value = "";
        document.getElementById("currentWord").innerHTML = wordsList[wordCount];

        // console.log('Count: ' + wordCount);

        if (wordCount >= wordsList.length) {
            endGame();
        } else {

            if (wordsList[wordCount + 2] != null) {
                document.getElementById("nextWord").innerHTML = wordsList[wordCount + 1];
                document.getElementById("laterWord").innerHTML = wordsList[wordCount + 2];
            } else if (wordsList[wordCount + 1] != null) {
                document.getElementById("nextWord").innerHTML = wordsList[wordCount + 1];
                document.getElementById("laterWord").innerHTML = '';
            } else if (wordsList[wordCount]) {
                document.getElementById("nextWord").innerHTML = '';
                document.getElementById("laterWord").innerHTML = '';
            }
        }
    }
}

function getWordsPerMinute() {
    totalChars = 0;
    for (var c = 0; c < correctWords; c++) {
        var chars = wordsList[c].length;
        totalChars += (chars + 1);
    }

    if (correctWords === 0) {
        console.log('Words Per Minute: 0');
    } else {
        var totalMinutes = gameTimer / 60;
        wordsPerMinute = ((totalChars / 5) / totalMinutes);

    }
}

function showMenus() {

    $("#startBtn").hide();
    $("#replayBtn").hide();
    $("#restartBtn").hide();
    $("#typeInput").hide();
    $("#wordList").hide();

    setTimeout(function() {
        var appTitle = 'EAZY_KEYZ'
        var appTitleLetters = jQuery.map(appTitle.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });

        var appTitleDest = $('#appTitle');

        var c = 0;
        var i = setInterval(function() {
            appTitleLetters[c].appendTo(appTitleDest).hide().show();
            c += 1;
            if (c >= appTitleLetters.length) clearInterval(i);
        }, 50);
    }, 0);
    setTimeout(function() {
        var difTitle = "Choose a difficulty";
        var difTitleLetters = jQuery.map(difTitle.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });

        var difTitleDest = $('#difTitle');

        var c = 0;
        var i = setInterval(function() {
            difTitleLetters[c].appendTo(difTitleDest).hide().show();
            c += 1;
            if (c >= difTitleLetters.length) clearInterval(i);
        }, 50);
    }, 500);
    setTimeout(function() {
        var difTitle = "Easy";
        var difTitleLetters = jQuery.map(difTitle.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });

        var difTitleDest = $('#easy');

        var c = 0;
        var i = setInterval(function() {
            difTitleLetters[c].appendTo(difTitleDest).hide().show();
            c += 1;
            if (c >= difTitleLetters.length) clearInterval(i);
        }, 110);
    }, 500);
    setTimeout(function() {
        var difTitle = "Medium";
        var difTitleLetters = jQuery.map(difTitle.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });

        var difTitleDest = $('#medium');

        var c = 0;
        var i = setInterval(function() {
            difTitleLetters[c].appendTo(difTitleDest).hide().show();
            c += 1;
            if (c >= difTitleLetters.length) clearInterval(i);
        }, 115);
    }, 500);
    setTimeout(function() {
        var difTitle = "Hard";
        var difTitleLetters = jQuery.map(difTitle.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });
        var difTitleDest = $('#hard');

        var c = 0;
        var i = setInterval(function() {
            difTitleLetters[c].appendTo(difTitleDest).hide().show();
            c += 1;
            if (c >= difTitleLetters.length) clearInterval(i);
        }, 130);
    }, 500);
    setTimeout(function() {
        $("#startBtn").show();
        document.getElementById('startBtn').disabled = true;
    }, 1500);
}

function showGame() {
    $("#difList").hide();
    $("#replayBtn").hide();
    $("#typeInput").show();
    $("#wordList").show();

    var myNode = document.getElementById('wordList');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    $("#wordList").append("<li class='laterWord' id='laterWord'>" + wordsList[wordCount + 2] + "</li>");
    $("#wordList").append("<li class='nextWord' id='nextWord'>" + wordsList[wordCount + 1] + "</li>");
    $("#wordList").append("<li class='currentWord' id='currentWord'>" + wordsList[wordCount] + "</li>");

    if (gameDifficulty == 'easy') {
        $(".currentWord").css('color', "#0091DC");
        $(".typeInput").css('border-bottom', "1px dashed #0091DC");
    } else if (gameDifficulty == 'medium') {
        $(".currentWord").css('color', "#FF871C");
        $(".typeInput").css('border-bottom', "1px dashed #FF871C");
    } else {
        $(".currentWord").css('color', "#9600E3");
        $(".typeInput").css('border-bottom', "1px dashed #9600E3");
    }

    resetGame();
}

function endGame() {
    $("#wordList").hide();
    $("#typeInput").hide();

    $("#replayBtn").show();
    $("#restartBtn").show();

    console.log("Total Words: " + wordsList.length)
    console.log("Time: " + gameTimer + " seconds");
    console.log("Words Typed Correctly: " + (correctWords))
    console.log("Words Typed Incorrectly: " + (wordsList.length - correctWords));
    console.log("Typos: " + errorCount);
    console.log("Total chars from correctly typed words: " + totalChars);
    console.log('Words Per Minute: ' + Math.round(wordsPerMinute));

    clearInterval(myTimer);
    clearInterval(focusTimer);
    getWordsPerMinute();
}

function createListeners() {
    $("#easy").on("click", function() {
        gameDifficulty = 'easy';
        $("#easy").css('color', '#0091DC');
        $("#medium").css('color', '#616161');
        $("#hard").css('color', '#616161');
        document.getElementById('startBtn').disabled = false;

        console.log(gameDifficulty);
        wordsList = para1.split(' ');

        $(".nav").css('background-color', '#0091DC');
        $(".startBtn").css('background-color', "#0091DC");
    });
    $("#medium").on("click", function() {
        gameDifficulty = 'medium';
        $("#easy").css('color', '#616161');
        $("#medium").css('color', '#FF871C');
        $("#hard").css('color', '#616161');
        document.getElementById('startBtn').disabled = false;

        console.log(gameDifficulty);
        wordsList = para2.split(' ');

        $(".nav").css('background-color', '#FF871C');
        $(".startBtn").css('background-color', "#FF871C");
    });
    $("#hard").on("click", function() {
        $("#easy").css('color', '#616161');
        $("#medium").css('color', '#616161');
        $("#hard").css('color', '#9600E3');
        document.getElementById('startBtn').disabled = false;

        gameDifficulty = 'hard';
        console.log(gameDifficulty);
        wordsList = para3.split(' ');

        $(".nav").css('background-color', '#9600E3');
        $(".startBtn").css('background-color', "#9600E3");
    });
    $("#startBtn").on("click", function() {
        showGame();
        // console.log(wordsList);
    });
    $("#replayBtn").on("click", function() {
        // console.log(wordsList);
        resetGame();
    });

    $("#restartBtn").on("click", function() {
        $("#replayBtn").hide();
        $("#restartBtn").hide();
        $("#typeInput").hide();
        $("#wordList").hide();
        $("#difList").show();
    });
}

var gameTimer = 0;

function resetGame() {
    $("#difList").hide();
    $("#replayBtn").hide();
    $("#typeInput").show();
    $("#wordList").show();
    $("#restartBtn").hide();

    wordCount = 0;
    gameTimer = 0;
    errorCount = 0;
    correctWords = wordsList.length;
    hasBeenTypedBefore = false;
    sortjs.randomize(wordsList);

    document.getElementById("currentWord").innerHTML = wordsList[wordCount];
    document.getElementById("nextWord").innerHTML = wordsList[wordCount + 1];
    document.getElementById("laterWord").innerHTML = wordsList[wordCount + 2];

    myTimer = setInterval(countTimer, 1000)
    document.getElementById('typeInput').focus();
    focusTimer = setInterval(reFocus, 10);
}

function countTimer() {
    gameTimer += 1;
    // console.log(gameTimer + ' sec');
}

function reFocus() {
    document.getElementById('typeInput').focus();
}
