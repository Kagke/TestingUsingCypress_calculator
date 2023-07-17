describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should add from arthmetical operations work",()=>{
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "5")
  })

  it("should subtract from arthmetical operations work",()=>{
    cy.get("#number9").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4")
  })

  it("should divide from arthmetical operations work",()=>{
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4")
  })

  it("should multiply from arthmetical operations work",()=>{
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "28")
  })  

  it("should multiple operations chain together",()=>{
    cy.get("#number8").click();
    cy.get("#operator-divide").click(); 
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number4").click();
    cy.get("#operator_add").click()
    cy.get("#number6").click()
    cy.get("#operator-subtract").click()
    cy.get("#number7").click()
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "15")
  })

  it("should be able to get big numbers",()=>{
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "999999998000000000")
  })  

  it("should return cant divide with 0 or Error",()=>{
    cy.get("#number7").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Error: Can't divide by 0")
  })

})

