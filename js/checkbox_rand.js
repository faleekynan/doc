$("#photo").hide();
$(".f_ava").click(function() {
    if($(this).is(":checked")) {
        $("#photo").show();
		$("#preview").hide();
		$("#file").hide();
		$("#image-input").hide();
		$("#b").hide();
		$("#note").hide();
    } else {
        $("#photo").hide();
		$("#preview").show();
		$("#file").show();
		$("#image-input").show();
		$("#b").show();
		$("#note").show();
		
    }
});

$("#photo_m").hide();
$(".m_ava").click(function() {
    if($(this).is(":checked")) {
        
		$("#photo_m").show();
		$("#preview").hide();
		$("#file").hide();
		$("#image-input").hide();
		$("#b").hide();
		$("#note").hide();
    } else {
        
		 $("#photo_m").hide();
		$("#preview").show();
		$("#file").show();
		$("#image-input").show();
		$("#b").show();
		$("#note").show();
		
    }
});