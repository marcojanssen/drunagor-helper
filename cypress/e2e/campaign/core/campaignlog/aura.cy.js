describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();
  }),
    it("has multiple auras available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();
      cy.get("#campaign-log-aura").click();

      cy.get("ul#campaign-log-aura-options li").should("have.length", 21);
      cy.get("ul#campaign-log-aura-options li")
        .first()
        .should("have.text", "Blessing of good fortune")
        .next()
        .should("have.text", "Blessing of the guardian")
        .next()
        .should("have.text", "Bloodlust")
        .next()
        .should("have.text", "Bonding")
        .next()
        .should("have.text", "Boon of empathy");
    });
  it("can set and remove aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also recall 1 AC."
    );

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().next().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain SHIELD 2."
    );
    cy.reload();
    cy.get("#campaign-log-aura-effect").contains(
      "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain SHIELD 2."
    );

    cy.get("#campaign-log-aura-clear").click();

    cy.get("#campaign-log-aura-effect").should("not.exist");
    cy.reload();
    cy.get("#campaign-log-aura-effect").should("not.exist");
  });
  it("can search for an aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").type("Well meaning");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever you use a CLEANSE effect on any Hero, that Hero may also Recall up to one Action Cube."
    );

    cy.get("#campaign-log-aura").clear();
    cy.get("#campaign-log-aura").type("Spellshock");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-clear").click();
    cy.get("#campaign-log-aura").type("Hellbent");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever any Hero scores a Critical Hit, the attack gains +1 DMG (do not double it due to the critical) per Curse Cube that Hero is holding."
    );
  });
});
