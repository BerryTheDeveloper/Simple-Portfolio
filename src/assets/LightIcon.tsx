import React from 'react';

const LightIcon = () => {
	const width = 20;
	const height = 20;
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1_8)' filter='url(#filter0_d_1_8)'>
				<path
					d='M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8Z'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 1V2'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 10V11'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.465 2.46503L7.17 3.17003'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.83 8.83002L13.535 9.53502'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5 6H6'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 6H15'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M7.17 8.83002L6.465 9.53502'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M13.535 2.46503L12.83 3.17003'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_1_8'
					x='0'
					y='0'
					width='20'
					height='20'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_1_8'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_1_8'
						result='shape'
					/>
				</filter>
				<clipPath id='clip0_1_8'>
					<rect
						width='12'
						height='12'
						fill='white'
						transform='translate(4)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default LightIcon;
