const catalogCategories = {
  anime: 'Animes e mangás', games: 'Games', cinema: 'Filmes e séries',
  hqs: 'HQs e livros', figures: 'Action figures', apparel: 'Camisetas e acessórios',
  cards: 'Cards e colecionáveis', decor: 'Decoração geek'
};

const catalogProducts = [
  { category: 'anime', name: 'Mangá — Crônicas do Portal, Vol. 1', price: 34.90, image: 'category-anime.png', description: 'Uma aventura de fantasia para começar sua coleção.' },
  { category: 'anime', name: 'Mangá — Academia das Estrelas, Vol. 1', price: 39.90, image: 'event-manga.png', description: 'Novos heróis, amizades e mistérios entre universos.' },
  { category: 'games', name: 'Controle Nebulosa RGB', price: 199.90, image: 'controller-xbox-realista.webp', alt: 'Imagem ilustrativa de controle com skin de galáxia azul e roxa no estilo Xbox, com analógicos assimétricos e botões coloridos, apoiado sobre uma mesa de madeira com luz natural', description: 'Controle com visual RGB para completar seu setup.' },
  { category: 'games', name: 'Controle Galaxy — Edição Azul', price: 179.90, image: 'controller-playstation-realista.webp', alt: 'Imagem ilustrativa de controle com skin de galáxia azul e roxa no estilo PlayStation, com analógicos simétricos, apoiado sobre uma mesa de madeira com luz natural', description: 'Design cósmico para suas próximas aventuras.' },
  { category: 'cinema', name: 'Miniatura de Claquete — Cinema Club', price: 49.90, image: 'category-cinema.png', description: 'Uma referência ao cinema para decorar sua estante.' },
  { category: 'cinema', name: 'Réplica de Rolo de Filme — Retrô', price: 89.90, image: 'product-film-reel.png', description: 'Peça decorativa para quem ama histórias na tela.' },
  { category: 'hqs', name: 'Velocista Atrasado — Edição Tô Chegando', price: 44.90, image: 'hq-velocista-mesa-natural.webp', alt: 'Livro de HQ sobre uma mesa escura com livros e quadrinhos espalhados naturalmente ao fundo, com capa ilustrada de velocista original de traje vermelho escuro, preto e dourado, olhando preocupado para um celular enquanto corre por uma cidade futurista chuvosa com trilhas de energia', description: 'HQ de humor sobre um herói que cruza a cidade em segundos, mas continua atrasado. Entre rastros de energia, chuva e mensagens no celular, o próximo compromisso é sua corrida mais difícil.' },
  { category: 'hqs', name: 'Aranha CLT — Edição Boleto Sentido Aranha', price: 69.90, image: 'hq-aranha.webp', alt: 'Revista em quadrinhos fictícia com capa ilustrada de um herói urbano mascarado entre prédios e contas de aluguel', description: 'HQ de humor sobre um herói urbano que salva a cidade, chega atrasado e precisa pagar aluguel. Combater o crime é só mais uma tarefa entre um boleto e outro.' },
  { category: 'figures', edition: 'yasuo', name: 'Hasagi 0/10 — Edição Powerspike', price: 349.90, image: 'figure-yasuo.webp', alt: 'Action figure de Yasuo com katana metálica, traje azul ioniano e base com efeito de vento', description: 'Action Figure premium inspirada no imperdoável. Katana metálica, traje ioniano detalhado e base com efeito de vento.', character: 'Inspirado em Yasuo, o espadachim de Ionia de League of Legends, cuja jornada une domínio do vento e busca por redenção.', included: ['Figura conceitual com traje ioniano detalhado', 'Katana com acabamento metálico', 'Base de exposição com efeito de vento'] },
  { category: 'figures', edition: 'yone', name: 'Irmão Ressuscitado — Edição 0/2', price: 389.90, image: 'figure-yone.webp', alt: 'Action figure de Yone com máscara azakana, duas espadas e base com névoa vermelha espectral', description: 'Action Figure premium do caçador espiritual. Duas espadas, máscara azakana e base com névoa vermelha espectral.', character: 'Inspirado em Yone, irmão de Yasuo e caçador espiritual de League of Legends, que percorre a fronteira entre os mundos material e espiritual.', included: ['Figura conceitual do caçador espiritual', 'Duas espadas e máscara azakana', 'Base de exposição com névoa vermelha espectral'] },
  { category: 'apparel', name: 'Camiseta — Órbita Cósmica', price: 79.90, image: 'category-apparel.png', description: 'Estampa de galáxia para levar seu universo com você.' },
  { category: 'apparel', name: 'Kit de Pins — Explorador Estelar', price: 29.90, image: 'product-cosmic-pins.png', description: 'Planeta, lua e estrela para personalizar acessórios.' },
  { category: 'cards', name: 'Booster Universo Arcano', price: 39.90, image: 'catalogo-neon.png', crop: 'cards', description: 'Cards de fantasia com arte de mundos celestiais.' },
  { category: 'cards', name: 'Deck — Castelos do Cosmos', price: 89.90, image: 'category-cards.png', description: 'Uma coleção temática para fãs de universos mágicos.' },
  { category: 'decor', name: 'Luminária Orbital RGB', price: 129.90, image: 'catalogo-neon.png', crop: 'lamp', description: 'Uma esfera de luz cósmica para seu cantinho geek.' },
  { category: 'decor', name: 'Luminária Galáxia — Anéis Astrais', price: 159.90, image: 'category-decor.png', description: 'Luz de galáxia com anéis e base de exposição.' }
];

const catalogGrid = document.querySelector('#catalog-grid');
const catalogCount = document.querySelector('#catalog-count');
const catalogFilters = document.querySelector('#catalog-filters');
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function renderCatalog(category = null) {
  const products = catalogProducts.filter(product => category === 'all' || product.category === category);
  catalogGrid.replaceChildren();
  catalogGrid.hidden = category === null;
  for (const product of products) {
    const card = document.createElement('article');
    card.className = 'product-card catalog-product';
    if (product.edition) card.classList.add('premium-card', `premium-${product.edition}`);
    const art = document.createElement('div');
    art.className = 'catalog-art';
    if (product.crop) {
      art.classList.add('catalog-crop', `catalog-crop-${product.crop}`);
      art.style.backgroundImage = `url('assets/images/${product.image}')`;
      art.setAttribute('role', 'img');
      art.setAttribute('aria-label', `Imagem ilustrativa: ${product.name}`);
    } else {
      const img = document.createElement('img');
      img.src = `assets/images/${product.image}`;
      img.alt = product.alt || `Imagem ilustrativa: ${product.name}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      art.append(img);
    }
    const info = document.createElement('div');
    info.className = 'product-info';
    const label = document.createElement('p');
    label.textContent = catalogCategories[product.category];
    const name = document.createElement('h3');
    name.textContent = product.name;
    const description = document.createElement('div');
    description.className = 'catalog-description';
    description.textContent = product.description;
    const price = document.createElement('strong');
    price.textContent = currency.format(product.price);
    const action = document.createElement('a');
    action.className = 'catalog-interest';
    action.textContent = 'Consultar item ↗';
    PortalContacts.configure(action, 'whatsapp', 'Olá! Quero saber mais sobre: ' + product.name);
    info.append(label, name, description, price, action);
    card.append(art, info);
    if (product.edition) enhancePremiumCard(card, product);
    catalogGrid.append(card);
  }
  catalogCount.textContent = category === null
    ? 'Escolha uma categoria acima para descobrir seus produtos.'
    : `${products.length} itens · ${category === 'all' ? 'Todas as categorias' : catalogCategories[category]}`;
  catalogFilters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
}

for (const [category, name] of [['all', 'Todos'], ...Object.entries(catalogCategories)]) {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.category = category;
  button.textContent = name;
  button.addEventListener('click', () => {
    renderCatalog(category);
    document.querySelector('#catalogo').scrollIntoView({
      block: 'start',
      behavior: 'instant'
    });
  });
  catalogFilters.append(button);
}
document.querySelectorAll('.category-card[data-category]').forEach(link => {
  link.addEventListener('click', () => renderCatalog(link.dataset.category));
});
document.querySelectorAll('[data-catalog-all]').forEach(link => link.addEventListener('click', () => renderCatalog('all')));



const productDialog = document.createElement('dialog');
productDialog.className = 'product-dialog';
productDialog.setAttribute('aria-labelledby', 'product-dialog-title');
document.body.append(productDialog);
let dialogTrigger;
function openProductDetails(product, trigger) {
  dialogTrigger = trigger;
  productDialog.replaceChildren();
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'dialog-close';
  close.textContent = 'Fechar ×';
  close.addEventListener('click', () => productDialog.close());
  const image = document.createElement('img');
  image.src = `assets/images/${product.image}`;
  image.alt = product.alt;
  const details = document.createElement('div');
  details.className = 'dialog-details';
  const title = document.createElement('h2');
  title.id = 'product-dialog-title';
  title.textContent = product.name;
  const bio = document.createElement('p');
  bio.textContent = product.character;
  const description = document.createElement('p');
  description.textContent = product.description;
  const heading = document.createElement('h3');
  heading.textContent = 'Itens inclusos na proposta';
  const list = document.createElement('ul');
  product.included.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  const note = document.createElement('p');
  note.className = 'concept-note';
  note.textContent = 'Item conceitual inspirado em universo de fantasia. Projeto acadêmico fictício · imagem e preço demonstrativos.';
  const action = document.createElement('a');
  action.className = 'catalog-interest';
  action.textContent = `Consultar item · ${currency.format(product.price)} ↗`;
  PortalContacts.configure(action, 'whatsapp', 'Olá! Quero saber mais sobre: ' + product.name);
  details.append(title, bio, description, heading, list, note, action);
  productDialog.append(close, image, details);
  productDialog.showModal();
  document.body.classList.add('product-dialog-open');
  close.focus();
}
productDialog.addEventListener('close', () => {
  document.body.classList.remove('product-dialog-open');
  if (dialogTrigger?.isConnected) dialogTrigger.focus();
});
productDialog.addEventListener('click', event => { if (event.target === productDialog) { const box = productDialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) productDialog.close(); } });
function enhancePremiumCard(card, product) {
  const art = card.querySelector('.catalog-art');
  const imageButton = document.createElement('button');
  imageButton.type = 'button';
  imageButton.className = 'premium-image-button';
  imageButton.setAttribute('aria-label', `Ver detalhes de ${product.name}`);
  imageButton.append(...art.childNodes);
  imageButton.addEventListener('click', () => openProductDetails(product, imageButton));
  const badge = document.createElement('span');
  badge.className = 'premium-badge';
  badge.textContent = 'DUEL EDITION';
  art.append(imageButton);
  card.querySelector('.product-info > p').after(badge);
  const title = card.querySelector('h3');
  const titleButton = document.createElement('button');
  titleButton.type = 'button';
  titleButton.className = 'premium-title-button';
  titleButton.textContent = product.name;
  titleButton.addEventListener('click', () => openProductDetails(product, titleButton));
  title.replaceChildren(titleButton);
  const note = document.createElement('p');
  note.className = 'concept-note';
  note.textContent = 'Item conceitual inspirado em universo de fantasia.';
  card.querySelector('.catalog-interest').before(note);
}
const featuredFigure = document.querySelector('[data-featured-figure]');
if (featuredFigure) {
  const product = catalogProducts.find(item => item.edition === 'yasuo');
  featuredFigure.classList.add('premium-card', 'premium-yasuo');
  enhancePremiumCard(featuredFigure, product);
}

const requestedCategory = new URLSearchParams(window.location.search).get('category');
renderCatalog(requestedCategory === 'all' || Object.hasOwn(catalogCategories, requestedCategory) ? requestedCategory : 'figures');
