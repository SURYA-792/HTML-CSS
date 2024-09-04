let json = {
  questions: [
    {
      question: "Which of the following is not a Java keyword?",
      options: ["static", "Boolean", "void", "private"],
      answer: "Boolean",
    },
    {
      question: "What is the size of an int data type in Java?",
      options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
      answer: "4 bytes",
    },
    {
      question: "Which method is used to start a thread in Java?",
      options: ["init()", "start()", "run()", "resume()"],
      answer: "start()",
    },
    {
      question: "Which of the following is a marker interface?",
      options: ["Serializable", "Comparable", "Cloneable", "Runnable"],
      answer: "Serializable",
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      answer: "false",
    },
    {
      question: "What is the superclass of all classes in Java?",
      options: ["Object", "Class", "System", "String"],
      answer: "Object",
    },
    {
      question: "Which of these is not a valid comment in Java?",
      options: [
        "// comment",
        "/* comment */",
        "/** comment */",
        "<!-- comment -->",
      ],
      answer: "<!-- comment -->",
    },
    {
      question: "What is the return type of the hashCode() method in Java?",
      options: ["int", "float", "boolean", "double"],
      answer: "int",
    },
    {
      question: "Which of these are selection statements in Java?",
      options: ["if()", "for()", "continue", "break"],
      answer: "if()",
    },
    {
      question:
        "Which keyword is used to prevent a class from being subclassed in Java?",
      options: ["static", "final", "abstract", "private"],
      answer: "final",
    },
    {
      question: "Which of the following is not an access modifier in Java?",
      options: ["protected", "default", "void", "public"],
      answer: "void",
    },
    {
      question: "What is the extension of a compiled Java class file?",
      options: [".java", ".class", ".js", ".exe"],
      answer: ".class",
    },
    {
      question:
        "Which of the following statements is used to exit a loop in Java?",
      options: ["exit", "break", "continue", "stop"],
      answer: "break",
    },
    {
      question: "Which package contains the Random class in Java?",
      options: ["java.io", "java.lang", "java.util", "java.random"],
      answer: "java.util",
    },
    {
      question:
        "Which of the following methods is used to convert a string to a lowercase in Java?",
      options: ["toLower()", "toLowerCase()", "lower()", "changeCase()"],
      answer: "toLowerCase()",
    },
  ],
};
let correctAnswers = 0;
let container = document.getElementById("container");
createQuestons();
function createQuestons() {
  json.questions.forEach((questionObj, index) => {
    let div = document.createElement("div");
    div.classList.add("Questions");

    let questionPara = document.createElement("p");
    questionPara.innerHTML = `${index + 1} . ${questionObj.question}`;
    div.appendChild(questionPara);

    questionObj.options.forEach((option) => {
      let label = document.createElement("label");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = option;
      input.addEventListener("click", () => {
        checkAnswer(option, questionObj.answer, `question${index}`);
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));

      div.appendChild(label);
      div.appendChild(document.createElement("br"));
    });

    container.append(div);
  });
}

function checkAnswer(option, answer, questionName) {
  if (option == answer) correctAnswers++;

  document.querySelector("#score").innerHTML = correctAnswers;
  let options = document.getElementsByName(questionName);
  options.forEach((radio) => {
    radio.disabled = true;
  });
}
