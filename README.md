my-portfolio/
│── public/                # Static assets (images, CV, etc.)
│   ├── profile.png        # Profile image
│   ├── cv.pdf             # Resume file
│── src/                   # Main source folder
│   ├── app/               # Next.js App Router directory
│   │   ├── layout.tsx     # Global layout
│   │   ├── page.tsx       # Main page that imports components
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Services.tsx   # Services section
│   │   ├── Contact.tsx    # Contact section
│   ├── styles/            # Global styles
│   │   ├── globals.css    # Tailwind CSS global styles
│── tailwind.config.ts     # Tailwind CSS configuration
│── next.config.js         # Next.js configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Dependencies and scripts
│── .gitignore             # Git ignore file
│── README.md              # Project documentation

npx json-server --watch db.json --port 5000
