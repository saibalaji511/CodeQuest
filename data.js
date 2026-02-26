// data.js - Contains all the course content
const courseContent = {
    html: {
        title: "HTML5 Masterclass",
        topics: [
            {
                title: "1. Introduction",
                content: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages.",
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>My First Heading</h1>\n    <p>My first paragraph.</p>\n  </body>\n</html>"
            },
            {
                title: "2. Elements & Tags",
                content: "An HTML element is defined by a start tag, some content, and an end tag.",
                code: "<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n<br> "
            }
        ]
    },
    css: {
        title: "CSS3 Styling",
        topics: [
            {
                title: "1. Selectors",
                content: "CSS Selectors are used to 'find' (or select) the HTML elements you want to style.",
                code: "p {\n  color: red;\n  text-align: center;\n}"
            },
            {
                title: "2. Box Model",
                content: "The CSS Box Model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.",
                code: "div {\n  width: 300px;\n  border: 15px solid green;\n  padding: 50px;\n  margin: 20px;\n}"
            }
        ]
    },
    js: {
        title: "JavaScript Logic",
        topics: [
            {
                title: "1. Variables",
                content: "Variables are containers for storing data values. In modern JS, we use let and const.",
                code: "let x = 5;\nconst y = 6;\nlet z = x + y;"
            },
            {
                title: "2. Functions",
                content: "A JavaScript function is a block of code designed to perform a particular task.",
                code: "function myFunction(p1, p2) {\n  return p1 * p2;\n}"
            }
        ]
    },
    python: {
        title: "Python Programming",
        topics: [
            {
                title: "1. Syntax",
                content: "Python was designed for readability, and has some similarities to the English language with influence from mathematics.",
                code: "if 5 > 2:\n  print('Five is greater than two!')"
            },
            {
                title: "2. Lists",
                content: "Lists are used to store multiple items in a single variable.",
                code: "mylist = ['apple', 'banana', 'cherry']\nprint(mylist[1]) # prints banana"
            }
        ]
    },
    java: {
        title: "Java Development",
        topics: [
            {
                title: "1. Main Method",
                content: "Every Java application has a class definition, and the name of the class must match the filename.",
                code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello World');\n  }\n}"
            }
        ]
    },
    c: {
        title: "C Language",
        topics: [
            {
                title: "1. Structure",
                content: "C is a procedural language. It is the foundation of many modern languages.",
                code: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello World!\");\n  return 0;\n}"
            }
        ]
    },
    cpp: {
        title: "C++",
        topics: [
            {
                title: "1. OOP Concepts",
                content: "C++ adds Object Oriented features to C, such as classes and objects.",
                code: "class MyClass {\n  public:\n    int myNum;\n    string myString;\n};"
            }
        ]
    },
    mysql: {
        title: "MySQL Database",
        topics: [
            {
                title: "1. SELECT Statement",
                content: "The SELECT statement is used to select data from a database.",
                code: "SELECT * FROM Customers;"
            },
            {
                title: "2. WHERE Clause",
                content: "The WHERE clause is used to filter records.",
                code: "SELECT * FROM Customers\nWHERE Country='Mexico';"
            }
        ]
    },
    xml: {
        title: "XML Data",
        topics: [
            {
                title: "1. Tree Structure",
                content: "XML documents are formed as element trees.",
                code: "<note>\n  <to>Tove</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Don't forget me this weekend!</body>\n</note>"
            }
        ]
    }
};