let test = document.querySelector('.friends-container')

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {
        console.log(json)


        for (let i = 0; i < json.length; i++) {
            let div = document.createElement('DIV');
            if (i % 2 == 0) {
                div.className = "col-8 col-md-4 offset-2 offset-md-1 text-center my-5 shadow user"
            } else {
                div.className = "col-8 col-md-4 offset-2 offset-md-2 text-center my-5 shadow user"
            }
            test.appendChild(div)
            let array = [json[i].username, json[i].name, json[i].email]
            let arrayName = ["User name : ", "Name : ", "email : "]
            for (let j = 0; j < array.length; j++) {
                let p = document.createElement('P')
                div.appendChild(p)
                let txtName = document.createTextNode(arrayName[j] + array[j])
                p.appendChild(txtName)

            }
            let user = document.querySelectorAll(".user")
            user[i].addEventListener('click', function () {
                window.open("user.html?id=" + i)
            })
        }
    })



