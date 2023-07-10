import Header from "../compoents/ui/Header/Header";
import Layout from "../compoents/ui/Layout";
import BlogList from "../features/blog/bloglist/BlogList";

const Home = () => {
  return (
    <Layout>
      <Header />
      <BlogList>
        <BlogList.Title>All Posts</BlogList.Title>
      </BlogList>
    </Layout>
  );
};

export default Home;
