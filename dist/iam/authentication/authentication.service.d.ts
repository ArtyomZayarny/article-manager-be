import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from '../hashing/hashing.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
export declare class AuthenticationService {
    private readonly userRepository;
    private readonly hashingService;
    private readonly jwtService;
    private readonly jwtConfiguration;
    constructor(userRepository: Repository<User>, hashingService: HashingService, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    signUp(signUpDto: SignUpDto): Promise<void>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
}
