$('#button').click(() => {
    $('#section').empty().append('<div id="content"></div>');
    fillBody()
})

function fillBody() {
    console.log("calling");
    $.ajax({
        url: "https://www.reddit.com/r/funny/top.json?limit=10", success: function (result) {
            for (let child in result.data.children) {
                addItem(result.data.children[child].data);
            }
        }
    })
}

function addItem(data) {
    $('#content').append(
        `
            <div class="card">
                <img class="card-img-top" src="${data.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.author}</p>
                </div>
            </div>
        `
    );
}