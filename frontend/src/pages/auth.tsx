import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RocketIcon, CodeIcon, CloudIcon, LockIcon } from 'lucide-react'

export default function AuthComponent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <RocketIcon className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold">DeployNest</span>
        </div>
        <div className="space-x-4">
          <Button className='text-gray-800' variant="outline" onClick={() => setIsLoginOpen(true)}>Login</Button>
          <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Deploy Your Dreams
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            DeployNest: Where your projects take flight. Seamlessly deploy and manage your applications with our cutting-edge platform.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mb-12">Get Started</Button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900 p-6 rounded-lg">
              <CodeIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-400">Integrate with your favorite tools and frameworks seamlessly.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <CloudIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-400">Scale your applications effortlessly to meet any demand.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <LockIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Deployments</h3>
              <p className="text-gray-400">Keep your code and data safe with our advanced security measures.</p>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to DeployNest</DialogTitle>
            <DialogDescription>Enter your credentials to access your account.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a DeployNest Account</DialogTitle>
            <DialogDescription>Sign up to start deploying your projects.</DialogDescription>
          </DialogHeader>
          
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
            
        </DialogContent>
      </Dialog>
    </div>
  )
}