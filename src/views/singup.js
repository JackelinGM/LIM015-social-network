export default () => {
  const sectionElem = document.createElement('section');
  const template = `
    <section id="contenedorView1" class="contenedorView1">
      <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres">
      <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos">
      <input type="text" class="registro" id="email" placeholder=" Ingresar Correo Electronico">
      <input type="text" class="registro" id="password" placeholder=" Ingresar Contraseña">
      <input type="submit" href="#/" class="registro" value="Registrar">
    </section>
    `;

  sectionElem.innerHTML = template;

  return sectionElem;
};