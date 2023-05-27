let page = 1;
let sol;
$("#get-image").click(async function (e) {
    sol = $("#sol").val();
    if (sol > 1000) {
        alert("enter value less then 1000")
        return false;
    }
    page = 1;
    if (sol == "") {
        return false;
    }
    getImage(sol, page);
    return false;
});

dissable();
function dissable() {
    $("#prev").attr("disabled", true);
    $("#next").attr("disabled", true);
}

async function getImage(sol, page) {
    console.log(page);
    $.ajax({
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=DEMO_KEY`,
        success: function (result) {
            $("#next").attr("disabled", false);
            $('#bottom-section').empty();
            if (result.photos.length == 0) {
                alert("no image found");
            }
            for (let photo in result.photos) {
                setImage(result.photos[photo].img_src);
            }
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

$("#prev").click(() => {
    getImage(sol, --page);
    if (page == 1) $(this).attr("disabled", true);
});

$("#next").click(() => {
    getImage(sol, ++page);
    $("#prev").attr("disabled", false);
});

$("#next").attr("disabled", true);
function setImage(image) {
    if (image == undefined) return;
    $('#bottom-section').append(`<img src="${image}" alt="${image}">`);
}