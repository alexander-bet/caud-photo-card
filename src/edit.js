import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { photo, position, socialLinks, content } = attributes;

	const onSelectImage = (media) => {
		setAttributes({ photo: media.url });
	};

	const onChangePosition = (value) => {
		setAttributes({ position: value });
	};

	const onChangeSocialLink = (platform, value) => {
		setAttributes({ socialLinks: { ...socialLinks, [platform]: value } });
	};

	const onChangeContent = (value) => {
		setAttributes({ content: value });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Photo Settings', 'caudena')}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							render={({ open }) => (
								<Button onClick={open} isPrimary>
									{__('Upload Photo', 'caudena')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{photo && <img src={photo} alt={__('Photo', 'caudena')} style={{ marginTop: '10px', maxWidth: '100%' }} />}
					<TextControl
						label={__('Position', 'caudena')}
						value={position}
						onChange={onChangePosition}
						style={{ marginTop: '10px' }}
					/>
				</PanelBody>
				<PanelBody title={__('Social Links', 'caudena')}>
					{Object.keys(socialLinks).map((platform) => (
						<TextControl
							key={platform}
							label={platform}
							value={socialLinks[platform]}
							onChange={(value) => onChangeSocialLink(platform, value)}
							style={{ marginTop: '10px' }}
						/>
					))}
				</PanelBody>
			</InspectorControls>
			<div className="caudena-photo-card">
				<div className="front">
					{photo && <img src={photo} alt={__('Photo', 'caudena')} />}
					<div className="position">{position}</div>
				</div>
				<div className="back">
					<RichText
						tagName="div"
						className="content"
						value={content}
						onChange={onChangeContent}
						placeholder={__('Add content here...', 'caudena')}
					/>
					<div className="social-links">
						{Object.keys(socialLinks).map((platform) => (
							socialLinks[platform] && (
								<a key={platform} href={socialLinks[platform]} className={`icon-${platform.toLowerCase()}`} target="_blank" rel="noopener noreferrer"></a>
							)
						))}
					</div>
				</div>
			</div>
		</div>
	);
}