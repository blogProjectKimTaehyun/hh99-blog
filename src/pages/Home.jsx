import Header from "../compoents/ui/Header/Header";
import Layout from "../compoents/ui/Layout";
import BlogList from "../features/blog/bloglist/BlogList";
import BlogCategorySelector from "../features/blog/bloglist/BlogCategorySelector";
import BlogListMenu from "../features/blog/bloglist/BlogListItems";
import BlogListItem from "../features/blog/bloglist/BlogListItem";

const Home = () => {
  return (
    <Layout>
      <Header />
      <BlogList>
        <h1>All Posts</h1>
        <BlogCategorySelector></BlogCategorySelector>
        <BlogListMenu>
          <BlogListItem />
          <BlogListItem />
          <BlogListItem />
        </BlogListMenu>
      </BlogList>
    </Layout>
  );
};

export default Home;
