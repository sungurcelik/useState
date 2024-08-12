import "./Header.css";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";
import { Modal } from "../Modal/Modal";

export const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {
  /**
   * Componentlerin anlık durumlarını tutmak için
   * useState Hooksu kullanılır.
   * useState kullanılırken ilk tanımladığımız değer
   * state'in yani durumun değeridir. ikinci değer(set ile başlayan) durumun değerini güncelleyecek olan değerdir.
   */
  const [basilanButon, setBasilanButon] = useState(null);
  const [modalGoster, setModalGoster] = useState(false);

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
            onClick={() => {
              if (basilanButon === "Kullanici") {
                setAktifKullanici(aktifKullaniciSayisi - 1);
              }
              setBasilanButon(null);
            }}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setAktifKullanici(aktifKullaniciSayisi + 1);
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
            <CustomButton
              onClick={() => setModalGoster(true)}
              buttonTitle={"Kayıt Ol"}
              buttonColor={"green"}
            />
          </>
        )}
        {basilanButon === "Yönetici" && (
          <InfoBox
            infoMetin={"Aktif Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}

        {basilanButon === "Kullanici" && (
          <InfoBox
            infoMetin={"Sizinle birlikte kullanıcı sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
      </div>
      {modalGoster === true && <Modal setModalGoster={setModalGoster} />}
    </header>
  );
};
