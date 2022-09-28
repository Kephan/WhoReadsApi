import express from 'express';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).send("API is working!");
});