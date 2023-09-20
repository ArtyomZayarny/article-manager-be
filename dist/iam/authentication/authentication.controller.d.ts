import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthenticationService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
}
