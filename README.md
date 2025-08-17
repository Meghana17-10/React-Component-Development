# React Components Assignment

A React + TypeScript project featuring two reusable components (`InputField` and `DataTable`) built with TailwindCSS and documented in Storybook.

## 🚀 Live Demo  
[Storybook Deployment on Vercel](https://react-component-development-nine.vercel.app)  

## ✨ Features  
- **InputField**  
  - Variants: `filled`, `outlined`, `ghost`  
  - States: `error`, `disabled`, `loading`  
  - Extras: Clear button, password toggle  
- **DataTable**  
  - Column sorting  
  - Row selection (single/multi)  
  - Loading/empty states  

## 📦 Setup  
1. Clone the repo:  
   ```bash
   git clone [https://github.com/Meghana17-10/React-Component-Development.git]

## DESCRIPTION OF APPROACH 
1. Component-Based Development- Each UI element was built as an independent React component to promote reusability. Components are modular: each has its own folder containing .jsx, .css, and .stories.jsx files.
2. Storybook for Visualization - Storybook was used to develop and test components in isolation. Created stories for multiple states (Primary, Secondary, Disabled, Hover, etc.) to showcase variations. Prop descriptions and usage examples were added for clarity.
3. Git Version Control - Git was used to track changes with meaningful commits. The repository serves as the single source of truth for code and deployment.
4. Deployment - Deployed Storybook to Vercel for live access. Verified that all components render correctly and interactively online.
5. Testing & Documentation - Components were checked for correct rendering, styling, and interactivity.
6. Scalability - Components are organized in a structured folder system to allow future expansion. Naming conventions and story format were kept consistent for ease of use.
