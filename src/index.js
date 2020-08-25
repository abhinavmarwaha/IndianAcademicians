import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/style.scss';

import header1 from './assets/images/header-image1.png';
import header2 from './assets/images/header-image2.png';
import prof1 from './assets/images/proffessor1.png';
import prof2 from './assets/images/proffessor2.png';
import prof3 from './assets/images/proffessor3.png';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function(){
    $('.header').height($(window).height());
    
   })
  
   $(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })

