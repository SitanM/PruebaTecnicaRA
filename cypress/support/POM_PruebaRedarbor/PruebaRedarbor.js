class PruebaRedarbor{
    get colombiaLink() {
        return cy.get('#Colombialink');
    }

    get searchInput(){
        return cy.get('#place-search-input');
    }
    get empleosGuainia(){
        return cy.get('[data-autocomplete-item-selectable-url="/empleos-en-guainia"]');
    }

    get searchBttn(){
        return cy.get('#search-button');
    }

    get cargoText(){
        return cy.get('#prof-cat-search-input');
    }

    get popUpBlue(){
        return cy.get('.box_help');
    }

    get salaryBttn() {
        //return cy.xpath("(//p[contains(.,'Salario')])[1]");
        return cy.get('p').contains('Salario');
    }

    get firstOption(){
        //return cy.xpath("//SPAN[@class='buildLink '][text()='Menos de $ 700.000']/self::SPAN");
        return cy.get('span').contains('Menos de $ 700.000');   
    }

    get experienceBttn() {
        //return cy.xpath("(//P[text()='Experiencia']/self::P)[1]");
        return cy.get('p').contains('Experiencia');
    }

    get timeExp(){
        return cy.get('span').contains('1 año');
    }
    
    get vacanteQA() {
        return cy.get('#offersGridOfferContainer');
    }

    get testAutomation(){
        return cy.get('[data-id="7A797577CC74F11161373E686DCF3405"]');
    }

    get oferta3p(){
        //return cy.xpath("(//div[contains(@class,'opt_dots')])[1]");
        return cy.get('[data-id="7A797577CC74F11161373E686DCF3405"]').find('.opt_dots');
    }

    get Btnpostular(){
        return cy.get('[data-href-offer-apply="https://candidato.co.computrabajo.com/candidate/apply/?oi=7A797577CC74F11161373E686DCF3405&p=378&idb=1&d=32"]');
    }

    get IngresarCorreo(){
        return cy.get('.it-email ');
    }

    get CorreoInvalido(){
        return cy.get('#LoginModel_Email-error');
    }

    get BtnContinuarCorreo(){
        return cy.get('#continueWithMailButton');
    }

    get Name(){
        return cy.get('#Name');
    }

    get SurName(){
        return cy.get('#SurName');
    }

    get Password(){
        return cy.get('#Password');
    }

    get PasswordError(){
        return cy.get('#Password-error');
    }

    get Email(){
        return cy.get('div.field_input').find('#Email');
    }

    get PuestoD(){
        return cy.get('[data-autocomplete-idholder="CargoId"]');
    }

    get DptoSelect(){
        return cy.get('.nice-select');
    }

    get Dpto(){
        return cy.get('li').contains('Guainía');
        
    }

    get Captcha(){
        return cy.get('#CaptchaInputText');
    }

    get BtnContinuarForm(){
        return cy.get('#continueButton');
    }

    visitComputrabajo_Colombia(){
        cy.visit('https://computrabajo.com/');
        this.colombiaLink.click();
        
    }

    Lugar(depto) {
            cy.visit('https://co.computrabajo.com/');
            this.searchInput.type(depto);
            cy.wait(1500);
            this.empleosGuainia.click();
            cy.wait(1500);
            this.searchBttn.click();
        
    }

    Vacante(cargoText) {
           cy.wait(1500);
           cy.visit('https://co.computrabajo.com/empleos-en-guainia');
           cy.wait(500);
           this.cargoText.type(cargoText);
           cy.wait(1500);
           this.popUpBlue.click();
           cy.wait(500);
           this.salaryBttn.click({force: true});
           cy.wait(500);
           this.firstOption.click();
           cy.wait(500);
           this.experienceBttn.click();
           cy.wait(500);
           this.timeExp.click();
           this.vacanteQA.should('contain', 'Test automation Engineer QA');
           cy.wait(500);
           this.testAutomation.should('contain','Guainía');
           cy.wait(500);
    }

    Postulacion(){
        this.oferta3p.click();
        this.Btnpostular.click();
        cy.wait(1000);
    }

    Ingresar(correo){
        this.IngresarCorreo.type(correo);
        this.BtnContinuarCorreo.click();

    }

    CorreoIncorrecto(correo){
        this.IngresarCorreo.type(correo);
        this.BtnContinuarCorreo.click();
        this.CorreoInvalido.should('be.visible');
        cy.wait(1000);
    }

    Formulario(Nombre,Apellidos,Password,Puesto){
        this.Name.type(Nombre);
        this.SurName.type(Apellidos);
        //this.Email.should('be.disabled');
        this.Password.type(Password);
        this.PuestoD.type(Puesto);
        this.DptoSelect.click();
        this.Dpto.click();
        this.Captcha.type('00000');
        this.BtnContinuarForm.click();



    }

    PasswordE(Nombre,Apellidos,Password,Puesto){
        this.Name.type(Nombre);
        this.SurName.type(Apellidos);
        //this.Email.should('be.disabled');
        this.Password.type(Password);
        this.PuestoD.type(Puesto);
        this.DptoSelect.click();
        this.Dpto.click();
        this.Captcha.type('00000');
        this.BtnContinuarForm.click();
        this.PasswordError.should('be.visible');
    }

    /*visitComputrabajo_Colombia(){
        it('La pagina carga correctamente y permite al usuario ingresar a la opción "Colombia"', () => {
            cy.visit('http://www.computrabajo.com/');
            cy.get('#Colombialink').click();
        });
    }

    Lugar(){
        it ('Carga la página correctamente y permite al usuario insertar "Guainía" en "Lugar" y permite clicar "Buscar empleos"', () => {
            cy.visit('https://co.computrabajo.com/');
            cy.get('#place-search-input').type('Guainía');
            cy.wait(1500);
            cy.get('[data-autocomplete-item-selectable-url="/empleos-en-guainia"]').click();
            cy.wait(1500);
            cy.get('#search-button').click();
            
        });
    }

    Vacante(){
        it.only('Carga la página correctamente y permite al usuario insertar "QA" en ""Cargo o Categoría" y permite seleccionar los filtros: Salario Menos de 700.000 y Experiencia 1 año', () => {
            cy.visit('https://co.computrabajo.com/empleos-en-guainia');
            cy.get('#prof-cat-search-input').type("QA{enter}");
            cy.wait(1500);
            cy.get('.box_help').click();
        });
    }
*/
    
}//Fin

export default PruebaRedarbor;