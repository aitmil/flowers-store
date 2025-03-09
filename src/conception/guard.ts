import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log("guard");
    const request = context
      .switchToHttp()
      .getRequest<{ headers: { authorization?: string } }>();
    const isAuth = request.headers.authorization === "secret";
    if (!isAuth) {
      throw new UnauthorizedException("Not authorized");
    }
    return isAuth;
  }
}
