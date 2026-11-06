import { useState } from "react";

import Spinner from "./Spinner";

export default function GospelCard({ gospel, onLoad }) {
	const [showText, setShowText] = useState(false);
	const [isSpinnerShowing, setSpinnerShowing] = useState(false);
	const [gospelText, setGospelText] = useState(gospel.text);

	const handleShowClick = () => {
		setShowText(true);
		setSpinnerShowing(true);
		fetch(`http://localhost:3000/gospel`)
			.then(async (text) => {
				console.log("handleLoad text", text);
				if (text.ok) {
					const gotGospelText = await text.text();
					setGospelText(gotGospelText);
				}
			})
			.catch(console.warn)
			.finally(() => setSpinnerShowing(false));
		onLoad(gospel.name, gospel.text);
	};

	return (
		<div
			style={{
				border: "1px solid #aaa",
				borderRadius: "8px",
				padding: "12px",
				width: "440px",
				minHeight: "360px",
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				margin: "8px",
				background: "#fafafa",
			}}
		>
			<button onClick={handleShowClick} style={{ marginBottom: "8px" }}>
				Show {gospel.name}'s
			</button>
			{showText && (
				<div
					style={{
						flex: 1,
						overflowY: "auto",
						border: "1px solid #ccc",
						padding: "8px",
						borderRadius: "5px",
						background: "white",
						maxHeight: "240px",
						textAlign: "left",
					}}
				>
					{isSpinnerShowing ? <Spinner size={30} dotSize={6} color="#555" /> : gospelText}
				</div>
			)}
		</div>
	);
}
