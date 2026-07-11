import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Shield, Lock, Bell, Sun, Eye,
  Globe, Mail, Smartphone, ChevronRight,
  Trash2, Download, LogOut,
  MessageSquare, Handshake,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { useToast } from '../components/ui/Toast';

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-all duration-200 ${
        checked ? 'bg-indigo-600' : 'bg-slate-200'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

function ToggleRow({ icon: Icon, label, description, action, danger = false }) {
  return (
    <div className="flex justify-between items-start gap-6 py-4 border-b border-slate-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${danger ? 'bg-red-100' : 'bg-slate-100'}`}>
          <Icon className={`h-4.5 w-4.5 ${danger ? 'text-red-600' : 'text-slate-500'}`} />
        </div>
        <div>
          <p className={`text-sm font-semibold ${danger ? 'text-red-700' : 'text-slate-900'}`}>{label}</p>
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}

export default function Settings() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('profile');

  const [profileSettings, setProfileSettings] = useState({
    displayName: 'Alex Chen',
    username: 'alexchen',
    university: 'Stanford University',
    department: 'Computer Science',
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showSkills: true,
    showActivity: true,
    allowMessages: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactor: false,
  });

  const [notificationPrefs, setNotificationPrefs] = useState({
    emailNotifications: true,
    pushNotifications: true,
    matchUpdates: true,
    sessionReminders: true,
    marketingEmails: false,
    weeklyDigest: true,
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
  });

  const [contactPrefs, setContactPrefs] = useState({
    shareEmailAfterMatch: true,
    sharePhoneAfterMatch: false,
    allowDirectMessages: true,
  });

  const sections = [
    { key: 'profile', label: 'Profile', icon: User, description: 'Name, username' },
    { key: 'privacy', label: 'Privacy', icon: Eye, description: 'Visibility, data' },
    { key: 'security', label: 'Security', icon: Lock, description: 'Password, 2FA' },
    { key: 'notifications', label: 'Notifications', icon: Bell, description: 'Alerts, emails' },
    { key: 'appearance', label: 'Appearance', icon: Sun, description: 'Theme, font' },
    { key: 'contact', label: 'Contact Sharing', icon: Globe, description: 'Sharing prefs' },
  ];

  const handleSave = (section) => {
    toast.success(`${section} settings saved`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-5xl mx-auto"
    >
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">Settings</h1>
        <p className="text-sm text-slate-500">Manage your account preferences and settings</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Left Navigation Sidebar — hidden on mobile */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-card p-3">
            <nav className="flex flex-col gap-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.key;
                return (
                  <button
                    key={section.key}
                    onClick={() => setActiveSection(section.key)}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? 'bg-indigo-100' : 'bg-slate-100'
                    }`}>
                      <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-600' : 'text-slate-500'}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isActive ? 'text-indigo-700' : 'text-slate-900'}`}>
                        {section.label}
                      </p>
                      <p className={`text-xs ${isActive ? 'text-indigo-500' : 'text-slate-400'}`}>
                        {section.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-6 rounded-full bg-indigo-500" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile section tabs */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.key;
            return (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {section.label}
              </button>
            );
          })}
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 space-y-6 min-w-0">
          {activeSection === 'profile' && (
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-base font-semibold text-slate-900">Profile Settings</h2>
                <p className="text-sm text-slate-500 mt-1">Update your public profile information</p>
              </div>
              <div className="space-y-5">
                <Input
                  label="Display Name"
                  value={profileSettings.displayName}
                  onChange={(e) => setProfileSettings((p) => ({ ...p, displayName: e.target.value }))}
                />
                <Input
                  label="Username"
                  value={profileSettings.username}
                  onChange={(e) => setProfileSettings((p) => ({ ...p, username: e.target.value }))}
                  helper="Your unique username for sharing your profile."
                />
                <Input
                  label="University"
                  value={profileSettings.university}
                  onChange={(e) => setProfileSettings((p) => ({ ...p, university: e.target.value }))}
                />
                <Input
                  label="Department"
                  value={profileSettings.department}
                  onChange={(e) => setProfileSettings((p) => ({ ...p, department: e.target.value }))}
                />
                <div className="flex justify-end pt-2">
                  <Button onClick={() => handleSave('Profile')}>Save Changes</Button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-base font-semibold text-slate-900">Privacy Settings</h2>
                <p className="text-sm text-slate-500 mt-1">Control who can see your profile and activity</p>
              </div>
              <ToggleRow
                icon={Globe}
                label="Profile Visibility"
                description="Control who can view your full profile."
                action={
                  <Select
                    value={privacySettings.profileVisibility}
                    onChange={(e) => setPrivacySettings((p) => ({ ...p, profileVisibility: e.target.value }))}
                    className="w-40"
                  >
                    <option value="public">Public</option>
                    <option value="matches">Matches Only</option>
                    <option value="private">Private</option>
                  </Select>
                }
              />
              <ToggleRow
                icon={Mail}
                label="Show Email"
                description="Display your email on your public profile."
                action={
                  <ToggleSwitch checked={privacySettings.showEmail} onChange={(v) => setPrivacySettings((p) => ({ ...p, showEmail: v }))} label="Show email" />
                }
              />
              <ToggleRow
                icon={User}
                label="Show Skills"
                description="Display your skills on your public profile."
                action={
                  <ToggleSwitch checked={privacySettings.showSkills} onChange={(v) => setPrivacySettings((p) => ({ ...p, showSkills: v }))} label="Show skills" />
                }
              />
              <ToggleRow
                icon={Eye}
                label="Activity Status"
                description="Show when you were last active."
                action={
                  <ToggleSwitch checked={privacySettings.showActivity} onChange={(v) => setPrivacySettings((p) => ({ ...p, showActivity: v }))} label="Show activity" />
                }
              />
              <ToggleRow
                icon={MessageSquare}
                label="Allow Messages"
                description="Let other users send you messages."
                action={
                  <ToggleSwitch checked={privacySettings.allowMessages} onChange={(v) => setPrivacySettings((p) => ({ ...p, allowMessages: v }))} label="Allow messages" />
                }
              />
              <div className="flex justify-end pt-4">
                <Button onClick={() => handleSave('Privacy')}>Save Changes</Button>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <>
              <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-base font-semibold text-slate-900">Change Password</h2>
                  <p className="text-sm text-slate-500 mt-1">Update your account password</p>
                </div>
                <div className="space-y-5">
                  <Input label="Current Password" type="password" value={securitySettings.currentPassword} onChange={(e) => setSecuritySettings((s) => ({ ...s, currentPassword: e.target.value }))} />
                  <Input label="New Password" type="password" value={securitySettings.newPassword} onChange={(e) => setSecuritySettings((s) => ({ ...s, newPassword: e.target.value }))} helper="Must be at least 8 characters with a number." />
                  <Input label="Confirm New Password" type="password" value={securitySettings.confirmPassword} onChange={(e) => setSecuritySettings((s) => ({ ...s, confirmPassword: e.target.value }))} />
                  <div className="flex justify-end pt-2">
                    <Button onClick={() => handleSave('Password')}>Update Password</Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-base font-semibold text-slate-900">Two-Factor Authentication</h2>
                  <p className="text-sm text-slate-500 mt-1">Strengthen your account security</p>
                </div>
                <ToggleRow
                  icon={Shield}
                  label="Two-Factor Authentication"
                  description="Add an extra layer of security with SMS or an authenticator app."
                  action={
                    <ToggleSwitch checked={securitySettings.twoFactor} onChange={(v) => setSecuritySettings((s) => ({ ...s, twoFactor: v }))} label="Two-factor" />
                  }
                />
              </div>

              <div className="bg-white rounded-2xl shadow-card p-8">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-base font-semibold text-slate-900">Account Data</h2>
                  <p className="text-sm text-slate-500 mt-1">Manage your sessions and data</p>
                </div>
                <ToggleRow
                  icon={Smartphone}
                  label="Active Sessions"
                  description="View and manage all your logged-in devices."
                  action={<Button variant="outline" size="sm" icon={ChevronRight}>View Sessions</Button>}
                />
                <ToggleRow
                  icon={Download}
                  label="Download My Data"
                  description="Request a full export of your account data."
                  action={<Button variant="outline" size="sm" icon={Download}>Export Data</Button>}
                />
              </div>
            </>
          )}

          {activeSection === 'notifications' && (
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-base font-semibold text-slate-900">Notification Preferences</h2>
                <p className="text-sm text-slate-500 mt-1">Choose how and when you receive notifications</p>
              </div>
              <ToggleRow icon={Mail} label="Email Notifications" description="Receive important notifications via email." action={<ToggleSwitch checked={notificationPrefs.emailNotifications} onChange={(v) => setNotificationPrefs((p) => ({ ...p, emailNotifications: v }))} label="Email" />} />
              <ToggleRow icon={Smartphone} label="Push Notifications" description="Get real-time push notifications in your browser." action={<ToggleSwitch checked={notificationPrefs.pushNotifications} onChange={(v) => setNotificationPrefs((p) => ({ ...p, pushNotifications: v }))} label="Push" />} />
              <ToggleRow icon={Handshake} label="Match Updates" description="Get notified when you receive new skill matches." action={<ToggleSwitch checked={notificationPrefs.matchUpdates} onChange={(v) => setNotificationPrefs((p) => ({ ...p, matchUpdates: v }))} label="Match updates" />} />
              <ToggleRow icon={Bell} label="Session Reminders" description="Receive reminders before your scheduled sessions." action={<ToggleSwitch checked={notificationPrefs.sessionReminders} onChange={(v) => setNotificationPrefs((p) => ({ ...p, sessionReminders: v }))} label="Session reminders" />} />
              <ToggleRow icon={Mail} label="Marketing Emails" description="Receive tips, updates, and promotional content from SkillSwap." action={<ToggleSwitch checked={notificationPrefs.marketingEmails} onChange={(v) => setNotificationPrefs((p) => ({ ...p, marketingEmails: v }))} label="Marketing" />} />
              <ToggleRow icon={Mail} label="Weekly Digest" description="Get a weekly summary of your learning activity." action={<ToggleSwitch checked={notificationPrefs.weeklyDigest} onChange={(v) => setNotificationPrefs((p) => ({ ...p, weeklyDigest: v }))} label="Weekly digest" />} />
              <div className="flex justify-end pt-4">
                <Button onClick={() => handleSave('Notification')}>Save Changes</Button>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-base font-semibold text-slate-900">Appearance</h2>
                <p className="text-sm text-slate-500 mt-1">Customize how SkillSwap looks for you</p>
              </div>
              <ToggleRow
                icon={Sun}
                label="Theme"
                description="Choose your preferred color scheme."
                action={
                  <Select value={appearanceSettings.theme} onChange={(e) => setAppearanceSettings((a) => ({ ...a, theme: e.target.value }))} className="w-36">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </Select>
                }
              />
              <ToggleRow
                icon={Sun}
                label="Font Size"
                description="Adjust the text size across the application."
                action={
                  <Select value={appearanceSettings.fontSize} onChange={(e) => setAppearanceSettings((a) => ({ ...a, fontSize: e.target.value }))} className="w-36">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </Select>
                }
              />
              <div className="flex justify-end pt-4">
                <Button onClick={() => handleSave('Appearance')} disabled>Coming Soon</Button>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-base font-semibold text-slate-900">Contact Sharing Preferences</h2>
                <p className="text-sm text-slate-500 mt-1">Control when your contact information is shared with others</p>
              </div>
              <ToggleRow icon={Mail} label="Share Email After Match" description="Automatically share your email once a match is accepted." action={<ToggleSwitch checked={contactPrefs.shareEmailAfterMatch} onChange={(v) => setContactPrefs((p) => ({ ...p, shareEmailAfterMatch: v }))} label="Share email" />} />
              <ToggleRow icon={Smartphone} label="Share Phone After Match" description="Automatically share your phone number once a match is accepted." action={<ToggleSwitch checked={contactPrefs.sharePhoneAfterMatch} onChange={(v) => setContactPrefs((p) => ({ ...p, sharePhoneAfterMatch: v }))} label="Share phone" />} />
              <ToggleRow icon={MessageSquare} label="Allow Direct Messages" description="Let matched users send you direct messages." action={<ToggleSwitch checked={contactPrefs.allowDirectMessages} onChange={(v) => setContactPrefs((p) => ({ ...p, allowDirectMessages: v }))} label="Allow DMs" />} />
              <div className="flex justify-end pt-4">
                <Button onClick={() => handleSave('Contact preferences')}>Save Changes</Button>
              </div>
            </div>
          )}

          {/* Danger Zone — Always Visible */}
          <div className="rounded-2xl border border-red-200 bg-red-50/30 p-8">
            <div className="border-b border-red-200 pb-4 mb-6">
              <h2 className="text-base font-semibold text-red-700">Danger Zone</h2>
              <p className="text-sm text-red-500 mt-1">These actions are irreversible. Please proceed with extreme caution.</p>
            </div>
            <ToggleRow
              icon={Trash2}
              label="Delete Account"
              description="Permanently delete your account and all associated data. This cannot be undone."
              danger
              action={<Button variant="danger" icon={Trash2} size="sm">Delete Account</Button>}
            />
            <ToggleRow
              icon={LogOut}
              label="Sign Out Everywhere"
              description="Sign out from all active sessions and devices immediately."
              danger
              action={<Button variant="outline" icon={LogOut} size="sm" className="border-red-200 text-red-600 hover:bg-red-50">Sign Out All</Button>}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
