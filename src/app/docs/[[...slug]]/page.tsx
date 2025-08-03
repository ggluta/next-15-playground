import React from "react";

interface DocsProps {
  params: {
    slug: string[]
  }
}

const Docs: React.FC<DocsProps> = async ({params}) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  // this is the slug segments optional default route (root) when you want to render same root but based on URL params
  return <h1>Docs home page</h1>;
}

export default Docs
