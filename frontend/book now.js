// Mock Frontend Database - 10 Workers

const workersDatabase = [
    {
        id: 1,
        name: "Rajesh Kumar",
        age: 35,
        skills: ["Plumbing", "Water Tank Installation", "Pipe Fitting"],
        location: "560001 - Bengaluru (MG Road)",
        pincode: "560001",
        contactDetails: {
            phone: "9876543210",
            email: "rajesh.plumber@email.com"
        },
        previousWork: "Installed water purification system in 50+ homes. Fixed leaking taps and replaced old pipes in commercial buildings.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "7:00 AM - 6:00 PM"
        },
        budgetPerHour: 150,
        rating: 4.8,
        reviews: 45,
        profileImage: "👨‍🔧"
    },
    {
        id: 2,
        name: "Priya Sharma",
        age: 28,
        skills: ["Home Tuition", "Mathematics", "English", "Science"],
        location: "560034 - Bengaluru (Marathahalli)",
        pincode: "560034",
        contactDetails: {
            phone: "8765432109",
            email: "priya.tutor@email.com"
        },
        previousWork: "Tutored 30+ students for board exams. Improved student grades by 15-20% average. Conducted online and offline classes.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "3:00 PM - 8:00 PM"
        },
        budgetPerHour: 200,
        rating: 4.9,
        reviews: 52,
        profileImage: "👩‍🏫"
    },
    {
        id: 3,
        name: "Vikram Singh",
        age: 42,
        skills: ["Electrical Works", "Wiring", "LED Installation", "Switchboard Repair"],
        location: "400001 - Mumbai (Fort)",
        pincode: "400001",
        contactDetails: {
            phone: "7654321098",
            email: "vikram.electrician@email.com"
        },
        previousWork: "Completed 100+ electrical projects in residential and commercial spaces. Expert in power distribution and safety installations.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            workingHours: "8:00 AM - 6:00 PM"
        },
        budgetPerHour: 175,
        rating: 4.7,
        reviews: 68,
        profileImage: "⚡"
    },
    {
        id: 4,
        name: "Anjali Desai",
        age: 26,
        skills: ["House Cleaning", "Deep Cleaning", "Laundry", "Kitchen Organization"],
        location: "500001 - Hyderabad (Downtown)",
        pincode: "500001",
        contactDetails: {
            phone: "6543210987",
            email: "anjali.cleaner@email.com"
        },
        previousWork: "Maintained cleanliness in 20+ households. Specialized in eco-friendly cleaning products. Organized kitchens and storage areas.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            workingHours: "6:00 AM - 3:00 PM"
        },
        budgetPerHour: 100,
        rating: 4.6,
        reviews: 38,
        profileImage: "🧹"
    },
    {
        id: 5,
        name: "Suresh Patel",
        age: 38,
        skills: ["Carpentry", "Furniture Making", "Door & Window Installation", "Wood Repair"],
        location: "560043 - Bengaluru (Whitefield)",
        pincode: "560043",
        contactDetails: {
            phone: "5432109876",
            email: "suresh.carpenter@email.com"
        },
        previousWork: "Crafted custom furniture for 15+ families. Installed wooden doors and windows in 30+ properties. Repaired antique furniture.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Thursday", "Friday", "Saturday"],
            workingHours: "7:00 AM - 5:00 PM"
        },
        budgetPerHour: 180,
        rating: 4.8,
        reviews: 41,
        profileImage: "🪵"
    },
    {
        id: 6,
        name: "Geeta Verma",
        age: 31,
        skills: ["Cooking", "Catering", "Diet Planning", "Kitchen Management"],
        location: "110019 - Delhi (Dwarka)",
        pincode: "110019",
        contactDetails: {
            phone: "4321098765",
            email: "geeta.cook@email.com"
        },
        previousWork: "Cooked meals for families of 4-8 members daily. Managed kitchens in hostels. Prepared customized diet plans for 25+ families.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "6:00 AM - 2:00 PM"
        },
        budgetPerHour: 120,
        rating: 4.9,
        reviews: 56,
        profileImage: "👩‍🍳"
    },
    {
        id: 7,
        name: "Arjun Reddy",
        age: 29,
        skills: ["Painting", "Wall Design", "Color Consultation", "Texture Work"],
        location: "500001 - Hyderabad (Downtown)",
        pincode: "500001",
        contactDetails: {
            phone: "3210987654",
            email: "arjun.painter@email.com"
        },
        previousWork: "Painted 50+ homes with creative wall designs. Expert in modern color palettes. Completed commercial space paintings.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "8:00 AM - 5:00 PM"
        },
        budgetPerHour: 140,
        rating: 4.7,
        reviews: 33,
        profileImage: "🎨"
    },
    {
        id: 8,
        name: "Meera Nair",
        age: 34,
        skills: ["Gardening", "Plant Care", "Landscaping", "Pest Control"],
        location: "560076 - Bengaluru (Koramangala)",
        pincode: "560076",
        contactDetails: {
            phone: "2109876543",
            email: "meera.gardener@email.com"
        },
        previousWork: "Designed and maintained gardens for 12+ residences. Planted 1000+ trees. Managed organic vegetable gardens.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "6:00 AM - 2:00 PM"
        },
        budgetPerHour: 110,
        rating: 4.8,
        reviews: 29,
        profileImage: "🌱"
    },
    {
        id: 9,
        name: "Ravi Kumar",
        age: 40,
        skills: ["AC Repair", "Refrigeration", "Appliance Maintenance", "Installation"],
        location: "400050 - Mumbai (Mahim)",
        pincode: "400050",
        contactDetails: {
            phone: "1098765432",
            email: "ravi.repair@email.com"
        },
        previousWork: "Repaired AC units in 100+ homes. Serviced refrigerators and washing machines. Installed new appliances professionally.",
        availability: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            workingHours: "9:00 AM - 7:00 PM"
        },
        budgetPerHour: 160,
        rating: 4.6,
        reviews: 47,
        profileImage: "❄️"
    },
    {
        id: 10,
        name: "Divya Singh",
        age: 27,
        skills: ["Beauty Consulting", "Mehendi", "Makeup", "Bridal Services"],
        location: "110001 - Delhi (New Delhi)",
        pincode: "110001",
        contactDetails: {
            phone: "9012345678",
            email: "divya.beauty@email.com"
        },
        previousWork: "Did makeup for 40+ wedding events. Applied mehendi for 30+ celebrations. Provided beauty consultation to 50+ clients.",
        availability: {
            days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            workingHours: "10:00 AM - 8:00 PM"
        },
        budgetPerHour: 130,
        rating: 4.9,
        reviews: 59,
        profileImage: "💄"
    }
];

// EXPORT FOR USE IN OTHER FILES (if using modules)
// export { workersDatabase };

// SAMPLE FUNCTIONS TO INTERACT WITH DATABASE

/**
 * Get all workers
 */
function getAllWorkers() {
    return workersDatabase;
}

/**
 * Get worker by ID
 */
function getWorkerById(id) {
    return workersDatabase.find(worker => worker.id === id);
}

/**
 * Search workers by skill
 */
function searchWorkersBySkill(skill) {
    return workersDatabase.filter(worker =>
        worker.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
    );
}

/**
 * Search workers by location/pincode
 */
function searchWorkersByLocation(pincode) {
    return workersDatabase.filter(worker => worker.pincode === pincode);
}

/**
 * Filter workers by budget (hourly rate)
 */
function filterWorkersByBudget(maxBudget) {
    return workersDatabase.filter(worker => worker.budgetPerHour <= maxBudget);
}

/**
 * Get top-rated workers
 */
function getTopRatedWorkers(limit = 5) {
    return [...workersDatabase]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Search by multiple criteria
 */
function searchWorkers(filters) {
    return workersDatabase.filter(worker => {
        const skillMatch = !filters.skill || 
            worker.skills.some(s => s.toLowerCase().includes(filters.skill.toLowerCase()));
        const locationMatch = !filters.location || worker.pincode === filters.location;
        const budgetMatch = !filters.maxBudget || worker.budgetPerHour <= filters.maxBudget;

        return skillMatch && locationMatch && budgetMatch;
    });
}

// Example usage (uncomment to test in browser console):
/*
console.log("All Workers:", getAllWorkers());
console.log("Plumber:", searchWorkersBySkill("Plumbing"));
console.log("Bengaluru Workers:", searchWorkersByLocation("560001"));
console.log("Top Rated:", getTopRatedWorkers(3));
console.log("Search Multiple:", searchWorkers({ skill: "Painting", maxBudget: 150 }));
*/