# Ignite-Feed

**(Esta descrição ainda está em construção)**

O Ignite Feed é uma aplicação web construída em ReactJS se baseando no projeto realizado no Ignite do Rocketseat, no Primeiro módulo de ReactJS.
Ele consiste em uma réplica de um feed de rede social, onde o usuário consegue interagir com os posts que ele contém, podendo deixar comentários ou curtidas - que aqui forão denominados "aplausos", já que não há limite de vezes que se pode curtir um post.

No momento não é possível se cadastrar na aplicação nem publicar um post, pois isso não é tratado no curso. Entretanto será uma das features adicionais que serão implementadasem breve.

O projeto foi construído em ReactJS com TypeScript, utilizando o CSS Modules para a estilização, o npm como gerenciador de pacotes e o Vite como ferramenta de criação do projeto. A aplicação também conta com um banco de dados simples feito com JSON Server para servir os dados de usuários, posts e comentários, onde ela faz uso desses dados através de requisções HTTP.
## Funcionalidades

- [x] Visualizar todos os posts em um feed;
- [x] Adicionar comentários em cada post separadamente, quantas vezes quiser;
- [x] Remover um comentário;
- [x] Aplaudir qualquer comentário mais de uma vez;
- [ ] Se cadastrar como usuário;
- [ ] Alterar seus dados de usuário;
- [ ] Remover o seu usuário cadastrado;
- [ ] Entrar como convidado, podendo apenas visualizar os posts e os comentários;

- [ ] Manter os comentários escondidos e revelar somente ao apertar o botão `Comentários`;
- [ ] Armazenar os post separadamente para cada autor;
- [ ] Impedir que um usuário remova um comentário que não é dele;

- [ ] Publicar um post;
- [ ] Editar um Post criado;
- [ ] Filtrar posts por autor;
- [ ] Remover um post feito pelo próprio usuário;
- [ ] Impedir que o usuário remova um post que não é dele;
