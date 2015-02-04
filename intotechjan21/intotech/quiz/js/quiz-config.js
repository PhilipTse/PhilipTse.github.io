// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Into Tech Quiz!!",
        "main":    "<p>Think you're Into Tech? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Into Tech Master!",
        "level2":  "Close, but no cigar!",
        "level3":  "Into Tech Amateur",
        "level4":  "Into Tech Newb",
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
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The _______ is connected to the engine by a belt and generates electricity to recharge the battery.",
            "a": [
                {"option": "Alternator",               "correct": true},
                {"option": "Flextor",   "correct": false},
                {"option": "Starter",               "correct": false},
                {"option": "Piston",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Each solar panel cost about _______ to build.",
            "a": [
                {"option": "$70,000",           "correct": false},
                {"option": "$1,000",                  "correct": false},
                {"option": "$14,000",  "correct": false},
                {"option": "$7,000",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "Electric cars run on _______ rather than fuel.",
            "a": [
                {"option": "Water",    "correct": false},
                {"option": "Rechargable Batteries",     "correct": true},
                {"option": "Sunlight",      "correct": false},
                {"option": "Gasoline",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		{ // Question 5
            "q": "The _______ controls the speed of a locomotive.",
            "a": [
                {"option": "Alternator",    "correct": false},
                {"option": "Trottle",     "correct": true},
                {"option": "Engine",      "correct": false},
                {"option": "Transmission",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 6
			"q": "Germany and Japan are both developing _______ train technology.",
            "a": [
                {"option": "Solar Powered",    "correct": false},
                {"option": "Electric",     "correct": false},
                {"option": "Automatic",      "correct": false},
                {"option": "Maglev",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        } // no comma here
    ]
};
