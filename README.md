# Data Lovers

## Índice

* [Resumo do projeto](#resumo-do-projeto)
* [1. Definição de produto](#1-definição-de-produto)
* [2. Histórias de usuário](#2-histórias-de-usuário)

***

## Resumo do projeto

### 1. Definição de produto

O banco de dados escolhido para este projeto foi o Pokemon GO.
O desenho do projeto foi feito de acordo com as necessidades imediatas que
o usuário pode ter em relação ao jogo. Pensando nisso, acreditamos que informações
como tipo e fraquezas são essencias, principalmente em momentos de escolha
de pokémons para batalha. Este tipo de conhecimento pode ajudar a melhorar a eficiência
e o resultado das batalhas.
Dessa forma, as coisas básicas que o usuário precisaria para interagir com o produto
seriam poder filtrar por tipo, ordenar em ordem alfabética e fazer uma pesquisa
por nome dos pokémons.

### 2. Histórias de usuário

A partir disso, criamos a seguinte persona:

 **Usuário**:  Jurema
- 25 anos
- trabalha na região central de São Paulo fazendo entregas pro ifood
- retorna pra casa no fim da tarde
- joga pokemon diariamente

**Problema do usuário**:
- Procura uma maneira prática de identificar pokemóns por tipos e fraquezas

**Objetivos do usuário**:
- facilitar a escolha de pokemons pra batalhas
- saber o tipo de cada pokémon
-
**Dados relevantes**:
- imagem
- ver de que tipo é cada pokemon
- quais as fraquezas do pokemon

**Quando utilizariam o produto?**
- quando forem jogar

**Filtros:**
- por tipo
- por ordem alfabética

Com base da nossa persona escrevemos as seguintes histórias de usuário:

- *“Eu, como usuário, gostaria de visualizar os pokémons da região de kanto em uma lista.”*
- *“Eu, como usuária, gostaria de poder listar pokémons por tipo.”*
- *“Eu, como jogador, gostaria de saber quais as fraquezas dos pokémons.”*
- *“Eu, como jogadora de Pokémon GO, gostaria de ter uma maneira para pesquisar um pokémon*
*específico pelo seu nome.”*
- *Eu, como usuária do produto, gostaria de poder visualizá-lo tanto no meu computador*
*quanto no meu celular.*

Para cada história desenvolvemos as seguintes funcionalidades:
- Listar, através de cards, todos os pokémons da região de kanto, sua imagem,
nome, número e tipo;
- Criar um select que possibilite ordenar os pokémons listados por ordem 
alfabética A-Z e Z-A;
- Criar um filtro que liste na tela apenas os pokémons do tipo selecionado pelo usuário;
- Desenvolver uma barra de busca na qual o usuário possa procurar pokémons
pelo nome;
- Deixar a aplicação responsiva.

Como o projeto foi dividido em três sprints, as tarefas de desenvolvimento das
funcionalidades foi separada entre eles.

No **primeiro sprint** conseguimos criar a função que exibe a lista de pokemons na
tela, em formato de cards e o select para filtrá-los por tipo. 

No **segundo sprint** conseguimos fazer a ordenação da lista por ordem
alfabética, tanto de A-Z quanto de Z-A, além de criar uma barra de busca
que permite pesquisar os pokémons pelo seu nome.

No **terceiro sprint** deixamos a aplicação responsiva, para que possa ser
visualizada em outras plataformas, e desenvolvemos os testes.

O CSS e HTML foi modificados no decorrer dos três sprints de acordo com o
desenvolvimento das funcionalidades.
A *definition of done* de cada funcionalidade que criamos foi 

Para faze as funcionalidades tivemos que criar protótipos da aplicação
para identificar melhor as necessidades do usuário e efetuar os testes
de usabilidade. 


***
