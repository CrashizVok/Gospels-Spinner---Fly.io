import { useState } from "react";

// TODO - get API key from https://bibliaapi.com/docs/API_Keys
// TODO - create credentials/credentials.js
/*
    const bibliaCredentials = {
        name: 'name',
        apiKey: '',
        type: 'Web',
        appUrl: '',
    }
    export default bibliaCredentials
*/
// TODO - import bibliaCredentials from './credentials/credentials';

import Spinner from "./Spinner";

export default function GospelCard({ gospel, onLoad }) {
	const [showText, setShowText] = useState(false);
	const [isSpinnerShowing, setSpinnerShowing] = useState(false);

	const handleShowClick = () => {
		// implement handleShowClick
		// TODO - fetch Bible Gospel content text like https://bibliaapi.com/docs/Bible_Content
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
					{gospel.text}
				</div>
			)}
			{/* TODO - show Spinner while content is loading */}
		</div>
	);
}
