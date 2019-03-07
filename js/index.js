if (window.screen.width > 830) {
	document.write("<a id=\"carouselBtn\" class =\"btn btn-success text-warning\" href=\"#focal\">Learn More</a>")
	// document.getElementById(" ").outerHTML = "What's Free?";
}

if (window.screen.width > 840) {
	document.write("<a id=\"carouselBtn2\" class =\"btn  text-light\" href=\"about.html\">Follow Us</a>")
}

if (window.screen.width < 830) {
		document.getElementById('focal').outerHTML = "<aside id=\"focal\" class=\"container-fluid\"><h6 class=\"display-4\">Focal Points</h6><div class=\"text-monospace my-auto\"><i class=\"mx-auto col-sm-6 fas fa-user-tie fa-5x\"></i>Entrepreneurship</div><div class=\"text-monospace my-auto\"><i class=\"mx-auto col-sm-6 fas fa-user-graduate fa-5x\"></i>Education</div><div class=\"text-monospace my-auto\"><i class=\"mx-auto col-sm-6 fas fa-handshake fa-5x\"></i>Peace Building</div></aside>";
	
}
