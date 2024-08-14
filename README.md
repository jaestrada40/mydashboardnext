This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```bash

npx create-next-app <nombre_de_la_app>

#Para crear la estructura de una pagina
#comando
prc
# export default function NamePage() {
#   return (
#     <div>
#       <h1>Hello Page</h1>
#     </div>
#   );
# }

#Para crear metadata
#comando
mr

# export const metadata = {
#  title: 'SEO Title',
#  description: 'SEO Title',
# };

#Para crear un layout
#comando
lrc

# export default function Root NameLayout({
#  children
# }: {
#  children: React.ReactNode;
# }) {
#   return (
#     <div>
#       <h1>Hello Root Layout Root Name</h1>
#     </div>
#   );
# }


# Comando
rafc

# import React from 'react'

# export const layout = () => {
#   return (
#     <div>layout</div>
#   )
# }



# Dashboard
https://www.creative-tim.com/twcomponents/component/dashboard-navigation

# Para configurar las imagenes
# en next.config.mjs hay que agregar esto

    # images: {
    #     remotePatterns:[
    #         {
    #             protocol: 'https',
    #             hostname: 'images.unsplash.com',
    #         },
    #     ]
    # }

# En el tsx

        #  <span>
        #      <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
        #         alt="Avatar" 
        #         width={50} 
        #         height={50} />
        #  </span>


# Instalar React Icons
npm install react-icons --save

# Formatear código
Shift -> Alt -> F

# Esto es para saber en que pagina esta queda marcado
const currentPath = usePathname();

        <Link href={path} className={`
                w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150
                ${ currentPath === path ? 'bg-blue-800': ''}
                `}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
```