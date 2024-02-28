import { toast } from 'sonner';

interface ISuccessToast {
    isSuccess?: boolean;
    message?: string;
    error?: any;
}

export const useToast = ({ isSuccess, message, error }: ISuccessToast) => {
    if (isSuccess) {
        successToast(message);
    }

    if (error) {
        if ('data' in error) {
            errorToast(error.data.message);
        } else {
            errorToast(message || 'A apărut o eroare');
        }
    }
};

const successToast = (message?: string) => {
    return toast.success(message, {
        icon: <span className="text-lg">✅</span>,
        position: 'top-center',
    });
};

const errorToast = (message: string) => {
    return toast.error(message, {
        icon: <span className="text-lg">❌</span>,
        position: 'top-center',
    });
};
