import Post from '../models/post.js';

export const postController = {
  
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.user._id;

      const newPost = new Post({
        userId,
        title,
        content
      });

      await newPost.save();

      res.status(201).json({
        success: true,
        message: 'Post created successfully',
        data: newPost
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

 
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate('userId', 'name email');
      res.json({ success: true, data: posts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },


  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('userId', 'name email');

      if (!post) {
        return res.status(404).json({ success: false, message: 'Post not found' });
      }

      res.json({ success: true, data: post });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },


  updatePost: async (req, res) => {
    try {
      const { title, content } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ success: false, message: 'Post not found' });
      }

      res.json({ success: true, message: 'Post updated successfully', data: updatedPost });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },


  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({ success: false, message: 'Post not found' });
      }

      await Post.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};


 
