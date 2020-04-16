let articles = document.querySelector('.articles-container')
fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(articles);
        for (let i = 0; i < json.length; i++) {
            // create div
            let div = document.createElement('DIV')
            div.className = "article container shadow m-5 d-flex flex-column"
            articles.appendChild(div)
            // create title
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
        let article = document.querySelectorAll(".article")
        console.log(article);
        for (let i = 0; i < comment.length; i++) {
            let commentDiv = document.createElement('div')
            commentDiv.className = "d-none commentDiv"
            article[i].appendChild(commentDiv)
            let selectCommentDiv = document.querySelectorAll(".commentDiv")
            comment[i].addEventListener("click", function () {
                if (selectCommentDiv[i].className === "d-none commentDiv") {
                    selectCommentDiv[i].className = "d-block commentDiv"
                } else {
                    selectCommentDiv[i].className = "d-none commentDiv"
                }

            })

            for (let j = 0; j < result.length; j++) {
                if (result[j].postId == i + 1) {
                    //create div comment
                    let oneDivComment = document.createElement('div')
                    oneDivComment.className = "border-top border-bottom"
                    commentDiv.appendChild(oneDivComment)
                    // create mail adress
                    let mailP = document.createElement('p')
                    mailP.className = "mail"
                    oneDivComment.appendChild(mailP)
                    let mail = document.createTextNode(result[j].email)
                    mailP.appendChild(mail)
                    // create name comment
                    let commentTitle = document.createElement("h3")
                    oneDivComment.appendChild(commentTitle)
                    let commentTitleTxt = document.createTextNode(result[j].name)
                    commentTitle.appendChild(commentTitleTxt)
                    // create body comment
                    let commentP = document.createElement('p')
                    commentP.className = "commentBody"
                    oneDivComment.appendChild(commentP)
                    let commentBodyTxt = document.createTextNode(result[j].body)
                    commentP.appendChild(commentBodyTxt)
                }
            }
        }
    })