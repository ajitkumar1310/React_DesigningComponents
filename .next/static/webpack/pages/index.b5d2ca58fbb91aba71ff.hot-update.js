self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./speakerData.js":
/*!************************!*\
  !*** ./speakerData.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": function() { return /* binding */ data; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var data = [{
  id: "1269",
  first: "Arun",
  last: "Gupta",
  company: "Amazon",
  bio: "Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. ",
  twitterHandle: "arungupta",
  favorite: true,
  sessions: [{
    id: "32",
    title: "Rails powered by GlassFish",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "58",
    title: "Metro: Hello World to .NET 3.5 interoperable Web service",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "61",
    title: "GlassFish: On a mission to please developers",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "263",
    title: "Java EE 6 and GlassFish v3: Paving the path for future",
    eventYear: "2009",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "264",
    title: "Using Eclipse for Java EE 6 development for the GlassFish™ Application Server",
    eventYear: "2009",
    room: {
      name: "5503",
      capacity: 44
    }
  }, {
    id: "265",
    title: "Dynamic Languages &amp; Web Frameworks in GlassFish",
    eventYear: "2009",
    room: {
      name: "4204",
      capacity: 45
    }
  }, {
    id: "440",
    title: "Java EE 6: Doing More With Less",
    eventYear: "2010",
    room: {
      name: "8401",
      capacity: 48
    }
  }, {
    id: "441",
    title: "OSGi and Java EE in GlassFish",
    eventYear: "2010",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "444",
    title: "Running your Java EE 6 application in the Cloud",
    eventYear: "2010",
    room: {
      name: "3106",
      capacity: 45
    }
  }, {
    id: "766",
    title: "Deploy and Monitor your Java EE 6 session in a fully-clustered GlassFish",
    eventYear: "2011",
    room: {
      name: "4201",
      capacity: 70
    }
  }, {
    id: "770",
    title: "The Java EE 7 Platform: Developing for the Cloud",
    eventYear: "2011",
    room: {
      name: "4201",
      capacity: 70
    }
  }, {
    id: "864",
    title: "RESTful Java on Steroids: JAX-RS 2.0",
    eventYear: "2012",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "1131",
    title: "50 new features of Java EE 7 in 50 minutes",
    eventYear: "2013",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "1262",
    title: "Minecraft Modding Workshop (Part 1 of 2)",
    eventYear: "2013",
    room: {
      name: "PSEC4603",
      capacity: 1
    }
  }, {
    id: "1352",
    title: "Minecraft Modding Workshop (Part 2 of 2)",
    eventYear: "2013",
    room: {
      name: "PSEC4603",
      capacity: 1
    }
  }, {
    id: "1440",
    title: " All about WildFly, Only using demos",
    eventYear: "2014",
    room: {
      name: "4302",
      capacity: 41
    }
  }, {
    id: "1441",
    title: "Java EE 7 development using Eclipse",
    eventYear: "2014",
    room: {
      name: "4301",
      capacity: 64
    }
  }, {
    id: "2529",
    title: "Introductory Minecraft Modding with Forge - Part 1",
    eventYear: "2014",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "2557",
    title: "Introductory Minecraft Modding with Forge - Part II",
    eventYear: "2014",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "3694",
    title: "Docker and Kubernetes Recipes for Java Applications",
    eventYear: "2015",
    room: {
      name: "AD-123",
      capacity: 70
    }
  }, {
    id: "4835",
    title: "Docker and Kubernetes Workshop",
    eventYear: "2015fall",
    room: {
      name: "RD-301",
      capacity: 42
    }
  }, {
    id: "4860",
    title: "Minecraft Modding with Forge - Part 1",
    eventYear: "2015",
    room: {
      name: "AB-142",
      capacity: 78
    }
  }, {
    id: "5922",
    title: "Minecraft Modding with Forge - Part 2",
    eventYear: "2015",
    room: {
      name: "AB-142",
      capacity: 78
    }
  }, {
    id: "6060",
    title: "Package, Deploy, Scale Your Applications Using Docker and Kubernetes",
    eventYear: "2016fall",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "6205",
    title: "Service Discovery in Container Orchestration Frameworks",
    eventYear: "2017",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }, {
    id: "7379",
    title: "Java developer’s journey in Kubernetes land",
    eventYear: "2018",
    room: {
      name: "Fireside C",
      capacity: 80
    }
  }, {
    id: "7486",
    title: "Using Kubernetes for Machine Learning Frameworks",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }]
}, {
  id: "8590",
  first: "Chris",
  last: "Richardson",
  company: "Eventuate, Inc",
  bio: "Founder of Eventuate, Author of POJOs in Action, creator of the original Cloud Foundry",
  twitterHandle: "crichardson",
  favorite: false,
  sessions: [{
    id: "1011",
    title: "Decomposing applications for scalability and deployability",
    eventYear: "2012",
    room: {
      name: "4306",
      capacity: 100
    }
  }, {
    id: "1133",
    title: "Developing polyglot persistence applications",
    eventYear: "2013",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "1136",
    title: "Consuming web services asynchronously with Futures and Rx Observables",
    eventYear: "2013",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1454",
    title: "Developing applications with a micro-service architecture",
    eventYear: "2014",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1455",
    title: "Map, flatmap and reduce are your new best friends",
    eventYear: "2014",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "4765",
    title: "Developing event-driven microservices with event sourcing and CQRS",
    eventYear: "2015",
    room: {
      name: "AB-201",
      capacity: 66
    }
  }, {
    id: "6080",
    title: "Developing Microservices with Aggregates",
    eventYear: "2016",
    room: {
      name: "RF-141",
      capacity: 58
    }
  }, {
    id: "6214",
    title: "There Is No Such Thing as a Microservice!",
    eventYear: "2017",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }, {
    id: "7401",
    title: "Developing Asynchronous, Message-Driven Microservices",
    eventYear: "2018",
    room: {
      name: "Round Table",
      capacity: 75
    }
  }, {
    id: "7402",
    title: "Microservices: Decomposing Applications for Testability and Deployability",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7460",
    title: "Microservices and Serverless Speaker Panel – The Road Ahead",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7515",
    title: "Cubes, Hexagons and More: Understanding the Microservices Through Shapes",
    eventYear: "2019",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }]
}, {
  id: "5443",
  first: "Mark",
  last: "Abramson",
  company: "Printform Corporation",
  bio: "Mark is a globally recognized expert on digital printing for industrial and packaging applications.",
  twitterHandle: "mark__a",
  favorite: true,
  sessions: [{
    id: "676",
    title: "Accelerate your database development with Object-Relational Mapping (OR/M) in .NET",
    eventYear: "2011",
    room: {
      name: "8401",
      capacity: 48
    }
  }, {
    id: "677",
    title: "Introduction to Database Design with Entity Relationship (ER) Diagrams",
    eventYear: "2011",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "859",
    title: "Database Design Troubleshooting, repair and wart removal",
    eventYear: "2012",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "861",
    title: "Introduction to Database Design with Entity Relationship (ER) Diagrams",
    eventYear: "2012",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "1120",
    title: "Intro to Relational Database Design & Entity-Relationship Diagrams",
    eventYear: "2013",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "1125",
    title: "Advanced Data Modeling with Entity Relationship Diagrams",
    eventYear: "2013",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "1435",
    title: "Intro to Relational Database Design & Entity-Relationship Diagrams",
    eventYear: "2014",
    room: {
      name: "8402",
      capacity: 80
    }
  }, {
    id: "2577",
    title: "Lean Startup for Engineers",
    eventYear: "2014",
    room: {
      name: "8402",
      capacity: 80
    }
  }, {
    id: "4819",
    title: "Lean Startup for Engineers",
    eventYear: "2015",
    room: {
      name: "AC-162",
      capacity: 77
    }
  }, {
    id: "6184",
    title: "Lean Startup for Engineers",
    eventYear: "2017",
    room: {
      name: "Fireside D",
      capacity: 80
    }
  }]
}, {
  id: "1124",
  first: "Douglas",
  last: "Crockford",
  company: "PayPal",
  bio: "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
  twitterHandle: "notatweeter",
  favorite: true,
  sessions: [{
    id: "12",
    title: "JavaScript: The Good Parts (Part 1)",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "121",
    title: "JavaScript: The Good Parts (Part 2)",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "176",
    title: "JavaScript: The Good Parts",
    eventYear: "2009",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "177",
    title: "JavaScript Town Meeting",
    eventYear: "2009",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "371",
    title: "JavaScript: The Good Parts",
    eventYear: "2010",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "536",
    title: "Talk with Crock",
    eventYear: "2010",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "588",
    title: "ECMAScript 5: The New Parts",
    eventYear: "2011",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "589",
    title: "ECMAScript: What Next?",
    eventYear: "2011",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "833",
    title: "Programming Style and Your Brain",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1056",
    title: "Monads and Gonads",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1198",
    title: "Fun with Functions (Part 1)",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1199",
    title: "Fun with Functions (Part 2)",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1390",
    title: "Fun with Functions in JavaScript (Full Day)",
    eventYear: "2014",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "1416",
    title: "The Better Parts",
    eventYear: "2014",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "3643",
    title: "Managing Programmers. Programmers are not like the other kids",
    eventYear: "2014",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "3687",
    title: "The Better Parts",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "3696",
    title: "Managing Programmers",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "4726",
    title: "Upgrading the Web",
    eventYear: "2015sf",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "5987",
    title: "The Seif Project Continued",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "6171",
    title: "The Post Javascript Apocalypse",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "6208",
    title: "Numbers",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "6209",
    title: "Character Sets",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7256",
    title: "Principles of Security",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7417",
    title: "How JavaScript Works",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7418",
    title: "Q&A With Douglas Crockford",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }, {
    id: "7465",
    title: "Web Panel with Douglas Crockford, Steve Souders and Mike North",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7489",
    title: "The History of JSON",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7569",
    title: "You Can Count on Numbers",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }]
}, {
  id: "10801",
  first: "Troy",
  last: "Miles",
  company: "Kelley Blue Book",
  bio: "An award winning developer and author.",
  twitterHandle: "therockncoder",
  favorite: false,
  sessions: [{
    id: "1252",
    title: "Beginning HTML5 Mobile Game Programming",
    eventYear: "2013",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1444",
    title: "Intro to Mobile Game Programming with Cocos2d-x, Part 1",
    eventYear: "2014",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "1445",
    title: "Intro to Mobile Game Programming with Cocos2d-x, Part 2",
    eventYear: "2014",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "6085",
    title: "Functional Programming in JavaScript",
    eventYear: "2016",
    room: {
      name: "Gullo II",
      capacity: 200
    }
  }, {
    id: "7242",
    title: "Creating an AWS Lambda Function with Kotlin",
    eventYear: "2017",
    room: {
      name: "Fireside D",
      capacity: 80
    }
  }, {
    id: "7346",
    title: "C++ Web Servers and APIs",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }]
}, {
  id: "47343",
  first: "Eve",
  last: "Porcello",
  company: "Moon Highway",
  bio: "Eve Porcello is an instructor at Moon Highway, egghead.io, and LinkedIn Learning.",
  twitterHandle: "eveporcello",
  favorite: true,
  sessions: [{
    id: "7548",
    title: "React Is Your Friend: A Gentle Intro to the React Library",
    eventYear: "2019",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}, {
  id: "14918",
  first: "Claudia",
  last: "Galvan",
  company: "Early Stage Innovation",
  bio: "Claudia is a leading expert on product internationalization",
  twitterHandle: "cgalvan",
  favorite: false,
  sessions: [{
    id: "4820",
    title: "Innovation for Women Engineers",
    eventYear: "2015",
    room: {
      name: "RE-311",
      capacity: 68
    }
  }, {
    id: "6012",
    title: "Internationalization at Startups",
    eventYear: "2016",
    room: {
      name: "S-160",
      capacity: 60
    }
  }, {
    id: "7341",
    title: "Advancing your Career through technical leadership skills ",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7497",
    title: "GDPR and Privacy Around the World",
    eventYear: "2019",
    room: {
      name: "Fireside B",
      capacity: 80
    }
  }]
}, {
  id: "46769",
  first: "Mary",
  last: "Grygleski",
  company: "IBM",
  bio: "Mary is a passionate developer advocate by day, and a very active tech community organizer by night.",
  twitterHandle: "mgrygles",
  favorite: true,
  sessions: [{
    id: "7549",
    title: "A Gentle Intro to Reactive Java Programming and Systems",
    eventYear: "2019",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }]
}, {
  id: "8367",
  first: "Gayle Laakmann",
  last: "McDowell",
  company: "CareerCup",
  bio: "Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.",
  twitterHandle: "gayle",
  favorite: false,
  sessions: [{
    id: "944",
    title: "Cracking the Coding Interview",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1086",
    title: "Cracking the Coding Interview: Advice for Devs and PM Interviews",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1412",
    title: "Cracking the Coding Interview",
    eventYear: "2014",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1413",
    title: "Cracking the Product Manager Interview",
    eventYear: "2014",
    room: {
      name: "5015",
      capacity: 217
    }
  }, {
    id: "3701",
    title: "Cracking the Coding Interview",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "3703",
    title: "Cracking the Product Manager Interview",
    eventYear: "2015",
    room: {
      name: "SC-127",
      capacity: 250
    }
  }, {
    id: "5984",
    title: "Cracking the Coding Interview",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "5986",
    title: "Be a Better Interviewer: How to Interview Like Google (or not)-But Better!",
    eventYear: "2016",
    room: {
      name: "SC-127",
      capacity: 250
    }
  }, {
    id: "6227",
    title: "Cracking the Coding Interview",
    eventYear: "2017",
    room: {
      name: "Fireside B",
      capacity: 80
    }
  }, {
    id: "6229",
    title: "Hiring Coders with Whiteboard Interviews and Other Questions",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7366",
    title: "Cracking the Coding Interview",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7367",
    title: "Interview Like Google (or not)-But Better!",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7368",
    title: "Cracking the Product Manager Interview",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}, {
  id: "620",
  first: "Ron",
  last: "Kleinman",
  company: "De Anza College",
  bio: "Ron teaches Object Oriented Analysis and Design at De Anza College ",
  twitterHandle: "notweets",
  favorite: false,
  sessions: [{
    id: "86",
    title: "The Performance Limitations  of the Java Platform ... and how to avoid them",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "6089",
    title: "So your mom always wanted you to be an architect",
    eventYear: "2016",
    room: {
      name: "C209",
      capacity: 55
    }
  }, {
    id: "7440",
    title: "How to Think like a Software Architect",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }, {
    id: "7551",
    title: 'How to "think" (and design) like a Software Architect',
    eventYear: "2019",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/Hooks/useRequestSpeaker.js":
/*!****************************************!*\
  !*** ./src/Hooks/useRequestSpeaker.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRequestSpeakers": function() { return /* binding */ useRequestSpeakers; }
/* harmony export */ });
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../speakerData */ "./speakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();



var useRequestSpeakers = function useRequestSpeakers(delayms) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      speakers = _useState[0],
      setSpeakers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      showSessions = _useState2[0],
      setShowSessions = _useState2[1];

  var delay = function delay(delayms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, delayms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return delay(2000);

          case 2:
            setSpeakers(_speakerData__WEBPACK_IMPORTED_MODULE_3__.data);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return {
    speakers: speakers,
    showSessions: showSessions
  };
};

_s(useRequestSpeakers, "+b3oMr4cwBYeNyk0KLKC4tavY8I=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Speakers": function() { return /* binding */ Speakers; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersList */ "./src/components/SpeakersList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolBar */ "./src/components/ToolBar.js");
/* harmony import */ var _Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hooks/useRequestSpeaker */ "./src/Hooks/useRequestSpeaker.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\components\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();





var Speakers = function Speakers() {
  _s();

  var _useRequestSpeakers = (0,_Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__.useRequestSpeakers)(2000),
      speakers = _useRequestSpeakers.speakers,
      showSessions = _useRequestSpeakers.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToolBar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
      showSessions: showSessions,
      setShowSessions: setShowSessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_1__.SpeakersList, {
      speakers: speakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "5AX1ZJQKWMOjCfBfvGtKJxUfRSY=", false, function () {
  return [_Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__.useRequestSpeakers];
});

_c = Speakers;

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3BlYWtlckRhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Ib29rcy91c2VSZXF1ZXN0U3BlYWtlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiY29tcGFueSIsImJpbyIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsInNlc3Npb25zIiwidGl0bGUiLCJldmVudFllYXIiLCJyb29tIiwibmFtZSIsImNhcGFjaXR5IiwidXNlUmVxdWVzdFNwZWFrZXJzIiwiZGVsYXltcyIsInVzZVN0YXRlIiwic3BlYWtlcnMiLCJzZXRTcGVha2VycyIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiU3BlYWtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7O0FDbENBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNWQyY2E1OGZiYjkxYWJhNzFmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImV4cG9ydCBjb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjEyNjlcIixcclxuICAgIGZpcnN0OiBcIkFydW5cIixcclxuICAgIGxhc3Q6IFwiR3VwdGFcIixcclxuICAgIGNvbXBhbnk6IFwiQW1hem9uXCIsXHJcbiAgICBiaW86XHJcbiAgICAgIFwiQXJ1biBHdXB0YSBpcyBhIFByaW5jaXBhbCBPcGVuIFNvdXJjZSBUZWNobm9sb2dpc3QgYXQgQW1hem9uIFdlYiBTZXJ2aWNlcy4gXCIsXHJcbiAgICB0d2l0dGVySGFuZGxlOiBcImFydW5ndXB0YVwiLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICBzZXNzaW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMzJcIixcclxuICAgICAgICB0aXRsZTogXCJSYWlscyBwb3dlcmVkIGJ5IEdsYXNzRmlzaFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI1OFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIk1ldHJvOiBIZWxsbyBXb3JsZCB0byAuTkVUIDMuNSBpbnRlcm9wZXJhYmxlIFdlYiBzZXJ2aWNlXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjYxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2xhc3NGaXNoOiBPbiBhIG1pc3Npb24gdG8gcGxlYXNlIGRldmVsb3BlcnNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMjYzXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YSBFRSA2IGFuZCBHbGFzc0Zpc2ggdjM6IFBhdmluZyB0aGUgcGF0aCBmb3IgZnV0dXJlXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDlcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjU1MDJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMjY0XCIsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICBcIlVzaW5nIEVjbGlwc2UgZm9yIEphdmEgRUUgNiBkZXZlbG9wbWVudCBmb3IgdGhlIEdsYXNzRmlzaOKEoiBBcHBsaWNhdGlvbiBTZXJ2ZXJcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNTUwM1wiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDQ0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIyNjVcIixcclxuICAgICAgICB0aXRsZTogXCJEeW5hbWljIExhbmd1YWdlcyAmYW1wOyBXZWIgRnJhbWV3b3JrcyBpbiBHbGFzc0Zpc2hcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNDIwNFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDQ1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI0NDBcIixcclxuICAgICAgICB0aXRsZTogXCJKYXZhIEVFIDY6IERvaW5nIE1vcmUgV2l0aCBMZXNzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTBcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjg0MDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA0OCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNDQxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiT1NHaSBhbmQgSmF2YSBFRSBpbiBHbGFzc0Zpc2hcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNDIyMFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI0NDRcIixcclxuICAgICAgICB0aXRsZTogXCJSdW5uaW5nIHlvdXIgSmF2YSBFRSA2IGFwcGxpY2F0aW9uIGluIHRoZSBDbG91ZFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDEwXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCIzMTA2XCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc2NlwiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJEZXBsb3kgYW5kIE1vbml0b3IgeW91ciBKYXZhIEVFIDYgc2Vzc2lvbiBpbiBhIGZ1bGx5LWNsdXN0ZXJlZCBHbGFzc0Zpc2hcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNDIwMVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NzBcIixcclxuICAgICAgICB0aXRsZTogXCJUaGUgSmF2YSBFRSA3IFBsYXRmb3JtOiBEZXZlbG9waW5nIGZvciB0aGUgQ2xvdWRcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNDIwMVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI4NjRcIixcclxuICAgICAgICB0aXRsZTogXCJSRVNUZnVsIEphdmEgb24gU3Rlcm9pZHM6IEpBWC1SUyAyLjBcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNTUwMlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxMTMxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiNTAgbmV3IGZlYXR1cmVzIG9mIEphdmEgRUUgNyBpbiA1MCBtaW51dGVzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjM1MjVcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjEyNjJcIixcclxuICAgICAgICB0aXRsZTogXCJNaW5lY3JhZnQgTW9kZGluZyBXb3Jrc2hvcCAoUGFydCAxIG9mIDIpXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlBTRUM0NjAzXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTM1MlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIk1pbmVjcmFmdCBNb2RkaW5nIFdvcmtzaG9wIChQYXJ0IDIgb2YgMilcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUFNFQzQ2MDNcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxNDQwXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiIEFsbCBhYm91dCBXaWxkRmx5LCBPbmx5IHVzaW5nIGRlbW9zXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjQzMDJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA0MSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTQ0MVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkphdmEgRUUgNyBkZXZlbG9wbWVudCB1c2luZyBFY2xpcHNlXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjQzMDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA2NCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMjUyOVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkludHJvZHVjdG9yeSBNaW5lY3JhZnQgTW9kZGluZyB3aXRoIEZvcmdlIC0gUGFydCAxXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlBTRUM0NTAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNzMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjI1NTdcIixcclxuICAgICAgICB0aXRsZTogXCJJbnRyb2R1Y3RvcnkgTWluZWNyYWZ0IE1vZGRpbmcgd2l0aCBGb3JnZSAtIFBhcnQgSUlcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUFNFQzQ1MDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3MyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMzY5NFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRvY2tlciBhbmQgS3ViZXJuZXRlcyBSZWNpcGVzIGZvciBKYXZhIEFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJBRC0xMjNcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNDgzNVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRvY2tlciBhbmQgS3ViZXJuZXRlcyBXb3Jrc2hvcFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE1ZmFsbFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUkQtMzAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjQ4NjBcIixcclxuICAgICAgICB0aXRsZTogXCJNaW5lY3JhZnQgTW9kZGluZyB3aXRoIEZvcmdlIC0gUGFydCAxXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFCLTE0MlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDc4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI1OTIyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTWluZWNyYWZ0IE1vZGRpbmcgd2l0aCBGb3JnZSAtIFBhcnQgMlwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJBQi0xNDJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3OCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjA2MFwiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJQYWNrYWdlLCBEZXBsb3ksIFNjYWxlIFlvdXIgQXBwbGljYXRpb25zIFVzaW5nIERvY2tlciBhbmQgS3ViZXJuZXRlc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE2ZmFsbFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjIwNVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNlcnZpY2UgRGlzY292ZXJ5IGluIENvbnRhaW5lciBPcmNoZXN0cmF0aW9uIEZyYW1ld29ya3NcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQ1wiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzM3OVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkphdmEgZGV2ZWxvcGVy4oCZcyBqb3VybmV5IGluIEt1YmVybmV0ZXMgbGFuZFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBDXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc0ODZcIixcclxuICAgICAgICB0aXRsZTogXCJVc2luZyBLdWJlcm5ldGVzIGZvciBNYWNoaW5lIExlYXJuaW5nIEZyYW1ld29ya3NcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjg1OTBcIixcclxuICAgIGZpcnN0OiBcIkNocmlzXCIsXHJcbiAgICBsYXN0OiBcIlJpY2hhcmRzb25cIixcclxuICAgIGNvbXBhbnk6IFwiRXZlbnR1YXRlLCBJbmNcIixcclxuICAgIGJpbzpcclxuICAgICAgXCJGb3VuZGVyIG9mIEV2ZW50dWF0ZSwgQXV0aG9yIG9mIFBPSk9zIGluIEFjdGlvbiwgY3JlYXRvciBvZiB0aGUgb3JpZ2luYWwgQ2xvdWQgRm91bmRyeVwiLFxyXG4gICAgdHdpdHRlckhhbmRsZTogXCJjcmljaGFyZHNvblwiLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgc2Vzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjEwMTFcIixcclxuICAgICAgICB0aXRsZTogXCJEZWNvbXBvc2luZyBhcHBsaWNhdGlvbnMgZm9yIHNjYWxhYmlsaXR5IGFuZCBkZXBsb3lhYmlsaXR5XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjQzMDZcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjExMzNcIixcclxuICAgICAgICB0aXRsZTogXCJEZXZlbG9waW5nIHBvbHlnbG90IHBlcnNpc3RlbmNlIGFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCI1NTAyXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjExMzZcIixcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIFwiQ29uc3VtaW5nIHdlYiBzZXJ2aWNlcyBhc3luY2hyb25vdXNseSB3aXRoIEZ1dHVyZXMgYW5kIFJ4IE9ic2VydmFibGVzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjgzMzhcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjE0NTRcIixcclxuICAgICAgICB0aXRsZTogXCJEZXZlbG9waW5nIGFwcGxpY2F0aW9ucyB3aXRoIGEgbWljcm8tc2VydmljZSBhcmNoaXRlY3R1cmVcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiODMzOFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEyMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTQ1NVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIk1hcCwgZmxhdG1hcCBhbmQgcmVkdWNlIGFyZSB5b3VyIG5ldyBiZXN0IGZyaWVuZHNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNTUwMlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI0NzY1XCIsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICBcIkRldmVsb3BpbmcgZXZlbnQtZHJpdmVuIG1pY3Jvc2VydmljZXMgd2l0aCBldmVudCBzb3VyY2luZyBhbmQgQ1FSU1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJBQi0yMDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA2NixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjA4MFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRldmVsb3BpbmcgTWljcm9zZXJ2aWNlcyB3aXRoIEFnZ3JlZ2F0ZXNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUkYtMTQxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNTgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjYyMTRcIixcclxuICAgICAgICB0aXRsZTogXCJUaGVyZSBJcyBObyBTdWNoIFRoaW5nIGFzIGEgTWljcm9zZXJ2aWNlIVwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBDXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NDAxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRGV2ZWxvcGluZyBBc3luY2hyb25vdXMsIE1lc3NhZ2UtRHJpdmVuIE1pY3Jvc2VydmljZXNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUm91bmQgVGFibGVcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3NSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzQwMlwiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJNaWNyb3NlcnZpY2VzOiBEZWNvbXBvc2luZyBBcHBsaWNhdGlvbnMgZm9yIFRlc3RhYmlsaXR5IGFuZCBEZXBsb3lhYmlsaXR5XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc0NjBcIixcclxuICAgICAgICB0aXRsZTogXCJNaWNyb3NlcnZpY2VzIGFuZCBTZXJ2ZXJsZXNzIFNwZWFrZXIgUGFuZWwg4oCTIFRoZSBSb2FkIEFoZWFkXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc1MTVcIixcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIFwiQ3ViZXMsIEhleGFnb25zIGFuZCBNb3JlOiBVbmRlcnN0YW5kaW5nIHRoZSBNaWNyb3NlcnZpY2VzIFRocm91Z2ggU2hhcGVzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIENcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI1NDQzXCIsXHJcbiAgICBmaXJzdDogXCJNYXJrXCIsXHJcbiAgICBsYXN0OiBcIkFicmFtc29uXCIsXHJcbiAgICBjb21wYW55OiBcIlByaW50Zm9ybSBDb3Jwb3JhdGlvblwiLFxyXG4gICAgYmlvOlxyXG4gICAgICBcIk1hcmsgaXMgYSBnbG9iYWxseSByZWNvZ25pemVkIGV4cGVydCBvbiBkaWdpdGFsIHByaW50aW5nIGZvciBpbmR1c3RyaWFsIGFuZCBwYWNrYWdpbmcgYXBwbGljYXRpb25zLlwiLFxyXG4gICAgdHdpdHRlckhhbmRsZTogXCJtYXJrX19hXCIsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIHNlc3Npb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2NzZcIixcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIFwiQWNjZWxlcmF0ZSB5b3VyIGRhdGFiYXNlIGRldmVsb3BtZW50IHdpdGggT2JqZWN0LVJlbGF0aW9uYWwgTWFwcGluZyAoT1IvTSkgaW4gLk5FVFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCI4NDAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjY3N1wiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJJbnRyb2R1Y3Rpb24gdG8gRGF0YWJhc2UgRGVzaWduIHdpdGggRW50aXR5IFJlbGF0aW9uc2hpcCAoRVIpIERpYWdyYW1zXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjU1MDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiODU5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRGF0YWJhc2UgRGVzaWduIFRyb3VibGVzaG9vdGluZywgcmVwYWlyIGFuZCB3YXJ0IHJlbW92YWxcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiMzUyNVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDExMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiODYxXCIsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICBcIkludHJvZHVjdGlvbiB0byBEYXRhYmFzZSBEZXNpZ24gd2l0aCBFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbXNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiMzUyNVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDExMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTEyMFwiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJJbnRybyB0byBSZWxhdGlvbmFsIERhdGFiYXNlIERlc2lnbiAmIEVudGl0eS1SZWxhdGlvbnNoaXAgRGlhZ3JhbXNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTEyNVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkFkdmFuY2VkIERhdGEgTW9kZWxpbmcgd2l0aCBFbnRpdHkgUmVsYXRpb25zaGlwIERpYWdyYW1zXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlBTRUM0NTAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNzMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjE0MzVcIixcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIFwiSW50cm8gdG8gUmVsYXRpb25hbCBEYXRhYmFzZSBEZXNpZ24gJiBFbnRpdHktUmVsYXRpb25zaGlwIERpYWdyYW1zXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjg0MDJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMjU3N1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxlYW4gU3RhcnR1cCBmb3IgRW5naW5lZXJzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjg0MDJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNDgxOVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxlYW4gU3RhcnR1cCBmb3IgRW5naW5lZXJzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFDLTE2MlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDc3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2MTg0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTGVhbiBTdGFydHVwIGZvciBFbmdpbmVlcnNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgRFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMTEyNFwiLFxyXG4gICAgZmlyc3Q6IFwiRG91Z2xhc1wiLFxyXG4gICAgbGFzdDogXCJDcm9ja2ZvcmRcIixcclxuICAgIGNvbXBhbnk6IFwiUGF5UGFsXCIsXHJcbiAgICBiaW86XHJcbiAgICAgIFwiRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS5cIixcclxuICAgIHR3aXR0ZXJIYW5kbGU6IFwibm90YXR3ZWV0ZXJcIixcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgc2Vzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjEyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHMgKFBhcnQgMSlcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTIxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHMgKFBhcnQgMilcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTc2XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNTUwMVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxNzdcIixcclxuICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0IFRvd24gTWVldGluZ1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDA5XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCI1NTAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjM3MVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTBcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjE1MDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjUzNlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRhbGsgd2l0aCBDcm9ja1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDEwXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTkwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI1ODhcIixcclxuICAgICAgICB0aXRsZTogXCJFQ01BU2NyaXB0IDU6IFRoZSBOZXcgUGFydHNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNTg5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRUNNQVNjcmlwdDogV2hhdCBOZXh0P1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTkwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI4MzNcIixcclxuICAgICAgICB0aXRsZTogXCJQcm9ncmFtbWluZyBTdHlsZSBhbmQgWW91ciBCcmFpblwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDEyXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxMDU2XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTW9uYWRzIGFuZCBHb25hZHNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTE5OFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkZ1biB3aXRoIEZ1bmN0aW9ucyAoUGFydCAxKVwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxMTk5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRnVuIHdpdGggRnVuY3Rpb25zIChQYXJ0IDIpXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjEzOTBcIixcclxuICAgICAgICB0aXRsZTogXCJGdW4gd2l0aCBGdW5jdGlvbnMgaW4gSmF2YVNjcmlwdCAoRnVsbCBEYXkpXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjE0MTZcIixcclxuICAgICAgICB0aXRsZTogXCJUaGUgQmV0dGVyIFBhcnRzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjM2NDNcIixcclxuICAgICAgICB0aXRsZTogXCJNYW5hZ2luZyBQcm9ncmFtbWVycy4gUHJvZ3JhbW1lcnMgYXJlIG5vdCBsaWtlIHRoZSBvdGhlciBraWRzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjE1MDFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjM2ODdcIixcclxuICAgICAgICB0aXRsZTogXCJUaGUgQmV0dGVyIFBhcnRzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzNjk2XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTWFuYWdpbmcgUHJvZ3JhbW1lcnNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjQ3MjZcIixcclxuICAgICAgICB0aXRsZTogXCJVcGdyYWRpbmcgdGhlIFdlYlwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE1c2ZcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjU5ODdcIixcclxuICAgICAgICB0aXRsZTogXCJUaGUgU2VpZiBQcm9qZWN0IENvbnRpbnVlZFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjE3MVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRoZSBQb3N0IEphdmFzY3JpcHQgQXBvY2FseXBzZVwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjIwOFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIk51bWJlcnNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjIwOVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkNoYXJhY3RlciBTZXRzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjcyNTZcIixcclxuICAgICAgICB0aXRsZTogXCJQcmluY2lwbGVzIG9mIFNlY3VyaXR5XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc0MTdcIixcclxuICAgICAgICB0aXRsZTogXCJIb3cgSmF2YVNjcmlwdCBXb3Jrc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NDE4XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiUSZBIFdpdGggRG91Z2xhcyBDcm9ja2ZvcmRcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NDY1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiV2ViIFBhbmVsIHdpdGggRG91Z2xhcyBDcm9ja2ZvcmQsIFN0ZXZlIFNvdWRlcnMgYW5kIE1pa2UgTm9ydGhcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzQ4OVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRoZSBIaXN0b3J5IG9mIEpTT05cIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzU2OVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIllvdSBDYW4gQ291bnQgb24gTnVtYmVyc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMTA4MDFcIixcclxuICAgIGZpcnN0OiBcIlRyb3lcIixcclxuICAgIGxhc3Q6IFwiTWlsZXNcIixcclxuICAgIGNvbXBhbnk6IFwiS2VsbGV5IEJsdWUgQm9va1wiLFxyXG4gICAgYmlvOiBcIkFuIGF3YXJkIHdpbm5pbmcgZGV2ZWxvcGVyIGFuZCBhdXRob3IuXCIsXHJcbiAgICB0d2l0dGVySGFuZGxlOiBcInRoZXJvY2tuY29kZXJcIixcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgIHNlc3Npb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxMjUyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQmVnaW5uaW5nIEhUTUw1IE1vYmlsZSBHYW1lIFByb2dyYW1taW5nXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjgzMzhcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjE0NDRcIixcclxuICAgICAgICB0aXRsZTogXCJJbnRybyB0byBNb2JpbGUgR2FtZSBQcm9ncmFtbWluZyB3aXRoIENvY29zMmQteCwgUGFydCAxXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIjQyMjBcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA1MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTQ0NVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkludHJvIHRvIE1vYmlsZSBHYW1lIFByb2dyYW1taW5nIHdpdGggQ29jb3MyZC14LCBQYXJ0IDJcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNDIyMFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2MDg1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRnVuY3Rpb25hbCBQcm9ncmFtbWluZyBpbiBKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkd1bGxvIElJXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3MjQyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JlYXRpbmcgYW4gQVdTIExhbWJkYSBGdW5jdGlvbiB3aXRoIEtvdGxpblwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBEXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjczNDZcIixcclxuICAgICAgICB0aXRsZTogXCJDKysgV2ViIFNlcnZlcnMgYW5kIEFQSXNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNDczNDNcIixcclxuICAgIGZpcnN0OiBcIkV2ZVwiLFxyXG4gICAgbGFzdDogXCJQb3JjZWxsb1wiLFxyXG4gICAgY29tcGFueTogXCJNb29uIEhpZ2h3YXlcIixcclxuICAgIGJpbzpcclxuICAgICAgXCJFdmUgUG9yY2VsbG8gaXMgYW4gaW5zdHJ1Y3RvciBhdCBNb29uIEhpZ2h3YXksIGVnZ2hlYWQuaW8sIGFuZCBMaW5rZWRJbiBMZWFybmluZy5cIixcclxuICAgIHR3aXR0ZXJIYW5kbGU6IFwiZXZlcG9yY2VsbG9cIixcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgc2Vzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjc1NDhcIixcclxuICAgICAgICB0aXRsZTogXCJSZWFjdCBJcyBZb3VyIEZyaWVuZDogQSBHZW50bGUgSW50cm8gdG8gdGhlIFJlYWN0IExpYnJhcnlcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjE0OTE4XCIsXHJcbiAgICBmaXJzdDogXCJDbGF1ZGlhXCIsXHJcbiAgICBsYXN0OiBcIkdhbHZhblwiLFxyXG4gICAgY29tcGFueTogXCJFYXJseSBTdGFnZSBJbm5vdmF0aW9uXCIsXHJcbiAgICBiaW86IFwiQ2xhdWRpYSBpcyBhIGxlYWRpbmcgZXhwZXJ0IG9uIHByb2R1Y3QgaW50ZXJuYXRpb25hbGl6YXRpb25cIixcclxuICAgIHR3aXR0ZXJIYW5kbGU6IFwiY2dhbHZhblwiLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgc2Vzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjQ4MjBcIixcclxuICAgICAgICB0aXRsZTogXCJJbm5vdmF0aW9uIGZvciBXb21lbiBFbmdpbmVlcnNcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiUkUtMzExXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogNjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjYwMTJcIixcclxuICAgICAgICB0aXRsZTogXCJJbnRlcm5hdGlvbmFsaXphdGlvbiBhdCBTdGFydHVwc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJTLTE2MFwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDYwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3MzQxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQWR2YW5jaW5nIHlvdXIgQ2FyZWVyIHRocm91Z2ggdGVjaG5pY2FsIGxlYWRlcnNoaXAgc2tpbGxzIFwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NDk3XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR0RQUiBhbmQgUHJpdmFjeSBBcm91bmQgdGhlIFdvcmxkXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjQ2NzY5XCIsXHJcbiAgICBmaXJzdDogXCJNYXJ5XCIsXHJcbiAgICBsYXN0OiBcIkdyeWdsZXNraVwiLFxyXG4gICAgY29tcGFueTogXCJJQk1cIixcclxuICAgIGJpbzpcclxuICAgICAgXCJNYXJ5IGlzIGEgcGFzc2lvbmF0ZSBkZXZlbG9wZXIgYWR2b2NhdGUgYnkgZGF5LCBhbmQgYSB2ZXJ5IGFjdGl2ZSB0ZWNoIGNvbW11bml0eSBvcmdhbml6ZXIgYnkgbmlnaHQuXCIsXHJcbiAgICB0d2l0dGVySGFuZGxlOiBcIm1ncnlnbGVzXCIsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgIHNlc3Npb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3NTQ5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQSBHZW50bGUgSW50cm8gdG8gUmVhY3RpdmUgSmF2YSBQcm9ncmFtbWluZyBhbmQgU3lzdGVtc1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBBXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI4MzY3XCIsXHJcbiAgICBmaXJzdDogXCJHYXlsZSBMYWFrbWFublwiLFxyXG4gICAgbGFzdDogXCJNY0Rvd2VsbFwiLFxyXG4gICAgY29tcGFueTogXCJDYXJlZXJDdXBcIixcclxuICAgIGJpbzpcclxuICAgICAgXCJHYXlsZSBMYWFrbWFubiBNY0Rvd2VsbCBpcyB0aGUgZm91bmRlciBhbmQgQ0VPIG9mIENhcmVlckN1cC5jb20gYW5kIHRoZSBhdXRob3Igb2YgdGhyZWUgYm9va3MuXCIsXHJcbiAgICB0d2l0dGVySGFuZGxlOiBcImdheWxlXCIsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICBzZXNzaW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiOTQ0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTA4NlwiLFxyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlldzogQWR2aWNlIGZvciBEZXZzIGFuZCBQTSBJbnRlcnZpZXdzXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjE0MTJcIixcclxuICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIxNDEzXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIFByb2R1Y3QgTWFuYWdlciBJbnRlcnZpZXdcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiNTAxNVwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDIxNyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiMzcwMVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzNzAzXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIFByb2R1Y3QgTWFuYWdlciBJbnRlcnZpZXdcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiU0MtMTI3XCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMjUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI1OTg0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjU5ODZcIixcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIFwiQmUgYSBCZXR0ZXIgSW50ZXJ2aWV3ZXI6IEhvdyB0byBJbnRlcnZpZXcgTGlrZSBHb29nbGUgKG9yIG5vdCktQnV0IEJldHRlciFcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiU0MtMTI3XCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMjUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2MjI3XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgIHJvb206IHtcclxuICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQlwiLFxyXG4gICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2MjI5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSGlyaW5nIENvZGVycyB3aXRoIFdoaXRlYm9hcmQgSW50ZXJ2aWV3cyBhbmQgT3RoZXIgUXVlc3Rpb25zXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjczNjZcIixcclxuICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI3MzY3XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSW50ZXJ2aWV3IExpa2UgR29vZ2xlIChvciBub3QpLUJ1dCBCZXR0ZXIhXCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjczNjhcIixcclxuICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgUHJvZHVjdCBNYW5hZ2VyIEludGVydmlld1wiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNjIwXCIsXHJcbiAgICBmaXJzdDogXCJSb25cIixcclxuICAgIGxhc3Q6IFwiS2xlaW5tYW5cIixcclxuICAgIGNvbXBhbnk6IFwiRGUgQW56YSBDb2xsZWdlXCIsXHJcbiAgICBiaW86IFwiUm9uIHRlYWNoZXMgT2JqZWN0IE9yaWVudGVkIEFuYWx5c2lzIGFuZCBEZXNpZ24gYXQgRGUgQW56YSBDb2xsZWdlIFwiLFxyXG4gICAgdHdpdHRlckhhbmRsZTogXCJub3R3ZWV0c1wiLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgc2Vzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjg2XCIsXHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICBcIlRoZSBQZXJmb3JtYW5jZSBMaW1pdGF0aW9ucyAgb2YgdGhlIEphdmEgUGxhdGZvcm0gLi4uIGFuZCBob3cgdG8gYXZvaWQgdGhlbVwiLFxyXG4gICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCI2MDg5XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU28geW91ciBtb20gYWx3YXlzIHdhbnRlZCB5b3UgdG8gYmUgYW4gYXJjaGl0ZWN0XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkMyMDlcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA1NSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzQ0MFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkhvdyB0byBUaGluayBsaWtlIGEgU29mdHdhcmUgQXJjaGl0ZWN0XCIsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIEFcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiNzU1MVwiLFxyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIFwidGhpbmtcIiAoYW5kIGRlc2lnbikgbGlrZSBhIFNvZnR3YXJlIEFyY2hpdGVjdCcsXHJcbiAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTsiLCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9zcGVha2VyRGF0YSdcclxuZXhwb3J0IGNvbnN0IHVzZVJlcXVlc3RTcGVha2VycyA9IChkZWxheW1zKSA9PiB7XHJcbiAgICBjb25zdCBbc3BlYWtlcnMsIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBkZWxheSA9IChkZWxheW1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheW1zKSlcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgc2V0U3BlYWtlcnMoZGF0YSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiB7IHNwZWFrZXJzLCBzaG93U2Vzc2lvbnMgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwZWFrZXJzTGlzdCB9IGZyb20gXCIuL1NwZWFrZXJzTGlzdFwiXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgeyBUb29sYmFyIH0gZnJvbSAnLi9Ub29sQmFyJ1xyXG5pbXBvcnQgeyB1c2VSZXF1ZXN0U3BlYWtlcnMgfSBmcm9tICcuLi9Ib29rcy91c2VSZXF1ZXN0U3BlYWtlcidcclxuXHJcbmV4cG9ydCBjb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3BlYWtlcnMsIHNob3dTZXNzaW9ucyB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFRvb2xiYXIgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9IHNldFNob3dTZXNzaW9ucz17c2V0U2hvd1Nlc3Npb25zfSAvPlxyXG4gICAgICAgICAgICA8U3BlYWtlcnNMaXN0IHNwZWFrZXJzPXtzcGVha2Vyc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9