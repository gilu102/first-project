import { useState } from "react";
import Joi from "joi";


export default function useForm(onSubmit, initialform, formInitials) {
    const [formDetails, setFormDetails] = useState(formInitials);
    const [errors, setErrors] = useState({});

    const schema = Joi.object(initialform);

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormDetails((prev) => ({
            ...prev,
            [fieldName]: fieldValue,
        }));

        const fieldSchema = Joi.object({
            [fieldName]: initialform[fieldName],
        });

        const { error } = fieldSchema.validate({ [fieldName]: fieldValue });

        if (error) {
            setErrors({ [fieldName]: error.details[0].message });
        } else {
            setErrors((prev) => {
                delete prev[fieldName];
                return prev;
            });
        }
    };


    const handleSubmit = () => {
        console.log(formDetails);
        const { error } = schema.validate(formDetails, { abortEarly: false });
        console.log(error);
        onSubmit(formDetails)
    };

    function handleCancel() {
        setFormDetails(formInitials);
        setErrors({})
    }

    return {
        formDetails,
        errors,
        handleChange,
        handleSubmit,
        handleCancel
    };
}