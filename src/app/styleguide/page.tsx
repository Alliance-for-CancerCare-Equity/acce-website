'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { RadioGroup } from '@/components/ui/Radio'

const brandColors = [
  { name: 'Lavender', key: 'lavender', hex: '#9B8BB8', usage: 'Compassion, softness' },
  { name: 'Teal', key: 'teal', hex: '#2A9D8F', usage: 'Buttons, trust' },
  { name: 'Charcoal', key: 'charcoal', hex: '#2D3436', usage: 'Text, structure' },
  { name: 'Red', key: 'red', hex: '#C0392B', usage: 'CTAs ONLY' },
  { name: 'Gold', key: 'gold', hex: '#D4A03C', usage: 'Highlights, warmth' },
]

const colorScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export default function StyleguidePage() {
  return (
    <main className="min-h-screen bg-charcoal-50">
      {/* Header */}
      <div className="bg-gradient-charcoal py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-5xl font-bold text-white">
            ACCE Design System
          </h1>
          <p className="mt-4 text-xl text-charcoal-300">
            Visual language for the Alliance for CancerCare Equity
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Brand Colors */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brandColors.map((color) => (
              <div key={color.key} className="space-y-3">
                <div
                  className="h-24 rounded-xl shadow-medium"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="font-semibold text-charcoal-900">{color.name}</p>
                  <p className="text-sm text-charcoal-600">{color.hex}</p>
                  <p className="text-xs text-charcoal-500">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Scales */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Color Scales
          </h2>
          <div className="space-y-6">
            {/* Lavender Scale */}
            <div>
              <p className="text-sm font-medium text-charcoal-700 mb-2">Lavender</p>
              <div className="flex gap-1">
                {colorScales.map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 flex-1 rounded flex items-center justify-center text-xs font-medium bg-lavender-${shade} ${shade >= 500 ? 'text-white' : 'text-charcoal-900'}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            {/* Teal Scale */}
            <div>
              <p className="text-sm font-medium text-charcoal-700 mb-2">Teal</p>
              <div className="flex gap-1">
                {colorScales.map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 flex-1 rounded flex items-center justify-center text-xs font-medium bg-teal-${shade} ${shade >= 500 ? 'text-white' : 'text-charcoal-900'}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            {/* Charcoal Scale */}
            <div>
              <p className="text-sm font-medium text-charcoal-700 mb-2">Charcoal</p>
              <div className="flex gap-1">
                {colorScales.map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 flex-1 rounded flex items-center justify-center text-xs font-medium bg-charcoal-${shade} ${shade >= 400 ? 'text-white' : 'text-charcoal-900'}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Scale */}
            <div>
              <p className="text-sm font-medium text-charcoal-700 mb-2">Gold</p>
              <div className="flex gap-1">
                {colorScales.map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 flex-1 rounded flex items-center justify-center text-xs font-medium bg-gold-${shade} ${shade >= 600 ? 'text-white' : 'text-charcoal-900'}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            {/* Red Scale */}
            <div>
              <p className="text-sm font-medium text-charcoal-700 mb-2">Red (CTA Only)</p>
              <div className="flex gap-1">
                {colorScales.map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 flex-1 rounded flex items-center justify-center text-xs font-medium bg-red-${shade} ${shade >= 500 ? 'text-white' : 'text-charcoal-900'}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Gradients
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-warm">
              <p className="font-semibold text-charcoal-900">Warm Gradient</p>
              <p className="text-sm text-charcoal-600">lavender-100 → gold-100</p>
              <p className="text-xs text-charcoal-500 mt-2">Hero sections, CTAs</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-accent text-white">
              <p className="font-semibold">Accent Gradient</p>
              <p className="text-sm text-white/80">teal-400 → lavender-400</p>
              <p className="text-xs text-white/60 mt-2">Card borders, decorative</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-hero">
              <p className="font-semibold text-charcoal-900">Hero Gradient</p>
              <p className="text-sm text-charcoal-600">lavender → gold → teal</p>
              <p className="text-xs text-charcoal-500 mt-2">Full-bleed hero backgrounds</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-charcoal text-white">
              <p className="font-semibold">Charcoal Gradient</p>
              <p className="text-sm text-charcoal-300">charcoal-900 → charcoal-950</p>
              <p className="text-xs text-charcoal-400 mt-2">Footer, dark sections</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Buttons
          </h2>

          {/* Solid Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Solid Variants</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="solid" color="teal">Primary (Teal)</Button>
              <Button variant="solid" color="cta">Donate (CTA)</Button>
              <Button variant="solid" color="charcoal">Charcoal</Button>
              <Button variant="solid" color="lavender">Lavender</Button>
              <Button variant="solid" color="gold">Gold</Button>
            </div>
          </div>

          {/* Outline Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Outline Variants</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline" color="charcoal">Secondary (Charcoal)</Button>
              <Button variant="outline" color="teal">Teal Outline</Button>
            </div>
          </div>

          {/* Ghost Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Ghost Variants</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="ghost" color="charcoal">Ghost Charcoal</Button>
              <Button variant="ghost" color="teal">Ghost Teal</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* On Dark Background */}
          <div className="p-8 rounded-2xl bg-charcoal-900">
            <h3 className="text-lg font-semibold text-white mb-4">On Dark Background</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="solid" color="white">White</Button>
              <Button variant="outline" color="white">White Outline</Button>
              <Button variant="ghost" color="white">Ghost White</Button>
              <Button variant="solid" color="cta">Donate</Button>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Typography
          </h2>
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-soft">
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Display XL (Hero)</p>
              <p className="font-display text-7xl font-bold text-charcoal-900">
                Equity in Care
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Display LG (Page Title)</p>
              <p className="font-display text-6xl font-bold text-charcoal-900">
                Our Mission
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Display MD (Section)</p>
              <p className="font-display text-5xl font-bold text-charcoal-900">
                Making Impact
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Heading LG</p>
              <p className="font-display text-4xl font-semibold text-charcoal-900">
                Support Patients
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Heading MD</p>
              <p className="font-display text-3xl font-semibold text-charcoal-900">
                Get Involved
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Body LG (Lead)</p>
              <p className="text-xl text-charcoal-700 max-w-2xl">
                We believe every cancer patient deserves access to quality care,
                regardless of their financial situation.
              </p>
            </div>
            <div>
              <p className="text-sm text-charcoal-500 mb-2">Body</p>
              <p className="text-base text-charcoal-600 max-w-2xl">
                The Alliance for CancerCare Equity provides compassionate support
                for patients and their families throughout their entire journey.
              </p>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Shadows & Elevation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-soft">
              <p className="text-sm font-medium text-charcoal-900">Soft</p>
              <p className="text-xs text-charcoal-500">Cards at rest</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-medium">
              <p className="text-sm font-medium text-charcoal-900">Medium</p>
              <p className="text-xs text-charcoal-500">Hover states</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-strong">
              <p className="text-sm font-medium text-charcoal-900">Strong</p>
              <p className="text-xs text-charcoal-500">Modals, dropdowns</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-glow-teal">
              <p className="text-sm font-medium text-teal-600">Glow Teal</p>
              <p className="text-xs text-charcoal-500">Teal accent</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-glow-gold">
              <p className="text-sm font-medium text-gold-600">Glow Gold</p>
              <p className="text-xs text-charcoal-500">Gold accent</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-glow-lavender">
              <p className="text-sm font-medium text-lavender-600">Glow Lavender</p>
              <p className="text-xs text-charcoal-500">Lavender accent</p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Cards
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-lg text-charcoal-900 mb-2">
                Default Card
              </h3>
              <p className="text-charcoal-600 text-sm">
                Basic card with shadow and hover lift
              </p>
            </div>
            <div className="p-6 rounded-2xl card-gradient-border shadow-soft">
              <h3 className="font-semibold text-lg text-charcoal-900 mb-2">
                Gradient Border Card
              </h3>
              <p className="text-charcoal-600 text-sm">
                Card with teal → lavender border
              </p>
            </div>
            <div className="p-6 bg-lavender-50 rounded-2xl shadow-soft border border-lavender-200">
              <h3 className="font-semibold text-lg text-charcoal-900 mb-2">
                Tinted Card
              </h3>
              <p className="text-charcoal-600 text-sm">
                Lavender tinted background
              </p>
            </div>
          </div>
        </section>

        {/* Section Backgrounds */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Section Backgrounds
          </h2>
          <div className="grid gap-6">
            <div className="p-8 rounded-2xl bg-lavender-50 border border-lavender-100">
              <p className="font-semibold text-charcoal-900">Lavender Tint</p>
              <p className="text-sm text-charcoal-600">For warm, compassionate sections</p>
            </div>
            <div className="p-8 rounded-2xl bg-teal-50 border border-teal-100">
              <p className="font-semibold text-charcoal-900">Teal Tint</p>
              <p className="text-sm text-charcoal-600">For trust and action sections</p>
            </div>
            <div className="p-8 rounded-2xl bg-gold-50 border border-gold-100">
              <p className="font-semibold text-charcoal-900">Gold Tint</p>
              <p className="text-sm text-charcoal-600">For warmth and highlights</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-charcoal text-white">
              <p className="font-semibold">Charcoal</p>
              <p className="text-sm text-charcoal-300">For footer, contrast sections</p>
            </div>
          </div>
        </section>

        {/* Patterns */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Decorative Patterns
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-lavender-50 bg-dot-pattern">
              <p className="font-semibold text-charcoal-900">Dot Pattern (Light)</p>
              <p className="text-sm text-charcoal-600">Subtle texture for sections</p>
            </div>
            <div className="p-8 rounded-2xl bg-charcoal-900 bg-dot-pattern-light text-white">
              <p className="font-semibold">Dot Pattern (Dark)</p>
              <p className="text-sm text-charcoal-300">For dark backgrounds</p>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Animations
          </h2>
          <p className="text-charcoal-600 mb-6">
            Hover over cards to see hover states. Animation classes available:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-6 bg-white rounded-xl shadow-soft text-center">
              <code className="text-sm text-teal-600">.animate-fade-up</code>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-soft text-center">
              <code className="text-sm text-teal-600">.animate-scale-in</code>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-soft text-center">
              <code className="text-sm text-teal-600">.animate-pulse-subtle</code>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-soft text-center">
              <code className="text-sm text-teal-600">.animate-float</code>
            </div>
          </div>
        </section>

        {/* Form Components */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-8">
            Form Components
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-soft space-y-8">
            {/* Input */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Input</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Default Input" placeholder="Enter your name" />
                <Input label="Required Input" placeholder="Enter email" required />
                <Input label="With Hint" placeholder="Enter password" hint="Must be at least 8 characters" type="password" />
                <Input label="With Error" placeholder="Enter email" error="Please enter a valid email address" defaultValue="invalid-email" />
                <Input label="Disabled" placeholder="Cannot edit" disabled />
              </div>
            </div>

            {/* Textarea */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Textarea</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Textarea label="Message" placeholder="Write your message..." />
                <Textarea label="With Error" placeholder="Description" error="Description is required" />
              </div>
            </div>

            {/* Select */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Select</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Country"
                  placeholder="Select a country"
                  options={[
                    { value: 'ca', label: 'Canada' },
                    { value: 'gh', label: 'Ghana' },
                    { value: 'us', label: 'United States' },
                  ]}
                />
                <Select
                  label="With Error"
                  placeholder="Select option"
                  error="Please select an option"
                  options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                  ]}
                />
              </div>
            </div>

            {/* Checkbox */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Checkbox</h3>
              <div className="space-y-4">
                <Checkbox label="Accept terms and conditions" />
                <Checkbox label="Subscribe to newsletter" description="Get updates about our work and impact" />
                <Checkbox label="With error" error="You must accept the terms" />
              </div>
            </div>

            {/* Radio */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Radio Group</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <RadioGroup
                  name="donation-amount"
                  label="Donation Amount"
                  options={[
                    { value: '25', label: '$25', description: 'Covers one treatment session' },
                    { value: '50', label: '$50', description: 'Supports a family for a week' },
                    { value: '100', label: '$100', description: 'Funds critical medication' },
                  ]}
                />
                <RadioGroup
                  name="frequency"
                  label="Frequency"
                  options={[
                    { value: 'once', label: 'One-time' },
                    { value: 'monthly', label: 'Monthly' },
                    { value: 'yearly', label: 'Yearly' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
