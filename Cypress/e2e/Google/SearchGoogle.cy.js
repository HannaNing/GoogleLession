describe("TODO App > ", () => {
    beforeEach (() => {
        cy.visit("https://www.google.com/")
    })
    it("Input keyword and enter", () => {
        cy.get('.gLFyf').should('be.empty').type('BTS{enter}');
        cy.wait(5000);
        cy.get('div[data-hveid=\'CDcQAA\'] div[role=\'heading\']').should('be.BTS')
    })
});