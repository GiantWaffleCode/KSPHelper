
const Kerbol = {

System: "Kerbol",

Planets: {
    Moho: {
        name: "Moho",
        orbit: 5263138304,
        gravity: 2.70,
        mass: 12345    
        },

    Eve: {
        name: "Eve",
        orbit: 9832684544,
        gravity: 16.7,
        mass: 12345,    
        moons: {
            Gilly: {
                name: "Gilly",
                orbit: 31500000,
                gravity: 0.049,
                mass: 12345
            }}
        },

    Kerbin: {
        name: "Kerbin",
        orbit: 1359940256,
        gravity: 9.81,
        mass: 12345,    
        moons: {
            Mun: {
                name: "Mun",
                orbit: 12000000,
                gravity: 1.63,
                mass: 12345
            },
            Minmus: {
                name: "Minmus",
                orbit: 47000000,
                gravity: 0.491,
                mass: 12345
            }}
        },

    Duna: {
        name: "Duna",
        orbit: 20726155264,
        gravity: 2.94,
        mass: 12345,    
        moons: {
            Ike: {
                name: "Ike",
                orbit: 3200000,
                gravity: 1.10,
                mass: 12345
            }}
        },

    Dres: {
        name: "Dres",
        orbit: 40839348203,
        gravity: 1.13,
        mass: 12345    
        },

    Jool: {
        name: "Jool",
        orbit: 68773560320,
        gravity: 7.85,
        mass: 12345,    
        moons: {
            Laythe: {
                name: "Laythe",
                orbit: 27184000,
                gravity: 7.85,
                mass: 12345
            },
            Vall: {
                name: "Vall",
                orbit: 43152000,
                gravity: 2.31,
                mass: 12345
            },
            Tylo: {
                name: "Tylo",
                orbit: 68500000,
                gravity: 7.85,
                mass: 12345
            },
            Bop: {
                name: "Bop",
                orbit: 128500000,
                gravity: 0.589,
                mass: 12345
            },
            Pol: {
                name: "Pol",
                orbit: 179890000,
                gravity: 0.373,
                mass: 12345
            }}
        },

    Eeloo: {
        name: "Eeloo",
        orbit: 90118820000,
        gravity: 1.69,
        mass: 12345    
        }
    }
};

console.Log(Kerbol.Kerbin.Mun.name);