// Store data with prices and organic classification
const testStores = [
    {
        name: "Aldi Ogden Avenue",
        location: { lat: 41.795054238397235, lng: -88.1215363761931},
        prices: {
            // Non-organic items
            apple: { price: 0.66, organic: false },
            rice: { price: 2.65, organic: false },
            banana: { price: 0.87, organic: false },
            bread: { price: 3.60, organic: false },
            flatLeafSpinach: { price: 1.75, organic: false },//8oz packaged
            coleslaw: { price: 1.89, organic: false },//14oz, packaged
            southwestChoppedSalad: { price: 3.65, organic: false },//12oz packaged
            italianSalad: { price: 2.85, organic: false },
            springMix: { price: 2.85, organic: false },//5oz packaged
            gardenSalad: { price: 2.19, organic: false },//12oz packaged
            sweetKaleSaladKit: { price: 3.65, organic: false },//12oz packaged
            caesarSaladKit: { price: 3.29, organic: false },//10oz packaged
            asianChoppedSaladKit: { price: 3.65, organic: false },//12oz packaged
            shreddedLettuce: { price: 2.99, organic: false },//8oz packaged
            mangoSlices: { price: 5.99, organic: false },
            sweetButterSalad: { price: 2.55, organic: false },//8oz pakaged
            sweetOnions: { price: 2.99, organic: false },//2 pounds
            carrots: { price: 1.51, organic: false },//2 pounds
            romaineLettuceHearts: { price: 2.35, organic: false },
            caramelApples: { price: 3.85, organic: false },//3pk
            papaya: { price: 4.03, organic: false },
            cucumber: { price: 0.79, organic: false },//unit
            artisanLettuc: { price: 3.55, organic: false },//packaged
            babyCarrots: { price: 1.19, organic: false },//16oz packaged
            autumnGrapes: { price: 6.59, organic: false },//2lb
            grannySmithApples: { price: 3.99, organic: false },//3lb
            honeyTomatoes: { price: 3.49, organic: false },//12oz
            redDeliciousApples: { price: 2.99, organic: false },//3lb
            idahoYellowPotatoes: { price: 1.99, organic: false },//24oz
            pomegranate: { price: 2.99, organic: false },
            strawberries: { price: 2.75, organic: false },//1lb
            greenPeppers: { price: 1.50, organic: false },//3pcs
            pinkLadyApples: { price: 4.29, organic: false },//3lbs
            russetPotatoes: { price: 1.89, organic: false },//10lbs
            blueberries: { price: 2.99, organic: false },//1pint
            mandarinOranges: { price: 3.99, organic: false },//3lbs
            pineapple: { price: 3.49, organic: false },//each unit
            grapeTomatoes: { price: 2.99, organic: false },//10oz
            blackerries: { price: 2.65, organic: false },//6oz
            asparagus: { price: 1.99, organic: false },//1lb
            jalapenoPeppers: { price: 0.89, organic: false },//8oz
            grapeFruit: { price: 5.49, organic: false },//5lbs
            cauliflowerCrowns: { price: 3.23, organic: false },//1 each
            miniAvocados: { price: 3.25, organic: false },
            miniSweetPeppers: { price: 3.36, organic: false },//1lb
            anjouPears: { price: 5.19, organic: false },
            tomatoes: { price: 2.19, organic: false },
            tomatoesOnTheVine: { price: 2.75, organic: false },
            sugarSnapPeas: { price: 2.55, organic: false },
            lemons: { price: 4.29, organic: false },
            redPotatoes: { price: 3.95, organic: false },
            radishes: { price: 1.75, organic: false },
            cocktailTomatoes: { price: 4.29, organic: false },//16oz
            greenOnions: { price: 1.05, organic: false },
            slicedWhiteMushrooms: { price: 1.89, organic: false },//8oz
            kiwi: { price: 4.85, organic: false },//2lb
            sweetCorn: { price: 3.29, organic: false },//4 count
            bakingPotatoes: { price: 3.95, organic: false },//5lb 
            limes: { price: 2.45, organic: false },//1lb
            celery: { price: 1.89, organic: false },//1 each
            whiteOnions: { price: 2.65, organic: false },//3lb
            cherubGrapeTomatoes: { price: 2.49, organic: false },//10oz
            redOnions: { price: 2.19, organic: false },//2lb
            miniCucumbers: { price: 2.15, organic: false },//1lb
            yellowOnions: { price: 2.65, organic: false },//3lb
            ColoredPeppers: { price: 2.99, organic: false },//3 count
            cilantroBunch: { price: 0.89, organic: false },//1 bunch
            bostonLettuce: { price: 2.75, organic: false },//1 each
            freshNavelOranges: { price: 4.09, organic: false },//4 lbs
            gingerRoot: { price: 2.19, organic: false },//8oz
            seedlessCucumber: { price: 1.05, organic: false },//1 each
            biteSizeYellowPotatoes: { price: 3.65, organic: false },//24oz
            yellowPotatoes: { price: 3.95, organic: false },//5lb
            raspberries: { price: 3.65, organic: false },//6oz
            caraCaraOranges: { price: 3.19, organic: false },//3lb
            snackingTomatoesOnTheVine: { price: 3.95, organic: false },//12oz
            babyBellaMushrooms: { price: 1.99, organic: false },//8oz
            brusselsSprouts: { price: 2.55, organic: false },//1lb
            icebergLettuce: { price: 1.99, organic: false },
            whiteMushrooms: { price: 1.75, organic: false },
            fancyMixedNuts: { price: 5.49, organic: false },
            peeledGarlic: { price: 2.99, organic: false },//6oz
            fujiApples: { price: 3.9, organic: false },//3lb
            galaApples: { price: 3.29, organic: false },//3lb
            garlic: { price: 1.75, organic: false },//3 pack
            cosmicCrispApples: { price: 2.75, organic: false },//2lb
            frenchGreenBeans: { price: 3.29, organic: false },//1lb
            redGrapes: { price: 2.68, organic: false },//2.25 lb
            mango: { price: 1.19, organic: false },//1 each
            honeycrispApples: { price: 2.35, organic: false },//1 pound
            bananas: { price: 0.49, organic: false },//1 pound
            broccoliCrowns: { price: 2.15, organic: false },//1 pound
            smallSeedlessWatermelon: { price: 4.59, organic: false },//1 each
            largeSeedlessWatermelon: { price: 7.69, organic: false },//1 each
            cantaloupe: { price: 2.19, organic: false },//1 each
            largeAvocado: { price: 1.05, organic: false },//1 each
            greenGrapes: { price: 5.38, organic: false },//2.25 pounds
            seedlessLemons: { price: 2.99, organic: false },//1lb
            // Organic items
            organicApple: { price: 1.20, organic: true },
            organicRice: { price: 4.25, organic: true },
            organicBanana: { price: 1.25, organic: true },
            organicBread: { price: 4.95, organic: true },
            organicChoppedKale: { price: 3.19, organic: true },//12oz
            organicMixedGreens: { price: 3.19, organic: true },//5oz
            organicSpringMix: {price: 5.39, organic: true},//16oz
            organicBabySpinach: {price: 3.19, organic: true},//5oz
            organicStrawberries: {price: 4.19, organic: true},//1lb
            organicBroccoli: {price: 3.29, organic: true},//1 each
            organicPinkLadyApples: {price: 4.85, organic: true},//3lb
            organicRaspberries: {price: 3.85, organic: true},//6oz
            organicCherubGrapeTomatoes: {price: 3.29, organic: true},//10oz
            organicZucchini: {price: 2.59, organic: true},//1.25 lbs
            organicRomaineHearts: {price: 4.29, organic: true},
            organicYellowPotatoes: {price: 4.39, organic: true},
            organicGalaApples: {price: 4.39, organic: true},//3lbs
            organicBlackberries: {price: 3.65, organic: true},//6oz
            organicArugulaSpinachMix: {price: 3.19, organic: true},
            organicCeleryHearts: {price: 2.45, organic: true},//1 each
            organicMiniCucumbers: {price: 3.65, organic: true},//1lb
            organicGrapeTomatoes: {price: 3.09, organic: true},//10oz
            organicBlueberries: {price: 3.55, organic: true},//6oz
            organicBabyPeeledCarrots: {price: 1.75, organic: true},//16oz

        }
    },
    {
        name: "Jewel Osco Naperville",
        location: { lat: 41.7870099, lng: -88.1451827},
        prices: {
            // Non-organic items
            apple: { price: 0.30, organic: false },
            rice: { price: 3.20, organic: false },
            banana: { price: 0.87, organic: false },
            bread: { price: 3.60, organic: false },
            // Organic items
            organicApple: { price: 0.89, organic: true },
            organicRice: { price: 5.15, organic: true },
            organicBanana: { price: 1.15, organic: true },
            organicBread: { price: 4.75, organic: true },
            greenBeans: .5,//.25 lb
            greenAsparagus: 3.99,//1 lb
            brusselSprouts: 2.99,//1 lb
            brocoliCrown: 1.87,
            zucchini: .60, //per piece
            russetPotatoes: .85,// 1 each
            miniCucumbers: 3.99,//12oz
            celery: 2.99,//1 bunch
            sweetCorn: 4.99,//4 count
            eggplant: .79,//1 each
            sweetPotato: 1.29, //individual potato
            romaineLettuceHearts: 3.99, //prepackaged 3 count 
            icebergLettuce: 1.99,//1 each
            yellowSquash: 1.29,//1 each
            cucumber: .99,//1 each
            tomatillo: 1.29,
            hothouseLargeTomato: 1.79,//each
            greenBellPepper: .99,//each
            yellowBellPepper: 1.99,//each
            carrots: .32,//.25 pounds
            greenCabbage: 1.78,//.89 per pound
            redBellPepper: 1.99,//each
            gingerRoot: 1,//each
            carrots: 2.69,//prepackaged for 2 pounds
            yellowOnions: 2.99,//3 pounds
            garlic: .99,//each 
            babyCarrots: 2.29,//16oz
            garlic: 1.99,//3 pack
            goldPotatoes: 3.99,//3 pounds
            russetPotatoes: 3.99,//5 pounds
            yellowSweetOnion: 1.29,//per pound
            sunsetTomatoes: 3.99,//1 pint
            redOnion: 1.89,//per pound
            yellowOnion: .99,//per pound
            orangeBellPepper: 1.99,//each
            whiteWholeMushrooms: 2.79,//8oz
            brusselsSprouts: 4.99,//15.5oz packaged
            springMix: 4.49,//4oz packaged
            slicedRadish: 3.49,//7oz packaged
            shallot: .33,//each
            organicwhiteMushrooms: 2.79,//8oz packaged
            cilantro: .99,//each
            babyBokChoy: 1.99,//1 bunch
            brocoliFlorets: 4.49,//packaged
            redRomaTomatoes: 1.99,//per pound
            russetPotatoes: 3.99,//3 pounds
            cauliflower: 6.23,//per piece. 2.49 per pound
            okra: 3.99,//16oz
            whiteOnion: 1.29,//per pound, 97 cents per piece
            russetPotatoes: 5.99,//10 pounds
            jumboArtichoke: 1.99,//each
            rubyGoldPotatoes: 4.99,//24oz
            corn: 4.99,//4 count
            organicCucumber: 1.49,//each
            cauliflower: 4.49,//packaged
            tomatoesOnTheVine: 1.99,//per pound
            vineRipeTomatoes: 1.99,//per pound
            greenOnions: .99,//one bunch
            //fruits
            blackberries: 5.99,//10oz
            lemons: 3.99,//2lbs
            organicBloodMoroOrange: 1.50,//1 each
            Avocadoes: 5.99,//bagged
            navelOranges: 5.99,//4lbs
            strawberries: 4.99,//1lb
            driedApricots: 5.99,//14oz
            redSeedlessGrapes: 7.89,//2 pounds
            organicNavelOranges: 1.49,//1 each
            blackPlum: .34,//1 each
            freshCutSeedlessWatermelon: 3.87,//3 pounds
            lemons: .99,//1 each
            organicPears: 1.99,//per pound
            mediumHassAvocado: 1.99,//1 each
            banana: .69,//per pound
            dragonFruit: 3.99,//1 lb
            blueberries: 4.99,//1 pint, prepackaged
            organicLime: .69,//1 each
            navelOranges: 5.99,//3lbs, in a bag
            greenSeedlessGrapes: 7.98,//2lbs
            nagelOranges: 1.49,//1 lb
            mandarins: 5.99,//3lbs
            clementines: 5.99,//3lbs
            blueberries: 6.99,//18oz, prepacked
            organicGrannySmithApples: 2.49,//1 lb
            organicRedGrapefruit: 1.79,//1lb
            blackSeedlessGrapes: 7.98,//2lbs prepacked
            organicHoneycrispApple: 3.49,//1lb
            grannySmithApple: 1.99,//each 
            largeMango: 1.99,//each
            yellowPeach: 3.99,//1lb
            lemons: 3.99,//2lbs
            kiwi: 0.80,//each
            redSeedlessWatermelon: 7.99,//each
            organicStrawberries: 5.99,//1 lb
            goldPineapple: 2.99,//each
            fujiLargeApple: 0.99,//1lb
            honeycrispApple: 2.99,//1lb
            freshPackagedBlackberries: 3.99,//6 oz
            cantaloupe: 2.99,//each
            honeyMango: 0.99,//each
            organicPinkCrispApple: 2.79,//each
            keyLimes: 1.99,//1 lb
            pinkLadyApple: 1.99,//1lb
            organicGreenSeedlessGrapes: 7.98,//2 lbs
            organicBartlettPear: 1.99,//1lb
            redCherries: 7.99,//1 lb
            blueberries: 3.99,//6 oz
            organicRedDeliciousApple: 1.99,//1lb
            organicCosmicCrispApple: 2.99,//1lb
            raspberries: 2.50,//6 oz prepackaged
            DanjouPear: 4.99,//3 lb
            envyApples: 2.99, // 2 lb bag
            miniSeedlessWatermelon: 4.99, // each
            classicCrispApple: 1.99, // 1lbeach
            sumoCitrus: 4.99, // 2 lb bag
            navelOranges: 1.49, // each
            heirloomOrange: 1.49, // each
            jazzApple: 3.99, // 2 lb bag
            grannySmithApple: 4.99, // 3 lb bag
            organicFujiApple: 2.49, // 1lb
            signatureSelectFarmsGalaApple: 4.99, // 3 lb bag
            signatureSelectFarmsHassAvocado: 5.99, // 5 count
            organicSeedlessWatermelon: 5.99, // each
            organicBoscPear: 1.99,//1 lb
            honeydewMelon: 4.99,//each
            lemonLarge: 0.99,//each
            plantainBanana: 0.88,//1lb
            cottonCandyGrapes: 9.98,//2 lbs
            galaApple: 1.99,//1lb
            organicConcordePear: 2.29,//1lb
            pinkLadyApples: 4.99,//3lb packaged
            organicBanana: .79,//1lb
            bartlettPear: 1.99,//1lb
            organicEnvyApple: 1.99, //1lb each
            rubyGrapefruit: 6.99, // prepacked - 5lb
            honeycrispApple: 7.99, // 3lb packaged
            yellowNectarine: 3.99, // 1lb
            organicGalaApple: 5.99, // prepacked - 3 lb
            pearsRedPrepacked: 4.99, // 3 lb
            jackfruit: 1.29, // 1lb
            honeycrispApplesPrepacked: 7.99, // bag - 3 lb
            caraCaraNavelOrange: 1.79, // 1lb
            organicCherries: 8.99, // 1 lb
            minneolaTangerine: 1.49, // 1lb
            whiteNectarine: 3.99, // 1lb
            organicKiwi: 3.99, // 1 lb
            danjouPear: 1.99, // 1lb
            organicRedSeedlessGrapes: 7.98, // 2 lb

            





            yellowCorn: 1.25,
            miniCucumbers: 3.99,
            slicedBellaMushrooms: 2.99,
            rubyGoldPotatoes: 4.99,
            babyBokChoy: 1.99,
            brocolliFlorets: 4.49,//packaged
            cucumber: .99,
            redRomaTomatoes: 1.99,
            gingerRoot: 1,//each
            eggplant: 1.79,
            cilantro: .99,
            cauliflower: 4.45,//packaged
            shallot: .33,//each
            jalapenoPeppers: 1.49,//per pound
            redOnions: 1.89,//per pound
            celery: 2.99,//packaged
            orangeBellPepper: 1.99,//each
            tomatoes: 3.99,//2 count
            russetPotatoes: 5.99,//10 pounds
            organicBabyBellaMushrooms: 2.99,//packaged
            sweetPotato: 1.29,//per pound
            organicRedRomaTomato: 1.99,//per pound
            cutBeans: 3.79,
            redBeet: .79,//per pound
            organicCucumber: 1.49,//each
            whiteOnions: 1.29,//per pound
            russetPotatoes: 3.99,//5 pounds
            cauliflower: 6.23,//per piece
            babyYellowPotatoes: 4.99,//24oz packaged
            organicZucchini: 1.99,//per piece
            edamame: 3.49,//12oz packaged
            
        }
    },
    {
        name: "whole foods naperville",
        location: { lat: 41.7908, lng: -88.1233 },
        prices: {
            // Non-organic items
            apple: { price: 0.65, organic: false },
            rice: { price: 3.65, organic: false },
            banana: { price: 0.65, organic: false },
            bread: { price: 3.32, organic: false },
            // Organic items
            organicApple: { price: 1.15, organic: true },
            organicRice: { price: 5.45, organic: true },
            organicBanana: { price: 0.95, organic: true },
            organicBread: { price: 4.85, organic: true },
            flatLeafSpinach: 1.75,
            coleslaw: 1.89,
            organicChoppedKale: 3.19,
            southwestChoppedSalad: 3.65,
            italianSalad: 2.85,
            springMix: 2.85,
            gardenSalad: 2.19,
            sweetKaleSaladKit: 3.65,
            caesarSaladKit: 3.29,
            asianChoppedSaladKit: 3.65,
            organicArugulaSpinachMix: 3.19,
            shreddedLettuce: 2.99,
            mangoSlices: 5.99,
            sweetButterSalad: 2.55,
            organicMixedGreens: 3.99,
            organicSpringMix: 5.39,
            organicBabySpinach: 3.19,
            sweetOnions: 2.99,
            carrots: 1.51,
            romaineLettuceHearts: 2.35,
            caramelApples: 3.99,
            papaya: 4.03,
            cucumber: .79,
            artisanLettuc: 3.55,
            babyCarrots: 1.19,
            autumnGrapes: 6.59,
            grannySmithApples: 3.99,
            honeyTomatoes: 3.49,
            redDeliciousApples: 2.99,
            idahoYellowPotatoes: 1.99,
            pomegranate: 2.99,
            strawberries: 2.75,
            greenPeppers: 1.50,
            pinkLadyApples: 4.29,
            organicBlackberries: 3.55,
            russetPotatoes: 1.89,
            blueberries: 2.99,
            mandarinOranges: 3.99,
            pineapple: 3.49,
            grapeTomatoes: 2.99,
            blackerries: 2.65,
            asparagus: 1.99,
            jalapenoPeppers: 0.89,
            grapeFruit: 5.49,
            organicStrawberries: 5.19,
            cauliflowerCrowns: 3.23,
            miniAvocados: 3.25,
            miniSweetPeppers: 3.36,
            anjouPears: 5.19,
            tomatoes: 2.19,
            tomatoesOnTheVine: 2.75,
            sugarSnapPeas: 2.55,
            lemons: 4.29,
            organicCeleryHearts: 2.45,
            redPotatoes: 3.95,
            organicMiniCucumbers: 3.65,
            radishes: 1.75,
            cocktailTomatoes: 4.29,
            greenOnions: 1.05,
            slicedWhiteMushrooms: 1.89,
            organicGrapeTomatoes: 3.09,
            kiwi: 4.85,
            organicBroccoli: 3.29,
            organicPinkLadyApples: 4.85,
            sweetCorn: 3.29,
            bakingPotatoes: 3.95,
            limes: 2.45,
            celery: 1.89,
            whiteOnions: 2.19,
            cherubGrapeTomatoes: 2.49,
            redOnions: 2.19,
            miniCucumbers: 1.89,
            yellowOnions: 2.65,
            ColoredPeppers: 2.99,
            organicBlueberries: 3.55,
            cilantroBunch: 0.89,
            bostonLettuce: 2.75,
            freshNavelOranges: 4.09,
            gingerRoot: 2.19,
            seedlessCucumber: 1.05,
            biteSizeYellowPotatoes: 3.65,
            yellowPotatoes: 3.95,
            raspberries: 3.65,
            caraCaraOranges: 3.19,
            organicBabyPeeledCarrots: 1.75,
            snackingTomatoesOnTheVine: 3.95,
            organicRaspberries: 4.85,
            babyBellaMushrooms: 1.99,
            brusselsSprouts: 2.55,
            icebergLettuce: 1.99,
            whiteMushrooms: 1.75,
            fancyMixedNuts: 5.49,
            peeledGarlic: 2.99,
            organicYellowPotatoes: 4.39,
            organicGalaApples: 4.39,
            fujiApples: 3.9,
            galaApples: 3.29,
            garlic: 1.75,
            cosmicCrispApples: 2.75,
            frenchGreenBeans: 3.29,
            organicRomaineHearts: 4.29,
            redGrapes: 1.19,
            mango: 1.19,
            honeycrispApples: 2.35,
            bananas: 0.49,
            broccoliCrowns: 2.15,
            smallSeedlessWatermelon: 4.59,
            largeSeedlessWatermelon: 7.69,
            cantaloupe: 2.19,
            largeAvocado: 1.05,
            greenGrapes: 5.38,
            organicCherubGrapeTomatoes: 3.29,
            organicZucchini: 2.59,
            seedlessLemons: 2.99,
        }
    }
];

// Initialize variables
const radiusInput = document.getElementById('radius-input');
const storeSelect = document.getElementById('store-select');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const coordinatesDisplay = document.getElementById('coordinates-display');
const groceryItemInput = document.getElementById('grocery-item-input');
const organicSelector = document.getElementById('organic-selector');
const addItemButton = document.getElementById('add-item-button');
const groceryList = document.getElementById('grocery-list');
const locationButton = document.getElementById('location-button');

// Store user's grocery list with organic preferences
let userGroceryList = new Set();

// Common grocery items dictionary for spell checking
const commonGroceryItems = [
    // Fruits
    'apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry', 'raspberry',
    'blackberry', 'pineapple', 'mango', 'kiwi', 'peach', 'pear', 'plum', 'lemon',
    'lime', 'watermelon', 'cantaloupe', 'pomegranate', 'fig', 'date',

    // Vegetables
    'carrot', 'broccoli', 'spinach', 'lettuce', 'tomato', 'potato', 'onion',
    'garlic', 'cucumber', 'pepper', 'celery', 'asparagus', 'corn', 'mushroom',
    'zucchini', 'eggplant', 'cabbage', 'cauliflower', 'pea', 'bean',

    // Common items
    'bread', 'milk', 'cheese', 'egg', 'butter', 'yogurt', 'cream', 'sugar',
    'flour', 'rice', 'pasta', 'cereal', 'coffee', 'tea', 'juice', 'water',
    'salt', 'pepper', 'oil', 'vinegar'
];

// Calculate Levenshtein distance between two strings
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // deletion
                    dp[i][j - 1],     // insertion
                    dp[i - 1][j - 1]  // substitution
                );
            }
        }
    }
    return dp[m][n];
}

// Find closest matching word
function findClosestMatch(input) {
    input = input.toLowerCase().trim();
    
    // If the word is already in our dictionary, return it
    if (commonGroceryItems.includes(input)) {
        return input;
    }

    let closestMatch = input;
    let minDistance = Infinity;

    for (const word of commonGroceryItems) {
        const distance = levenshteinDistance(input, word);
        // Only consider words with a similar length (within 2 characters)
        if (Math.abs(word.length - input.length) <= 2) {
            // Only consider corrections within a reasonable distance
            if (distance < minDistance && distance <= 2) {
                minDistance = distance;
                closestMatch = word;
            }
        }
    }

    return closestMatch;
}

// Function to show correction notification
function showCorrectionNotification(original, corrected) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'rgba(26, 154, 4, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '25px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.transition = 'opacity 0.3s ease';
    notification.textContent = `Did you mean "${corrected}"?`;

    // Add buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '10px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '10px';

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.style.padding = '5px 15px';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '15px';
    yesButton.style.backgroundColor = 'white';
    yesButton.style.color = '#1a9a04';
    yesButton.style.cursor = 'pointer';
    yesButton.style.transition = 'all 0.3s ease';

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.style.padding = '5px 15px';
    noButton.style.border = 'none';
    noButton.style.borderRadius = '15px';
    noButton.style.backgroundColor = 'white';
    noButton.style.color = '#1a9a04';
    noButton.style.cursor = 'pointer';
    noButton.style.transition = 'all 0.3s ease';

    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);
    notification.appendChild(buttonContainer);

    document.body.appendChild(notification);

    // Add hover effects
    yesButton.addEventListener('mouseover', () => {
        yesButton.style.backgroundColor = '#1a9a04';
        yesButton.style.color = 'white';
    });
    yesButton.addEventListener('mouseout', () => {
        yesButton.style.backgroundColor = 'white';
        yesButton.style.color = '#1a9a04';
    });
    noButton.addEventListener('mouseover', () => {
        noButton.style.backgroundColor = '#1a9a04';
        noButton.style.color = 'white';
    });
    noButton.addEventListener('mouseout', () => {
        noButton.style.backgroundColor = 'white';
        noButton.style.color = '#1a9a04';
    });

    return new Promise((resolve) => {
        yesButton.onclick = () => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
            resolve(true);
        };
        noButton.onclick = () => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
            resolve(false);
        };
    });
}

// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in miles
    return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

// Function to get user's location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by your browser'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                coordinatesDisplay.textContent = `Lat: ${userLocation.lat.toFixed(4)}, Long: ${userLocation.lng.toFixed(4)}`;
                resolve(userLocation);
            },
            (error) => {
                console.error('Error getting location:', error);
                reject(error);
            }
        );
    });
}

// Event listener for location button
locationButton.addEventListener('click', async () => {
    try {
        locationButton.disabled = true;
        locationButton.textContent = 'Getting location...';
        await getUserLocation();
        updateStoreDistances();
        locationButton.textContent = 'Location Found';
    } catch (error) {
        locationButton.textContent = 'Error getting location';
        locationButton.disabled = false;
    }
});

// Function to update store distances based on user location
function updateStoreDistances() {
    if (!userLocation) return;

    testStores.forEach(store => {
        const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            store.location.lat,
            store.location.lng
        );
        console.log(`Calculated distance for ${store.name}:`, distance);
        store.distance = distance;
    });
    
    // Log all store distances after calculation
    console.log('Updated store distances:', testStores.map(store => ({
        name: store.name,
        distance: store.distance,
        coordinates: store.location
    })));
}

// Function to convert miles to meters
function milesToMeters(miles) {
    return miles * 1609.34;
}

// Function to format item name for storage
function formatItemName(name, isOrganic = false) {
    // First convert to lowercase and trim
    const processedName = name.toLowerCase().trim();
    
    // For single word items, just add organic prefix if needed
    if (!processedName.includes(' ')) {
        return isOrganic ? 'organic' + processedName.charAt(0).toUpperCase() + processedName.slice(1) : processedName;
    }
    
    // For multi-word items, convert to camelCase and add organic prefix if needed
    const camelCase = processedName
        .split(' ')
        .map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
    
    return isOrganic ? 'organic' + camelCase.charAt(0).toUpperCase() + camelCase.slice(1) : camelCase;
}

// Function to format item for display
function formatItemForDisplay(name) {
    // Check if it's an organic item
    const isOrganic = name.startsWith('organic');
    let displayName = name;
    
    if (isOrganic) {
        // Remove 'organic' prefix and add space
        displayName = name.replace('organic', '');
        // Add space before capital letters
        displayName = displayName.replace(/([A-Z])/g, ' $1').trim();
        // Capitalize first letter
        displayName = 'Organic ' + displayName.charAt(0).toUpperCase() + displayName.slice(1);
    } else {
        // Add space before capital letters for non-organic items
        displayName = displayName.replace(/([A-Z])/g, ' $1').trim();
        displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    }
    
    return displayName;
}

// Function to add bounce animation
function addBounceEffect(element) {
    element.classList.add('bounce');
    // Remove the class after the animation completes
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 300); // Match this with the animation duration in CSS
}

// Function to create and show the produce modifications modal
function showProduceModal(itemName) {
    // Create modal container
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '30px';
    modalContent.style.borderRadius = '15px';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '600px';
    modalContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modalContent.style.position = 'relative';
    modalContent.style.animation = 'modalSlideIn 0.3s ease-out';

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.style.marginBottom = '20px';
    modalHeader.innerHTML = `<h2 style="margin: 0; color: #1a9a04;">Modify ${itemName}</h2>`;

    // Move organic selector to modal
    const organicContainer = document.createElement('div');
    organicContainer.style.marginBottom = '20px';
    organicContainer.innerHTML = `
        <label for="modal-organic-selector" style="display: block; margin-bottom: 10px; color: #333;">
            Select Type:
        </label>
    `;
    
    const organicSelect = document.createElement('select');
    organicSelect.id = 'modal-organic-selector';
    organicSelect.style.width = '100%';
    organicSelect.style.padding = '10px';
    organicSelect.style.borderRadius = '5px';
    organicSelect.style.border = '1px solid #ddd';
    organicSelect.innerHTML = `
        <option value="regular">Regular</option>
        <option value="organic">Organic</option>
    `;
    organicContainer.appendChild(organicSelect);

    // Create buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.marginTop = '20px';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.border = '1px solid #ddd';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.backgroundColor = '#fff';
    cancelButton.style.cursor = 'pointer';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Item';
    addButton.style.padding = '10px 20px';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '5px';
    addButton.style.backgroundColor = '#1a9a04';
    addButton.style.color = 'white';
    addButton.style.cursor = 'pointer';

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addButton);

    // Assemble modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(organicContainer);
    modalContent.appendChild(buttonContainer);
    modalOverlay.appendChild(modalContent);

    // Add to document
    document.body.appendChild(modalOverlay);

    // Handle button clicks
    return new Promise((resolve) => {
        cancelButton.onclick = () => {
            modalOverlay.remove();
            resolve(null);
        };

        addButton.onclick = () => {
            const result = {
                isOrganic: organicSelect.value === 'organic'
            };
            modalOverlay.remove();
            resolve(result);
        };

        // Close on overlay click
        modalOverlay.onclick = (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.remove();
                resolve(null);
            }
        };
    });
}

// Function to add item to grocery list
async function addGroceryItem() {
    const itemInput = groceryItemInput.value.trim();
    
    if (!itemInput) return;

    addBounceEffect(addItemButton);

    // Find closest match for the input
    const correctedItem = findClosestMatch(itemInput);
    
    // Show the produce modifications modal
    const modalResult = await showProduceModal(formatItemForDisplay(correctedItem));
    
    if (modalResult) {
        // Format the item name with organic preference
        const formattedItem = formatItemName(correctedItem, modalResult.isOrganic);
        
        // Store the item
        if (!userGroceryList.has(formattedItem)) {
            userGroceryList.add(formattedItem);
            updateGroceryListDisplay();
            groceryItemInput.value = '';
        }
    }
}

// Function to remove item from grocery list
window.removeGroceryItem = function(item) {
    userGroceryList.delete(item);
    updateGroceryListDisplay();
}

// Function to update grocery list display
function updateGroceryListDisplay() {
    groceryList.innerHTML = '';
    userGroceryList.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'grocery-item';
        itemElement.innerHTML = `
            <span>${formatItemForDisplay(item)}</span>
            <button class="remove-item" onclick="removeGroceryItem('${item}')">&times;</button>
        `;
        groceryList.appendChild(itemElement);
    });
}

// Function to calculate total cost
function calculateTotalCost(storePrices) {
    const costs = {};
    let total = 0;
    
    if (userGroceryList.size > 0) {
        userGroceryList.forEach(item => {
            if (storePrices[item] !== undefined) {
                costs[item] = storePrices[item].price;
                total += storePrices[item].price;
            } else {
                costs[item] = null;
            }
        });
    } else {
        for (const [item, details] of Object.entries(storePrices)) {
            costs[item] = details.price;
            total += details.price;
        }
    }
    
    costs.total = total;
    return costs;
}

// Modify the find best prices function to only consider selected items
function findBestPrices(stores) {
    const items = userGroceryList.size > 0 ? 
        Array.from(userGroceryList) : 
        Array.from(new Set(stores.flatMap(store => Object.keys(store.prices))));

    const bestPrices = {};
    items.forEach(item => {
        bestPrices[item] = { price: Infinity, store: null };
    });

    stores.forEach(store => {
        for (const item of items) {
            const price = store.prices[item];
            if (price !== undefined && price < bestPrices[item].price) {
                bestPrices[item] = {
                    price: price,
                    store: store.name,
                    distance: store.distance
                };
            }
        }
    });

    return bestPrices;
}

// Function to calculate total optimal cost
function calculateOptimalCost(stores) {
    const bestPrices = findBestPrices(stores);
    const total = Object.values(bestPrices).reduce((sum, item) => sum + item.price, 0);
    
    // Create a map of which stores to visit and what to buy there
    const shoppingPlan = {};
    for (const [item, details] of Object.entries(bestPrices)) {
        if (!shoppingPlan[details.store]) {
            shoppingPlan[details.store] = {
                items: [],
                distance: details.distance,
                totalCost: 0
            };
        }
        shoppingPlan[details.store].items.push({
            name: item,
            price: details.price
        });
        shoppingPlan[details.store].totalCost += details.price;
    }

    return {
        bestPrices,
        total,
        shoppingPlan
    };
}

// Function to adjust distance based on rounding rule
function adjustDistance(actualDistance) {
    const wholeMile = Math.floor(actualDistance);
    const decimal = actualDistance - wholeMile;
    
    // If the decimal part is less than 0.3, round down to the whole mile
    if (decimal < 0.3) {
        return wholeMile;
    }
    return actualDistance;
}

// Function to find cheapest store within radius
function findCheapestStore(maxDistance, maxStores) {
    if (!userLocation) {
        console.log('No user location available');
        return null;
    }

    // First, get ALL stores within the specified radius, using adjusted distances
    const storesInRange = testStores.filter(store => {
        const adjustedDistance = adjustDistance(store.distance);
        console.log(`Store ${store.name}: actual distance = ${store.distance}, adjusted = ${adjustedDistance}, max = ${maxDistance}`);
        return adjustedDistance <= maxDistance;
    });
    
    console.log('Stores in range:', storesInRange);
    
    if (storesInRange.length === 0) {
        console.log('No stores found in range');
        return null;
    }

    // Sort stores by total cost and adjusted distance
    const sortedStores = storesInRange
        .map(store => {
            const costs = calculateTotalCost(store.prices);
            const adjustedDistance = adjustDistance(store.distance);
            console.log(`Calculated costs for ${store.name}:`, costs);
            return {
                name: store.name,
                distance: store.distance,
                adjustedDistance: adjustedDistance,
                costs: costs,
                prices: store.prices
            };
        })
        .filter(store => store.costs.total > 0) // Only include stores that have at least one matching item
        .sort((a, b) => {
            // If the costs are significantly different (more than $1), sort by cost
            if (Math.abs(a.costs.total - b.costs.total) > 1) {
                return a.costs.total - b.costs.total;
            }
            // If costs are similar, sort by adjusted distance
            return a.adjustedDistance - b.adjustedDistance;
        });

    // Take only the number of stores specified
    const selectedStores = sortedStores.slice(0, maxStores);

    if (selectedStores.length === 0) {
        return {
            singleStoreCosts: [],
            optimalShopping: {
                total: 0,
                shoppingPlan: {},
                bestPrices: {}
            },
            storesChecked: storesInRange.length
        };
    }

    // Calculate optimal shopping plan using only selected stores
    const optimalShopping = calculateOptimalCost(selectedStores.map(store => ({
        name: store.name,
        distance: store.distance,
        prices: store.prices
    })));

    return {
        singleStoreCosts: selectedStores,
        optimalShopping,
        storesChecked: storesInRange.length
    };
}

// Function to show error notification
function showErrorNotification(message) {
    // Remove any existing error notifications
    const existingNotification = document.querySelector('.error-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.textContent = message;

    // Insert notification before the search button
    const searchButton = document.getElementById('search-button');
    searchButton.parentNode.insertBefore(notification, searchButton);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Function to validate search inputs
function validateSearchInputs() {
    const radius = radiusInput.value.trim();
    const storeCount = storeSelect.value;
    const locationSelected = userLocation !== null;
    const hasGroceryItems = userGroceryList.size > 0;

    if (!locationSelected) {
        showErrorNotification('Please select your location first');
        return false;
    }

    if (!radius) {
        showErrorNotification('Please enter a search radius');
        return false;
    }

    if (!storeCount) {
        showErrorNotification('Please select the number of stores to compare');
        return false;
    }

    if (!hasGroceryItems) {
        showErrorNotification('Please add at least one item to your grocery list');
        return false;
    }

    return true;
}

// Function to search for nearby stores
async function searchNearbyStores() {
    // Validate inputs before proceeding
    if (!validateSearchInputs()) {
        return;
    }

    const radius = parseInt(radiusInput.value) || 5;
    const maxStores = parseInt(storeSelect.value) || 5;

    console.log('Current grocery list:', Array.from(userGroceryList));
    console.log('Searching with radius:', radius, 'and maxStores:', maxStores);

    // Use test data with updated distances
    const results = findCheapestStore(radius, maxStores);
    console.log('Search results:', results);
    
    if (results && results.singleStoreCosts.length > 0) {
        // Hide input container
        document.querySelector('.input-container').classList.add('hidden');
        
        // Show results
        displayTestResults(results, radius);
        resultsContainer.style.display = 'block';
        
        // Show new list button
        const newListButton = document.getElementById('new-list-button');
        newListButton.style.display = 'block';
        
        // Add event listener to new list button
        newListButton.onclick = () => {
            // Clear the grocery list
            userGroceryList.clear();
            updateGroceryListDisplay();
            
            // Reset inputs
            radiusInput.value = '';
            storeSelect.selectedIndex = 0;
            groceryItemInput.value = '';
            
            // Hide results and new list button
            resultsContainer.style.display = 'none';
            newListButton.style.display = 'none';
            
            // Show input container
            document.querySelector('.input-container').classList.remove('hidden');
        };
    } else {
        showErrorNotification('No stores found with your items within the specified radius');
    }
}

// Function to display test results
function displayTestResults(results, searchRadius) {
    console.log('Displaying results:', results);
    console.log('Results container:', resultsContainer);
    
    if (!results || !results.optimalShopping || !results.singleStoreCosts) {
        resultsContainer.innerHTML = 'No valid results to display.';
        resultsContainer.style.display = 'block';
        return;
    }

    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'block';

    // Display optimal shopping plan
    const optimalElement = document.createElement('div');
    optimalElement.className = 'summary optimal-plan';
    
    // Calculate total cost from single store costs
    const totalCost = results.singleStoreCosts.reduce((min, store) => {
        return store.costs.total < min ? store.costs.total : min;
    }, Infinity);
    
    optimalElement.innerHTML = `
        <h2>Optimal Shopping Plan (${results.storesChecked || 0} stores within ${searchRadius} ${searchRadius === 1 ? 'mile' : 'miles'})</h2>
        <h3>Total Cost: $${totalCost === Infinity ? '0.00' : totalCost.toFixed(2)}</h3>
        <div class="shopping-plan">
            ${results.singleStoreCosts.map(store => {
                if (store.costs.total > 0) {
                    return `
                        <div class="store-plan">
                            <h4>${store.name} (${store.distance.toFixed(1)} ${store.distance === 1 ? 'mile' : 'miles'})</h4>
                            <ul>
                                ${Object.entries(store.costs)
                                    .filter(([key]) => key !== 'total')
                                    .map(([item, price]) => {
                                        if (price !== null && price.price !== undefined) {
                                            return `<li>${formatItemForDisplay(item)}: $${price.price.toFixed(2)}</li>`;
                                        } else if (price !== null) {
                                            return `<li>${formatItemForDisplay(item)}: $${price.toFixed(2)}</li>`;
                                        }
                                        return '';
                                    }).join('')}
                            </ul>
                            <p>Store subtotal: $${store.costs.total.toFixed(2)}</p>
                        </div>
                    `;
                }
                return '';
            }).join('')}
        </div>
    `;
    resultsContainer.appendChild(optimalElement);
    console.log('Added optimal plan element');

    // Display single-store comparison table
    const tableElement = document.createElement('div');
    tableElement.className = 'price-comparison';
    
    // Use grocery list items if available, otherwise use all items
    const itemsToDisplay = Array.from(userGroceryList).map(item => formatItemName(item));

    console.log('Items to display:', itemsToDisplay);

    tableElement.innerHTML = `
        <h3>Single Store Options:</h3>
        <table>
            <tr>
                <th>Store</th>
                <th>Distance</th>
                ${itemsToDisplay.map(item => 
                    `<th>${formatItemForDisplay(item)}</th>`
                ).join('')}
                <th>Total</th>
            </tr>
            ${results.singleStoreCosts.map(store => `
                <tr>
                    <td>${store.name}</td>
                    <td>${store.distance.toFixed(1)} ${store.distance === 1 ? 'mile' : 'miles'}</td>
                    ${itemsToDisplay.map(item => {
                        const price = store.costs[item];
                        const cellClass = price === null ? 'missing-item' : '';
                        if (price !== null && price.price !== undefined) {
                            return `<td class="${cellClass}">$${price.price.toFixed(2)}</td>`;
                        } else if (price !== null) {
                            return `<td class="${cellClass}">$${price.toFixed(2)}</td>`;
                        }
                        return `<td class="${cellClass}">N/A</td>`;
                    }).join('')}
                    <td>${store.costs.total > 0 ? '$' + store.costs.total.toFixed(2) : 'N/A'}</td>
                </tr>
            `).join('')}
        </table>
    `;
    resultsContainer.appendChild(tableElement);
    console.log('Added table element');

    // Show the Create New List button
    const newListButton = document.getElementById('new-list-button');
    if (newListButton) {
        newListButton.style.display = 'block';
    }
}

// Add event listener to search button
searchButton.addEventListener('click', searchNearbyStores);

// Add event listener for enter key on radius input
radiusInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchNearbyStores();
});

// Update the event listeners
groceryItemInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        await addGroceryItem();
    }
});

addItemButton.addEventListener('click', addGroceryItem); 