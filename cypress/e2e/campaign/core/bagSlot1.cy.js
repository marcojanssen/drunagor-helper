describe("bag item selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple items available", () => {
      cy.get(".hero-bag1-wrapper .hero-item").click();

      cy.get(".hero-bag1-wrapper li").should("have.length", 137);
      cy.get(".hero-bag1-wrapper li")
        .first()
        .should("have.text", "Amiran Crossbow ")
        .next()
        .should("have.text", "Amiran Halberd ")
        .next()
        .should("have.text", "Amiran Royal Maul ")
        .next()
        .should("have.text", "Amulet Of Power ")
        .next()
        .should("have.text", "Amulet Of Rewinding ");
    });
  it("can set and remove bag item", () => {
    cy.get(".hero-bag1-wrapper .hero-item").click();
    cy.get(".hero-bag1-wrapper li").first().click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-bag1-wrapper .hero-item").click();
    cy.get(".hero-bag1-wrapper li").first().next().click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Amiran Halberd");

    cy.reload();

    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Amiran Halberd");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an item", () => {
    cy.get(".hero-bag1-wrapper .hero-item").type("Heavy Th");
    cy.get(".hero-bag1-wrapper li").first().click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Heavy Thornmail");
  });
  it("can stash item", () => {
    cy.get(".hero-bag1-wrapper .hero-item").click();
    cy.get(".hero-bag1-wrapper li").first().click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-bag1-wrapper .hero-item-stash").click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");

    cy.reload();

    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");
  });
  it("can clear item", () => {
    cy.get(".hero-bag1-wrapper .hero-item").click();
    cy.get(".hero-bag1-wrapper li").first().click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-bag1-wrapper .hero-item-clear").click();
    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-bag1-wrapper .hero-item").should("have.value", "");
  });
});
