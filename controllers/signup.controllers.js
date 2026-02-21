export const handleSignUpController = (req, res) => {
    try {
        const body = req.body
        console.log("DATA RECEIVED FROM FRONTEND =>", body);

        res.status(200).json({
            success: true,
            message: "Data received successfully",
            data: body
        });

    } catch (error) {
        console.log("ERROR:-", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}