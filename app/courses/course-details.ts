const initialCourses = {
 'python': {
  title:'Python Programming', eyebrow:'BUILD YOUR PROGRAMMING FOUNDATION', description:'Start with the core concepts of Python and develop confidence in reading, writing and understanding programs.', image:'/images/python.jpeg', tags:['Python','Programming fundamentals','Object-oriented programming'],
  audience:'Students and learners who want to build a foundation in programming or strengthen their understanding of Python.', prerequisites:'A basic familiarity with using a computer is helpful. Discuss your experience with our team to confirm the right starting level.',
  outcomes:['Understand Python syntax and common data types.','Use conditions and loops to control a program.','Organise code into reusable functions.','Understand the fundamentals of object-oriented programming.'],
  modules:[['Getting started with Python',['Python syntax and running a program','Variables and basic input/output']],['Working with data',['Numbers, strings and data types','Lists, tuples, sets and dictionaries']],['Control flow',['Conditions and decision making','Loops and iteration']],['Functions',['Parameters and return values','Breaking a problem into reusable steps']],['Object-oriented fundamentals',['Classes and objects','Methods and organising related behaviour']]],
  practice:'Suggested practice: build a simple expense tracker or a command-line quiz using inputs, conditions, loops and functions.',
 },
 'full-stack-development': {
  title:'Full Stack Development', eyebrow:'CONNECT THE FRONTEND AND BACKEND', description:'Explore the MERN stack—MongoDB, Express.js, React and Node.js—and how its parts connect to build a web application.', image:'/images/Mern.jpeg', tags:['MongoDB','Express.js','React','Node.js'],
  audience:'Learners interested in building web applications and understanding both the user interface and the services behind it.', prerequisites:'HTML, CSS and JavaScript fundamentals are useful preparation. Ask our team whether foundational learning is included in your batch.',
  outcomes:['Understand the roles of the frontend, backend and database.','Explore component-based interfaces with React.','Understand APIs built with Node.js and Express.','Connect application data with MongoDB.'],
  modules:[['Web foundations',['HTML, CSS and JavaScript preparation','How browsers communicate with servers']],['React interfaces',['Components, props and state','Forms and responsive application layouts']],['Node.js and Express',['Server-side application structure','Routes, requests and responses']],['MongoDB',['Documents and collections','Reading and writing application data']],['Connecting the stack',['Frontend-to-API integration','Testing the application flow and debugging']]],
  practice:'Suggested practice: build a task-management application with a React interface, Express API and MongoDB database.',
 },
} as const;


export interface CourseDetail {title:string;eyebrow:string;description:string;image:string;tags:readonly string[];audience:string;prerequisites:string;outcomes:readonly string[];modules:readonly (readonly [string,readonly string[]])[];practice:string;youtube?:string;}
const additionalCourses: Record<string,CourseDetail> = {
  "java": {
    "title": "Java Programming Language",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Dive into Java's object-oriented principles, learning to build robust applications.",
    "image": "/images/java.jpeg",
    "tags": [
      "Java syntax and data types",
      "Conditions, loops and methods",
      "Classes and objects"
    ],
    "audience": "Learners interested in Java Programming Language who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore java syntax and data types.",
      "Explore conditions, loops and methods.",
      "Explore classes and objects.",
      "Explore inheritance and interfaces."
    ],
    "modules": [
      [
        "Java syntax and data types",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Conditions, loops and methods",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Classes and objects",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Inheritance and interfaces",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Exceptions and collections",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Build a simple library catalog using classes and collections."
  },
  "mysql": {
    "title": "MySQL",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Learn relational databases, SQL queries, joins and data management with MySQL.",
    "image": "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png",
    "tags": [
      "Relational database concepts",
      "Tables and data types",
      "SELECT queries and filtering"
    ],
    "audience": "Learners interested in MySQL who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore relational database concepts.",
      "Explore tables and data types.",
      "Explore sELECT queries and filtering.",
      "Explore joins and aggregation."
    ],
    "modules": [
      [
        "Relational database concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Tables and data types",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "SELECT queries and filtering",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Joins and aggregation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Data updates and constraints",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Design a small inventory database and write queries to explore it."
  },
  "data-science": {
    "title": "Data Science",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Explore data analysis, visualization, and predictive modeling.",
    "image": "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=400",
    "tags": [
      "Data preparation",
      "Exploratory analysis",
      "Data visualisation"
    ],
    "audience": "Learners interested in Data Science who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore data preparation.",
      "Explore exploratory analysis.",
      "Explore data visualisation.",
      "Explore statistics foundations."
    ],
    "modules": [
      [
        "Data preparation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Exploratory analysis",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Data visualisation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Statistics foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Predictive modelling",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Explore a public dataset and present its trends in charts."
  },
  "machine-learning-python": {
    "title": "Machine Learning Using Python",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Understand supervised and unsupervised learning techniques.",
    "image": "/images/machineLearning.jpeg",
    "tags": [
      "Python data tools",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "audience": "Learners interested in Machine Learning Using Python who want to explore its foundations and practical applications.",
    "prerequisites": "Python fundamentals and basic mathematics are useful preparation. Confirm the starting level with our team.",
    "outcomes": [
      "Explore python data tools.",
      "Explore supervised learning.",
      "Explore unsupervised learning.",
      "Explore training and validation."
    ],
    "modules": [
      [
        "Python data tools",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Supervised learning",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Unsupervised learning",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Training and validation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Model evaluation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Compare baseline classification models on an educational dataset."
  },
  "artificial-intelligence": {
    "title": "Artificial Intelligence",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Delve into AI concepts including neural networks, NLP, and computer vision.",
    "image": "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=400",
    "tags": [
      "AI foundations",
      "Neural network concepts",
      "Natural language processing"
    ],
    "audience": "Learners interested in Artificial Intelligence who want to explore its foundations and practical applications.",
    "prerequisites": "Python fundamentals and basic mathematics are useful preparation. Confirm the starting level with our team.",
    "outcomes": [
      "Explore aI foundations.",
      "Explore neural network concepts.",
      "Explore natural language processing.",
      "Explore computer vision concepts."
    ],
    "modules": [
      [
        "AI foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Neural network concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Natural language processing",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Computer vision concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Evaluation and limitations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Outline a text-classification experiment and discuss its limitations."
  },
  "cloud-computing": {
    "title": "Cloud Computing",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Gain insights into cloud service models (IaaS, PaaS, SaaS).",
    "image": "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=400",
    "tags": [
      "Cloud fundamentals",
      "IaaS, PaaS and SaaS",
      "Compute and storage"
    ],
    "audience": "Learners interested in Cloud Computing who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore cloud fundamentals.",
      "Explore iaaS, PaaS and SaaS.",
      "Explore compute and storage.",
      "Explore networking and access."
    ],
    "modules": [
      [
        "Cloud fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "IaaS, PaaS and SaaS",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Compute and storage",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Networking and access",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Deployment concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Draw a deployment plan for a small web application."
  },
  "ethical-hacking": {
    "title": "Ethical Hacking",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Understand cybersecurity principles and practices.",
    "image": "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=400",
    "tags": [
      "Security foundations",
      "Networking fundamentals",
      "Authorised lab environments"
    ],
    "audience": "Learners interested in Ethical Hacking who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore security foundations.",
      "Explore networking fundamentals.",
      "Explore authorised lab environments.",
      "Explore vulnerability concepts."
    ],
    "modules": [
      [
        "Security foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Networking fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Authorised lab environments",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Vulnerability concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Reporting and defensive practices",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Document security observations in an authorised training lab."
  },
  "frontend-development": {
    "title": "Front-End Web Development",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Focus on building responsive and interactive user interfaces.",
    "image": "/images/frontend.jpeg",
    "tags": [
      "HTML page structure",
      "CSS and responsive layouts",
      "JavaScript fundamentals"
    ],
    "audience": "Learners interested in Front-End Web Development who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore hTML page structure.",
      "Explore cSS and responsive layouts.",
      "Explore javaScript fundamentals.",
      "Explore dOM events and interaction."
    ],
    "modules": [
      [
        "HTML page structure",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "CSS and responsive layouts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "JavaScript fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "DOM events and interaction",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Accessible interfaces",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Build a responsive landing page with a simple interactive form."
  },
  "ui-ux-design": {
    "title": "UI/UX Design",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Learn the principles of user interface and user experience design.",
    "image": "https://plus.unsplash.com/premium_photo-1720008915560-e7e723c0bfc8?w=400",
    "tags": [
      "User research concepts",
      "Information architecture",
      "Wireframes"
    ],
    "audience": "Learners interested in UI/UX Design who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore user research concepts.",
      "Explore information architecture.",
      "Explore wireframes.",
      "Explore visual interface design."
    ],
    "modules": [
      [
        "User research concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Information architecture",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Wireframes",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Visual interface design",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Prototyping and usability",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Create a wireframe and clickable prototype for a student portal."
  },
  "finance": {
    "title": "Finance",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Learn the essentials of managing money, investments, and budgeting.",
    "image": "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400",
    "tags": [
      "Financial concepts",
      "Budgeting and cash flow",
      "Time value of money"
    ],
    "audience": "Learners interested in Finance who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore financial concepts.",
      "Explore budgeting and cash flow.",
      "Explore time value of money.",
      "Explore investment concepts."
    ],
    "modules": [
      [
        "Financial concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Budgeting and cash flow",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Time value of money",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Investment concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Risk awareness",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Build a sample monthly budget and explain the assumptions."
  },
  "digital-marketing": {
    "title": "Digital Marketing",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Master online marketing strategies like SEO, social media, content marketing.",
    "image": "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400",
    "tags": [
      "Audience and positioning",
      "Content strategy",
      "SEO fundamentals"
    ],
    "audience": "Learners interested in Digital Marketing who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore audience and positioning.",
      "Explore content strategy.",
      "Explore sEO fundamentals.",
      "Explore social media campaigns."
    ],
    "modules": [
      [
        "Audience and positioning",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Content strategy",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "SEO fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Social media campaigns",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Marketing analytics",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Prepare a content calendar and define campaign success metrics."
  },
  "human-resource-management": {
    "title": "Human Resource Management",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Understand how to hire, train, and manage people effectively.",
    "image": "https://plus.unsplash.com/premium_photo-1683140546178-3f52a918bc57?w=400",
    "tags": [
      "HR foundations",
      "Recruitment process",
      "Onboarding and training"
    ],
    "audience": "Learners interested in Human Resource Management who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore hR foundations.",
      "Explore recruitment process.",
      "Explore onboarding and training.",
      "Explore performance management."
    ],
    "modules": [
      [
        "HR foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Recruitment process",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Onboarding and training",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Performance management",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Employee communication",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Create a sample onboarding checklist for a new employee."
  },
  "stock-market": {
    "title": "Stock Market",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Explore how the stock market works and make smart trading decisions.",
    "image": "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=400",
    "tags": [
      "Market structure",
      "Stocks and indices",
      "Fundamental analysis concepts"
    ],
    "audience": "Learners interested in Stock Market who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore market structure.",
      "Explore stocks and indices.",
      "Explore fundamental analysis concepts.",
      "Explore technical analysis concepts."
    ],
    "modules": [
      [
        "Market structure",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Stocks and indices",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Fundamental analysis concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Technical analysis concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Risk and diversification",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Analyse a hypothetical portfolio and discuss risk without placing trades."
  },
  "psychology": {
    "title": "Psychology",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Dive into the human mind — learn about behavior and emotions.",
    "image": "https://images.unsplash.com/photo-1573511860302-28c524319d2a?w=400",
    "tags": [
      "Psychology foundations",
      "Cognition and learning",
      "Emotion and motivation"
    ],
    "audience": "Learners interested in Psychology who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore psychology foundations.",
      "Explore cognition and learning.",
      "Explore emotion and motivation.",
      "Explore social behaviour."
    ],
    "modules": [
      [
        "Psychology foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Cognition and learning",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Emotion and motivation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Social behaviour",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Research methods",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Summarise a learning-behaviour study and its research limitations."
  },
  "iot": {
    "title": "IOT",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Learn how smart devices connect and communicate.",
    "image": "https://images.unsplash.com/photo-1614846027182-cecfee3a427b?w=400",
    "tags": [
      "IoT architecture",
      "Sensors and devices",
      "Connectivity protocols"
    ],
    "audience": "Learners interested in IOT who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore ioT architecture.",
      "Explore sensors and devices.",
      "Explore connectivity protocols.",
      "Explore data collection."
    ],
    "modules": [
      [
        "IoT architecture",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Sensors and devices",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Connectivity protocols",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Data collection",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Monitoring applications",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Design a sensor-monitoring concept with a dashboard."
  },
  "embedded-systems": {
    "title": "Embedded Systems",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Explore the core of modern electronics.",
    "image": "https://plus.unsplash.com/premium_photo-1714618990464-bb4ddc34c542?w=400",
    "tags": [
      "Embedded architecture",
      "Microcontrollers",
      "Embedded programming"
    ],
    "audience": "Learners interested in Embedded Systems who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore embedded architecture.",
      "Explore microcontrollers.",
      "Explore embedded programming.",
      "Explore input/output interfaces."
    ],
    "modules": [
      [
        "Embedded architecture",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Microcontrollers",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Embedded programming",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Input/output interfaces",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Testing and debugging",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Plan a simple microcontroller input/output exercise."
  },
  "hybrid-electric-vehicles": {
    "title": "Hybrid and Electric Vehicles",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Understand the technology behind EVs.",
    "image": "https://plus.unsplash.com/premium_photo-1664300426217-b1131ec9612b?w=400",
    "tags": [
      "Vehicle architectures",
      "Electric powertrains",
      "Battery fundamentals"
    ],
    "audience": "Learners interested in Hybrid and Electric Vehicles who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore vehicle architectures.",
      "Explore electric powertrains.",
      "Explore battery fundamentals.",
      "Explore charging systems."
    ],
    "modules": [
      [
        "Vehicle architectures",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Electric powertrains",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Battery fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Charging systems",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Safety and efficiency",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Compare hybrid and electric vehicle architectures in a technical presentation."
  },
  "vlsi": {
    "title": "VLSI",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Learn how integrated circuits are designed.",
    "image": "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?w=400",
    "tags": [
      "Digital logic foundations",
      "CMOS concepts",
      "Circuit design workflow"
    ],
    "audience": "Learners interested in VLSI who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore digital logic foundations.",
      "Explore cMOS concepts.",
      "Explore circuit design workflow.",
      "Explore design verification."
    ],
    "modules": [
      [
        "Digital logic foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "CMOS concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Circuit design workflow",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Design verification",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Physical design overview",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Describe and verify a small digital logic circuit."
  },
  "nanotechnology": {
    "title": "Nano Technology",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Discover the science of the very small.",
    "image": "https://plus.unsplash.com/premium_photo-1681426645543-ba5027b4c6ba?w=400",
    "tags": [
      "Nanoscale fundamentals",
      "Material properties",
      "Characterisation concepts"
    ],
    "audience": "Learners interested in Nano Technology who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore nanoscale fundamentals.",
      "Explore material properties.",
      "Explore characterisation concepts.",
      "Explore fabrication approaches."
    ],
    "modules": [
      [
        "Nanoscale fundamentals",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Material properties",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Characterisation concepts",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Fabrication approaches",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Applications and safety",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Research one nanomaterial application and discuss its limitations."
  },
  "autocad": {
    "title": "AutoCad",
    "eyebrow": "EXPLORE YOUR NEXT LEARNING PATH",
    "description": "Master industry-standard 2D and 3D drafting tools.",
    "image": "https://images.unsplash.com/photo-1720879996903-24859d1df48f?w=400",
    "tags": [
      "Drawing interface",
      "2D drafting",
      "Layers and dimensions"
    ],
    "audience": "Learners interested in AutoCad who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore drawing interface.",
      "Explore 2D drafting.",
      "Explore layers and dimensions.",
      "Explore blocks and annotation."
    ],
    "modules": [
      [
        "Drawing interface",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "2D drafting",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Layers and dimensions",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Blocks and annotation",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "3D concepts and output",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Draft and annotate a simple technical drawing."
  },
  "python-telugu": {
    "title": "Python Programming (Telugu)",
    "eyebrow": "FREE LEARNING IN TELUGU",
    "description": "Learn Python in Telugu - Free course!",
    "image": "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=400",
    "tags": [
      "Free playlist",
      "Telugu",
      "Python Programming"
    ],
    "audience": "Learners interested in Python Programming who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore python syntax.",
      "Explore variables and data types.",
      "Explore conditions and loops.",
      "Explore functions."
    ],
    "modules": [
      [
        "Python syntax",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Variables and data types",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Conditions and loops",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Functions",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Practice exercises",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Write a command-line quiz.",
    "youtube": "https://youtube.com/playlist?list=PLhQd9ED25ErJW0pC6BuG0wnCXRUXoGb0T"
  },
  "java-telugu": {
    "title": "Java Programming (Telugu)",
    "eyebrow": "FREE LEARNING IN TELUGU",
    "description": "Learn Java in Telugu - Free course!",
    "image": "https://freepnglogo.com/images/all_img/java-logo-52a1.png",
    "tags": [
      "Free playlist",
      "Telugu",
      "Java Programming"
    ],
    "audience": "Learners interested in Java Programming who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore java syntax.",
      "Explore variables and data types.",
      "Explore control flow.",
      "Explore methods."
    ],
    "modules": [
      [
        "Java syntax",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Variables and data types",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Control flow",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Methods",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Object-oriented foundations",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Build a small class-based contact list.",
    "youtube": "https://youtube.com/playlist?list=PLhQd9ED25ErJzaq3gVIuCFxXB579R6yTm"
  },
  "html-css-telugu": {
    "title": "HTML and CSS (Telugu)",
    "eyebrow": "FREE LEARNING IN TELUGU",
    "description": "Learn HTML & CSS in Telugu - Free!",
    "image": "/images/free1.jpeg",
    "tags": [
      "Free playlist",
      "Telugu",
      "HTML and CSS"
    ],
    "audience": "Learners interested in HTML and CSS who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore hTML structure.",
      "Explore links and forms.",
      "Explore cSS selectors.",
      "Explore layout and responsive styling."
    ],
    "modules": [
      [
        "HTML structure",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Links and forms",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "CSS selectors",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Layout and responsive styling",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Building a simple page",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Create a responsive personal introduction page.",
    "youtube": "https://youtube.com/playlist?list=PLhQd9ED25ErIzoBnYlIeDqj6TCrjtiaoP"
  },
  "javascript-telugu": {
    "title": "JavaScript (Telugu)",
    "eyebrow": "FREE LEARNING IN TELUGU",
    "description": "Master JavaScript in Telugu - Free course!",
    "image": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400",
    "tags": [
      "Free playlist",
      "Telugu",
      "JavaScript"
    ],
    "audience": "Learners interested in JavaScript who want to explore its foundations and practical applications.",
    "prerequisites": "Review the starting level with our team. Prior knowledge requirements depend on the final syllabus and batch.",
    "outcomes": [
      "Explore javaScript syntax.",
      "Explore variables and functions.",
      "Explore conditions and loops.",
      "Explore dOM interaction."
    ],
    "modules": [
      [
        "JavaScript syntax",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Variables and functions",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Conditions and loops",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "DOM interaction",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ],
      [
        "Practice exercises",
        [
          "Overview of key concepts",
          "Illustrative examples and guided practice"
        ]
      ]
    ],
    "practice": "Suggested practice: Add an interactive checklist to a web page.",
    "youtube": "https://youtube.com/playlist?list=PLhQd9ED25ErKImj5F8UOudLvoyi2uD8h6"
  }
};
export const courseDetails: Record<string,CourseDetail> = {...initialCourses,...additionalCourses};
export type CourseSlug = string;
