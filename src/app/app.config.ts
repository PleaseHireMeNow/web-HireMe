import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import  AppRoutes  from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter (AppRoutes), 
              provideHttpClient(),
              provideOAuthClient(),
              {
                provide: 'SocialAuthServiceConfig',
                useValue: {
                  autoLogin: false,
                  providers: [
                    {
                      id: GoogleLoginProvider.PROVIDER_ID,
                      provider: new GoogleLoginProvider(
                        '747480745644-js0b8j9stspu814lbtctegsa9jioj7kt.apps.googleusercontent.com'
                      )
                    }
                  ],
                  onError: (error) => {
                    console.error(error);
                  }
                } as SocialAuthServiceConfig, }
  ]
};

