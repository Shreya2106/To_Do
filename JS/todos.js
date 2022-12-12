$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input").keypress(function(event){
	if(event.which==13){
		var value=$("input").val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+value+"</li>");
		$(this).val("");
	}
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle(200);
});
