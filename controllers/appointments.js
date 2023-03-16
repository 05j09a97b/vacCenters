const Appointment = require('../models/Appointmant');
const Hospital = require('../models/Hospital');



//@desc Get all appointments
//@route Get /api/v1/appointments
//@access Private
exports.getAppointments = async(req,res,next)=>{
    let query;
    //Genetal User can see only their appointments!
    if(req.user.role !== 'admin'){
        query=Appointment.find({user:req.id}).populate({
            path:'hospital',
            select:'name province tel'
        });
    }else{
        query=Appointment.find().populate({
            path:'hospital',
            select:'name province tel'
        });
    }
    try{
        const appointments =await query;
        res.status(200).json({
            success: true,
            count: appointments.length,
            data: appointments
        });
    }catch(err){
        console.log(err.stack);
        return res.status(500).json({
            success:false,
            message:"Cannot find Appointment"
        });
    }
};

//@desc Get one appointment
//@route Get /api/v1/appointments/:id
//@access Public
exports.getAppointment = async(req,res,next)=>{
    try{
        const appointment=await Appointment.findById(req.params.id).populate({
            path: 'hospital',
            select: 'name describtion tel'
        });
    
        if(!appointment){
            return res.status(404).json({success:false,message:`No appointment with the id of ${req.params.id}`});
        }
        res.status(200).json({success:true,data:appointment});
    }catch(err){
        console.log(err.stack);
        return res.status(500).json({success:false,message:'Cannot find Appointment'})
}};


//@desc Add one appointment
//@route Post /api/v1/hospital/:hospitalId/appointments/
//@access Private
exports.addAppointment = async(req,res,next)=>{
    try{
        req.body.hospital=req.params.hospitalId;
        const hospital = await Hospital.findById(req.params.hospitalId);
        if(!hospital){
            return res.status(404).json({success: false,meassage: `No hospital with the id of ${req.params.hospital}`});

        }
        const appointment = await Appointment.create(req.body);
        res.status(200).json({success:true,data:appointment});
    }catch(err){
        console.log(err.stack);
        return res.status(500).json({success:false,message: 'Cannot create appointment'});
    }
    };
