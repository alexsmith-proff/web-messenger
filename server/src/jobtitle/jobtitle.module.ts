import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobTitleEntity } from "./entity/jobtitle.entity";
import { JobTitleController } from "./jobtitle.controller";
import { JobTitleService } from "./jobtitle.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([JobTitleEntity])
    ],
    controllers: [JobTitleController],
    providers: [JobTitleService]
})
export class JobTitleModule {}