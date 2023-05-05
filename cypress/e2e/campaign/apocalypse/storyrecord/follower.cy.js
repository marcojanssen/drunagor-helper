describe("follower selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple followers available", () => {
      cy.get("#story-record-follower").click();

      cy.get("ul#story-record-follower-options li").should("have.length", 5);
      cy.get("ul#story-record-follower-options li")
        .first()
        .should("have.text", "Amsterd deHanse")
        .next()
        .should("have.text", "Carmilla Reinard")
        .next()
        .should("have.text", "Condottieri DaViggo")
        .next()
        .should("have.text", "Dunedancer Khadija")
        .next()
        .should("have.text", "Robin Rising");
    });
  it("can set, remove, stores and reset follower", () => {
    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Amsterd deHanse");

    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().next().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Amsterd deHanse");
    cy.get("#story-record-follower-display > li").contains("Carmilla Reinard");

    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Carmilla Reinard");

    cy.reload();

    cy.get("#story-record-follower-display > li").contains("Carmilla Reinard");
  });
  it("can search for an follower", () => {
    cy.get("#story-record-follower").type("Khadija");
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Dunedancer Khadija");

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-clear").click();
    cy.get("#story-record-follower").type("Rising");
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Robin Rising");
  });
});
