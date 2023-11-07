let btn = document.getElementById("btnAdd");
let CreateBtn = document.getElementById("btnCreate");
let DeleteBtn = document.getElementById("btnDelete");
let UpdateBtn = document.getElementById("btnUpdate");

btn.addEventListener("click", function () {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/",
        method: "GET",
        success: function (response) {
            let data = response;
            for (let i = 0; i < data.length; i++) {
                let recipe = data[i];
                $("#RecipeList").append(`<li>${recipe.title + " " + recipe._id}</li>`)
            }
        }
    })
});

CreateBtn.addEventListener("click", function () {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/",
        method: "POST",
        data: { title: "Shawarma", body: "Arabic Delight" },
        success: function (response) {
            console.log(response);
        }
    })
});

DeleteBtn.addEventListener("click", function () {
    const inputString = document.querySelector('ul').firstElementChild.innerText;

    const idPattern = /[a-zA-Z0-9]{24}/;

    const match = idPattern.exec(inputString);

    if (match) {
        const id = match[0];
        console.log("Extracted ID:", id);
        $.ajax({
            url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
            method: "DELETE",
            success: function (response) {
                console.log(response);
            }
        });
    } else {
        console.log("No ID found in the input string.");
    }
});

UpdateBtn.addEventListener("click", function () {
    const inputString = document.querySelector('ul').firstElementChild.innerText;

    const idPattern = /[a-zA-Z0-9]{24}/;

    const match = idPattern.exec(inputString);

    if (match) {
        const id = match[0];
        console.log("Extracted ID:", id);

        $.ajax({
            url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
            method: "PUT",
            data: { title: "Shawarma", body: "Arabic Delight" },
            success: function (response) {
                console.log(response);
            }
        
        })

    } else {
        console.log("No ID found in the input string.");
    }
});