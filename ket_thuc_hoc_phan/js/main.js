$(document).ready(function(){
    $('.btn-send-contact').click(function(){
        
    })
    $('.btn-send-contact').click(function(){
        if($('.contact-username').val()==""){
            $('.validation-frame').show();
            $('.error-name').show();
        }
    })
    $('.btn-send-contact').click(function(){
        if($('.contact-email').val()==""){
            $('.validation-frame').show();
            $('.error-email').show();
        }
    })
    $('.btn-send-contact').click(function(){
        if($('.contact-username').val()!=""){
            $('.error-name').hide();
        }     
    })
    $('.btn-send-contact').click(function(){
        if($('.contact-email').val()!=""){
            $('.error-email').hide();
        }   
    })
    $('.btn-send-contact').click(function(){
        if($('.contact-email').val()!=""&&$('.contact-email').val()!=""){
            $('.validation-frame').hide();
        }
       
    })
   $('#form-validation').validate({
       rules:{
            name:{
                required:true,
                maxlength:12,
                minlength:6,
            },
            email:{
                required:true,
                email:true,
            },
            phone:{
                number:true,
                maxlength:10,
                minlength:10,
            }
       },
       messages:{
            name:{
                required:"Vui lòng điền họ tên",
                maxlength:"Họ tên không dài quá 12 ký tự",
                minlength:"Họ tên tối thiểu 6 ký tự",
            },
            email:{
                required:"Vui lòng nhập email",
                email:'Email không đúng định dạng VD: abc@de.com' ,

            },
            phone:{
                number:"Số điện thoại không đúng định dạng",
                maxlength:"Số điện thoại không đúng định dạng",
                minlength:"Số điện thoại không đúng định dạng",
            }


       }
   })
  
})