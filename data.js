// data.js - The Complete Course Database for CodeQuest Academy

const courseContent = {
    python: {
        title: "Python Programming",
        topics: [
            { title: "1. Python Basics", content: "Introduction to Python, basic syntax, and getting started with the environment.", code: "print('Welcome to Python!')" },
            { title: "2. Operators in Python", content: "Arithmetic, relational, logical, and bitwise operators used for performing operations on variables.", code: "a = 10\nb = 5\nprint(a + b) # Addition" },
            { title: "3. Control Flow", content: "Using if-else statements, for loops, and while loops to control the execution flow of the program.", code: "for i in range(5):\n  print(i)" },
            { title: "4. Python Functions", content: "Creating reusable blocks of code using the 'def' keyword, passing arguments, and returning values.", code: "def greet(name):\n  return f'Hello, {name}'" },
            { title: "5. Data Structures in Python", content: "Working with built-in data structures like Lists, Tuples, Sets, and Dictionaries.", code: "my_dict = {'key': 'value', 'age': 25}" },
            { title: "6. Python Built-In Function", content: "Utilizing Python's extensive standard library functions like len(), map(), filter(), and more.", code: "length = len([1, 2, 3, 4])" },
            { title: "7. Python OOPs Concepts", content: "Object-Oriented Programming principles including Classes, Objects, Inheritance, and Polymorphism.", code: "class Dog:\n  def bark(self):\n    print('Woof!')" },
            { title: "8. Python RegEx", content: "Using the 're' module for regular expressions to match and manipulate strings.", code: "import re\nx = re.search('^The.*Spain$', txt)" },
            { title: "9. Exception Handling in Python", content: "Managing runtime errors gracefully using try, except, finally, and raise blocks.", code: "try:\n  x = 1 / 0\nexcept ZeroDivisionError:\n  print('Cannot divide by zero')" },
            { title: "10. Debugging in Python", content: "Techniques and tools (like pdb) to find and resolve bugs in your Python code.", code: "import pdb\npdb.set_trace()" },
            { title: "11. File Handling in Python", content: "Opening, reading, writing, and closing files securely using the 'with' statement.", code: "with open('file.txt', 'r') as f:\n  data = f.read()" },
            { title: "12. Memory Management in Python", content: "Understanding Python's memory allocation and the built-in garbage collector.", code: "import gc\ngc.collect()" },
            { title: "13. Decorators in Python", content: "Modifying the behavior of a function or class using the @decorator syntax.", code: "@my_decorator\ndef my_function():\n  pass" },
            { title: "14. Libraries in Python", content: "Exploring popular third-party libraries for data science, web development, and AI.", code: "import pandas as pd\nimport numpy as np" },
            { title: "15. Python Modules", content: "Organizing your code by creating and importing external .py files.", code: "import my_custom_module\nmy_custom_module.do_something()" },
            { title: "16. Python Interview Questions Answers", content: "Preparation material covering common technical questions asked in Python interviews.", code: "# Be prepared to write algorithms on a whiteboard!" }
        ]
    },
    java: {
        title: "Java Programming",
        topics: [
            { title: "1. Basics", content: "Introduction, JDK vs JRE vs JVM, Variables, Data Types, Operators, and Control Statements.", code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java Basics\");\n  }\n}" },
            { title: "2. Methods", content: "Reusable blocks of code. Includes Static vs Instance Methods, Access Modifiers, and Varargs.", code: "public static void myMethod(String fname) {\n  System.out.println(fname);\n}" },
            { title: "3. Arrays", content: "Containers for multiple values. Covers Multi-Dimensional Arrays, Jagged Arrays, and the Arrays Class.", code: "String[] cars = {\"Volvo\", \"BMW\", \"Ford\"};\nSystem.out.println(cars[0]);" },
            { title: "4. Strings", content: "Handling text. Covers String immutability, methods, StringBuffer, and StringBuilder.", code: "String txt = \"Hello World\";\nSystem.out.println(txt.toUpperCase());" },
            { title: "5. OOP Concepts", content: "Object-Oriented Programming: Classes, Objects, Constructors, Abstraction, Encapsulation, Inheritance, and Polymorphism.", code: "class Car {\n  int modelYear;\n  public Car(int year) { modelYear = year; }\n}" },
            { title: "6. Interfaces", content: "Defining contracts for classes. Includes Functional, Nested, and Marker Interfaces.", code: "interface Animal {\n  public void animalSound();\n}" },
            { title: "7. Exception Handling", content: "Managing runtime errors using Try-Catch, Throw, Throws, and Custom Exceptions.", code: "try {\n  int x = 10 / 0;\n} catch (Exception e) {\n  System.out.println(\"Error\");\n}" },
            { title: "8. Regex", content: "Pattern matching and text manipulation using the Matcher and Pattern classes.", code: "Pattern p = Pattern.compile(\"a*b\");" },
            { title: "9. Memory Allocation", content: "Understanding Stack vs Heap memory, JVM memory management, and Garbage Collection.", code: "MyClass obj = new MyClass(); // Stored in Heap" },
            { title: "10. Collections", content: "Framework for storing groups of objects: List, Set, Map, ArrayList, HashMap, and Iterators.", code: "ArrayList<String> list = new ArrayList<>();" },
            { title: "11. Lambda & Streams", content: "Functional-style operations for data processing introduced in Java 8.", code: "list.forEach( (n) -> { System.out.println(n); } );" },
            { title: "12. Multithreading", content: "Concurrent execution using Threads, Runnable interface, Synchronization, and Locks.", code: "public class Main extends Thread {\n  public void run() { /* thread code */ }\n}" }
        ]
    },
    c: {
        title: "C Language Mastery",
        topics: [
            { title: "1. C Fundamentals", content: "Introduction to C, syntax rules, compiling, and running your first program.", code: "#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}" },
            { title: "2. Variables & Constants", content: "Declaring variables, understanding data types (int, float, char), and using constants.", code: "int age = 20;\nconst float PI = 3.14159;" },
            { title: "3. Operators", content: "Arithmetic, relational, logical, assignment, and bitwise operators in C.", code: "int sum = 10 + 5;\nint isTrue = (10 > 5) && (5 > 2);" },
            { title: "4. Control Flow", content: "Making decisions with if, else if, else, and switch-case statements.", code: "if (score >= 90) {\n  printf(\"Grade A\");\n} else {\n  printf(\"Study harder\");\n}" },
            { title: "5. Loops", content: "Repeating code using for, while, and do-while loops. Understanding break and continue.", code: "for(int i = 0; i < 10; i++) {\n  printf(\"%d\", i);\n}" },
            { title: "6. Functions", content: "Modular programming, function declaration, definition, arguments, and return types.", code: "int add(int a, int b) {\n  return a + b;\n}" },
            { title: "7. Arrays", content: "Storing collections of data. 1D arrays, 2D arrays, and memory layout.", code: "int numbers[5] = {1, 2, 3, 4, 5};" },
            { title: "8. Pointers Basics", content: "Understanding memory addresses, declaring pointers, and the referencing/dereferencing operators.", code: "int var = 10;\nint *ptr = &var;\nprintf(\"%d\", *ptr);" },
            { title: "9. Pointers & Arrays", content: "Pointer arithmetic and accessing array elements using pointers.", code: "int arr[3] = {10, 20, 30};\nint *p = arr;\nprintf(\"%d\", *(p+1)); // Prints 20" },
            { title: "10. Strings", content: "Handling text as arrays of characters. Using string.h library functions (strcpy, strlen).", code: "char greeting[] = \"Hello\";\nprintf(\"%s\", greeting);" },
            { title: "11. Structures & Unions", content: "Grouping different data types together using struct and union.", code: "struct Student {\n  int id;\n  char name[50];\n};" },
            { title: "12. File I/O", content: "Reading from and writing to files using fopen, fprintf, fscanf, and fclose.", code: "FILE *fptr;\nfptr = fopen(\"filename.txt\", \"w\");" }
        ]
    },
    cpp: {
        title: "C++ Programming",
        topics: [
            { title: "1. Getting Started", content: "Basic syntax, iostream, namespaces, and the difference between C and C++.", code: "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello C++\";\n  return 0;\n}" },
            { title: "2. Data Types & Operators", content: "Primitive types, auto keyword, type casting, and standard operators.", code: "int x = 5;\ndouble y = 5.99;\nbool isCoding = true;" },
            { title: "3. Control Structures", content: "If-else statements, switch cases, and looping mechanisms (for, while).", code: "while (x > 0) {\n  cout << x;\n  x--;\n}" },
            { title: "4. Functions", content: "Function overloading, default arguments, and inline functions.", code: "int add(int x, int y) { return x + y; }\ndouble add(double x, double y) { return x + y; }" },
            { title: "5. Pointers & References", content: "Memory addresses, dynamic memory allocation (new/delete), and reference variables.", code: "string food = \"Pizza\";\nstring &meal = food; // Reference" },
            { title: "6. OOP: Classes & Objects", content: "Defining classes, creating objects, and accessing class members.", code: "class Car {\n  public:\n    string brand;\n    void honk() { cout << \"Beep\"; }\n};" },
            { title: "7. OOP: Constructors", content: "Special class methods called upon object creation. Parameterized constructors.", code: "class MyClass {\n  public:\n    MyClass() { cout << \"Created!\"; }\n};" },
            { title: "8. OOP: Encapsulation", content: "Hiding sensitive data from users using private/protected access modifiers and getter/setter methods.", code: "private:\n  int salary;\npublic:\n  void setSalary(int s) { salary = s; }" },
            { title: "9. OOP: Inheritance", content: "Creating new classes from existing classes (Base and Derived classes).", code: "class Vehicle { ... };\nclass Car : public Vehicle { ... };" },
            { title: "10. OOP: Polymorphism", content: "Many forms. Method overriding, virtual functions, and abstract classes.", code: "virtual void animalSound() = 0; // Pure virtual" },
            { title: "11. Exception Handling", content: "Catching synchronous errors using try, throw, and catch blocks.", code: "try {\n  throw 505;\n} catch (int myNum) {\n  cout << \"Error: \" << myNum;\n}" },
            { title: "12. STL (Standard Template Library)", content: "Using vectors, lists, maps, and standard algorithms (sort, search).", code: "#include <vector>\nvector<string> cars = {\"Volvo\", \"BMW\"};" }
        ]
    },
    mysql: {
        title: "MySQL Database Administration",
        topics: [
            { title: "1. Intro to RDBMS", content: "Understanding Relational Database Management Systems and SQL syntax basics.", code: "-- SQL is case insensitive, but keywords are often capitalized\nSELECT VERSION();" },
            { title: "2. Database & Table Creation", content: "Using Data Definition Language (DDL): CREATE, DROP, and ALTER statements.", code: "CREATE DATABASE CodeQuest;\nUSE CodeQuest;\nCREATE TABLE Users (id INT, name VARCHAR(50));" },
            { title: "3. Inserting & Updating Data", content: "Using Data Manipulation Language (DML): INSERT INTO, UPDATE, and DELETE.", code: "INSERT INTO Users (id, name) VALUES (1, 'Naras');\nUPDATE Users SET name = 'John' WHERE id = 1;" },
            { title: "4. Querying Data (SELECT)", content: "Retrieving data using SELECT, DISTINCT, and column aliases.", code: "SELECT id, name AS 'Full Name' FROM Users;" },
            { title: "5. Filtering (WHERE & Operators)", content: "Restricting results using WHERE, AND, OR, NOT, IN, and BETWEEN.", code: "SELECT * FROM Products WHERE price BETWEEN 10 AND 20;" },
            { title: "6. Sorting & Pagination", content: "Formatting output using ORDER BY (ASC/DESC) and LIMIT.", code: "SELECT * FROM Employees ORDER BY salary DESC LIMIT 5;" },
            { title: "7. Aggregate Functions", content: "Performing calculations on multiple rows: COUNT, SUM, AVG, MIN, MAX.", code: "SELECT COUNT(id), AVG(price) FROM Products;" },
            { title: "8. Grouping Data", content: "Using GROUP BY and HAVING clauses to group aggregate results.", code: "SELECT country, COUNT(id) FROM Users GROUP BY country HAVING COUNT(id) > 5;" },
            { title: "9. JOINS", content: "Combining rows from multiple tables: INNER, LEFT, RIGHT, and FULL JOIN.", code: "SELECT Users.name, Orders.date \nFROM Users \nINNER JOIN Orders ON Users.id = Orders.user_id;" },
            { title: "10. Subqueries", content: "Nesting queries inside other queries.", code: "SELECT name FROM Users WHERE id IN (SELECT user_id FROM Orders);" },
            { title: "11. Constraints & Primary Keys", content: "Enforcing data rules using NOT NULL, UNIQUE, PRIMARY KEY, and FOREIGN KEY.", code: "CREATE TABLE Orders (\n  order_id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES Users(id)\n);" },
            { title: "12. Stored Procedures & Views", content: "Saving complex queries as Views and creating executable routines.", code: "CREATE VIEW ActiveUsers AS\nSELECT * FROM Users WHERE status = 'active';" }
        ]
    },
    css: {
        title: "CSS3 Styling & Layouts",
        topics: [
            { title: "1. CSS Basics", content: "Adding styles to HTML. Inline, Internal, and External CSS.", code: "/* style.css */\nbody {\n  background-color: #f3f4f6;\n}" },
            { title: "2. Selectors", content: "Targeting HTML elements using tag, class (.), id (#), and universal (*) selectors.", code: ".course-card { border: 1px solid #ccc; }\n#main-header { font-size: 24px; }" },
            { title: "3. Colors & Backgrounds", content: "Applying HEX, RGB, HSL colors, background images, and gradients.", code: "div {\n  background: linear-gradient(to right, red, yellow);\n  color: #ffffff;\n}" },
            { title: "4. The Box Model", content: "Understanding content, padding, borders, and margins.", code: ".box {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}" },
            { title: "5. Typography", content: "Styling text with font-family, font-size, font-weight, line-height, and text-align.", code: "p {\n  font-family: 'Arial', sans-serif;\n  line-height: 1.6;\n}" },
            { title: "6. Display Properties", content: "Understanding block, inline, inline-block, and none display values.", code: "span { display: block; }\n.hidden { display: none; }" },
            { title: "7. Positioning", content: "Controlling element placement with static, relative, absolute, fixed, and sticky.", code: ".navbar {\n  position: sticky;\n  top: 0;\n}" },
            { title: "8. Flexbox Fundamentals", content: "A 1-dimensional layout model for aligning items in rows or columns.", code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}" },
            { title: "9. CSS Grid Layout", content: "A 2-dimensional layout system for complex web design.", code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}" },
            { title: "10. Transitions & Transforms", content: "Creating smooth state changes and moving, rotating, or scaling elements.", code: "button {\n  transition: transform 0.3s ease;\n}\nbutton:hover {\n  transform: scale(1.1);\n}" },
            { title: "11. Animations", content: "Creating complex, multi-step animations using @keyframes.", code: "@keyframes slideIn {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}" },
            { title: "12. Responsive Design", content: "Using Media Queries to make websites look good on all devices.", code: "@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}" }
        ]
    },
    html: {
        title: "HTML5 Foundations",
        topics: [
            { title: "1. Structure of a Webpage", content: "The basic boilerplate: DOCTYPE, html, head, title, and body tags.", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n</body>\n</html>" },
            { title: "2. Headings & Paragraphs", content: "Structuring text content using h1 through h6 tags and the p tag.", code: "<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<p>This is a paragraph of text.</p>" },
            { title: "3. Text Formatting", content: "Adding emphasis using bold, italic, strong, em, mark, and del tags.", code: "<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>" },
            { title: "4. Links & Navigation", content: "Creating hyperlinks to other pages or resources using the anchor (a) tag and href attribute.", code: "<a href=\"https://google.com\" target=\"_blank\">Visit Google</a>" },
            { title: "5. Images", content: "Embedding visuals using the img tag, src, and alt attributes.", code: "<img src=\"profile.jpg\" alt=\"A picture of the user\" width=\"200\">" },
            { title: "6. Lists", content: "Organizing data into ordered (numbered) and unordered (bulleted) lists.", code: "<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>" },
            { title: "7. Tables", content: "Presenting tabular data using table, tr (row), th (header), and td (data) tags.", code: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>" },
            { title: "8. Semantic HTML5", content: "Using tags that describe their meaning: header, nav, main, article, section, footer.", code: "<header>\n  <nav>Links</nav>\n</header>\n<main>\n  <article>Content</article>\n</main>" },
            { title: "9. HTML Forms", content: "Collecting user input using the form tag.", code: "<form action=\"/submit\">\n  \n</form>" },
            { title: "10. Input Types & Buttons", content: "Text fields, passwords, checkboxes, radio buttons, and submit buttons.", code: "<input type=\"text\" placeholder=\"Enter Name\">\n<input type=\"password\">\n<button type=\"submit\">Login</button>" },
            { title: "11. Iframes", content: "Embedding another HTML document within the current document (like YouTube videos).", code: "<iframe src=\"https://example.com\" title=\"Description\"></iframe>" },
            { title: "12. Audio & Video", content: "Natively embedding multimedia without third-party plugins.", code: "<video controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n</video>" }
        ]
    },
    xml: {
        title: "XML Data Structuring",
        topics: [
            { title: "1. Introduction to XML", content: "XML (eXtensible Markup Language) is used to store and transport data, not to display it.", code: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root>\n  <message>Hello</message>\n</root>" },
            { title: "2. XML Syntax Rules", content: "Must have a root element, properly closed tags, case sensitivity, and proper nesting.", code: "<book>\n  <title>Harry Potter</title>\n  <author>J.K. Rowling</author>\n</book>" },
            { title: "3. Elements vs Attributes", content: "Data can be stored as element content or as an attribute of an element.", code: "\n<person gender=\"female\">\n  <firstname>Anna</firstname>\n</person>" },
            { title: "4. Namespaces", content: "Avoiding element name conflicts by providing a prefix mapped to a URI.", code: "<h:table xmlns:h=\"http://www.w3.org/TR/html4/\">\n  <h:tr>\n    <h:td>Apples</h:td>\n  </h:tr>\n</h:table>" },
            { title: "5. CDATA", content: "Character Data blocks let you include text that shouldn't be parsed by the XML parser (like code).", code: "<script>\n  <![CDATA[\n    function matchwo(a,b) { return a < b; }\n  ]]>\n</script>" },
            { title: "6. XML DTD (Document Type Definition)", content: "Defining the legal building blocks of an XML document.", code: "<!DOCTYPE note [\n  <!ELEMENT note (to,from,heading,body)>\n  <!ELEMENT to (#PCDATA)>\n]>" },
            { title: "7. XML Schema (XSD)", content: "An XML-based alternative to DTD for describing the structure of an XML document.", code: "<xs:element name=\"note\">\n  <xs:complexType>\n    <xs:sequence>\n      <xs:element name=\"to\" type=\"xs:string\"/>\n    </xs:sequence>\n  </xs:complexType>\n</xs:element>" },
            { title: "8. XPath Basics", content: "A language for navigating through elements and attributes in an XML document.", code: "/* Selects all title elements inside book elements */\n/bookstore/book/title" }
        ]
    },
    js: {
        title: "JavaScript Development",
        topics: [
            { title: "1. Introduction & Setup", content: "Adding interactivity to websites. How to link JS files and use console.log.", code: "\n<script src=\"script.js\"></script>\n\n// In script.js\nconsole.log(\"Hello World\");" },
            { title: "2. Variables (let, const, var)", content: "Declaring variables. Prefer let for changeable values and const for constants.", code: "const API_KEY = \"12345\";\nlet score = 0;\nscore = 10;" },
            { title: "3. Data Types", content: "Strings, Numbers, Booleans, Null, Undefined, and Objects.", code: "let name = \"Alice\"; // String\nlet age = 30; // Number\nlet isStudent = true; // Boolean" },
            { title: "4. Functions & Scope", content: "Reusable code blocks. Understanding global vs local scope.", code: "function calculateTax(amount) {\n  let taxRate = 0.2;\n  return amount * taxRate;\n}" },
            { title: "5. Arrow Functions (ES6)", content: "A shorter syntax for writing function expressions.", code: "const add = (a, b) => a + b;\nconsole.log(add(5, 10));" },
            { title: "6. Arrays & Array Methods", content: "Storing lists of data. Using push, pop, map, filter, and reduce.", code: "const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);" },
            { title: "7. Objects & JSON", content: "Key-value pairs. Converting to and from JSON format.", code: "const user = { name: \"Bob\", age: 25 };\nconst jsonString = JSON.stringify(user);" },
            { title: "8. DOM Manipulation", content: "Document Object Model. Selecting and changing HTML elements via JS.", code: "const title = document.getElementById('main-title');\ntitle.innerText = \"New Title\";\ntitle.style.color = \"red\";" },
            { title: "9. Event Listeners", content: "Reacting to user actions like clicks, keyboard presses, and form submissions.", code: "const btn = document.querySelector('button');\nbtn.addEventListener('click', () => {\n  alert('Button clicked!');\n});" },
            { title: "10. Asynchronous JS (Promises)", content: "Handling operations that take time, preventing the browser from freezing.", code: "const myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(\"Success!\"), 1000);\n});" },
            { title: "11. Fetch API & Async/Await", content: "Making HTTP requests to external servers and APIs cleanly.", code: "async function getData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}" },
            { title: "12. Browser Storage", content: "Saving data locally on the user's computer using localStorage.", code: "localStorage.setItem('username', 'Naras');\nlet name = localStorage.getItem('username');" }
        ]
    }
};