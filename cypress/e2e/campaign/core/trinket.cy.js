describe("trinket selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple trinkets available", () => {
      cy.get(".hero-trinket-wrapper .hero-item").click();

      cy.get(".hero-trinket-wrapper li").should("have.length", 32);
      cy.get(".hero-trinket-wrapper li")
        .first()
        .should("have.text", "Amulet Of Power ")
        .next()
        .should("have.text", "Amulet Of Rewinding ")
        .next()
        .should("have.text", "Amulet Of The Copycat ")
        .next()
        .should("have.text", "Badge Of The Wardens ")
        .next()
        .should("have.text", "Blue Flame Torch ");
    });
  it("can set and remove trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Amulet Of Power");

    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().next().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Amulet Of Rewinding");

    cy.reload();

    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Amulet Of Rewinding");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").type("Good-Quality T");
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Good-Quality Torch");
  });
  it("can stash trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Amulet Of Power");

    cy.get(".hero-trinket-wrapper .hero-item-stash").click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Amulet Of Power");

    cy.reload();

    cy.get("#hero-stash-display > li").contains("Amulet Of Power");
  });
  it("can clear trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Amulet Of Power");

    cy.get(".hero-trinket-wrapper .hero-item-clear").click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "");
  });
});
