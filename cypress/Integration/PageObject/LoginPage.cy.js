<reference types="Cypress"/>


class LoginPage
{
    visit()
    {
        cy.visit("https://www.instagram.com/")
    }
    enteremail(value)
    {
       const idfield =  cy.get('input[name="username"]')
       field.clear()
       field.type(value)
       return this
    }

    enterpass(value)
    {
       const idfield =  cy.get('input[name="password"]')
       field.clear()
       field.type(value)
       return this
    }

    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()
    }
}
export default LoginPage
