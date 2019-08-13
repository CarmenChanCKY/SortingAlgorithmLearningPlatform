function passDatabase(correct, incorrect, level) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        }
    };

    xmlhttp.open("GET", "./exerciseHandling.php?type=Insertion" + "&correct=" + correct + "&incorrect=" + incorrect + "&level=" + level, true);
    xmlhttp.send();
}

// For InsertionL1 sort exercise

function InsertionSortCheckL1() {
    var correct = 0;
    var incorrect = 0;


    // Question 1
    if (insertionSortL1.InsertionL1Q1[0].checked) {
        correct = correct + 1;
        insertionSortL1.InsertionL1Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL1.InsertionL1Q1Ans.value = "The correct answer is A. ";
        incorrect = incorrect + 1;
    }


    // Question 2
    if (insertionSortL1.InsertionL1Q2[2].checked) {
        correct = correct + 1;
        insertionSortL1.InsertionL1Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL1.InsertionL1Q2Ans.value = "The correct answer is C. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (document.getElementById("InsertionL1Q31").checked && document.getElementById("InsertionL1Q34").checked && (document.getElementById("InsertionL1Q32").checked || document.getElementById("InsertionL1Q33").checked)) {
        insertionSortL1.InsertionL1Q3Ans.value = "The correct answer is A and D.";
        incorrect = incorrect + 2;
    } else if (document.getElementById("InsertionL1Q31").checked && document.getElementById("InsertionL1Q34").checked) {
        correct = correct + 2;
        insertionSortL1.InsertionL1Q3Ans.value = "Correct! You get 2 marks! ";
    } else if (document.getElementById("InsertionL1Q31").checked || document.getElementById("InsertionL1Q34").checked) {
        correct = correct + 1;
        incorrect = incorrect + 1;
        insertionSortL1.InsertionL1Q3Ans.value = "The correct answer is A and D. You get 1 mark!";
    } else {
        insertionSortL1.InsertionL1Q3Ans.value = "The correct answer is A and D.";
        incorrect = incorrect + 2;
    }

    // Question 4
    if (insertionSortL1.InsertionL1Q4[3].checked) {
        correct = correct + 1;
        insertionSortL1.InsertionL1Q4Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL1.InsertionL1Q4Ans.value = "The correct answer is D. ";
        incorrect = incorrect + 1;
    }

    // Question 5
    if (insertionSortL1.InsertionL1Q5[3].checked) {
        correct = correct + 1;
        insertionSortL1.InsertionL1Q5Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL1.InsertionL1Q5Ans.value = "The correct answer is D. ";
        incorrect = incorrect + 1;
    }

    var q1 = document.getElementById("answerExplanationL1Q1");
    var q2 = document.getElementById("answerExplanationL1Q2");
    var q3 = document.getElementById("answerExplanationL1Q3");
    var q5 = document.getElementById("answerExplanationL1Q5");


    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";
    q5.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    insertionSortL1.InsertionL1ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 1);
}

function clearFormInsertionSortL1() {
    var q1 = document.getElementById("answerExplanationL1Q1");
    var q2 = document.getElementById("answerExplanationL1Q2");
    var q3 = document.getElementById("answerExplanationL1Q3");
    var q5 = document.getElementById("answerExplanationL1Q5");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q5.style.display = "none";
}


function InsertionSortCheckL2() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (insertionSortL2.InsertionL2Q1[1].checked) {
        correct = correct + 1;
        insertionSortL2.InsertionL2Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL2.InsertionL2Q1Ans.value = "The correct answer is B. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (insertionSortL2.InsertionL2Q2[3].checked) {
        correct = correct + 1;
        insertionSortL2.InsertionL2Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL2.InsertionL2Q2Ans.value = "The correct answer is D. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (insertionSortL2.InsertionL2Q3[0].checked) {
        correct = correct + 1;
        insertionSortL2.InsertionL2Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL2.InsertionL2Q3Ans.value = "The correct answer is True. ";
        incorrect = incorrect + 1;
    }
    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    insertionSortL2.InsertionL2ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 2);


}

function clearFormInsertionSortL2() {
    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";


}

function InsertionSortCheckL3() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (insertionSortL3.InsertionL3Q1[0].checked) {
        correct = correct + 1;
        insertionSortL3.InsertionL3Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL3.InsertionL3Q1Ans.value = "The correct answer is true. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (insertionSortL3.InsertionL3Q2.value == "25" || insertionSortL3.InsertionL3Q2.value == "25 rupees") {
        correct = correct + 1;
        insertionSortL3.InsertionL3Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL3.InsertionL3Q2Ans.value = "The correct answer is 25 rupees. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (insertionSortL3.InsertionL3Q3[1].checked) {
        correct = correct + 1;
        insertionSortL3.InsertionL3Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        insertionSortL3.InsertionL3Q3Ans.value = "The correct answer is B. ";
        incorrect = incorrect + 1;
    }

    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    insertionSortL3.InsertionL3ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 3);

}

function clearFormInsertionSortL3() {

    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";

}