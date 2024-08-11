import "./Header.css";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

const Header = () => {
  /**
   * Componentlerin anlık durumlarını tutmak için
   * useState Hooksu kullanılır.
   * useState kullanılırken ilk tanımladığımız değer
   * state'in yani durumun değeridir. ikinci değer(set ile başlayan) durumun değerini güncelleyecek olan değerdir.
   */

  const [kullaniciVarMi, setKullaniciVarMi] = useState(false);
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar">
        <a href="">Ana Sayfa</a>
        <a href="">Hakkımızda</a>
        <a href="">Ürünlerimiz</a>
        <a href="">İletişim</a>
      </nav>
      <div className="header-right">
        {kullaniciVarMi === true ? (
          <CustomButton buttonTitle={"Çıkış Yap"} buttonColor={"red"} />
        ) : (
          <>
            <CustomButton
              onClick={() => setKullaniciVarMi(true)}
              buttonTitle={"Kullanıcı Girişi"}
              buttonColor={"cadetblue"}
            />
            <CustomButton buttonTitle={"Admin Girişi"} buttonColor={"orange"} />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
