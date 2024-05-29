describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple statuses available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#campaign-log-status").click();

      cy.get("ul#campaign-log-status-options li").should("have.length", 21);
      cy.get("ul#campaign-log-status-options li")
        .first()
        .should("have.text", "A Strange Rod")
        .next()
        .should("have.text", "Bloodlust")
        .next()
        .should("have.text", "Bully")
        .next()
        .should("have.text", "Chaotic Wheel")
        .next()
        .should("have.text", "Crystal Clear")
        .next()
        .should("have.text", "Disappointed");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A Strange Rod");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().next().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A Strange Rod");
    cy.get("#campaign-log-status-display > li").contains("Bloodlust");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Bloodlust");

    cy.reload();

    cy.get("#campaign-log-status-display > li").contains("Bloodlust");
  });
  it("can search for an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("Heartbroken");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Heartbroken");

    cy.get("#campaign-log-status").clear();
    cy.get("#campaign-log-status").type("Guess What");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-clear").click();
    cy.get("#campaign-log-status").type("Queen Slayer");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display > li").contains("Queen Slayer");
  });
  it("displays the effect of an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("Shielded Mind");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Shielded Mind");
    cy.get("#campaign-log-status-display > li span").contains(
      "You and every Hero within Range 1 of you are immune to INTIMIDATE. Also, whenever a Character tries to cast an INTIMIDATE effect against you or any other Hero within Range 1 of you, the target of that INTIMIDATE effect receives INSPIRE instead."
    );

    cy.get("#campaign-log-status").type("Exquisite Attunement");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Exquisite Attunement");
    cy.get("#campaign-log-status-display > li span").contains(
      'Whenever you take the “Tie-Breaker Special Rule“ Action, you gain both FOCUS 1 and CLEANSE 1 instead of choosing one of them.'
    );
  });
});
