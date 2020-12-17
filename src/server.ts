import express from 'express';
import GetQueryService from './services/GetQueryService';
import './database';
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', async (request, response)=>{
  try {
    const {startDateFilter, endDateFilter, uf, produto} = request.body;
    const getQueryService = new GetQueryService();
    const query = await getQueryService.execute(startDateFilter, endDateFilter, uf, produto);

    return response.json(query);
  }catch(err) {
    console.log(err);
    return response.status(400).json({message: "Algo deu errado"});
  }
})

app.listen(port, () => {
  console.log(`🚀🚀🚀🚀  Servidor rodando na porta ${port} 🚀🚀🚀🚀 `);
})