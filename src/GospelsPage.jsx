import { useState } from "react";

import GospelCard from "./GospelCard";

export default function GospelsPage() {
	const [showGospels, setShowGospels] = useState(false);
	const [gospels, setGospels] = useState([
		{ name: "Matthew", text: "Matthew's gospel text goes here..." },
		{ name: "Mark", text: "Mark's gospel text goes here..." },
		{ name: "Luke", text: "Luke's gospel text goes here..." },
		{ name: "John", text: "John's gospel text goes here..." },
	]);

	const handleLoad = (gospelAuthor, content) => {
		// TODO - implement handleLoad
	};

	return (
		<div style={{ padding: 32 }}>
			<button style={{ fontSize: 18 }} onClick={() => setShowGospels(true)}>
				Show Gospels
			</button>
			{showGospels && (
				<div
					style={{
						marginTop: 28,
						display: "grid",
						gridTemplateColumns: "repeat(2, 1fr)",
						gridGap: "16px",
						justifyItems: "center",
					}}
				>
					{gospels.map((gospel) => (
						<GospelCard gospel={gospel} key={gospel.name} onLoad={handleLoad} />
					))}
				</div>
			)}
		</div>
	);
}
