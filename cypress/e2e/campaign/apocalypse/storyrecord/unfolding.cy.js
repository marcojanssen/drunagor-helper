describe("unfolding selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple unfoldings available", () => {
      cy.get("#story-record-unfolding").click();

      cy.get("ul#story-record-unfolding-options li").should("have.length", 25);
      cy.get("ul#story-record-unfolding-options li")
        .first()
        .should("have.text", "A Broken Man")
        .next()
        .should("have.text", "A Crown with no Jewels")
        .next()
        .should("have.text", "A Hero Restored")
        .next()
        .should("have.text", "Carmilla's Goodbye")
        .next()
        .should("have.text", "Comprimising");
    });
  it("can set, remove, stores and reset follower", () => {
    cy.get("#story-record-unfolding").click();
    cy.get("ul#story-record-unfolding-options li").first().click();

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-display > li").contains("A Broken Man");

    cy.get("#story-record-unfolding").click();
    cy.get("ul#story-record-unfolding-options li").first().next().click();

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-display > li").contains("A Broken Man");
    cy.get("#story-record-unfolding-display > li").contains("A Crown with no Jewels");

    cy.get("#story-record-unfolding").click();
    cy.get("ul#story-record-unfolding-options li").first().click();

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-display > li").contains("A Crown with no Jewels");

    cy.reload();

    cy.get("#story-record-unfolding-display > li").contains("A Crown with no Jewels");
  });
  it("can search for an follower", () => {
    cy.get("#story-record-unfolding").type("Redemption");
    cy.get("ul#story-record-unfolding-options li").first().click();

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-display > li").contains("Luccanor's Redemption");

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-clear").click();
    cy.get("#story-record-unfolding").type("Uniting");
    cy.get("ul#story-record-unfolding-options li").first().click();

    cy.get("#story-record-unfolding-display").click();
    cy.get("#story-record-unfolding-display > li").contains("The Bonds Uniting Us");
  });
});
