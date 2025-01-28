import { useContext } from 'react';
import { SessionContext } from '../sessionProvider';

export default function Post(props) {
  const { currentUser } = useContext(SessionContext);
  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{props.post.userName}</h3>
      <p className="text-gray-700">{props.post.content}</p>
      {currentUser.id === props.post.userId && (
        <button
          onClick={() => props.onDelete(props.post.id)}
          className="text-blue-500 hover:underline cursor-pointer focus:outline-none"
        >
          削除
        </button>
      )}
    </div>
  );
}
