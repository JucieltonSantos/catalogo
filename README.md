# Catálogo de Produtos - Next.js

Este é um projeto [Next.js](https://nextjs.org) iniciado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Arquitetura MVVM

O projeto utiliza a arquitetura **MVVM (Model-View-ViewModel)** nas pastas **Produtos** e **Login**.  
Essa separação é fundamental para garantir:

- **Organização:** Cada camada tem sua responsabilidade bem definida.
- **Manutenção:** Alterações na lógica de negócio não afetam a interface e vice-versa.
- **Testabilidade:** Facilita a criação de testes unitários e de integração.
- **Escalabilidade:** Permite que o projeto cresça de forma estruturada.

**Model:** Define as entidades e regras de negócio.  
**View:** Responsável apenas pela exibição dos dados e interação com o usuário.  
**ViewModel:** Intermedia a comunicação entre Model e View, processando dados e ações.

## .nvmrc

O projeto contém o arquivo `.nvmrc`, que especifica a versão recomendada do Node.js para desenvolvimento.  
**Importância:**  
- Garante que todos os desenvolvedores utilizem a mesma versão do Node.js, evitando problemas de compatibilidade.
- Facilita a configuração do ambiente em diferentes máquinas e servidores.

Para usar, basta rodar:
```bash
nvm use
```
(Com o [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) (https://github.com/coreybutler/nvm-windows/releases) instalado.)

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Tecnologias e Recursos

- **Next.js** para renderização SSR/SSG e roteamento.
- **React** para construção dos componentes de interface.
- **MVVM** para organização das camadas de negócio e visualização.
- **Jest** e **Testing Library** para testes automatizados.

## Deploy

A maneira mais fácil de publicar este projeto é utilizando a [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---
