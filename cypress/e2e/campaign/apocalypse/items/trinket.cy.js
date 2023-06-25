describe("trinket selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple trinkets available", () => {
      cy.get(".hero-trinket-wrapper .hero-item").click();

      cy.get(".hero-trinket-wrapper li").should("have.length", 26);
      cy.get(".hero-trinket-wrapper li")
        .first()
        .should("have.text", "Chain of the Lost World ")
        .next()
        .should("have.text", "Eldritch Symbiot ")
        .next()
        .should("have.text", "Executioner's Helmet ")
        .next()
        .should("have.text", "Gilded Collar (Death) ")
        .next()
        .should("have.text", "Gilded Collar (Life) ");
    });
  it("can set and remove trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Chain of the Lost World");

    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().next().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Eldritch Symbiot");

    cy.reload();

    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Eldritch Symbiot");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").type("ultimate ti");
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Ultimate Titan Stompers");
  });
  it("can clear trinket", () => {
    cy.get(".hero-trinket-wrapper .hero-item").click();
    cy.get(".hero-trinket-wrapper li").first().click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "Chain of the Lost World");

    cy.get(".hero-trinket-wrapper .hero-item-clear").click();
    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-trinket-wrapper .hero-item").should("have.value", "");
  });
});
