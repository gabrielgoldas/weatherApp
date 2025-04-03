# WeatherApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

![Screenshot do Aplicativo](public/screenshot.png)

---

### **Visão Geral**
Este projeto foi desenvolvido com o objetivo de aprender e praticar conceitos relacionados ao desenvolvimento de aplicativos web utilizando **Angular**. Ele permite a busca por informações climáticas, exibindo dados como temperatura, umidade, condições do tempo e mais, com uma interface responsiva.

---

### **Tecnologias Utilizadas**
- **Angular**: Framework para desenvolvimento da aplicação web.
- **TypeScript**: Para melhorar a tipagem e organização do código.
- **HTML5 e CSS3**: Para estruturação e estilização do projeto.
- **OpenWeather**: Fonte de dados climáticos em tempo real.
- **Node.js**: Usado para gerenciamento de dependências com o npm.

---

### **O Que Foi Aprendido?**
- Consumo de APIs externas para integração de dados.
- Manipulação de estados e componentes no Angular.
- Criação de layouts responsivos utilizando **CSS3** e **Flexbox**.
- Implementação de boas práticas no desenvolvimento de SPAs (Single Page Applications).
- Uso de **TypeScript** para um desenvolvimento mais seguro e escalável.

---

### **Funcionalidades**
- Busca por previsão do tempo baseada no nome da cidade.
- Exibição de temperatura, umidade e descrição das condições climáticas.
- Interface responsiva adaptada para desktop e mobile.

---

### **Como Rodar o Projeto**

#### Pré-requisitos:
- Node.js instalado na máquina.
- Angular CLI instalada globalmente.

#### Passos:
1. Clone o repositório:
2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm serve
    ```

4. Adicione a API Key:

    • Adicione a pasta **environments** ao projeto:
    ```bash
    ng g environments
    ```
    • Dentro do arquivo **environments**, adicione o conteúdo:
    ```bash
    export const environment = {
        api: '',
    };
    ```
    • E dentro do arquivo **environments.development**, adicione o seguinte conteúdo:
    ```bash
    export const environment = {
        api: 'SUA_API_KEY_AQUI',
    };
    ```

5. Acesse o aplicativo no navegador:
    ```bash
    http://localhost:4200
    ```
 
    