import React from 'react';

function SalesForm() {
    return (
        <div>
            <form style={styles.form}>
                <h2>
                    New Sale
                </h2>
                <label>
                    Item Name
                </label>
                <input type='text' />

                <label>
                    Sale Price
                </label>
                <input type='number'/>

                <label>
                    Cost
                </label>
                <input type='number'/>

                <label>
                    Tags
                </label>
                <input type='text' />
                <button>Click to add More Tags</button>
            </form>
        </div>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default SalesForm;