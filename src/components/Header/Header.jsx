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
  const [basilanButon, setBasilanButon] = useState(null);

  const menuIsimler = ["Ana Sayfa", "Hakkımızda", "Ürünlerimiz", "İletişim"];
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar">
        {menuIsimler.map((menuIsmi) => (
          <a>{menuIsmi}</a>
        ))}
      </nav>
      <div className="header-right">
        {basilanButon ? (
          <CustomButton
            buttonTitle={`${basilanButon} Olarak Çıkış Yap`}
            buttonColor={"red"}
            onClick={() => setBasilanButon(null)}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setBasilanButon("Kullanici");
              }}
              buttonTitle={"Kullanıcı Girişi"}
              buttonColor={"cadetblue"}
            />
            <CustomButton
              onClick={() => {
                setBasilanButon("Yönetici");
              }}
              buttonTitle={"Admin Girişi"}
              buttonColor={"orange"}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
