// describe permet de regrouper les tests dans des scénarios
describe("Addition", () => {
  // it et test sont identiques
  it("knows that 2 and 2 make 4", () => {
    const addition = 2 + 2;
    expect(addition).toBe(4);
  });
});
