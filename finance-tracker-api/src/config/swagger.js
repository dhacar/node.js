import swaggerUi from "swagger-ui-express";

export const swaggerDocs = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup({
    openapi: "3.0.0",
    info: {
      title: "Finance Tracker API",
      version: "1.0.0"
    }
  }));
};
