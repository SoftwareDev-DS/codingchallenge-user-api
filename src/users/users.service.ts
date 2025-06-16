import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly filePath = path.resolve(process.cwd(), 'src', 'users.json');
  private readonly logger = new Logger(UsersService.name);

  getAllUsers(): User[] {
    this.logger.log(`Versuche users zu laden aus: ${this.filePath}`);

    try {
      const raw = fs.readFileSync(this.filePath, 'utf8');
      const users: unknown = JSON.parse(raw);

      if (!Array.isArray(users)) {
        throw new Error('Invalid user data format');
      }

      this.logger.log(`Erfolgreich ${users.length} users geladen`);
      return users as User[];
    } catch (error) {
      this.logger.error('Fehler beim Laden der Benutzerdaten:', error);
      throw new NotFoundException(
        'Benutzerdaten konnten nicht geladen werden.',
      );
    }
  }

  getUserById(id: number): User {
    this.logger.log(`Suche user mit ID: ${id}`);
    const users = this.getAllUsers();
    const user = users.find((u) => u.id === id);

    if (!user) {
      this.logger.warn(`User mit ID ${id} nicht gefunden`);
      throw new NotFoundException(`User mit ID ${id} nicht gefunden`);
    }

    return user;
  }
}
