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

  it("can rename a campaign", () => {
    cy.get("#campaigns a").should("have.length", 0);
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-log-name").type("Test Campaign");

    cy.visit("./campaign");
    cy.get("#campaigns a").should("have.length", 1);
    cy.get("#campaigns a").should("contain", "Test Campaign");

    cy.get("#campaigns").click();
    cy.get("#campaign-log-name").clear();
    cy.get("#campaign-log-name").type("A New Name");

    cy.visit("./campaign");
    cy.get("#campaigns a").should("contain", "A New Name");
  });
});
