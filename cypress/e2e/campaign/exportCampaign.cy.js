describe("export campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can export campaign", () => {
      cy.get("#campaign-new").click();
      cy.get("#campaign-core").click();

      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();
      cy.get(".hero-detail-btn").click();

      cy.get(".hero-weapon-wrapper .hero-item").click();
      cy.get(".hero-weapon-wrapper li").first().click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

      cy.get(".hero-armor-wrapper .hero-item").click();
      cy.get(".hero-armor-wrapper li").first().click();
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Cloth Armor");

      cy.go("back");
      cy.get("#campaign-export").click();

      cy.get("#campaign-token").should(
        "have.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJuYW1lIjoiIiwiaGVyb2VzIjpbeyJoZXJvSWQiOiJhcmtoYW5vcyIsImNhbXBhaWduSWQiOiIiLCJlcXVpcG1lbnQiOnsid2VhcG9uSWQiOiJkcmVhbXBpZXJjZXItYm93Iiwib2ZmSGFuZElkIjoiIiwiYXJtb3JJZCI6ImNsb3RoLWFybW9yIiwidHJpbmtldElkIjoiIiwiYmFnT25lSWQiOiIiLCJiYWdUd29JZCI6IiJ9LCJzdGFzaGVkQ2FyZElkcyI6W10sInNraWxsSWRzIjpbXSwic2VxdWVudGlhbEFkdmVudHVyZVN0YXRlIjpudWxsLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
      );
      cy.get("#close-modal").click();

      cy.get(".hero-detail-btn").click();

      cy.get("div.skill-container #dungeon-role-1").check();
      cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");

      cy.go("back");

      cy.get("#campaign-export").click();
      cy.get("#campaign-token").should(
        "include.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJuYW1lIjoiIiwiaGVyb2VzIjpbeyJoZXJvSWQiOiJhcmtoYW5vcyIsImNhbXBhaWduSWQiOiIiLCJlcXVpcG1lbnQiOnsid2VhcG9uSWQiOiJkcmVhbXBpZXJjZXItYm93Iiwib2ZmSGFuZElkIjoiIiwiYXJtb3JJZCI6ImNsb3RoLWFybW9yIiwidHJpbmtldElkIjoiIiwiYmFnT25lSWQiOiIiLCJiYWdUd29JZCI6IiJ9LCJzdGFzaGVkQ2FyZElkcyI6W10sInNraWxsSWRzIjpbImR1bmdlb24tcm9sZS0xIl0sInNlcXVlbnRpYWxBZHZlbnR1cmVTdGF0ZSI6bnVsbCwiYXVyYUlkIjpudWxsLCJvdXRjb21lSWRzIjpbXSwic3RhdHVzSWRzIjpbXX1dfQ=="
      );
    });
});
