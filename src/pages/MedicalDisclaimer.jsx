import React from 'react';
import {
  Stethoscope,
  Info,
  MonitorSmartphone,
  Handshake,
  Activity,
  Camera,
  Wallet,
  ExternalLink,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';
import PolicyPage from '../components/PolicyPage';
import { disclaimerContent } from '../Translations/disclaimerContent';

const sectionIcons = [Info, MonitorSmartphone, Handshake, Activity, Camera, Wallet, ExternalLink, AlertTriangle, FileCheck];

const MedicalDisclaimer = () => (
  <PolicyPage
    contentByLanguage={disclaimerContent}
    heroIcon={Stethoscope}
    sectionIcons={sectionIcons}
  />
);

export default MedicalDisclaimer;
