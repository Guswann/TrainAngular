import { Component } from '@angular/core';

@Component({
  selector: 'app-samplepage',
  standalone: false,
  templateUrl: './samplepage.html',
  styleUrl: './samplepage.css'
})
export class SamplePage {
  // 1. Properti (Variabel) dan Tipe data Dasar

  //Properti bertipe Data String
  JudulHalaman: string = "Belajar TypeScript di Angular";
  subJudul: string;

  //Properti bertipe Data Number
  jumlahklik: number = 0;

  //Properti bertipe Data Boolean
  apakahtombolaktif: boolean = false;

  //Properti bertipe Data Array
  daftarnama: string[] = ['Andi', 'Budi', 'Caca'];

  //Properti bertipe Object 
  dataPengguna: { nama: string, umur: number };

  //Properti bertipe Data Any (sembarang)
  daftarseseorang: any;
  //2. Constructor : inisialisai  properti
  constructor() {
    this.subJudul = "Memahami Tipe Data Dasar di TypeScript";
    this.dataPengguna = { nama: "Andi", umur: 25 };
  }
  //3. Lifecycle Hook : ngOnInit
  //ngOnInit ini adalah sebuah Method (fungsi) yang akan dijalankan
  //setelah komponen diinisialisasi
  ngOnInit(): void {
    this.apakahtombolaktif = true; //true
    console.log("NgonInit dijalankan");
  }
  //4. Methode (Fungsi) void tanpa mengembalikan suatu nilai
  tambahklik(): void {
    this.jumlahklik++;
  }
  //Metode dengan parameter dan mengembalikan nilai
  sapaPengguna(nama: string): string {
    return `Halo, ${nama}! Selamat datang di angular.`;
  }

  //Metode untuk menghapus suatu item dari array
  hapusNama(index: number): void {
    this.daftarnama.splice(index, 1);
  }
}
