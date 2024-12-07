const solarProducts = [
    // Batteries
    
    {
        id: 1,
        type: "Battery",
        name: "Lithium-Ion Battery",
        model: "LiFePO4 200Ah",
        price: "N450,000",
        capacity: "200Ah, 12V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/812857/1.jpg?6689"
    },
    {
        id: 2,
        type: "Inverter",
        name: "Pure Sine Wave Inverter",
        model: "Renogy 1000W",
        price: "N288,000",
        capacity: "1000W, 12V",
        image: "https://i.ebayimg.com/images/g/SkUAAOSwe4dmmWx-/s-l1600.webp"
    },
    {
        id: 3,
        type: "Battery",
        name: "AGM Deep Cycle Battery",
        model: "AGM 150Ah",
        price: "N150,000",
        capacity: "150Ah, 12V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/1533272/1.jpg?0526"
    },
    {
        id: 4,
        type: "Battery",
        name: "Gel Battery",
        model: "GEL 120Ah",
        price: "N240,000",
        capacity: "120Ah, 12V",
        image: "https://www.sumecplaza.com/cdn/shop/files/Untitleddesign_26_19411dd4-38d6-421a-a82e-fa51312e920b_1080x.png?v=1691233439"
    },
    {
        id: 5,
        type: "Solar Panel",
        name: "PERC Solar Panel",
        model: "PERC 450W",
        price: "N230,000",
        capacity: "450W, 24V",
        image: "https://i.ebayimg.com/images/g/iBQAAOSw54lm60Xj/s-l1600.webp"
    },
    {
        id: 6,
        type: "Battery",
        name: "Sealed Lead Acid Battery",
        model: "SLA 100Ah",
        price: "N27,000",
        capacity: "100Ah, 12V",
        image: "https://cloudsecurity.com.ng/wp-content/uploads/2019/03/12vdc-7ah-battery.jpg"
    },
    
    {
        id: 7,
        type: "Battery",
        name: "Tubular Battery",
        model: "Tub 220Ah",
        price: "N370,000",
        capacity: "220Ah, 12V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/1090063/1.jpg?3350"
    },

    // Charge Controllers
    {
        id: 8,
        type: "Charge Controller",
        name: "MPPT Charge Controller",
        model: "Tracer 4215BN",
        price: "N45,000",
        capacity: "40A, 12/24V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/1051722/1.jpg?6698"
    },
    {
        id: 9,
        type: "Charge Controller",
        name: "MPPT Charge Controller",
        model: "Victron BlueSolar 75/15",
        price: "$130",
        capacity: "80A, 12/24V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/8107852/1.jpg?2884"
    },
    {
        id:10,
        type: "Charge Controller",
        name: "MPPT Charge Controller",
        model: "EPEVER MPPT 60A",
        price: "N58,000",
        capacity: "60A, 12/24/48V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/4296852/1.jpg?8187"
    },
    {
        id:11,
        type: "Battery",
        name: "AGM Solar Battery",
        model: "AGM 250Ah",
        price: "N678,000",
        capacity: "250Ah, 12V",
        image: "https://www.europe-solarstore.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/a/g/agm_deep_cycle_battery_12v_90ah.jpg"
    },
    {
        id :12,
        type: "Charge Controller",
        name: "PWM Charge Controller",
        model: "EP Solar 3024Z",
        price: "N145,000",
        capacity: "30A, 12/24V",
        image: "https://i.ebayimg.com/images/g/SawAAOSw3HFll5hk/s-l1600.webp"
    },
    {
        id: 13,
        type: "Charge Controller",
        name: "PWM Charge Controller",
        model: "Renogy Wanderer 10A",
        price: "N65,000",
        capacity: "10A, 12V",
        image: "https://cdn11.bigcommerce.com/s-fhnch/images/stencil/960w/products/1574/23660/_01__71109.1710888764.jpg?c=2"
    },
    {
        id: 14,
        type: "Charge Controller",
        name: "MPPT Charge Controller",
        model: "Morningstar SunSaver 15A",
        price: "N175,000",
        capacity: "15A, 12V",
        image: "https://i.ebayimg.com/images/g/R9wAAOSwQoJj~sDz/s-l1600.webp"
    },
    {
        id:15,
        type: "Charge Controller",
        name: "PWM Charge Controller",
        model: "SolarEpic 20A",
        price: "N200,000",
        capacity: "20A, 12/24V",
        image: "https://i.ebayimg.com/thumbs/images/g/eBYAAOSwg6dey0BD/s-l300.webp"
    },

    // Inverters
    {
        id:16,
        type: "Inverter",
        name: "Pure Sine Wave Inverter",
        model: "PSW-2000W",
        price: "N570,000",
        capacity: "2000W, 24V",
        image: "https://i.ebayimg.com/images/g/DEMAAOSwe5tlA96z/s-l1600.webp"
    },
    {
        id:17,
        type: "Inverter",
        name: "Modified Sine Wave Inverter",
        model: "MSW-1500W",
        price: "N270,000",
        capacity: "1500W, 12V",
        image: "https://i.ebayimg.com/images/g/YCoAAOSwT5tWQDej/s-l1600.webp"
    },
    {
        id:18,
        type: "Inverter",
        name: "Hybrid Inverter",
        model: "Growatt SPF 5000TL HVM",
        price: "N1,200,000",
        capacity: "5000W, 48V",
        image: "https://i.ebayimg.com/images/g/ptoAAOSweKtmgdIr/s-l1600.webp"
    },
    {
        id:19,
        type: "Battery",
        name: "Lithium-Ion Battery",
        model: "LiFePO4 100Ah",
        price: "N270,000",
        capacity: "100Ah, 12V",
        image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/1533272/1.jpg?0526"
    },
    {
        id:20,
        type: "Inverter",
        name: "Grid-Tie Inverter",
        model: "Enphase IQ7",
        price: "N350,000",
        capacity: "250W, 120V",
        image: "https://i.ebayimg.com/images/g/PGEAAOSw99FnGBYx/s-l1600.webp"
    },
    
    {
        id:21,
        type: "Inverter",
        name: "Off-Grid Inverter",
        model: "Victron Phoenix 1200",
        price: "N700,000",
        capacity: "1200W, 24V",
        image: "https://i.ebayimg.com/images/g/rLYAAOSwNqxk8~Bl/s-l1600.webp"
    },
    {
        id: 22,
        type: "Inverter",
        name: "Inverter Charger",
        model: "Samlex 1500W",
        price: "N650,000",
        capacity: "1500W, 24V",
        image: "https://i.ebayimg.com/images/g/I44AAOSw3b9k0hof/s-l1600.webp"
    },

    // Solar Panels
    {
        id: 23,
        type: "Solar Panel",
        name: "Monocrystalline Solar Panel",
        model: "Mono 200W",
        price: "N170,000",
        capacity: "200W, 12V",
        image: "https://i.ebayimg.com/images/g/pDYAAOSw2HVnDW-g/s-l1600.webp"
    },
    {
        id:24,
        type: "Solar Panel",
        name: "Polycrystalline Solar Panel",
        model: "Poly 250W",
        price: "N189,000",
        capacity: "250W, 24V",
        image: "https://i.ebayimg.com/images/g/KpUAAOSwED5mvHxW/s-l1600.webp"
    },
    {
        id:25,
        type: "Solar Panel",
        name: "Flexible Solar Panel",
        model: "Flex 100W",
        price: "N145,000",
        capacity: "100W, 12V",
        image: "https://i.ebayimg.com/images/g/2u8AAOSwt2xmOQPl/s-l1600.webp"
    },
    {
        id: 26,
        type: "Solar Panel",
        name: "Bifacial Solar Panel",
        model: "Bifa 400W",
        price: "N185,000",
        capacity: "400W, 24V",
        image: "https://fouanistore.com/storage/data/products/1150.png?v=0"
    },
    {
        id: 27,
        type: "Solar Panel",
        name: "Portable Solar Panel",
        model: "Port 120W",
        price: "N245,000",
        capacity: "120W, 12V",
        image: "https://i.ebayimg.com/images/g/ZmsAAOSwWNhjhQnU/s-l1600.webp"
    },
    {
        id: 28,
        type: "Solar Panel",
        name: "High-Efficiency Solar Panel",
        model: "HE Mono 370W",
        price: "N310,000",
        capacity: "370W, 24V",
        image: "https://i.ebayimg.com/images/g/c8EAAOSwImZmn31T/s-l1600.webp"
    },
    
    {
        id: 29,
        type: "Solar Panel",
        name: "Thin-Film Solar Panel",
        model: "Thin 150W",
        price: "N90,000",
        capacity: "150W, 12V",
        image: "https://i.ebayimg.com/images/g/kTIAAOSw3x9h0yIL/s-l1600.webp"
    }
];

export {solarProducts}
