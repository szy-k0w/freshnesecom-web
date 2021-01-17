import { PageProps } from "gatsby";
import React from "react";

interface NotFoundPageProps extends PageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  return (
    <div className="l-constrained">
      <h1>Page not Found</h1>
    </div>
  );
};

export default NotFoundPage;
