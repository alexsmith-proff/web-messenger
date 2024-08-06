import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { JobTitleService } from "./jobtitle.service";
import { CreateJobTitleInput } from "./dto/create.jobtitle.input";
import { UpdateJobTitleInput } from "./dto/update.jobtitle.input";

@Controller('api/jobtitle')
export class JobTitleController {
    constructor(private readonly jobTitleService: JobTitleService) { }

    @Post('create')
    create(@Body() createJobTitleInput: CreateJobTitleInput) {
        return this.jobTitleService.create(createJobTitleInput)
    }

    @Get()
    findAll() {
        return this.jobTitleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.jobTitleService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateJobTitleInput: UpdateJobTitleInput) {
        return this.jobTitleService.update(+id, updateJobTitleInput);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.jobTitleService.remove(+id);
    }
}