describe("campaign migration", () => {
  beforeEach(() => {
    localStorage.setItem(
      "PartyStore.members",
      '[{"heroId":"arkhanos","auraId":"boon-of-empathy","outcomeIds":["a-lovers-request","corrupted-hero"],"statusIds":["apathetic"]},{"heroId":"maya","auraId":"bloodlust","outcomeIds":["storyteller","lovebirds-reunited"],"statusIds":["challenger","mistwalker"]},{"heroId":"shadow","auraId":"true-hearted-blessing","outcomeIds":["adamant"],"statusIds":["aggressive-approach","a-man-s-best-friend"]}]'
    );
    cy.visit("./campaign");
  }),
    it("converts old campaigns to new setup", () => {
      expect(localStorage.getItem("PartyStore.members")).to.eq("[]");
      cy.get("#campaigns a").should("have.length", 1);
      cy.get("#campaigns").click();

      cy.get(":nth-child(1) > .hero-list-item").contains("Arkhanos");
      cy.get(":nth-child(1) > .hero-list-item").contains("Apathetic");
      cy.get(":nth-child(1) > .hero-list-item").contains("A lover's request");
      cy.get(":nth-child(1) > .hero-list-item").contains("Corrupted hero");
      cy.get(":nth-child(1) > .hero-list-item").contains(
        "As a Minor Action, you may take a Trauma Cube from a Hero that is adjacent to you and place it on your board. Receiving a Trauma Cube this way does not end the effects of this Boon."
      );

      cy.get(":nth-child(2) > .hero-list-item").contains("Maya");
      cy.get(":nth-child(2) > .hero-list-item").contains("Challenger");
      cy.get(":nth-child(2) > .hero-list-item").contains("Mistwalker");
      cy.get(":nth-child(2) > .hero-list-item").contains("Storyteller");
      cy.get(":nth-child(2) > .hero-list-item").contains(
        "Whenever you kill a Monster during your turn: After you resolve the current Action, you may take an additional Cube Action. This ability can trigger only once per turn."
      );

      cy.get(":nth-child(3) > .hero-list-item").contains("Shadow");
      cy.get(":nth-child(3) > .hero-list-item").contains("Aggressive approach");
      cy.get(":nth-child(3) > .hero-list-item").contains("A man's best friend");
      cy.get(":nth-child(3) > .hero-list-item").contains("Adamant");
      cy.get(":nth-child(3) > .hero-list-item").contains(
        "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain FOCUS 1."
      );
    });
});
