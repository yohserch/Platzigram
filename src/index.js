const Page = require('page');
const yo = require('yo-yo');
const empty = require('empty-element');

const Main = document.getElementById('main-container');

Page('/', (ctx, next) => {
   Main.innerHTML = '<a href="/signup">Signup</a>'
});

Page('/signup', () => {
    let el = yo`        <div class="container">
            <div class="row">
                <div class="col s-10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img src="iphone.png" alt="iPhone" class="iphone">
                        </div>
                        <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="platzigram">Platzigram</h1>
                                    <form class="signup-form">
                                        <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                                        <div class="section">
                                            <a href="" class="btn btn-fb hidden-on-small-only">Iniciar sesión con Facebook</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="Email">
                                            <input type="text" name="name" placeholder="Nombre completo">
                                            <input type="text" name="username" placeholder="Nombre de usuario">
                                            <input type="password" name="password" placeholder="COntraseña">
                                            <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿Tienes una cuenta?
                                    <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    empty(Main).appendChild(el);
});

Page();