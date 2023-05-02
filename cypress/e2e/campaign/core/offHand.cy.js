describe("off hand selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple off hands available", () => {
      cy.get(".hero-offhand-wrapper .hero-item").click();

      cy.get(".hero-offhand-wrapper li").should("have.length", 25);
      cy.get(".hero-offhand-wrapper li")
        .first()
        .should("have.text", "Deadly Backstabber Off Hand Weapon")
        .next()
        .should("have.text", "Deft Stilleto Off Hand Weapon")
        .next()
        .should("have.text", "Dreamcrafted Buckler Off Hand Weapon | Shield")
        .next()
        .should("have.text", "Dueling Dagger Off Hand Weapon")
        .next()
        .should("have.text", "Empowered Pact Blade Off Hand Weapon");
    });
  it("can set and remove off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deadly Backstabber");

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().next().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deft Stilleto");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deft Stilleto");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").type("Undermo");
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Undermountain Scabbard");
  });
  it("can stash off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deadly Backstabber");

    cy.get(".hero-offhand-wrapper .hero-item-stash").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Deadly Backstabber");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Deadly Backstabber");
  });
  it("can clear off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deadly Backstabber");

    cy.get(".hero-offhand-wrapper .hero-item-clear").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
  });
});
