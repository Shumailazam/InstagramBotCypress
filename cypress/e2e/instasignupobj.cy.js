class instasignupobj
{
    visit()
    {
        cy.visit('https://www.instagram.com/accounts/emailsignup/');
    }
    signupvalidate()
    {
        cy.get('div.P8adC form h2').should('have.text','Sign up to see photos and videos from your friends.');
    }

    instaemailenter(value)
    {
        cy.wait(5000);
        cy.get('input[name="emailOrPhone"]').type(value);
    }
    instafullname(value)
    {
        cy.get('input[name="fullName"]').type(value);
    }
    instausername(value)
    {
        cy.get('input[name="username"]').type(value);
    }
    instapassword(value)
    {
        cy.get('input[name="password"]').type(value);
    }
    instagramvalidatedata()
        {

            cy.get(".coreSpriteInputError.gBp1f").should('have.length', 0)
            
        }
    

    
}

export default instasignupobj