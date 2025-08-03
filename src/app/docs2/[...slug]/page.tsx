import React from "react";

interface DocsProps {
  params: {
    slug: string[]
  }
}

const Docs2: React.FC<DocsProps> = async ({params}) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs2 for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs2 for feature {slug[0]}</h1>;
  }
  // now this won't render for the root /docs -> check /docs2/page.tsx
  return <h1>Docs2 home page</h1>;
}

export default Docs2
