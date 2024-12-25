import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { photo, position, socialLinks, content } = attributes;

	return (
		<div {...useBlockProps.save()} className="caudena-photo-card">
			<div className="front">
				{photo && <img src={photo} alt="Photo" />}
				<div className="position">{position}</div>
			</div>
			<div className="back">
				<RichText.Content tagName="div" className="content" value={content} />
				<div className="social-links">
					{Object.keys(socialLinks).map((platform) => (
						socialLinks[platform] && (
							<a key={platform} href={socialLinks[platform]} className={`icon-${platform.toLowerCase()}`} target="_blank" rel="noopener noreferrer"></a>
						)
					))}
				</div>
			</div>
		</div>
	);
}