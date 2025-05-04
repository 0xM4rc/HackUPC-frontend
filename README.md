# HackUPCFrontend (Smart Food Assistant)

## Inspiration

The inspiration comes from the idea of solving shopping needs, especially food-related ones. We want to help users find the best products by considering dietary preferences, intolerances (such as diabetes), and personal tastes.

## What it does

The platform recommends supermarket products based on the user’s preferences and location. When registering, the user provides basic data such as age and dietary restrictions. The platform then displays product images, allowing the user to select what they like. Based on these selections and the specified restrictions, the system uses the OpenAI API to recommend relevant products and highlight interesting discounts. Additionally, the database can be customized for specific supermarkets and locations, making the recommendations highly localized.

## How we built it

We built the project using:

- **Angular** for the frontend, delivering an interactive and dynamic user experience.
- **TypeScript** for the backend.
- **JSON** as the database, allowing us to store user profiles and product data flexibly.
- **Python** for database generation and processing.
- **OpenAI API** to process product data and user preferences, generating intelligent recommendations.

## Challenges we ran into

- Designing an attractive frontend without using external libraries.
- Integrating the OpenAI API calls into the backend.
- Finding a valid database and processing it to suit our needs.
- The diversity of ideas and the possibility of addressing several challenges proposed by companies delayed the project start.
- We were limited in time to connect the platform with MongoDB, so we opted to use a JSON file as the database.
- We planned to use data embeddings to correlate the products chosen by the user with others in the database, enabling the assistant to make more personalized recommendations.

## Accomplishments we’re proud of

- Designing and developing a solution outside our main skill sets.
- Successfully integrating and using the OpenAI API.

## What we learned

- Working with the **Angular** framework.
- Using the **OpenAI API**.
- Generating and processing databases with **Python**.

## What’s next for Smart Food Assistant

- Finish frontend development and connect it with the preference-based system.
- Enable redirection to websites where users can purchase the products.
- Connect the platform with **Revolut** and promote the **RevPoints** system when purchases are made through the platform.
- Improve OpenAI API responses by providing better context and more user information using data embeddings.
- Display and recommend new products based on the user profile.
- Connect the platform to **MongoDB**.

## Project generete CLI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
