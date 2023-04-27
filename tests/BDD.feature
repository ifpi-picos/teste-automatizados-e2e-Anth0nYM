Feature: Criar conta 

Neste exemplo, a funcionalidade é o cadastro de usuário no site do refeitório e os cenários de
teste incluem testes de cadastro com campos vazios, com uma foto de formato inválido,
com senhas inválidas e com email já cadastrado. Cada cenário começa com um "Dado" que define o estado inicial e, em seguida,
continua com uma série de "E" (eventos) que descrevem as ações que o usuário realiza.
Finalmente, cada cenário termina com um "Então" que descreve o resultado esperado.

Scenario: Cadastro com campos vazios
    Given QUE eu estou na tela de cadastro
    And todos os campos estão vazios
    When tento me cadastrar
    Then uma mensagem é emitida dizendo que todos os campos são obrigatórios.

Scenario: Cadastro com foto em formato inválido
    Given QUE eu estou na tela de cadastro
    And todos os campos são preenchidos corretamente
    And eu escolho uma foto em um formato inválido
    When tento me cadastrar
    Then uma mensagem é emitida dizendo que a foto tem que ser em formato .jpg ou .png.

Scenario: Cadastro com senha inválida
    Given QUE eu estou na tela de cadastro
    And todos os campos são preenchidos corretamente
    And eu insiro uma senha inválida (menos de 8 caracteres)
    When tento me cadastrar
    Then uma mensagem é emitida dizendo que a senha tem que ter pelo menos 8 caracteres.

Scenario: Cadastro com e-mail já cadastrado
    Given QUE eu estou na tela de cadastro
    And todos os campos são preenchidos corretamente
    And eu insiro um e-mail que já está cadastrado
    When tento me cadastrar
    Then uma mensagem é emitida dizendo que o e-mail já está cadastrado no sistema.

Scenario: Cadastro com dados válidos
    Given QUE eu estou na tela de cadastro
    And todos os campos são preenchidos corretamente
    And eu insiro um e-mail que ainda não está cadastrado
    When tento me cadastrar
    Then uma mensagem é emitida dizendo que o cadastro foi realizado com sucesso.


Feature: Login

Scenario: Login com credenciais válidas
    Given que estou na página de login
    And insiro minhas credenciais válidas
    When clico no botão de login
    Then sou redirecionado para a página inicial

Scenario: Login com email inválido
    Given que estou na página de login
    And insiro meu email inválido
    And insiro minha senha válida
    When clico no botão de login
    Then é exibida uma mensagem informando que o email é inválido

Scenario: Login com matrícula inválida
    Given que estou na página de login
    And insiro minha matrícula inválida
    And insiro minha senha válida
    When clico no botão de login
    Then é exibida uma mensagem informando que a matrícula é inválida

Scenario: Login com senha inválida
    Given que estou na página de login
    And insiro minhas credenciais válidas
    And insiro minha senha inválida
    When clico no botão de login
    Then é exibida uma mensagem informando que a senha é inválida.

Feature: Alterar dados do usuário

Scenario: Alterar Matricula do Usuário
    Given que estou na tela de alteração de dados
    And meu usuário está logado
    And minha matrícula atual é "2022012345"
    When eu altero minha matrícula para "2022012346"
    Then minha nova matrícula deve ser exibida na tela de perfil

Scenario: Alterar Nome do Usuário
    Given que estou na tela de alteração de dados
    And meu usuário está logado
    And meu nome atual é "João da Silva"
    When eu altero meu nome para "Maria da Silva"
    Then meu novo nome deve ser exibido na tela de perfil

Scenario: Alterar E-mail do Usuário
    Given que estou na tela de alteração de dados
    And meu usuário está logado
    And meu e-mail atual é "joao.silva@minhafaculdade.edu.br"
    When eu altero meu e-mail para "maria.silva@minhafaculdade.edu.br"
    Then meu novo e-mail deve ser exibido na tela de perfil

Scenario: Alterar Curso do Usuário
    Given que estou na tela de alteração de dados
    And meu usuário está logado
    And meu curso atual é "Engenharia de Software"
    When eu altero meu curso para "Ciência da Computação"
    Then meu novo curso deve ser exibido na tela de perfil

Scenario: Alterar Imagem do Usuário
    Given que estou na tela de alteração de dados
    And meu usuário está logado
    And minha imagem atual é "foto.png"
    When eu seleciono uma nova imagem "foto2.png"
    Then minha nova imagem deve ser exibida na tela de perfil