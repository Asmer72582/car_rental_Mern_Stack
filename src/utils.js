import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const handleSuccess = (msg) => {
    toast.success(msg)
}
export const handleError = (msg) => {
    toast.error(msg)
}
export const handlePromise = (msg, duration, response) => {
    // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, duration));
    toast.promise(
        response,
        {
            pending: msg,
            success: msg + ' done 👌',
            error: msg + ' rejected 🤯'
        }
    )
}