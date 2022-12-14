import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const fetchAnimeDetails = createAsyncThunk(
  'animeDetails/fetch',
  (id: number) => AnimeService.getAnimeDetails(id),
);
