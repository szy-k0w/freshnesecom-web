import { PageProps } from "gatsby";
import React from "react";

import TopNavBar from "@components/TopNavBar";
import Footer from "@components/Footer";

interface IndexPageProps extends PageProps {}

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <div className="l-site">
      <div className="l-constrained">
        <TopNavBar />
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
