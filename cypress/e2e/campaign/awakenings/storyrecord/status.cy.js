describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
    cy.get("#campaign-new").click();
    cy.get("#campaign-awakenings").click();
  }),
    it("has multiple statuses available", () => {
      cy.get("#story-record-status").click();

      cy.get("ul#story-record-status-options li").should("have.length", 25);
      cy.get("ul#story-record-status-options li")
        .first()
        .should("have.text", "Acquaintance")
        .next()
        .should("have.text", "Acquainted")
        .next()
        .should("have.text", "Bright Pupil")
        .next()
        .should("have.text", "Careful")
        .next()
        .should("have.text", "Christi's Aid");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Acquaintance");

    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().next().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Acquaintance");
    cy.get("#story-record-status-display > li").contains("Acquainted");

    cy.get("#story-record-status").click();
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Acquainted");

    cy.reload();

    cy.get("#story-record-status-display > li").contains("Acquainted");
  });
  it("can search for an status", () => {
    cy.get("#story-record-status").type("Sea Fighter");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Sea Fighter");

    cy.get("#story-record-status").clear();
    cy.get("#story-record-status").type("The X Mark the Spot");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-clear").click();
    cy.get("#story-record-status").type("Painful Memories");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display > li").contains("Painful Memories");
  });
  it("displays the effect of an status", () => {
    cy.get("#story-record-status").type("Suspicious");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Suspicious");
    cy.get("#story-record-status-display > li span").contains(
      "Whenever a Hero Search a Chest, they draw an additional card, choose one of those cards to keep, and put the other on the bottom of the Chest deck."
    );

    cy.get("#story-record-status").type("Turn Around");
    cy.get("ul#story-record-status-options li").first().click();

    cy.get("#story-record-status-display").click();
    cy.get("#story-record-status-display > li").contains("Turn Around");
    cy.get("#story-record-status-display > li span").contains(
      "Any Weapon Attack bonus to HIT your Attacks would have or receive becomes DMG bonus instead. Example: Vorn's Arching Swing reads: “CLEAVE 2, +3 HIT”; therefore, it becomes: “CLEAVE 2, +0 HIT, +3 DMG”. Any HIT bonus your Hero has from Equipment, Class Abilities, or Special Effects also turns into bonus damage."
    );
  });
});
