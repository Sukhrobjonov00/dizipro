require("dotenv").config();
const express = require("express");
const errorHandler = require("./helpers/errorHandler");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const postgres = require("./modules/pg/postgres");
const Routes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 3000;

async function server() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        const db = await postgres();
        databaseMiddleware(db, app);

        // console.log(db);

        app.use(customErrorMiddleware);

        app.use("/v1", Routes);
        app.use(errorHandler);
    } catch (error) {
        console.log("SERVER ERROR:", error);
    }
}

server();
