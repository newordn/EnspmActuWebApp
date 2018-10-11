$("#img").mouseenter(
    ()=>{
        $("#upload").css("opacity",1);
    }
)
$("#img").mouseleave(
    () => {
        $("#upload").css("opacity", 0);
    }
)
// rigths radio button listeners
$('input:radio[name="role"]').change(
    function () {
        if ($(this).is(':checked') && $(this).val() == 'user') {
            $("#right").val("user");
            console.log("user")
        }
        else if ($(this).is(':checked') && $(this).val() == 'admin') {
            $("#right").val("admin");
            console.log("admin")
        }
        else
        {
            $("#right").val("root");
            console.log("root");
        }
        });