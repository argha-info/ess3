function FileListItem(a) {

    a = [].slice.call(Array.isArray(a) ? a : arguments)

    for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File

    if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")

    for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])

    return b.files
}
function removeImage(name) {
    selectedfiles = document.getElementById("files").files;
    var final = [];
    $.each(selectedfiles, function(index, value) {
        if (value.name !== name) {
            final.push(value);
        }
    });

    document.getElementById("files").files = new FileListItem(final);
}
$(document).ready(function(e) {
    var selectedfiles;
    var selectedfile;
    var fileIndex;

    $(document).ready(function() {
        if (window.File && window.FileList && window.FileReader) {

            $("#files").on("change", function(e) {
                var files = e.target.files,
                selectedfiles = files;
                filesLength = files.length;

                for (var i = 0; i < filesLength; i++) {
                    selectedfile = files[i]
                    fileIndex = i;

                    var fileReader = new FileReader();
                    fileReader.onload = (function(e) {

                        var file = e.target;

                        $("<span class=\"pip\">" +
                            "<img class=\"imageThumb\" src=\"" + e.target.result +
                            "\" title=\"" + selectedfile.name + "\"/>" +
                            "<br/><span class=\"remove\" onclick=\"removeImage('" +
                            selectedfile.name + "')\">-</span>" +
                            "</span>").insertAfter("#files");
                        $(".remove").click(function() {
                            $(this).parent(".pip").remove();
                        });
                    });

                    fileReader.readAsDataURL(selectedfile);
                }
            });

        }else{
            alert("Your browser doesn't support to File API")
        }
    });

    
});

//Remove Old Images

$(document).on("click", ".removeOldImg", function(){

    var removeOldImg = $(this).attr("data-image");
    var recipe       = $(this).attr("data-recipe");

    if(removeOldImg !=''){
        $.confirm({
            title: 'Remove Image',
            content: 'Are you sure want to remove this image?',
            typeAnimated: true,
            draggable: true,
            dragWindowGap: 15,
            dragWindowBorder: true,
            animateFromElement: true,
            smoothContent: true,
            theme: 'supervan',

            buttons: {
                confirm: function () {
                    $.ajax({
                        method: "POST",
                        url: ajaxRemoveImage,
                        data: {"_token":globalToken, removeOldImg:removeOldImg, recipe:recipe},
                        dataType:"json",
                        success: function(data) {

                          if(data.success == 1){
                            $.alert({
                                title: 'Success!',
                                content: data.message,
                            });
                            setTimeout(function(){ location.reload(); }, 3000);
                          }else{
                            $.alert({
                                title: 'Alert!',
                                content: data.message,
                            });
                          }
                      }
                  });
                },
                cancel: function () {
                    //$.alert('Canceled!');
                }
            }
    });

    }else{
        $.alert({
            title: 'Alert!',
            content: 'Something went wrong please try after sometime.',
        });
    }
});
