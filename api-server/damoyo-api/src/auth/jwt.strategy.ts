import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";
import {jwtConstants} from "./constant/jwt.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        /**
         * jwtFromRequest: Request에서 JWT를 추출하는방법을 명시.
         * ignoreExpiration: 만료 무시유무
         * 토큰 서명을 위한 대칭암호. 공개적으로 노출금지
         */
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username} ;
    }
}
