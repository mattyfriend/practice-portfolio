// JavaScript Document

window.onscroll = function() {
	scrollFunction()
	scrollBtnAppear()
};

//Adjusts the value of the progress bar

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollBar').style.width = scrolled + "%";
}

//jQuery to show tooltip

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();   
});

//Button to scroll to the top

function scrollToTop() {
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollToTop);
        window.scrollTo (0,currentScroll - (currentScroll/20));
	}
}

//Make the scrollToTop button appear

function scrollBtnAppear() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

//Settings icon animate - adds the class of the spinning cog

$("#settings-animate").hover(function () {
    $(this).toggleClass("fa-spin");
});





