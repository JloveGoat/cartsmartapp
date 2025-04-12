// Store data with prices
const testStores = [
    {
        name: "Aldi Ogden Avenue",
        distance: 1.2,
        location: { lat: 41.795054238397235, lng: -88.1215363761931},
        prices: {
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
            rice: 2.65,
            apple: .66,
            
        }
    },
    {
        name: "Jewel Osco Naperville",
        distance: 1,
        location: { lat: 41.7908, lng: -88.1233 },
        prices: {
            bread: 3.6,
            banana: 0.87,
            rice: 3.20,
            apple: .30,
        }
    },
    {
        name: "whole foods naperville",
        distance: 1,
        location: { lat: 41.7908, lng: -88.1233 },
        prices: {
            bread: 3.32,
            banana: 0.65,
            rice: 3.65,
            apple: .65,
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
const addItemButton = document.getElementById('add-item-button');
const groceryList = document.getElementById('grocery-list');
const locationButton = document.getElementById('location-button');

// Add user location tracking
let userLocation = null;
let userGroceryList = new Set(); // Store unique items

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

// Function to format item name for display and matching
function formatItemName(name) {
    // First convert to lowercase and trim
    const processedName = name.toLowerCase().trim();
    
    // For single word items, just return as is
    if (!processedName.includes(' ')) {
        return processedName;
    }
    
    // For multi-word items, convert to camelCase
    const words = processedName.split(' ');
    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

// Function to format item for display
function formatItemForDisplay(name) {
    // Convert camelCase back to spaced words for display
    return name
        .replace(/([A-Z])/g, ' $1') // Add space before capital letters
        .toLowerCase()
        .trim();
}

// Function to add bounce animation
function addBounceEffect(element) {
    element.classList.add('bounce');
    // Remove the class after the animation completes
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 300); // Match this with the animation duration in CSS
}

// Function to add item to grocery list
async function addGroceryItem() {
    const itemInput = groceryItemInput.value.trim();
    if (!itemInput) return;

    addBounceEffect(addItemButton);

    // Find closest match for the input
    const correctedItem = findClosestMatch(itemInput);
    
    // If the correction is different from input, show notification
    if (correctedItem !== itemInput.toLowerCase()) {
        const useCorrection = await showCorrectionNotification(itemInput, correctedItem);
        if (useCorrection) {
            if (!userGroceryList.has(correctedItem)) {
                userGroceryList.add(correctedItem);
                updateGroceryListDisplay();
                groceryItemInput.value = '';
            }
        } else {
            if (!userGroceryList.has(itemInput)) {
                userGroceryList.add(itemInput);
                updateGroceryListDisplay();
                groceryItemInput.value = '';
            }
        }
    } else {
        if (!userGroceryList.has(correctedItem)) {
            userGroceryList.add(correctedItem);
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
    
    // If user has a grocery list, only calculate costs for those items
    if (userGroceryList.size > 0) {
        userGroceryList.forEach(item => {
            // Format the item to match store data format
            const formattedItem = formatItemName(item);
            console.log('Looking for item:', formattedItem, 'in store prices:', storePrices);
            
            // Check if the formatted item exists in store prices
            if (storePrices[formattedItem] !== undefined) {
                costs[formattedItem] = storePrices[formattedItem];
                total += storePrices[formattedItem];
                console.log('Found price for', formattedItem, ':', storePrices[formattedItem]);
            } else {
                // Try with first letter lowercase
                const lowerCaseItem = formattedItem.charAt(0).toLowerCase() + formattedItem.slice(1);
                if (storePrices[lowerCaseItem] !== undefined) {
                    costs[lowerCaseItem] = storePrices[lowerCaseItem];
                    total += storePrices[lowerCaseItem];
                    console.log('Found price for', lowerCaseItem, ':', storePrices[lowerCaseItem]);
                } else {
                    costs[formattedItem] = null; // Item not available at this store
                    console.log('No price found for', formattedItem);
                }
            }
        });
    } else {
        // If no grocery list, include all items
        for (const [item, price] of Object.entries(storePrices)) {
            if (price !== undefined && price !== null) {
                costs[item] = price;
                total += price;
            }
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
                            <h4>${store.name} (${(store.distance || 0).toFixed(1)} ${store.distance === 1 ? 'mile' : 'miles'})</h4>
                            <ul>
                                ${Object.entries(store.costs)
                                    .filter(([key]) => key !== 'total')
                                    .map(([item, price]) => {
                                        if (price !== null) {
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
                    <td>${(store.distance || 0).toFixed(1)} ${store.distance === 1 ? 'mile' : 'miles'}</td>
                    ${itemsToDisplay.map(item => {
                        const price = store.costs[item];
                        const cellClass = price === null ? 'missing-item' : '';
                        return `<td class="${cellClass}">${price !== null ? '$' + price.toFixed(2) : 'N/A'}</td>`;
                    }).join('')}
                    <td>${store.costs.total > 0 ? '$' + store.costs.total.toFixed(2) : 'N/A'}</td>
                </tr>
            `).join('')}
        </table>
    `;
    resultsContainer.appendChild(tableElement);
    console.log('Added table element');
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