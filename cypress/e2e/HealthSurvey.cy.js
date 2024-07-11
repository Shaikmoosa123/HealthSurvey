import surveyPage from "../support/SurveyPage";

const faker = require('faker');

describe('Survey Form Submission Test Suite', () => {
    const SurveyPage = new surveyPage();

    const jsonData = require('../fixtures/userData.json');

    jsonData.forEach(data => {
        it(`should submit the form successfully for ${data.age}`, () => {
            const randomName = faker.name.findName();
            SurveyPage.visit();
            SurveyPage.enterName(randomName);
            SurveyPage.selectAge(data.age);
            SurveyPage.selectExerciseOption(data.exercise);
            SurveyPage.submitForm();
            SurveyPage.verifySubmission();
        });
    });
});


