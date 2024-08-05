
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDivisionEntity } from './entities/subdivision.entity';

var getSlug = require('speakingurl');

@Injectable()
export class SubDivisionService {
  constructor(
    @InjectRepository(SubDivisionEntity)
    private readonly subDivisionRepository: Repository<SubDivisionEntity>,
  ) {}

//   async create(
//     createMenuItemInput: CreateMenuItemInput,
//   ): Promise<MenuItemEntity> {
//     return await this.menuItemRepository.save({
//       ...createMenuItemInput,
//       menu: { id: createMenuItemInput.menu_id },
//       link: getSlug(createMenuItemInput.name), 
//       slug: getSlug(createMenuItemInput.name)
//     });
//   }

//   async findAll(): Promise<MenuItemEntity[]> {
//     return await this.menuItemRepository.find({
//       relations: {
//         submenuitems: true,
//       }
//     });
//   }

//   async findOne(id: number): Promise<MenuItemEntity> {
//     return await this.menuItemRepository.findOne({
//       where: {
//         id: id,
//       },
//       relations: {
//         submenuitems: true,
//       },
//     });
//   }

//   async update(id: number, updateMenuItemInput: UpdateMenuItemInput): Promise<MenuItemEntity> {
//     await this.menuItemRepository.update(id, updateMenuItemInput);
//     return await this.findOne(id);
//   }

//   async remove(id: number): Promise<MenuItemEntity> {
//     const user = await this.findOne(id);
//     await this.menuItemRepository.delete(id);
//     return user;
//   }
}
