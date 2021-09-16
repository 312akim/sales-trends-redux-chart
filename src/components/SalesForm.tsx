import React from 'react';
import { useForm } from 'react-hook-form';

function SalesForm() {
    const { register, handleSubmit, formState: { errors: formErrors }} = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>
                    New Sale
                </h2>
                <label htmlFor='productName'>
                    Product Name
                </label>
                <input {...register("productName")} id='productName' type='text' placeholder="Red Hat"/>

                <label htmlFor='productPrice'>
                    Sale Price
                </label>
                <input  {...register("productPrice")} id='productPrice' type='number' placeholder="35"/>

                <label htmlFor='productCost'>
                    Cost
                </label>
                <input  {...register("productCost")} id='productCost' type='number' placeholder="15"/>

                <label htmlFor='productTags'>
                    Tags
                </label>
                <input  {...register("productTags")} id='productTags' type='text' placeholder="Red"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default SalesForm;