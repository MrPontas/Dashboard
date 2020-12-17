# Guia - dashboard

Chamar o método get na pasta raíz para requisitar as informações do banco. Caso queira a base completa, basta requisitar e enviar um JSON vazio.
Todas as variáveis devem ser passadas pelo **body** da requisição.

Caso seja necessário, é possível ocultar informações (não utilizar alguns filtros).
As variáveis que podem ser consultadas são:
## (Sempre com letras maiúsculas)
**uf:** Unidade federativa, ou abreviatura do estado -> PR, AC, SP, etc.
**produto** Produto a qual se quer consultar.
**startDateFilter** Data inicial desejada
**endDateFilter** Data final desejada

## Exemplos:
```JSON
{
    "uf": "PR",
    "produto": "FIXO",
    "startDateFilter": "2019-01-04",
    "endDateFilter": "2019-10-08"
}
```

```JSON
{
    "uf": "BA",
    "produto": "CONTROLE",
    "endDateFilter": "2020-07-11"
}
```
