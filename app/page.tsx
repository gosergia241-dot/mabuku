import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mabuku</h1>
          <div className="space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Inscription</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Bienvenue sur Mabuku
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Votre bibliothèque numérique complète
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Gestion de livres</h3>
              <p className="text-sm text-muted-foreground">
                Gérez votre collection de livres numériques
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Partage</h3>
              <p className="text-sm text-muted-foreground">
                Partagez vos livres avec votre communauté
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sécurisé</h3>
              <p className="text-sm text-muted-foreground">
                Vos données sont protégées
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
