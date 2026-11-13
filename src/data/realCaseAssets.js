import sergeyZhannaImage from '../pics/real-cases/sergey-zhanna.jpg';
import klausImage from '../pics/real-cases/klaus-after.jpg';
import zhannaPortraitArtwork from '../pics/real-cases/zhanna-cover.png';
import klausPortraitArtwork from '../pics/real-cases/klaus-cover.png';
// The supplied first portrait (white polo) is before treatment; the second
// portrait (patterned shirt) is after treatment. Historical filenames were reversed.
import klausBeforePhoto from '../pics/real-cases/klaus-after-portrait.png';
import klausAfterPhoto from '../pics/real-cases/klaus-before.jpeg';

export const realCaseImages = {
  'sergey-zhanna': sergeyZhannaImage,
  klaus: klausImage,
};

export const realCasePortraits = {
  'sergey-zhanna': zhannaPortraitArtwork,
  klaus: klausPortraitArtwork,
};

export const realCaseDetailImages = {
  klaus: [klausBeforePhoto, klausAfterPhoto],
};

export const realCaseIds = ['sergey-zhanna', 'klaus'];
