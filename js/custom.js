$(function() {
	// calendars yay!
	$('#dateReq, #dateApproved, #deadline1, #deadline2, #deadline3').datetimepicker({
		format: 'MM/DD/YYYY'
	});
	// validation woo!
	$('#marketing-proj-req-form').validator();
});
// get date/time for the screencapt filename
var dt  = new Date();
var time = dt.getFullYear() + (dt.getMonth()+1) + dt.getMonth() + dt.getDate() + dt.getHours() + dt.getMinutes();
console.log(time);

// var now = moment('YY-MM-DD-HH-MM');
// console.log(now);

// new Date(dateString);

// um, create a screencapture on SUBMIT
$('.btn').on('click', function(e){
	e.preventDefault(); // REMOVE BEFORE DEPLOY!
	// retitle the page for capture
	var newTitle = $('#projTitle').val();
	$('header h2').html(newTitle);
	html2canvas(document.body, {
		onrendered: function(canvas) {
			$('#screengrab').append(canvas);
			// output canvas to a file
			$('#screengrabutt').attr('href', canvas.toDataURL("image/png"));
			$('#screengrabutt').attr('download','projreq-'+time+'.png');
			// force the user to download it!
			$('#screengrabutt')[0].click();
		}
	});



	// console.log("screengrab!");
});