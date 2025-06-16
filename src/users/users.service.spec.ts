/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly filePath = path.join(__dirname, '..', 'users.json');

  getAllUsers(): User[] {
    try {
      const raw = fs.readFileSync(this.filePath, 'utf8');
      const users: unknown = JSON.parse(raw);

      if (!Array.isArray(users)) {
        throw new Error('Invalid user data format: not an array');
      }

      // Optional: Validate that each object has the required keys
      users.forEach((u, index) => {
        if (
          typeof u !== 'object' ||
          u === null ||
          typeof u['id'] !== 'number' ||
          typeof u['name'] !== 'string' ||
          typeof u['email'] !== 'string'
        ) {
          throw new Error(`Invalid user format at index ${index}`);
        }
      });

      return users as User[];
    } catch (error) {
      console.error('Fehler beim Laden der Benutzerdaten:', error.message);
      throw new NotFoundException(
        'Benutzerdaten konnten nicht geladen werden.',
      );
    }
  }

  getUserById(id: number): User {
    const users = this.getAllUsers();
    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException(`User mit ID ${id} nicht gefunden`);
    }

    return user;
  }
}
