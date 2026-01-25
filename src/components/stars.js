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
        id: 1, name: 'Sol', position: [0, 0, 0], color: colors.yellow, size: 3, importance: 1,
        description: '',
        fiction: { 'star-trek': ['Earth', 'Capital of Federation.'], 'dune': ['Earth', 'Homeworld of human species'], 'other': ['Earth', ''] },
        exoplanets: {}
    },
    {
        id: 2, name: 'Alpha Centauri', position: [2.87, 0.49, 2.79], color: colors.orange, size: 2, importance: 4,
        description: '',
        fiction: { 'star-trek': [], 'dune': [], 'other': ['Pandora', 'Location of the main character\'s home planet in the movie Avatar.'] },
        exoplanets: {}
    },
    {
        id: 3, name: 'Vega', position: [9.03, -8.22, -21.81], color: colors.blue, size: 5, importance: 2,
        description: '',
        fiction: { 'star-trek': [], 'dune': [], 'other': ['', 'Point of origin of extraterrestrial signal in Contact'] },
        exoplanets: {}
    },
    {
        id: 4, name: 'Sirius', position: [-6.04, 1.39, 6.52], color: colors.white, size: 4, importance: 3,
        description: '',
        fiction: { 'star-trek': [], 'dune': [], 'other': [] },
        exoplanets: {}
    },
    {
        id: 5, name: 'Tau Ceti', position: [-3.40, 11.50, -0.41], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['Tellar', ''], 'dune': [], 'other': ['', 'In Andy Weir\'s novel The Ave Maria Project, the main character flies to the Tau Ceti system to save Earth.'] },
        exoplanets: {}
    },
    {
        id: 6, name: 'Procyon', position: [-8.92, -2.47, 5.95], color: colors.lightyellow, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['Andoria', 'Homeworld of the Andorians and the Aenar, founding planet of Federation.'], 'dune': [], 'other': [] },
        exoplanets: {}
    },
    {
        id: 7, name: '40 Eridani', position: [-12.00, 10.036, 4.56], color: colors.orange, size: 2, importance: 3,
        description: '',
        fiction: { 'star-trek': ['Vulcan', 'Inhabited M-class planet orbiting the star 40 Eridani A in the Vulcan system.\n Homeworld of the Vulcans and the ancestors of the Romulans, founding planet of the Federation.'], 'dune': [], 'other': ['Erid', 'Home world of Rocky\'s species, Eridians (Project Hail Mary)'] },
        exoplanets: {}
    },
    {
        id: 8, name: 'Wolf 359', position: [-1.9, -6.47, 3.91], color: colors.red, size: 1, importance: 4,
        description: '',
        fiction: { 'star-trek': ['', 'Location of battle between the Federation and the Borg.'], 'dune': [], 'other': [] },
        exoplanets: {}
    },
    {
        id: 9, name: 'Omega Leonis', position: [-60.81, -67.82, 58.03], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['Qo\'noS', 'Homeworld of the Klingons and the capital of the Klingon Empire.'], 'dune': [], 'other': [] },
        exoplanets: {}
    },
    {
        id: 10, name: 'Romulus', position: [60, -20, 65], color: colors.red, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'The capital of the Romulan Empire.'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 11, name: 'Cardassia', position: [-10, 10, -85], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Cardassians and the capital of the Cardassian Union.'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 12, name: 'Ferenginar', position: [55, 10, -85], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Ferengi and the capital of the Ferengi Alliance.'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 13, name: 'Bajor', position: [-5, 10, -80], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Bajorans, location of wormhole to the Gamma quadrant.'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 14, name: 'Canopus', position: [-42.82, 132.44, 276.99], color: colors.white, size: 1, importance: 1,
        description: '',
        fiction: { 'star-trek': [], 'dune': ['Arrakis', 'Arrakis is the most important planet in the universe, as it is the only source of the drug melange.'], 'other': [] },
        exoplanets: {}
    },
    {
        id: 15, name: 'Xindi', position: [-5, 5, -50], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'A group of six sentient species who all evolved on Xindus, a planet in the Delphic Expanse'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 16, name: 'Nimbus III', position: [25, -10, 40], color: colors.orange, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Inhabited third planet in the Nimbus star system. This Class M planet was orbited by at least two moons. Seen in Star Trek V'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 17, name: 'Qzinty', position: [-55, 25, 25], color: colors.yellow, size: 3.5, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Territory of the Qzinty.'], 'dune': [], 'other': [] },
        exoplanets: {}, hide: true
    },
    {
        id: 22, name: 'Betazed', position: [15, -10, -25], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Betazoids, a telepathic species.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 23, name: 'Denobula', position: [30, 0, 20], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Denobulans, known for advanced medical science.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 24, name: 'Risa', position: [25, -15, 10], color: colors.yellow, size: 2, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Federation pleasure planet known for leisure and diplomacy.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 25, name: 'Trill', position: [-20, 5, -30], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Trill species, hosts to symbiotic lifeforms.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 26, name: 'Breen Confederacy', position: [-60, -10, -40], color: colors.yellow, size: 4, importance: 1,
        description: '',
        fiction: {
            'star-trek': ['', 'Region controlled by the Breen, a secretive and technologically advanced power.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 27, name: 'Gorn Hegemony', position: [-65, 20, 20], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Territory of the Gorn, a reptilian species known for their strength and isolationism.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 28, name: 'Tholian Assembly', position: [-75, 25, 10], color: colors.orange, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Region of space controlled by the Tholians, a crystalline-based species.'],
            'dune': [], 'other': []
        },
        exoplanets: {}, hide: true
    },
    {
        id: 29, name: 'Capella', position: [-40.8, -3.42, -12.8], color: colors.yellow, size: 3, importance: 3,
        description: 'The brightest star in the northern constellation of Auriga.',
        fiction: {
            'star-trek': ['', 'Inhabited planetary system located inside a sector of the Alpha Quadrant'],
            'dune': [], 'other': []
        },
        exoplanets: {}
    },
    {
        id: 30, name: 'Delta Pavonis', position: [14.51, 10.66, 8.45], color: colors.yellow, size: 3, importance: 3,
        description: 'Single star in the constellation of Pavo',
        fiction: {
            'star-trek': [], 'dune': ['Caladan', 'The third planet orbiting the star Delta Pavonis. A lush oceanic world, and the ancestral home of House Atreides.'], 'other': []
        },
        exoplanets: {}
    },
    {
        id: 30, name: '36 Ophiuchi', position: [19.35, -2.34, 0.58], color: colors.orange, size: 2, importance: 4,
        description: 'A triple star system 19.5 light-years from Earth in the constellation Ophiuchus',
        fiction: {
            'star-trek': [], 'dune': ['Giedi Prime', 'A planet orbiting the star Ophiuchi B. The historical homeworld of House Harkonnen'], 'other': []
        },
        exoplanets: {}
    },
    {
        id: 31, name: 'Gliese 581', position: [15.62, -13.18, 1.62], color: colors.red, size: 1, importance: 4,
        description: 'A red dwarf star of spectral type M3V which hosts a planetary system of 7 planets.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': []
        },
        exoplanets: {}
    },
    {
        id: 32, name: 'Alpha Cassiopeiae', position: [-118.13, 25.03, -193.4], color: colors.orange, size: 4, importance: 2,
        description: 'Has the proper name Schedar, is the brightest star in the constellation of Cassiopeia.',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['', 'The characters from the feature film Children in the Universe are sent to the planet in the Shedar star system.']
        },
        exoplanets: {}
    },
    {
        id: 33, name: 'Arcturus', position: [12.64, -34.29, -3.4], color: colors.orange, size: 4, importance: 2,
        description: 'Red giant star in the constellation of Boötes, the brightest star in the constellation',
        fiction: {
            'star-trek': ['', 'Homeworld of the Arcturians. The Arcturian dog bird is native to this system.'], 'dune': [], 'other': ['', 'In the 2016 film Passengers, the starship Avalon along with the main characters perform a slingshot maneuver around Arcturus on their journey to a distant solar system.']
        },
        exoplanets: {}
    },
    {
        id: 34, name: 'Rigel', position: [-670.85, 362.52, 375.56], color: colors.blue, size: 4, importance: 2,
        description: 'Blue supergiant star in the equatorial constellation of Orion',
        fiction: {
            'star-trek': ['', 'The source of the name for the Rigel Cup'], 'dune': [], 'other': []
        },
        exoplanets: {}
    },
    {
        id: 35, name: 'Achernar', position: [25.62, 118.89, 67.31], color: colors.lightblue, size: 2, importance: 3,
        description: 'The brightest star in the constellation of Eridanus and the ninth-brightest in the night sky',
        fiction: {
            'star-trek': [], 'dune': [], 'other': ['', 'In Yevgeny Yefremov\'s novel The Andromeda Nebula, the final chapters are devoted to the preparation and dispatch of an expedition of Earthlings tasked with colonizing two habitable planets orbiting Acheron.']
        },
        exoplanets: {}
    },
    {
        id: 36, name: 'Regulus', position: [-35.77, -59.56, 37.6], color: colors.lightblue, size: 2, importance: 2,
        description: 'The brightest object in the constellation Leo. Regulus appears single, but is actually a quadruple star system composed of four stars that are organized into two pairs.',
        fiction: {
            'star-trek': ['', 'In 2257, during the first Federation-Klingon War, this star\'s system was partially occupied by the Klingons.'], 'dune': [], 'other': []
        },
        exoplanets: {}
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
//         exoplanets: {}
//     }