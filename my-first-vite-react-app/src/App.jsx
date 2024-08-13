// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  const boxSize = { height: "30px" };

  const updateCountry = () => {
    //  countries를 순회하면서 같은 국가명 찾기.
    const updateCountries = [...countries];
    const sameCountry = updateCountries.find(
      ({ country: name }) => name === country
    );
    //  사용자 입력값을 받아서 해당국가에 업데이트하기
    if (sameCountry) {
      sameCountry.goldMedal = goldMedal;
      sameCountry.silverMedal = silverMedal;
      sameCountry.bronzeMedal = bronzeMedal;
      setCountries(updateCountries);
    }
  };

  const deleteCountry = (name) => {
    const filteredCountries = countries.filter((country) => {
      return country.country !== name;
    });
    setCountries(filteredCountries);
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    // 메달 메달 갯수를 입력하는 로직이 필요할 거에요.

    const updatedData = {
      country: country,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    console.log(updatedData);
    setCountries([...countries, updatedData]);
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 현황</h1>
      <form className="input-group" onSubmit={handleAddCountry}>
        <div>국가명</div>
        <input
          type="text"
          style={boxSize}
          value={country}
          onChange={function (event) {
            const text = event.target.value;
            setCountry(text);
          }}
        ></input>
        <div>금메달</div>
        <input
          style={boxSize}
          type="number"
          value={goldMedal}
          onChange={function (event) {
            const number = event.target.value;
            setGoldMedal(number);
          }}
        ></input>
        <div>은메달</div>
        <input
          style={boxSize}
          type="number"
          value={silverMedal}
          onChange={function (event) {
            const number = event.target.value;
            setSilverMedal(number);
          }}
        ></input>
        <div>동메달</div>
        <input
          style={boxSize}
          type="number"
          value={bronzeMedal}
          onChange={function (event) {
            const number = event.target.value;
            setBronzeMedal(number);
          }}
        ></input>
        <button style={{ backgroundColor: "yellow", height: "30px" }}>
          국가추가
        </button>
        <button
          type="button"
          onClick={updateCountry}
          style={{ backgroundColor: "yellow", height: "30px" }}
        >
          업데이트
        </button>
      </form>
      {countries.length ? (
        <table className="show-medal">
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.country}>
                  <td>{country.country}</td>
                  <td>{country.goldMedal}</td>
                  <td>{country.silverMedal}</td>
                  <td>{country.bronzeMedal}</td>
                  <td>
                    <button onClick={() => deleteCountry(country.country)}>
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      )}
    </div>
  );
}

export default App;
