(function($) {


//Hide text on button press
var $button = $('#myButton'),
  $text   = $('#myText'),
  visible = true;

$button.click(function(){
if ( visible ) {
  $text.slideUp('fast',function(){
    $text.addClass('hide')
         .slideDown(0);
  });
} else {
  $text.slideUp(0,function(){
    $text.removeClass('hide')
         .slideDown('fast');
  });
}
visible = ! visible;
});


//Create table
var col1 = ["Full time student checking (Age 22 and under) ", "Customers over age 65", "Below  $500.00"];
var col2 = ["None", "None", "$8.00"];

function createtable() {
    <!--To fill the table with javascript-->
    for (var j = 0; j < col1.length; j++) {
        if (j % 2 == 0) {
            document.write("<tr><td>" + col1[j] + " </td>");
            document.write("<td>" + col2[j] + "</td></tr>");
        } else {
            document.write("<tr  bgcolor='#aeb2bf'><td>" + col1[j] + " </td>");
            document.write("<td>" + col2[j] + "</td></tr1>");
        }
    }
};


//Check a box
function validateadlocation()
{
    var checkboxs=document.getElementsByName("top middle sidebar");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
        }
    }
    if(okay)alert("Thank you for checking a checkbox");
    else alert("Please check a checkbox");
};

})(jQuery);