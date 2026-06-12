const elementStyles = {
  feu: { color: '#dc3545', text: '#fff', label: 'Feu' },
  eau: { color: '#0d6efd', text: '#fff', label: 'Eau' },
  terre: { color: '#795548', text: '#fff', label: 'Terre' },
  air: { color: '#0dcaf0', text: '#000', label: 'Air' },
  vie: { color: '#198754', text: '#fff', label: 'Vie' },
  magie: { color: '#6f42c1', text: '#fff', label: 'Magie' },
  tech: { color: '#6c757d', text: '#fff', label: 'Tech' },
  obscur: { color: '#343a40', text: '#fff', label: 'Obscur' },
  poison: { color: '#2f855a', text: '#fff', label: 'Poison' },
  lumière: { color: '#ffc107', text: '#000', label: 'Lumière' },
  mort: { color: '#495057', text: '#fff', label: 'Mort' },
  vent: { color: '#20c997', text: '#000', label: 'Vent' }
};

const figurines = [
  { name: 'Spyro', element: 'feu', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Souffle de flammes, Armure du feu, Charge céleste', description: 'Dragon courageux et héros du feu.' },
  { name: 'Stealth Elf', element: 'vie', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 9', improvements: 'Flèches tranchantes, Pas furtif, Tempête de lames', description: 'Elfe agile experte en discrétion.' },
  { name: 'Tree Rex', element: 'terre', owned: true, stats: 'Attaque 9, Défense 8, Vitesse 4', improvements: 'Force de la nature, Fracas sismique, Poing de roche', description: 'Puissant dinosaure de la terre.' },
  { name: 'Gill Grunt', element: 'eau', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 7', improvements: 'Tir hydrocanon, Vague aqua, Missiles giclants', description: 'Maître de l’eau et des armes sous-marines.' },
  { name: 'Eruptor', element: 'feu', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 5', improvements: 'Explosion de lave, Bouclier magmatique, Frappe terrestre', description: 'Golem de lave furieux.' },
  { name: 'Trigger Happy', element: 'lumière', owned: true, stats: 'Attaque 9, Défense 4, Vitesse 8', improvements: 'Rafale de fléchettes, Tir explosif, Jackpot', description: 'Bandit de la chance avec des armes folles.' },
  { name: 'Blaze', element: 'feu', owned: true, stats: 'Attaque 9, Défense 6, Vitesse 7', improvements: 'Lame flamboyante, Onde de feu, Danse incandescente', description: 'Guerrier ardent du feu.' },
  { name: 'Zorch', element: 'magie', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 6', improvements: 'Magie bizarre, Rayon d’Illusion, Téléportation', description: 'Mage imprévisible à la magie instable.' },
  { name: 'Sonic Boom', element: 'air', owned: false, stats: 'Attaque 8, Défense 5, Vitesse 10', improvements: 'Onde supersonique, Tornade éclair, Coup d’aile', description: 'Héros aérien rapide et puissant.' },
  { name: 'Hex', element: 'magie', owned: true, stats: 'Attaque 6, Défense 5, Vitesse 6', improvements: 'Sangsue magique, Poisons occultes, Cercle de protection', description: 'Sorcière envoûtante et mystérieuse.' },
  { name: 'Boomer', element: 'eau', owned: true, stats: 'Attaque 7, Défense 5, Vitesse 6', improvements: 'Onde de choc, Plongeon aquatique, Bulle explosive', description: 'Skylander aquatique avec une grande agilité.' },
  { name: 'Whirlwind', element: 'air', owned: true, stats: 'Attaque 7, Défense 6, Vitesse 8', improvements: 'Tornade rapide, Nuage de vent, Tempête des cieux', description: 'Maître des rafales et des tourbillons.' },
  { name: 'Cynder', element: 'obscur', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Souffle ténébreux, Lames d’ombre, Charge abyssale', description: 'Dragon obsidienne sombre et puissant.' },
  { name: 'Prism Break', element: 'tech', owned: true, stats: 'Attaque 7, Défense 7, Vitesse 5', improvements: 'Rayon laser, Éclat prismatique, Barrière multicolore', description: 'Inventeur robotique aux attaques technologiques.' },
  { name: 'Chop Chop', element: 'mort', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 6', improvements: 'Morsure spectral, Tranchant osseux, Hurlement fantomatique', description: 'Chevalier squelette invincible.' },
  { name: 'Flashwing', element: 'poison', owned: true, stats: 'Attaque 8, Défense 5, Vitesse 8', improvements: 'Plumes empoisonnées, Vol furtif, Cri corrosif', description: 'Skylander venimeux et rapide.' },
  { name: 'Sunburn', element: 'feu', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Éclair de soleil, Bouclier ardent, Flamme céleste', description: 'Créature solaire puissante.' },
  { name: 'Dark Spyro', element: 'obscur', owned: false, stats: 'Attaque 9, Défense 7, Vitesse 8', improvements: 'Souffle sombre, Griffe du chaos, Vortex noir', description: 'Version maléfique du célèbre dragon.' },
  { name: 'Stump Smash', element: 'terre', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 5', improvements: 'Ronce écrasante, Racine enracinée, Coup de souche', description: 'Géant forestier avec une force écrasante.' },
  { name: 'Ignitor', element: 'feu', owned: true, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Projectiles enflammés, Vague incendiary, Frappe du brasier', description: 'Héros de feu puissant et explosif.' },
  { name: 'Spyro Legendary', element: 'feu', owned: false, stats: 'Attaque 10, Défense 8, Vitesse 8', improvements: 'Inferno suprême, Météore ardent, Vol céleste', description: 'Spyro sous forme légendaire.' },
  { name: 'Stealth Elf Classic', element: 'vie', owned: false, stats: 'Attaque 7, Défense 5, Vitesse 9', improvements: 'Flèche émeraude, Fuite silencieuse, Lame cache', description: 'Version classique de Stealth Elf.' },
  { name: 'Dark Spyro Classic', element: 'obscur', owned: false, stats: 'Attaque 9, Défense 7, Vitesse 8', improvements: 'Souffle ténébreux, Rafale nocturne, Éclat du chaos', description: 'Classic Dark Spyro enveloppé d’ombre.' },
  { name: 'Hot Head', element: 'feu', owned: true, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Explosion de lave, Sable incandescent, Explosion de magma', description: 'Petit héros de feu furieux.' },
  { name: 'Rattle Shake', element: 'mort', owned: false, stats: 'Attaque 7, Défense 5, Vitesse 7', improvements: 'Morsure mortelle, Onde des os, Terrifying roar', description: 'Champignon undead aux attaques empoisonnées.' },
  { name: 'Magic Templar', element: 'magie', owned: false, stats: 'Attaque 8, Défense 7, Vitesse 6', improvements: 'Éclair mystique, Bouclier mystique, Invocation d’esprit', description: 'Chevalier mystique du royaume magique.' },
  { name: 'Hammer Slam Bow', element: 'vent', owned: false, stats: 'Attaque 8, Défense 6, Vitesse 6', improvements: 'Arc brisé, Tir supersonique, Marteau volant', description: 'Chasseur aérien puissant et précis.' },
  { name: 'Pop Fizz', element: 'poison', owned: false, stats: 'Attaque 7, Défense 5, Vitesse 8', improvements: 'Potion explosive, Eau instable, Vapeur toxique', description: 'Scientifique fou capable de changer de forme.' },
  { name: 'Electro', element: 'tech', owned: false, stats: 'Attaque 8, Défense 6, Vitesse 7', improvements: 'Éclair électrique, Décharge statique, Vague de plasma', description: 'Guerrier électrique rapide et précis.' },
  { name: 'Wrecking Ball', element: 'tech', owned: true, stats: 'Attaque 8, Défense 9, Vitesse 4', improvements: 'Rouleau destructeur, Champ de mines, Impact lourd', description: 'Robot blindé au pouvoir de démolition.' }
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
