var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "Which of the following is not a fundamental data type in C++?",
            "options": [
                { "a": "int", "b": "float", "c": "boolean", "d": "char" }
            ],
            "answer": "boolean",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "How is memory allocated in C++?",
            "options": [
                { "a": "malloc()", "b": "alloc()", "c": "new", "d": "malloc() and new" }
            ],
            "answer": "new",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the result of the expression `sizeof(int)` in C++?",
            "options": [
                { "a": "Depends on the system", "b": "4 bytes", "c": "8 bytes", "d": "2 bytes" }
            ],
            "answer": "Depends on the system",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which operator is used to allocate memory for an array in C++?",
            "options": [
                { "a": "alloc", "b": "malloc", "c": "new", "d": "allocate" }
            ],
            "answer": "new",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is the output of the following code?\n\n```\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 10;\n  if (x > 5) {\n    cout << \"Hello\";\n  }\n  else {\n    cout << \"World\";\n  }\n  return 0;\n}\n```\n",
            "options": [
                { "a": "Hello", "b": "World", "c": "Compilation error", "d": "No output" }
            ],
            "answer": "Hello",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which keyword is used to define a class in C++?",
            "options": [
                { "a": "class", "b": "define", "c": "Class", "d": "Define" }
            ],
            "answer": "class",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is the purpose of `endl` in C++?",
            "options": [
                { "a": "To insert a new line character", "b": "To end the program execution", "c": "To flush the output buffer", "d": "To declare the end of a loop" }
            ],
            "answer": "To insert a new line character",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which type of inheritance is not supported in C++?",
            "options": [
                { "a": "Single inheritance", "b": "Multiple inheritance", "c": "Multilevel inheritance", "d": "Hybrid inheritance" }
            ],
            "answer": "Hybrid inheritance",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the correct way to declare a pointer in C++?",
            "options": [
                { "a": "int ptr;", "b": "int *ptr;", "c": "int ptr = *;", "d": "int ptr = &;" }
            ],
            "answer": "int *ptr;",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which operator is used to access the member functions and variables of an object in C++?",
            "options": [
                { "a": "->", "b": ".", "c": ":", "d": "::" }
            ],
            "answer": ".",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": "What is the correct syntax for a constructor in C++?",
            "options": [
                { "a": "constructor() {}", "b": "constructor {}", "c": "class constructor {}", "d": "className() {}" }
            ],
            "answer": "className() {}",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": "What is the output of the following code?\n\n```\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5;\n  while (x > 0) {\n    cout << x;\n    x--;\n  }\n  return 0;\n}\n```\n",
            "options": [
                { "a": "54321", "b": "12345", "c": "55555", "d": "543210" }
            ],
            "answer": "54321",
            "score": 0,
            "status": ""
        },
        {
            "id": 13,
            "question": "Which operator is used to compare two values in C++?",
            "options": [
                { "a": "==", "b": "=", "c": "===", "d": "!=" }
            ],
            "answer": "==",
            "score": 0,
            "status": ""
        },
        {
            "id": 14,
            "question": "What is the purpose of the `continue` statement in C++?",
            "options": [
                { "a": "To stop the execution of the loop", "b": "To skip the current iteration of the loop", "c": "To exit the loop immediately", "d": "To re-run the loop from the beginning" }
            ],
            "answer": "To skip the current iteration of the loop",
            "score": 0,
            "status": ""
        },
        {
            "id": 15,
            "question": "What is the output of the following code?\n\n```\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[] = {1, 2, 3};\n  cout << arr[2];\n  return 0;\n}\n```\n",
            "options": [
                { "a": "1", "b": "2", "c": "3", "d": "Compilation error" }
            ],
            "answer": "3",
            "score": 0,
            "status": ""
        },
        {
            "id": 16,
            "question": "Which keyword is used to dynamically allocate memory in C++?",
            "options": [
                { "a": "malloc", "b": "alloc", "c": "new", "d": "malloc and new" }
            ],
            "answer": "new",
            "score": 0,
            "status": ""
        },
        {
            "id": 17,
            "question": "What is the output of the following code?\n\n```\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5;\n  int &y = x;\n  y++;\n  cout << x;\n  return 0;\n}\n```\n",
            "options": [
                { "a": "5", "b": "6", "c": "Compilation error", "d": "Undefined behavior" }
            ],
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 18,
            "question": "Which data structure in C++ allows storage of multiple elements of the same type?",
            "options": [
                { "a": "Array", "b": "Linked list", "c": "Queue", "d": "All of the above" }
            ],
            "answer": "All of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 19,
            "question": "What does the `static` keyword mean when used with a class member in C++?",
            "options": [
                { "a": "The member is not accessible outside the class", "b": "The member is shared among all instances of the class", "c": "The member cannot be modified", "d": "The member is constant" }
            ],
            "answer": "The member is shared among all instances of the class",
            "score": 0,
            "status": ""
        },
        {
            "id": 20,
            "question": "How do you declare a constant in C++?",
            "options": [
                { "a": "constant int x;", "b": "int const x;", "c": "const int x;", "d": "x = 10; const;" }
            ],
            "answer": "const int x;",
            "score": 0,
            "status": ""
        },
        {
            "id": 21,
            "question": "What is the purpose of `sizeof` operator in C++?",
            "options": [
                { "a": "To return the size of a data type or variable", "b": "To find the length of a string", "c": "To compare two variables", "d": "To allocate memory" }
            ],
            "answer": "To return the size of a data type or variable",
            "score": 0,
            "status": ""
        },
        {
            "id": 22,
            "question": "What is the output of the following code?\n\n```\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5;\n  cout << ++x;\n  return 0;\n}\n```\n",
            "options": [
                { "a": "5", "b": "6", "c": "Compilation error", "d": "Undefined behavior" }
            ],
            "answer": "6",
            "score": 0,
            "status": ""
        },
        {
            "id": 23,
            "question": "What is the correct way to define a destructor in C++?",
            "options": [
                { "a": "destructor()", "b": "~destructor() {}", "c": "void destructor() {}", "d": "class ~destructor() {}" }
            ],
            "answer": "~destructor() {}",
            "score": 0,
            "status": ""
        },
        {
            "id": 24,
            "question": "What is the correct way to declare a function pointer in C++?",
            "options": [
                { "a": "int (*ptr)(int)", "b": "int ptr(int)", "c": "int *ptr(int)", "d": "int *(ptr)(int)" }
            ],
            "answer": "int (*ptr)(int)",
            "score": 0,
            "status": ""
        }
        ,
        {
            "id": 25,
            "question": "What is the purpose of the `inline` keyword in C++?",
            "options": [
                { "a": "To include a header file", "b": "To define a macro", "c": "To suggest the compiler to insert the function code at the point of call", "d": "To define a constant" }
            ],
            "answer": "To suggest the compiler to insert the function code at the point of call",
            "score": 0,
            "status": ""
        }
    ]
};

  
  var quizApp = function() {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
  
    this.displayQuiz = function(cque) {
      this.currentque = cque;
      if (this.currentque < totalque) {
        $("#tque").html(totalque);
        $("#previous").attr("disabled", false);
        $("#next").attr("disabled", false);
        $("#qid").html(quiz.JS[this.currentque].id + '.');
  
        $("#question").html(quiz.JS[this.currentque].question);
        $("#question-options").html("");
        for (var key in quiz.JS[this.currentque].options[0]) {
          if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
            $("#question-options").append(
              "<div class='form-check option-block'>" +
                "<label class='form-check-label'>" +
                  "<input type='radio' class='form-check-input' name='option' id='q" +
                  key.charCodeAt(0) +
                  "' value='" +
                  quiz.JS[this.currentque].options[0][key] +
                  "'><span id='optionval'>" +
                  quiz.JS[this.currentque].options[0][key] +
                  "</span>" +
                "</label>"
            );
          }
        }
      }
      if (this.currentque <= 0) {
        $("#previous").attr("disabled", true);
      }
      if (this.currentque >= totalque) {
        $("#next").attr("disabled", true);
        for (var i = 0; i < totalque; i++) {
          this.score = this.score + quiz.JS[i].score;
        }
        return this.showResult(this.score);
      }
    }
  
    this.showResult = function(scr) {
      $("#result").addClass("result");
      $("#result").html(
        "<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>"
      );
      for (var j = 0; j < totalque; j++) {
        var res;
        if (quiz.JS[j].score == 0) {
          res =
            '<span class="wrong">' +
            quiz.JS[j].score +
            '</span><i class="fa fa-remove c-wrong"></i>';
        } else {
          res =
            '<span class="correct">' +
            quiz.JS[j].score +
            '</span><i class="fa fa-check c-correct"></i>';
        }
        $("#result").append(
          '<div class="result-question"><span>Q ' +
            quiz.JS[j].id +
            '</span> &nbsp;' +
            quiz.JS[j].question +
            '</div>' +
            '<div><b>Correct answer:</b> &nbsp;' +
            quiz.JS[j].answer +
            '</div>' +
            '<div class="last-row"><b>Score:</b> &nbsp;' +
            res +
            '</div>'
        );
      }
    }
  
    this.checkAnswer = function(option) {
      var answer = quiz.JS[this.currentque].answer;
      option = option.replace(/</g, "&lt;"); 
      option = option.replace(/>/g, "&gt;");
  
      if (option == quiz.JS[this.currentque].answer) {
        if (quiz.JS[this.currentque].score == 0) {
          quiz.JS[this.currentque].score = 1;
          quiz.JS[this.currentque].status = "correct";
        }
      } else {
        quiz.JS[this.currentque].status = "wrong";
      }
    }
  
    this.changeQuestion = function(cque) {
      this.currentque = this.currentque + cque;
      this.displayQuiz(this.currentque);
    }
  }
  
  var jsq = new quizApp();
  
  var selectedopt;
  $(document).ready(function() {
    jsq.displayQuiz(0);
  
    $("#question-options").on("change", "input[type=radio][name=option]", function(e) {
      $(this).prop("checked", true);
      selectedopt = $(this).val();
    });
  
    $("#next").click(function(e) {
      e.preventDefault();
      if (selectedopt) {
        jsq.checkAnswer(selectedopt);
      }
      jsq.changeQuestion(1);
    });
  
    $("#previous").click(function(e) {
      e.preventDefault();
      if (selectedopt) {
        jsq.checkAnswer(selectedopt);
      }
      jsq.changeQuestion(-1);
    });
  });
  