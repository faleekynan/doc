$("input[type='radio']").change(function(){

   
if($(this).val()=="f")
{
$("#f").show();
$("#middle_name").show();
$("#label_my_button").show();
$("#f_ava").show();
$("#preview").show();
$("#photo_m").hide();

}
else
{
$("#f").hide(); 
$("#middle_name").hide();
$("#label_my_button").hide(); 
$("#f_ava").hide();   
       
}

if($(this).val()=="m")
{   
$("#m").show();
$("#middle_name_m").show(); 
$("#label_my_button_m").show(); 
$("#m_ava").show();  
$("#photo").hide(); 
$("#preview").show();
}
else
{
$("#m").hide();
$("#middle_name_m").hide();
$("#label_my_button_m").hide();
$("#m_ava").hide();

}

  
});

