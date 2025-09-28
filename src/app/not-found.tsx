import { ConstructionPage } from '@/components/ConstructionPage'

export default function NotFound() {
  return (
    <ConstructionPage
      title="Page Not Found"
      description="Oops! The page you're looking for doesn't exist or is still under construction."
      estimatedCompletion="Check back soon!"
    />
  )
}
