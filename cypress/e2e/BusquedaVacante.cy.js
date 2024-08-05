import PruebaRedarbor from "../support/POM_PruebaRedarbor/PruebaRedarbor"; 

describe('Busqueda de vacante en Computrabajo', () => {
  const Prueba = new PruebaRedarbor();

  it('La pagina carga correctamente y permite al usuario ingresar a la opción "Colombia"', () => {
    Prueba.visitComputrabajo_Colombia();
  });

  it('Carga la página correctamente y permite al usuario insertar "Guainía" en "Lugar" y permite clicar "Buscar empleos"', () => {
    Prueba.Lugar('Guainía');
  });
  it('Carga la página correctamente y permite al usuario insertar "QA" en "Cargo o Categoría" y permite seleccionar los filtros: Salario Menos de 700.000 y Experiencia 1 año', () => {
    cy.wait(2000);
    Prueba.Vacante("QA{enter}");
  });

  

  
  

});


