//@desc Get all hospitals
//@route Get /api/v1/hospitals
//@access public
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Get all hospitals'});
}

//@desc Get Single hospitals
//@route Get /api/v1/hospitals/:id
//@access public
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Get a hospital ${req.params.id}`});
}

//@desc Create a hospitals
//@route Post /api/v1/hospitals
//@access private
exports.createHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:'create a hospitals'});
}

//@desc Update Single hospitals
//@route Put /api/v1/hospitals/:id
//@access Private
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update hospital ${req.params.id}`});
}

//@desc Delete Single hospitals
//@route Delete /api/v1/hospitals/:id
//@access Private
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`delete hospital ${req.params.id}`});
}