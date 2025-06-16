/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            getAllUsers: jest.fn().mockReturnValue([{ id: 1, name: 'Anakin' }]),
            getUserById: jest
              .fn()
              .mockImplementation((id) => ({ id, name: 'Darth' })),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should return users', () => {
    expect(controller.getAll()).toEqual([{ id: 1, name: 'Anakin' }]);
  });

  it('should return user by id', () => {
    expect(controller.getById(1)).toEqual({ id: 1, name: 'Darth' });
  });
});
