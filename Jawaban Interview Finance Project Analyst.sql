-- Soal 1 - SQL

with a as 
(select tanggal_transaksi, toko, jenis_transaksi, sum(nilai_transaksi) as "total_nilai_transaksi"
from sales
group by 1,2,3) 
select a.tanggal_transaksi, a.toko, a.jenis_transaksi,
    a.total_nilai_transaksi, 
    mdr.rate,
    a.total_nilai_transaksi*mdr.rate as "mdr",
    b.nilai_transaksi as "nilai_transaksi_bank"
from a 
left join bank b on a.tanggal_transaksi = b.tanggal_transaksi and 
        a.toko = b.toko and 
        a.jenis_transaksi = b.jenis_transaksi
left join mdr on a.jenis_transaksi = mdr.jenis_transaksi