import Link from 'next/link';

interface BlogPost {
  title: string;
  summary: string;
  link: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (<>
    
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-700 mb-4 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.summary}</p>
            <Link
              href={post.link}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
              passHref
            >
              Read More
            </Link>
          </div>
        ))}</>
       
   
  );
};

export default BlogSection;