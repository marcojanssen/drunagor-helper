describe("bag item selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple items available", () => {
      cy.get(".hero-bag2-wrapper .hero-item").click();

      cy.get(".hero-bag2-wrapper li").should("have.length", 108);
      cy.get(".hero-bag2-wrapper li")
        .first()
        .should("have.text", "Artisan's Tools (Veteran) ")
        .next()
        .should("have.text", "Scroll of Charm ")
        .next()
        .should("have.text", "Scroll of the Copy Cat ")
        .next()
        .should("have.text", "Scroll of Translocation ")
        .next()
        .should("have.text", "Treasure trove (Veteran) ");
    });
  it("can set and remove bag item", () => {
    cy.get(".hero-bag2-wrapper .hero-item").click();
    cy.get(".hero-bag2-wrapper li").first().click();
    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "Artisan's Tools (Veteran)");

    cy.get(".hero-bag2-wrapper .hero-item").click();
    cy.get(".hero-bag2-wrapper li").first().next().click();
    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "Scroll of Charm");

    cy.reload();

    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "Scroll of Charm");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an item", () => {
    cy.get(".hero-bag2-wrapper .hero-item").type("Vow Ke");
    cy.get(".hero-bag2-wrapper li").first().click();
    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "Vow Keeper");
  });
  it("can clear item", () => {
    cy.get(".hero-bag2-wrapper .hero-item").click();
    cy.get(".hero-bag2-wrapper li").first().click();
    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "Artisan's Tools (Veteran)");

    cy.get(".hero-bag2-wrapper .hero-item-clear").click();
    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-bag2-wrapper .hero-item").should("have.value", "");
  });
});
