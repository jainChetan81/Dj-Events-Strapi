/*module.exports = ({ env }) => ({
	upload: {
		provider: "cloudinary",
		providerOptions: {
			cloud_name: env("CLOUDINARY_NAME"),
			api_key: env("CLOUDINARY_KEY"),
			api_secret: env("CLOUDINARY_SECRET"),
		},
		actionOptions: {
			upload: {},
			delete: {},
		},
	},
}); */
module.exports = ({ env }) => ({
	upload: {
		provider: "imagekit",
		providerOptions: {
			publicKey: env("IMAGE_KIT_PUBLIC_KEY"),
			privateKey: env("IMAGE_KIT_PRIVATE_KEY"),
			urlEndpoint: env("IMAGE_KIT_URL_ENDPOINT"),
			// Optional
			params: {
				folder: "/portfolio",
			},
		},
	},
});
