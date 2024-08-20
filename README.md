# My Next.js Starter Template

This repository contains different versions of a Next.js starter template, each with specific configurations to help you kickstart your project.

## Available Versions

1. **intl**: Includes Next.js with Tailwind CSS and `next-intl` for localization.
2. **intl-clerk**: Adds Clerk for authentication on top of the `intl` version.
3. **intl-clerk-shadcn**: Adds `shadcn-ui` for UI components on top of the `intl-clerk` version.

## Quick Start

You can create a new Next.js project using one of these templates with a single `npx` command, without needing to clone this repository. Follow the instructions below for each version.

### 1. **intl** (Next.js + Tailwind CSS + next-intl)

To create a project using the `intl` version:

```bash
npx create-next-app@latest --example https://github.com/MEClouds/next-starter-template#intl my-app
```

Replace `my-app` with your desired project name.

### 2. **intl-clerk** (Next.js + Tailwind CSS + next-intl + Clerk)

To create a project using the `intl-clerk` version:

```bash
npx create-next-app@latest --example https://github.com/MEClouds/next-starter-template#intl-clerk my-app
```

Replace `my-app` with your desired project name.

### 3. **intl-clerk-shadcn** (Next.js + Tailwind CSS + next-intl + Clerk + shadcn-ui)

To create a project using the `intl-clerk-shadcn` version:

```bash
npx create-next-app@latest --example https://github.com/MEClouds/next-starter-template#intl-clerk-shadcn my-app
```

Replace `my-app` with your desired project name.

## Detailed Setup Instructions

Each command above will create a new Next.js project in a directory called `my-app`, with the selected configuration:

1. **Navigate to your project directory:**

   ```bash
   cd my-app
   ```

2. **Install dependencies (if not done automatically):**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

You should now have a fully configured Next.js project based on the selected template, ready for development.

## Customization

After setting up your project, you can further customize it by adding components, pages, or modifying configurations to suit your needs.

## Contributing

If you have suggestions or improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
