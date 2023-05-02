export const isAdmin = (req, res, next) => {
    if (req.user?.role === 'author' || req.params?.id === req.user._id.toString()) {
        next()
    } else {
        res.json({success:false, message:'You are not authorized to perform this action'})
    }
}