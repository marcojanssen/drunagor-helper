describe("stash selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple items available", () => {
      cy.get(".hero-stash-wrapper #hero-stash").click();

      cy.get("ul#hero-stash-options li").should("have.length", 137);
      cy.get("ul#hero-stash-options li")
        .first()
        .should("have.text", "Amiran Crossbow")
        .next()
        .should("have.text", "Amiran Halberd")
        .next()
        .should("have.text", "Amiran Royal Maul")
        .next()
        .should("have.text", "Amulet Of Power")
        .next()
        .should("have.text", "Amulet Of Rewinding");
    });
  it("can set, remove, stores, and reset stash", () => {
    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");

    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().next().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");
    cy.get("#hero-stash-display > li").contains("Amiran Halberd");

    cy.get(".hero-stash-wrapper #hero-stash").click();
    cy.get("ul#hero-stash-options li").first().click();

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-display > li").contains("Amiran Halberd");

    cy.reload();

    cy.get("#hero-stash-display > li").contains("Amiran Halberd");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an item", () => {
    cy.get(".hero-stash-wrapper #hero-stash").type("Corruptor");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Corruptor Knife");

    cy.get(".hero-stash-wrapper #hero-stash").clear();

    cy.get(".hero-stash-wrapper #hero-stash").type("Hellscarian");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Hellscarian Short Bow");

    cy.get("#hero-stash-display").click();
    cy.get("#hero-stash-clear").click();

    cy.get("#hero-stash-display > li").should("have.length", 0);

    cy.get(".hero-stash-wrapper #hero-stash").type("Hellscarian");
    cy.get("ul#hero-stash-options li").first().click();
    cy.get("#hero-stash-display > li").contains("Hellscarian Short Bow");
    cy.reload();
    cy.get("#hero-stash-display > li").contains("Hellscarian Short Bow");
  });
});
