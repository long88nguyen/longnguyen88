$(document).ready(function(){
    $('#form-validate').validate({
rules:
{
    username:{
       
       number:true,
    },
    email:{
        required:true,
        email:true,
    },
    repass:{
        equalTo:'#cf_password',
    },
    select_valid:{
            required:true,
    },
    color:{
        required:true,
    }
},
messages:
{
    username:{
        
        max:'10',
    },
    email:{
        required:"Vui lòng nhập email",
        email:"Email không đúng định dạng",
    },
    repass:{
        equalTo:"Mật khẩu nhập lại không đúng",
    },
    select_valid:{
        required:"vui long select",
    }
}
})
})