describe("off hand selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple off hands available", () => {
      cy.get(".hero-offhand-wrapper .hero-item").click();

      cy.get(".hero-offhand-wrapper li").should("have.length", 11);
      cy.get(".hero-offhand-wrapper li")
        .first()
        .should("have.text", "Commodore's Shield Relic | Shield")
        .next()
        .should("have.text", "Draconian War-Gauntlet Off Hand Weapon | Relic | Shield")
        .next()
        .should("have.text", "Emerald Claw-Gauntlet Relic | Shield")
        .next()
        .should("have.text", "Improved Astral Shard Relic")
        .next()
        .should("have.text", "Kraken Slayer Off Hand Weapon | Relic");
    });
  it("can set and remove off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Commodore's Shield");

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().next().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Draconian War-Gauntlet");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Draconian War-Gauntlet");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Carmilla's Kiss");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Commodore's Shield");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").type("the Prince");
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Rod of the Prince");
  });
  it("can clear off hand", () => {
    cy.get(".hero-offhand-wrapper .hero-item").click();
    cy.get(".hero-offhand-wrapper li").first().click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "Commodore's Shield");

    cy.get(".hero-offhand-wrapper .hero-item-clear").click();
    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-offhand-wrapper .hero-item").should("have.value", "");
  });
});
