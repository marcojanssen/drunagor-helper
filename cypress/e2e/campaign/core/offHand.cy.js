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

      cy.get(".hero-offhand-wrapper li").should("have.length", 12);
      cy.get(".hero-offhand-wrapper li")
        .first()
        .should("have.text", "Dragonbone Wand Off Hand Weapon | Relic")
        .next()
        .should("have.text", "Dragonclaw Shield Relic | Shield")
        .next()
        .should("have.text", "Greater Mystical Symbol Relic")
        .next()
        .should("have.text", "Greater Symbol Of Light Relic")
        .next()
        .should("have.text", "Lesser Mystical Symbol Relic");
    });
  it("can set and remove off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonbone Wand");

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().next().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonclaw Shield");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonclaw Shield");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Deadly Backstabber");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonbone Wand");

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
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonbone Wand");

    cy.get(".hero-offhand-wrapper .hero-item-stash").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Dragonbone Wand");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Dragonbone Wand");
  });
  it("can clear off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Dragonbone Wand");

    cy.get(".hero-offhand-wrapper .hero-item-clear").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
  });
});
