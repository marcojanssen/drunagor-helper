describe("follower selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-awakenings").click();
  }),
    it("has multiple followers available", () => {
      cy.get("#story-record-follower").click();

      cy.get("ul#story-record-follower-options li").should("have.length", 5);
      cy.get("ul#story-record-follower-options li")
        .first()
        .should("have.text", "Elros, the Assassin")
        .next()
        .should("have.text", "Lorelai, the Mage")
        .next()
        .should("have.text", "Maya, the Ranger")
        .next()
        .should("have.text", "Minerva")
        .next()
        .should("have.text", "Vorn, the Warrior");
    });
  it("can set, remove, stores and reset follower", () => {
    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Elros, the Assassin");

    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().next().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Elros, the Assassin");
    cy.get("#story-record-follower-display > li").contains("Lorelai, the Mage");

    cy.get("#story-record-follower").click();
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Lorelai, the Mage");

    cy.reload();

    cy.get("#story-record-follower-display > li").contains("Lorelai, the Mage");
  });
  it("can search for an follower", () => {
    cy.get("#story-record-follower").type("Minerva");
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Minerva");

    cy.get("#story-record-follower").clear();
    cy.get("#story-record-follower").type("Maya");
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-clear").click();
    cy.get("#story-record-follower").type("Vorn");
    cy.get("ul#story-record-follower-options li").first().click();

    cy.get("#story-record-follower-display").click();
    cy.get("#story-record-follower-display > li").contains("Vorn, the Warrior");
  });
});
