const express = require("express");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const postgres = require("./modules/pg/postgres");
const app = express();
const PORT = process.env.PORT || 3000;

async function server() {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        const db = await postgres();
        databaseMiddleware(db, app);

        app.use(customErrorMiddleware);
    } catch (error) {
        console.log("SERVER ERROR:", error);
    } finally {
        //
    }
}
