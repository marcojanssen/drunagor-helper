describe("weapon selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has multiple weapons available", () => {
      cy.get(".hero-weapon-wrapper .hero-item").click();

      cy.get(".hero-weapon-wrapper li").should("have.length", 8);
      cy.get(".hero-weapon-wrapper li")
        .first()
        .should("have.text", "Counselor's Staff Implement")
        .next()
        .should("have.text", "Empyrean Bowstaff Implement | Ranged")
        .next()
        .should("have.text", "Improved Arcannon Ranged | Implement")
        .next()
        .should("have.text", "Improved Royal Staff Implement")
        .next()
        .should("have.text", "Standard Arcannon Ranged | Implement");
    });
  it("can set and remove weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Counselor's Staff");

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().next().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Empyrean Bowstaff");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Empyrean Bowstaff");

    cy.get("#filter-proficiencies").uncheck();

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Axe of the Steppes");

    cy.get("#filter-proficiencies").check();

    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Counselor's Staff");

    cy.go("back");
    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for a weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").type("ult");
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Ultimate Arcannon");
  });
  it("can clear weapon", () => {
    cy.get(".hero-weapon-wrapper .hero-item").click();
    cy.get(".hero-weapon-wrapper li").first().click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Counselor's Staff");

    cy.get(".hero-weapon-wrapper .hero-item-clear").click();
    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");

    cy.reload();

    cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
  });
});
