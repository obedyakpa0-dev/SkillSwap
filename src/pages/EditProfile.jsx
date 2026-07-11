import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Camera, X, Plus, Check, ArrowLeft, Save } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Badge from '../components/ui/Badge';
import { useToast } from '../components/ui/Toast';
import { useAuth } from '../hooks/useAuth';

export default function EditProfile() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: 'Alex',
    lastName: 'Chen',
    email: user?.email || 'alex@skillswap.dev',
    university: 'Stanford University',
    department: 'Computer Science',
    academicLevel: 'Senior',
    bio: 'Passionate computer science student with a love for teaching and learning.',
  });

  const [skillsOffered, setSkillsOffered] = useState(['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git']);
  const [skillsWanted, setSkillsWanted] = useState(['Python', 'UI/UX Design', 'Node.js', 'GraphQL']);
  const [newOfferedSkill, setNewOfferedSkill] = useState('');
  const [newWantedSkill, setNewWantedSkill] = useState('');
  const [availability, setAvailability] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [idPreview, setIdPreview] = useState(null);
  const [saving, setSaving] = useState(false);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (day) => {
    setAvailability((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addSkill = (type) => {
    if (type === 'offered' && newOfferedSkill.trim()) {
      setSkillsOffered((prev) => [...prev, newOfferedSkill.trim()]);
      setNewOfferedSkill('');
    } else if (type === 'wanted' && newWantedSkill.trim()) {
      setSkillsWanted((prev) => [...prev, newWantedSkill.trim()]);
      setNewWantedSkill('');
    }
  };

  const removeSkill = (type, skill) => {
    if (type === 'offered') setSkillsOffered((prev) => prev.filter((s) => s !== skill));
    else setSkillsWanted((prev) => prev.filter((s) => s !== skill));
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const handleIdSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) setIdPreview(URL.createObjectURL(file));
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success('Profile updated successfully');
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-4xl mx-auto"
    >
      {/* Page Header */}
      <div className="mb-8">
        <Link to="/profile">
          <Button variant="ghost" icon={ArrowLeft} className="mb-6">
            Back to Profile
          </Button>
        </Link>
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Edit Profile
              </h1>
              <p className="text-sm text-slate-500 mt-1">Update your personal information</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/profile">
              <Button variant="outline" size="md">Cancel</Button>
            </Link>
            <Button onClick={handleSave} loading={saving} icon={Save} size="md" className="px-6">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Basic Info Card */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-base font-semibold text-slate-900">Basic Info</h2>
          </div>
          <div className="space-y-5">
            {/* Avatar upload centered */}
            <div className="flex flex-col items-center gap-4 pb-6 border-b border-slate-100">
              <div className="relative">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="h-20 w-20 rounded-2xl object-cover shadow-lg" />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-700 shadow-md">
                    <Camera className="h-8 w-8" />
                  </div>
                )}
              </div>
              <div className="text-center">
                <label className="cursor-pointer inline-block">
                  <Button variant="outline" icon={Upload} as="span" size="sm">Choose Photo</Button>
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoSelect} />
                </label>
                {photoPreview && (
                  <Button variant="ghost" icon={X} onClick={() => setPhotoPreview(null)} className="ml-2" size="sm">
                    Remove
                  </Button>
                )}
                <p className="text-xs text-slate-500 mt-2">
                  Square image, at least 400x400px
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input label="First Name" value={form.firstName} onChange={handleChange('firstName')} />
              <Input label="Last Name" value={form.lastName} onChange={handleChange('lastName')} />
            </div>
            <Input
              label="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              disabled
              helper="Email cannot be changed for security reasons"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input label="University" value={form.university} onChange={handleChange('university')} />
              <Input label="Department" value={form.department} onChange={handleChange('department')} />
            </div>
            <Select label="Academic Level" value={form.academicLevel} onChange={handleChange('academicLevel')}>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate">Graduate</option>
              <option value="PhD">PhD</option>
            </Select>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-base font-semibold text-slate-900">Skills</h2>
          </div>
          <div className="space-y-5">
            {/* Skills I Can Teach */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-3">Skills I Can Teach</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {skillsOffered.map((skill) => (
                  <Badge key={skill} color="primary" variant="outline" className="px-3 py-1.5 text-sm font-semibold">
                    <span className="flex items-center gap-2">
                      {skill}
                      <button
                        onClick={() => removeSkill('offered', skill)}
                        className="rounded-full hover:text-red-500 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., React, Python, Design..."
                  value={newOfferedSkill}
                  onChange={(e) => setNewOfferedSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSkill('offered')}
                  className="flex-1"
                />
                <Button variant="outline" size="icon" icon={Plus} onClick={() => addSkill('offered')} />
              </div>
            </div>

            {/* Skills I Want to Learn */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-3">Skills I Want to Learn</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {skillsWanted.map((skill) => (
                  <Badge key={skill} color="secondary" variant="outline" className="px-3 py-1.5 text-sm font-semibold">
                    <span className="flex items-center gap-2">
                      {skill}
                      <button
                        onClick={() => removeSkill('wanted', skill)}
                        className="rounded-full hover:text-red-500 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., GraphQL, UI/UX, Machine Learning..."
                  value={newWantedSkill}
                  onChange={(e) => setNewWantedSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSkill('wanted')}
                  className="flex-1"
                />
                <Button variant="outline" size="icon" icon={Plus} onClick={() => addSkill('wanted')} />
              </div>
            </div>
          </div>
        </div>

        {/* Bio Card */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-base font-semibold text-slate-900">Bio</h2>
          </div>
          <div className="space-y-5">
            <Textarea
              label="About Me"
              value={form.bio}
              onChange={handleChange('bio')}
              helper={`${form.bio.length}/500 characters`}
              rows={5}
              placeholder="Share your background, interests, and what you're passionate about..."
            />
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-3">Availability</label>
              <div className="flex flex-wrap gap-2.5">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-bold transition-all ${
                      availability.includes(day)
                        ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-transparent text-indigo-700 shadow-sm shadow-indigo-500/20'
                        : 'border-slate-200 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/50'
                    }`}
                  >
                    {availability.includes(day) && <Check className="h-3.5 w-3.5" />}
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Card */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-base font-semibold text-slate-900">Social Links</h2>
          </div>
          <div className="space-y-5">
            {idPreview ? (
              <div className="space-y-4">
                <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
                  <img src={idPreview} alt="Student ID" className="w-full h-48 object-cover" />
                </div>
                <Button variant="ghost" icon={X} onClick={() => setIdPreview(null)} className="text-red-600 hover:text-red-700">
                  Remove Upload
                </Button>
              </div>
            ) : (
              <label className="block cursor-pointer">
                <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition-all hover:border-indigo-400 hover:bg-indigo-50/50">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                    <Upload className="h-7 w-7 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Click to upload</p>
                    <p className="text-xs text-slate-500">Student ID for verification (PNG, JPG or PDF)</p>
                  </div>
                </div>
                <input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleIdSelect} />
              </label>
            )}
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex sm:hidden items-center justify-between gap-4 pt-6">
          <Link to="/profile" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">Cancel</Button>
          </Link>
          <Button
            onClick={handleSave}
            loading={saving}
            icon={Save}
            size="lg"
            className="flex-1"
          >
            Save
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
