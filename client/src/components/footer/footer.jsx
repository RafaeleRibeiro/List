import styles from "./footer.module.css";
import git from "../../assets/git.svg"
import insta from "../../assets/insta.png"
import tico from "../../assets/tico.png"
import twitter from "../../assets/twitter.png"

const Footer = ({ children, link, click }) => {
    return (
        <>
            <div className={styles.out} onClick={click}>
            </div>
            <footer>
                <img src={git} alt="" />
                <img src={insta} alt="" />
                <img src={tico} alt="" />
                <img src={twitter} alt="" />

                <a href={link} target="_blanck">{children}</a>
            </footer>
        </>
    );
};

export default Footer;