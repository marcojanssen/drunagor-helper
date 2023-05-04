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

      cy.get(".hero-weapon-wrapper li").should("have.length", 42);
      cy.get(".hero-weapon-wrapper li")
        .first()
        .should("have.text", "Amiran Crossbow Ranged")
        .next()
        .should("have.text", "Amiran Halberd Heavy | Light")
        .next()
        .should("have.text", "Amiran Royal Maul Light")
        .next()
        .should("have.text", "Battle Maul Light")
        .next()
        .should("have.text", "Blacksteel Blade Heavy");
    });
  it("can set and remove weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().next().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Halberd");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Halberd");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").type("Orcish Reaper");
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Orcish Reaper Blade");
  });
  it("can stash weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-weapon-wrapper .hero-item-stash").click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Amiran Crossbow");
  });
  it("can clear weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");

    cy.get(".hero-weapon-wrapper .hero-item-clear").click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
  });
});
