const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const { stringify } = require("querystring");
const PORT = 8000;

const app = express();

// Beginere level routing
/*

//Get users as HMTL
app.get('/users', (req, res)=>{
    const HTML= `<ul>
    ${users.map(user=> `<li> ${user.email}<li/> `).join("")}
    </ul>`
    return res.send(HTML)
})

//Get user as JSON
app.get('/api/users', (req, res)=>{
    return res.json(users)
})

//Get user as per the Id.
app.get('/api/users/:id', (req, res)=>{
    const id= Number(req.params.id)
    const user= users.find(user=> user.id=== id)
    return res.json(user)
})

//Delete user as per the id
app.delete('/api/users/:id', (req, res)=>{
    const id= Number(req.params.id)
    const user= users.filter(user=> user.id !== id)
    return res.json(user)
})

*/

// Intermidiate level routing
app.use(express.urlencoded({ extended: false }))
app
    .route("/api/users")
    .get((req, res) => {

        return res.json(users);
    })
    .post((req, res) => {
        const body = req.body
        users.push({ id: users.length + 1, ...body })
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (req, restult) => {
            return res.send("The user created Successfully");
        })
    });


// operation as per the user id
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id) 
        const body = req.body
        const index= users.findIndex(index=> index.id===id)
        users[index]= {id: id, ...body}
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (requ,result)=>{
            return res.send(`User updated successfully ${id}`);
        })

    })

    .delete((req, res) => {
        const id = Number(req.params.id)
        const deletedUser = users.filter(user => user.id !== id)
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(deletedUser), (requ, rest) => {
            return res.json(`User deleted Successfully ${id}`);
        })
    });

app.listen(PORT, () => console.log("Hey! I am listing"));
