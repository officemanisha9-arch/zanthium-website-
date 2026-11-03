import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Tan-Registration-Number')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div> <div className="container mx-auto px-4 pt-16"></div>
     <img src="/tan.png" alt="TAN Certificate" className="mx-auto pt-12 pb-8"/></div>
}
