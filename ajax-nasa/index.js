$("#get-image").click(async function (e) {
    let value = $("#date").val();
    if (value == "") {
        return false;
    }
    getImage(value);
    return false;
});



async function getImage(value) {
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${value}&page=1&api_key=DEMO_KEY`,
        success: function (result) {
            for (let photo in result.photos) {
                console.log(photo);
                setImage(result.photos[photo].img_src);
            }
        }
    });
}

function setImage(image) {
    if (image == undefined) return;
    $('#bottom-section').append(`<img src="${image}" alt="${image}">`);
}