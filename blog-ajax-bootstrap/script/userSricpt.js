let header = document.querySelector(".jumbotron")
let articles = document.querySelector(".main")
let number = parseInt(new URLSearchParams(window.location.search).get("id")) + 1
console.log(number);

fetch('http://localhost:3000/users/' + number)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        // create h2
        let userName = document.createElement("H2")
        userName.className = "display-3 text-white font-weight-bold text-center"
        header.appendChild(userName)
        let txtUserName = document.createTextNode(json.username)
        userName.appendChild(txtUserName)
        // create div informations
        let info = document.createElement("div")
        info.className = "info shadow align-self-start"
        articles.appendChild(info)
        //create p informations
        let array = [json.name, json.email, json.website, json.company.name]
        let arrayName = ['Name : ', 'email : ', 'website : ', 'company : ']
        for (let i = 0; i < array.length; i++) {
            let p = document.createElement("p")
            p.className = "mx-5"
            info.appendChild(p)
            let txtP = document.createTextNode(arrayName[i] + array[i])
            p.appendChild(txtP)
        }
    })
fetch('http://localhost:3000/posts?userId=' + number)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        for (let i = 0; i < result.length; i++) {
            // create div
            let div = document.createElement('DIV')
            div.className = "container shadow m-5 d-flex flex-column article"
            articles.appendChild(div)
            // creat title
            let title = document.createElement('H2')
            title.className = " display-5 font-weight-bold m-5"
            div.appendChild(title)
            let txtTitle = document.createTextNode(result[i].title)
            title.appendChild(txtTitle)
            //create p
            let p = document.createElement('P')
            p.className = "m-2"
            div.appendChild(p)
            let txtP = document.createTextNode(result[i].body)
            p.appendChild(txtP)
            //create img
            let img = document.createElement('IMG')
            img.setAttribute("src", "https://picsum.photos/500/300?random=" + [i])
            img.className = "img-thumbnail mw-25  mx-auto my-5"
            div.appendChild(img)
            //create btn
            let btn = document.createElement('BUTTON')
            btn.className = "btn m-4 comment align-self-end comment"
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