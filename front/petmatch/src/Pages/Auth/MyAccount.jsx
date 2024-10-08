import Footer from "../../Components/Footer/Footer";
import AccountForm from "../../Components/Auth/AccountForm";
import Header from "../../Components/Header/Header";

function MyAccount() {

    return (
        <section className='bg-[#F4F4F4]'>
            <Header />
            <AccountForm />
            <Footer />
        </section>
    );
}

export default MyAccount;
