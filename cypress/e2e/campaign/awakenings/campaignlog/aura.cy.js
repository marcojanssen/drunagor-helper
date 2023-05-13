describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-awakenings").click();
  }),
    it("has multiple auras available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();
      cy.get("#campaign-log-aura").click();

      cy.get("ul#campaign-log-aura-options li").should("have.length", 32);
      cy.get("ul#campaign-log-aura-options li")
        .first()
        .should("have.text", "Ancient Spell")
        .next()
        .should("have.text", "Bastion")
        .next()
        .should("have.text", "Blessing of Prosperity")
        .next()
        .should("have.text", "Calm Mind")
        .next()
        .should("have.text", "City Hero");
    });
  it("can set and remove aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains("At the beginning of your turn, you gain SHIELD 1.");

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().next().click();

    cy.get("#campaign-log-aura-effect").contains("You can't be TRAMPLED by Vicious Maulers.");
    cy.reload();
    cy.get("#campaign-log-aura-effect").contains("You can't be TRAMPLED by Vicious Maulers.");

    cy.get("#campaign-log-aura-clear").click();

    cy.get("#campaign-log-aura-effect").should("not.exist");
    cy.reload();
    cy.get("#campaign-log-aura-effect").should("not.exist");
  });
  it("can search for an aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").type("Fighting Back");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever any Hero takes an Interruption or a Reaction to respond to an attack, the attacker takes 1 non-preventable damage."
    );

    cy.get("#campaign-log-aura").clear();
    cy.get("#campaign-log-aura").type("Lone Wolf");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-clear").click();
    cy.get("#campaign-log-aura").type("Sisters Bond");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever other Hero within Range 1 would suffer damage or receive a Curse Cube, you may suffer that damage or receive that Curse Cube on their place. If you do, you feel rewarded and gain an INSPIRATION token."
    );
  });
});
