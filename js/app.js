// file picker
$("#addButton").click(() => {

    $("#file").click();
    document.getElementById("file").addEventListener('change', handleImg, false);
    function handleImg() {
        let img = this.files[0];
        console.log(img);
        $("#image").val(img.name);
    }
});
// sending form data with ajax

$("#submit").click(
    (e)=>
    {
        
        e.preventDefault(); 
        var myform = document.getElementById("loginForm");
        var fd = new FormData(myform);
        console.log(fd)
        $.ajax(
            {
                type: 'POST',
                crossOrigin:true,
                url: "http://192.168.8.104:8080/user/create",
                data: fd,
                cache: false,
                processData: false,
                contentType: false
            }
        ).done(
            (response)=>{

                console.log("response",response);
            }
        ).fail(
            (error)=>{
                console.log("error",error);
            }
        )
    }
)