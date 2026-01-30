const colors = {
    red: '#ff4444',
    orange: '#ffaa00',
    yellow: '#ffff00',
    lightyellow: '#ffffbb',
    white: '#ffffff',
    lightblue: '#eeffff',
    blue: '#88ccff'
}

const trekLocations = [
    {
        id: 1001, name: 'Romulus', position: [90, -50, 105], color: colors.red, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'The capital of the Romulan Empire.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1002, name: 'Cardassia', position: [-10, 10, -105], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Cardassians and the capital of the Cardassian Union.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1003, name: 'Ferenginar', position: [55, 10, -105], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Ferengi and the capital of the Ferengi Alliance.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1004, name: 'Bajor', position: [-5, 10, -100], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'Homeworld of the Bajorans, location of wormhole to the Gamma quadrant.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1005, name: 'Xindi', position: [-5, 5, -50], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: { 'star-trek': ['', 'A group of six sentient species who all evolved on Xindus, a planet in the Delphic Expanse'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1006, name: 'Nimbus III', position: [35, -10, 50], color: colors.orange, size: 3, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Inhabited third planet in the Nimbus star system. This Class M planet was orbited by at least two moons. Seen in Star Trek V'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1007, name: 'Qzinty', position: [-55, 25, 25], color: colors.yellow, size: 3.5, importance: 3,
        description: '',
        fiction: { 'star-trek': ['', 'Territory of the Qzinty.'], 'dune': [], 'other': [] },
        exoplanets: [], hide: true
    },
    {
        id: 1008, name: 'Dominion', position: [42000, 25, -20000], color: colors.yellow, size: 3.5, importance: 0,
        description: '',
        fiction: {
            'star-trek': ['', 'A major imperialist state in the Gamma Quadrant. Technologically advanced and millennia old, the Dominion was a interstellar oligarchy founded under the absolute rule of a group of Changelings known as the Founders'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1009, name: 'Borg', position: [54000, 25, 20000], color: colors.yellow, size: 3.5, importance: 0,
        description: '',
        fiction: {
            'star-trek': ['', 'A pseudo-species of cybernetic humanoids, or cyborgs, from the Delta Quadrant known as drones, which formed the entire population of the Borg Collective'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1010, name: 'Betazed', position: [15, -10, -25], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Betazoids, a telepathic species.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1011, name: 'Denobula', position: [30, 0, 20], color: colors.yellow, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Denobulans, known for advanced medical science.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1012, name: 'Risa', position: [25, -15, 10], color: colors.yellow, size: 2, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'Federation pleasure planet known for leisure and diplomacy.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1013, name: 'Trill', position: [-20, 5, -30], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Homeworld of the Trill species, hosts to symbiotic lifeforms.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1014, name: 'Breen Confederacy', position: [60, -60, -340], color: colors.yellow, size: 4, importance: 1,
        description: '',
        fiction: {
            'star-trek': ['', 'Region controlled by the Breen, a secretive and technologically advanced power.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1015, name: 'Gorn Hegemony', position: [-85, 20, 20], color: colors.yellow, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Territory of the Gorn, a reptilian species known for their strength and isolationism.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1016, name: 'Tholian Assembly', position: [-175, 25, 10], color: colors.orange, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Region of space controlled by the Tholians, a crystalline-based species.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1017, name: 'Tzenkethi Coalition', position: [-10, 10, -60], color: colors.orange, size: 3, importance: 2,
        description: '',
        fiction: {
            'star-trek': ['', 'Region of space controlled by the Tholians, a crystalline-based species.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
    {
        id: 1018, name: 'Organia', position: [-85, -10, 25], color: colors.orange, size: 3, importance: 3,
        description: '',
        fiction: {
            'star-trek': ['', 'The homeworld of the Organians, an incorporeal species. Located near the Federation-Klingon border.'],
            'dune': [], 'other': []
        },
        exoplanets: [], hide: true
    },
]

export default trekLocations