import express from 'express';
import bodyParser from 'body-parser';

// โครงสร้างตายตัว

const app = express();
app.use(bodyParser.json());

app.get('/', (req,res) => {
    console.log("KUY")
    res.send("OKOKOKOKOK")
})

app.get('/kuy', (req, res) => {
    console.log("PETE")
    res.send("PETE")
})

app.post('/user/login', (req, res)=> {
    const input = req.body;
    console.log(input)
    if (input.username === "pete" && input.password === "1234") {
        res.send("pass")
    } else {
        res.send("invalid username or password")
    }
})


const PORT = 5001;

app.listen(PORT, () => {
    console.log("App listening to port 5001");
})

export default app;