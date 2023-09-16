$(document).ready(function(){
    var images=['images/aug15.jpg',
                'images/aug28.jpg',
                'images/aug29.jpg',
                'images/background1.jpg',
                'images/sept16.jpg',];
    
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';
    
    $('body').css({'background':bgImg, 'background-size':'cover', });
    
});