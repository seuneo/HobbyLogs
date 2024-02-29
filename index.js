//when click yes number increase
//when no dialog box disappear

var dayCount = 0;

$(".yes").click(function(e){
    $("h2").text("DAY " + (dayCount++));
});

$(".no").click(function(e){
    $(".dialogbox").css("display", "none");
    $(".log").css("display", "block");
});

$(".log").click(function(e){
    $(".dialogbox").css("display", "block");
    $(".log").css("display", "none");
});


var hobby = $(".hobbytitle");
var homePage = $(".main");
var nextPage = $(".nextpage");
var hobbies = $(".hobbies");

$(".next").click(function(e){
    var h = $("input").val();

    hobby.text(h);
    homePage.attr('id', 'hide');
    nextPage.removeAttr("id");
    hobbies.append("<p>" + h + " <span>" + dayCount + "</span></p>");
    
});

$(".back").click(function(e){

    nextPage.attr('id', 'hide');
    homePage.removeAttr("id");
    hobbies.append("<p>" + h + " <span>" + dayCount + "</span></p>");
    
});


//make database? of uhh idk, use ejs? load hobbies so upload demo ver or just deploy it lol
//use react? 
//suggest feautures, set goal.
//data visualization!
//add a calendar
//activity api for ideas for hobbies!! or make your own api perf
//ooo add more like calendar stuff and random data calculations
//o maybe a timer

//limitations, whether youve logged for that day
//have choices of the time

//features
//personalization like welcome, name




