'use client';

import { useState } from 'react';
import {
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input, Textarea, Label, Checkbox, RadioGroup, RadioGroupItem,
  Switch, Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Container, Grid, Stack, Separator, Breadcrumbs, Navbar,
  H1, H2, H3, H4, Lead, Large, Small, Muted, Caption, InlineCode,
} from '@bningoo/ui';
import { Sun, Moon, SunMoon, ShoppingCart, Bell, Menu } from 'lucide-react';

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <H3 className="border-b border-neutral-200 pb-2 dark:border-neutral-800">{title}</H3>
      <div className="flex flex-wrap items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        {children}
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Top Nav */}
      <Navbar
        logo="Bningoo DS"
        links={[
          { label: 'Components', href: '#components', active: true },
          { label: 'Typography', href: '#typography' },
          { label: 'Layout', href: '#layout' },
        ]}
      >
        <Button variant="ghost" size="icon" onClick={toggleDark} aria-label="Toggle dark mode">
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </Navbar>

      <Container className="py-10">
        {/* Hero */}
        <div className="mb-12 text-center">
          <H1>Bningoo Design System</H1>
          <Lead>Gen 2 &middot; Tailwind CSS v4 &middot; Radix UI</Lead>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
              19 Components
            </span>
            <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
              Light/Dark
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              Responsive
            </span>
          </div>
        </div>

        <Separator className="mb-10" />

        {/* Breadcrumb demo */}
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Design System' },
        ]} />

        <div id="components" className="space-y-10">
          {/* ── Buttons ── */}
          <DemoSection title="Button">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><ShoppingCart className="h-4 w-4" /></Button>
            <Button disabled>Disabled</Button>
          </DemoSection>

          {/* ── Card ── */}
          <DemoSection title="Card">
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  This is the card body content. Cards can contain any elements.
                </p>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>
          </DemoSection>

          {/* ── Input & Textarea ── */}
          <DemoSection title="Input & Textarea">
            <div className="w-full max-w-sm space-y-3">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." />
              </div>
              <Input disabled placeholder="Disabled input" />
            </div>
          </DemoSection>

          {/* ── Checkbox & Radio & Switch ── */}
          <DemoSection title="Checkbox & Radio & Switch">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
            </div>
            <RadioGroup defaultValue="option1" className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="r1" />
                <Label htmlFor="r1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="r2" />
                <Label htmlFor="r2">Option 2</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Switch id="airplane" />
              <Label htmlFor="airplane">Airplane Mode</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="notifs" defaultChecked />
              <Label htmlFor="notifs">Notifications</Label>
            </div>
          </DemoSection>

          {/* ── Select ── */}
          <DemoSection title="Select">
            <Select>
              <SelectTrigger className="w-60">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="strawberry">Strawberry</SelectItem>
              </SelectContent>
            </Select>
          </DemoSection>

          {/* ── Dialog ── */}
          <DemoSection title="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. Are you sure you want to proceed?
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Dialog content goes here. You can put any components inside.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DemoSection>

          {/* ── Tabs ── */}
          <DemoSection title="Tabs">
            <div className="w-full max-w-md">
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Password</TabsTrigger>
                  <TabsTrigger value="tab3">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                  <p className="text-sm">Manage your account settings.</p>
                </TabsContent>
                <TabsContent value="tab2" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                  <p className="text-sm">Change your password.</p>
                </TabsContent>
                <TabsContent value="tab3" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                  <p className="text-sm">Configure notification preferences.</p>
                </TabsContent>
              </Tabs>
            </div>
          </DemoSection>
        </div>

        {/* ── Typography ── */}
        <div id="typography" className="mt-16 space-y-6">
          <Separator />
          <H2 className="mt-8">Typography</H2>
          <DemoSection title="Headings">
            <div className="w-full space-y-2">
              <H1>Heading 1 — Page title</H1>
              <H2>Heading 2 — Section title</H2>
              <H3>Heading 3 — Sub-section title</H3>
              <H4>Heading 4 — Card title</H4>
            </div>
          </DemoSection>
          <DemoSection title="Text Styles">
            <div className="w-full space-y-3">
              <Lead>Lead paragraph — Introduces sections with emphasis.</Lead>
              <Large>Large text — Emphasised block.</Large>
              <p className="text-base">Body text — The standard paragraph style for reading.</p>
              <Small>Small text — Fine print, helper text.</Small>
              <Muted>Muted text — Less prominent information.</Muted>
              <Caption>Caption — Image captions, timestamps.</Caption>
              <p>Inline <InlineCode>code snippet</InlineCode> example.</p>
            </div>
          </DemoSection>
        </div>

        {/* ── Layout Components ── */}
        <div id="layout" className="mt-16 space-y-6">
          <Separator />
          <H2 className="mt-8">Layout</H2>

          <DemoSection title="Container">
            <Container size="sm" className="bg-neutral-100 p-4 text-center text-sm dark:bg-neutral-800">
              Container 'sm' — max-w-3xl
            </Container>
          </DemoSection>

          <DemoSection title="Grid">
            <Grid cols={3} className="w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-primary-100 p-4 text-center text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                  Grid Item {i}
                </div>
              ))}
            </Grid>
          </DemoSection>

          <DemoSection title="Stack">
            <Stack direction="row" gap="sm">
              {['A', 'B', 'C', 'D'].map((letter) => (
                <div key={letter} className="rounded-lg bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
                  {letter}
                </div>
              ))}
            </Stack>
          </DemoSection>

          <DemoSection title="Separator">
            <div className="w-full space-y-2">
              <p className="text-sm">Above the separator</p>
              <Separator />
              <p className="text-sm">Below the separator</p>
            </div>
          </DemoSection>

          <DemoSection title="Breadcrumbs">
            <Breadcrumbs items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Orders', href: '/dashboard/orders' },
              { label: '#1234' },
            ]} />
          </DemoSection>
        </div>

        {/* ── Sidebar Layout Demo ── */}
        <div className="mt-16">
          <H2 className="mb-4">Sidebar Layout</H2>
          <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 md:flex-row">
            <aside className="border-b border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900 md:w-48 md:border-b-0 md:border-r">
              <nav className="flex flex-col gap-2">
                <a href="#" className="rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm dark:bg-neutral-800">Dashboard</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-white/50 dark:text-neutral-400 dark:hover:bg-neutral-800/50">Orders</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-white/50 dark:text-neutral-400 dark:hover:bg-neutral-800/50">Menu</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-white/50 dark:text-neutral-400 dark:hover:bg-neutral-800/50">Settings</a>
              </nav>
            </aside>
            <main className="flex-1 p-6">
              <H3>Dashboard Content</H3>
              <Muted>This demonstrates the sidebar + main content layout pattern using flexbox.</Muted>
            </main>
          </div>
        </div>

        {/* ── Combined Example Card ── */}
        <div className="mt-16">
          <Separator className="mb-8" />
          <H2 className="mb-4">Example: Order Card</H2>
          <Grid cols={3}>
            {[
              { title: 'Order #1042', status: 'Preparing', items: 3, total: '$42.50' },
              { title: 'Order #1043', status: 'Delivered', items: 5, total: '$78.20' },
              { title: 'Order #1044', status: 'Pending', items: 1, total: '$15.00' },
            ].map((order) => (
              <Card key={order.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{order.title}</CardTitle>
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-xs font-medium',
                      order.status === 'Preparing' && 'bg-accent-100 text-accent-700',
                      order.status === 'Delivered' && 'bg-primary-100 text-primary-700',
                      order.status === 'Pending' && 'bg-neutral-100 text-neutral-700',
                    )}>
                      {order.status}
                    </span>
                  </div>
                  <CardDescription>{order.items} items</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{order.total}</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="outline" className="w-full">View</Button>
                  <Button size="sm" className="w-full">Accept</Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </div>

        <footer className="mt-20 border-t border-neutral-200 py-8 text-center dark:border-neutral-800">
          <Caption>Bningoo Design System &middot; Built with shadcn/ui patterns &middot; Gen 2</Caption>
        </footer>
      </Container>
    </div>
  );
}

// Needed for the status badges in the order cards
import { cn } from '@bningoo/ui';
