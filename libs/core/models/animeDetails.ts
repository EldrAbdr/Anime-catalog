import { AnimeType } from '../enums/animeType';
import { AnimeStatus } from '../enums/statusType';

import { DateTimeRange } from './dateTimeRange';
import { Genre } from './genre';
import { Studio } from './studio';

import { Immerable, OmitImmerable } from './immerable';

/** Anime details. */
export class AnimeDetails extends Immerable {

  /** Id. */
  public readonly id: number;

  /** Url of image. */
  public readonly imageUrl: string;

  /** English title. */
  public readonly titleEng: string;

  /** Japanese title. */
  public readonly titleJpn: string;

  /** Type. */
  public readonly type: AnimeType;

  /** Status. */
  public readonly status: AnimeStatus;

  /** Synopsis. */
  public readonly synopsis: string;

  /** Airing. */
  public readonly airing: boolean;

  /** Aired. */
  public readonly aired: DateTimeRange;

  /** List of studios. */
  public readonly listOfStudios: Studio[];

  /** List of genres. */
  public readonly listOfGenres: Genre[];

  public constructor(data: Args) {
    super();
    this.id = data.id;
    this.titleEng = data.titleEng;
    this.titleJpn = data.titleJpn;
    this.imageUrl = data.imageUrl;
    this.aired = data.aired;
    this.type = data.type;
    this.status = data.status;
    this.synopsis = data.synopsis;
    this.airing = data.airing;
    this.listOfStudios = data.listOfStudios;
    this.listOfGenres = data.listOfGenres;
  }
}

type Args = OmitImmerable<AnimeDetails>;
