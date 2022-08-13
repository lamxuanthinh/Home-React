import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import { ContainerFormData, Done } from "./FormDataElements";

const FormData = () => {
  const messeage = {};
  const [done, setDone] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [cccd, setCccd] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [address01, setaddress01] = useState("");
  const [address02, setaddress02] = useState("");
  const [addressFrom, setaddressFrom] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [lydo, setLydo] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
    if (isEmpty(e.target.value)) {
      const fullNameMsg = "Họ và tên không được bỏ trống";
      setValidationMsg({ ...validationMsg, fullName: fullNameMsg });
    } else {
      delete validationMsg.fullName;
      setValidationMsg(validationMsg);
    }
  };

  const handleAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);

    if (isEmpty(e.target.value)) {
      const ageMsg = "Ngày sinh không được bỏ trống";
      setValidationMsg({ ...validationMsg, age: ageMsg });
    } else {
      delete validationMsg.age;
      setValidationMsg(validationMsg);
    }
  };

  const handleCccd = (e) => {
    setCccd(e.target.value);
    if (isEmpty(e.target.value)) {
      const cccdMsg = "Cccd không được bỏ trống";
      setValidationMsg({ ...validationMsg, cccd: cccdMsg });
    } else {
      delete validationMsg.cccd;
      setValidationMsg(validationMsg);
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    if (isEmpty(e.target.value)) {
      const phoneMsg = "Số điện thoại không được bỏ trống";
      setValidationMsg({ ...validationMsg, phone: phoneMsg });
    } else {
      delete validationMsg.phone;
      setValidationMsg(validationMsg);
    }
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    if (isEmpty(e.target.value)) {
      const genderMsg = "Họ và tên không được bỏ trống";
      setValidationMsg({ ...validationMsg, gender: genderMsg });
    } else {
      delete validationMsg.gender;
      setValidationMsg(validationMsg);
    }
  };

  const handleImage = (e) => {
    setImage(e.target.value);
    if (isEmpty(e.target.value)) {
      const imageMsg = "Họ và tên không được bỏ trống";
      setValidationMsg({ ...validationMsg, img: imageMsg });
    } else {
      delete validationMsg.img;
      setValidationMsg(validationMsg);
    }
  };

  // const validateAll = () => {
  //   if (isEmpty(fullName)) {
  //     messeage.fullName = "Họ và tên không được bỏ trống";
  //   }

  //   setValidationMsg(messeage);
  //   if (Object.keys(messeage).length > 0) return false;
  //   return true;
  // };

  const submitform = () => {
    axios
      .post("https://tc-covid-json-server.herokuapp.com/temporarily/signup", {
        CCCD: cccd,
        SDT: phone,
        HoTen: fullName,
        GioiTinh: gender,
        NgaySinh: age,
        NoiTamTru: address01,
        NoiThuongTru: address02,
        NgayBatDauTamVang: day1,
        NgayKetThucTamVang: day2,
        LyDoTamVang: lydo,
        DiaChiNoiDen: addressFrom,
        AnhXacThuc: image,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post("https://tc-covid-json-server.herokuapp.com/temporarily/sendSMS", {
        NgayBatDauTamVang: day1,
        NgayKetThucTamVang: day2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setDone(true);
  };
  //};

  return (
    <>
      {done ? <Done>Yêu cầu của bạn của đã được gửi đi</Done> : null}
      <ContainerFormData>
        <div className="containerRegister">
          <header>ĐĂNG KÍ TẠM VẮNG</header>
          <form action="#" id="qrRegister">
            <div className="form first">
              <div className="details personal">
                <span className="title">Thông Tin Cá Nhân</span>
                <div className="fields name">
                  <div className="input-field">
                    <label>
                      Họ Và Tên <span className="bound">(*)</span>
                    </label>
                    <input
                      id="name"
                      className="name1"
                      type="text"
                      placeholder="Họ và tên"
                      onBlur={handleFullName}
                    />

                    <span>{validationMsg.fullName}</span>
                  </div>

                  <div className="input-field">
                    <label>
                      Ngày sinh <span className="bound">(*)</span>
                    </label>
                    <input
                      id="age"
                      className="dob"
                      type="date"
                      placeholder="Enter birth date"
                      onBlur={handleAge}
                    />
                    <span>{validationMsg.age}</span>
                  </div>

                  <div className="input-field">
                    <label>
                      CCCD/Mã định danh công dân{" "}
                      <span className="bound">(*)</span>
                    </label>
                    <input
                      id="codePeople"
                      type="text"
                      placeholder="Mã định danh công dân"
                      onBlur={handleCccd}
                    />
                    <span>{validationMsg.cccd}</span>
                  </div>

                  <div className="input-field">
                    <label>
                      Số điện thoại <span className="bound">(*)</span>
                    </label>
                    <input
                      id="Phone"
                      className="phone1"
                      type="tel"
                      placeholder="Số Điện Thoại"
                      onBlur={handlePhone}
                    />
                    <span>{validationMsg.phone}</span>
                  </div>

                  <div className="input-field">
                    <label>
                      Giới tính <span className="bound">(*)</span>
                    </label>
                    <select id="sex" className="gender" onBlur={handleGender}>
                      <option disabled selected>
                        Giới tính
                      </option>
                      <option>Nam</option>
                      <option>Nữ</option>
                      <option>Khác</option>
                    </select>
                    <span className="warning">{validationMsg.gender}</span>
                  </div>
                  <div className="input-field">
                    <label>
                      Ảnh Xác Thực <span className="bound">(*)</span>
                    </label>
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onBlur={handleImage}
                    />
                    <span className="warning">{validationMsg.image}</span>
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Địa Chỉ Liên Lạc</span>

                <div className="fields">
                  <div className="input-field">
                    <label>
                      Nơi Tạm Trú <span className="bound">(*)</span>
                    </label>
                    <input
                      id="age"
                      type="text"
                      placeholder="Nơi Tạm Trú"
                      onChange={(e) => {
                        setaddress01(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>
                  <div className="input-field">
                    <label>
                      Nơi Thường Trú <span className="bound">(*)</span>
                    </label>
                    <input
                      id="age"
                      type="text"
                      placeholder="Nơi Thường Trú"
                      onChange={(e) => {
                        setaddress02(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>
                      Địa Chỉ Nơi Đến<span className="bound">(*)</span>
                    </label>
                    <input
                      id="age"
                      type="text"
                      placeholder="Địa Chỉ Nơi Đến"
                      onChange={(e) => {
                        setaddressFrom(e.target.value);
                      }}
                    />
                    <span></span>
                  </div>
                  <div className="input-field">
                    <label>
                      Ngày Bắt Đầu Tạm Vắng <span className="bound">(*)</span>
                    </label>
                    <input
                      id="age"
                      type="date"
                      placeholder="Nơi Tạm Trú"
                      onChange={(e) => {
                        setDay1(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>
                      Ngày Kết Thúc Tạm Vắng <span className="bound">(*)</span>
                    </label>
                    <input
                      id="addressNow"
                      className="address"
                      type="date"
                      placeholder="Địa chỉ hiện tại"
                      onChange={(e) => {
                        setDay2(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Lí Do Tạm Vắng</label>
                    <input
                      type="text"
                      placeholder="Lí Do Tạm Vắng"
                      onChange={(e) => {
                        setLydo(e.target.value);
                      }}
                    />
                    <span></span>
                  </div>
                </div>
                {/* className="sumbit" */}
                <button className="nextBtn" type="button" onClick={submitform}>
                  <span className="btnText">
                    Hoàn Thành <i className="fa-solid fa-check"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </ContainerFormData>
    </>
  );
};

export default FormData;
