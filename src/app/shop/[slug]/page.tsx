import { ProductPage } from '@/components/ProductPage'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const productName = slug.replace(/-/g, ' ')
  
  return {
    title: `${productName} - Rakeeri Wigs | Kenya's #1 Wig Expert`,
    description: `Premium ${productName} from Rakeeri Wigs. Free styling included, 24hr delivery, pay on delivery. Transform your confidence today.`,
  }
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductPage slug={slug} />
}

