# Vue Football

![Vue.js](https://img.shields.io/badge/Vue.js-3-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4-blue)
![Vuetify](https://img.shields.io/badge/Vuetify-3-purple)
![License](https://img.shields.io/github/license/jardsonalan/vue-football)

O **Vue Football** é um site que exibe, em tempo real, os resultados mais recentes de jogos de futebol. Criado para os fãs do esporte, o projeto integra a **API Scorebat**, fornecendo placares, datas e detalhes atualizados sobre partidas de forma rápida e intuitiva.

## Tecnologias utilizadas:
| Tecnologias | Descrição |
| --- | --- |
| Vue.js | Framework progressivo para construção de interfaces dinâmicas |
| TypeScript | Para maior segurança e organização do código |
| Vuetify | Biblioteca de componentes para um design responsivo e estilizado |
| Scorebat API | Para obter dados atualizados sobre partidas de futebol |

## Como executar o projeto
1. Clone o repositório:
```bash
git clone https://github.com/jardsonalan/vue-football.git
```

2. Acesse a pasta do projeto:
```bash
cd vue-football
```

3. Instale as dependências:
```bash
npm install
```

4. Crie o arquivo **.env** na pasta principal do projeto;

5. Dentro do arquivo .env, crie a variável **VITE_TOKEN** e adicione seu token da Scorebat API:
```env
VITE_TOKEN="Coloque seu token aqui"
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Contribuições
Contribuições são bem-vindas! Se quiser sugerir melhorias ou adicionar novos recursos:
1. Faça um **fork** do repositório;
2. Crie uma **branch** para sua feature:

   ```bash
   git checkout -b minha-feature
   ```
3. Faça o **commit** das alterações:

   ```bash
   git commit -m "Adicionando nova feature"
   ```
4. Envie para o repositório remoto:

   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

## Licença
Este projeto está sob a licença **MIT** – veja o arquivo LICENSE para mais detalhes.
