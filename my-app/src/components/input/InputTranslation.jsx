import React from 'react';

const InputTranslation = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} {...props} />
    )
})

export default InputTranslation;
