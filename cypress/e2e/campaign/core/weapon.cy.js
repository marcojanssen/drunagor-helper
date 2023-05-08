describe("weapon selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple weapons available", () => {
      cy.get(".hero-weapon-wrapper .hero-item").click();

      cy.get(".hero-weapon-wrapper li").should("have.length", 15);
      cy.get(".hero-weapon-wrapper li")
        .first()
        .should("have.text", "Dreampiercer Bow Implement | Ranged")
        .next()
        .should("have.text", "Enchanted Crossbow (Cosmic Gem) Ranged | Implement")
        .next()
        .should("have.text", "Enchanted Crossbow (Socketed) Ranged | Implement")
        .next()
        .should("have.text", "Runecarved Blade Light | Implement")
        .next()
        .should("have.text", "Staff Of Gravity Implement");
    });
  it("can set and remove weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().next().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Enchanted Crossbow (Cosmic Gem)");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Enchanted Crossbow (Cosmic Gem)");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").type("Runecarved");
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Runecarved Blade");
  });
  it("can stash weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

    cy.get(".hero-weapon-wrapper .hero-item-stash").click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Dreampiercer Bow");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Dreampiercer Bow");
  });
  it("can clear weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

    cy.get(".hero-weapon-wrapper .hero-item-clear").click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
  });
});
