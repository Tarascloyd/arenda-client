import './Page.css'
import { ReactNode } from 'react';

interface PageProps {
	title: string;
	children?: ReactNode;
	text?: string;
}

const Page = ({ title, children, text}: PageProps):JSX.Element => {
    return (
        <div className='page'>
            <h1>Booking.clone</h1>
            <h3>{title}</h3>
            <hr/>
            <hr/>
            <p>{text}</p>
            {children}
            <hr/>
            <hr/>
        </div>  
    );
}

export default Page;