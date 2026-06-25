import React from 'react';
import {
  ShieldCheck,
  FileText,
  Activity,
  ScanLine,
  Lock,
  Share2,
  Camera,
  Globe,
  UserCheck,
  Cookie,
  RefreshCw,
  MessageCircle,
  User,
  HeartPulse,
  MonitorSmartphone,
} from 'lucide-react';
import PolicyPage from '../components/PolicyPage';
import { privacyContent } from '../Translations/privacyContent';

const sectionIcons = [
  FileText, Activity, ScanLine, Lock, Share2, Camera, Globe, UserCheck, Cookie, RefreshCw, MessageCircle,
];
const groupIcons = [User, HeartPulse, MonitorSmartphone];

const Privacy = () => (
  <PolicyPage
    contentByLanguage={privacyContent}
    heroIcon={ShieldCheck}
    sectionIcons={sectionIcons}
    groupIcons={groupIcons}
  />
);

export default Privacy;

