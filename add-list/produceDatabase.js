// Produce items database with their specifications
const produceDatabase = {
    'apple': {
        types: ['Red Delicious', 'Granny Smith', 'Honeycrisp', 'Fuji', 'Gala'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'banana': {
        types: ['Yellow', 'Green', 'Plantain'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'tomato': {
        types: ['Roma', 'Cherry', 'Beefsteak', 'Grape'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Firmness']
    },
    'carrots': {
        types: ['Baby Carrots', 'Regular Carrots', 'Long Carrots'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Length']
    },
    'lettuce': {
        types: ['Romana', 'Iceberg', 'Butterhead', 'Red Leaf'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Leaf Type']
    },
    'potato': {
        types: ['Russet', 'Yukon Gold', 'Red Potato', 'Fingerling'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'onion': {
        types: ['White Onion', 'Yellow Onion', 'Red Onion', 'Sweet Onion'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'garlic': {
        types: ['Garlic Cloves', 'Garlic Bulbs'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'mango': {
        types: ['Green Mango', 'Ripe Mango'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'pineapple': {
        types: ['Fresh Pineapple', 'Canned Pineapple'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'papaya': {
        types: ['Papaya'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'strawberries': {
        types: ['Strawberries'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'bellPeppers': {
        types: ['Green Bell Peppers', 'Yellow Bell Peppers', 'Red Bell Peppers', 'Orange Bell Peppers'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'jalapenoPeppers': {
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'blueberries': {
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'pineapple': {
        types: ['Fresh Pineapple', 'Canned Pineapple'], 
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'blackberries': {
        types: ['Blackberries'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'asparagus': {
        types: ['Asparagus'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Freshness']
    },
    'orange': {
        types: ['Navel Orange', 'Blood Orange', 'Clementine', 'Mandarin Orange'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'pineapple': {
        types: ['Fresh Pineapple', 'Canned Pineapple'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'cauliflower': {
        types: ['Cauliflower'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'avocado': {
        types: ['Avocado'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'kiwi': {
        types: ['Kiwi'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'broccoli': {
        types: ['Broccoli'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'pineapple': {
        types: ['Fresh Pineapple', 'Canned Pineapple'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Ripeness Level']
    },
    'onion': {
        types: ['White Onion', 'Yellow Onion', 'Red Onion', 'Sweet Onion'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    'cilantro': {
        types: ['Cilantro'],
        organic: true,
        unit: 'lbs',
        additionalOptions: ['Size']
    },
    

    

};

// Function to check if an item is in the produce database
function isProduceItem(itemName) {
    return produceDatabase[itemName.toLowerCase()] !== undefined;
}

// Function to get produce details
function getProduceDetails(itemName) {
    return produceDatabase[itemName.toLowerCase()];
} 