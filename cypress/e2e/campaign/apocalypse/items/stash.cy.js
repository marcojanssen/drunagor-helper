describe("stash selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple items available", () => {
      cy.get(".hero-stash-wrapper #hero-stash").click();

      cy.get("ul#hero-stash-options li").should("have.length", 108);
      cy.get("ul#hero-stash-options li")
        .first()
        .should("have.text", "Artisan's Tools (Veteran)")
        .next()
        .should("have.text", "Axe of the Steppes")
        .next()
        .should("have.text", "Carmilla's Kiss")
        .next()
        .should("have.text", "Chain of the Lost World")
        .next()
        .should("have.text", "Commodore's Shield");
    });
  it("can set, remove, stores, and reset stash", () => {
    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Artisan's Tools (Veteran)");

    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().next().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Artisan's Tools (Veteran)");
    cy.get("#hero-stash-display > li").contains("Axe of the Steppes");

    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Axe of the Steppes");

    cy.reload();

    cy.get("#hero-stash-display > li").contains("Axe of the Steppes");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an item", () => {
    cy.get(".hero-stash-wrapper #hero-stash").type("ge");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Ragged Doll");

    cy.get(".hero-stash-wrapper #hero-stash").clear();

    cy.get(".hero-stash-wrapper #hero-stash").type("tre");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Treasure trove (Veteran)");

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-clear").click();

    cy.get("#hero-stash-display > li").should("have.length", 0);

    cy.get(".hero-stash-wrapper #hero-stash").type("wel");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Jeweled Necklace");
    cy.reload();
    cy.get("#hero-stash-display > li").contains("Jeweled Necklace");
  });
});
