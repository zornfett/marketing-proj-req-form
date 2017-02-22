$(function() {
	// calendars!
	$('#dateReq, #dateApproved, #deadline1, #deadline2, #deadline3').datetimepicker({
		format: 'MM/DD/YYYY'
	});
	// validation!
	$('#marketing-proj-req-form').validator();
});

// get date/time for the screencapt filename
var timeInMs = Date.now();
if (!Date.now) {
	Date.now = function now() {
		return new Date().getTime();
	};
}
console.log(timeInMs);

$('.btn').on('click', function(e){
	// only produce the PNG if the FORM is valid
	if (!$(this).hasClass("disabled")) {
		e.preventDefault();
		$('#capture-region').addClass("so-valid");

		// retitle the page for capture
		var newTitle = $('#projTitle').val();
		$('header h2').html(newTitle + "<br /><span>(refresh the page to enter a new project)</span>");
		html2canvas(document.body, {
			onrendered: function(canvas) {

				// $('#screengrab').append(canvas); // put the png in the layout for eval

				// output canvas to a file
				$('#screengrabutt').attr('href', canvas.toDataURL("image/png"));
				$('#screengrabutt').attr('download','projreq-'+timeInMs+'.png');
				// force the user to download it!
				$('#screengrabutt')[0].click();
			}
		});
	}
});
