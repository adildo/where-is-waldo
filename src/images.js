import lev1 from './images/level-1.jpeg';
import lev2 from './images/level-2.jpeg';
import lev3 from './images/level-3.jpeg';
import lev4 from './images/level-4.jpeg';
import lev5 from './images/level-5.jpeg';
import lev6 from './images/level-6.jpeg';
import wenda from './images/wenda.jpeg'
import odlaw from './images/odlaw.jpeg'
import wizard from './images/wizard.jpeg'
import waldo from './images/waldo.jpeg'

const imagesObj = {
    level1: {
        level: 1, 
        image: lev1,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: 544,
                cordsY: 391
            },
            odlaw: {
                image: odlaw,
                cordsX: 249,
                cordsY: 396
            },
            wizard: {
                image: wizard,
                cordsX: 641,
                cordsY: 396
            }
        }
    },
    level2: {
        level: 2, 
        image: lev2,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: "x",
                cordsY: "y"
            }
        }
    },
    level3: {
        level: 3, 
        image: lev3,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: "x",
                cordsY: "y"
            },
            odlaw: {
                image: odlaw,
                cordsX: "x",
                cordsY: "y"
            },
            wizard: {
                image: wizard,
                cordsX: "x",
                cordsY: "y"
            },
            wenda: {
                image: wenda,
                cordsX: "x",
                cordsY: "y"
            }
        }
    },
    level4: {
        level: 4, 
        image: lev4,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: "x",
                cordsY: "y"
            },
            odlaw: {
                image: odlaw,
                cordsX: "x",
                cordsY: "y"
            }
        }
    },
    level5: {
        level: 5, 
        image: lev5,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: "x",
                cordsY: "y"
            },
            odlaw: {
                image: odlaw,
                cordsX: "x",
                cordsY: "y"
            },
            wizard: {
                image: wizard,
                cordsX: "x",
                cordsY: "y"
            },
            wenda: {
                image: wenda,
                cordsX: "x",
                cordsY: "y"
            }
        }
    },
    level6: {
        level: 6, 
        image: lev6,
        Characters: {
            waldo: {
                image: waldo,
                cordsX: "x",
                cordsY: "y"
            }
        }
    }
}

export default imagesObj