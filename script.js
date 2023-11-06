let btn = document.getElementById("btnAdd");

btn.addEventListener("click", function () {
    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes/",
        method:"GET",
        success:function(response){
            let data = response;
            for(let i=0;i<data.length;i++){
                let recipe = data[i];
                $("#RecipeList").append(`<li>${recipe.title+" "+recipe._id}</li>`)
            }
        }
    })
});