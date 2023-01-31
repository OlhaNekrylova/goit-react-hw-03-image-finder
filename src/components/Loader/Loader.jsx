import { RevolvingDot } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <>
            <RevolvingDot 
            className={css.loader}            
            />
        </>
        
    );
};

export default Loader;