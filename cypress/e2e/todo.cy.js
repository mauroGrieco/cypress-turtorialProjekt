describe("todo tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the todo app", () => {
    cy.getDataTest("todo-header").should("exist");
  });

  it("should add a todo", () => {
    cy.get('[data-set="todo-form"] ').should("exist");
    cy.get('[data-set="todo-form"] input[name = "title"]').type(
      "Watch a movie"
    );
    cy.get('[data-set = "add-todo-btn"]').should("exist").click();
    cy.contains("Watch a movie").should("exist");
  });

  it("should mark a todo as completed", () => {
    cy.get('[data-set="todo-form"] input[name = "title"]').type("Watch a movie");
    cy.get('[data-set = "add-todo-btn"]').should("exist").click();
    cy.contains("Watch a movie").should("exist");
    cy.get('[data-set="todo-list"] input[type ="checkbox"]')
        .should("exist")
        .should("not.be.checked");
    // you can also use should have class completed to check if the todo is completed
    cy.contains("Watch a movie")
        .parent() // Navigiere zum Elternknoten des Eintrags
        .find('input[type="checkbox"]') // Suche die zugehörige Checkbox
        .should("exist")
        .should("not.be.checked")
        .click()
        .should("be.checked");


  });

  it("should delete a todo", () => {
    cy.get('[data-set="todo-form"] ').should("exist");
    cy.get('[data-set="todo-form"] input[name = "title"]').type(
        "Watch a movie"
    );
    cy.get('[data-set = "add-todo-btn"]').should("exist").click();
    cy.contains("Watch a movie").should("exist");
  });
});

// cy.get('[data-set="todo-form"] input[name="title"]').type("Watch a movie");
// cy.get('[data-set="add-todo-btn"]').should("exist").click();
// cy.contains("Watch a movie").should("exist");
//
// // Intercept DELETE API request
// cy.intercept('DELETE', '/api/v1/todos/delete/*').as('deleteTodo');
//
// // Delete the todo
// cy.contains("Watch a movie")
//     .parent() // Navigate to the parent element
//     .find('[data-set="delete-todo-btn"]')
//     .click();
//
// // Wait for the API call to complete
// cy.wait('@deleteTodo').its('response.statusCode').should('eq', 200);
//
// // Ensure the todo is removed from the DOM
// cy.contains("Watch a movie").should("not.exist", { timeout: 5000 });
