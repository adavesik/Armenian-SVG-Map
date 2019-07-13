$("#lori,.lori").click(function(){
	$('.lori').removeAttr('id');
	$('.lori').addClass('selected_state');
	$("#lori").css('fill','white');
	$('#map svg path').slice(1,12).css('fill','transparent');
	$('#map span').slice(1,12).removeClass('selected_state');
});

$("#shirak,.shirak").click(function(){
	$('.shirak').removeAttr('id');
	$('.shirak').addClass('selected_state');
	$("#shirak").css('fill','white');
	$('#map svg path').slice(0,1).css('fill','transparent');
	$('#map span').slice(0,1).removeClass('selected_state');
	$('#map svg path').slice(2,12).css('fill','transparent');
	$('#map span').slice(2,12).removeClass('selected_state');

});


$("#tavush,.tavush").click(function(){
	$('.tavush').addClass('selected_state');
	$("#tavush").css('fill','white');
	$('#map svg path').slice(0,2).css('fill','transparent');
	$('#map span').slice(0,2).removeClass('selected_state');
	$('#map svg path').slice(3,12).css('fill','transparent');
	$('#map span').slice(3,12).removeClass('selected_state');
});

$("#aragatsotn,.aragatsotn").click(function(){
	$('.aragatsotn').addClass('selected_state');
	$("#aragatsotn").css('fill','white');
	$('#map svg path').slice(0,3).css('fill','transparent');
	$('#map span').slice(0,3).removeClass('selected_state');
	$('#map svg path').slice(4,12).css('fill','transparent');
	$('#map span').slice(4,12).removeClass('selected_state');
});


$("#kotayk,.kotayk").click(function(){
	$('.kotayk').addClass('selected_state');
	$('#kotayk').css('fill','white');
	$('#map svg path').slice(0,4).css('fill','transparent');
	$('#map span').slice(0,4).removeClass('selected_state');
	$('#map svg path').slice(5,12).css('fill','transparent');
	$('#map span').slice(5,12).removeClass('selected_state');
});


$("#gegharkunik,.gegharkunik").click(function(){
	$('.gegharkunik').addClass('selected_state');
	$('#gegharkunik').css('fill','white');
	$('#map svg path').slice(0,5).css('fill','transparent');
	$('#map span').slice(0,5).removeClass('selected_state');
	$('#map svg path').slice(6,12).css('fill','transparent');
	$('#map span').slice(6,12).removeClass('selected_state');
});


$("#sevan").click(function(){
	$('.gegharkunik').addClass('selected_state');
	$('#gegharkunik').css('fill','white');
	$('#map svg path').slice(0,5).css('fill','transparent');
	$('#map span').slice(0,5).removeClass('selected_state');
	$('#map svg path').slice(7,12).css('fill','transparent');
	$('#map span').slice(6,12).removeClass('selected_state');
});


$("#armavir,.armavir").click(function(){
	$('.armavir').addClass('selected_state');
	$('#armavir').css('fill','white');
	$('#map svg path').slice(0,7).css('fill','transparent');
	$('#map span').slice(0,6).removeClass('selected_state');
	$('#map svg path').slice(8,12).css('fill','transparent');
	$('#map span').slice(7,12).removeClass('selected_state');
});

$("#yerevan,.yerevan").click(function(){
	$('.yerevan').addClass('selected_state');
	$('#yerevan').css('fill','white');
	$('#map svg path').slice(0,8).css('fill','transparent');
	$('#map span').slice(0,7).removeClass('selected_state');
	$('#map svg path').slice(9,12).css('fill','transparent');
	$('#map span').slice(8,12).removeClass('selected_state');
});


$("#ararat,.ararat").click(function(){
	$('.ararat').addClass('selected_state');
	$("#ararat").css('fill','white');
	$('#map svg path').slice(0,9).css('fill','transparent');
	$('#map span').slice(0,8).removeClass('selected_state');
	$('#map svg path').slice(10,12).css('fill','transparent');
	$('#map span').slice(9,12).removeClass('selected_state');
});


$("#vayots-dzor,.vayots-dzor").click(function(){
	$('.vayots-dzor').addClass('selected_state');
	$('#vayots-dzor').css('fill','white');
	$('#map svg path').slice(0,10).css('fill','transparent');
	$('#map span').slice(0,9).removeClass('selected_state');
	$('#map svg path').slice(11,12).css('fill','transparent');
	$('#map span').slice(10,12).removeClass('selected_state');
});


$("#syunik,.syunik").click(function(){
	$('.syunik').addClass('selected_state');
	$('#syunik').css('fill','white');
	$('#map svg path').slice(0,11).css('fill','transparent');
	$('#map span').slice(0,10).removeClass('selected_state');
	$('#map svg path').slice(12,12).css('fill','transparent');
	$('#map span').slice(11,12).removeClass('selected_state');
});
