describe("variant selection", () => {
  beforeEach(() => {
    cy.visit("./configuration");
  }),
    it("displays all variants by default", () => {
      cy.get("#configuration-variant label").should("have.length", 3);
      cy.get("#configuration-variant label")
        .first()
        .should("have.text", "Standard")
        .next()
        .should("have.text", "Alternate")
        .next()
        .should("have.text", "Complex (A / B)");
    });

  it("has standard selected by default", () => {
    cy.get('#configuration-variant input[id="standard"]').should("be.checked");
  });

  it("stores the state and resets to default", () => {
    cy.get('#configuration-variant input[id="complex"]').check();
    cy.reload();
    cy.get('#configuration-variant input[id="standard"]').should("be.checked");
    cy.get('#configuration-variant input[id="complex"]').should("be.checked");
    cy.clearLocalStorage();
    cy.reload();
    cy.get('#configuration-variant input[id="standard"]').should("be.checked");
    cy.get('#configuration-variant input[id="complex"]').should("not.be.checked");
  });
});
