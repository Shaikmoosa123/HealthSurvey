import surveyPage from "../support/SurveyPage";



describe('Health Survey Form Submission Test Suite', () => {
    const SurveyPage = new surveyPage();

    const jsonData = require('../fixtures/userData.json');

    jsonData.forEach(data => {
        it(`Health Survey Form Submission for ${data.name}`, () => {
            
            SurveyPage.visit();
            SurveyPage.enterName(data.name);
            SurveyPage.selectAge(data.age);
            SurveyPage.selectExerciseOption(data.exercise);
            SurveyPage.submitForm();
            SurveyPage.verifySubmission();
        });
    });
});


