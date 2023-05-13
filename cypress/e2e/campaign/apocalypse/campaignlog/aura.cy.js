describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple auras available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();
      cy.get("#campaign-log-aura").click();

      cy.get("ul#campaign-log-aura-options li").should("have.length", 13);
      cy.get("ul#campaign-log-aura-options li")
        .first()
        .should("have.text", "Brute Force")
        .next()
        .should("have.text", "Burden of Guilt")
        .next()
        .should("have.text", "Dried Tears")
        .next()
        .should("have.text", "Grievous Wound")
        .next()
        .should("have.text", "Helpful");
    });
  it("can set and remove aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains("As a Minor Action, you may Expend 1 AC to: SELF, EMPOWER.");

    cy.get("#campaign-log-aura").click();
    cy.get("ul#campaign-log-aura-options li").first().next().click();

    cy.get("#campaign-log-aura-effect").contains(
      "Whenever you take a Recall Action: You suffer INTIMIDATE 4. This INTIMIDATE overcomes any kind of immunity your Hero might have."
    );
    cy.reload();
    cy.get("#campaign-log-aura-effect").contains(
      "Whenever you take a Recall Action: You suffer INTIMIDATE 4. This INTIMIDATE overcomes any kind of immunity your Hero might have."
    );

    cy.get("#campaign-log-aura-clear").click();

    cy.get("#campaign-log-aura-effect").should("not.exist");
    cy.reload();
    cy.get("#campaign-log-aura-effect").should("not.exist");
  });
  it("can search for an aura", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-aura").type("Steadfast");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains("Whenever a Hero takes a Recall Action, that Hero gains FOCUS 2.");

    cy.get("#campaign-log-aura").clear();
    cy.get("#campaign-log-aura").type("Like Water");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-clear").click();
    cy.get("#campaign-log-aura").type("Dried Tears");
    cy.get("ul#campaign-log-aura-options li").first().click();

    cy.get("#campaign-log-aura-effect").contains("Whenever you take a Recall Action: You receive CLEANSE 1.");
  });
});
