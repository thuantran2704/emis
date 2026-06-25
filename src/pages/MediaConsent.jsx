import React from 'react';
import {
  Camera,
  ShieldCheck,
  Vote,
  FileImage,
  Megaphone,
  SlidersHorizontal,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';
import PolicyPage from '../components/PolicyPage';
import { mediaContent } from '../Translations/mediaContent';

const sectionIcons = [ShieldCheck, Vote, FileImage, Megaphone, SlidersHorizontal, RefreshCw, MessageCircle];

const MediaConsent = () => (
  <PolicyPage
    contentByLanguage={mediaContent}
    heroIcon={Camera}
    sectionIcons={sectionIcons}
  />
);

export default MediaConsent;
