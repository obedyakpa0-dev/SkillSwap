import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Heart,
  Share2,
  Trash2,
  Check,
  Plus,
  Edit,
  Send,
  Sparkles,
} from 'lucide-react';
import Button, { ButtonGroup } from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function ButtonShowcase() {
  return (
    <div className="flex-1 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Button <span className="text-gradient">Components</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Beautiful, accessible, and highly customizable button components with smooth animations
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Primary Variants */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Primary Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={ArrowRight}>
                Primary Button
              </Button>
              <Button variant="secondary" icon={Check}>
                Secondary
              </Button>
              <Button variant="accent" icon={Sparkles}>
                Accent
              </Button>
              <Button variant="gradient" iconRight={ArrowRight}>
                Gradient
              </Button>
              <Button variant="shimmer" icon={Sparkles}>
                Shimmer Effect
              </Button>
            </div>
          </Card>

          {/* Status Variants */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Status Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="success" icon={Check}>
                Success
              </Button>
              <Button variant="warning" icon={Download}>
                Warning
              </Button>
              <Button variant="danger" icon={Trash2}>
                Danger
              </Button>
            </div>
          </Card>

          {/* Outline Variants */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Outline Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" icon={Edit}>
                Outline
              </Button>
              <Button variant="outline-primary" icon={Heart}>
                Outline Primary
              </Button>
            </div>
          </Card>

          {/* Ghost Variants */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Ghost Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" icon={Share2}>
                Ghost
              </Button>
              <Button variant="ghost-primary" icon={Heart}>
                Ghost Primary
              </Button>
            </div>
          </Card>

          {/* Soft Variants */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Soft Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="soft" icon={Plus}>
                Soft Primary
              </Button>
              <Button variant="soft-success" icon={Check}>
                Soft Success
              </Button>
              <Button variant="soft-warning" icon={Download}>
                Soft Warning
              </Button>
              <Button variant="soft-danger" icon={Trash2}>
                Soft Danger
              </Button>
            </div>
          </Card>

          {/* Sizes */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs" icon={Heart}>
                Extra Small
              </Button>
              <Button size="sm" icon={Heart}>
                Small
              </Button>
              <Button size="md" icon={Heart}>
                Medium (Default)
              </Button>
              <Button size="lg" icon={Heart}>
                Large
              </Button>
              <Button size="xl" icon={Heart}>
                Extra Large
              </Button>
            </div>
          </Card>

          {/* Icon Only */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Icon Only Buttons</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon-sm" icon={Heart} aria-label="Like" />
              <Button size="icon" icon={Heart} aria-label="Like" />
              <Button size="icon-lg" icon={Heart} aria-label="Like" />
              <Button variant="outline" size="icon" icon={Share2} aria-label="Share" />
              <Button variant="ghost" size="icon" icon={Edit} aria-label="Edit" />
              <Button variant="danger" size="icon" icon={Trash2} aria-label="Delete" />
            </div>
          </Card>

          {/* States */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Button States</h2>
            <div className="flex flex-wrap gap-4">
              <Button icon={Send}>Normal</Button>
              <Button loading icon={Send}>
                Loading
              </Button>
              <Button disabled icon={Send}>
                Disabled
              </Button>
            </div>
          </Card>

          {/* Full Width */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Full Width</h2>
            <div className="space-y-4">
              <Button fullWidth iconRight={ArrowRight}>
                Full Width Primary
              </Button>
              <Button variant="outline" fullWidth icon={Download}>
                Full Width Outline
              </Button>
            </div>
          </Card>

          {/* Button Groups */}
          <Card className="p-8">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Button Groups</h2>
            <div className="space-y-4">
              <ButtonGroup>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </ButtonGroup>
              <ButtonGroup vertical>
                <Button variant="ghost" icon={Edit}>
                  Edit
                </Button>
                <Button variant="ghost" icon={Share2}>
                  Share
                </Button>
                <Button variant="ghost" icon={Trash2}>
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          </Card>

          {/* Glass Effect (for dark backgrounds) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-accent-600 to-primary-800 p-8">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyIDEyIDUuMzczIDEyIDEyem0wLTM0YzAtNi42MjctNS4zNzMtMTItMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTIgNS4zNzMtMTIgMTItMTIgMTIgNS4zNzMgMTIgMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
            <div className="relative">
              <h2 className="mb-6 text-xl font-bold text-white">Glass Effect (Dark Background)</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="glass" icon={Sparkles}>
                  Glass Button
                </Button>
                <Button variant="glass" icon={Download}>
                  Download
                </Button>
                <Button variant="glass" size="lg" iconRight={ArrowRight}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
