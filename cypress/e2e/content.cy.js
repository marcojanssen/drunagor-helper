describe("content selection", () => {
  beforeEach(() => {
    cy.visit("./configuration");
  }),
    it("displays all available monster content", () => {
      cy.get("#configuration-content-monster label").should("have.length", 10);
      cy.get("#configuration-content-monster label")
        .first()
        .should("have.text", "Core")
        .next()
        .should("have.text", "Spoils of War")
        .next()
        .should("have.text", "Monster Pack 1")
        .next()
        .should("have.text", "The Ruin of Luccanor")
        .next()
        .should("have.text", "The Shadow World")
        .next()
        .should("have.text", "Desert of Hellscar")
        .next()
        .should("have.text", "Rise of the Undead Dragon");
    });

  it("has core selected by default for monster content", () => {
    cy.clearLocalStorage();
    cy.get('#configuration-content-monster input[id="core"]').should("be.checked");
  });

  it("stores the monster configuration state and resets to default", () => {
    cy.get('#configuration-content-monster input[id="spoils-of-war"]').check();
    cy.get('#configuration-content-monster input[id="the-ruin-of-luccanor"]').check();
    cy.get('#configuration-content-monster input[id="desert-of-hellscar"]').check();
    cy.reload();
    cy.get('#configuration-content-monster input[id="core"]').should("be.checked");
    cy.get('#configuration-content-monster input[id="spoils-of-war"]').should("be.checked");
    cy.get('#configuration-content-monster input[id="the-ruin-of-luccanor"]').should("be.checked");
    cy.get('#configuration-content-monster input[id="desert-of-hellscar"]').should("be.checked");
  });

  it("is not allowed to deselect all monster content and will reset to previous selection", () => {
    cy.get('#configuration-content-monster input[id="core"]').uncheck();
    cy.reload();
    cy.get('#configuration-content-monster input[id="core"]').should("be.checked");
  });

  it("displays all available hero content", () => {
    cy.get("#configuration-content-hero label").should("have.length", 9);
    cy.get("#configuration-content-hero label")
      .first()
      .should("have.text", "Core")
      .next()
      .should("have.text", "Spoils of War")
      .next()
      .should("have.text", "Desert of Hellscar")
      .next()
      .should("have.text", "Rise of the Undead Dragon")
      .next()
      .should("have.text", "Handuriel")
      .next()
      .should("have.text", "Lordwrath");
  });

  it("has everything selected by default for hero content", () => {
    cy.clearLocalStorage();
    cy.get('#configuration-content-hero input[id="core"]').should("be.checked");
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').should("be.checked");
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').should("be.checked");
    cy.get('#configuration-content-hero input[id="rise-of-the-undead-dragon"]').should("be.checked");
    cy.get('#configuration-content-hero input[id="handuriel"]').should("be.checked");
    cy.get('#configuration-content-hero input[id="lordwrath"]').should("be.checked");
  });

  it("stores the hero configuration state and resets to default", () => {
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').uncheck();
    cy.get('#configuration-content-hero input[id="handuriel"]').uncheck();
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').uncheck();
    cy.reload();
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="handuriel"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').should("not.be.checked");
  });

  it("is not allowed to deselect all hero content and will reset to previous selection", () => {
    cy.get('#configuration-content-hero input[id="core"]').uncheck();
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').uncheck();
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').uncheck();
    cy.get('#configuration-content-hero input[id="rise-of-the-undead-dragon"]').uncheck();
    cy.get('#configuration-content-hero input[id="handuriel"]').uncheck();
    cy.get('#configuration-content-hero input[id="lordwrath"]').uncheck();
    cy.reload();
    cy.get('#configuration-content-hero input[id="core"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="rise-of-the-undead-dragon"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="handuriel"]').should("not.be.checked");
    cy.get('#configuration-content-hero input[id="lordwrath"]').should("be.checked");
  });
});
