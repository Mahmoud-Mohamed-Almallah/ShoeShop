import './Footer.css'



function Footer(){
    return( 
        <div>
             <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
            <footer class="footer">
            {/* <p class="footer__title">welcome</p> */}
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bx-envelope' ></i></a>
            </div>
            <div>
            <p class="footer__copy">&#169; Bedimcode. All rigths reserved</p>
            </div>
        </footer>
        </div>


    )

}



export default Footer;

