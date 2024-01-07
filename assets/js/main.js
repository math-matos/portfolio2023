import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".prodigiocode",
  `Trabalhei criando um instagram especializado em dicas
  para quem quer entrar na area de programação ou já esta ha um tempo,
  o trabalho consistia em criar conteúdos para os posts.
  Alguns temas dos conteúdos realizados
  foram: React, Redux, TypeScript, Testes, Next.js,
  React Hook Form e sass.`,
  "Professor conteudista e social media",
  "Prodigio Code",
  "Set 2022 - Nov 2023 (1 ano e 2 meses)"
);

hoverChangeExperience(
  ".freelancer",
  `Faço alguns trabalhos como freelancer fazendo todo os tipos de projetos 
  e automações, desde landing pages até aplicações SaaS. Utilizando: React, Tailwind, NextJs e SQL`,
  "Desenvolvedor de Software",
  "Freelancer",
  "Jul 2022 - Jan 2023 (7 meses)"
);

hoverChangeExperience(
  ".embraer",
  `Colaborei ativamente nas análises e controle de dados da engenharia.
  Otimizei planilhas, sistemas e softwares para eficiência operacional.
  Facilitei a comunicação entre áreas, apoiando clientes internos.
  Envolvimento em projetos complexos, promovendo aprimoramento contínuo.
  Desenvolvi habilidades analíticas e resolução de problemas na engenharia de software.`,
  "Desenvolvedor de Software",
  "Embraer",
  "Jan 2024 - Atualmente"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".node",
  "Node.js é um ambiente de execução de código JavaScript do lado do servidor."
);
hoverChangeDescription(
  ".typescript",
  "O TypeScript é uma extensão do JavaScript que adiciona tipagem estática ao código, facilitando o desenvolvimento de aplicações mais robustas."
);
hoverChangeDescription(
  ".SQL",
  "SQL é uma linguagem de programação utilizada para trabalhar com bancos de dados relacionais."
);
hoverChangeDescription(
  ".powerbi",
  "O Power BI é uma ferramenta de avaliação e visualização de dados desenvolvida pela Microsoft que permite transformar dados em informações coerentes, visualmente envolventes e interativas."
);