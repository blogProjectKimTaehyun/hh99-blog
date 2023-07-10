import Header from "../compoents/ui/Header/Header";
import Layout from "../compoents/ui/Layout";
import BlogListItems from "../features/blog/bloglist/BlogListItems";
import BlogItem from "../features/blog/bloglist/BlogItem";
import BlogList from "../features/blog/bloglist/BlogList";
import BlogListCategory from "../features/blog/bloglist/BlogCategorySelector";
import BlogCategorySelector from "../features/blog/bloglist/BlogCategorySelector";

const Home = () => {
  return (
    <Layout>
      <Header />
      <BlogList>
        <BlogList.Title>All Posts</BlogList.Title>
        <BlogCategorySelector></BlogCategorySelector>
        <BlogListItems>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </BlogListItems>
      </BlogList>
    </Layout>
  );
};

export default Home;
