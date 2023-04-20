describe("campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can start a campaign", () => {
      cy.get("#campaign-new").click();
      cy.get("#campaign-core").click();
      cy.get("#campaign-add-hero").should("be.visible");
    });

  it("can remove a campaign", () => {
    cy.get("#campaigns a").should("have.length", 0);
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.visit("./campaign");
    cy.get("#campaigns a").should("have.length", 1);

    cy.get("#campaigns").click();
    cy.get("#campaign-remove").click();
    cy.get(".bg-red-500").click();

    cy.get("#campaigns a").should("have.length", 0);
  });
});
