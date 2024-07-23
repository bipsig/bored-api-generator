import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use (express.static ("public"));
app.use (bodyParser.urlencoded ({ extended:true }));

app.post ('/', async (req, res) => {
    const type = req.body.type;
    const people = req.body.participants;

    // console.log (type);
    // console.log (people);

    const url = `https://bored-api.appbrewery.com/filter?type=${type}&participants=${people}`

    console.log (url);

    try {
        const response = await axios.get (url);
    
        const activity = response.data [Math.floor (Math.random () * response.data.length)]
        console.log (activity);
    
        res.render ("index.ejs", {
            activity: activity
        });
    }
    catch (error) {
        console.error (error);
        res.render ("index.ejs", {
            error: "No such activity to display"
        });
    }

})


app.get ('/', async (req, res) => {

    try {
        const response = await axios.get ('https://bored-api.appbrewery.com/random')
        res.render ("index.ejs", {
            activity: response.data
        });
    }
    catch (error) {
        console.error (error);
        res.render ("index.ejs", {
            error: "No such activity to display"
        });
    }

    // console.log (response.data);
})

app.listen (port, () => {
    console.log (`Server running on port ${port} successfully`);
})