describe("armor selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple armors available", () => {
      cy.get(".hero-armor-wrapper .hero-item").click();

      cy.get(".hero-armor-wrapper li").should("have.length", 10);
      cy.get(".hero-armor-wrapper li")
        .first()
        .should("have.text", "Connottieri's Breastplate Cloth | Leather | Plate")
        .next()
        .should("have.text", "Improved Arming Doublet Cloth | Leather")
        .next()
        .should("have.text", "Improved Cape of the Magi Cloth")
        .next()
        .should("have.text", "Masterpiece Armor Cloth | Leather | Plate")
        .next()
        .should("have.text", "Outlander Black Plate Cloth | Plate");
    });
  it("can set and remove armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Connottieri's Breastplate");

    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().next().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Improved Arming Doublet");

    cy.reload();

    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Improved Arming Doublet");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Connottieri's Breastplate");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Connottieri's Breastplate");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").type("Scholar");
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Scholar's Robe");
  });
  it("can clear armor", () => {
    cy.get(".hero-armor-wrapper .hero-item").click();
    cy.get(".hero-armor-wrapper li").first().click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Connottieri's Breastplate");

    cy.get(".hero-armor-wrapper .hero-item-clear").click();
    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");
  });
});
