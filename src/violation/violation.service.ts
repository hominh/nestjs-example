import { Injectable } from '@nestjs/common';
import { Violation } from './interfaces/violation.interface';

@Injectable()
export class ViolationService {
  private readonly violation: Violation[] = [];

  create(violation: Violation) {
    this.violation.push(violation);
  }

  findAll(): Violation[] {
    return this.violation;
  }
}
