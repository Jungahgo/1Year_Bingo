import {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Login from '../components/Login';

function Header({ title }) {
    console.log(title);
    return <h1>{title}</h1>;
    }
    
export default function HomePage() {

    const [likes, setLikes] = useState(0);
    //const table = useReactTable({columns, data})

    function handleClick(){
        setLikes(likes+1);
    }
return (
    <Login/>
);
}