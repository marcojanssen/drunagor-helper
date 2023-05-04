describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple outcomes available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#campaign-log-outcome").click();

      cy.get("ul#campaign-log-outcome-options li").should("have.length", 2);
      cy.get("ul#campaign-log-outcome-options li")
        .first()
        .should("have.text", "Bitten")
        .next()
        .should("have.text", "Deep Wound");
    });
  it("can set, remove, stores and reset outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Bitten");

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().next().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Bitten");
    cy.get("#campaign-log-outcome-display > li").contains("Deep Wound");

    cy.get("#campaign-log-outcome").click();
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Deep Wound");

    cy.reload();

    cy.get("#campaign-log-outcome-display > li").contains("Deep Wound");
  });
  it("can search for an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").type("Deep");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Deep Wound");

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-clear").click();
    cy.get("#campaign-log-outcome").type("Bitten");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Bitten");
  });
  it("displays the effect of an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-outcome").type("Deep Wound");
    cy.get("ul#campaign-log-outcome-options li").first().click();

    cy.get("#campaign-log-outcome-display").click();
    cy.get("#campaign-log-outcome-display > li").contains("Deep Wound");
    cy.get("#campaign-log-outcome-display > li span").contains("You can hold one less Trauma Cube");
  });
});
