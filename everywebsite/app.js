var welcomeScreen = document.getElementById("welcomeScreen")
var bottomBars = document.getElementById("bottomBars") // Allow and block button
var notificationScreen = document.getElementById("notification")
var notificationLocation = document.getElementById('notificationLocation')
var loadingIcon = document.getElementById("loadingIcon")
var newsletter = document.getElementById('newsletter')
var ageCheck = document.getElementById('ageCheck')
var looksLike = document.getElementById('looksLike')
var liveChat = document.getElementById('liveChat')
var privacy = document.getElementById('privacy')
var robotCheck = document.getElementById('robotCheck')

$("#enterButton").click(function() { // On welcome button click
  $("#enterButton").animate({ // enter button animates out
    marginTop: "600px",
    opacity: 0,
    display: "none"
  }, 1500, 'easeOutQuint');
  $("#welcome").animate({ //welcome animates out
    marginTop: "-600px",
    opacity: 0,
    display: "none"
  }, 1000, 'easeOutCubic');
  setTimeout(function() { // removes welcomeScreen
    welcomeScreen.remove();
  }, 1100);
  $("#notification").animate({ // animates notifcation in
    top: "0",
    opacity: .8
  }, 1700, 'easeOutQuint');
  $("#loadingIcon").animate({ // animates loadingIcon in
    opacity: 1,
    zindex: 1
  }, 2000, 'easeOutQuint');

});

$("#allow").click(function() { // On allow button click
  $("#notification").animate({ // bottomBars animates out
    top: "-500px",
    opacity: 0,
    display: "none",
  }, 1600, 'easeOutQuint');
  setTimeout(function() { // removes notificationLocation
    $("#sendNote").animate({ // sedNote animates in
      opacity: "1",
    }, 1500, 'easeOutQuint');
  }, 1100);
  setTimeout(function() {
    $("#sendNote").animate({ // sendNote animates out
      opacity: "0",
    }, 1500, 'easeOutQuint');
  }, 1100);
  setTimeout(function() { // removes notification
    notificationScreen.remove();
    $("#notificationLocation").animate({ // notificationLocation animates in
      top: "0px",
    }, 2000, 'easeOutQuint');
  }, 2001);
});

$("#block").click(function() { // On block button click
  $("#notification").animate({ // notification animates out
    top: "-500px",
  }, 2000, 'easeOutQuint');
  setTimeout(function() { // removes notification and changes text
    notificationScreen.remove();
    $("#notificationLocation").animate({ // notificationLocation animates in
      top: "0px",
    }, 2000, 'easeOutQuint');
  }, 1500);
});

$("#allowLocation").click(function() { // On allowLocation button click
  $("#notificationLocation").animate({ // bottomBarsLocation animates out
    top: "-500px",
    opacity: 0,
    display: "none"
  }, 1600, 'easeOutQuint');
  setTimeout(function() { // removes notificationLocation
    $("#niceHouse").animate({ // sedNote animates in
      opacity: "1",
    }, 1500, 'easeOutQuint');
  }, 1100);
  setTimeout(function() {
    $("#niceHouse").animate({ // sendNote animates out
      opacity: "0",
    }, 1500, 'easeOutQuint');
  }, 1100);
  $("#loadingIcon").animate({ // animates loadingIcon out
    opacity: 0,
    zindex: -1
  }, 2000, 'easeOutQuint');
  $("#ageCheck").animate({ // ageCheck animates in
    right: "0"
  }, 2000, 'easeOutQuint');
  setTimeout(function() { //  privacy after 2000ms
    $("#privacy").animate({ // privacy animates in
      bottom: "0px"
    }, 2000, 'easeOutQuint');
  }, 2000);
  loadingIcon.remove();
});

$("#blockLocation").click(function() { // On blockLocation button click
  $("#notificationLocation").animate({ // notification animates out
    top: "-500px"
  }, 2500, 'easeOutQuint');
  setTimeout(function() { // removes notificationLocation
    $("#markZuck").animate({ // markZuck animates in
      opacity: "1",
    }, 1500, 'easeOutQuint');
  }, 1100);
  setTimeout(function() {
    $("#markZuck").animate({ // markZuck animates out
      opacity: "0",
    }, 1500, 'easeOutQuint');
  }, 1100);
  $("#loadingIcon").animate({ // animates loadingIcon out
    opacity: 0,
    zindex: -1
  }, 2000, 'easeOutQuint');
  $("#ageCheck").animate({ // ageCheck animates in
    right: "0"
  }, 2000, 'easeOutQuint');
  setTimeout(function() { //  privacy after 2000ms
    $("#privacy").animate({ // privacy animates in
      bottom: "0px"
    }, 2000, 'easeOutQuint');
  }, 2000);
  loadingIcon.remove();
});

$(".answerButton").click(function() { // On answerButton button click
  setTimeout(function() { // removes notificationLocation
    markZuck.remove();
    sendNote.remove();
    niceHouse.remove();
    notificationLocation.remove();
  }, 1100);
  $("#ageCheck").animate({ // ageCheck animates out
    right: "-1500px"
  }, 1100, 'easeOutQuint');
  setTimeout(function() {
    newsletter.style.zIndex = "1";
    privacy.style.zIndex = "2";
    ageCheck.remove();
    $("#newsletter").animate({ // newsletter animates in
      opacity: "1",
      marginTop: '100px'
    }, 2100, 'easeOutQuint');
  }, 1300);
});

$("#iAgree").click(function() { // On iAgree button click
  $("#privacy").animate({ // privacy animates out
    opacity: "0"
  }, 1100, 'easeOutQuint');
  setTimeout(function() {
    privacy.remove();
  }, 2100);
});

$("#xButton").click(function() { // On xButton button click
  $("#newsletter").animate({ // newletter animates out
    top: "-1500px"
  }, 1500, 'easeOutQuint');
  $("#liveChat").animate({ // liveChat animates in
    marginTop: "-20vh",
    opacity: "1"
  }, 2100, 'easeOutBounce');
  $("#privacy").animate({ // privacy animates in
    bottom: "-500px",
    opacity: "1"
  }, 2100, 'easeOutQuint');
  setTimeout(function() {
    looksLike.style.zIndex = "2";
    $("#looksLike").animate({ // looksLike animates in
      opacity: "1"
    }, 2100, 'easeOutQuint');
  }, 1700);
  setTimeout(function() {
    privacy.remove();
  }, 2100);
});

$("#subscribeButton").click(function() { // On xButton button click
  $("#newsletter").animate({ // newletter animates out
    top: "-1500px"
  }, 1500, 'easeOutQuint');
  $("#liveChat").animate({ // liveChat animates in
    marginTop: "-20vh",
    opacity: "1"
  }, 2100, 'easeOutBounce');
  $("#privacy").animate({ // privacy animates in
    bottom: "-500px",
    opacity: "1"
  }, 2100, 'easeOutQuint');
  setTimeout(function() {
    looksLike.style.zIndex = "2";
    $("#looksLike").animate({ // looksLike animates in
      opacity: "1"
    }, 2100, 'easeOutQuint');
  }, 1700);
  setTimeout(function() {
    privacy.remove();
  }, 2100);
});

$("#iUnderstand").click(function() { // On iUnderstand button click
  $("#looksLike").animate({ // lookslike animates out
    opacity: "0",
    zIndex: "-1"
  }, 950, 'easeOutQuint');
  setTimeout(function() {
    $("#robotCheck").animate({ // robotCheck animates in
      opacity: "1",
      width: "350px"
    }, 500, 'easeOutQuint');
  }, 1100);
});

$("#captchaBox").click(function() { // On captchaBox button click
  ageCheck.remove();
  looksLike.remove();
  liveChat.remove();
  privacy.remove();
  robotCheck.remove();
  newsletter.remove();
  $("#crash").animate({ // lookslike animates out
    opacity: "1",
    marginTop: "20vh"
  }, 1, 'easeOutQuint');
});

$("#startChatButton").click(function() { // On captchaBox button click
  ageCheck.remove();
  looksLike.remove();
  liveChat.remove();
  robotCheck.remove();
  newsletter.remove();
  $("#crash").animate({ // Crash animates in
    opacity: "1",
    marginTop: "40vh"
  }, 1, 'easeOutQuint');
});