const user={
    special:"Please leave it at the door",
    name:"User L"
}

describe("testing form inputs", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza");
    });

    it("test", ()=>{
       cy.get('[data-cy="name"]').type(user.name).should("have.value", user.name)
       cy.get('[data-cy="special"]').type(user.special).should("have.value", user.special)
       cy.get('[data-cy="chicken"]').click() 
       cy.get('[data-cy="beef"]').click()
       cy.get('[data-cy="button"]').click()
    })
})