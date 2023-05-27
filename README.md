# Course App

The Course App is a web application that allows users to take online courses on different subjects. It provides features such as authentication, course browsing, search functionality, payments, and saving courses.

## Technologies Used

- Next.js - React framework for server-side rendering and building web applications.
- Supabase - Open-source Firebase alternative for backend services, including authentication and database.
- Tailwind CSS - Utility-first CSS framework for styling the application.
- Prisma - Database toolkit for working with databases and generating database models.

## Getting Started

To get started with the Course App, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/course-app.git`
2. Install dependencies: `npm install`
3. Set up the environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the required environment variables such as `SUPABASE_URL` and `SUPABASE_KEY`.
4. Set up the database:
   - Run database migrations: `npx prisma migrate dev`
   - Seed the database with initial data: `npx prisma db seed`
5. Start the development server: `npm run dev`
6. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

The project follows a typical Next.js folder structure:

- `/components`: Contains reusable React components used throughout the application.
- `/pages`: Contains Next.js pages for different routes in the application.
- `/lib`: Contains utility files such as Supabase client setup and API functions.
- `/styles`: Contains global CSS styles and Tailwind CSS configuration.

## Deployment

To deploy the Course App to a production environment, you can follow these steps:

1. Build the production-optimized version of the application: `npm run build`.
2. Deploy the generated `./out` directory to your hosting provider.

## Contributing

Contributions to the Course App are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
