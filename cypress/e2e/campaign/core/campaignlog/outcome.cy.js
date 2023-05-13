describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();
  }),
    it("has multiple outcomes available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#campaign-log-outcome").click();

      cy.get("ul#campaign-log-outcome-options li").should("have.length", 15);
      cy.get("ul#campaign-log-outcome-options li")
        .first()
        .should("have.text", "A courier's job")
        .next()
        .should("have.text", "Adamant")
        .next()
        .should("have.text", "A hideous act")
        .next()
        .should("have.text", "A lover's request")
        .next()
        .should("have.text", "Corrupted hero");
    });
  it("can set, remove, stores and reset outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("A courier's job");

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().next().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("A courier's job");
    cy.get("#campaign-log-outcome-display > li").contains("Adamant");

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Adamant");

    cy.reload();

    cy.get("#campaign-log-outcome-display > li").contains("Adamant");
  });
  it("can search for an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").type("Corrupted hero");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Corrupted hero");

    cy.get("#campaign-log-outcome").clear();
    cy.get("#campaign-log-outcome").type("Unbroken");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-clear").click();
    cy.get("#campaign-log-outcome").type("Lovebird reunited");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Lovebird reunited");
  });
  it("displays the effect of an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").type("Guardian's curse");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Guardian's curse");
    cy.get("#campaign-log-outcome-display > li span").contains(
      "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet."
    );

    cy.get("#campaign-log-outcome").type("Curse breaker");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();

    cy.get("#campaign-log-outcome-display > li").contains("Guardian's curse");
    cy.get("#campaign-log-outcome-display > li span").contains(
      "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet."
    );
    cy.get("#campaign-log-outcome-display > li").contains("Curse breaker");
  });
});
