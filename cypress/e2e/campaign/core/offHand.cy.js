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

      cy.get(".hero-offhand-wrapper li").should("have.length", 9);
      cy.get(".hero-offhand-wrapper li")
        .first()
        .should("have.text", "Greater Mystical Symbol Relic")
        .next()
        .should("have.text", "Greater Symbol Of Light Relic")
        .next()
        .should("have.text", "Lesser Mystical Symbol Relic")
        .next()
        .should("have.text", "Lesser Symbol Of Light Relic")
        .next()
        .should("have.text", "Mystical Symbol Relic");
    });
  it("can set and remove off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Mystical Symbol");

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().next().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Symbol Of Light");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Symbol Of Light");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deadly Backstabber");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Mystical Symbol");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").type("Sigil");
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Sigil Of Honor");
  });
  it("can stash off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Mystical Symbol");

    cy.get(".hero-offhand-wrapper .hero-item-stash").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Greater Mystical Symbol");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Greater Mystical Symbol");
  });
  it("can clear off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Greater Mystical Symbol");

    cy.get(".hero-offhand-wrapper .hero-item-clear").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
  });
});
