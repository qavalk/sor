// Reviews carousel arrows
const track = document.getElementById('track');
document.querySelectorAll('.arrow').forEach(b => b.addEventListener('click', () => {
  const card = track.querySelector('.review');
  track.scrollBy({ left: (card.offsetWidth + 24) * +b.dataset.dir, behavior: 'smooth' });
}));

// Full menu
// Menu content transcribed from the restaurant's PDFs (Dinner 10/08, Lunch 10/08, Beverage 08/07).
// To update a dish or price, edit it here.
const RAW = '*Items are served raw or undercooked. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.';

const suppli = (carbonara, funghi, nduja) => ({
  title: 'Supplì', note: 'Roman street croquettes',
  items: [
    ['Carbonara', 'smoked eggplant pecorino crema', carbonara],
    ['Funghi e Fontina', 'minted artichoke purée', funghi],
    ["'Nduja e Scamorza", 'lemon aioli', nduja],
  ],
});

const MENUS = {
  dinner: {
    pdf: 'https://www.romangodoffire.com/s/Roman-Dinner-1008-WEB.pdf',
    groups: [
      suppli(15, 16, 17),
      { title: 'Small Plates to Share', items: [
        ['Pizza Bianca', 'whipped ricotta, honey', 16],
        ['Lingua di Pizza alla Romana', 'tomato, pecorino, guanciale', 14],
        ['Smoked Ostrica', 'roasted oysters, smoked mussel aioli, spicy guanciale butter, breadcrumb', 24],
        ['Gamberoni alla Griglia', 'wood grilled shrimp, salsa verde, Calabrian chile, grilled lemon', 22],
        ['Vongole', 'stewed Manila clams with baby tomatoes & grilled focaccia', 26],
        ['Fritto Misto', 'calamari, shrimp, zucchini, artichokes, peppers, green olives, lemon aioli', 19],
        ['Burrata con Peperonata', 'pesto di rucola, capers, tomato passata', 16],
        ['Tartare di Manzo*', 'prime beef, truffle purée, crushed hazelnuts, chives, caper, tallow crostini', 28],
        ['Carpaccio di Tonno', 'oil-cured black olives, parsley gremolata, smoked sea salt, caper berries', 24],
      ]},
      { title: 'Salads', items: [
        ['Panzanella', 'stracciatella, country-style bread, cucumber, heirloom tomato, baby arugula, pickled red onion', 18],
        ['Insalata Romana', 'romaine, shaved fennel, olives, radishes, baby tomatoes, pecorino, romana vinaigrette', 15],
        ['Caesar', 'truffle dressing, romaine, garlic breadcrumb', 16],
      ]},
      { title: 'Pasta Romana', items: [
        ['Tonnarelli alla Carbonara', 'egg yolk, guanciale, pecorino, parmigiano, black pepper', 22],
        ["Rigatoni all'Amatriciana", 'tomato passata, guanciale, pecorino', 24],
        ['Linguine alle Vongole', 'clams, soffritto, parsley', 32],
        ["Gnocchi Burro d'Oro", 'potato gnocchi, tomato, basil, butter, stracciatella', 26],
        ['Gnudi alla Gricia', 'ricotta, guanciale, pecorino', 28],
        ['Spaghetti al Nero di Seppia con Aragosta', 'lobster, ginger soffritto, tomato, basil mollica', 52],
      ]},
      { title: 'Bistecca', note: 'Cooked over live wood fire with white oak & red hardwood', items: [
        ['NY Strip 12oz*', '', 58],
        ['Filet 8oz*', '', 62],
        ['Ribeye 16oz*', '', 72],
        ['Porterhouse alla Brace 32oz*', '', 139],
      ]},
      { title: 'Main Course', items: [
        ['Chicken Cacciatore', 'grilled half chicken, hunter-style ragù', 29],
        ['Branzino in Umido', 'grilled branzino with stewed cipollini onion, olive & tomato', 39],
        ['Pescare alla Romana', 'chicory, spinach, tomatoes, saffron, currants, pignoli nuts', 37],
      ]},
      { title: 'Sides', items: [
        ['Smoked Fontina Potatoes', 'salsa verde', 14],
        ['Chicories', 'lemon, olive oil', 12],
        ['Wood Grilled Artichokes', 'pecorino, mint', 16],
        ['Carrots', 'agrodolce, dukkah, honey stracciatella', 14],
        ['Baby Zucchini', 'pecorino, arugula pesto, pistachio', 13],
        ['Fregola Cacio e Pepe', '', 13],
      ]},
      { title: 'Desserts', items: [
        ['Chocolate Olive Oil Cake', 'blueberry compote, whipped mascarpone, EVOO', 14],
        ['Crostata di Ricotta', 'whipped cream, almonds, sour cherries', 14],
        ['Cannoli Molisano', 'vanilla crema pasticcera', 10],
        ['Soft-Serve Gelato', 'red wine pear compote with honey walnuts', 10],
        ['Amaro Affogato', 'house gelato, chilled espresso, house amaro blend', 16],
        ['Pick Me Up', 'cognac, aged rum, biscotti liqueur, amaro, espresso, mascarpone foam', 18],
      ]},
      { title: 'After Dinner', items: [
        ['Tawny Port, Dow 20 yr', '2oz', 16],
        ['Vin Santo, Bocarelli', '2oz', 18],
        ['Tokaji, Royal Tokaji 5 Red Label', '2oz', 21],
        ['House Limoncello', '', 13],
        ['Espresso', '', 4],
        ['Latte', '', 5],
        ['Cappuccino', '', 5],
      ]},
      { title: 'Amaro & Sambuca', items: [
        ['Meletti', '', 14], ['Fernet Branca', '', 16], ['Branca Menta', '', 15],
        ['Averna', '', 16], ['Montenegro', '', 16], ['Cynar', '', 16], ['Braulio', '', 16],
        ['Vecchio Amaro del Capo', '', 15], ['Lucano', '', 15], ['Nonino', '', 16], ['Ramazzotti', '', 14],
        ['Sambuca Molinari Extra', '', 13], ['Sambuca Antica', '', 13], ['Sambuca Romana Black', '', 14],
      ]},
    ],
  },

  lunch: {
    pdf: 'https://www.romangodoffire.com/s/Roman-Lunch-1008-WEB.pdf',
    intro: 'Il Pranzo',
    groups: [
      suppli(15, 16, 17),
      { title: 'Small Plates to Share', items: [
        ['Pizza Bianca', 'whipped ricotta, honey', 16],
        ['Lingua di Pizza alla Romana', 'tomato, pecorino, guanciale', 14],
        ['Burrata con Peperonata', 'pesto di rucola, capers, tomato passata', 15],
        ['Fritto Misto', 'calamari, shrimp, zucchini, artichokes, peppers, green olives, lemon aioli', 19],
        ['Tartare di Manzo*', 'prime beef, truffle purée, crushed hazelnuts, chives, caper, tallow crostini', 28],
        ['Carpaccio di Tonno', 'oil-cured black olives, parsley gremolata, smoked sea salt, caper berries', 24],
        ['Wood Grilled Artichokes', 'pecorino, mint', 16],
        ['Carrots', 'agrodolce, dukkah, honey stracciatella', 14],
        ['Baby Zucchini', 'pecorino, arugula pesto, pistachio', 13],
      ]},
      { title: 'Salads', note: 'Add protein: steak 12 · chicken 9 · shrimp 10', items: [
        ['Panzanella', 'stracciatella, country-style bread, cucumber, heirloom tomato, baby arugula, pickled red onion', 18],
        ['Insalata Romana', 'romaine, shaved fennel, olives, radishes, baby tomatoes, pecorino, romana vinaigrette', 14],
        ['Caesar', 'truffle dressing, romaine, garlic breadcrumb', 15],
      ]},
      { title: 'Pasta Romana', items: [
        ['Tonnarelli alla Carbonara', 'egg yolk, guanciale, pecorino, parmigiano, black pepper', 18],
        ["Rigatoni all'Amatriciana", 'tomato passata, guanciale, pecorino', 22],
        ['Linguine alle Vongole', 'clams, soffritto, parsley', 28],
        ["Gnocchi Burro d'Oro", 'potato gnocchi with tomato, basil, butter, stracciatella', 24],
      ]},
      { title: 'Panino', note: 'Served with arugula salad or Roman fries · 11:00am – 3:30pm', items: [
        ['Porchetta', 'porchetta, spiced aioli, salsa verde, radicchio, arugula', 18],
        ['Prosciutto', 'prosciutto, stracciatella, arugula, burnt tomato marmellata, aged balsamico', 17],
        ['Melanzane', 'crispy eggplant, smoked eggplant crema, passata, pecorino, basil', 16],
        ['Pollo', 'grilled chicken, Calabrian chili, lemon aioli, sautéed chicories', 17],
      ]},
      { title: 'From the Fire', items: [
        ['Bistecca alla Romana', '6oz NY strip steak served with Roman fries, arugula salad and salsa verde', 28],
      ]},
      { title: 'Desserts', items: [
        ['Chocolate Olive Oil Cake', 'blueberry compote, whipped mascarpone, EVOO', 14],
        ['Cannoli Molisano', 'vanilla crema pasticcera', 10],
        ['Soft-Serve Gelato', 'red wine pear compote with honey walnuts', 10],
      ]},
    ],
  },

  drinks: {
    pdf: 'https://www.romangodoffire.com/s/Roman-Beverage-0807-WEB.pdf',
    intro: 'Collezione Vino · glass / bottle',
    groups: [
      { title: 'Sparkling', small: 'glass / bottle', items: [
        ["Moscato d'Asti, Bartenura", 'Piedmont, Italy', '13 / 48'],
        ['Prosecco, Zardetto', 'Veneto, Italy', '14 / 52'],
        ['Brut, Ferrari', 'Trentino, Italy', '26 / 100'],
        ['Brut Rosé, La Contesse', 'Veneto, Italy', '16 / 60'],
        ['Lambrusco, Lucci Secco', 'Emilia-Romagna, Italy', '14 / 52'],
      ]},
      { title: 'White', small: 'glass / bottle', items: [
        ['Pinot Grigio, Terlato', 'Friuli-Venezia Giulia, Italy', '15 / 56'],
        ['Sauvignon Blanc, Via Alpina', 'Friuli-Venezia Giulia, Italy', '16 / 60'],
        ['Soave Classico, Pieropan', 'Veneto, Italy', '14 / 52'],
        ['Frascati, Terre Porzione Superiore', 'Lazio, Italy', '16 / 60'],
        ['Chardonnay, Au Bon Climat', 'Santa Barbara, California', '17 / 64'],
        ['Chardonnay, Lamelle il Borro', 'Tuscany, Italy', '25 / 96'],
      ]},
      { title: 'Skin Contact', small: 'glass / bottle', items: [
        ['Ramato, Tonnino Pizzo di Gallo', 'Sicily, Italy', '15 / 56'],
        ['Rosé, Planeta', 'Sicily, Italy', '14 / 52'],
      ]},
      { title: 'Red', small: 'glass / bottle', items: [
        ['Pinot Noir, Fundamental', 'Central Coast, California', '15 / 56'],
        ['Chianti Classico, Poggio Torselli', 'Tuscany, Italy', '20 / 76'],
        ["Nero d'Avola, Feudo Maccari Saia", 'Sicily, Italy', '16 / 60'],
        ['Barolo, GD Vajra Albe', 'Piedmont, Italy', '30 / 114'],
        ['Super Tuscan, Tenuta Sette Cieli Yantra', 'Tuscany, Italy', '22 / 84'],
        ['Cabernet Sauvignon, Soldier', 'Columbia Valley, Washington', '18 / 68'],
        ['Cabernet Sauvignon, Truchard', 'Napa Valley, California', '25 / 96'],
      ]},
      { title: 'Dealcoholized', small: 'glass / bottle', items: [
        ['N/A Brut, Noughty', 'La Mancha, Spain', '16 / 60'],
        ['N/A Lambrusco, Ruinite Zero', 'Emilia-Romagna, Italy', '12 / 44'],
      ]},
      { title: 'Spritz', small: '17', items: [
        ['Venetian', 'aperitivo rosso, strawberry-rhubarb liqueur, prosecco, club soda, grapefruit, olive', ''],
        ['Otto', 'elderflower liqueur, pear eau de vie, prosecco, club soda, mint', ''],
        ['Amalfi', 'house limoncello, basil eau de vie, prosecco, club soda', ''],
      ]},
      { title: 'Negroni', small: '17', items: [
        ['Rosso', 'New Western gin, aperitivo rosso, vermouth dolce, sea salt', ''],
        ['Bianco', 'London dry gin, aperitivo bianco, vermouth bianco, black lemon', ''],
        ['Verde', 'Old Tom gin, aperitivo verde, vermouth secco, cucumber, elixir vegetal', ''],
      ]},
      { title: 'House Cocktails', items: [
        ['Libertina', 'rosemary vodka, house limoncello, herbal liqueur, lemon, parsley', 16],
        ['Forest Fruits', 'blueberry vodka, amaro, bay leaf, lime, club soda', 16],
        ['Strawberry Tree', 'gin, strawberry sambuca, oregano, lemon, Mediterranean tonic', 16],
        ['Coast of the Gods', 'blanco tequila, lychee rum, aperitivo rosa, coconut water, lime', 16],
        ['Margherita Calabrese', 'reposado tequila, bergamot liqueur, lime, Calabrian chili honey', 16],
        ['Vespa', 'tarragon vodka, tomato gin, aperitivo pesca, olive oil', 17],
        ['Antiquity', 'bourbon, Spanish brandy, Chianti syrup, bitters blend', 17],
        ['Pick Me Up', 'cognac, aged rum, biscotti liqueur, amaro, espresso, mascarpone foam', 18],
      ]},
      { title: 'Zero Proof', small: '14', items: [
        ['Saint Berry', 'N/A lambrusco, strawberry, oregano, lemon', ''],
        ['Agrodolce', 'N/A limoncello, orange, grapefruit, basil', ''],
        ['Laurel Crown', 'N/A amaro, quince, bay leaf, lemon, Crodino', ''],
        ['The Imposter', 'N/A sparkling wine, N/A aperitif, rhubarb, blood orange', ''],
      ]},
      { title: 'Birra', items: [
        ['Draft', 'Fate Brewing Local Lager · Huss Brewing Devil’s Halo Amber · The Shop Beer Co Church Music Hazy IPA', 7],
        ['Bottle', 'Coors American Lager · Peroni Italian Pilsner · Peroni 0.0 Zero Proof', 6],
      ]},
    ],
  },
};

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function render(key) {
  const m = MENUS[key];
  const groups = m.groups.map(g => `
    <div class="group">
      <h3>${esc(g.title)}${g.small ? `<small>${esc(g.small)}</small>` : ''}</h3>
      ${g.note ? `<p class="sub">${esc(g.note)}</p>` : ''}
      ${g.items.map(([name, desc, price]) => `
        <div class="item">
          <div class="row"><h4>${esc(name)}</h4>${price !== '' ? `<span class="dots"></span><span class="price">${esc(price)}</span>` : ''}</div>
          ${desc ? `<p>${esc(desc)}</p>` : ''}
        </div>`).join('')}
    </div>`).join('');
  document.getElementById('menu-' + key).innerHTML = `
    ${m.intro ? `<p class="menu-intro">${esc(m.intro)}</p>` : ''}
    <div class="cols">${groups}</div>
    ${key !== 'drinks' ? `<p class="disclaimer">${RAW}</p>` : ''}
    <p class="pdf"><a class="btn-ghost" href="${m.pdf}" target="_blank" rel="noopener">Download the printable PDF ↗</a></p>`;
}

function show(key) {
  if (!MENUS[key]) key = 'dinner';
  document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.menu === key));
  document.querySelectorAll('.menu-panel').forEach(s => s.hidden = s.id !== 'menu-' + key);
}

Object.keys(MENUS).forEach(render);
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => show(t.dataset.menu)));

// "Dinner / Lunch / Beverage Menu" buttons: open that tab and scroll to the full menu.
document.querySelectorAll('[data-open-menu]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  show(a.dataset.openMenu);
  document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' });
}));
show('dinner');
