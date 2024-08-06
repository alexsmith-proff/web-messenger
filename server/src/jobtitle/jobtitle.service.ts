import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JobTitleEntity } from "./entity/jobtitle.entity";
import { Repository } from 'typeorm';
import { CreateJobTitleInput } from "./dto/create.jobtitle.input";
import { UpdateJobTitleInput } from "./dto/update.jobtitle.input";

let getSlug = require('speakingurl')

@Injectable()
export class JobTitleService {
    constructor(
        @InjectRepository(JobTitleEntity)
        private readonly jobTitleRepository: Repository<JobTitleEntity>
    ) { }

    async create(createJobTitleInput: CreateJobTitleInput): Promise<JobTitleEntity> {
        return await this.jobTitleRepository.save({
            ...createJobTitleInput,
            slug: createJobTitleInput.slug === '' ? getSlug(createJobTitleInput.name) : createJobTitleInput.slug
        })
   }

   async findAll(): Promise<JobTitleEntity[]>{
    return await this.jobTitleRepository.find({ relations: {users:true} })
   }

   async findOne(id: number): Promise<JobTitleEntity> {
    return await this.jobTitleRepository.findOne({ where: {id}, relations: {users: true }});
  }

  async update(id: number, updateJobTitle: UpdateJobTitleInput): Promise<JobTitleEntity> {
    await this.jobTitleRepository.update(id, updateJobTitle)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const jobTitle = await this.findOne(id)
    await this.jobTitleRepository.delete(id)
    return jobTitle
  }

}