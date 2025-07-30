"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Settings, Bell, Shield, Palette } from "lucide-react"

interface SettingsDialogProps {
  children: React.ReactNode
}

export function SettingsDialog({ children }: SettingsDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="size-5" />
            Settings
          </DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">

          {/* Notifications Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="size-4 text-primary" />
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Test alerts</p>
                  <p className="text-xs text-muted-foreground">Get notified when tests fail</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-primary" />
              <h3 className="font-semibold">Security</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Two-factor authentication</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Session timeout</p>
                  <p className="text-xs text-muted-foreground">Auto-logout after inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="size-4 text-primary" />
              <h3 className="font-semibold">Appearance</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Dark mode</p>
                  <p className="text-xs text-muted-foreground">Use dark theme</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 