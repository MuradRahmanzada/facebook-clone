import { useCollection } from 'react-firebase-hooks/firestore';
import {db} from '../firebase';
import Post from './Post';
import {useEffect} from 'react';

function Posts({posts}) {
	const [realtimePosts, loading, error] = useCollection(
		db.collection("posts").orderBy("timestamp", "desc")
	);

	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
	        {loading && <span>Collection: Loading...</span>}
			{realtimePosts ?
				realtimePosts?.docs.map((post) => (
				<Post key={post.id}
					name={post.data().name}
					message={post.data().message}
					email={post.data().email}
					timestamp={post.data().timestamp}
					image={post.data().image}
					postImage={post.data().postImage}
				/>
			)) : (
				posts?.map((post) => (
					<Post key={post.id}
						name={post.name}
						message={post.message}
						email={post.email}
						timestamp={post.timestamp}
						image={post.image}
						postImage={post.postImage}
					/>
				)
			))}
		</div>
	)
}

export default Posts;