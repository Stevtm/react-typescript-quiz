import React from "react";
// component imports
import QuestionCard from "./components/QuestionCard";

const App = () => {
	const startQuiz = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>React Quiz</h1>
			<button className="start" onClick={startQuiz}>
				Start
			</button>
			<p className="score">Score:</p>
			<p>Loading Questions...</p>
			<QuestionCard></QuestionCard>
			<button className="next" onClick={nextQuestion}>
				Next Questions
			</button>
		</div>
	);
};

export default App;
