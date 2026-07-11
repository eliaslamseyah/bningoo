'use client';

import * as React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Container,
  Grid,
  Stack,
  Sidebar,
  Spacer,
  Tabs,
  Breadcrumbs,
  Navbar,
  NavbarBrand,
  NavbarSection,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Heading,
  Typography,
  Text,
} from '@bningoo/ui';

/* ── Section wrapper component ─────────────────────────────────── */
function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <Card variant="elevated" className="mb-12">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Stack gap="lg">{children}</Stack>
      </CardContent>
    </Card>
  );
}

function DemoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Text variant="caption" color="muted" className="mb-2 block">{label}</Text>
      <div className="flex flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  );
}

/* ── Theme Toggle ───────────────────────────────────────────────── */
function ThemeToggle() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} className="sr-only peer" />
      <div className="relative w-9 h-5 bg-neutral-300 dark:bg-neutral-600 peer-checked:bg-primary-500 rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
      <Text variant="body-sm">{dark ? '🌙 Dark' : '☀️ Light'}</Text>
    </label>
  );
}

/* ── Home Page ──────────────────────────────────────────────────── */
export default function Home() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary-600">
            <rect width="28" height="28" rx="6" fill="currentColor" />
            <path d="M8 14L12 18L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Bningoo UI
        </NavbarBrand>
        <NavbarSection>
          <ThemeToggle />
        </NavbarSection>
      </Navbar>

      <Container className="py-10">
        {/* Header */}
        <Stack gap="sm" className="mb-12 text-center">
          <Heading as="h1">Bningoo Design System</Heading>
          <Typography variant="lead" color="muted">
            A comprehensive component library for the Bningoo platform.
            Tailwind CSS v4, shadcn/ui inspired, fully accessible.
          </Typography>
          <Breadcrumbs
            className="justify-center mt-2"
            items={[
              { label: 'Home' },
              { label: 'Design System', href: '/' },
            ]}
          />
        </Stack>

        <Separator className="mb-12" />

        {/* ── BUTTONS ─────────────────────────────────── */}
        <Section title="Buttons" description="Variants, sizes, and states.">
          <DemoRow label="Variants">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </DemoRow>
          <DemoRow label="Sizes">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </DemoRow>
          <DemoRow label="States">
            <Button disabled>Disabled</Button>
            <Button className="animate-pulse">Loading…</Button>
          </DemoRow>
        </Section>

        {/* ── FORM COMPONENTS ─────────────────────────── */}
        <Section title="Form Components" description="Input, Select, Checkbox, Radio, Switch, Textarea.">
          <DemoRow label="Input">
            <div className="w-72">
              <Label htmlFor="demo-input">Email <span className="text-error">*</span></Label>
              <Input id="demo-input" type="email" placeholder="you@company.com" className="mt-1" />
            </div>
          </DemoRow>
          <DemoRow label="Input (Error)">
            <div className="w-72">
              <Label htmlFor="demo-input-error">Password</Label>
              <Input id="demo-input-error" type="password" error placeholder="••••••••" className="mt-1" />
              <Text variant="caption" color="error" className="mt-1">Password must be at least 8 characters</Text>
            </div>
          </DemoRow>
          <DemoRow label="Textarea">
            <div className="w-full max-w-md">
              <Label htmlFor="demo-textarea">Description</Label>
              <Textarea id="demo-textarea" placeholder="Write your message…" className="mt-1" />
            </div>
          </DemoRow>
          <DemoRow label="Select">
            <div className="w-72">
              <Label htmlFor="demo-select">Role</Label>
              <Select>
                <SelectTrigger id="demo-select" className="mt-1">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="kitchen">Kitchen Staff</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="company_manager">Company Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </DemoRow>
          <DemoRow label="Checkboxes">
            <Checkbox label="Remember me" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="I agree to terms" disabled />
          </DemoRow>
          <DemoRow label="Radio Group">
            <RadioGroup defaultValue="option-1">
              <RadioGroupItem value="option-1" label="Option 1" />
              <RadioGroupItem value="option-2" label="Option 2" />
              <RadioGroupItem value="option-3" label="Option 3 (disabled)" disabled />
            </RadioGroup>
          </DemoRow>
          <DemoRow label="Switches">
            <Switch label="Notifications" defaultChecked />
            <Switch label="Dark mode" />
            <Switch label="Auto-renew" disabled />
          </DemoRow>
        </Section>

        {/* ── CARDS ───────────────────────────────────── */}
        <Section title="Cards" description="Variants: default, elevated, bordered, ghost.">
          <Grid cols={4} gap="md">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default</CardTitle>
                <CardDescription>Standard card with border and subtle shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Body content goes here.</Typography>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
                <CardDescription>More prominent shadow for modals.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Lifted surface effect.</Typography>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered</CardTitle>
                <CardDescription>Bold 2px border style.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Great for selection states.</Typography>
              </CardContent>
            </Card>
            <Card variant="ghost">
              <CardHeader>
                <CardTitle>Ghost</CardTitle>
                <CardDescription>Subtle background only.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Minimal visual weight.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Separator className="my-4" />
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>2 items in your cart</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="sm">
                <div className="flex justify-between"><Text>Chicken Rice Bowl</Text><Text weight="medium">$12.50</Text></div>
                <div className="flex justify-between"><Text>Iced Lemon Tea</Text><Text weight="medium">$3.50</Text></div>
                <Separator />
                <div className="flex justify-between"><Text weight="semibold">Total</Text><Text weight="bold" color="primary">$16.00</Text></div>
              </Stack>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Checkout</Button>
            </CardFooter>
          </Card>
        </Section>

        {/* ── TYPOGRAPHY ───────────────────────────────── */}
        <Section title="Typography" description="Heading scale, body text, and utilities.">
          <Stack gap="xs">
            <Heading as="h1">Heading 1 — 4xl</Heading>
            <Heading as="h2">Heading 2 — 3xl</Heading>
            <Heading as="h3">Heading 3 — 2xl</Heading>
            <Heading as="h4">Heading 4 — xl</Heading>
            <Heading as="h5">Heading 5 — lg</Heading>
            <Heading as="h6">Heading 6 — base</Heading>
          </Stack>
          <Separator />
          <Stack gap="xs">
            <Typography variant="lead">Lead paragraph — slightly larger, muted.</Typography>
            <Typography variant="body">Body text — the standard reading size with relaxed leading.</Typography>
            <Typography variant="body-sm">Small body — compact text for dense layouts.</Typography>
            <Typography variant="caption">Caption — tiny text, great for footnotes and metadata.</Typography>
            <Typography variant="overline">OVERLINE — UPPERCASE, WIDE LETTER SPACING</Typography>
          </Stack>
          <Separator />
          <Stack gap="xs">
            <Text color="default">Default text color</Text>
            <Text color="muted">Muted text color</Text>
            <Text color="primary">Primary text color</Text>
            <Text color="accent">Accent text color</Text>
            <Text color="error">Error text color</Text>
            <Text color="success">Success text color</Text>
            <Text color="warning">Warning text color</Text>
          </Stack>
          <DemoRow label="Font Weights">
            <Text weight="normal">Normal</Text>
            <Text weight="medium">Medium</Text>
            <Text weight="semibold">Semibold</Text>
            <Text weight="bold">Bold</Text>
          </DemoRow>
        </Section>

        {/* ── LAYOUT ──────────────────────────────────── */}
        <Section title="Layout Components" description="Container, Grid, Stack, Spacer.">
          <DemoRow label="Container">
            <div className="w-full bg-primary-100 dark:bg-primary-950 rounded-lg p-4 text-center">
              <Text variant="body-sm" color="primary">Container (max-w-7xl, centered, responsive padding)</Text>
            </div>
          </DemoRow>
          <DemoRow label="Grid (4 columns, gap)">
            <Grid cols={4} gap="md" className="w-full">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center">
                  <Text variant="body-sm">Col {i}</Text>
                </div>
              ))}
            </Grid>
          </DemoRow>
          <DemoRow label="Stack (row)">
            <Stack direction="row" gap="sm">
              <div className="bg-accent-100 dark:bg-accent-950 rounded-lg p-3"><Text variant="body-sm" color="accent">A</Text></div>
              <div className="bg-accent-100 dark:bg-accent-950 rounded-lg p-3"><Text variant="body-sm" color="accent">B</Text></div>
              <div className="bg-accent-100 dark:bg-accent-950 rounded-lg p-3"><Text variant="body-sm" color="accent">C</Text></div>
            </Stack>
          </DemoRow>
        </Section>

        {/* ── DIALOG ──────────────────────────────────── */}
        <Section title="Dialog" description="Modal overlay with accessible focus management.">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Order</DialogTitle>
                <DialogDescription>
                  Are you sure you want to place this order for <strong>$16.00</strong>?
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Items</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Total</span>
                  <span className="font-semibold text-primary-600">$16.00</span>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => { alert('Order placed!'); setDialogOpen(false); }}>Confirm</Button>
              </div>
            </DialogContent>
          </Dialog>
        </Section>

        {/* ── TABS ────────────────────────────────────── */}
        <Section title="Tabs" description="Underline, pills, and segmented button variants.">
          <DemoRow label="Underline Tabs (custom)">

            <Tabs
              tabs={[
                { value: 'menu', label: 'Menu' },
                { value: 'orders', label: 'Orders' },
                { value: 'settings', label: 'Settings' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </DemoRow>
          <DemoRow label="Pills Tabs">
            <Tabs
              variant="pills"
              tabs={[
                { value: 'all', label: 'All Items' },
                { value: 'meals', label: 'Meals' },
                { value: 'drinks', label: 'Drinks' },
                { value: 'sides', label: 'Sides' },
              ]}
            />
          </DemoRow>
          <DemoRow label="Segmented Tabs">
            <Tabs
              variant="buttons"
              tabs={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]}
            />
          </DemoRow>
        </Section>

        {/* ── BREADCRUMBS ─────────────────────────────── */}
        <Section title="Breadcrumbs" description="Navigation trail with automatic separator.">
          <Breadcrumbs
            items={[
              { label: 'Dashboard', href: '/' },
              { label: 'Orders', href: '/orders' },
              { label: 'Order #1042' },
            ]}
          />
        </Section>

        {/* ── AVATAR ───────────────────────────────────── */}
        <Section title="Avatar" description="User avatars with fallback initials.">
          <DemoRow label="Avatars">
            <Avatar>
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80?u=bningoo" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback className="text-lg">JD</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
          </DemoRow>
        </Section>

        {/* ── SIDEBAR ──────────────────────────────────── */}
        <Section title="Sidebar" description="Collapsible side panel.">
          <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Sidebar width="sm">
              <div className="p-4">
                <Text variant="body-sm" weight="semibold" className="text-primary-600">🍽️ Menu</Text>
              </div>
              <Separator />
              {['Dashboard', 'Orders', 'Menu', 'Reports'].map(item => (
                <div key={item} className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                  <Text variant="body-sm">{item}</Text>
                </div>
              ))}
            </Sidebar>
            <div className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-950">
              <Text variant="body-sm" color="muted">Sidebar content area — the main panel fills remaining space.</Text>
            </div>
          </div>
        </Section>

        {/* ── SEPARATOR ────────────────────────────────── */}
        <Section title="Separator" description="Visual divider for content sections.">
          <Stack gap="sm">
            <Text variant="body-sm">Above the separator</Text>
            <Separator />
            <Text variant="body-sm">Below the separator</Text>
          </Stack>
          <DemoRow label="Vertical Separator">
            <Stack direction="row" gap="sm" align="center">
              <Text variant="body-sm">Left</Text>
              <Separator orientation="vertical" className="h-6" />
              <Text variant="body-sm">Right</Text>
            </Stack>
          </DemoRow>
        </Section>

        {/* ── FOOTER ───────────────────────────────────── */}
        <Spacer size="xl" />
        <Separator />
        <footer className="py-6 text-center">
          <Text variant="caption" color="muted">
            Bningoo Design System · Gen 2 · Built with Next.js 15 + Tailwind CSS v4
          </Text>
        </footer>
      </Container>
    </>
  );
}
