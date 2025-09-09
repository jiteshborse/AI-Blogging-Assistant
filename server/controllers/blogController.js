import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async(req, res)=> {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !description || !category || !imageFile) {
            return res.json({success: false, message: "Missing Required Fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalName,
            folder: "/blogs"
        })

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished})

        res.json({success: true, message: "Blog Added Successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}