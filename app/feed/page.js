import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  if(numberOfPosts <= 1) {
    return {
      description: "Browse all of our posts."
    }
  } else {
      return {
        title: `Browse all ${numberOfPosts} post(s)`,
        description: "Browse all of our posts."
      }
  }

}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
