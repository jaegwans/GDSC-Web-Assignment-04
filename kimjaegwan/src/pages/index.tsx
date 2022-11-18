import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Feed from '../components/Feed';
import CommentContainer from '../components/CommentContainer';

export default function Home() {
    return (
        <div>
            <Feed />
            <CommentContainer />
        </div>
    );
}
