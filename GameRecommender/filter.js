// Search bar code
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL if it exists
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const genreFilter = urlParams.get('genre');

    // If there's a genre filter, check the corresponding checkbox
    if (genreFilter) {
        const genreCheckbox = document.querySelector(`input[name="genre"][value="${genreFilter}"]`);
        if (genreCheckbox) {
            genreCheckbox.checked = true;
            // Trigger the filter
            filterGames();
        }
    }
    
    // If there's a search query, filter games and display results
    if (searchQuery) {
        const searchResults = searchGames(searchQuery);
        displayGames(searchResults);
        
        // Update any active filters to match the current search
        updateActiveFilters();
    } else {
        // If no search query, display all games (existing behavior)
        displayGames(games);
    }
});
function searchGames(query) {
    query = query.toLowerCase();
    return games.filter(game => {
        return (
            // Search in title
            game.title.toLowerCase().includes(query) ||
            // Search in description
            game.description.toLowerCase().includes(query) ||
            // Search in genres
            game.genres.some(genre => 
                genre.toLowerCase().includes(query)
            ) ||
            // Search in platforms
            game.platforms.some(platform => 
                platform.toLowerCase().includes(query)
            )
        );
    });
}
document.getElementById('search-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim()) {
        window.location.href = `filter.html?search=${encodeURIComponent(searchQuery)}`;
    }
});
// Game data (you can expand this with your existing games)
const games = [
    {
        title: "Minecraft",
        genres: ["Survival", "Action-Adventure"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 20.00,
        image: "images/minecraft.jpg",
        description: "Minecraft is a 3D sandbox video game where players build, explore, and survive in a virtual world. Players can use blocks to create structures, craft items, and battle creatures. ",
        // Additional Info for the minecraft page //
        releasedate: "November 18, 2011",
        developer: "Mojang Studios",
        publisher: "Mojang Studios",
        rating: "E10+",
        features: [
            "Infinite world to explore",
            "Multiplayer support",
            "Creative and survival modes",
            "Cross-platform play",
            "Mod support (PC)",
            "Regular content updates",
        ],
        systemrequirements: {
            minimum: {
                os: "Windows 10",
                processor: "Intel Core i3-3210 / AMD A8-7600",
                memory: "4GB RAM",
                graphics: "Intel HD Graphics 4000 / AMD Radeon R5",
                storage: "1 GB available space"
            },
            recommended: {
                os: "Windows 10",
                processor: "Intel Core i5-4690 / AMD A10-7800",
                memory: "8GB RAM",
                graphics: "NVIDIA GeForce 700 Series / AMD Radeon Rx 200 Series",
                storage: "4GB available space"
            }
        },
        awards: [
            "BAFTA Games Award for Family Game",
            "Kids' Choice Award for Favorite Video Game",
            "The Game Award for Best Community Support"
        ],
        videoId: "MmB9b5njVbA",
    },
    // Add all your other games here
    {
        title: "Borderlands 3",
        genres: ["First-Person Shooter", "Action-Adventure", "Adventure"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 49.99,
        image: "images/borderlands3.jpg",
        description: "Play solo or party up in co-op to take on deranged enemies, score loads of loot, and save the galaxy from a fanatical threat.",
        // Additional Info for the borderlands page
        releasedate: "September 13, 2019",
        developer: "Gearbox Software",
        publisher: "2K Games",
        rating: "M",
        features: [
        "4-player co-op",
        "Billions of unique weapons",
        "Multiple character classes",
        "Open-world exploration",
        "New planets to discover",
        "Regular DLC content"
    ],
    systemrequirements: {
        minimum: {
            os: "Windows 7/10",
            processor: "AMD FX-8350 or Intel i5-3570",
            memory: "6GB RAM",
            graphics: "AMD Radeon HD 7970 or NVIDIA GeForce GTX 680 2GB",
            storage: "75GB available space"
        },
        recommended: {
            os: "Windows 7/10",
            processor: "AMD Ryzen 5 2600 or Intel i7-4770",
            memory: "16GB RAM",
            graphics: "AMD Radeon RX 590 or NVIDIA GeForce GTX 1060 6GB",
            storage: "75GB available space"
        }
    },
    awards: [
        "Game Critics Awards - Best Action Game",
        "Gamescom 2019 - Best Multiplayer Game",
        "Golden Joystick Awards - Best Multiplayer Game 2019"
    ],
    videoId: "n7mUwX5IPRs"

    },
    {
        title: "Teamfight Tactics",
        genres: ["Auto-Battler", "Strategy"],
        platforms: ["pc", "mobile"],
        price: 0,
        image: "images/teamfighttactics.jpg",
        description: "Teamfight Tactics (TFT) is a multiplayer, auto-battler game where players build teams of champions to compete in round-based battles.",
        // Additional info for TFT page
        releasedate: "June 26, 2019",
        developer: "Riot Games",
        publisher: "Riot Games",
        rating: "T",
        features: [
        "Free-to-play",
        "Cross-platform between PC and Mobile",
        "Regular content updates and new sets",
        "Ranked competitive mode",
        "Battle Pass system",
        "Strategic team building",
        "Real-time PvP matches",
        "Unique Little Legend avatars"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 or higher",
            processor: "3 GHz processor or equivalent",
            memory: "4GB RAM",
            graphics: "GeForce 8800 / AMD Radeon HD 5670 or equivalent",
            storage: "16 GB available space"
        },
        recommended: {
            os: "Windows 10",
            processor: "3.3 GHz processor or equivalent",
            memory: "6GB RAM",
            graphics: "GeForce 560 or equivalent",
            storage: "16 GB available space"
        }
    },
        awards: [
        "Google Play Best of 2020 - Users' Choice Game",
        "Mobile Game Awards 2020 - Best Mobile Esport",
        "The Game Awards 2019 - Best Mobile Game Nominee"
    ],
        videoId: "liNLLx874g4"  
    },

    {
        title: "Grand Theft Auto 5",
        genres: ["Action", "Adventure"],
        platforms: ["pc", "playstation", "xbox"],
        price: 29.99,
        image: "images/grandtheftauto5.jpg",
        description: "Grand Theft Auto V (GTA 5) is an action-adventure game released in 2013. It's about three criminals who work together to pull off heists in the fictional city of Los Santos.",
        // Aditional info for GTA 5 
        releasedate: "September 17, 2013",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        rating: "M",
        features: [
        "Massive open world to explore",
        "Three playable protagonists",
        "GTA Online multiplayer mode",
        "Heist missions",
        "First-person mode",
        "Extensive vehicle customization",
        "Rich story-driven missions",
        "Regular online content updates"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 64-bit",
            processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) or AMD Phenom 9850 @ 2.5GHz (4 CPUs)",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7870 2GB",
            storage: "110GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-3470 @ 3.2GHz (4 CPUs) or AMD X8 FX-8350 @ 4GHz (8 CPUs)",
            memory: "12GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 480 4GB",
            storage: "110GB available space"
        }
    },
    awards: [
        "The Game Awards 2014 - Best Score/Music",
        "BAFTA Games Award for Best Multiplayer",
        "VGX Award for Game of the Year",
        "Over 800 Perfect Scores",
        "Fastest Entertainment Product to Gross $1 Billion"
    ],
    videoId: "QkkoHAzjnUs" 
},

    {
        title: "Animal Crossing",
        genres: ["Simulation", "Casual"],
        platforms: ["switch"],
        price: 49.99,
        image: "images/animalcrossingnewhorizons.jpg",
        description: "Develop a deserted island into a thriving community...",
        // Additional info for AC:NH
        releasedate: "March 20, 2020",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        rating: "E",
        features: [
        "Create your own island paradise",
        "Customize every aspect of your island",
        "Real-time gameplay that matches your clock",
        "Seasonal events and updates",
        "Visit friends' islands online",
        "Design and share custom patterns",
        "Museum collection",
        "Terraforming capabilities",
        "Local and online multiplayer"
        ],
        systemrequirements: {
        minimum: {
            platform: "Nintendo Switch",
            storage: "6.2GB available space",
            onlinePlay: "Nintendo Switch Online membership required for online features",
            controllers: "Nintendo Switch Joy-Con or Pro Controller"
        },
        recommended: {
            platform: "Nintendo Switch",
            storage: "10GB available space (recommended for updates)",
            onlinePlay: "Nintendo Switch Online membership required for online features",
            controllers: "Nintendo Switch Joy-Con or Pro Controller",
            internet: "Stable internet connection for online features"
            }
        },
        awards: [
        "Japan Game Awards 2020 - Game of the Year",
        "The Game Awards 2020 - Best Family Game",
        "BAFTA Games Award for Multiplayer",
        "Best-selling Nintendo Switch game of 2020",
        "Golden Joystick Awards - Nintendo Game of the Year 2020"
        ],
        videoId: "_3YNL0OWio0"  
},
    {
        title: "Super Smash Bros",
        genres: ["Fighting", "Action"],
        platforms: ["switch"],
        price: 59.99,
        image: "images/supersmashbrosultimate.jpg",
        description: "Nintendo's iconic crossover fighting game...",
        // Aditional info for SSBU
        releasedate: "December 7, 2018",
        developer: "Bandai Namco Studios, Sora Ltd.",
        publisher: "Nintendo",
        rating: "E10+",
        features: [
        "Massive roster of 89 playable fighters",
        "Over 100 stages from gaming history",
        "8-player local multiplayer",
        "Online matchmaking",
        "Story mode: World of Light",
        "Classic Mode for each character",
        "Custom ruleset creation",
        "Spirits collection system",
        "Tournament mode",
        "Comprehensive music library"
        ],
        systemrequirements: {
        minimum: {
            platform: "Nintendo Switch",
            storage: "13.6GB available space",
            onlinePlay: "Nintendo Switch Online membership required for online features",
            controllers: "Nintendo Switch Joy-Con, Pro Controller, or GameCube Controller (with adapter)"
        },
        recommended: {
            platform: "Nintendo Switch",
            storage: "16GB available space (with updates)",
            onlinePlay: "Nintendo Switch Online membership required for online features",
            controllers: "Nintendo Switch Pro Controller or GameCube Controller recommended for competitive play",
            internet: "Stable internet connection required for online play"
        }
        },
        awards: [
        "The Game Awards 2019 - Best Fighting Game",
        "Japan Game Awards 2019 - Award for Excellence",
        "D.I.C.E. Awards - Fighting Game of the Year",
        "Best-selling fighting game of all time",
        "Golden Joystick Awards 2019 - Nintendo Game of the Year"
        ],
        videoId: "WShCN-AYHqA" 
},
    {
        title: "Marvel Rivals",
        genres: ["Shooter"],
        platforms: ["pc", "playstation", "xbox"],
        price: 0,
        image: "images/marvelrivals.jpg",
        description: "Marvel Rivals is an hero shooter video game developed and published by NetEase Games in collaboration with Marvel Games.",
        // Additional info for Marvel Rivals
        releasedate: "6 December, 2024",
        developer: "NetEase Games",
        publisher: "NetEase Games",
        rating: "T",
        features: [
        "6v6 PvP team-based gameplay",
        "Iconic Marvel heroes and villains",
        "Strategic team compositions",
        "Environmental destruction",
        "Character synergy abilities",
        "Free-to-play model",
        "Regular content updates",
        "Unique hero abilities and playstyles"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600K or AMD Ryzen 3 1300X",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560",
            storage: "50GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-8700K or AMD Ryzen 5 3600",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700",
            storage: "50GB available space"
        }
        },
        awards: [
        "Most Anticipated Game 2024 - TBA",
        "Best Upcoming Multiplayer Game - TBA"
        ],
        videoId: "-b0veB7q9P4"  
},
    {
        title: "Call of Duty: Black Ops 6",
        genres: ["Shooter"],
        platforms: ["pc", "playstation", "xbox"],
        price: 69.99,
        image: "images/blackops6.jpg",
        description: "Developed by Treyarch and Raven, Black Ops 6 is a spy action thriller set in the early 90s, a period of transition and upheaval in global politics.",
        // Additional info for cod6
        releasedate: "25 October, 2024",
        developer: "Treyarch, Raven Software",
        publisher: "Activision",
        rating: "M",
        features: [
        "Campaign mode",
        "Multiplayer with new maps",
        "Zombies mode",
        "Cross-platform play",
        "Battle Pass system",
        "Weapon customization",
        "Ranked play",
        "Theater mode"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600K or AMD Ryzen 5 1600X",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
            storage: "125GB available space"
        },
        recommended: {
            os: "Windows 10/11 64-bit",
            processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce RTX 3060 or AMD Radeon RX 6600 XT",
            storage: "125GB available space"
        }
        },
        awards: [
        "Most Anticipated Game 2024 - TBA",
        "Best Upcoming Shooter - TBA"
        ],
        videoId: "h0uxvKUjsj4"  
},
    {
        title: "Lethal Company",
        genres: ["Indie"],
        platforms: ["pc"],
        price: 8.50,
        image: "images/lethalcompany.png",
        description: "A co-op horror roguelite about an abandoned industrial moon.",
        // Additional info for lethal company
        releasedate: "October 23, 2023",
        developer: "Zeekerss",
        publisher: "Zeekerss",
        rating: "T",
        features: [
        "1-4 player co-op gameplay",
        "Procedurally generated moons",
        "Voice proximity chat",
        "Various equipment and tools",
        "Different enemy types",
        "Progression system",
        "Atmospheric horror",
        "Day/night cycle",
        "Resource management"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10",
            processor: "Intel Core i5-4590 / AMD FX-8350",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 760 / AMD Radeon R7 260x",
            storage: "2GB available space"
        },
        recommended: {
            os: "Windows 10/11",
            processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
            storage: "2GB available space"
        }
        },
        awards: [
        "Steam Top Seller 2023",
        "Steam Player's Choice - Best of 2023",
        "Breakout Indie Hit of 2023"
        ],
        videoId: "Su6OsTb1w9Q"  
},
    {
        title: "Resident Evil 2",
        genres: ["Shooter", "Adventure"],
        platforms: ["pc", "playstation", "xbox"],
        price: 34.99,
        image: "images/residentevil2.jpg",
        description: "Resident Evil 2 is a remake of 1998's Resident Evil 2. The game was not developed with the intent of improving the original, but rather a reimagining of the original story with redesigned maps, characters and story elements.",
        // Additional info for RE2
        releasedate: "January 25, 2019",
        developer: "Capcom",
        publisher: "Capcom",
        rating: "M",
        features: [
        "Over-the-shoulder camera perspective",
        "Photorealistic visuals with RE Engine",
        "Two playable campaigns (Leon & Claire)",
        "Modernized control scheme",
        "Enhanced audio design",
        "Reimagined puzzles",
        "New game modes",
        "Alternate costumes",
        "Hardcore difficulty mode"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7, 8.1, 10 (64-bit)",
            processor: "Intel Core i5-4460 or AMD FX-6300",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 760 or AMD Radeon R7 260x",
            storage: "26GB available space"
        },
        recommended: {
            os: "Windows 7, 8.1, 10 (64-bit)",
            processor: "Intel Core i7-3770 or AMD FX-9590",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 480",
            storage: "26GB available space"
        }
        },
        awards: [
        "The Game Awards 2019 - Best Audio Design",
        "Golden Joystick Awards 2019 - Ultimate Game of the Year Runner Up",
        "DICE Awards - Adventure Game of the Year",
        "Steam Awards 2019 - Game of the Year Nominee",
        "Critics Choice Award - Best Remake"
        ],
        videoId: "u3wS-Q2KBpk"  // Official Launch Trailer
},
    {
        title: "Elden Ring",
        genres: ["Action", "RPG"],
        platforms: ["pc", "playstation", "xbox"],
        price: 59.99,
        image: "images/eldenring.jpg",
        description: "Explore a vast open world full of mystery and challenge in this epic dark fantasy RPG.",
        // Additional info for Elden Ring
        releasedate: "February 25, 2022",
        developer: "FromSoftware",
        publisher: "Bandai Namco",
        rating: "M",
        features: [
        "Vast seamless open world",
        "Create your own character",
        "Epic boss battles",
        "Rich combat system",
        "Unique online multiplayer",
        "Deep character progression",
        "Dynamic weather system",
        "Horse-mounted combat",
        "Co-operative gameplay",
        "Multiple endings"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10",
            processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
            memory: "12GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 580 4GB",
            storage: "60GB available space"
        },
        recommended: {
            os: "Windows 10/11",
            processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce GTX 1070 8GB or AMD Radeon RX Vega 56 8GB",
            storage: "60GB available space"
        }
        },
        awards: [
        "The Game Awards 2022 - Game of the Year",
        "Golden Joystick Awards - Ultimate Game of the Year 2022",
        "DICE Awards - Game of the Year 2022",
        "BAFTA Games Award - Best Game 2023",
        "Japan Game Awards - Game of the Year 2022"
        ],
        videoId: "E3Huy2cdih0"
},
    {
        title: "FIFA 24",
        genres: ["Sports", "Simulation"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 69.99,
        image: "images/fifa24.jpg",
        description: "Experience the beautiful game with updated teams, mechanics and realistic gameplay.",
        // Additional info for FIFA 24
        releasedate: "September 29, 2023",
        developer: "EA Sports",
        publisher: "Electronic Arts",
        rating: "E",
        features: [
        "HyperMotion V Technology",
        "Women's Club Football",
        "Cross-platform play",
        "Ultimate Team mode",
        "Career Mode improvements",
        "VOLTA Football"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
            storage: "100GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-6700 or AMD Ryzen 7 2700X",
            memory: "12GB RAM",
            graphics: "NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT",
            storage: "100GB available space"
        }
        },
        awards: [
        "Gamescom 2023 - Best Sports Game",
        "The Game Awards 2023 - Best Sports/Racing Game",
        "Golden Joystick Awards - Best Sports Game 2023"
        ],
        videoId: "XhP3Xh4LMA8"
},

    {
        title: "Stardew Valley",
        genres: ["RPG", "Simulation"],
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        price: 14.99,
        image: "images/stardewvalley.jpg",
        description: "Build your dream farm, make friends, and discover the secrets of the valley in this charming RPG.",
        // Additional info for Stardew Valley
        releasedate: "February 26, 2016",
        developer: "ConcernedApe",
        publisher: "ConcernedApe",
        rating: "E10+",
        features: [
        "Build and customize your farm",
        "Meet and romance the townspeople",
        "Grow crops and raise animals",
        "Mine for ores and fight monsters",
        "Up to 4-player multiplayer",
        "Craft items and cook recipes",
        "Attend seasonal festivals",
        "Fish, forage and explore",
        "Multiple farm layout choices",
        "Mod support (PC version)"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows Vista or greater",
            processor: "2 Ghz",
            memory: "2GB RAM",
            graphics: "256 MB video memory, shader model 3.0+",
            storage: "500MB available space"
        },
        recommended: {
            os: "Windows 7 or greater",
            processor: "2.8 Ghz",
            memory: "4GB RAM",
            graphics: "512 MB video memory, shader model 3.0+",
            storage: "500MB available space"
        }
        },
        awards: [
        "BAFTA Games Award - Multiplayer Nominee 2019",
        "Golden Joystick Awards - PC Game of the Year 2016",
        "Steam Awards - Labor of Love 2022",
        "Best Indie Game - Multiple Publications",
        "Best Family/Farming Game - Multiple Years"
        ],
        videoId: "ot7uXNQskhs"  // Official Trailer
},
    {
        title: "Portal 2",
        genres: ["Puzzle", "Action"],
        platforms: ["pc", "playstation", "xbox"],
        price: 9.99,
        image: "images/portal2.jpg",
        description: "Think with portals in this mind-bending puzzle game featuring single and co-op play.",
        // Additional info for Portal 2
        releasedate: "April 19, 2011",
        developer: "Valve Corporation",
        publisher: "Valve Corporation",
        rating: "E10+",
        features: [
        "Single-player campaign",
        "Co-operative multiplayer campaign",
        "Unique portal mechanics",
        "Puzzle creation workshop",
        "Voice acting by Stephen Merchant",
        "Custom test chambers",
        "Community features",
        "Rich storyline",
        "Advanced physics engine",
        "Cross-platform multiplayer"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7",
            processor: "Intel Core 2 Duo E7500 or AMD Athlon 64 X2",
            memory: "2GB RAM",
            graphics: "NVIDIA GeForce GT 340 or ATI Radeon HD 3600",
            storage: "8GB available space"
        },
        recommended: {
            os: "Windows 10",
            processor: "Intel Core i3 or AMD Phenom X4",
            memory: "4GB RAM",
            graphics: "NVIDIA GeForce GTX 560 or ATI Radeon HD 5850",
            storage: "8GB available space"
        }
        },
        awards: [
        "BAFTA Games Award - Best Game Design",
        "BAFTA Games Award - Best Story",
        "Game Developers Choice Awards - Game of the Year",
        "Interactive Achievement Awards - Outstanding Achievement in Connectivity",
        "VGX Award for Best DLC"
        ],
        videoId: "tax4e4hBBZc"  // Official Launch Trailer
},
    {
        title: "Rocket League",
        genres: ["Sports", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 0,
        image: "images/rocketleague.jpg",
        description: "Soccer meets rocket-powered cars in this high-flying competitive game.",
        // Additional Info for Rocket League
        releasedate: "July 7, 2015",
        developer: "Psyonix",
        publisher: "Psyonix",
        rating: "E",
        features: [
        "Free-to-play",
        "Cross-platform play",
        "Multiple game modes",
        "Competitive rankings",
        "Extensive car customization",
        "Regular seasonal events",
        "Esports scene",
        "Split-screen local multiplayer",
        "Custom training packs",
        "Advanced physics engine"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 64-bit or newer",
            processor: "2.5 GHz Dual core",
            memory: "4GB RAM",
            graphics: "NVIDIA GeForce 760, AMD Radeon R7 270X",
            storage: "20GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "3.0+ GHz Quad core",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 1060, AMD Radeon RX 470",
            storage: "20GB available space"
        }
        },
        awards: [
        "Game Awards 2015 - Best Independent Game",
        "BAFTA Games Award - Multiplayer",
        "D.I.C.E. Award - Sports Game of the Year",
        "Steam Awards - 'Love of Labor' Award",
        "Best Sports Game - Multiple Years"
        ],
        videoId: "OmMF9EDbmQQ"  // Official Free to Play Trailer
},
    {
        title: "Civilization VI",
        genres: ["Strategy", "Simulation"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 29.99,
        image: "images/civ6.jpg",
        description: "Build an empire to stand the test of time in this epic strategy game.",
        // Additional info for CIV6
        releasedate: "October 21, 2016",
        developer: "Firaxis Games",
        publisher: "2K Games",
        rating: "E10+",
        features: [
        "Multiple victory conditions",
        "District-based city building",
        "Dynamic diplomacy system",
        "Extensive tech & civics trees",
        "Leader abilities and agendas",
        "Natural wonder discoveries",
        "Multiplayer support",
        "Mod support",
        "Scenario creator",
        "Hotseat gameplay"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 64bit / 8.1 64bit / 10 64bit",
            processor: "Intel Core i3 2.5 GHz or AMD Phenom II 2.6 GHz",
            memory: "4GB RAM",
            graphics: "1GB DirectX 11 Video Card (AMD 5570 or Nvidia 450)",
            storage: "12GB available space"
        },
        recommended: {
            os: "Windows 7 64bit / 8.1 64bit / 10 64bit",
            processor: "Fourth Generation Intel Core i5 2.5 GHz or AMD FX8350 4.0 GHz",
            memory: "8GB RAM",
            graphics: "2GB DirectX 11 Video Card (AMD 7970 or Nvidia 770)",
            storage: "12GB available space"
        }
        },
        awards: [
        "BAFTA Games Award - Strategy and Simulation",
        "Game Critics Awards - Best Strategy Game",
        "The Game Awards - Best Strategy Game Nominee",
        "Steam Awards - 'Just One More Turn' Award",
        "Critics' Choice for Best Strategy Game 2016"
        ],
        videoId: "5KdE0p2joJw"
},
    {
        title: "Hollow Knight",
        genres: ["Platformer", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 15.99,
        image: "images/hollowknight.png",
        description: "Explore a vast underground kingdom of insects and heroes in this challenging metroidvania.",
        // Additional info for Hollow Knight
        releasedate: "February 24, 2017",
        developer: "Team Cherry",
        publisher: "Team Cherry",
        rating: "E10+",
        features: [
        "Hand-drawn 2D art style",
        "Vast interconnected world",
        "Challenging combat system",
        "Unique charm system",
        "Multiple endings",
        "Free content updates",
        "Rich lore and storytelling",
        "Beautiful orchestral soundtrack",
        "Over 150 unique enemies",
        "Customizable abilities"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7",
            processor: "Intel Core 2 Duo E5200",
            memory: "4GB RAM",
            graphics: "GeForce 9800GTX+ (1GB)",
            storage: "9GB available space"
        },
        recommended: {
            os: "Windows 10",
            processor: "Intel Core i5",
            memory: "8GB RAM",
            graphics: "GeForce GTX 560",
            storage: "9GB available space"
        }
        },
        awards: [
        "Unity Awards 2017 - Best 2D Game",
        "Nintendo Independent Games Showcase - Best Game",
        "Australian Game Developer Awards - Excellence in Art",
        "Golden Joystick Awards - Best Indie Game Nominee",
        "Multiple Game of the Year Awards from gaming publications"
        ],
        videoId: "UAO2urG23S4" 
},
    {
        title: "NBA 2K24",
        genres: ["Sports", "Simulation"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 59.99,
        image: "images/nba2k24.jpg",
        description: "Experience the most realistic basketball simulation with updated rosters and features.",
        // Additional info for NBA2K24
        releasedate: "September 8, 2023",
        developer: "Visual Concepts",
        publisher: "2K Sports",
        rating: "E",
        features: [
        "MyCAREER mode",
        "MyTEAM mode",
        "The City open-world hub",
        "ProPLAY technology",
        "MAMBA MOMENTS tribute",
        "Updated player ratings",
        "Cross-platform play",
        "Enhanced AI gameplay",
        "Realistic player movement",
        "Franchise mode"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 64-bit, Windows 8.1 64-bit or Windows 10 64-bit",
            processor: "Intel® Core™ i3-2100 @ 3.10 GHz/ AMD FX-4100 @ 3.60 GHz",
            memory: "8GB RAM",
            graphics: "NVIDIA® GeForce® GT 450 1GB/ ATI® Radeon™ HD 7770 1GB",
            storage: "110GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "Intel® Core™ i5-4430 @ 3 GHz/ AMD FX-8370 @ 3.4 GHz",
            memory: "16GB RAM",
            graphics: "NVIDIA® GeForce® GTX 770 2GB/ ATI® Radeon™ R9 270 2GB",
            storage: "110GB available space"
        }
        },
        awards: [
        "Gamescom 2023 - Best Sports Game Nominee",
        "The Game Awards 2023 - Best Sports Game Nominee",
        "Best Sports Simulation 2023",
        "Critics Choice - Best Basketball Game 2023"
        ],
        videoId: "GITzbGIiNKg"
},
    {
        title: "Red Dead Redemption 2",
        genres: ["Action", "Adventure"],
        platforms: ["pc", "playstation", "xbox"],
        price: 39.99,
        image: "images/rdr2.jpg",
        description: "Live the life of an outlaw in this epic tale of loyalty and survival in the Old West.",
        // Additional info for red dead 2
        releasedate: "October 26, 2018",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        rating: "M",
        features: [
        "Massive open world",
        "Deep character customization",
        "Red Dead Online multiplayer",
        "Dynamic weather system",
        "Realistic animal ecosystems",
        "Immersive story and characters",
        "Detailed honor system",
        "Mini-games and activities",
        "Photo mode",
        "First and third-person modes"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10",
            processor: "Intel Core i5-2500K or AMD FX-6300",
            memory: "8GB RAM",
            graphics: "Nvidia GeForce GTX 770 2GB or AMD Radeon R9 280 3GB",
            storage: "150GB available space"
        },
        recommended: {
            os: "Windows 10/11",
            processor: "Intel Core i7-4770K or AMD Ryzen 5 1500X",
            memory: "12GB RAM",
            graphics: "Nvidia GeForce GTX 1060 6GB or AMD Radeon RX 480 4GB",
            storage: "150GB available space"
        }
        },
        awards: [
        "The Game Awards 2018 - Best Narrative",
        "The Game Awards 2018 - Best Audio Design",
        "BAFTA Games Award - Best Music",
        "DICE Awards - Outstanding Achievement in Story",
        "Multiple Perfect Scores from Critics",
        "Over 175 Game of the Year Awards"
        ],
        videoId: "eaW0tYpxyp0"  // Launch Trailer
},
    {
        title: "Hades",
        genres: ["Action", "RPG"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 24.99,
        image: "images/hades.jpg",
        description: "Battle out of hell in this fast-paced roguelike featuring Greek mythology.",
        // Additional info for Hades
        releasedate: "September 17, 2020",
        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        rating: "T",
        features: [
        "Unique roguelike progression",
        "Dynamic storytelling system",
        "Rich Greek mythology setting",
        "Multiple weapons and abilities",
        "God-given Boons system",
        "Deep character relationships",
        "Hand-painted art style",
        "Award-winning soundtrack",
        "Multiple save files",
        "New Game Plus mode"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 SP1",
            processor: "Dual Core 2.4 GHz",
            memory: "4GB RAM",
            graphics: "1GB VRAM / DirectX 10+ support",
            storage: "15GB available space"
        },
        recommended: {
            os: "Windows 7 SP1 or higher",
            processor: "Dual Core 3.0 GHz+",
            memory: "8GB RAM",
            graphics: "2GB VRAM / DirectX 10+ support",
            storage: "20GB available space"
        }
        },
        awards: [
        "BAFTA Games Award - Best Game 2021",
        "Game of the Year 2020 - IGN",
        "D.I.C.E. Awards - Game of the Year 2020",
        "The Game Awards - Best Indie Game 2020",
        "Hugo Award for Best Video Game 2021",
        "Multiple Perfect Scores from Critics"
        ],
        videoId: "mD8x5xLHRho" 
},
    {
        title: "Fall Guys",
        genres: ["Platformer", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 0,
        image: "images/fallguys.jpg",
        description: "Compete in crazy obstacle courses against 60 players in this wacky battle royale.",
        // Additional info for fall guys
        releasedate: "August 4, 2020",
        developer: "Mediatonic",
        publisher: "Epic Games",
        rating: "E",
        features: [
        "Free-to-play",
        "Cross-platform play",
        "60-player battle royale",
        "Seasonal content updates",
        "Custom character customization",
        "Various game modes",
        "Squad formation",
        "Regular events",
        "Battle pass system",
        "Competitive rankings"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 64bit",
            processor: "Intel Core i5 or AMD equivalent",
            memory: "8GB RAM",
            graphics: "NVIDIA GTX 660 or AMD Radeon HD 7950",
            storage: "2GB available space"
        },
        recommended: {
            os: "Windows 10 64bit",
            processor: "Intel Core i5 or AMD equivalent",
            memory: "8GB RAM",
            graphics: "NVIDIA GTX 750Ti or AMD Radeon R7 270",
            storage: "2GB available space"
        }
        },
        awards: [
        "BAFTA Games Award - Best Multiplayer Game 2021",
        "The Game Awards - Best Community Support 2020",
        "Steam Awards - Better With Friends 2020",
        "Golden Joystick Award - Best Family Game 2020",
        "Best Battle Royale of 2020 - Multiple Publications"
        ],
        videoId: "s8uYE9r3hIg"  
},
    {
        title: "The Witcher 3",
        genres: ["RPG", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 39.99,
        image: "images/witcher3.jpg",
        description: "Hunt monsters and make tough choices in this epic fantasy RPG.",
        // Additional info for the witcher 3
        releasedate: "May 19, 2015",
        developer: "CD Projekt Red",
        publisher: "CD Projekt",
        rating: "M",
        features: [
        "Massive open world",
        "Choice-driven narrative",
        "Deep combat system",
        "Monster hunting contracts",
        "Gwent card game",
        "Character development",
        "Multiple endings",
        "Two major expansions",
        "Next-gen update",
        "Photo mode"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 or 10 64-bit",
            processor: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
            memory: "6GB RAM",
            graphics: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
            storage: "50GB available space"
        },
        recommended: {
            os: "Windows 10 64-bit",
            processor: "Intel CPU Core i7-3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz",
            memory: "8GB RAM",
            graphics: "Nvidia GPU GeForce GTX 1060 / AMD GPU Radeon RX 480",
            storage: "50GB available space"
        }
        },
        awards: [
        "Game of the Year 2015 - Multiple Publications",
        "Golden Joystick Ultimate Game of the Year",
        "The Game Awards - Game of the Year 2015",
        "BAFTA Games Award - Best Game Design",
        "Over 250 Game of the Year Awards"
        ],
        videoId: "XHrskkHf958"  // Launch Trailer
},
    {
        title: "Among Us",
        genres: ["Strategy", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        price: 4.99,
        image: "images/amongus.jpg",
        description: "Work together to complete tasks or secretly sabotage as the impostor.",
        // Additional info for among us
        releasedate: "June 15, 2018",
        developer: "InnerSloth",
        publisher: "InnerSloth",
        rating: "E",
        features: [
        "4-15 player online play",
        "Cross-platform multiplayer",
        "Multiple maps",
        "Customizable characters",
        "Voice chat support",
        "Regular updates",
        "Custom game settings",
        "Friend system",
        "Account progression",
        "Various roles"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 SP1+",
            processor: "SSE2 instruction set support",
            memory: "1GB RAM",
            graphics: "DirectX 10 compatible graphics",
            storage: "250MB available space"
        },
        recommended: {
            os: "Windows 10",
            processor: "SSE2 instruction set support",
            memory: "2GB RAM",
            graphics: "DirectX 10 compatible graphics",
            storage: "250MB available space"
        }
        },
        awards: [
        "The Game Awards 2020 - Best Multiplayer Game",
        "British Game Awards 2020 - Mobile Game of the Year",
        "Steam Awards 2020 - Better With Friends",
        "Google Play Best of 2020 - Users' Choice Game"
    ],
    videoId: "NSJ4cESNQfE"  // Launch Trailer
},
    {
        title: "Celeste",
        genres: ["Platformer", "Action"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 19.99,
        image: "images/celeste.jpg",
        description: "Master precise platforming controls as you climb a mysterious mountain.",
        // Additional info for Celeste
        releasedate: "January 25, 2018",
        developer: "Extremely OK Games",
        publisher: "Extremely OK Games",
        rating: "E10+",
        features: [
        "Challenging platforming",
        "Assist mode options",
        "Beautiful pixel art",
        "Award-winning soundtrack",
        "B-Side challenge levels",
        "Deep narrative",
        "Hidden collectibles",
        "Speedrun mode",
        "Multiple chapters",
        "Free DLC chapter"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 7 or newer",
            processor: "Intel Core i3 M380",
            memory: "2GB RAM",
            graphics: "Intel HD 4000",
            storage: "1.2GB available space"
        },
        recommended: {
            os: "Windows 10",
            processor: "Intel Core i3 2100",
            memory: "4GB RAM",
            graphics: "Intel HD 4000",
            storage: "2GB available space"
        }
        },
        awards: [
        "The Game Awards 2018 - Best Independent Game",
        "BAFTA Games Award - Original Property",
        "D.I.C.E. Awards - Action Game of the Year",
        "Game Developers Choice Awards - Best Audio",
        "Multiple Perfect Scores from Critics"
        ],
        videoId: "70d9irlxiB4"  // Launch Trailer
},
    {
        title: "Cities: Skylines",
        genres: ["Simulation", "Strategy"],
        platforms: ["pc", "playstation", "xbox", "switch"],
        price: 29.99,
        image: "images/citiesskylines.jpg",
        description: "Build and manage the city of your dreams in this deep city-building simulator.",
        // Additional info for City Skylines
        releasedate: "October 24, 2023",
        developer: "Colossal Order",
        publisher: "Paradox Interactive",
        rating: "E",
        features: [
        "Advanced city simulation",
        "Detailed traffic management",
        "Dynamic economy system",
        "Natural disasters",
        "Day/night cycle",
        "Public transportation options",
        "District specialization",
        "Mod support (PC)",
        "Asset creation tools",
        "Multiple biomes"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 Home 64-bit",
            processor: "Intel Core i7 or AMD Ryzen 7",
            memory: "8GB RAM",
            graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 480",
            storage: "60GB available space"
        },
        recommended: {
            os: "Windows 10 Home 64-bit",
            processor: "Intel Core i7-10700K or AMD Ryzen 7 5800X",
            memory: "16GB RAM",
            graphics: "NVIDIA GeForce RTX 3080 or AMD Radeon RX 6800 XT",
            storage: "60GB available space"
        }
        },
        awards: [
        "Best Simulation Game 2023",
        "Steam Top Seller 2023",
        "Best City Builder - Multiple Publications",
        "Critics Choice - Best Strategy Game 2023"
        ],
        videoId: "CpWe03NhXKs"  
},
    {
        title: "Forza Horizon 5",
        genres: ["Sports", "Racing"],
        platforms: ["pc", "xbox"],
        price: 59.99,
        image: "images/forzahorizon5.jpg",
        description: "Race through a stunning open world Mexico in hundreds of detailed vehicles.",
        // Additional info for Forza Horizon 5 
        releasedate: "November 9, 2021",
        developer: "Playground Games",
        publisher: "Xbox Game Studios",
        rating: "E",
        features: [
        "Massive open world Mexico",
        "500+ licensed vehicles",
        "Dynamic weather system",
        "Ray tracing support",
        "Custom race creator",
        "Seasonal events",
        "Online multiplayer",
        "Photo mode",
        "Car customization",
        "Cross-platform play"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows 10 version 15063.0 or higher",
            processor: "Intel i5-4460 or AMD Ryzen 3 1200",
            memory: "8GB RAM",
            graphics: "NVIDIA GTX 970 or AMD RX 470",
            storage: "110GB available space"
        },
        recommended: {
            os: "Windows 10 version 15063.0 or higher",
            processor: "Intel i5-8400 or AMD Ryzen 5 3600",
            memory: "16GB RAM",
            graphics: "NVIDIA GTX 1070 or AMD RX 590",
            storage: "110GB available space"
        }
        },
        awards: [
        "The Game Awards 2021 - Best Sports/Racing Game",
        "DICE Awards - Racing Game of the Year",
        "BAFTA Games Award - Technical Achievement",
        "Critics Choice - Best Racing Game 2021"
        ],
        videoId: "FYH9n37B7Yw"  // Official Launch Trailer
},
    {
        title: "Terraria",
        genres: ["Action", "Adventure"],
        platforms: ["pc", "playstation", "xbox", "switch", "mobile"],
        price: 9.99,
        image: "images/terraria.jpg",
        description: "Dig, fight, explore, and build in this 2D adventure game with endless possibilities.",
        // Additional info for Terraria
        releasedate: "May 16, 2011",
        developer: "Re-Logic",
        publisher: "Re-Logic",
        rating: "T",
        features: [
        "Procedurally generated worlds",
        "Extensive crafting system",
        "Multiplayer support",
        "Hundreds of enemies and bosses",
        "Various biomes to explore",
        "Building mechanics",
        "Regular content updates",
        "Character customization",
        "Multiple game modes",
        "Rich progression system"
        ],
        systemrequirements: {
        minimum: {
            os: "Windows Xp, Vista, 7, 8/8.1, 10",
            processor: "2.0 GHz",
            memory: "2.5GB RAM",
            graphics: "128mb Video Memory, capable of Shader Model 1.1",
            storage: "200MB available space"
        },
        recommended: {
            os: "Windows 7, 8/8.1, 10",
            processor: "3.0 GHz",
            memory: "4GB RAM",
            graphics: "256mb Video Memory, capable of Shader Model 2.0+",
            storage: "200MB available space"
        }
        },
        awards: [
        "Top Selling PC Game of All Time",
        "Steam Outstanding Game Award",
        "IndieDB Editor's Choice",
        "Multiple Perfect Scores from Critics",
        "Best Indie Game - Multiple Years"
        ],
        videoId: "w7uOhFTrrq0"  // Official Launch Trailer
},

];

// Function to filter games
function filterGames() {
    const searchQuery = new URLSearchParams(window.location.search).get('search');
    let filteredGames = searchQuery ? searchGames(searchQuery) : games;

    const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(input => input.value);
    const selectedPlatforms = Array.from(document.querySelectorAll('input[name="platform"]:checked')).map(input => input.value);
    const selectedPriceRanges = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value);

    filteredGames = filteredGames.filter(game => {
        // Your existing filter logic here
        const genreMatch = selectedGenres.length === 0 || selectedGenres.every(genre => game.genres.includes(genre));
        const platformMatch = selectedPlatforms.length === 0 || game.platforms.some(platform => selectedPlatforms.includes(platform));
        const priceMatch = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            // Your existing price range logic
            switch (range) {
                case 'free': return game.price === 0;
                case 'under20': return game.price < 20;
                case '20to40': return game.price >= 20 && game.price < 40;
                case 'over40': return game.price >= 40;
                default: return false;
            }
        });

        return genreMatch && platformMatch && priceMatch;
    });

    displayGames(filteredGames);
}

function displayGames(games) {
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = games.map(game => `
        <div class="game-card">
            <a href="game-details.html?title=${encodeURIComponent(game.title)}">  <!-- Changed to 'title' -->
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <div class="price">£${game.price.toFixed(2)}</div>
                <p>${game.description}</p>
                <div class="tags">
                    ${game.genres.map(genre => `<span>${genre}</span>`).join('')}
                </div>
            </a>
        </div>
    `).join('');
}

// Add event listeners to checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterGames);
});

// Initial display
displayGames(games);