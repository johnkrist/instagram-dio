import { Group, GetApp, InstragramWrapper, InstagramPhone } from "./styles";
import instagramLogo from "../img/instagram-logo.png";
import instagramPerfil from "../img/instagramPerfil.png";
import instagramPhone from "../img/instagram-celular.png";
import instagramApple from "../img/apple-button.png";
import instagramGoogle from "../img/googleplay-button.png";

export function Home() {
  return (
    <>
      <InstragramWrapper>
        <InstagramPhone>
          <img className="imgphone" src={instagramPhone} alt="celular" />
        </InstagramPhone>

        <div className="divMain">
          <Group>
            <div className="instagram-continue">
              <img
                src={instagramLogo}
                className="instagram-logo"
                alt="instagram logo"
              />
              <div class="profile-photo">
                <img
                  className="perfilImg"
                  src={instagramPerfil}
                  alt="foto de perfil"
                />
              </div>
              <a href="#" class="instagram-login">
                Continue como johnkristhian
              </a>
              <a href="#" className="instagram-logout">
                Remover conta
              </a>
            </div>
          </Group>
          <Group>
            <p className="not-account">Não é johnkristhian?</p>
            <p className="not-account">
              <span className="link-blue">Alternar contas</span>
              ou
              <span className="link-blue">Inscreva-se</span>
            </p>
          </Group>
          <GetApp>
            <p class="get-app">Baixe o aplicativo</p>
            <div className="download">
              <img href="#" src={instagramGoogle} className="app-download" />
              <img href="#" src={instagramApple} className="app-download" />
            </div>
          </GetApp>
        </div>
      </InstragramWrapper>
    </>
  );
}
