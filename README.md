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
sobre o tipo dos pokemons são essencias, principalmente em momentos de escolha
de pokémons para batalha, pois este conhecimento ajuda a melhorar a eficiência
e o resultado nas batalhas.
Dessa forma, as coisas básicas que o usuário precisaria para interagir com o produto
seriam poder filtrar por tipo, ordenar em ordem alfabética e fazer uma pesquisa
por nome dos pokémons.

### 2. Histórias de usuário

A partir disso, criamos a seguinte persona:

 **Usuário**:  Jurema
- 25 anos
- Trabalha na região central de São Paulo fazendo entregas pro ifood;
- Retorna pra casa no fim da tarde;
- Joga pokemon diariamente.

**Problema do usuário**:
- Nossa usuária procura uma maneira prática de identificar as informações desejadas.

**Objetivos do usuário**:
- Facilitar a escolha de pokemons para batalhas;
- Saber o tipo de cada pokémon.

**Dados relevantes**:
- Imagem;
- Nome;
- Tipo dos pokemons.

**Quando utilizariam o produto?**
- quando forem jogar.

**Filtros:**
- Por tipo;
- Por ordem alfabética.

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

O CSS e o HTML foram modificados no decorrer dos três sprints de acordo com o
desenvolvimento das funcionalidades.

Trabalhamos a partir da metodologia ágil e nossa *definition of done* foi a entrega de cada funcionalidade devidamente inclusa na página web já com o layout feito.

Para fazer as funcionalidades, criamos protótipos da aplicação
para identificar melhor as necessidades do usuário e efetuar os testes
de usabilidade. 

Tivemos este resultado final :


![Screenshot from 2019-09-26 14-38-24](https://user-images.githubusercontent.com/50585591/65712532-a07b4100-e06d-11e9-9efd-c0af291a0601.png)


***
