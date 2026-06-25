import React from 'react';
import {
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  Factory,
  CalendarClock,
  ListChecks,
  ShieldAlert,
  Globe,
  MessageCircle,
} from 'lucide-react';
import PolicyPage from '../components/PolicyPage';
import { warrantyContent } from '../Translations/warrantyContent';

const sectionIcons = [CalendarCheck, ShieldCheck, Factory, CalendarClock, ListChecks, ShieldAlert, Globe, MessageCircle];

const Warranty = () => (
  <PolicyPage
    contentByLanguage={warrantyContent}
    heroIcon={BadgeCheck}
    sectionIcons={sectionIcons}
  />
);

export default Warranty;
