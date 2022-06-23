


class loginpageobjectmodule
{
    visit()
    {
        cy.visit("https://www.instagram.com/")
    }
    enteremail(value)
    {
       const idfield =  cy.get('input[name="username"]')
       idfield.clear()
       idfield.type(value)
       return this
    }

    enterpass(value)
    {
       const idfield =  cy.get('input[name="password"]')
       idfield.clear()
       idfield.type(value)
       return this
    }

    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()
    }


    verify()
    { 
        const msg=cy.get('#slfErrorAlert').invoke('text').then((text1) =>{

        })
        const v = cy.get('#slfErrorAlert')
    }
    
     
    

    search(value)
    {
       // const s= cy.get('.XTCLo d_djL DljaH');
        //const s =cy.get('#mount_0_0_x1 > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div._a3gq > section > nav > div._acc1._acc3 > div > div > div._aawf._aawg > input')
        //const s = cy.get('input._aawh._aawj._aauy.focus-visible')
      cy.get('div.cTBqC').type(value);
      cy.wait(20000);
      cy.get('#mount_0_0_zI > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div._a3gq > section > nav > div._acc1._acc3 > div > div > div._aawf._aawg > div._abn- > div > div._aa61 > div > div:nth-child(1) > a').click();
      cy.wait(5000);  
      cy.get('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.QY4Ed.P0xOK > div.yPP5B > div > div._01UL2 > div > div:nth-child(1) > a').click();
      cy.wait(60000);
        //cy.get('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > nav:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();
     // cy.get('.-qQT3').click();
      //cy.get('div._01UL2 div div a').click();
      //cy.get('.div._01UL2 div div a').type('{enter}');
      //cy.get('[class="-qQT3"]').click();
   // cy.get('.QY4Ed.P0xOK').click();
   //cy.wait(50000);
   //cy.get('div:nth-child(1) > section:nth-child(1) > nav:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click();  
   cy.wait(50000);
   
   //const l = cy.get('body > div:nth-child(1) > section:nth-child(1) > nav:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
      //l.click();
      //cy.get([role="none"]).click();
      //cy.visit('https://www.instagram.com/leomessi/');
      
      //cy.get('.oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl _abm4 _a6hd')
      //cy.get('#f172e0732f8cf58').click();
      //s.trigger('keydown',{key:'Enter',});
     
      // cy.get('div._abnx div').click();
      
    }
}
export default loginpageobjectmodule
