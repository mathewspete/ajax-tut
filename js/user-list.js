//const url = "http://localhost:39623/api/users";

let newUser = {
    "id": 0,
    "firstname": "Jeremy",
    "lastname": "Kovak",
    "username": "Legend3D",
    "password": "0319-078",
    "phone": "673-555-1234",
    "email": "user8989@email.com",
    "isAdmin": false,
    "isReviewer": false
}

let allUsers = [];


let array = [
    {
      id: 1,
      username: "mathews225",
      password: "pm123",
      firstname: "Peter",
      lastname: "Mathews",
      phone: "5133215555",
      email: "name@email.com",
      isReviewer: true,
      isAdmin: true
    },
    {
      id: 3,
      username: "mathews2252",
      password: "pm123",
      firstname: "Pete",
      lastname: "Mathews",
      phone: "5135551234",
      email: "user@email.com",
      isReviewer: true,
      isAdmin: true
    },
    {
      id: 5,
      username: "mathews2",
      password: "pm123",
      firstname: "Pete",
      astname: "Mathews",
      phone: "5135551234",
      email: "user@email.com",
      isReviewer: true,
      isAdmin: true
    },
    {
      id: 6,
      username: "Legend3D",
      password: " 0319-078",
      firstname: "Jeremy",
      lastname: "Kovak",
      phone: "6735551234",
      email: "user8989@email.com",
      isReviewer: false,
      isAdmin: false
    }
  ]


$().ready(()=>{

/*
for (var a of array){
    for (o in a )
    console.log(o);
}
*/

    userList()
        .done((users)=>{
            allUsers = users;
            display(allUsers);
        })
        .fail();

        /*
        $.ajax({
            method: "POST",
            contentType: "application/json; charset=utf-8",
            url: url,
            data: newUser
        });
    
        
    $.getJSON(url)
        .done((users) => {
            console.log(users);
        })

        .fail((err) => {
            console.error(err);
        })
        */
})

const display = (users) => {
    let tbody = $("tbody");
    let header = "";
    tbody.empty();
    for (let user of users) {
        header = "";
        let td;
        for( prop in user ) {
            header += `<th>${prop}</th>`;
            td += (`<td>${user[prop]}</td>`);
        }
        let tr = `<tr>${td}</tr>`;
        tbody = $("tbody").append(tr);
    }
    $("thead").append(header);
}