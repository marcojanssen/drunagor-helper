describe("randomize a monster", () => {
  beforeEach(() => {
    cy.visit("./");
  }),
    it("picks a random white monster", () => {
      cy.get("button").contains("White").click();
      cy.get("#swappable-image")
        .should("have.attr", "src")
        .should("match", /ShadowCultist|SkeletonArcher/g);
      cy.get("#swappable-title").contains(/^Shadow Cultist|Skeleton Archer$/);
      cy.get("#swappable-sub-title").contains("Standard");

      cy.visit("./configuration");
      cy.get('#configuration-variant input[id="alternate"]').check();
      cy.get('#configuration-variant input[id="standard"]').uncheck();

      cy.visit("./");
      cy.get("button").contains("White").click();
      cy.get("#swappable-image")
        .should("have.attr", "src")
        .should("match", /ShadowCultist|SkeletonArcher/g);
      cy.get("#swappable-title").contains(/^Shadow Cultist|Skeleton Archer$/);
      cy.get("#swappable-sub-title").contains("Alternate");

      cy.visit("./configuration");
      cy.get('#configuration-variant input[id="complex"]').check();
      cy.get('#configuration-variant input[id="alternate"]').uncheck();

      cy.visit("./");
      cy.get("button").contains("White").click();
      cy.get("#swappable-image")
        .should("have.attr", "src")
        .should("match", /ShadowCultist/g);
      cy.get("#swappable-title").contains("Shadow Cultist");
      cy.get("#swappable-sub-title").contains("Complex (A / B)");
    });

  it("picks a random gray monster", () => {
    cy.get("button").contains("Gray").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowVampire|Executioner|RottenFlesh/g);
    cy.get("#swappable-title").contains(/^Shadow Vampire|Executioner|Rotten Flesh$/);
    cy.get("#swappable-sub-title").contains("Standard");

    cy.visit("./configuration");
    cy.get('#configuration-variant input[id="alternate"]').check();
    cy.get('#configuration-variant input[id="standard"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Gray").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowVampire|Executioner|RottenFlesh/g);
    cy.get("#swappable-title").contains(/^Shadow Vampire|Executioner|Rotten Flesh$/);
    cy.get("#swappable-sub-title").contains("Alternate");

    cy.visit("./configuration");
    cy.get('#configuration-variant input[id="complex"]').check();
    cy.get('#configuration-variant input[id="alternate"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Gray").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /RottenFlesh/g);
    cy.get("#swappable-title").contains("Rotten Flesh");
    cy.get("#swappable-sub-title").contains("Complex (A / B)");
  });

  it("picks a random black monster", () => {
    cy.get("button").contains("Black").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /Abomination|ShadowKnight/g);
    cy.get("#swappable-title").contains(/^Abomination|Shadow Knight$/);
    cy.get("#swappable-sub-title").contains("Standard");

    cy.visit("./configuration");
    cy.get('#configuration-variant input[id="alternate"]').check();
    cy.get('#configuration-variant input[id="standard"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Black").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /Abomination|ShadowKnight/g);
    cy.get("#swappable-title").contains(/^Abomination|Shadow Knight$/);
    cy.get("#swappable-sub-title").contains("Alternate");

    cy.visit("./configuration");
    cy.get('#configuration-variant input[id="complex"]').check();
    cy.get('#configuration-variant input[id="alternate"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Black").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowKnight/g);
    cy.get("#swappable-title").contains("Shadow Knight");
    cy.get("#swappable-sub-title").contains("Complex (A / B)");
  });

  it("picks a random commander monster regardless of variant", () => {
    cy.visit("./configuration");
    cy.get('#configuration-variant input[id="standard"]').uncheck();
    cy.get('#configuration-variant input[id="alternate"]').uncheck();
    cy.get('#configuration-variant input[id="complex"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Commander").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowCultist|ShadowVampire/g);
    cy.get("#swappable-title").contains(/^Bane|Archon$/);
    cy.get("#swappable-sub-title").contains("Commander");

    cy.visit("./configuration");
    cy.get('#configuration-content-monster input[id="core"]').uncheck();
    cy.get('#configuration-content-monster input[id="spoils-of-war"]').check();

    cy.visit("./");
    cy.get("button").contains("Commander").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /Twin|Thern/g);
    cy.get("#swappable-title").contains(/^Twin|Thern$/);
    cy.get("#swappable-sub-title").contains("Commander");
  });

  it("picks a random gray monster from other content", () => {
    cy.visit("./configuration");
    cy.get('#configuration-content-monster input[id="the-ruin-of-luccanor"]').check();
    cy.get('#configuration-content-monster input[id="core"]').uncheck();
    cy.get('#configuration-variant input[id="alternate"]').check();
    cy.get('#configuration-variant input[id="standard"]').uncheck();

    cy.visit("./");
    cy.get("button").contains("Gray").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /LadyClaw/g);
    cy.get("#swappable-title").contains("Lady Claw");
    cy.get("#swappable-sub-title").contains("Alternate");
  });

  it("toggles monster image between main and miniature", () => {
    cy.get("button").contains("White").click();
    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowCultist|SkeletonArcher/g);

    cy.get("#swappable-button").click();

    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowCultistMiniature|SkeletonArcherMiniature/g);

    cy.get("#swappable-button").click();

    cy.get("#swappable-image")
      .should("have.attr", "src")
      .should("match", /ShadowCultist|SkeletonArcher/g);
  });
});
