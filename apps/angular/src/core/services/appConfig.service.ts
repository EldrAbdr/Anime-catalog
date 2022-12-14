import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod';

/** Provides access to environment variables. */
@Injectable({
  providedIn: 'root',
})

export class AppConfigService {

  /** Api key. */
  public readonly apiKey = environment.apiKey;

  /** Api url. */
  public readonly apiUrl = environment.apiUrl;
}
