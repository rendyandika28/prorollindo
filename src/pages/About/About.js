import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [team] = useState([
    {
      name: "Muhammad Infra Fachri Amin",
      role: "Backend Developer",
      nim: "0702172061",
    },
    {
      name: "Rendy Andika",
      role: "Frontend Developer",
      nim: "0702172069",
    },
    {
      name: "Willy Andri Malau",
      role: "Frontend Developer",
      nim: "0702172067",
    },
    {
      name: "M. Nabil Muttaqin",
      role: "Frontend Developer",
      nim: "0702173144",
    },
    {
      name: "Rizkan Yazid",
      role: "UI UX Designer",
      nim: "0702173141",
    },
  ]);
  return (
    <div className="about">
      <h2>tentang kami</h2>
      <p className="muqaddimah">
        Assalamualaikum Warohmatullahi Wabarokatuh.. <br /> Yang kami hormati
        <strong> Bapak Chairul Rizal</strong> selaku dosen kami pada mata kuliah
        Sistem informasi Akuntansi. <br /> Dengan ini kelompok kami yang
        beranggotakan 5 orang :
      </p>
      <div className="about__team">
        {team.map((item, i) => (
          <div className="team" key={i}>
            <span>
              <h6>{item.name}</h6>
              <p>{item.role}</p>
            </span>
            <span>{item.nim}</span>
          </div>
        ))}
      </div>
      <p>
        Telah berhasil bekerjasama dalam menyelesaikan tugas Pratikum Sistem
        Informasi Akuntansi. Yang mana <br /> Dalam pembuatan sistem informasi
        ini kami melakukan pembagian tugas masing - masing. Dengan ini <br />{" "}
        kami berharap mendapatkan Super Reward seperti yang bapak janjikan hehe.{" "}
        <br /> Mohon maaf kami jika ada kesalahan. <br /> Wassalamualaikum
        Warohmatullahi Wabarokatuh
      </p>
    </div>
  );
};

export default About;
