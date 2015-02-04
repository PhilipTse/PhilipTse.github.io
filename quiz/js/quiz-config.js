// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Into Tech Quiz!!",
        "main":    "<p>Think you're Into Tech? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Great Job! Click go back to go back to the main page.</p><br><a class=\"button\" href=\"www.into-tech.com\">Go back!</a>",
        "level1":  "Into Tech Master!",
        "level2":  "Into Tech Pro!",
        "level3":  "Into Tech Amateur",
        "level4":  "Into Tech Newbie",
        "level5":  "Did you even look at the website?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Almost all cars currently use what is called a _______ to convert gasoline into motion.",
            "a": [
                {"option": "Four-Stroke Combustion Cycle",      "correct": true},
                {"option": "Automatic Combustion Cycle",     "correct": false},
                {"option": "Three-Stroke Combustion Cycle",      "correct": false},
                {"option": "Manual Combustion Cycle",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Almost all cars use a Four-Stroke Combustion Cycle to convert gasoline into motion!</p>",
            "incorrect": "<p><span>Uhh no.</span> Try again!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The _______ is connected to the engine by a belt and generates electricity to recharge the battery.",
            "a": [
                {"option": "Alternator",               "correct": true},
                {"option": "Flextor",   		"correct": false},
                {"option": "Starter",               	"correct": false},
                {"option": "Piston",     		"correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> The Alternator is connected to the engine by a belt and generates electricity to recharge the battery.</p>",
            "incorrect": "<p><span>Hmmm.</span> That's not right.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Each solar panel cost about _______ to build.",
            "a": [
                {"option": "$70,000",           "correct": false},
                {"option": "$1,000",                  "correct": false},
                {"option": "$14,000",  "correct": false},
                {"option": "$7,000",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Solar panels cost about $7,000 to build.</p>",
            "incorrect": "<p><span>Not Quite.</span> Try again.</p>" // no comma here
        },
        { // Question 4
            "q": "Electric cars run on _______ rather than fuel.",
            "a": [
                {"option": "Water",    "correct": false},
                {"option": "Rechargable Batteries",     "correct": true},
                {"option": "Sunlight",      "correct": false},
                {"option": "Gasoline",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas! You're smart!</span> I didn't actually expect you to know that! Electric cars run on Rechargable batteries rather than fuel!</p>",
            "incorrect": "<p><span>Nope.</span> Sorry. Try again.</p>" // no comma here
        },
		{ // Question 5
            "q": "The _______ controls the speed of a locomotive.",
            "a": [
                {"option": "Alternator",    "correct": false},
                {"option": "Trottle",     "correct": true},
                {"option": "Engine",      "correct": false},
                {"option": "Transmission",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!!</span> The trottle controls the speed of a locomotive!</p>",
            "incorrect": "<p><span>Uhh no..</span> Sorry, that's not right.</p>" // no comma here
        },
        	{ // Question 6
            "q": "Maglev trains can reach _______ with people onboard",
            "a": [
                {"option": "100 MPH",    "correct": false},
                {"option": "60 MPH",     "correct": false},
                {"option": "300 MPH",      "correct": true},
                {"option": "1,000 MPH",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's Right!!</span> Maglev trains can reach up to 300 MPH with people onboard!</p>",
            "incorrect": "<p><span>Nope.</span> Try again.</p>" // no comma here
        },
        	{ // Question 7
            "q": "Maglev trains are levitated and propelled by _______.",
            "a": [
                {"option": "Magnetic Force",    "correct": true},
                {"option": "Magic",     "correct": false},
                {"option": "Quantum Physics",      "correct": false},
                {"option": "Air Cannons",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yes!!</span> Magnetic Force levitate and propel the Maglev train!</p>",
            "incorrect": "<p><span>Uhh no..</span> Sorry, that's not right.</p>" // no comma here
        },
            	{ // Question 8
            "q": "The tail of the airplane has two types of small wings, called the _______.",
            "a": [
                {"option": "Horizontal and Vertical Elbows",    "correct": false},
                {"option": "Horizontal and Vertical Stabilizers",     "correct": true},
                {"option": "Horitontal and Vertical Flexors",      "correct": false},
                {"option": "Cockpit",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!!</span> Horitontal and Vertical Stabilizers are the wings on the tail of a airplane.</p>",
            "incorrect": "<p><span>Not Quite.</span> Try again.</p>" // no comma here
        },
            	{ // Question 9
            "q": "It costs approximately _______ to send a rocket to space!",
            "a": [
                {"option": "$600 Million",    "correct": false},
                {"option": "$100 Million",     "correct": false},
                {"option": "$800 Million",      "correct": false},
                {"option": "$450 Million",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yes!</span> It cost $450 Million to send a rocket to space!</p>",
            "incorrect": "<p><span>Uhh no..</span> Sorry, that's not right.</p>" // no comma here
        },
            	{ // Question 10
            "q": "NASA's Deep Space-1 project is based on _______ engines.",
            "a": [
                {"option": "Quantum ion",    "correct": false},
                {"option": "Xenon ion",     "correct": true},
                {"option": "Denim ion",      "correct": false},
                {"option": "Diesel",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!!</span> NASA's Deep Space-1 project is based off xenon ions.</p>",
            "incorrect": "<p><span>Nope.</span> That's not right.</p>" // no comma here
        },
            	{ // Question 11
            "q": "Rockets burn _______ to produce hot gases that drive the rocket upwards.",
            "a": [
                {"option": "Propellant",    "correct": true},
                {"option": "Quantum atoms",     "correct": false},
                {"option": "Diesel fuel",      "correct": false},
                {"option": "Xenon ions",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice.</span> Rockets burn Propellant to drive the rocket upwards.</p>",
            "incorrect": "<p><span>Wrong!</span> Try again.</p>" // no comma here
        },
            	{ // Question 12
            "q": "_______ is the aerodynamic force that pushes or pulls the airplane forward through space.",
            "a": [
                {"option": "Quantum Force",    "correct": false},
                {"option": "Gravity",     "correct": false},
                {"option": "Xeroity",      "correct": false},
                {"option": "Thrust",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Excellent!!</span> The trottle controls the speed of a locomotive!</p>",
            "incorrect": "<p><span>Uhh no..</span> Sorry, that's not right.</p>" // no comma here
        },
            	{ // Question 13
            "q": "All railroad cars have an _______ that contains wheels and a suspension system to buffer the ride.",
            "a": [
                {"option": "Cockpit",    "correct": false},
                {"option": "Undercarriage",     "correct": true},
                {"option": "Stabilizer",      "correct": false},
                {"option": "Axis",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!!</span> The undercarriage contains wheels and a suspension system to buffer the ride.</p>",
            "incorrect": "<p><span>Nope.</span> That's not right.</p>" // no comma here
        },
            	{ // Question 14
            "q": "The _______ enables the locomotive to back up.",
            "a": [
                {"option": "Air Cannons",    "correct": false},
                {"option": "Reversing Gear",     "correct": true},
                {"option": "Throttle",      "correct": false},
                {"option": "Zeuton Gear",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Great Job!</span> The reversing gear enables the locomotive to back up.</p>",
            "incorrect": "<p><span>Hmmm.</span> Sorry, that's not right.</p>" // no comma here
        },
         { // Question 15
            "q": "Autonomous cars are expected to be on the road within _______.",
            "a": [
                {"option": "10 Years",    "correct": true},
                {"option": "20 Years",     "correct": false},
                {"option": "30 Years",      "correct": false},
                {"option": "50 Years",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yippee!!</span> Autonomous cars are expected to be on the road within 10 years!</p>",
            "incorrect": "<p><span>Close!</span> Try again!</p>" // no comma here
        },
        { // Question 16
			"q": "Germany and Japan are both developing _______ train technology.",
            "a": [
                {"option": "Solar Powered",    "correct": false},
                {"option": "Electric",     "correct": false},
                {"option": "Automatic",      "correct": false},
                {"option": "Maglev",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Both Japan and Germany are developing Maglev train technology.</p>",
            "incorrect": "<p><span>You silly goose.</span> That's not the right!</p>" // no comma here
        } // no comma here
    ]
};
