describe("armor selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple armors available", () => {
      cy.get(".hero-armor-wrapper .hero-item").click();

      cy.get(".hero-armor-wrapper li").should("have.length", 24);
      cy.get(".hero-armor-wrapper li")
        .first()
        .should("have.text", "Breastplate Plate")
        .next()
        .should("have.text", "Cloth Armor Cloth")
        .next()
        .should("have.text", "Displacement Cloak Cloth")
        .next()
        .should("have.text", "Dream Weaveplate Cloth | Plate")
        .next()
        .should("have.text", "Full Plate Armor Plate");
    });
  it("can set and remove armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");

    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().next().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Cloth Armor");

    cy.reload();

    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Cloth Armor");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").type("Heavy Th");
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Heavy Thornmail");
  });
  it("can stash armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");

    cy.get(".hero-armor-wrapper .hero-item-stash").click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Breastplate");

    cy.reload();

    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");
    cy.get("#hero-stash-display > li").contains("Breastplate");
  });
  it("can clear armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");

    cy.get(".hero-armor-wrapper .hero-item-clear").click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");
  });
});
