import Footer from '../components/Footer'
import Header from '../components/Header'
const Homepage =()=>{

    return <>
    <Header/>
        <h1>Homepage</h1>
        <Services />
        <Footer/>
        </>
}


const Services =()=>{
    return <h3>services</h3>
}
export default Homepage
