// import { signIn, signInWithGoogle, signInFb} from '../views-controllers/signin-control.js'

export default () => {
  const sectionSignIn = document.createElement('section');
  const template = `
        <section id="contenedorView1" class="contenedorView1">
            <img src="img/logo-ibook.png" alt="logo" class="logo">
            <form class="data-container">
                <input type="email" class="username" id="username" placeholder=" E-mail" required>
                <input type="password" class="password" id="password1" placeholder=" Password" required>
                <input type="button" class="registro" href="#/home" id="sign-in" value="Sign-In">
            </form>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <p>Ingresar por</p>
            <section class="button">
            <button class="button" id="btn-fb"><i class="fab fa-facebook"></i></button>
            <button class="button" id="btn-gg"><i class="fab fa-google"></i></button>
            </section>
            <p>¿No tienes cuenta? <a href="#/signup"><strong>Resgistrate</strong></a></p>
        </section>
        `;

  // agregar clase para dar css
  sectionSignIn.innerHTML = template;
  sectionSignIn.setAttribute('class', 'contenedorView1');

  //   const btnSignIn = sectionElem.querySelector('#sign-in');
  //   const btnSignGog = sectionElem.querySelector('#btn-gg');
  //   const btnSignFb = sectionElem.querySelector('#btn-fb');

  //   btnSignIn.addEventListener('click', signIn);
  //   btnSignGog.addEventListener('click', signInWithGoogle);
  //   btnSignFb.addEventListener('click', signInFb);

  return sectionSignIn;
};
