describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple statuses available", () => {
      cy.get("#story-record-status").click();

      cy.get("ul#story-record-status-options li").should("have.length", 69);
      cy.get("ul#story-record-status-options li")
        .first()
        .should("have.text", "A Broken Man")
        .next()
        .should("have.text", "A Hard Bargain")
        .next()
        .should("have.text", "Afterlife Mysteries")
        .next()
        .should("have.text", "Aftermath")
        .next()
        .should("have.text", "Aggressive Negotiations")
        .next()
        .should("have.text", "Anchor Locked");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("A Broken Man");

    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().next().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("A Broken Man");
    cy.get("#story-record-status-display > li").contains("A Hard Bargain");

    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("A Hard Bargain");

    cy.reload();

    cy.get("#story-record-status-display > li").contains("A Hard Bargain");
  });
  it("can search for an status", () => {
    cy.get("#story-record-status").type("Entrepreneur");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Angered Entrepreneur");

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-clear").click();
    cy.get("#story-record-status").type("Herosplaining");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display > li").contains("Herosplaining");
  });
  it("displays the effect of an status", () => {
    cy.get("#story-record-status").type("It Takes Two");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("It Takes Two");
    cy.get("#story-record-status-display > li span").contains(
      "The Cohort Robin Rising activates two times during each of his turns."
    );

    cy.get("#story-record-status").type("Umbralian Knight");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Umbralian Knight");
    cy.get("#story-record-status-display > li span").contains(
      "Whenever a Hero defeats a Dunedancer, they gain either FOCUS 2 or CLEANSE 2."
    );
  });
});
