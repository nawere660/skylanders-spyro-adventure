const elementStyles = {
  feu: { color: '#dc3545', text: '#fff', label: 'Feu' },
  eau: { color: '#0d6efd', text: '#fff', label: 'Eau' },
  terre: { color: '#795548', text: '#fff', label: 'Terre' },
  air: { color: '#0dcaf0', text: '#000', label: 'Air' },
  vie: { color: '#198754', text: '#fff', label: 'Vie' },
  magie: { color: '#6f42c1', text: '#fff', label: 'Magie' },
  tech: { color: '#6c757d', text: '#fff', label: 'Tech' },
  'mort-vivant': { color: '#343a40', text: '#fff', label: 'Mort-Vivant' }
};

const figurines = [
  { name: 'Stump Smash', element: 'vie', owned: true, stats: 'Attaque 8, Défense 8, Vitesse 5', improvements: 'Ronce écrasante, Racine enracinée, Coup de souche', description: 'Géant robuste et protecteur de la vie.' },
  { name: 'Stealth Elf', element: 'vie', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 9', improvements: 'Flèches sournoises, Pas furtif, Tempête de lames', description: 'Elfe silencieuse très rapide et agile.' },
  { name: 'Zook', element: 'vie', owned: true, stats: 'Attaque 6, Défense 6, Vitesse 7', improvements: 'Flèches de bambou, Écailles protectrices, Flèche explosive', description: 'Archer naturel du terrain de vie.' },
  { name: 'Camo', element: 'vie', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 8', improvements: 'Camouflage complet, Lames de lierre, Bond furtif', description: 'Maître de la forêt et de l’invisibilité.' },

  { name: 'Terrafin', element: 'terre', owned: true, stats: 'Attaque 8, Défense 8, Vitesse 4', improvements: 'Rafale marine, Coup de roc, Tremblement de terre', description: 'Monstre marin et terrestre du royaume des rochers.' },
  { name: 'Bash', element: 'terre', owned: true, stats: 'Attaque 9, Défense 7, Vitesse 5', improvements: 'Coup de tonnerre, Bouclier de pierre, Écrasement', description: 'Combatant lourd, parfait pour les murs et la terre.' },
  { name: 'Dino-Rang', element: 'terre', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 7', improvements: 'Disque de roche, Tir sismique, Armure osseuse', description: 'Dinosaure qui lance des disques et contrôle la terre.' },
  { name: 'Prism Break', element: 'terre', owned: true, stats: 'Attaque 7, Défense 7, Vitesse 5', improvements: 'Rayon prismatique, Choc de cristal, Barrière durable', description: 'Techno-soldat capable de manipuler les cristaux.' },

  { name: 'Trigger Happy', element: 'tech', owned: true, stats: 'Attaque 9, Défense 4, Vitesse 8', improvements: 'Rafale de balles, Tir explosif, Jackpot', description: 'Bandit mécanique armé jusqu’aux dents.' },
  { name: 'Drobot', element: 'tech', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Double laser, Armure robotique, Reconfiguration', description: 'Robot high-tech agile et puissant.' },
  { name: 'Boomer', element: 'tech', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 7', improvements: 'Canon à bulles, Vague de choc, Champ électromagnétique', description: 'Skylander amphibie doté d’une technologie avancée.' },
  { name: 'Drill Sergeant', element: 'tech', owned: true, stats: 'Attaque 8, Défense 8, Vitesse 5', improvements: 'Perçage puissant, Charge explosive, Commandement', description: 'Soldat robotisé équipé d’un énorme foret.' },

  { name: 'Cynder', element: 'mort-vivant', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 7', improvements: 'Souffle d’ombre, Lame spectrale, Fureur ténébreuse', description: 'Dragon des ombres réanimé par la mort.' },
  { name: 'Chop Chop', element: 'mort-vivant', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 6', improvements: 'Morsure spectrale, Tranchant osseux, Hurlement fantôme', description: 'Chevalier squelette au sabre mortel.' },
  { name: 'Hex', element: 'mort-vivant', owned: true, stats: 'Attaque 6, Défense 5, Vitesse 6', improvements: 'Malédiction des os, Potion noire, Cercle protecteur', description: 'Sorcière vaudou qui manipule les morts.' },
  { name: 'Ghost Roaster', element: 'mort-vivant', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 7', improvements: 'Explosion fantôme, Plumes spectrales, Feu spectral', description: 'Phénix spectral revenu de l’au-delà.' },

  { name: 'Eruptor', element: 'feu', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 5', improvements: 'Explosion de lave, Bouclier magmatique, Frappe terrestre', description: 'Golem de magma en fusion.' },
  { name: 'Flameslinger', element: 'feu', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 8', improvements: 'Pistolet de feu, Tir incandescent, Vague de flamme', description: 'Cow-boy pyro avec des tirs enflammés.' },
  { name: 'Sunburn', element: 'feu', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Éclair solaire, Bouclier ardent, Flamme céleste', description: 'Créature solaire qui illumine le champ de bataille.' },
  { name: 'Ignitor', element: 'feu', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Projectiles enflammés, Vague ardente, Frappe du brasier', description: 'Héros de feu rapide et explosif.' },

  { name: 'Whirlwind', element: 'air', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 8', improvements: 'Tornade rapide, Nuage de vent, Tempête des cieux', description: 'Maître des rafales et des tourbillons.' },
  { name: 'Lightning Rod', element: 'air', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 8', improvements: 'Éclair contrôlé, Onde électrique, Surcharge', description: 'Héros mobile qui manipule l’électricité de l’air.' },
  { name: 'Sonic Boom', element: 'air', owned: true, stats: 'Attaque 8, Défense 5, Vitesse 10', improvements: 'Onde supersonique, Tornade éclair, Coup d’aile', description: 'Skylander supersonique rapide et précis.' },
  { name: 'Warnado', element: 'air', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 9', improvements: 'Cyclone dévastateur, Brise-vent, Rafale d’aile', description: 'Oiseau tempête qui lance des tornades.' },

  { name: 'Gill Grunt', element: 'eau', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 7', improvements: 'Tir hydrocanon, Vague aqua, Missiles giclants', description: 'Maître de l’eau et des armes sous-marines.' },
  { name: 'Slam Bam', element: 'eau', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Charge ondulante, Onde de choc, Coup de corail', description: 'Créer des vagues et des chocs aquatiques puissants.' },
  { name: 'Zap', element: 'eau', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 8', improvements: 'Éclair liquide, Bolide marin, Saut geyser', description: 'Skylander rapide et électrique de l’eau.' },
  { name: 'Wham Shell', element: 'eau', owned: true, stats: 'Attaque 8, Défense 8, Vitesse 5', improvements: 'Coquille chargée, Onde palpitante, Lame de moule', description: 'Guerrier aquatique avec une forte défense.' },

  { name: 'Spyro', element: 'magie', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Souffle magique, Orbe mystique, Dragon aérien', description: 'Dragon légendaire utilisant la magie pure.' },
  { name: 'Wrecking Ball', element: 'magie', owned: true, stats: 'Attaque 8, Défense 9, Vitesse 4', improvements: 'Boule d’énergie, Champ mystique, Impact lourd', description: 'Robot magique blindé par de l’énergie étrange.' },
  { name: 'Double Trouble', element: 'magie', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 7', improvements: 'Invocation de copies, Pistolet mystique, Diversion magique', description: 'Héroïne magique qui invoque des doubles fantômes.' },
  { name: 'Voodood', element: 'magie', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 6', improvements: 'Sort vaudou, Fumée mystique, Maléfice', description: 'Mage vaudou maître des éléments mystiques.' }
];

function getSkylanderByName(name) {
  const decoded = decodeURIComponent(name || '').trim();
  return figurines.find((figure) => figure.name.toLowerCase() === decoded.toLowerCase());
}

function getElementStyle(element) {
  return elementStyles[element.toLowerCase()] || { color: '#6c757d', text: '#fff', label: element };
}

function countOwned() {
  return figurines.filter((figure) => figure.owned).length;
}
