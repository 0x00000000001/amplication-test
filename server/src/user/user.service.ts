import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";
import { User } from "./base/User";
import { UserFindUniqueArgs } from "./base/UserFindUniqueArgs";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }
  async resetPassword(args: UserFindUniqueArgs): Promise<User> {
    return this.prisma.user.update({
      where: args.where,
      data:{
        password:"123456"
      }
    });
  }
}
