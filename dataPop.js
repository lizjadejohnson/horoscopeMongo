const ZodiacSign = require('./models/zodiacModel'); // adjust the path as necessary

async function populateZodiacSigns() {
    const data = [
        {
            name: "Aries",
            startDate: new Date('2021-03-21'),
            endDate: new Date('2021-04-19'),
            element: "Fire",
            quality: "Cardinal",
            rulingPlanet: "Mars",
            symbol: "♈",
            traits: ["Enthusiastic", "Courageous", "Dynamic", "Quick-witted"],
            compatibility: ["Leo", "Sagittarius", "Gemini"]
        },
        {
            name: "Taurus",
            startDate: new Date('2021-04-20'),
            endDate: new Date('2021-05-20'),
            element: "Earth",
            quality: "Fixed",
            rulingPlanet: "Venus",
            symbol: "♉",
            traits: ["Reliable", "Patient", "Practical", "Devoted"],
            compatibility: ["Virgo", "Capricorn", "Cancer"]
        },
        {
            name: "Gemini",
            startDate: new Date('2021-05-21'),
            endDate: new Date('2021-06-20'),
            element: "Air",
            quality: "Mutable",
            rulingPlanet: "Mercury",
            symbol: "♊",
            traits: ["Versatile", "Expressive", "Curious", "Kind"],
            compatibility: ["Libra", "Aquarius", "Aries"]
        },
        {
            name: "Cancer",
            startDate: new Date('2021-06-21'),
            endDate: new Date('2021-07-22'),
            element: "Water",
            quality: "Cardinal",
            rulingPlanet: "Moon",
            symbol: "♋",
            traits: ["Intuitive", "Sentimental", "Compassionate", "Protective"],
            compatibility: ["Scorpio", "Pisces", "Taurus"]
        },
        {
            name: "Leo",
            startDate: new Date('2021-07-23'),
            endDate: new Date('2021-08-22'),
            element: "Fire",
            quality: "Fixed",
            rulingPlanet: "Sun",
            symbol: "♌",
            traits: ["Dramatic", "Confident", "Dominant", "Ambitious"],
            compatibility: ["Aries", "Sagittarius", "Gemini"]
        },
        {
            name: "Virgo",
            startDate: new Date('2021-08-23'),
            endDate: new Date('2021-09-22'),
            element: "Earth",
            quality: "Mutable",
            rulingPlanet: "Mercury",
            symbol: "♍",
            traits: ["Analytical", "Observant", "Helpful", "Reliable"],
            compatibility: ["Taurus", "Capricorn", "Cancer"]
        },
        {
            name: "Libra",
            startDate: new Date('2021-09-23'),
            endDate: new Date('2021-10-22'),
            element: "Air",
            quality: "Cardinal",
            rulingPlanet: "Venus",
            symbol: "♎",
            traits: ["Diplomatic", "Artistic", "Intelligent", "Considerate"],
            compatibility: ["Gemini", "Aquarius", "Leo"]
        },
        {
            name: "Scorpio",
            startDate: new Date('2021-10-23'),
            endDate: new Date('2021-11-21'),
            element: "Water",
            quality: "Fixed",
            rulingPlanet: "Pluto",
            symbol: "♏",
            traits: ["Passionate", "Stubborn", "Resourceful", "Brave"],
            compatibility: ["Cancer", "Pisces", "Virgo"]
        },
        {
            name: "Sagittarius",
            startDate: new Date('2021-11-22'),
            endDate: new Date('2021-12-21'),
            element: "Fire",
            quality: "Mutable",
            rulingPlanet: "Jupiter",
            symbol: "♐",
            traits: ["Humorous", "Generous", "Adventurous", "Honest"],
            compatibility: ["Leo", "Aries", "Libra"]
        },
        {
            name: "Capricorn",
            startDate: new Date('2021-12-22'),
            endDate: new Date('2022-01-19'),
            element: "Earth",
            quality: "Cardinal",
            rulingPlanet: "Saturn",
            symbol: "♑",
            traits: ["Practical", "Prudent", "Disciplined", "Patient"],
            compatibility: ["Taurus", "Virgo", "Scorpio"]
        },
        {
            name: "Aquarius",
            startDate: new Date('2022-01-20'),
            endDate: new Date('2022-02-18'),
            element: "Air",
            quality: "Fixed",
            rulingPlanet: "Uranus",
            symbol: "♒",
            traits: ["Innovative", "Humanitarian", "Social", "Visionary"],
            compatibility: ["Gemini", "Libra", "Sagittarius"]
        },
        {
            name: "Pisces",
            startDate: new Date('2022-02-19'),
            endDate: new Date('2022-03-20'),
            element: "Water",
            quality: "Mutable",
            rulingPlanet: "Neptune",
            symbol: "♓",
            traits: ["Compassionate", "Adaptable", "Accepting", "Devoted"],
            compatibility: ["Cancer", "Scorpio", "Taurus"]
        }
    ];
    
    
    try {
        await ZodiacSign.deleteMany({}); // Optional: clear existing entries
        const result = await ZodiacSign.insertMany(data);
        console.log('Zodiac signs populated:', result);
    } catch (error) {
        console.error('Failed to populate zodiac signs:', error);
    }
}

module.exports = populateZodiacSigns
