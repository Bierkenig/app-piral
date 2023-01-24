import * as React from 'react';

const ProductPage: React.FC<any> = ({ piral }) => (
    <div>
        <h3>Juice Shop V2</h3>

        <piral.Extension name={'startPage-actions'}/>
    </div>
);

export default ProductPage;