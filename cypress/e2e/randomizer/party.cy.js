describe("party selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has all heroes", () => {
      cy.get("ul#multiselect-add-heroes-multiselect-options li").should("have.length", 24);
      cy.get("ul#multiselect-add-heroes-multiselect-options li")
        .first()
        .should("have.text", "> Random hero")
        .next()
        .should("have.text", "Arkhanos")
        .next()
        .should("have.text", "Barak")
        .next()
        .should("have.text", "Devron")
        .next()
        .should("have.text", "Drasek")
        .next()
        .should("have.text", "Duncan");
    });
  it("can add and remove a hero", () => {
    cy.get(".hero-image").should("not.exist");

    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();
    cy.get(".hero-image")
      .should("have.attr", "src")
      .should("match", /Arkhanos/g);

    cy.get("#multiselect-remove-heroes").click();
    cy.get("ul#multiselect-remove-heroes-multiselect-options li").eq(0).click();
    cy.get(".hero-image").should("not.exist");
  });
  it("can manage multiple heroes", () => {
    cy.get(".hero-image").should("not.exist");

    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should("match", /Arkhanos/g);

    cy.get("#multiselect-remove-heroes").click();
    cy.get("ul#multiselect-remove-heroes-multiselect-options li").eq(0).click();
    cy.get(".hero-image").should("have.length", 3);

    cy.get(".hero-image").first().should("have.attr", "src").should("match", /Barak/g);

    cy.get("#multiselect-remove-heroes").click();
    cy.get("ul#multiselect-remove-heroes-multiselect-options li").eq(0).click();
    cy.get(".hero-image").should("have.length", 2);

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should("match", /Devron/g);

    cy.get("#multiselect-remove-heroes").click();
    cy.get("ul#multiselect-remove-heroes-multiselect-options li").eq(0).click();
    cy.get(".hero-image").should("have.length", 1);

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should("match", /Drasek/g);

    cy.get("#multiselect-remove-heroes").click();
    cy.get("ul#multiselect-remove-heroes-multiselect-options li").eq(0).click();

    cy.get(".hero-image").should("not.exist");
  });

  it("stores the state and resets to default", () => {
    cy.get(".hero-image").should("not.exist");

    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").eq(1).click();

    cy.reload();

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should("match", /Arkhanos/g);

    cy.clearLocalStorage();
    cy.reload();

    cy.get(".hero-image").should("not.exist");
  });
  it("selects a random hero", () => {
    cy.get(".hero-image").should("not.exist");

    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should(
        "match",
        /Arkhanos|Barak|Devron|Drasek|Duncan|Elros|Flavian|Handuriel|Jade|Jaheen|Katarina|Kellam|Lordwrath|Lorelai|Maya|Pietro|Savran|Shadow|Sskar|Sun|Tork|Vorn|Willow/g
      );
  });
  it("only shows enabled hero content", () => {
    cy.visit("./configuration");
    cy.get('#configuration-content-hero input[id="core"]').uncheck();
    cy.get('#configuration-content-hero input[id="spoils-of-war"]').uncheck();
    cy.get('#configuration-content-hero input[id="desert-of-hellscar"]').uncheck();
    cy.get('#configuration-content-hero input[id="rise-of-the-undead-dragon"]').uncheck();
    cy.get('#configuration-content-hero input[id="handuriel"]').uncheck();

    cy.visit("./party");
    cy.get(".hero-image").should("not.exist");
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();

    cy.get(".hero-image")
      .first()
      .should("have.attr", "src")
      .should("match", /Lordwrath/g);
  });
});
