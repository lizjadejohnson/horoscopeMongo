// const ZodiacSign = require('./models/zodiacModel'); // adjust the path as necessary

// async function populateZodiacSigns() {
//     const data = [
//         {
//             name: "Aries",
//             startDate: new Date('2021-03-21'),
//             endDate: new Date('2021-04-19'),
//             element: "Fire",
//             quality: "Cardinal",
//             rulingPlanet: "Mars",
//             symbol: "♈",
//             traits: ["Enthusiastic", "Courageous", "Dynamic", "Quick-witted"],
//             compatibility: ["Leo", "Sagittarius", "Gemini"]
//         },
//         {
//             name: "Taurus",
//             startDate: new Date('2021-04-20'),
//             endDate: new Date('2021-05-20'),
//             element: "Earth",
//             quality: "Fixed",
//             rulingPlanet: "Venus",
//             symbol: "♉",
//             traits: ["Reliable", "Patient", "Practical", "Devoted"],
//             compatibility: ["Virgo", "Capricorn", "Cancer"]
//         },
//         {
//             name: "Gemini",
//             startDate: new Date('2021-05-21'),
//             endDate: new Date('2021-06-20'),
//             element: "Air",
//             quality: "Mutable",
//             rulingPlanet: "Mercury",
//             symbol: "♊",
//             traits: ["Versatile", "Expressive", "Curious", "Kind"],
//             compatibility: ["Libra", "Aquarius", "Aries"]
//         },
//         {
//             name: "Cancer",
//             startDate: new Date('2021-06-21'),
//             endDate: new Date('2021-07-22'),
//             element: "Water",
//             quality: "Cardinal",
//             rulingPlanet: "Moon",
//             symbol: "♋",
//             traits: ["Intuitive", "Sentimental", "Compassionate", "Protective"],
//             compatibility: ["Scorpio", "Pisces", "Taurus"]
//         },
//         {
//             name: "Leo",
//             startDate: new Date('2021-07-23'),
//             endDate: new Date('2021-08-22'),
//             element: "Fire",
//             quality: "Fixed",
//             rulingPlanet: "Sun",
//             symbol: "♌",
//             traits: ["Dramatic", "Confident", "Dominant", "Ambitious"],
//             compatibility: ["Aries", "Sagittarius", "Gemini"]
//         },
//         {
//             name: "Virgo",
//             startDate: new Date('2021-08-23'),
//             endDate: new Date('2021-09-22'),
//             element: "Earth",
//             quality: "Mutable",
//             rulingPlanet: "Mercury",
//             symbol: "♍",
//             traits: ["Analytical", "Observant", "Helpful", "Reliable"],
//             compatibility: ["Taurus", "Capricorn", "Cancer"]
//         },
//         {
//             name: "Libra",
//             startDate: new Date('2021-09-23'),
//             endDate: new Date('2021-10-22'),
//             element: "Air",
//             quality: "Cardinal",
//             rulingPlanet: "Venus",
//             symbol: "♎",
//             traits: ["Diplomatic", "Artistic", "Intelligent", "Considerate"],
//             compatibility: ["Gemini", "Aquarius", "Leo"]
//         },
//         {
//             name: "Scorpio",
//             startDate: new Date('2021-10-23'),
//             endDate: new Date('2021-11-21'),
//             element: "Water",
//             quality: "Fixed",
//             rulingPlanet: "Pluto",
//             symbol: "♏",
//             traits: ["Passionate", "Stubborn", "Resourceful", "Brave"],
//             compatibility: ["Cancer", "Pisces", "Virgo"]
//         },
//         {
//             name: "Sagittarius",
//             startDate: new Date('2021-11-22'),
//             endDate: new Date('2021-12-21'),
//             element: "Fire",
//             quality: "Mutable",
//             rulingPlanet: "Jupiter",
//             symbol: "♐",
//             traits: ["Humorous", "Generous", "Adventurous", "Honest"],
//             compatibility: ["Leo", "Aries", "Libra"]
//         },
//         {
//             name: "Capricorn",
//             startDate: new Date('2021-12-22'),
//             endDate: new Date('2022-01-19'),
//             element: "Earth",
//             quality: "Cardinal",
//             rulingPlanet: "Saturn",
//             symbol: "♑",
//             traits: ["Practical", "Prudent", "Disciplined", "Patient"],
//             compatibility: ["Taurus", "Virgo", "Scorpio"]
//         },
//         {
//             name: "Aquarius",
//             startDate: new Date('2022-01-20'),
//             endDate: new Date('2022-02-18'),
//             element: "Air",
//             quality: "Fixed",
//             rulingPlanet: "Uranus",
//             symbol: "♒",
//             traits: ["Innovative", "Humanitarian", "Social", "Visionary"],
//             compatibility: ["Gemini", "Libra", "Sagittarius"]
//         },
//         {
//             name: "Pisces",
//             startDate: new Date('2022-02-19'),
//             endDate: new Date('2022-03-20'),
//             element: "Water",
//             quality: "Mutable",
//             rulingPlanet: "Neptune",
//             symbol: "♓",
//             traits: ["Compassionate", "Adaptable", "Accepting", "Devoted"],
//             compatibility: ["Cancer", "Scorpio", "Taurus"]
//         }
//     ];
    
    
//     try {
//         await ZodiacSign.deleteMany({}); // Optional: clear existing entries
//         const result = await ZodiacSign.insertMany(data);
//         console.log('Zodiac signs populated:', result);
//     } catch (error) {
//         console.error('Failed to populate zodiac signs:', error);
//     }
// }

// module.exports = populateZodiacSigns


// -----EASTERN ZODIAC:-----

// const EasternZodiac = require('./models/easternZodiacModel');  // Adjust the path as necessary

// async function createEasternZodiacSigns() {
//     const signs = [
//         { name: 'Rat', element: 'Water', years: [2020, 2008, 1996, 1984, 1972, 1960], traits: ['Intelligent', 'Adaptable', 'Quick-Witted'], compatibility: ['Dragon', 'Monkey'] },
//         { name: 'Ox', element: 'Earth', years: [2021, 2009, 1997, 1985, 1973, 1961], traits: ['Reliable', 'Strong', 'Determined'], compatibility: ['Rat', 'Rooster'] },
//         { name: 'Tiger', element: 'Wood', years: [2022, 2010, 1998, 1986, 1974, 1962], traits: ['Brave', 'Confident', 'Competitive'], compatibility: ['Horse', 'Dog'] },
//         { name: 'Rabbit', element: 'Wood', years: [2023, 2011, 1999, 1987, 1975, 1963], traits: ['Compassionate', 'Peaceful', 'Amiable'], compatibility: ['Sheep', 'Pig'] },
//         { name: 'Dragon', element: 'Earth', years: [2024, 2012, 2000, 1988, 1976, 1964], traits: ['Confident', 'Intelligent', 'Enthusiastic'], compatibility: ['Rooster', 'Monkey'] },
//         { name: 'Snake', element: 'Fire', years: [2025, 2013, 2001, 1989, 1977, 1965], traits: ['Philosophical', 'Organized', 'Decisive'], compatibility: ['Dragon', 'Rooster'] },
//         { name: 'Horse', element: 'Fire', years: [2026, 2014, 2002, 1990, 1978, 1966], traits: ['Energetic', 'Independent', 'Impatient'], compatibility: ['Tiger', 'Dog'] },
//         { name: 'Sheep', element: 'Earth', years: [2027, 2015, 2003, 1991, 1979, 1967], traits: ['Mild-mannered', 'Shy', 'Sympathetic'], compatibility: ['Rabbit', 'Pig'] },
//         { name: 'Monkey', element: 'Metal', years: [2028, 2016, 2004, 1992, 1980, 1968], traits: ['Fun', 'Energetic', 'Active'], compatibility: ['Rat', 'Dragon'] },
//         { name: 'Rooster', element: 'Metal', years: [2029, 2017, 2005, 1993, 1981, 1969], traits: ['Independent', 'Practical', 'Hardworking'], compatibility: ['Ox', 'Snake'] },
//         { name: 'Dog', element: 'Earth', years: [2030, 2018, 2006, 1994, 1982, 1970], traits: ['Loyal', 'Faithful', 'Honest'], compatibility: ['Rabbit', 'Tiger'] },
//         { name: 'Pig', element: 'Water', years: [2031, 2019, 2007, 1995, 1983, 1971], traits: ['Warm-hearted', 'Generous', 'Diligent'], compatibility: ['Sheep', 'Rabbit'] }
//     ];

//     try {
//         await EasternZodiac.deleteMany({});  // Use EasternZodiac, not ZodiacSign
//         await EasternZodiac.insertMany(signs);
//         console.log('Eastern Zodiac signs populated successfully');
//     } catch (error) {
//         console.error('Failed to populate Eastern Zodiac signs:', error);
//     }
// }

// createEasternZodiacSigns;
