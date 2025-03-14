import candiBorobudur from "../assets/makeamatch/candi borobudur.png"
import candiJago from "../assets/makeamatch/candi jago.png"
import candimendut from "../assets/makeamatch/candi mendut.png"
import candiPrambanan from "../assets/makeamatch/candi prambanan.png"
import candiPenataran from "../assets/makeamatch/candi penataran.png"
import gajahMada from "../assets/makeamatch/Gajah Mada.png"
import hayamWuruk from "../assets/makeamatch/hayam wuruk.png"
import kartaNegara from "../assets/makeamatch/karta negara.png"
import kediri from "../assets/makeamatch/kediri.png"
import kenArok from "../assets/makeamatch/Ken arok.png"
import malang from "../assets/makeamatch/malang.png"
import melepaskanDiri from "../assets/makeamatch/melepaskan diri.png"
import mojokerto from "../assets/makeamatch/mojokerto.png"
import perangBubat from "../assets/makeamatch/perang bubat.png"
import perangMedang from "../assets/makeamatch/perang medang.png"
import perangParegeg from "../assets/makeamatch/perang paregeg.png"
import perangSaudara from "../assets/makeamatch/perang saudara.png"
import radenWijaya from "../assets/makeamatch/raden wijaya.png"
import semuaBenar from "../assets/makeamatch/semua benar.png"
import sumpahPalapa from "../assets/makeamatch/sumpah palapa.png"
import sumpahTanMuji from "../assets/makeamatch/sumpah tan muji.png"
import sumpahTanPanisu from "../assets/makeamatch/sumpah tan panisu.png"
import tohjoyo from "../assets/makeamatch/tohjoyo.png"
import rajaJayabaya from "../assets/makeamatch/rajaJayabaya.png"

import satu from "../assets/makeamatch/1.png"
import soal1 from "../assets/makeamatch/soal 1.png"

import dua from "../assets/makeamatch/2.png"
import soal2 from "../assets/makeamatch/soal 2.png"

import tiga from "../assets/makeamatch/3.png"
import soal3 from "../assets/makeamatch/soal 3.png"

import empat from "../assets/makeamatch/4.png"
import soal4 from "../assets/makeamatch/soal 4.png"

import lima from "../assets/makeamatch/5.png"
import soal5 from "../assets/makeamatch/soal 5.png"

import enam from "../assets/makeamatch/6.png"
import soal6 from "../assets/makeamatch/soal 6.png"

import tujuh from "../assets/makeamatch/7.png"
import soal7 from "../assets/makeamatch/soal 7.png"

import delapan from "../assets/makeamatch/8.png"
import soal8 from "../assets/makeamatch/soal 8.png"

import sembilan from "../assets/makeamatch/9.png"
import soal9 from "../assets/makeamatch/soal 9.png"

import sepuluh from "../assets/makeamatch/10.png"
import soal10 from "../assets/makeamatch/soal 10.png"



const MakeAMatchs = [
    {
        id:1,
        nomor:satu,
        question:soal1,
        answers: [hayamWuruk,kenArok,kartaNegara],
        answer_id:1
    },
    {
        id:2,
        nomor:dua,
        question:soal2,
        answers: [malang,mojokerto,kediri],
        answer_id:0
    },
    {
        id:3,
        nomor:tiga,
        question:soal3,

        answers: [candiBorobudur,candiJago,candiPrambanan],
        answer_id:1
    },
    {
        id:4,
        nomor:empat,
        question:soal4,

        answers: [tohjoyo, kenArok,kartaNegara],
        answer_id:2
    },
    {
        id:5,
        nomor:lima,
        question:soal5,

        answers: [perangParegeg,perangMedang,perangBubat],
        answer_id:0
    },
    {
        id:6,
        nomor:enam,
        question:soal6,

        answers: [gajahMada,hayamWuruk,radenWijaya],
        answer_id:2
    },
    {
        id:7,
        nomor:tujuh,
        question:soal7,

        answers: [rajaJayabaya,gajahMada,hayamWuruk],
        answer_id:2
    },
    {
        id:8,
        nomor:delapan,
        question:soal8,

        answers: [candiPenataran,candimendut,candiBorobudur],
        answer_id:0
    },
    {
        id:9,
        nomor:sembilan,
        question:soal9,

        answers: [perangSaudara,melepaskanDiri,semuaBenar],
        answer_id:9
    },
    {
        id:10,
        nomor:sepuluh,
        question:soal10,

        answers: [sumpahPalapa,sumpahTanMuji,sumpahTanPanisu],
        answer_id:0
    },
]

export default MakeAMatchs