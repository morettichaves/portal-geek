# Portal Geek

Projeto acadêmico fictício de **Visual Design — Zion**, em HTML, CSS e JavaScript puro. Loja, produtos, preços, personagens, depoimentos, localização e propostas de eventos são demonstrativos.

## Melhorias implementadas

- Comunidade com uma cena de amigos jogando, usando camisetas e compartilhando colecionáveis; eventos com uma segunda cena exclusiva de encontro geek. Imagens sem repetição, locais e otimizadas em WebP.
- Retratos da equipe e dos personagens dos feedbacks com recortes maiores e textos alternativos; fundador destacado. Logo, paleta neon e catálogo existente preservados.
- Remoção da nota 4,9 e da contagem fictícia de clientes. Depoimentos identificados como fictícios e eventos sem datas ou inscrições que possam parecer reais.
- Acesso direto à página de links pelo botão “Entrar no Portal” na abertura do site e pelo atalho “Links” no menu. Botão “Explorar encontros” ao lado dos dois botões iniciais, com destino à seção 05 / Comunidade Portal Geek. Os três botões têm dimensões e alinhamento padronizados; “Explorar encontros” usa destaque roxo da identidade visual.
- Página independente em `pages/linktree.html`, com botões grandes para site, catálogo, eventos, WhatsApp, Instagram e retorno ao início.
- Contatos centralizados em `js/contacts.js`; mensagens específicas para produtos, eventos e visitantes da página de links.
- Menu com estado acessível e fechamento por Escape, link para pular ao conteúdo, foco visível, conteúdo legível sem JavaScript e respeito global a movimento reduzido.
- Catálogo inicia com Action figures selecionado, mostrando somente os dois produtos dessa categoria. “Todos” ou “Ver catálogo completo” mostram os 16 produtos somente quando solicitados; filtros mantidos.

## Estrutura

```text
index.html                 Site, catálogo, equipe, comunidade, eventos e feedbacks
pages/linktree.html        Página independente para a bio
css/style.css              Identidade visual e layouts responsivos
js/contacts.js             Configuração única e montagem segura dos canais
js/script.js               Menu e animações progressivas
js/catalog.js              Produtos demonstrativos e filtros
assets/images/             Logo e imagens locais
```

URL esperada para colocar na bio será:

**https://morettichaves.github.io/portal-geek/pages/linktree.html**

Site: `https://morettichaves.github.io/portal-geek/`; catálogo: `https://morettichaves.github.io/portal-geek/index.html#catalogo`; eventos: `https://morettichaves.github.io/portal-geek/index.html#eventos`.

Os caminhos são relativos e compatíveis com `/portal-geek/`. Não foi feito push nem publicação; a disponibilidade pública dessas URLs depende da configuração do Pages. Há uma pasta externa com o mesmo nome nesta workspace: publique a raiz Git interna, que contém este README e `index.html`.

## Contatos autorizados e futuras alterações

O responsável autorizou manter o WhatsApp **+55 (21) 99999-9999** e informou o Instagram **[@portal_geek021](https://www.instagram.com/portal_geek021/)**. Ambos estão configurados e ativos no site e na página de links. O endereço do Instagram utiliza a URL direta, sem parâmetros de QR code. O e-mail demonstrativo anterior foi removido dos destinos ativos.

Em `js/contacts.js`, preencha `whatsapp` com código do país, DDD e número (somente dígitos), `instagram` com o nome de usuário (sem `@`) e defina `authorized: true` **somente após autorização do responsável**. Não coloque credenciais ou tokens neste arquivo público. Os destinos e mensagens serão aplicados automaticamente em ambas as páginas e nos cards, com texto do produto codificado na URL do WhatsApp. Não é necessário editar URLs em outros arquivos.

Se um contato for removido da configuração ou não estiver autorizado, o canal fica sem `href`, com `aria-disabled` e explicação visível. O caminho Instagram → bio exige inserir manualmente a URL da página de links no perfil autorizado; este projeto não altera o Instagram.

## Fontes das imagens

### Novas cenas desta revisão — 4 de outubro de 2026

| Arquivo | Fonte e natureza | Uso |
| --- | --- | --- |
| `assets/images/comunidade-encontro.webp` | Criada para este projeto pela ferramenta integrada OpenAI ImageGen; cena sintética, sem fotografia de clientes reais | Comunidade: amigos com camisetas cósmicas, jogos, controles e colecionável |
| `assets/images/evento-cosplay.webp` | Criada para este projeto pela ferramenta integrada OpenAI ImageGen; cena sintética | Eventos: encontro com cosplay original, camiseta, controle e miniatura |

Prompts utilizados (resumo do briefing efetivamente enviado):

1. Fotografia editorial ilustrativa de seis amigos adultos diversos em uma loja geek brasileira fictícia, reunidos em um jogo de mesa, com camisetas de estampas cósmicas, controles e um pequeno astronauta colecionável; entusiasmo e pertencimento, luz quente e ambiente azul/roxo, enquadramento horizontal, sem textos, logos ou personagens famosos.
2. Fotografia editorial ilustrativa de três amigos adultos em um encontro cosplay de loja geek fictícia: traje original de aventureira espacial violeta, camiseta gamer azul com controle e camiseta magenta com miniatura de robô; conversa espontânea, luz quente com azul/roxo, enquadramento horizontal, sem textos, logos ou personagens de franquias.

Geração pela ferramenta integrada, sem CLI/API externa. Originais PNG preservados na biblioteca local de imagens geradas; cópias WebP de até 1536 px entregues nesta pasta. As imagens geradas não têm uma licença de banco fotográfico ou atribuição a fotógrafo; uso sujeito aos termos aplicáveis da ferramenta. Não são apresentadas como fotos documentais. As legendas visíveis informam que foram geradas por IA.

### Arquivos anteriores — origem a confirmar pelo autor

O repositório recebido não registra autores, páginas de origem ou licenças das imagens preexistentes. Não é possível confirmar sua licença apenas pelos arquivos. Foram preservados para manter o projeto existente; não foram falsamente creditados a bancos de imagens.

- Logo: `portal-geek-logo.jpeg` — identidade original fornecida no projeto.
- Retratos da equipe utilizados: `equipe-rafa-v2.jpg`, `equipe-lia-v2.jpg`, `equipe-kai-v2.jpg`, `equipe-davi-v2.jpg`, `equipe-nina.jpg`.
- Retratos dos feedbacks utilizados: `avaliacao-marina.jpg`, `avaliacao-gabriel.jpg`, `avaliacao-ana.jpg`.
- Artes utilizadas: `hero-portal-geek.jpg`, `catalogo-neon.png`, `category-*.png`, `event-manga.png` (produto do catálogo), `product-film-reel.png`, `product-fantasy-book.png`, `product-cosmic-pins.png`.
- Outros arquivos antigos continuam na pasta, mas não são usados pelas novas cenas.

**Pendência para publicação:** o autor deve registrar a origem/licença das imagens anteriores, especialmente dos retratos, ou substituí-las por imagens próprias/autorizadas nos mesmos caminhos acima. Para fotografias de pessoas reais, confirme também autorização de uso de imagem. Não há arquivos novos ausentes nem referências a imagens que o autor ainda precise fornecer.

## Verificação

Validado em Microsoft Edge (Playwright): o site e a página de links em navegador com larguras de 360, 390, 768 e 1440 px, servindo o projeto sob `/portal-geek/`, sem imagens quebradas, rolagem horizontal ou erros de JavaScript. Também foram verificados filtros, entrada direta no catálogo, caminho da página de links até o catálogo, menu/Escape, imagens locais, JavaScript, conteúdo sem JavaScript e movimento reduzido. Canais sem autorização permanecem desativados; a conta e o recebimento real de mensagens deverão ser verificados quando os contatos forem informados.

Antes de publicar, revise visualmente os arquivos, confirme a documentação das imagens antigas e teste os destinos em um celular real.

### Atualização dos contatos

WhatsApp **+55 (21) 99999-9999** e Instagram **@portal_geek021** autorizados e ativados. Verificada a montagem dos links e das mensagens contextualizadas, sem enviar mensagens nem alterar o perfil. A existência da conta de WhatsApp e o recebimento das mensagens não foram verificados.
