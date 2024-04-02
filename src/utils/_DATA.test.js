import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion successfully", () => {
  it("should save a new question and return it with all expected fields populated", async () => {
    // Arrange
    const questionData = {
      optionOneText: "Option One Text",
      optionTwoText: "Option Two Text",
      author: "sarahedo",
    };

    // Act
    const savedQuestion = await _saveQuestion(questionData);
    console.log(savedQuestion);

    // Assert
    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion).toHaveProperty("timestamp");
    expect(savedQuestion).toHaveProperty("author", questionData.author);
    expect(savedQuestion).toHaveProperty("optionOne");
    expect(savedQuestion.optionOne).toHaveProperty("votes", []);
    expect(savedQuestion.optionOne).toHaveProperty(
      "text",
      questionData.optionOneText,
    );
    expect(savedQuestion).toHaveProperty("optionTwo");
    expect(savedQuestion.optionTwo).toHaveProperty("votes", []);
    expect(savedQuestion.optionTwo).toHaveProperty(
      "text",
      questionData.optionTwoText,
    );
  });

  it("should return an error if incorrect data is passed", async () => {
    // Arrange
    const incorrectQuestionData = {}; // Empty object without required fields

    // Act & Assert
    await expect(_saveQuestion(incorrectQuestionData)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author",
    );
  });

  // Additional tests for other incorrect data scenarios can be added here
});
describe("_saveQuestionAnswer", () => {
  it("should save the question answer and return it with all expected fields populated", async () => {
    // Arrange
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";

    // Act
    const savedData = await _saveQuestionAnswer({ authedUser, qid, answer });

    // Assert
    expect(savedData).toHaveProperty("users");
    expect(savedData).toHaveProperty("questions");

    expect(savedData.users).toHaveProperty(authedUser);
    expect(savedData.users[authedUser]).toHaveProperty("answers");
    expect(savedData.users[authedUser].answers).toHaveProperty(qid, answer);

    expect(savedData.questions).toHaveProperty(qid);
    expect(savedData.questions[qid]).toHaveProperty(answer);
    expect(savedData.questions[qid][answer]).toHaveProperty("votes");
    expect(savedData.questions[qid][answer].votes).toEqual([authedUser]);
  });
  it("should return an error if incorrect data is passed", async () => {
    // Arrange
    const incorrectData = {}; // Empty object without required fields

    // Act & Assert
    await expect(_saveQuestionAnswer(incorrectData)).rejects.toEqual(
      "Please provide authedUser, qid, and answer",
    );
  });
});
