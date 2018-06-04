
$('.filler').mouseenter(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '1');
});

$('.filler').mouseleave(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '0');
});


//MODAL LIST
$('.portfolioitem1').click(function(){
  $('#citytoseabridge_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem2').click(function(){
  $('#onefatbird_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem3').click(function(){
  $('#kiwiventure_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem4').click(function(){
  $('#randomword_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem5').click(function(){
  $('#discoverwellington_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem6').click(function(){
  $('#horserace_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem7').click(function(){
  $('#kazu_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem8').click(function(){
  $('#gutterkitties_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})