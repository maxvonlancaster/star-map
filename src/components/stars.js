import { color } from "three/tsl"

const colors = {
    red: '#ff4444',
    orange: '#ffaa00',
    yellow: '#ffff00',
    lightyellow: '#ffffbb',
    white: '#ffffff',
    lightblue: '#eeffff',
    blue: '#88ccff'
}

const stars = [
    {
        id: 1, name: 'Sol', position: [0, 0, 0], color: colors.yellow, size: 3, importance: 0,
        description: '',
        fiction: { 'star-trek': ['Earth', 'Capital of Federation.'], 'dune': ['Old Earth', 'Homeworld of human species'], 'other': ['Earth', ''] },
        exoplanets: [{name: "", distance: 0, mass: 1, star:true, color: colors.yellow}, ["Mercury", 0.39, 0.05], ["Venus", 0.72, 0.8], ["Earth", 1, 1], ["Mars", 1.52, 0.1], ["Jupiter", 5.2, 317], ["Saturn", 9.58, 95], ["Uranus", 19.2, 14.5], ["Neptune", 30.05, 17]]
    },
    {
        id: 2, name: 'Alpha Centauri', position: [2.87, 0.49, 2.79], color: colors.orange, size: 2, importance: 4,
        description: '',
        fiction: { 'star-trek': [], 'dune': ['', 'Planets Logi and Ecaz'], 'other': ['Pandora', 'Location of the main character\'s home planet in the movie Avatar.'] },
        exoplanets: []
    },
    {
        id: 3, name: 'Vega', position: [9.03, -8.22, -21.81], color: colors.blue, size: 5, importance: 2,
        description: '',
        fiction: { 'star-trek': [], 'dune': [], 'other': ['', 'Point of origin of extraterrestrial signal in Contact'] },
        exoplanets: []
    },
    {
        id: 4, name: 'Sirius', position: [-6.04, 1.39, 6.52], color: colors.white, size: 4, importance: 3,
        description: 'The brightest star in the night sky.',
        fiction: { 'star-trek': [], 'dune': [], 'other': ['', 'Home of the visitors from "V". Also headquarters of the Sirius Cybernetics Corporation from The Hitchhiker\'s Guide to the Galaxy.'] },
        exoplanets: []
    },
    {
        id: 5, name: 'Tau Ceti', position: [-3.40, 11.50, -0.41], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': [], 'dune': [], 'other': ['', 'In Andy Weir\'s novel The Ave Maria Project, the main character flies to the Tau Ceti system to save Earth.'] },
        exoplanets: []
    },
    {
        id: 6, name: 'Procyon', position: [-8.92, -2.47, 5.95], color: colors.lightyellow, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['Andoria', 'Homeworld of the Andorians and the Aenar, founding planet of Federation.'], 
            'dune': [], 'other': ['Arcadia', 'On February 9, 2531, Arcadia was attacked by the Covenant, leading to a brief, yet brutal, battle between the United Nations Space Command and the Covenant.'] },
        exoplanets: []
    },
    {
        id: 7, name: '40 Eridani', position: [-12.00, 10.036, 4.56], color: colors.orange, size: 2, importance: 3,
        description: '',
        fiction: { 'star-trek': ['Vulcan', 'Inhabited M-class planet orbiting the star 40 Eridani A in the Vulcan system.\n Homeworld of the Vulcans and the ancestors of the Romulans, founding planet of the Federation.'], 
            'dune': ['Richese', 'Still make machines, which are illegal in the rest of the Universe'], 'other': ['Erid', 'Home world of Rocky\'s species, Eridians (Project Hail Mary)'] },
        exoplanets: []
    },
    {
        id: 8, name: 'Wolf 359', position: [-1.9, -6.47, 3.91], color: colors.red, size: 1, importance: 4,
        description: '',
        fiction: { 'star-trek': ['', 'Location of battle between the Federation and the Borg.'], 'dune': [], 'other': [] },
        exoplanets: []
    },
    {
        id: 9, name: 'Omega Leonis', position: [-60.81, -67.82, 58.03], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['Qo\'noS', 'Homeworld of the Klingons and the capital of the Klingon Empire.'], 'dune': [], 'other': [] },
        exoplanets: []
    },
    {
        id: 10, name: 'Romulus', position: [60, -20, 65], color: colors.red, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'The capital of the Romulan Empire.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 11, name: 'Cardassia', position: [-10, 10, -185], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Cardassians and the capital of the Cardassian Union.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 12, name: 'Ferenginar', position: [55, 10, -185], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Ferengi and the capital of the Ferengi Alliance.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 13, name: 'Bajor', position: [-5, 10, -180], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Bajorans, location of wormhole to the Gamma quadrant.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 14, name: 'Canopus', position: [-42.82, 132.44, 276.99], color: colors.white, size: 1, importance: 1,
        description: '',
        fiction: { 'star-trek': [], 'dune': ['Arrakis', 'Arrakis is the most important planet in the universe, as it is the only source of the drug melange.'], 'other': [] },
        exoplanets: []
    },
    {
        id: 15, name: 'Xindi', position: [-5, 5, -50], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'A group of six sentient species who all evolved on Xindus, a planet in the Delphic Expanse'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 16, name: 'Nimbus III', position: [25, -10, 40], color: colors.orange, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Inhabited third planet in the Nimbus star system. This Class M planet was orbited by at least two moons. Seen in Star Trek V'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 17, name: 'Qzinty', position: [-55, 25, 25], color: colors.yellow, size: 3.5, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Territory of the Qzinty.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 18, name: 'Dominion', position: [42000, 25, -20000], color: colors.yellow, size: 3.5, importance: 0,
        description: '',
        fiction: { 'star-trek': ['', 'A major imperialist state in the Gamma Quadrant. Technologically advanced and millennia old, the Dominion was a interstellar oligarchy founded under the absolute rule of a group of Changelings known as the Founders'], 
            'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 19, name: 'Borg', position: [54000, 25, 20000], color: colors.yellow, size: 3.5, importance: 0,
        description: '',
        fiction: { 'star-trek': ['', 'A pseudo-species of cybernetic humanoids, or cyborgs, from the Delta Quadrant known as drones, which formed the entire population of the Borg Collective'], 
            'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 22, name: 'Betazed', position: [15, -10, -25], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Betazoids, a telepathic species.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 23, name: 'Denobula', position: [30, 0, 20], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Denobulans, known for advanced medical science.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 24, name: 'Risa', position: [25, -15, 10], color: colors.yellow, size: 2, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Federation pleasure planet known for leisure and diplomacy.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 25, name: 'Trill', position: [-20, 5, -30], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Trill species, hosts to symbiotic lifeforms.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 26, name: 'Breen Confederacy', position: [60, -60, -240], color: colors.yellow, size: 4, importance: 1,
        description: '',
        fiction: {
            'star-trek': ['', 'Region controlled by the Breen, a secretive and technologically advanced power.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 27, name: 'Gorn Hegemony', position: [-85, 20, 20], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Territory of the Gorn, a reptilian species known for their strength and isolationism.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 28, name: 'Tholian Assembly', position: [-175, 25, 10], color: colors.orange, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Region of space controlled by the Tholians, a crystalline-based species.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 29, name: 'Capella', position: [-40.8, -3.42, -12.8], color: colors.yellow, size: 3, importance: 3,
        description: 'The brightest star in the northern constellation of Auriga.',
        fiction: {
            'star-trek': ['', 'Inhabited planetary system located inside a sector of the Alpha Quadrant'],
            'dune': [], 'other': []
        },
        exoplanets: []
    },
    {
        id: 30, name: 'Delta Pavonis', position: [14.51, 10.66, 8.45], color: colors.yellow, size: 3, importance: 3,
        description: 'Single star in the constellation of Pavo',
        fiction: {
            'star-trek': ['Benzite', 'A warp-capable humanoid species from the Beta Quadrant'], 
            'dune': ['Caladan', 'Caladan - the third planet orbiting the star Delta Pavonis. A lush oceanic world, and the ancestral home of House Atreides.'], 
            'other': ['Resurgam', 'Terrestrial planet orbiting Delta Pavonis in the Revelation Space series by Alastair Reynolds.']
        },
        exoplanets: []
    },
    {
        id: 30, name: '36 Ophiuchi', position: [19.35, -2.34, 0.58], color: colors.orange, size: 2, importance: 4,
        description: 'A triple star system 19.5 light-years from Earth in the constellation Ophiuchus',
        fiction: {
            'star-trek': [], 'dune': ['Giedi Prime', 'Giedi Prime - a planet orbiting the star Ophiuchi B. The historical homeworld of House Harkonnen'], 'other': []
        },
        exoplanets: []
    },
    {
        id: 31, name: 'Gliese 581', position: [15.62, -13.18, 1.62], color: colors.red, size: 1, importance: 4,
        description: 'A red dwarf star of spectral type M3V which hosts a planetary system of 7 planets.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': []
        },
        exoplanets: []
    },
    {
        id: 32, name: 'Alpha Cassiopeiae', position: [-118.13, 25.03, -193.4], color: colors.orange, size: 4, importance: 2,
        description: 'Has the proper name Schedar, is the brightest star in the constellation of Cassiopeia.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['', 'The characters from the feature film Children in the Universe are sent to the planet in the Shedar star system.']
        },
        exoplanets: []
    },
    {
        id: 33, name: 'Arcturus', position: [12.64, -34.29, -3.4], color: colors.orange, size: 4, importance: 2,
        description: 'Red giant star in the constellation of Boötes, the brightest star in the constellation',
        fiction: {
            'star-trek': ['', 'Homeworld of the Arcturians. The Arcturian dog bird is native to this system.'], 'dune': [], 'other': ['', 'In the 2016 film Passengers, the starship Avalon along with the main characters perform a slingshot maneuver around Arcturus on their journey to a distant solar system.']
        },
        exoplanets: []
    },
    {
        id: 34, name: 'Rigel', position: [-670.85, 362.52, 375.56], color: colors.blue, size: 4, importance: 1,
        description: 'Blue supergiant star in the equatorial constellation of Orion',
        fiction: {
            'star-trek': ['', 'The source of the name for the Rigel Cup'], 'dune': [], 'other': []
        },
        exoplanets: []
    },
    {
        id: 35, name: 'Achernar', position: [25.62, 118.89, 67.31], color: colors.lightblue, size: 2, importance: 3,
        description: 'The brightest star in the constellation of Eridanus and the ninth-brightest in the night sky',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['', 'In Yevgeny Yefremov\'s novel The Andromeda Nebula, the final chapters are devoted to the preparation and dispatch of an expedition of Earthlings tasked with colonizing two habitable planets orbiting Acheron.']
        },
        exoplanets: []
    },
    {
        id: 36, name: 'Regulus', position: [-35.77, -59.56, 37.6], color: colors.lightblue, size: 2, importance: 2,
        description: 'The brightest object in the constellation Leo. Regulus appears single, but is actually a quadruple star system composed of four stars that are organized into two pairs.',
        fiction: {
            'star-trek': ['', 'In 2257, during the first Federation-Klingon War, this star\'s system was partially occupied by the Klingons.'], 'dune': [], 'other': []
        },
        exoplanets: []
    },
    {
        id: 37, name: 'Fomalhaut', position: [9.93, 22.64, -3.71], color: colors.white, size: 3, importance: 3,
        description: 'Is classified as a Vega-like star that emits excess infrared radiation, indicating it is surrounded by a circumstellar disk',
        fiction: {
            'star-trek': [], 'dune': [], 'other': []
        },
        exoplanets: []
    },
    {
        id: 38, name: 'Barnard\'s Star', position: [4.96, -1.45, -2.98], color: colors.red, size: 1, importance: 4,
        description: 'Small red dwarf star, one of the closest stars to the Sun at a distance of about 6 light-years',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['' ,'In Jack Williamson\'s science fiction novel The Space Legion, the only planet orbiting Barnard\'s Star is inhabited by an ancient civilization of “Medusians” who have decided to conquer the Solar System and destroy humanity.']
        },
        exoplanets: []
    },
    {
        id: 39, name: 'Altair', position: [11.09, 2.59, -12.21], color: colors.white, size: 3, importance: 3,
        description: 'The brightest star in the equatorial constellation of Aquila, an A-type main-sequence star, rotates rapidly, with a velocity at the equator of approximately 286 km/s',
        fiction: {
            'star-trek': ['', 'Altair IV is referenced in multiple episodes'], 'dune': ['Rima', 'Planet Rima'], 'other': ['' ,'Destination of spaceship in Forbidden Planet (1956)']
        },
        exoplanets: []
    },
    {
        id: 40, name: 'Acrux', position: [161.11, 2.03, 277.63], color: colors.white, size: 1, importance: 2,
        description: 'The brightest star in the constellation of Crux. To the naked eye Acrux appears as a single star, but it is actually a multiple star system containing six components.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['' ,'Acrux is represented in the flags of Australia, New Zealand, Samoa, and Papua New Guinea as one of five stars that compose the Southern Cross.']
        },
        exoplanets: []
    },
    {
        id: 41, name: 'Zeta Reticuli', position: [4.22, 28.84, 26.36], color: colors.yellow, size: 2, importance: 3,
        description: 'A wide binary star system, both stars are solar analogs that have characteristics similar to those of the Sun.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['' ,'Considered to be place of origin of UFOs. Also setting of the Alien movies.']
        },
        exoplanets: []
    },
    {
        id: 42, name: 'Deneb', position: [258.76, -90.63, -2585.5], color: colors.blue, size: 5, importance: 0,
        description: 'A blue supergiant star in the constellation of Cygnus. Deneb rivals Rigel, a closer blue supergiant, as the most luminous first-magnitude star.',
        fiction: {
            'star-trek': ['', 'Deneb IV is the homeworld of the Bandi, a telepathic humanoid species, and the Denebian slime devil. Location of the Farpoint station (TNG episode "Encounter at Farpoint")'], 'dune': [], 
            'other': ['' ,'In the novel Roadside Picnic by the Strugatsky brothers, the Earth-Deneb line contained the “Pilman Radiant,” the source of the formation of six “Visiting Zones.”']
        },
        exoplanets: []
    },
    {
        id: 43, name: 'Saggitarius A', position: [27000, 0, 0], color: colors.blue, size: 5, importance: 0,
        description: 'A supermassive black hole at the center of our galaxy, the Milky Way.',
        fiction: {
            'star-trek': ['Sha Ka Ree', 'A planet believed to be the mythological planet of Sha Ka Ree was discovered in the galactic core in 2287 by the Vulcan Sybok on board the USS Enterprise-A.'], 'dune': [], 
            'other': ['Trantor' ,'The capital of the Galactic Empire in Isaac Asimov\'s Foundation series is located in the Sagittarus A system.']
        },
        exoplanets: []
    },
    {
        id: 44, name: '70 Ophiuchi', position: [14.19, -3.29, -8.16], color: colors.orange, size: 2, importance: 4,
        description: 'A binary star system. It is located approximately 16.7 light-years from Earth in the constellation Ophiuchus.',
        fiction: {
            'star-trek': [], 'dune': ['Sikun', 'Planet Sikun'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 45, name: 'Sigma Draconis', position: [-3.42, -7.01, -17.11], color: colors.orange, size: 2, importance: 4,
        description: 'Star in the constellation of Draco, located approximately 18.8 light-years from Earth.',
        fiction: {
            'star-trek': [], 'dune': ['Corrin', 'From which the Battle of Corrin (88 BG) and the House Corrino derived their names.'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 46, name: 'Luyten\'s Star', position: [-10.26, -2.22, 6.5], color: colors.red, size: 1, importance: 5,
        description: 'A red dwarf in the constellation Canis Minor located at a distance of 12.35 light-years',
        fiction: {
            'star-trek': [], 'dune': ['Fides', 'Planet Fides'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 47, name: 'Eta Ophiuchi', position: [84.8, -21.3, -9.99], color: colors.lightblue, size: 4, importance: 3,
        description: 'A binary star in the constellation of Ophiuchus',
        fiction: {
            'star-trek': [], 'dune': ['', 'Highliner graveyard'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 48, name: 'Epsilon Ophiuchi', position: [90.36, -54.5, -13.61], color: colors.red, size: 4, importance: 3,
        description: 'A red giant star in the constellation of Ophiuchus',
        fiction: {
            'star-trek': [], 'dune': ['Poritrin', 'Believed by Fremen to be their homeworld'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 49, name: 'Gamma Piscium', position: [10.87, 106.42, -82.35], color: colors.yellow, size: 4, importance: 2,
        description: 'A star approximately 135 light years away from Earth in the equatorial-northern zodiac constellation of Pisces.',
        fiction: {
            'star-trek': [], 'dune': ['Salusa Secundus', 'Former Homeworld of House Corrino, now a Prison Planet'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 50, name: 'Alpha Piscium', position: [-77.54, 124.59, -35.58], color: colors.lightblue, size: 4, importance: 2,
        description: 'A binary star system in the equatorial constellation of Pisces',
        fiction: {
            'star-trek': [], 'dune': ['Kaitain', 'Home of the Imperial Court and capital of the Known Universe'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 51, name: 'Epsilon Eridani', position: [-6.75, 7.81, 1.92], color: colors.orange, size: 2, importance: 4,
        description: 'A star in the southern constellation of Eridanus. As one of the nearest Sun-like stars, Epsilon Eridani has been the target of several observations in the search for extraterrestrial intelligence.',
        fiction: {
            'star-trek': [], 'dune': [], 
            'other': ['', 'Location of the Babylon 5 space station in the TV series Babylon 5.']
        },
        exoplanets: []
    },
    {
        id: 52, name: 'Theta Eridani', position: [-30.4, 143.94, 74.71], color: colors.lightblue, size: 2, importance: 3,
        description: 'Theta Eridani, Latinized from θ Eridani, is a triple star system in the constellation of Eridanus, with a combined apparent magnitude of 2.88',
        fiction: {
            'star-trek': [], 'dune': ['Tleilax', 'Home to the Bene Tleilax - a society of genetically altered highly religious and xenophobic humans, as well as twisted mentats.'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 53, name: 'Iota Leporis', position: [-173.51, 106.47, 111.28], color: colors.blue, size: 3, importance: 3,
        description: 'A triple star system in the southern constellation of Lepus',
        fiction: {
            'star-trek': [], 'dune': ['Bela Tegeuse', 'It was reputed to be the third stopping place of the Zensunni forced migration.'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 54, name: 'Beta Tauri', position: [-133.63, 8.75, -4.68], color: colors.blue, size: 3, importance: 3,
        description: 'The second-brightest star in the constellation of Taurus. It has the official name Elnath',
        fiction: {
            'star-trek': [], 'dune': ['Gioia', 'Planet Gioia'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 55, name: 'Theta Leonis', position: [-40.24, -149.03, 58.27], color: colors.lightblue, size: 4, importance: 3,
        description: 'Theta Leonis, Latinized from θ Leonis, formally named Chertan, is a star in the equatorial-northern constellation of Leo.',
        fiction: {
            'star-trek': [], 'dune': ['Hagal', 'Hagal, also known as the "Jewel Planet", the planet where many of the precious crown jewels of the Known Universe originated from'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 56, name: 'Theta Arietis', position: [-304.08, 281.36, -180.76], color: colors.lightblue, size: 4, importance: 3,
        description: 'A binary star system in the northern constellation of Aries.',
        fiction: {
            'star-trek': [], 'dune': ['Chusuk', 'The fourth planet in the Theta Shalish system, and was known as the "Music Planet". The planet was renowned as a manufacturing source of premium musical instruments.'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 57, name: '52 Cygni', position: [82.86, 38.64, -276.26], color: colors.lightblue, size: 5, importance: 3,
        description: 'A giant star in the northern constellation of Cygnus with an apparent magnitude of 4.22',
        fiction: {
            'star-trek': [], 'dune': ['Ishia', 'A Corrino holding which had been allowed to lie fallow since its discovery'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 58, name: 'Psi1 Draconis', position: [-14.43, -38.66, -62.63], color: colors.lightyellow, size: 3, importance: 3,
        description: 'Also designated 31 Draconis, is a triple star system in the northern constellation of Draco',
        fiction: {
            'star-trek': [], 'dune': ['Gamont', 'During the time of the Faufreluches, it was a planet noted for its hedonistic culture and exotic sexual practices'], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 59, name: 'Beta Lyrae', position: [418.69, -244.96, -828.43], color: colors.blue, size: 4, importance: 2,
        description: 'Officially named Sheliak, is a multiple star system in the constellation of Lyra',
        fiction: {
            'star-trek': ['Sheliak', 'An intelligent non-humanoid lifeform'], 'dune': [], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 60, name: 'Antares', position: [525.86, -142.95, 74.4], color: colors.red, size: 5, importance: 1,
        description: 'The brightest star in the constellation of Scorpius.',
        fiction: {
            'star-trek': [], 'dune': [], 
            'other': ['', 'In the hitchhiker\'s guide to the galaxy, it is home to the disgusting and wildly expensive Antarean parakeet glands and the Antarean Mozaic Lizards, twenty thousand of which are used to cover the bar at Milliways.']
        },
        exoplanets: []
    },
    {
        id: 61, name: 'Betelgeuse', position: [-509.35, 85.34, 183.25], color: colors.red, size: 5, importance: 1,
        description: 'Betelgeuse is a red supergiant star in the equatorial constellation of Orion.',
        fiction: {
            'star-trek': ['', 'The Betelgeusians were an ornithoid species, who by the mid-2270s were diplomatically associated with the United Federation of Planets'], 'dune': [], 
            'other': ['', 'Mentioned in "Tears in Rain" monologue in the film Blade Runner.']
        },
        exoplanets: []
    },
    {
        id: 62, name: '61 Cygni', position: [1.52, 1.16, -11.24], color: colors.orange, size: 2, importance: 4,
        description: '61 Cygni is a binary star system in the northern constellation Cygnus, consisting of a pair of K-type dwarf stars that orbit each other in a period of about 659 years',
        fiction: {
            'star-trek': ['Tellar Prime', 'The homeworld of the Tellarites, a warp-capable humanoid species. Renowned for its healing bogs, which were used for therapeutic mud baths.'], 'dune': [], 
            'other': ['', '']
        },
        exoplanets: []
    },
    {
        id: 62, name: 'Iota Horologii', position: [-0.62, 48.08, 29.66], color: colors.yellow, size: 3, importance: 4,
        description: 'A star in the Horologium constellation.',
        fiction: {
            'star-trek': [], 'dune': [], 
            'other': ['', 'Halo']
        },
        exoplanets: []
    },
    {
        id: 63, name: 'LHS 2520', position: [8.64, -29.07, 26.08], color: colors.red, size: 1, importance: 4,
        description: 'A red dwarf star in the constellation Corvus',
        fiction: {
            'star-trek': [], 'dune': [], 
            'other': ['Krypton', 'Supermans homeworld in the DC Comics universe.']
        },
        exoplanets: []
    },
    {
        id: 64, name: '61 Ursae Majoris', position: [-8.94, -29.89, 0.55], color: colors.yellow, size: 3, importance: 3,
        description: 'A single star in the northern circumpolar constellation of Ursa Major.',
        fiction: {
            'star-trek': ['Archer IV', 'The planet Archer IV was named for Jonathan Archer, the captain of the first Earth starship – Enterprise NX-01 – to chart the star system close up'], 'dune': [], 
            'other': ['Kzin', 'Kzin homeworld from Larry Niven\'s Known Space series, huge tiger-like hostile species.']
        },
        exoplanets: []
    },
    {
        id: 65, name: 'Epsilon Indi', position: [7.34, 8.92, 3.24], color: colors.orange, size: 2, importance: 4,
        description: 'Consists of a K-type main-sequence star, ε Indi A, and two brown dwarfs, ε Indi Ba and ε Indi Bb, in a wide orbit around it',
        fiction: {
            'star-trek': [], 'dune': [], 
            'other': ['Harvest', 'Harvest was the first colony to be attacked by the Covenant and the first human world to be glassed in Halo series.']
        },
        exoplanets: []
    },
    {
        id: 66, name: 'Aldebaran', position: [-62.85, 23.19, 1.07], color: colors.red, size: 5, importance: 2,
        description: 'Aldebaran is a red giant, meaning that it is cooler than the Sun with a surface temperature of 3,900 K, but its radius is about 45 times the Sun\'s, so it is over 400 times as luminous.',
        fiction: {
            'star-trek': ['', 'Aldebaran whisky is loved by Scotty'], 'dune': [], 
            'other': []
        },
        exoplanets: []
    },
    {
        id: 67, name: 'Algol', position: [-77.85, 24.17, -46.82], color: colors.blue, size: 5, importance: 2,
        description: 'Known colloquially as the Demon Star, is a bright multiple star in the constellation of Perseus and one of the first non-nova variable stars to be discovered.',
        fiction: {
            'star-trek': ['', 'Home of Algolians'], 'dune': [], 
            'other': ['', 'Home to Algolian Suntiger in The Hitchhiker\'s Guide to the Galaxy.']
        },
        exoplanets: []
    }
]

export default stars

// 

// ,
//     {
//         id: 33, name: 'Arcturus', position: [12.64, -34.29, -3.4], color: colors.orange, size: 4, importance: 2,
//         description: '',
//         fiction: {
//             'star-trek': [], 'dune': [], 'other': []
//         },
//         exoplanets: []
//     }