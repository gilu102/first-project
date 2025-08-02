import { useState, useCallback, useMemo } from 'react';
import Joi from 'joi';

export default function useForm(handleForm, initialform, formInitials) {
    const [formDetails, setFormDetails] = useState(formInitials);
    const [errors, setErrors] = useState({});

    // Compile the schema once unless the schema definition changes
    const schema = useMemo(() => Joi.object(initialform), [initialform]);

    const handleChange = useCallback(
        (e) => {
            const { name: fieldName, value: fieldValue } = e.target;
            setFormDetails((prev) => ({
                ...prev,
                [fieldName]: fieldValue
            }));

            const fieldSchema = Joi.object({ [fieldName]: initialform[fieldName] });
            const { error } = fieldSchema.validate({ [fieldName]: fieldValue });
            if (error) {
                setErrors((prev) => ({
                    ...prev,
                    [fieldName]: error.details[0].message
                }));
            } else {
                setErrors((prev) => {
                    const { [fieldName]: removed, ...rest } = prev;
                    return rest;
                });
            }
        },
        [initialform] // depends on validation rules
    );

    const handleSubmit = useCallback(() => {
        const { error } = schema.validate(formDetails, { abortEarly: false });
        console.log(formDetails, error);
        handleForm(formDetails);
    }, [schema, formDetails, handleForm]);

    const handleCancel = useCallback(() => {
        setFormDetails(formInitials);
        setErrors({});
    }, [formInitials]);

    return {
        formDetails,
        errors,
        handleChange,
        handleSubmit,
        handleCancel
    };
}
