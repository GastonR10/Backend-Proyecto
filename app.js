const express = require("express");
const cors = require("cors");

const commentsRouter = require('./src/routes/comments');
// const { router: tareaRouter } = require('./src/routes/tarea');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.use("/comments", commentsRouter);

// app.use("/auth", authRouter);

// app.use("/tarea", tareaRouter);

app.listen(PORT, function() {
    console.log(`Corriendo en el puerto ${PORT}`);
});