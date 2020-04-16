const mongoose = require('mongoose');

const Sekolah = mongoose.Schema({
	nama: String,
	asal: String,
	deskripsi: String,
	jenjang: String,
	yayasan: String,
	alamat: String,
	nomor: String,
	email: String,
	website: String,
	uangPendaftaran: String,
	uangSPP: String,
	// gambar: Buffer,
	// brosur: Buffer,
});

module.exports = mongoose.model('sekolah', Sekolah, 'sekolah');
