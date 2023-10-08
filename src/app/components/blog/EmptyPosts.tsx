import { FaSpaceShuttle, FaUserAstronaut } from "react-icons/fa";

interface EmptyPostsProps {
  text: string;
}

const EmptyPosts = ({text}: EmptyPostsProps) => (
  <div className="w-full mx-auto max-w-[960] p-4 text-yellow-200">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mt-8 mb-4 my-8">
        <h1 className="text-2xl">{`Awww snap! There are no ${text}s to see`}</h1>
      </div>
      <div className="flex justify-between my-10">
        <div>
          <FaUserAstronaut className="text-6xl text-yellow-200" />
        </div>
        <div>
          <FaSpaceShuttle className="text-6xl text-yellow-200" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl">{`Either something went wrong, or I haven't made any content`}</h2>
      </div>
    </div>
  </div>
)

export default EmptyPosts;