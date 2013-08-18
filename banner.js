$(function(){
  var Banners = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
  ];
  
  var imgPrefix   = "./banners/";
  var randNum     = Math.floor(Math.random() * (6 - 0 + 1)) + 0; /* http://stackoverflow.com/a/1527834/477958 */
  var topBanner = $('#banner');
  
  var newBannerImg  = imgPrefix + Banners[randNum];
  
  $(topBanner).attr('src',newBannerImg);
});