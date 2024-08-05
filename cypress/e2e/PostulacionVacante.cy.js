import PruebaRedarbor from "../support/POM_PruebaRedarbor/PruebaRedarbor"; 

describe('Postulación a la vacante en Computrabajo', () => {
    const Prueba = new PruebaRedarbor();
    it('Aplicar a oferta', () => {
        Prueba.Vacante("QA{enter}");
        Prueba.Postulacion();
        Prueba.Ingresar('prueba@test.com');
        Prueba.Formulario('Prueba',"Test","Pt123456","Tester QA{enter}");
    
    });

    it('Ingresar Contraseña que no cumple con los requisitos', () => {
        Prueba.Vacante("QA{enter}");
        Prueba.Postulacion();
        Prueba.Ingresar('prueba@test.com');
        Prueba.PasswordE('Prueba',"Test","Pt123456*","Tester QA{enter}");
    
    });

    it('Ingresar Correo que no cumple con los requisitos', () => {
        Prueba.Vacante("QA{enter}");
        Prueba.Postulacion();
        Prueba.CorreoIncorrecto('prueba');    
    });

});


