$(document).ready(function () {
  $('a').smoothScroll();
  $(".title").flipping_text({
    tickerCount: 15,
    opacityEffect: true,
    resetOnChange: true
  });
  $(".title--text").flipping_text({
    tickerTime: 8,
    tickerCount: 8,
    resetOnChange: true
  });
  
});
