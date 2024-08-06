import { Body, Controller, Delete, HttpCode, Param, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Patch(':id')
    // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
    @Auth()
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

        return await this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
    @Auth()
    async remove(@Param('id') id: string) {
        return await this.userService.remove(+id);
    }

}