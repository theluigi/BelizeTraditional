$(document).ready(function() {
  $('#image_container').cycle({
		fx: 'fade',
		timeout: 3000
	});
	
	var container_height = parseInt($('#container').css('height')) + 40 + 20; // height + 20px padding + 10px margin
	//console.log(container_height);
	if ($(window).height() < container_height) {
		var margin = ( $(window).height() / 2 ) - 10;
		$('#container').css('margin-top', '-'+margin+'px');
	}
	$(window).resize(function() {
		//console.log(container_height);
		if ($(window).height() < container_height) {
			var margin = ( $(window).height() / 2 ) - 10;
			$('#container').css('margin-top', '-'+margin+'px');
		}
	});
	
	$('#contact_form').submit(function(){
		
		var _return = true, msg = "", fld = "", cnt = 0;
		var name		= $("#first_name"),
			name2		= $("#last_name"),
			email		= $("#email"),
			phone		= $("#phone"),
			comments	= $("#comments");
		
		if (name.val() == "") {
			if (fld == "") fld = name;
			msg += "- Please provide your first name.\n";
			cnt++;
			_return = false;
		}
		if (name2.val() == "") {
			if (fld == "") fld = name2;
			msg += "- Please provide your last name.\n";
			cnt++;
			_return = false;
		}
		if (email.val() == "") {
			if (fld == "") fld = email;
			msg += "- Please provide your email address.\n";
			cnt++;
			_return = false;
		}
		else if (validateEmailQuick(email.val()) == false) {
			if (fld == "") fld = email;
			msg += "- Invalid email address: "+email.val()+"\n";
			cnt++;
			_return = false;
		}
		
		if (!_return) {
			alert(msg);
			fld.focus();
		}
		return _return;
		
		function validateEmailQuick(email) {
			if (email.indexOf('@') < 0) return false;
			if (email.indexOf('.') < 0) return false;
			if (email.length < 7) return false;
			var testEmail = email.split('@');
			var domain = testEmail[1].split('.');
			if (testEmail[0] == null || testEmail[0].length < 1) return false;
			if (domain[0] == null || domain[0].length < 2) return false;
			if (domain[1] == null || domain[1].length < 2) return false;
			return true;
		}
	});
	
	$("#first_name").focus();
});