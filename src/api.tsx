import axios from "axios";

const BACKEND_URL:string = "IMPORT BACKEND URL HERE"

export const  handleSubmission = async (formName: string, text: string): Promise<string>  => {
    const response = await axios.post(BACKEND_URL, {
        formName: formName,
        text: text,
    })
    return response.data.data
}