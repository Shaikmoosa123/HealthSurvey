class surveyPage {

    visit() {
        cy.log("Test Starting...");
        cy.visit(Cypress.env("google_url"));
        cy.log("Form opened");
    }

    enterName(name) {
        cy.get('input[type="text"]').type(name);
        cy.log(`Hi, I am ${name}`);
    }

    selectAge(age) {
        cy.get(`div[data-value="${age}"]`).click();
    }

    selectExerciseOption(option) {
        cy.get('div[role="listbox"]').click();
        cy.get(`div[data-value='${option}'][role='option']`).click();
    }

    submitForm() {
        cy.get('div[role="button"]').contains('Submit').click();
    }

    verifySubmission() {
        cy.url().should('include', 'formResponse');
        cy.contains('Your response has been recorded.');
        cy.log("Test Ended...")
    }
}

export default surveyPage;
