describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple outcomes available", () => {
      cy.get("#party-add-hero").click();
      cy.get("div#party-add-heroes div").first().click();
      cy.get(".hero-overview").click();

      cy.get("#hero-outcome").click();

      cy.get("ul#hero-outcome-options li").should("have.length", 15);
      cy.get("ul#hero-outcome-options li")
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
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").click();
    cy.get("ul#hero-outcome-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: A courier's job");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").click();
    cy.get("ul#hero-outcome-options li").first().next().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: A courier's job, Adamant");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").click();
    cy.get("ul#hero-outcome-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: Adamant");

    cy.reload();

    cy.get(".hero-overview").contains("Outcome: Adamant");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an outcome", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").type("Corrupted hero");
    cy.get("ul#hero-outcome-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: Corrupted hero");

    cy.get(".hero-overview").click();

    cy.get("#hero-outcome").clear();
    cy.get("#hero-outcome").type("Unbroken");
    cy.get("ul#hero-outcome-options li").first().click();

    cy.get("#hero-outcome-clear").click();
    cy.get("#hero-outcome").type("Lovebird reunited");
    cy.get("ul#hero-outcome-options li").first().click();

    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: Lovebird reunited");
  });
  it("can clear outcome", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").type("Corrupted hero");
    cy.get("ul#hero-outcome-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: Corrupted hero");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome-clear").click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("No aura, status or outcome");
  });
  it("displays the effect of an outcome", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-outcome").type("Guardian's curse");
    cy.get("ul#hero-outcome-options li").first().click();

    cy.get("#hero-outcome-display > li").contains("Guardian's curse");
    cy.get("#hero-outcome-display > li span").contains(
      "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet."
    );

    cy.get("#hero-outcome").type("Curse breaker");
    cy.get("ul#hero-outcome-options li").first().click();

    cy.get("#hero-outcome-display > li").contains("Curse breaker");
  });
});
