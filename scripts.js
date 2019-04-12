$(document).ready(function() {
  var countDownDate = new Date("April 15, 2019 01:00:00 GMT+00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#days").text(days.toString().padStart(2, 0));
    $("#hours").text(hours.toString().padStart(2, 0));
    $("#minutes").text(minutes.toString().padStart(2, 0));
    $("#seconds").text(seconds.toString().padStart(2, 0));
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
});


var app = angular.module('gotQuizApp', []);
app.controller('gotQuizCtrl', function($scope) {
	$scope.showQuiz = true;
	$scope.showQuizResult = false;
	$scope.pos = 0;
	$scope.selected = {};
	$scope.totalQuestions = totalQuestions;
  $scope.questions = questionsChoices;

  $scope.order = [];
	for (var i = 1; i <= totalQuestions; i++) {
		$scope.order.push(i);
	}
  for (var i = totalQuestions - 1; i >= 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
    var temp = $scope.order[i];
    $scope.order[i] = $scope.order[j];
    $scope.order[j] = temp;
	}
	for(var i = 1; i <= totalQuestions; i++) {
		$scope.selected[i] = "NA";
	}

	$scope.$watch('pos', function() {
		if ($scope.pos === 0) {
      $("#previous").css('visibility', 'hidden');
      $("#next").css('visibility', 'visible');
      $("#submit-quiz").css('visibility', 'hidden');
		}
		else if ($scope.pos === ($scope.totalQuestions - 1)) {
      $("#previous").css('visibility', 'visible');
      $("#next").css('visibility', 'hidden');
      $("#submit-quiz").css('visibility', 'visible');
		}
		else {
      $("#previous").css('visibility', 'visible');
      $("#next").css('visibility', 'visible');
      $("#submit-quiz").css('visibility', 'hidden');
		}
	});

	$scope.submitQuiz = function() {
		var userAnswers = $scope.selected;
		var quizResult = 0;
		var correct = {};
		var notAttempted = {};
		var wrong = {};
		for(var i=1; i <= totalQuestions; i++) {
			if (userAnswers[i] === "NA") {
				notAttempted[i] = userAnswers[i];
			}
			else if (answers[i] === userAnswers[i]) {
				quizResult++;
				correct[i] = userAnswers[i];
			}
			else {
				wrong[i] = userAnswers[i];
			}
		}
    $scope.solution = "";
    for(var i=1; i <= totalQuestions; i++) {
      $scope.solution += `Q. ${i} => ${questionsChoices[i].question}\r\n\r\n[A] ${questionsChoices[i].choices[0]}\r\n[B] ${questionsChoices[i].choices[1]}\r\n[C] ${questionsChoices[i].choices[2]}\r\n[D] ${questionsChoices[i].choices[3]}\r\n\r\nAnswer => ${answers[i]}\r\n\r\n\r\n`;
    }
		$scope.quizResult = quizResult;
		$scope.showQuiz = false;
		$scope.showQuizResult = true;
	}
});
