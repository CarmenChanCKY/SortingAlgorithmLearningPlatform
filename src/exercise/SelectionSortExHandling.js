function passDatabase(correct, incorrect, level) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        }
    };

    xmlhttp.open("GET", "./exerciseHandling.php?type=Selection" + "&correct=" + correct + "&incorrect=" + incorrect + "&level=" + level, true);
    xmlhttp.send();
}

// For selection sort exercise
function SelectionSortCheckL1() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (selectionSortL1.SelectionL1Q1[1].checked) {
        correct = correct + 1;
        selectionSortL1.SelectionL1Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL1.SelectionL1Q1Ans.value = "The correct answer is B. ";
    }

    // Question 2
    if (selectionSortL1.SelectionL1Q2[3].checked) {
        correct = correct + 1;
        selectionSortL1.SelectionL1Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL1.SelectionL1Q2Ans.value = "The correct answer is D. ";
    }

    // Question 3
    if (document.getElementById("SelectionL1Q32").checked && document.getElementById("SelectionL1Q34").checked && (document.getElementById("SelectionL1Q31").checked || document.getElementById("SelectionL1Q33").checked)) {
        selectionSortL1.SelectionL1Q3Ans.value = "The correct answer is B and D.";
        incorrect = incorrect + 2;
    } else if (document.getElementById("SelectionL1Q32").checked && document.getElementById("SelectionL1Q34").checked) {
        correct = correct + 2;
        selectionSortL1.SelectionL1Q3Ans.value = "Correct! You get 2 marks! ";
    } else if (document.getElementById("SelectionL1Q32").checked || document.getElementById("SelectionL1Q34").checked) {
        correct = correct + 1;
        incorrect = incorrect + 1;
        selectionSortL1.SelectionL1Q3Ans.value = "The correct answer is B and D. You get 1 mark!";
    } else {
        incorrect = incorrect + 2;
        selectionSortL1.SelectionL1Q3Ans.value = "The correct answer is B and D.";
    }

    // Question4
    if (selectionSortL1.SelectionL1Q4[1].checked) {
        correct = correct + 1;
        selectionSortL1.SelectionL1Q4Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL1.SelectionL1Q4Ans.value = "The correct answer is B. ";
    }

    // Question 5
    if (selectionSortL1.SelectionL1Q5[2].checked) {
        correct = correct + 1;
        selectionSortL1.SelectionL1Q5Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL1.SelectionL1Q5Ans.value = "The correct answer is C. ";
    }

    var q1 = document.getElementById("answerExplanationL1Q1");
    var q2 = document.getElementById("answerExplanationL1Q2");
    var q3 = document.getElementById("answerExplanationL1Q3");
    var q4 = document.getElementById("answerExplanationL1Q4");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";
    q4.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    selectionSortL1.SelectionL1ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 1);
}

function clearFormSelectionSortL1() {
    var q1 = document.getElementById("answerExplanationL1Q1");
    var q2 = document.getElementById("answerExplanationL1Q2");
    var q3 = document.getElementById("answerExplanationL1Q3");
    var q4 = document.getElementById("answerExplanationL1Q4");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
}

function SelectionSortCheckL2() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (selectionSortL2.SelectionL2Q1.value == "3") {
        correct = correct + 1;
        selectionSortL2.SelectionL2Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        selectionSortL2.SelectionL2Q1Ans.value = "The correct answer is 3. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (selectionSortL2.SelectionL2Q2[2].checked) {
        correct = correct + 1;
        selectionSortL2.SelectionL2Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL2.SelectionL2Q2Ans.value = "The correct answer is C. ";
    }

    // Question 3
    if (selectionSortL2.SelectionL2Q3[3].checked) {
        correct = correct + 1;
        selectionSortL2.SelectionL2Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL2.SelectionL2Q3Ans.value = "The correct answer is D. ";
    }

    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");


    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    selectionSortL2.SelectionL2ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 2);

}

function clearFormSelectionSortL2() {
    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";

}

function SelectionSortCheckL3() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (selectionSortL3.SelectionL3Q1[1].checked) {
        correct = correct + 1;
        selectionSortL3.SelectionL3Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL3.SelectionL3Q1Ans.value = "The correct answer is B. ";
    }

    // Question 2
    if (selectionSortL3.SelectionL3Q2[1].checked) {
        correct = correct + 1;
        selectionSortL3.SelectionL3Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        incorrect = incorrect + 1;
        selectionSortL3.SelectionL3Q2Ans.value = "The correct answer is B. ";
    }

    // Question 3
    if (selectionSortL3.SelectionL3Q3.value == "4") {
        correct = correct + 1;
        bubbleSortL3.SelectionL3Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        selectionSortL3.SelectionL3Q3Ans.value = "The correct answer is 4. ";
        incorrect = incorrect + 1;
    }

    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    selectionSortL3.SelectionL3ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 3);
}

function clearFormSelectionSortL3() {
    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
}