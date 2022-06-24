import {useSession} from 'next-auth/react';
import Image from 'next/image';
import {EmojiHappyIcon} from '@heroicons/react/outline';
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid';
import {useRef, useState} from 'react';
import {db, storage} from '../firebase';
import firebase from 'firebase/compat/app';

function InputBox() {
	const {data: session} = useSession();
	const inputRef = useRef(null);
	const filepickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState(null);

	const sendPost = (e) => {
		e.preventDefault();
		console.log("Sending Post")


		if (!inputRef.current.value) {
			console.log("Nothing to post.");
			return;
		}

		db.collection('posts').add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		}).then(doc => {
			if (imageToPost) {
				const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');

				removeImage();

				uploadTask.on('state_change', null, error => console.error(error), () => {
					// When upload is completed
					storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
						db.collection('posts').doc(doc.id).set({
							postImage: url
						}, {merge: true})
					})
				});
			}

		});

		console.log("Posted: ", inputRef.current.value);

		inputRef.current.value = "";
		
		return false;
	};

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		}
	};

	const removeImage = () => {
		setImageToPost(null);
	}

	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium ">
			<div className="flex space-x-4 p-4 items-center">
				<img className="rounded-full w-[35px]"
				src={session.user.image}
				layout="fixed"/>
				<form className="flex flex-1">
					<input className=" rounded-full h-12 bg-gray-100 flex-grow px-2 focus:outline-none placeholder:text-xs md:placeholder:text-sm" type="text" placeholder={`What's on your mind, ${session.user.name} ?`} ref={inputRef}/>
					<button hidden type='submit' onClick={sendPost}>Submit</button>
				</form>

				{imageToPost && (
					<div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
						<img className="h-10 object-conntain" src={imageToPost} alt=""/>
						<p className="text-xs text-red-500 text-center">Remove</p>
					</div>
				)}
			</div>

			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500"/>
					<p className="text-xs sm:txt-sm xl:text-base">Live Video</p>
				</div>

				<div onClick={() => filepickerRef.current.click()} className="inputIcon">
					<CameraIcon className="h-7 text-green-300"/>
					<p className="text-xs sm:txt-sm xl:text-base">Photo/Video</p>
					<input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300"/>
					<p className="text-xs sm:txt-sm xl:text-base">Feeling/Activity</p>
				</div>
			</div>
		</div>
	)
}

export default InputBox;