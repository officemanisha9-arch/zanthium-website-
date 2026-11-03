import { Outlet, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SEO from '../components/SEO'
import '../styles.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />\
      <Footer />

    </>
  ),
  notFoundComponent: () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <SEO title="  Root | Zanthium Technosoft" />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors inline-block"
        >
          Go back home
        </a>
      </div>
    )
  },
})
