describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple auras available", () => {
      cy.get("#party-add-hero").click();
      cy.get("div#party-add-heroes div").first().click();
      cy.get(".hero-overview").click();

      cy.get("#hero-aura").click();

      cy.get("ul#hero-aura-options li").should("have.length", 21);
      cy.get("ul#hero-aura-options li")
        .first()
        .should("have.text", "Blessing of good fortune")
        .next()
        .should("have.text", "Blessing of the guardian")
        .next()
        .should("have.text", "Bloodlust")
        .next()
        .should("have.text", "Bonding")
        .next()
        .should("have.text", "Boon of empathy");
    });
  it("can set and remove aura", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-aura").click();
    cy.get("ul#hero-aura-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Aura: Blessing of good fortune");

    cy.get(".hero-overview").click();
    cy.get("#hero-aura").click();
    cy.get("ul#hero-aura-options li").first().next().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Aura: Blessing of the guardian");
    cy.reload();
    cy.get(".hero-overview").contains("Aura: Blessing of the guardian");

    cy.get(".hero-overview").click();
    cy.get("#hero-aura-clear").click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("No aura, status or outcome");
    cy.reload();
    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an aura", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-aura").type("Well meaning");
    cy.get("ul#hero-aura-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Aura: Well meaning");

    cy.get(".hero-overview").click();

    cy.get("#hero-aura").clear();
    cy.get("#hero-aura").type("Spellshock");
    cy.get("ul#hero-aura-options li").first().click();

    cy.get("#hero-aura-clear").click();
    cy.get("#hero-aura").type("Hellbent");
    cy.get("ul#hero-aura-options li").first().click();

    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Aura: Hellbent");
  });
  it("displays the effect of an aura", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-aura").type("Bonding");
    cy.get("ul#hero-aura-options li").first().click();

    cy.get("#hero-aura-effect").contains("Whenever a Companion ends its turn adjacent to you, they gain SHIELD 4.");
  });
});
