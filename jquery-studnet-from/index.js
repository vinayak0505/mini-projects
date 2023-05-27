let grey = true;

$("#student-from").submit(function (e) {
    e.preven
    $("#list").append(
        `
            <li class="listItem ${grey ? 'greybg' : ''}">
                <p>
                    Roll no - <span>${$("#frno").val()}</span> ,
                    <span>${$("#fname").val()}</span> has Scored
                    <span>${$("#fmarks").val()}</span> Marks
                </p>
            </li>
        `
    );
    grey = !grey;
    return false;
});
