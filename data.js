// data.js - CodeQuest Academy Complete Curriculum

const courseContent = {
    python: {
        title: "Python Programming",
        topics: [
            {
                title: "1. Python Basics",
                content: "Python is a high-level, interpreted language celebrated for its clean, readable syntax. It requires no compilation step, meaning you can write and execute code instantly.\n\nIt is widely considered the industry standard for AI development, automation, and data analysis. We use the 'print()' function to output data to the console, and variables are declared simply by assigning a value to a name.",
                code: "# Example 1: Hello World\nprint('Initializing system...')\n\n# Example 2: Variable Assignment\nuser = 'Naras'\nversion = 3.11\nprint(f'Welcome {user}, running Python {version}')"
            },
            {
                title: "2. Control Flow",
                content: "Control flow determines the order in which your code executes. \n\n'If-else' statements allow your program to make decisions based on conditions. 'For' loops are used for iterating over a sequence (like a list or a string), while 'while' loops execute as long as a condition remains true. Python relies on strict indentation (spaces) to define these code blocks.",
                code: "# Example 1: Decision Making\nmoisture_level = 25\nif moisture_level < 30:\n    print('Irrigation needed')\nelse:\n    print('Soil is optimal')\n\n# Example 2: For Loop iteration\nfor i in range(1, 4):\n    print(f'Processing batch {i}')"
            },
            {
                title: "3. Python Functions",
                content: "Functions are reusable blocks of code that only run when they are called. They help keep your code DRY (Don't Repeat Yourself).\n\nYou define a function using the 'def' keyword. Functions can accept data in the form of parameters, and they can send data back to the main program using the 'return' statement.",
                code: "# Example 1: Basic Function\ndef greet(name):\n    return f'Hello, {name}'\n\n# Example 2: Function with logic\ndef analyze_crop(temp, humidity):\n    if temp > 35 and humidity < 40:\n        return 'Warning: Heat Stress'\n    return 'Healthy'\n\nprint(analyze_crop(38, 30))"
            },
            {
                title: "4. Libraries & AI Deployment",
                content: "Python's true power comes from its vast ecosystem of third-party libraries. You can import modules to perform complex tasks without writing the logic from scratch.\n\nFor instance, you can use BeautifulSoup for web scraping data from the internet, or Flask to quickly build and deploy AI models to a web application backend.",
                code: "# Example 1: Web Scraping structure\nfrom bs4 import BeautifulSoup\nimport requests\n# response = requests.get('http://example.com')\n# soup = BeautifulSoup(response.text, 'html.parser')\n\n# Example 2: Flask API structure\nfrom flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route('/api/health')\ndef check_health():\n    return jsonify({'status': 'Online'})"
            }
        ]
    },
    java: {
        title: "Java Programming",
        topics: [
            {
                title: "1. Java Basics",
                content: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the 'Write Once, Run Anywhere' philosophy using the Java Virtual Machine (JVM).\n\nEvery Java application begins with a class name that matches the filename, and a 'main' method which serves as the entry point for the program.",
                code: "// Example 1: The Main Method\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"System Booting...\");\n  }\n}\n\n// Example 2: Primitive Data Types\nint age = 25;\ndouble accountBalance = 15000.50; // ₹15,000.50\nboolean isActive = true;"
            },
            {
                title: "2. OOP Concepts",
                content: "Object-Oriented Programming (OOP) organizes code into Classes and Objects. \n\nA Class is a blueprint, while an Object is a specific instance of that blueprint. Core principles include Encapsulation (hiding data), Inheritance (sharing attributes between classes), and Polymorphism (methods performing different tasks based on the object).",
                code: "// Example 1: Defining a Class\nclass Crop {\n  String name;\n  int yieldPerHectare;\n  \n  public Crop(String n, int y) {\n    name = n;\n    yieldPerHectare = y;\n  }\n}\n\n// Example 2: Instantiating Objects\nCrop wheat = new Crop(\"Wheat\", 3000);\nSystem.out.println(wheat.name + \" yields \" + wheat.yieldPerHectare);"
            },
            {
                title: "3. Exception Handling",
                content: "Runtime errors can cause a program to crash unexpectedly. Java provides a robust exception-handling mechanism to catch these errors gracefully.\n\nCode that might throw an error is placed in a 'try' block. The 'catch' block dictates what the program should do if the error occurs, allowing the application to continue running or shut down safely.",
                code: "// Example 1: Try-Catch Block\ntry {\n  int[] numbers = {1, 2, 3};\n  System.out.println(numbers[10]); // This will fail\n} catch (ArrayIndexOutOfBoundsException e) {\n  System.out.println(\"Error: Invalid index accessed.\");\n}\n\n// Example 2: Finally Block\nfinally {\n  System.out.println(\"Execution completed.\");\n}"
            }
        ]
    },
    c: {
        title: "C Language Mastery",
        topics: [
            {
                title: "1. C Fundamentals",
                content: "C is a foundational, procedural programming language. It is closely tied to the hardware, making it incredibly fast and efficient for system-level programming and embedded systems.\n\nEvery C program requires standard libraries like 'stdio.h' for input/output operations. Memory is managed manually, which teaches excellent programming discipline.",
                code: "// Example 1: Basic Structure\n#include <stdio.h>\n\nint main() {\n  printf(\"Hello, World!\\n\");\n  return 0;\n}\n\n// Example 2: Variables & Format Specifiers\nint id = 101;\nfloat price = 499.99; // ₹499.99\nprintf(\"Item %d costs ₹%.2f\", id, price);"
            },
            {
                title: "2. Pointers & Memory",
                content: "Pointers are variables that store the memory address of another variable. They are one of the most powerful—and challenging—features of C.\n\nPointers allow for dynamic memory allocation and efficient array manipulation. The '&' operator gets the memory address, while the '*' operator dereferences the pointer to get the value stored at that address.",
                code: "// Example 1: Basic Pointer\nint var = 20;\nint *ptr = &var;\nprintf(\"Value: %d, Memory Address: %p\", *ptr, ptr);\n\n// Example 2: Updating via Pointer\n*ptr = 100; \nprintf(\"Updated Value: %d\", var); // Outputs 100"
            },
            {
                title: "3. Functions & Math",
                content: "Functions allow you to break complex engineering problems into modular pieces. C includes a robust math library ('math.h') for complex calculations.\n\nWhen writing functions for physics or engineering (like calculating waveforms or structural loads), always define the data types for both your inputs (parameters) and your output (return value).",
                code: "// Example 1: Basic Function\nint add(int a, int b) { return a + b; }\n\n// Example 2: Engineering Math (Fourier Term)\n#include <math.h>\n#define PI 3.14159\n\nfloat calcFourierTerm(int n, float x, float L) {\n  // Formula for a cosine Fourier term\n  return cos((n * PI * x) / L);\n}"
            }
        ]
    },
    mysql: {
        title: "MySQL Database",
        topics: [
            {
                title: "1. Data Definition & Cardinality",
                content: "MySQL is a Relational Database Management System (RDBMS). Before writing data, you must define the structure using Data Definition Language (DDL).\n\nUnderstanding database 'Cardinality' is critical. It defines the relationship between tables: 1-to-1 (User to Profile), 1-to-Many (Farmer to Crops), or Many-to-Many (Students to Classes).",
                code: "-- Example 1: Creating a Database\nCREATE DATABASE AgriTechDB;\nUSE AgriTechDB;\n\n-- Example 2: Creating related tables (1-to-Many)\nCREATE TABLE Farmers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE Crops (\n  crop_id INT PRIMARY KEY,\n  farmer_id INT,\n  crop_name VARCHAR(50),\n  FOREIGN KEY (farmer_id) REFERENCES Farmers(id)\n);"
            },
            {
                title: "2. Querying & Filtering",
                content: "The SELECT statement is used to retrieve data. You can filter the exact records you need using the WHERE clause.\n\nYou can combine multiple conditions using logical operators like AND, OR, and NOT, or sort your results using the ORDER BY clause.",
                code: "-- Example 1: Basic Retrieval\nSELECT crop_name, yield_kg FROM Crops;\n\n-- Example 2: Advanced Filtering\nSELECT * FROM Crops \nWHERE yield_kg > 500 \nAND status = 'Harvested'\nORDER BY yield_kg DESC;"
            },
            {
                title: "3. Joins & Subqueries",
                content: "Relational databases shine when combining data across multiple tables. \n\nJOIN operations merge rows based on related columns. Subqueries allow you to nest one query inside another, which is highly useful for dynamic filtering based on aggregated data.",
                code: "-- Example 1: INNER JOIN\nSELECT Farmers.name, Crops.crop_name \nFROM Farmers \nINNER JOIN Crops ON Farmers.id = Crops.farmer_id;\n\n-- Example 2: Subquery\n-- Find crops with above-average yields\nSELECT crop_name, yield_kg FROM Crops \nWHERE yield_kg > (SELECT AVG(yield_kg) FROM Crops);"
            }
        ]
    },
    html: {
        title: "HTML5 Foundations",
        topics: [
            {
                title: "1. Semantic Structure",
                content: "HTML provides the skeleton for every web application. Modern HTML5 emphasizes 'semantic' tags—tags that clearly describe their meaning to both the browser and the developer.\n\nInstead of using generic <div> tags for everything, we use <header>, <main>, <article>, and <footer> to structure our projects properly for accessibility and SEO.",
                code: "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Smart Crop Health Monitor</title>\n</head>\n<body>\n  \n  \n  <header>\n    <h1>Dashboard</h1>\n  </header>\n  <main>\n    <section id=\"diagnosis\">\n      <h2>System Status: Active</h2>\n    </section>\n  </main>\n\n</body>\n</html>"
            },
            {
                title: "2. Forms and Inputs",
                content: "Forms are the primary way web applications collect data from users. \n\nThey utilize various <input> types (like text, password, email, and date) to ensure the user enters the correct format of data before it is submitted to the backend server or processed by JavaScript.",
                code: "\n<form action=\"/login\" method=\"POST\">\n  <label for=\"username\">User:</label>\n  <input type=\"text\" id=\"username\" required>\n  \n  <label for=\"pwd\">Pass:</label>\n  <input type=\"password\" id=\"pwd\" required>\n  \n  <button type=\"submit\">Login</button>\n</form>"
            }
        ]
    },
    css: {
        title: "CSS3 Styling",
        topics: [
            {
                title: "1. Selectors & Box Model",
                content: "CSS controls the visual presentation of HTML. The Box Model is the core concept of CSS design: every element is treated as a box consisting of Content, Padding (inner space), Borders, and Margins (outer space).\n\nYou apply styles by selecting HTML tags directly, using Class names (prefixed with a dot), or IDs (prefixed with a hash).",
                code: "/* Example 1: Tag and Class Selectors */\nh1 {\n  color: #333333;\n  font-family: sans-serif;\n}\n\n.card {\n  /* Example 2: The Box Model */\n  background-color: white;\n  padding: 20px;       /* Space inside the border */\n  border: 1px solid #ccc;\n  margin-bottom: 15px; /* Space outside the border */\n}"
            },
            {
                title: "2. Flexbox Layouts",
                content: "The Flexible Box Layout Module (Flexbox) makes it easier to design responsive layout structures. \n\nBy setting a container's display to 'flex', you can easily align items vertically and horizontally, space them out evenly, and ensure they adapt smoothly to different screen sizes.",
                code: "/* Example 1: Flex Container */\n.dashboard-layout {\n  display: flex;\n  justify-content: space-between; /* Spreads items evenly */\n  align-items: center;            /* Centers vertically */\n  gap: 20px;\n}\n\n/* Example 2: Flex Child Element */\n.sidebar {\n  flex: 1; /* Takes up 1 unit of available space */\n}\n.main-content {\n  flex: 3; /* Takes up 3 units of available space */\n}"
            }
        ]
    },
    js: {
        title: "JavaScript Development",
        topics: [
            {
                title: "1. DOM Manipulation",
                content: "JavaScript makes web applications interactive. The Document Object Model (DOM) is an interface that allows JavaScript to read and change HTML and CSS.\n\nYou can use methods like 'getElementById' or 'querySelector' to grab elements off the screen and dynamically update their text, styles, or classes based on user actions.",
                code: "// Example 1: Changing Text\nconst statusText = document.getElementById('diagnosis');\nstatusText.innerText = 'Scanning complete. No disease detected.';\n\n// Example 2: Changing Styles\nconst alertBox = document.querySelector('.alert');\nalertBox.style.backgroundColor = 'green';\nalertBox.style.display = 'block';"
            },
            {
                title: "2. Fetch API & Async Data",
                content: "Modern web applications (like ones built in React or Vanilla JS) frequently need to request data from external servers or databases without reloading the page.\n\nThe Fetch API handles these HTTP requests. Because network requests take time, we use asynchronous JavaScript (Promises or Async/Await syntax) to prevent the browser from freezing while waiting for the data.",
                code: "// Example 1: Promise-based Fetch\nfetch('https://api.weather.com/v1/current')\n  .then(response => response.json())\n  .then(data => console.log('Temp:', data.temp));\n\n// Example 2: Modern Async/Await\nasync function getCropData() {\n  try {\n    const response = await fetch('/api/crops');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Network failure', error);\n  }\n}"
            }
        ]
    }
};