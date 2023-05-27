let images;
let index = 0;
$("#get-image").click(async function (e) {
    let value = $("#cars").val();
    if (value == "") {
        return false;
    }
    previous = value;
    getImage(value);
    return false;
});

getItems();
function getItems() {
    $.ajax({
        url: "https://dog.ceo/api/breeds/list/all", success: function (result) {
            for (let breed in result.message) {
                $('#cars').append(`<option value="${breed}">${breed}</option>`);
            }
        }
    })
}




async function getImage(value) {
    $.ajax({
        url: `https://dog.ceo/api/breed/${value}/images`, success: function (result) {
            images = result.message
            setImage();
        }
    });
}

$('#next').click(function(){
    setImage();
})

function setImage(){
    if(images == undefined) return;
    $('#image').attr('src',images[index]);
    index = (index + 1) % images.length;
}