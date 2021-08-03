import "./app.scss";

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} {process.env.name}
      </h1>
    </>
  );
};
