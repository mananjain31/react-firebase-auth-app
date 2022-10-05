import Layout from "components/Layout";

function withLayout(Component) {
  return function(){return(
    <Layout>
      <Component/>
    </Layout>
  )}
}

export default withLayout;