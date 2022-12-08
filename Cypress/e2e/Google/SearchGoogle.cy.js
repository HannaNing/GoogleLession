describe("TODO App > ", () => {
    it("Check First Child", () => {
        cy.visit("https://www.google.com/");
        cy.get('.gLFyf').type('BTS{enter}');
        cy.wait(5000);
        cy.get("img[role='button']").click()
    })
});