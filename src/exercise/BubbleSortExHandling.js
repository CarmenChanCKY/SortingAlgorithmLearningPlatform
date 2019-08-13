function passDatabase(correct, incorrect, level) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        }
    };

    xmlhttp.open("GET", "./exerciseHandling.php?type=Bubble" + "&correct=" + correct + "&incorrect=" + incorrect + "&level=" + level, true);
    xmlhttp.send();
}

// For bubble sort exercise
function BubbleSortL1Check() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (bubbleSortL1.BubbleL1Q1[2].checked) {
        correct = correct + 1;
        bubbleSortL1.BubbleL1Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL1.BubbleL1Q1Ans.value = "The correct answer is C. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (bubbleSortL1.BubbleL1Q2[2].checked) {
        correct = correct + 1;
        bubbleSortL1.BubbleL1Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL1.BubbleL1Q2Ans.value = "The correct answer is C. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (bubbleSortL1.BubbleL1Q3[1].checked) {
        correct = correct + 1;
        bubbleSortL1.BubbleL1Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL1.BubbleL1Q3Ans.value = "The correct answer is B. ";
        incorrect = incorrect + 1;
    }

    // Question 4
    if (bubbleSortL1.BubbleL1Q4[2].checked) {
        correct = correct + 1;
        bubbleSortL1.BubbleL1Q4Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL1.BubbleL1Q4Ans.value = "The correct answer is C. ";
        incorrect = incorrect + 1;
    }

    // Question 5
    if (document.getElementById("BubbleL1Q51").checked && document.getElementById("BubbleL1Q52").checked && (document.getElementById("BubbleL1Q53").checked || document.getElementById("BubbleL1Q54").checked)) {
        bubbleSortL1.BubbleL1Q5Ans.value = "The correct answer is A and B.";
        incorrect = incorrect + 2;
    } else if (document.getElementById("BubbleL1Q51").checked && document.getElementById("BubbleL1Q52").checked) {
        correct = correct + 2;
        bubbleSortL1.BubbleL1Q5Ans.value = "Correct! You get 2 marks! ";
    } else if (document.getElementById("BubbleL1Q51").checked || document.getElementById("BubbleL1Q52").checked) {
        correct = correct + 1;
        incorrect = incorrect + 1;
        bubbleSortL1.BubbleL1Q5Ans.value = "The correct answer is A and B. You get 1 mark!";
    } else {
        incorrect = incorrect + 2;
        bubbleSortL1.BubbleL1Q5Ans.value = "The correct answer is A and B.";
    }

    document.getElementById("answerExplanationL1Q1").style.display = "block";
    document.getElementById("answerExplanationL1Q2").style.display = "block";
    document.getElementById("answerExplanationL1Q3").style.display = "block";
    document.getElementById("answerExplanationL1Q5").style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    bubbleSortL1.BubbleL1ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 1);

}




function clearFormBubbleSortL1() {

    document.getElementById("answerExplanationL1Q1").style.display = "none";
    document.getElementById("answerExplanationL1Q2").style.display = "none";
    document.getElementById("answerExplanationL1Q3").style.display = "none";
    document.getElementById("answerExplanationL1Q5").style.display = "none";
}

function BubbleSortL2Check() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (bubbleSortL2.BubbleL2Q1.value == "10") {
        correct = correct + 1;
        bubbleSortL2.BubbleL2Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL2.BubbleL2Q1Ans.value = "The correct answer is 10. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (bubbleSortL2.BubbleL2Q2[2].checked) {
        correct = correct + 1;
        bubbleSortL2.BubbleL2Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL2.BubbleL2Q2Ans.value = "The correct answer is C. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (bubbleSortL2.BubbleL2Q3[0].checked) {
        correct = correct + 1;
        bubbleSortL2.BubbleL2Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL2.BubbleL2Q3Ans.value = "The correct answer is A. ";
        incorrect = incorrect + 1;
    }

    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    bubbleSortL2.BubbleL2ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 2);

}

function clearFormBubbleSortL2() {
    var q1 = document.getElementById("answerExplanationL2Q1");
    var q2 = document.getElementById("answerExplanationL2Q2");
    var q3 = document.getElementById("answerExplanationL2Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";

}

function BubbleSortL3Check() {
    var correct = 0;
    var incorrect = 0;

    // Question 1
    if (bubbleSortL3.BubbleL3Q1[3].checked) {
        correct = correct + 1;
        bubbleSortL3.BubbleL3Q1Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL3.BubbleL3Q1Ans.value = "The correct answer is D. ";
        incorrect = incorrect + 1;
    }

    // Question 2
    if (bubbleSortL3.BubbleL3Q2.value == "10") {
        correct = correct + 1;
        bubbleSortL3.BubbleL3Q2Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL3.BubbleL3Q2Ans.value = "The correct answer is 10. ";
        incorrect = incorrect + 1;
    }

    // Question 3
    if (bubbleSortL3.BubbleL3Q3[0].checked) {
        correct = correct + 1;
        bubbleSortL3.BubbleL3Q3Ans.value = "Correct! You get 1 mark! ";
    } else {
        bubbleSortL3.BubbleL3Q3Ans.value = "The correct answer is A. ";
        incorrect = incorrect + 1;
    }

    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";

    alert("Congraduation! You get " + correct + " marks!");

    bubbleSortL3.BubbleL3ShowScore.value = "Your score: " + correct;
    passDatabase(correct, incorrect, 3);
}

function clearFormBubbleSortL3() {

    var q1 = document.getElementById("answerExplanationL3Q1");
    var q2 = document.getElementById("answerExplanationL3Q2");
    var q3 = document.getElementById("answerExplanationL3Q3");

    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
}