
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  [language: string]: Question[];
}

export const quiz_data: QuizData = {
  "Python": [
    {
      question: "What is Python's primary use case?",
      options: [
        "Web development only",
        "Data science only",
        "General purpose programming",
        "Mobile development only"
      ],
      correctAnswer: "General purpose programming"
    },
    {
      question: "Which of these is NOT a Python data type?",
      options: ["List", "Dictionary", "Tuple", "Array"],
      correctAnswer: "Array"
    },
    {
      question: "What symbol is used for comments in Python?",
      options: ["//", "/*", "#", "--"],
      correctAnswer: "#"
    },
    {
      question: "Which Python keyword is used to define a function?",
      options: ["function", "def", "define", "func"],
      correctAnswer: "def"
    },
    {
      question: "What does the 'self' keyword represent in Python classes?",
      options: [
        "The class itself",
        "The current instance of the class",
        "A reserved keyword for internal methods",
        "A global variable"
      ],
      correctAnswer: "The current instance of the class"
    },
    {
      question: "Which of these is a valid way to create a list in Python?",
      options: [
        "list = (1, 2, 3)",
        "list = [1, 2, 3]",
        "list = {1, 2, 3}",
        "list = 1, 2, 3"
      ],
      correctAnswer: "list = [1, 2, 3]"
    },
    {
      question: "What does the 'pip' command do in Python?",
      options: [
        "Prints the current Python version",
        "Packages internal processes",
        "Installs packages",
        "Purges inactive programs"
      ],
      correctAnswer: "Installs packages"
    },
    {
      question: "What is a Python decorator?",
      options: [
        "A function that returns a function",
        "A design pattern for GUI elements",
        "A type of comment",
        "A class attribute"
      ],
      correctAnswer: "A function that returns a function"
    },
    {
      question: "Which of the following is NOT a built-in function in Python?",
      options: ["map()", "filter()", "reduce()", "print()"],
      correctAnswer: "reduce()"
    },
    {
      question: "Which module would you use for regular expressions in Python?",
      options: ["regex", "re", "pyregex", "regularexpressions"],
      correctAnswer: "re"
    },
    {
      question: "What will be the output of: print(2 ** 3)?",
      options: ["6", "8", "5", "Error"],
      correctAnswer: "8"
    },
    {
      question: "Which of these is not a valid method for string manipulation in Python?",
      options: ["split()", "replace()", "join()", "modify()"],
      correctAnswer: "modify()"
    },
    {
      question: "How do you open a file named 'data.txt' for reading in Python?",
      options: [
        "open('data.txt')",
        "open('data.txt', 'read')",
        "open('data.txt', 'r')",
        "file('data.txt', 'r')"
      ],
      correctAnswer: "open('data.txt', 'r')"
    },
    {
      question: "What does the 'pass' statement do in Python?",
      options: [
        "Skips the current iteration in a loop",
        "Exits the program",
        "Does nothing",
        "Passes control to another function"
      ],
      correctAnswer: "Does nothing"
    },
    {
      question: "How do you add an element to the end of a list in Python?",
      options: ["list.append(element)", "list.add(element)", "list.insert(element)", "list.push(element)"],
      correctAnswer: "list.append(element)"
    },
    {
      question: "What is the output of: print('hello'[1])?",
      options: ["h", "e", "he", "hello"],
      correctAnswer: "e"
    },
    {
      question: "Which Python statement is used to catch exceptions?",
      options: ["catch", "try", "except", "error"],
      correctAnswer: "try"
    },
    {
      question: "Which one of these is not a Python framework?",
      options: ["Django", "Flask", "Pyramid", "Ruby on Rails"],
      correctAnswer: "Ruby on Rails"
    },
    {
      question: "What is a Python generator?",
      options: [
        "A function that generates random numbers",
        "A class that creates instances",
        "A function that returns an iterator",
        "A tool that creates Python files"
      ],
      correctAnswer: "A function that returns an iterator"
    },
    {
      question: "What is the correct way to import a specific function from a module?",
      options: [
        "from module import function",
        "import function from module",
        "import module.function",
        "function import from module"
      ],
      correctAnswer: "from module import function"
    }
  ],
  "JavaScript": [
    {
      question: "Which of these is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Integer", "Symbol"],
      correctAnswer: "Integer"
    },
    {
      question: "What keyword is used to declare a variable in JavaScript ES6?",
      options: ["var", "int", "let", "string"],
      correctAnswer: "let"
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: [
        "Assigns a value",
        "Compares value only",
        "Compares value and type",
        "Compares reference"
      ],
      correctAnswer: "Compares value and type"
    },
    {
      question: "Which function is used to parse a string to an integer in JavaScript?",
      options: ["Integer.parse()", "parseInteger()", "parseInt()", "Number.parseInt()"],
      correctAnswer: "parseInt()"
    },
    {
      question: "What will console.log(typeof []) output in JavaScript?",
      options: ["array", "object", "list", "undefined"],
      correctAnswer: "object"
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A way to close browser windows",
        "A function that has access to variables from an outer function",
        "A method to close database connections",
        "A way to hide elements in the DOM"
      ],
      correctAnswer: "A function that has access to variables from an outer function"
    },
    {
      question: "Which method is used to add a new element to the end of an array?",
      options: ["push()", "append()", "add()", "insert()"],
      correctAnswer: "push()"
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
      correctAnswer: "// comment"
    },
    {
      question: "What is the purpose of 'use strict' in JavaScript?",
      options: [
        "To enable strict typing",
        "To enable strict mode and catch common coding mistakes",
        "To restrict access to certain JavaScript features",
        "To make the code execute faster"
      ],
      correctAnswer: "To enable strict mode and catch common coding mistakes"
    },
    {
      question: "What is the output of: console.log(10 + '20')?",
      options: ["30", "1020", "TypeError", "NaN"],
      correctAnswer: "1020"
    },
    {
      question: "Which method is used to remove the last element from an array?",
      options: ["pop()", "removeLast()", "deleteLast()", "shift()"],
      correctAnswer: "pop()"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current file",
        "The current function",
        "The context object the code is executing in",
        "The global window object"
      ],
      correctAnswer: "The context object the code is executing in"
    },
    {
      question: "Which of these is NOT a JavaScript framework or library?",
      options: ["React", "Angular", "Vue", "Swift"],
      correctAnswer: "Swift"
    },
    {
      question: "How do you declare a constant in JavaScript?",
      options: ["const", "constant", "let", "var"],
      correctAnswer: "const"
    },
    {
      question: "What is a Promise in JavaScript?",
      options: [
        "A guarantee of future payment",
        "A proxy for a value not necessarily known when the promise is created",
        "A function that always returns true",
        "A reserved keyword for future JavaScript versions"
      ],
      correctAnswer: "A proxy for a value not necessarily known when the promise is created"
    },
    {
      question: "Which method is used to convert a JavaScript object to a JSON string?",
      options: ["JSON.toString()", "JSON.stringify()", "JSON.parse()", "JSON.convert()"],
      correctAnswer: "JSON.stringify()"
    },
    {
      question: "What is the purpose of the 'async' keyword in JavaScript?",
      options: [
        "To declare a function as asynchronous",
        "To improve performance",
        "To create a new thread",
        "To synchronize multiple functions"
      ],
      correctAnswer: "To declare a function as asynchronous"
    },
    {
      question: "Which operator is used for template literals in JavaScript?",
      options: ["''", "``", "\"\"", "()"],
      correctAnswer: "``"
    },
    {
      question: "What will be the output of: console.log('5' - 3)?",
      options: ["2", "'5-3'", "8", "NaN"],
      correctAnswer: "2"
    },
    {
      question: "What is the correct syntax for a JavaScript arrow function?",
      options: [
        "function() => {}",
        "() => {}",
        "=> () {}",
        "function => {}"
      ],
      correctAnswer: "() => {}"
    }
  ],
  "Java": [
    {
      question: "Java is primarily...",
      options: [
        "Procedural",
        "Object-oriented",
        "Functional",
        "Machine language"
      ],
      correctAnswer: "Object-oriented"
    },
    {
      question: "What does JVM stand for in Java?",
      options: [
        "Java Very Main",
        "Java Virtual Machine",
        "Java Variable Method",
        "Just Verify Machine"
      ],
      correctAnswer: "Java Virtual Machine"
    },
    {
      question: "What is the entry point of a Java application?",
      options: [
        "init() method",
        "start() method",
        "main() method",
        "run() method"
      ],
      correctAnswer: "main() method"
    },
    {
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "boolean", "String", "char"],
      correctAnswer: "String"
    },
    {
      question: "What is the access modifier with the most restrictive access in Java?",
      options: ["public", "protected", "default", "private"],
      correctAnswer: "private"
    },
    {
      question: "Which keyword is used for inheritance in Java?",
      options: ["implements", "extends", "inherits", "using"],
      correctAnswer: "extends"
    },
    {
      question: "What is Polymorphism in Java?",
      options: [
        "Having multiple main methods",
        "The ability of an object to take on many forms",
        "A design pattern",
        "A type of variable"
      ],
      correctAnswer: "The ability of an object to take on many forms"
    },
    {
      question: "Which of the following is true about Java interfaces?",
      options: [
        "They can have implemented methods",
        "A class can implement multiple interfaces",
        "Interfaces can have private methods",
        "Interfaces can be instantiated"
      ],
      correctAnswer: "A class can implement multiple interfaces"
    },
    {
      question: "What does the 'final' keyword mean when applied to a class?",
      options: [
        "The class cannot be instantiated",
        "The class cannot be extended",
        "The class must be extended",
        "The class has only final methods"
      ],
      correctAnswer: "The class cannot be extended"
    },
    {
      question: "Which collection type allows duplicates and maintains insertion order?",
      options: ["HashSet", "HashMap", "LinkedList", "TreeSet"],
      correctAnswer: "LinkedList"
    },
    {
      question: "What is the purpose of the 'static' keyword in Java?",
      options: [
        "To create a static class",
        "To make a variable instance-specific",
        "To make a variable or method belong to the class, not instances",
        "To prevent inheritance"
      ],
      correctAnswer: "To make a variable or method belong to the class, not instances"
    },
    {
      question: "What is a constructor in Java?",
      options: [
        "A method used to construct objects",
        "A special method used to initialize objects",
        "A keyword",
        "A type of variable"
      ],
      correctAnswer: "A special method used to initialize objects"
    },
    {
      question: "What is the default value of a boolean primitive in Java?",
      options: ["true", "false", "null", "0"],
      correctAnswer: "false"
    },
    {
      question: "Which of these is NOT a feature of Java?",
      options: ["Platform independence", "Garbage collection", "Multiple inheritance", "Multithreading"],
      correctAnswer: "Multiple inheritance"
    },
    {
      question: "What is an immutable class in Java?",
      options: [
        "A class that can't be modified after compilation",
        "A class whose objects can't be changed after creation",
        "A class that can't be extended",
        "A class with only static methods"
      ],
      correctAnswer: "A class whose objects can't be changed after creation"
    },
    {
      question: "Which Java keyword is used to handle exceptions?",
      options: ["try", "catch", "finally", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What does the 'super' keyword do in Java?",
      options: [
        "Refers to the superclass object",
        "Creates a new instance of the superclass",
        "Calls the parent class constructor",
        "Both A and C"
      ],
      correctAnswer: "Both A and C"
    },
    {
      question: "Which of these is NOT a valid Java identifier?",
      options: ["_variable", "variable2", "2variable", "$variable"],
      correctAnswer: "2variable"
    },
    {
      question: "What is method overloading in Java?",
      options: [
        "Defining a method in a subclass with the same name as in the superclass",
        "Defining multiple methods with the same name but different parameters",
        "Using a method more than its allowed number of calls",
        "Overloading the JVM with too many method calls"
      ],
      correctAnswer: "Defining multiple methods with the same name but different parameters"
    },
    {
      question: "Which package is automatically imported in all Java programs?",
      options: ["java.lang", "java.util", "java.io", "java.net"],
      correctAnswer: "java.lang"
    }
  ],
  "C++": [
    {
      question: "What does C++ stand for?",
      options: [
        "Computer Programming Plus",
        "C Plus Plus",
        "C Advanced",
        "Control Programming Plus"
      ],
      correctAnswer: "C Plus Plus"
    },
    {
      question: "Which of the following is NOT a feature of C++?",
      options: [
        "Object-oriented programming",
        "Exception handling",
        "Automatic garbage collection",
        "Operator overloading"
      ],
      correctAnswer: "Automatic garbage collection"
    },
    {
      question: "What is the correct way to declare a constant in C++?",
      options: [
        "const int VALUE = 10;",
        "constant int VALUE = 10;",
        "#define VALUE 10",
        "Both A and C"
      ],
      correctAnswer: "Both A and C"
    },
    {
      question: "Which operator is used for memory allocation in C++?",
      options: ["malloc", "alloc", "new", "create"],
      correctAnswer: "new"
    },
    {
      question: "What is the use of 'virtual' keyword in C++?",
      options: [
        "To create a virtual copy of a class",
        "To declare a function that can be overridden in a derived class",
        "To make a variable volatile",
        "To create a virtual machine"
      ],
      correctAnswer: "To declare a function that can be overridden in a derived class"
    },
    {
      question: "Which of the following is true about C++ destructors?",
      options: [
        "They can take parameters",
        "They can be overloaded",
        "They have the same name as the class prefixed with a ~",
        "They return a value"
      ],
      correctAnswer: "They have the same name as the class prefixed with a ~"
    },
    {
      question: "What is the correct way to access a class method through a pointer?",
      options: [
        "pointer->method()",
        "pointer.method()",
        "pointer::method()",
        "method()->pointer"
      ],
      correctAnswer: "pointer->method()"
    },
    {
      question: "What is function overriding in C++?",
      options: [
        "Defining a function more than once in the same scope",
        "Defining a function in a derived class that has the same name as in the base class",
        "Using a function beyond its scope",
        "Calling a function multiple times"
      ],
      correctAnswer: "Defining a function in a derived class that has the same name as in the base class"
    },
    {
      question: "Which of the following is NOT a valid access specifier in C++?",
      options: ["public", "private", "protected", "internal"],
      correctAnswer: "internal"
    },
    {
      question: "What is the purpose of the 'friend' keyword in C++?",
      options: [
        "To declare a friendly variable",
        "To allow non-member functions to access private class members",
        "To create a friendship between two classes",
        "Both B and C"
      ],
      correctAnswer: "Both B and C"
    },
    {
      question: "Which C++ keyword is used to handle exceptions?",
      options: ["try", "catch", "throw", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What is a reference variable in C++?",
      options: [
        "A variable that stores memory addresses",
        "An alias to another variable",
        "A variable declared with the 'ref' keyword",
        "A pointer to a variable"
      ],
      correctAnswer: "An alias to another variable"
    },
    {
      question: "Which standard C++ library is used for input and output operations?",
      options: ["iostream", "stdio", "stdlib", "io"],
      correctAnswer: "iostream"
    },
    {
      question: "What is the purpose of 'namespace' in C++?",
      options: [
        "To organize code into logical groups",
        "To create a new scope for identifiers",
        "To prevent name conflicts",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      question: "Which of the following best describes a pure virtual function in C++?",
      options: [
        "A function with no parameters",
        "A function with no body that must be overridden",
        "A function that returns void",
        "A function declared inside a namespace"
      ],
      correctAnswer: "A function with no body that must be overridden"
    },
    {
      question: "What is the purpose of the 'inline' keyword in C++?",
      options: [
        "To declare an inline variable",
        "To suggest the compiler to insert function code at the call site",
        "To declare a function within a class definition",
        "To improve code readability"
      ],
      correctAnswer: "To suggest the compiler to insert function code at the call site"
    },
    {
      question: "Which operator is used for dynamic memory deallocation in C++?",
      options: ["free", "delete", "remove", "dealloc"],
      correctAnswer: "delete"
    },
    {
      question: "What does STL stand for in C++?",
      options: [
        "Standard Template Library",
        "Standard Type Library",
        "System Template Library",
        "Simple Template Language"
      ],
      correctAnswer: "Standard Template Library"
    },
    {
      question: "What is a copy constructor in C++?",
      options: [
        "A constructor that creates a copy of an object",
        "A constructor that takes an object of the same class as a parameter",
        "A constructor that makes multiple copies of an object",
        "A constructor that copies functions from one class to another"
      ],
      correctAnswer: "A constructor that takes an object of the same class as a parameter"
    },
    {
      question: "What is the purpose of the 'this' pointer in C++?",
      options: [
        "To point to the current class instance",
        "To point to the base class",
        "To indicate the end of a function",
        "To create a self-reference in a template"
      ],
      correctAnswer: "To point to the current class instance"
    }
  ],
  "C#": [
    {
      question: "C# was developed by?",
      options: ["Microsoft", "Oracle", "Google", "IBM"],
      correctAnswer: "Microsoft"
    },
    {
      question: "Which of the following is TRUE about C#?",
      options: [
        "It is a procedural language",
        "It is an object-oriented language",
        "It is a functional language",
        "It is a markup language"
      ],
      correctAnswer: "It is an object-oriented language"
    },
    {
      question: "What is the correct file extension for C# source code files?",
      options: [".cs", ".c#", ".csharp", ".csh"],
      correctAnswer: ".cs"
    },
    {
      question: "Which of the following is NOT a value type in C#?",
      options: ["int", "float", "string", "char"],
      correctAnswer: "string"
    },
    {
      question: "What is a namespace in C#?",
      options: [
        "A container for classes and other namespaces",
        "A special type of class",
        "A method that creates new objects",
        "A variable declaration statement"
      ],
      correctAnswer: "A container for classes and other namespaces"
    },
    {
      question: "Which keyword is used to define a constant variable in C#?",
      options: ["const", "static", "readonly", "fixed"],
      correctAnswer: "const"
    },
    {
      question: "What is the difference between 'ref' and 'out' parameters in C#?",
      options: [
        "ref requires the variable to be initialized before passing, out does not",
        "ref is for value types, out is for reference types",
        "ref passes values, out passes references",
        "There is no difference"
      ],
      correctAnswer: "ref requires the variable to be initialized before passing, out does not"
    },
    {
      question: "What is the purpose of the 'using' statement in C#?",
      options: [
        "To import namespaces",
        "To automatically dispose of resources",
        "Both A and B",
        "To define a scope for variables"
      ],
      correctAnswer: "Both A and B"
    },
    {
      question: "What is a delegate in C#?",
      options: [
        "A type of variable",
        "A reference type that can hold a reference to a method",
        "A special type of class",
        "A memory allocation mechanism"
      ],
      correctAnswer: "A reference type that can hold a reference to a method"
    },
    {
      question: "What does the 'sealed' keyword do in C#?",
      options: [
        "Prevents a class from being instantiated",
        "Prevents a class from being inherited",
        "Marks a class as secure",
        "Makes a class thread-safe"
      ],
      correctAnswer: "Prevents a class from being inherited"
    },
    {
      question: "Which of the following is NOT a feature of C#?",
      options: [
        "Garbage collection",
        "Exception handling",
        "Multiple inheritance of classes",
        "Generics"
      ],
      correctAnswer: "Multiple inheritance of classes"
    },
    {
      question: "What is the purpose of the 'virtual' keyword in C#?",
      options: [
        "To create a virtual copy of a class",
        "To declare a method that can be overridden in a derived class",
        "To virtualize memory allocation",
        "To create a temporary object"
      ],
      correctAnswer: "To declare a method that can be overridden in a derived class"
    },
    {
      question: "What is the 'async' keyword used for in C#?",
      options: [
        "To define a method that executes on a separate thread",
        "To make a method asynchronous using the Task-based programming model",
        "To enable a class to be used in asynchronous operations",
        "To create an asynchronous constructor"
      ],
      correctAnswer: "To make a method asynchronous using the Task-based programming model"
    },
    {
      question: "Which collection class in C# implements a key-value pair data structure?",
      options: ["ArrayList", "Queue", "Dictionary", "List"],
      correctAnswer: "Dictionary"
    },
    {
      question: "What is LINQ in C#?",
      options: [
        "A programming language",
        "A database system",
        "Language Integrated Query",
        "A compiler directive"
      ],
      correctAnswer: "Language Integrated Query"
    },
    {
      question: "What is the purpose of the 'override' keyword in C#?",
      options: [
        "To hide a base class method",
        "To implement an interface method",
        "To override a virtual method in a base class",
        "To overload an existing method"
      ],
      correctAnswer: "To override a virtual method in a base class"
    },
    {
      question: "Which of the following is NOT a valid access modifier in C#?",
      options: ["public", "private", "protected", "friend"],
      correctAnswer: "friend"
    },
    {
      question: "What are extension methods in C#?",
      options: [
        "Methods that can extend the functionality of a class",
        "Static methods that can be called as instance methods on a type",
        "Methods that extend the inheritance chain",
        "Methods that extend the runtime"
      ],
      correctAnswer: "Static methods that can be called as instance methods on a type"
    },
    {
      question: "What is the purpose of the 'partial' keyword in C#?",
      options: [
        "To create a partial implementation of an interface",
        "To split the definition of a class or method over multiple files",
        "To create a partially initialized object",
        "To implement part of an abstract class"
      ],
      correctAnswer: "To split the definition of a class or method over multiple files"
    },
    {
      question: "Which operator is used for null-coalescing in C#?",
      options: ["?:", "??", "?.", "::"],
      correctAnswer: "??"
    }
  ]
};
