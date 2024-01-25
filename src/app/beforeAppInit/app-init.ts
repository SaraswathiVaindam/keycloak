import { KeycloakService } from "keycloak-angular";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: "http://localhost:8080/",
            realm: "angular",
            clientId: "todo"
          },
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html'
          },
          bearerExcludedUrls: []
        });
      } catch (error) {
        reject(error);
      }
    });
  };
}
