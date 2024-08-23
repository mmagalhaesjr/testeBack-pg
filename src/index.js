// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import autenticarRotas from "./Routes/AutenticarRotas.js";
// import tarefasRotas from "./Routes/TarefasRotas.js";



// dotenv.config()


// const server = express().use(cors());
// server.use(express.json())


// server.use(autenticarRotas)
// server.use(tarefasRotas)


// const porta = process.env.PORTA || 5000;

// server.listen(porta, () => {
//     console.log(`*** Servidor rodando na porta ${porta} ***`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import autenticarRotas from "./Routes/AutenticarRotas.js";
import tarefasRotas from "./Routes/TarefasRotas.js";

dotenv.config();

const server = express();


const corsOptions = {
    origin: 'https://testefront-theta.vercel.app',
    optionsSuccessStatus: 200 
};

server.use(cors(corsOptions));
server.use(express.json());

server.use(autenticarRotas);
server.use(tarefasRotas);

const porta = process.env.PORTA || 5000;

server.listen(porta, () => {
    console.log(`*** Servidor rodando na porta ${porta} ***`);
});
