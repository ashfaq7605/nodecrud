const db = require("../config/db");

const getStudents = async (req, res) => {
    try {
        const data = await db.query(' SELECT * FROM students ');
        if(!data){
            return res.status(404).status({
                success:false,
                message:'No Records Found'
            })
        }
        res.status(200).send({
            success:true,
            message: 'All Students Record',
            totalStudents: data[0].length,
            data: data[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Get All Student API',
            error
        })
    }
};


const getStudentByID = async (req,res) => {
    try {
        const studentId = req.params.id;
        if(!studentId){
            return res.status(404).send({
                success:false,
                message:'Invalid or Provide Student id'
            })
        }
        // const data = await db.query(`SELECT * FROM students where id=`+studentId);
        const data = await db.query(`SELECT * FROM students WHERE id=?`,[studentId]);
        if(!data){
            return res.status(404).status({
                success:false,
                message:'No Records Found'
            }) 
        }
        res.status(200).send({
            success:true,
            message: 'Student Record Found',
            studentDetails:data[0],
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Get Student by id API',
            error
        })
    }

}

const createStudent = async (req,res) => {
    try {
        const cls = req.body.class;
        const {name,roll_no,medium,fees} = req.body;
        if ( !name || !roll_no || !medium || !fees || !cls){
            return res.status(500).send({
                success:false,
                message:'Please Provide All fields'
            })
        }
        const data = await db.query(`INSERT INTO students (name, roll_no, medium, fees, class) VALUES (?,?,?,?,?)`,[name, roll_no, medium, fees, cls]);
        if(!data) {
            return res.status(404).send({
                success:false,
                message:'Error in insert query'
            })
        }

        res.status(201).send({
            success:true,
            message:'New student record created'
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in create Student API',
            error
        })
    }
}

const updateStudent = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in update Student API',
            error
        })
    }
}

module.exports = { getStudents, getStudentByID, createStudent, updateStudent };