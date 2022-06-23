import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required(),
    brand: yup.string().required(),
    category: yup.string().required(),
    price: yup.string().matches(/^\d{0,8}(\d{1,2})?/, 'Enter valid price').required(),
    quantityInStock: yup.number().required().min(0),
    description: yup.string().required(),
    file: yup.mixed().when('pictureUrl', {
        is: (value: string) => !value,
        then: yup.mixed().required('Please provide an image')
    })
}) 