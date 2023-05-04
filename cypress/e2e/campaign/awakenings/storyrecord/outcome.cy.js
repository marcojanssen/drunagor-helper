describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-awakenings").click();
  }),
    it("has multiple outcomes available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#story-record-outcome").click();

      cy.get("ul#story-record-outcome-options li").should("have.length", 16);
      cy.get("ul#story-record-outcome-options li")
        .first()
        .should("have.text", "Ancient Book")
        .next()
        .should("have.text", "Counting Kittens")
        .next()
        .should("have.text", "Defender's Fate")
        .next()
        .should("have.text", "Drinking Pal")
        .next()
        .should("have.text", "Entangled");
    });
  it("can set, remove, stores and reset outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Ancient Book");

    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().next().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Ancient Book");
    cy.get("#story-record-outcome-display > li").contains("Counting Kittens");

    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Counting Kittens");

    cy.reload();

    cy.get("#story-record-outcome-display > li").contains("Counting Kittens");
  });
  it("can search for an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#story-record-outcome").type("Promised Reward");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Promised Reward");

    cy.get("#story-record-outcome").clear();
    cy.get("#story-record-outcome").type("Threats or Treats");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-clear").click();
    cy.get("#story-record-outcome").type("Farewell");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Farewell");
  });  
});
