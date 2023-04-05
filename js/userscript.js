if( (/fc49912qh098/.test(window.location.href)))
$("#js-payment-code").parent().parent().remove();
$('#box_zgoda_8989').hide();
$("#uczestnik_adres_kraj").parents('.form-group').after($('#box_zgoda_8989'));

var formFunc = (function() {

    var fcText = "Krakow Technology Park as the main organizer of the Digital Dragons conference has decided to stop selling tickets for citizens of Russia and Belarus due to the outbreak of war in Ukraine.<br/><br/>Слава Україні! <i class=\"fa fa-heart blueH\" aria-hidden=\"true\">&nbsp;</i> <i class=\"fa fa-heart yellowH\" aria-hidden=\"true\">&nbsp;</i> <br/><br/>#SolidarityWithUkraine";

    var obj = {
       init: function() {
                    obj.addFCInfo();
                    obj.showFCInfo();
                    obj.promoCode();
                    obj.bind();
                },
    addFCInfo: function() {
                    $("#uczestnik_adres_kraj").parents('.form-group').after('<div class="FCInfo">'+fcText+'</div>');
                },
         bind: function() {

                 $("section#participationtypeBox label").on("click", 
                     function() {
                       console.log('Registration profile changed');
                       obj.promoCode();
                     }
                 );

                 $("#uczestnik_adres_kraj").on('change',function() {
                      obj.showFCInfo();
                    });
                },
    promoCode: function() 
               {
                 if (obj.isType(90169) ||
                     obj.isType(90159)) { 
                       $("#js-payment-code").val('');
                       $("#js-payment-code").parent().parent().hide();
                     } else {
                       $("#js-payment-code").parent().parent().show();
                     }
               },
   showFCInfo: function() {
                    var country = $("#uczestnik_adres_kraj option:selected").val();
                    if (country=='RU') {
                      $(".FCInfo").slideDown();
                      $("#box_zgoda_8989").slideUp();
                    } else if (country=='BY') {
                      $("#box_zgoda_8989").slideDown();
                      $(".FCInfo").slideUp();
                    } else {
                      $("#box_zgoda_8989").slideUp();
                      $(".FCInfo").slideUp();
                    }
                },
    isType: function(id) {
              return (jQuery.inArray(id,moduleGlobals['typ_uczestnictwa'])>=0)
           }
              }

    $(function(){
        obj.init();
    });

})();

$("#box_zgoda_498").before(`<strong>Consent to data processing - giving a lecture at the Digital Dragons Conference</strong>`);
$("#box_zgoda_500").before(`<strong>Consent to receive marketing information</strong>`);

$("#box_zgoda_506").before(`Consent to dissemination of image in future events and conferences. <strong>(We would like to use your image to promote future editions of Digital Dragons).</strong>`);

$("#box_zgoda_500 label").append(`<p> I acknowledge that consent is voluntary and may be withdrawn at any time. </p>`);

$("#box_zgoda_506").after(`<div class="text-center"><br/><a href="/conf-data/digitaldragons2023/files/INFORMATION%20CONCERNING%20THE%20PROCESSING%20OF%20PERSONAL%20DATA.pdf" class="btn btn-primary" target="_blank"><i class="fa fa-cloud-download" aria-hidden="true"></i>
 INFORMATION CONCERNING THE PROCESSING OF PERSONAL DATA</a></div>`);

$("#miejsce_pracy").parent().parent().parent().after('<p><i>Please check the fields above. They will be printed on your badge!</i></p>');
$("#plec_m").parent().parent().parent().parent().insertAfter($("#email").parent().parent().parent());
$("#personaldataBox  .a-viewBox.section-wrapper").append("<p><i>* - obligatory question</i></p>");

$(function(){

  var registered = $('.alert-success').is(':visible');
  if(registered){
      fbq('track', 'Purchase');
  }

    $("#personalmultidataBox").insertBefore('#paymentsBox')

 function clearInput(mode, wrap){
 if(mode == 'checkbox'){
 $('#' + wrap + ' input').each(function(){
 $(this).prop('checked', false).nv_checkbox();
 })
 }
 if(mode == 'radio'){
 $('#' + wrap + ' input').each(function(){
 $(this).prop('checked', false).nv_radiobutton();
 })
 }
 }

 function isType(id){
 return (jQuery.inArray(id,moduleGlobals['typ_uczestnictwa'])>=0);
 }
 $("#invoicesBox").insertAfter($("#paymentsBox"));

 function hideQuestionnaire(){
 $('#wrap-kwestionariusz_1416_3333, #wrap-kwestionariusz_1416_3334, #wrap-kwestionariusz_1416_3335, #wrap-kwestionariusz_1416_3336').hide();
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').hide();

 /*$('#renderQuestionnaire input[type="checkbox"]').each(function(){
 $(this).prop('checked', false).nv_checkbox();
 })
 $('#renderQuestionnaire input[type="radio"]').each(function(){
 $(this).prop('checked', false).nv_radiobutton();
 })

 $('#renderQuestionnaire input[type="text"]').val('');*/
 }

 // What is the main reason you are attending Digital Dragons? -> show
 function showLecturesChoose(){
 if($('#kwestionariusz_1414_3330_1').is(":checked")){
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').show();
 }else{
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').hide();
 clearInput('radio', 'wrap-kwestionariusz_1415_3331');
 }
 }
 // What is the main reason you are attending Digital Dragons? -> hide/clear
 $('button#clear_kwestionariusz_1414').on("click", function(){
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').hide();
 clearInput('radio', 'wrap-kwestionariusz_1415_3331');
 });

 // I am: -> show
 function showIam(){
 if($('#kwestionariusz_1416_3332_0').prop("checked")){
 $('#wrap-kwestionariusz_1416_3333').show();
 }else{
 $('#wrap-kwestionariusz_1416_3333').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1416_3333');
 }

 if($('#kwestionariusz_1416_3332_1').prop("checked")){
 $('#wrap-kwestionariusz_1416_3334').show();
 }else{
 $('#wrap-kwestionariusz_1416_3334').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1416_3334');
 }

 if($('#kwestionariusz_1416_3332_2').prop("checked")){
 $('#wrap-kwestionariusz_1416_3335').show();
 }else{
 $('#wrap-kwestionariusz_1416_3335').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1416_3335');
 }

 if($('#kwestionariusz_1416_3332_3').prop("checked")){
 $('#wrap-kwestionariusz_1416_3336').show();
 }else{
 $('#wrap-kwestionariusz_1416_3336').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1416_3336');
 }
 }

 // I am: -> hide/clear
 $('#clear_kwestionariusz_1416').on("click", function(){
 $('#wrap-kwestionariusz_1416_3333, #wrap-kwestionariusz_1416_3334, #wrap-kwestionariusz_1416_3335, #wrap-kwestionariusz_1416_3336').hide();
 });

 // I am looking for: -> show
 function showIamFor(){
 if($('#kwestionariusz_1418_3338_0').prop("checked")){
 $('#wrap-kwestionariusz_1418_2341').show();
 }else{
 $('#wrap-kwestionariusz_1418_2341').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1418_2341');
 }

 if($('#kwestionariusz_1418_3338_1').prop("checked")){
 $('#wrap-kwestionariusz_1418_2342').show();
 }else{
 $('#wrap-kwestionariusz_1418_2342').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1418_2342');
 }

 if($('#kwestionariusz_1418_3338_2').prop("checked")){
 $('#wrap-kwestionariusz_1418_2343').show();
 }else{
 $('#wrap-kwestionariusz_1418_2343').hide();
 clearInput('checkbox', 'wrap-kwestionariusz_1418_2343');
 }
 }

 // I am looking for: -> hide/clear
 $('#clear_kwestionariusz_1418').on("click", function(){
 $('#wrap-kwestionariusz_1418_2341, #wrap-kwestionariusz_1418_2342, #wrap-kwestionariusz_1418_2343').hide();
 });

 $(document).ajaxComplete(function (req, res, s){
 if (s.url === "/module/Questionnaire/json"){
 hideQuestionnaire();
 $("section#participationtypeBox label").on("click", function(){hideQuestionnaire();});

 // What is the main reason you are attending Digital Dragons? -> show and hide
 $('#wrap-kwestionariusz_1414_3330 label').on("click", function(){ showLecturesChoose();});
 $('button#clear_kwestionariusz_1414').on("click", function(){
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').hide();
 clearInput('radio', 'wrap-kwestionariusz_1415_3331');
 });

 // I am: -> show and hide
 $('#wrap-kwestionariusz_1416_3332 input[name="kwestionariusz_1416_3332[]"]').on("change", function(){ showIam();});
 $('#clear_kwestionariusz_1416').on("click", function(){
 $('#wrap-kwestionariusz_1416_3333, #wrap-kwestionariusz_1416_3334, #wrap-kwestionariusz_1416_3335, #wrap-kwestionariusz_1416_3336').hide();
 });

 // I am looking for: -> show and hide
 //$('#wrap-kwestionariusz_1418_3338 input[name="kwestionariusz_1418_3338[]"]').on("change", function(){ showIamFor();});
 $('#clear_kwestionariusz_1418').on("click", function(){
 $('#wrap-kwestionariusz_1418_2341, #wrap-kwestionariusz_1418_2342, #wrap-kwestionariusz_1418_2343').hide();
 });

 showAfterError();
 }
 })

 hideQuestionnaire();
 $("section#participationtypeBox label").on("click", function(){hideQuestionnaire();});

 // What is the main reason you are attending Digital Dragons? -> hide/clear
 $('#wrap-kwestionariusz_1414_3330 label').on("click", function(){ showLecturesChoose();});

 // I am: -> show
 $('#wrap-kwestionariusz_1416_3332 input[name="kwestionariusz_1416_3332[]"]').on("change", function(){ showIam();});

 // I am looking for: -> show and hide
 //$('#wrap-kwestionariusz_1418_3338 input[name="kwestionariusz_1418_3338[]"]').on("change", function(){ showIamFor();});

 function showAfterError(){
 var helpBlock = $('div.help-block');
 var error = $('.has-error');
 if (!helpBlock.length > 0 || !error.length > 0){
 //Wykonuje się tylko po pierwszym załadowaniu formularza
 //hideQuestionnaire();
 } else{
 //Wykonuje się po wysłaniu formularza z błędem
   
   $('html, body').animate({
   scrollTop: $("div.help-block").offset().top - 520
   }, 1000);
   
   
 if($('input#kwestionariusz_1414_3330_1').is(":checked")){
 $('#wrap-kwestionariusz_1415_3331').parents('#questionnaireBox').show();
 }

 if($('input#kwestionariusz_1416_3332_0').prop("checked")){
 $('#wrap-kwestionariusz_1416_3333').show();
 }
 if($('input#kwestionariusz_1416_3332_1').prop("checked")){
 $('#wrap-kwestionariusz_1416_3334').show();
 }
 if($('input#kwestionariusz_1416_3332_2').prop("checked")){
 $('#wrap-kwestionariusz_1416_3335').show();
 }
 if($('input#kwestionariusz_1416_3332_3').prop("checked")){
 $('#wrap-kwestionariusz_1416_3336').show();
 }

 if($('input#kwestionariusz_1418_3338_0').is(":checked")){
 $('#wrap-kwestionariusz_1418_2341').show();
 }
 if($('input#kwestionariusz_1418_3338_1').is(":checked")){
 $('#wrap-kwestionariusz_1418_2342').show();
 }
 if($('input#kwestionariusz_1418_3338_2').is(":checked")){
 $('#wrap-kwestionariusz_1418_2343').show();
 }
 }
 }
 showAfterError();


 /******* ABSTRAKTY *******/
 /* $('#zgloszenie_artykul_pelny_tresc_en').after('<div style="color: #fff;" class="longtext-field__desc"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;Please provide links to video recordings of your previous talks</div>'); */
})


var disabledTopicIds = [ 5387, 5388, 5392, 5397, 5398 ];
var checkedDisabledTopics = {};

for (const id in disabledTopicIds) {

  checkedDisabledTopics[disabledTopicIds[id]] = $('#zgloszenie_temat_0_' + disabledTopicIds[id]).is(':checked');

  $('#zgloszenie_temat_0_' + disabledTopicIds[id]).on('click', function () {

    if ($(this).is(':checked') && !checkedDisabledTopics[disabledTopicIds[id]] ) {
      $(this).prop('checked', !$(this).prop('checked'));
      alert('Sorry, this track is already closed, we are not accepting any more applications');
    }
});

}