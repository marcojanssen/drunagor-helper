describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
    cy.get("#campaign-new").click();
    cy.get("#campaign-awakenings").click();
  }),
    it("has multiple statuses available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#campaign-log-status").click();

      cy.get("ul#campaign-log-status-options li").should("have.length", 9);
      cy.get("ul#campaign-log-status-options li")
        .first()
        .should("have.text", "Acquaintance")
        .next()
        .should("have.text", "Better Judgment")
        .next()
        .should("have.text", "Corrupt Power")
        .next()
        .should("have.text", "Haunted")
        .next()
        .should("have.text", "Lifesaver");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Acquaintance");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().next().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Acquaintance");
    cy.get("#campaign-log-status-display > li").contains("Better Judgment");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Better Judgment");

    cy.reload();

    cy.get("#campaign-log-status-display > li").contains("Better Judgment");
  });
  it("can search for an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("Power of Hate");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Power of Hate");

    cy.get("#campaign-log-status").clear();
    cy.get("#campaign-log-status").type("Soft Heart");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-clear").click();
    cy.get("#campaign-log-status").type("Haunted");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display > li").contains("Haunted");
  });
  it("displays the effect of an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("Corrupt Power");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Corrupt Power");
    cy.get("#campaign-log-status-display > li span").contains(
      "Heroes may never have fewer than 2 Curse Cubes in their boards and, once per turn, they may roll the d20 if they disliked a move’s outcome."
    );

    cy.get("#campaign-log-status").type("Better Judgment");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Better Judgment");
    cy.get("#campaign-log-status-display > li span").contains(
      "Once per turn, after you miss with a Weapon Attack made from a Skill, you may Recall the cube you just spent to use that Skill."
    );
  });
});
