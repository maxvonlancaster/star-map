const colors = {
    red: '#ff4444',
    orange: '#ffaa00',
    yellow: '#ffff00',
    lightyellow: '#ffffbb',
    white: '#ffffff',
    lightblue: '#eeffff',
    blue: '#88ccff'
}

// 173.1 -73.4

const stars = [
    { name: 'Sol', position: [0, 0, 0], color: colors.yellow, size: 3, importance: 1 },
    { name: 'Alpha Centauri', position: [2.87, -0.49, -2.79], color: colors.orange, size: 2, importance: 4 },
    { name: 'Vega', position: [9.03, 8.22, 21.81], color: colors.blue, size: 5, importance: 2 },
    { name: 'Sirius', position: [-6.04, -1.39, -6.52], color: colors.white, size: 4, importance: 3 },
    { name: 'Tau Ceti', position: [-3.40, -11.50, 0.41], color: colors.yellow, size: 3, importance: 3 },
    { name: 'Procyon', position: [-8.92, 2.47, -5.95], color: colors.lightyellow, size: 3, importance: 3 },
    { name: '40 Eridani', position: [-12.00, -10.036, -4.56], color: colors.orange, size: 2, importance: 3 },
]

export default stars