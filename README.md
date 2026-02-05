# Neutronic Landing Page 🚀

Una landing page moderna y animada para Neutronic Solutions, construida con Next.js y diseño responsive.

![Neutronic](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Características

- 🎨 **Diseño Moderno**: Gradientes vibrantes y animaciones suaves
- 🌙 **Dark Mode**: Tema oscuro/claro con persistencia
- 🌐 **Multiidioma**: Soporte para Español e Inglés
- 📱 **Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Animaciones**: Átomos animados, carruseles y efectos de scroll
- 🎯 **Secciones**: Hero, Services, Testimonials, Stats, Contact
- 📧 **Formulario de Contacto**: Con validación y feedback visual

## 🚀 Demo en Vivo

🔗 [Ver Demo](https://tu-dominio.vercel.app) _(próximamente)_

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o pnpm

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/neutronic-landing.git

# Entrar al directorio
cd neutronic-landing

# Instalar dependencias
npm install
# o
pnpm install

# Ejecutar en desarrollo
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
neutronic-landing/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
│   ├── Hero.tsx            # Sección hero
│   ├── Services.tsx        # Servicios
│   ├── Testimonials.tsx    # Testimonios
│   ├── Stats.tsx           # Estadísticas
│   ├── ContactForm.tsx     # Formulario de contacto
│   └── ...
├── context/                # Context providers
├── public/                 # Archivos estáticos
├── neutronic-services (1).html  # Versión HTML standalone
└── package.json
```

## 🎨 Tecnologías

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: CSS Modules / Tailwind CSS
- **Animaciones**: CSS Animations & Keyframes
- **Iconos**: SVG personalizados

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en "Import Project"
4. Selecciona tu repositorio
5. Click en "Deploy"

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configurar Dominio Personalizado

1. Ve al dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a Settings → Domains
4. Agrega tu dominio
5. Configura los DNS según las instrucciones

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🎯 Características Principales

### Animaciones del Átomo
- Órbitas rotando a diferentes velocidades
- Núcleo pulsante
- Electrones animados

### Dark Mode
- Toggle entre tema claro y oscuro
- Persistencia en localStorage
- Transiciones suaves

### Multiidioma
- Cambio entre ES/EN
- Persistencia de preferencia
- Traducciones completas

### Responsive Design
- Breakpoints: 768px (tablet), 480px (móvil)
- Navegación inferior en móvil
- Imágenes y textos optimizados

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

**Neutronic Solutions**
- Email: hello@neutronic.com
- Website: [neutronic.com](https://neutronic.com)

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
