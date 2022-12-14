import { RegistrationDto } from '../dtos/registration.dto';
import { Registration } from '../models/registration';
export namespace RegisterMapper {

  /**
   * Maps model to DTO.
   * @param data Registration model.
   */
  export function toDto(data: Registration): RegistrationDto {
    return {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
    };
  }
}
