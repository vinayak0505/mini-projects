$("#get-image").click(async function (e) {
    let sol = $("#sol").val();
    let page = $("#page").val();
    if (sol == "" || page == "") {
        return false;
    }
    getImage(sol, page);
    return false;
});



async function getImage(sol, page) {
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=DEMO_KEY`,
        success: function (result) {
            if(result.photos.length == 0){
                alert("no image found");
            }
            for (let photo in result.photos) {
                setImage(result.photos[photo].img_src);
            }
        },
        error: function (e){
            console.log("error",e);
        } 
    });
}

function setImage(image) {
    if (image == undefined) return;
    $('#bottom-section').append(`<img src="${image}" alt="${image}">`);
}