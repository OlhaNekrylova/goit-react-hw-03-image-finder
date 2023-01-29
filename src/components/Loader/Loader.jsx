import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <>
            <Audio 
                className={css.loader}
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </>
        
    );
};

export default Loader;