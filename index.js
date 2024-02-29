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


//to do
//switch to react 
//personalization with welcome, name
//calendar & time
//data visualization!
//hobby suggestions




