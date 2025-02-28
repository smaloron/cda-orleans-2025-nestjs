import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  constructor(
    private config: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['x-api-key'];

    //console.log(apiKey, this.config.get('API_KEY'));

    if(apiKey !== this.config.get('API_KEY')) {
      throw new UnauthorizedException('clef invalide');
    }

    return true
  }
}
