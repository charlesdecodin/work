let articles = document.querySelector('.articles-container')
fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(articles);
        for (let i = 0; i < json.length; i++) {
            // create div
            let div = document.createElement('DIV')
            div.className = "container shadow m-5 d-flex flex-column"
            articles.appendChild(div)
            // creat title
            let title = document.createElement('H2')
            title.className = " display-5 font-weight-bold m-5"
            div.appendChild(title)
            let txtTitle = document.createTextNode(json[i].title)
            title.appendChild(txtTitle)
            //create p
            let p = document.createElement('P')
            p.className = "m-2"
            div.appendChild(p)
            let txtP = document.createTextNode(json[i].body)
            p.appendChild(txtP)
            //create img
            let img = document.createElement('IMG')
            img.setAttribute("src", "https://picsum.photos/500/300?random=" + [i])
            img.className = "img-thumbnail mw-25  mx-auto my-5"
            div.appendChild(img)
            //create btn
            let btn = document.createElement('BUTTON')
            btn.className = "btn m-4 comment align-self-end"
            div.appendChild(btn)
            let txtBtn = document.createTextNode("Commentaires")
            btn.appendChild(txtBtn)
        }
    })
fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(result => {
        console.log(result);
        //create comment
        let comment = document.querySelectorAll(".comment")
        console.log(comment);
        for (let i = 0; i < comment.length; i++) {
            comment[i].addEventListener("click", function () {
                comment[i].style.backgroundColor = "#A6170A"
                console.log(i)
                for (let j = 0; j < result.length; j++) {
                    if (result[j].postId == i + 1) {
                        console.log(result[j].name)
                    }
                }

            })
        }

    })