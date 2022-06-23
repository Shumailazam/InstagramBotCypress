


import loginpageobjectmodule from './loginpageobjectmodule.cy'
import instasignupobj from './instasignupobj.cy'

const randomWaitTime = Math.floor((Math.random() * 10) + 1000);
const sig = new instasignupobj();
const lp= new loginpageobjectmodule()
describe('TC:1 LOGIN TO INSTAGRAM',function()
{
    
    it('Signup form check',function()
    {
        sig.visit();
        sig.signupvalidate();

        cy.wait(5000);
    })


    it('Enter data signup field',function()
    {
        sig.instaemailenter('asjdnasjdnsajdna@gmail.com');
        sig.instafullname('azam');
        sig.instausername('azam');
        sig.instapassword('asdnbsajfdnasjnfdas');
        cy.wait(5000);
    })
    //unable to veriffy as getting error of Please wait a few minutes before you try again.
   it('validate data enter corrector not',function()
    {
        sig.instagramvalidatedata();
    })


    it('Valid Login Tesgt',function()
    {
       
        lp.visit();
        lp.enteremail('chessplayergp');
        lp.enterpass('AnatomY1!');
        cy.wait(3000);
        lp.submit();
    
        cy.wait(10000);
        cy.get('div.cmbtv button').should('have.text','Not Now')
        
    })
       
    it('searches for relevent hashtags', () => {
       lp.search('#messi');     
    })


})
