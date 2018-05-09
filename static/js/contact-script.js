$(document).ready(function(){
	$("#contact-submit").on('click', function(event) {
		if($("#contact-name").val() != "" && $("#contact-email").val() != "" && $("#contact-subject").val() != "" && $("#contact-msg").val() != "") {
			$("#msg-status").text("Sending Message...").show();
			$.ajax({
				data : {
					cName:  $("#contact-name").val(),
					cEmail : $("#contact-email").val(),
					cSubject : $("#contact-subject").val(),
					cMsg : $("#contact-msg").val()
				},
				type : "POST",
				url : "/email"
			})
			.done(function(data) {
				$("#msg-status").text(data.Status).show();
			});
		} else {
			$("#msg-status").text("Please fill in all inputs.").show();
		}
		event.preventDefault();
	});
});

