
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

$("#get-image").click(async function (e) {
    let value = $("#cars").val();
    if (value == "") {
        return false;
    }
    getImage(value);
    return false;
});



async function getImage(value) {
    $.ajax({
        url: `https://dog.ceo/api/breed/${value}/images`, success: function (result) {
            for (let image in result.message)
                setImage(result.message[image]);
        }
    });
}

function setImage(image) {
    if (image == undefined) return;
    $('#bottom-section').append(`<img src="${image}" alt="${image}">`);
}