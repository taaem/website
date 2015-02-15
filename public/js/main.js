$(document).ready(function () {
  $('a').smoothScroll();
  $(".name").flipping_text({
    tickerCount: 15,
    opacityEffect: true,
    resetOnChange: true
  });
  $(".motto").flipping_text({
    tickerTime: 8,
    tickerCount: 8,
    resetOnChange: true
  });
  
})
