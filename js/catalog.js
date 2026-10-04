const catalogCategories = {
  anime: 'Animes e mangás', games: 'Games', cinema: 'Filmes e séries',
  hqs: 'HQs e livros', figures: 'Action figures', apparel: 'Camisetas e acessórios',
  cards: 'Cards e colecionáveis', decor: 'Decoração geek'
};

const catalogProducts = [
  { category: 'anime', name: 'Mangá — Crônicas do Portal, Vol. 1', price: 34.90, image: 'category-anime.png', description: 'Uma aventura de fantasia para começar sua coleção.' },
  { category: 'anime', name: 'Mangá — Academia das Estrelas, Vol. 1', price: 39.90, image: 'event-manga.png', description: 'Novos heróis, amizades e mistérios entre universos.' },
  { category: 'games', name: 'Controle Nebulosa RGB', price: 199.90, image: 'category-games.png', description: 'Controle com visual RGB para completar seu setup.' },
  { category: 'games', name: 'Controle Galaxy — Edição Azul', price: 179.90, image: 'catalogo-neon.png', crop: 'game', description: 'Design cósmico para suas próximas aventuras.' },
  { category: 'cinema', name: 'Miniatura de Claquete — Cinema Club', price: 49.90, image: 'category-cinema.png', description: 'Uma referência ao cinema para decorar sua estante.' },
  { category: 'cinema', name: 'Réplica de Rolo de Filme — Retrô', price: 89.90, image: 'product-film-reel.png', description: 'Peça decorativa para quem ama histórias na tela.' },
  { category: 'hqs', name: 'HQ — Sentinelas do Multiverso', price: 44.90, image: 'category-hqs.png', description: 'Heróis originais em uma aventura entre dimensões.' },
  { category: 'hqs', name: 'Livro — Atlas dos Mundos Perdidos', price: 69.90, image: 'product-fantasy-book.png', description: 'Fantasia e exploração para sua próxima leitura.' },
  { category: 'figures', name: 'Guardião Neon — Edição Zero', price: 249.90, image: 'catalogo-neon.png', crop: 'figure', description: 'Guerreiro futurista com base de exposição.' },
  { category: 'figures', name: 'Cavaleiro Astral — Coleção Eclipse', price: 289.90, image: 'category-figures.png', description: 'Armadura detalhada e capa para sua coleção.' },
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
      img.alt = `Imagem ilustrativa: ${product.name}`;
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
  button.addEventListener('click', () => renderCatalog(category));
  catalogFilters.append(button);
}
document.querySelectorAll('.category-card[data-category]').forEach(link => {
  link.addEventListener('click', () => renderCatalog(link.dataset.category));
});
document.querySelectorAll('[data-catalog-all]').forEach(link => link.addEventListener('click', () => renderCatalog('all')));
renderCatalog('figures');
