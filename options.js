// document.getElementById("click").addEventListener('click',function(){
// 	var recognition = new webkitSpeechRecognition();

//     recognition.continuous = true;
//     recognition.interimResults = true;
// 	console.log(recognition);
// 	recognition.onerror = function(event){
// 		console.log(event);
// 	}

//     var start_timestamp = 0;

//     recognition.onstart = function() {
//       // Working
//       // showInfo('working');
//       console.log("WOkring");
//       recognition.stop();
//     }

//     recognition.onerror = function(event) {
//       if (event.error == 'no-speech') {
//         // showInfo('info_no_speech');
//       }
//       if (event.error == 'audio-capture') {
//         // showInfo('info_no_microphone');
//       }
//       if (event.error == 'not-allowed') {
//         // showInfo('info_blocked');
//       }
//     }

//     recognition.onend = function() {}

//     recognition.onresult = function(event) {}

//     recognition.lang = 'en-US';
//     recognition.start();
// });

// document.getElementById("disable").addEventListener('click',function(){
//   console.log("Testing");
//   document.getElementById("disable").disable = true;
// })

// $(document).ready(function(){

// var current_fs, next_fs, previous_fs;

// // No BACK button on first screen
// if($(".show").hasClass("first-screen")) {
//   $(".prev").css({ 'display' : 'none' });
// }

// // Next button
// $(".next-button").click(function(){

//   current_fs = $(this).parent().parent();
//   next_fs = $(this).parent().parent().next();

//   $(".prev").css({ 'display' : 'block' });

//   $(current_fs).removeClass("show");
//   $(next_fs).addClass("show");

//   $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

//   current_fs.animate({}, {
//   step: function() {

//   current_fs.css({
//   'display': 'none',
//   'position': 'relative'
//   });

//   next_fs.css({
//   'display': 'block'
//   });
//   }
//   });
// });
// -
// // Previous button
// $(".prev").click(function(){

// current_fs = $(".show");
// previous_fs = $(".show").prev();

// $(current_fs).removeClass("show");
// $(previous_fs).addClass("show");

// $(".prev").css({ 'display' : 'block' });

// if($(".show").hasClass("first-screen")) {
// $(".prev").css({ 'display' : 'none' });
// }

// $("#progressbar li").eq($(".card2").index(current_fs)).removeClass("active");

// current_fs.animate({}, {
// step: function() {

// current_fs.css({
// 'display': 'none',
// 'position': 'relative'
// });

// previous_fs.css({
// 'display': 'block'
// });
// }
// });
// });

// });

// $(document).ready(function(){
//   var current,next;
//   $(".next").click(function(){
//       current = $(this).parent();
//       console.log(current)
//       next = $(this).parent().next();
//       console.log(next);
//       $(current).removeClass("show");
//       $(next).addClass("show");
//       console.log(next);
//   });
// });

setTimeout(function(){confetti.start()},1000);

setTimeout(function(){confetti.stop()},3000);

$(".close").click(function(){
	$(".trailer").removeClass("active");
	$("#video").attr('src','');
});
	
$(".clickVideo").click(function(){
	$("#video").attr('src','https://www.youtube.com/embed/ykwDbN6twdg');			
	$(".trailer").addClass("active");
});