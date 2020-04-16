const express = require('express');
const router = express.Router();

const sekolah = require('../controllers/Sekolah.controllers');
const sekolahPilihan = require('../controllers/SekolahPilihan.controllers');

router.get('/', (req, res) => {
	res.json({
		status: 'data fetched!',
	});
});

/* <------------- SEKOLAH --------------> */
router
	// menampilkan sekolah
	.route('/sekolah')
	// tambah sekolah
	.post(sekolah.create)
	// menampilkan seluruh sekolah
	.get(sekolah.findAll);

router
	.route('/sekolah/:id')
	// menampilkan sekolah berdasarkan id
	.get(sekolah.findOne)
	// edit sekolah
	.put(sekolah.update)
	// hapus sekolah
	.delete(sekolah.remove);

/* <------------- SEKOLAH --------------> */

/* <------------- SEKOLAH PILIHAN --------------> */

router
	// menampilkan sekolah pilihan
	.route('/sekolah-pilihan')
	// tambah sekolah pilihan
	.post(sekolahPilihan.create)
	// menampilkan seluruh sekolah pilihan
	.get(sekolahPilihan.findAll);

router
	.route('/sekolah-pilihan/:id')
	// menampilkan sekolah pilihan berdasarkan id
	.get(sekolahPilihan.findOne)
	// edit sekolah pilihan
	.put(sekolahPilihan.update)
	// hapus sekolah pilihan
	.delete(sekolahPilihan.remove);

/* <------------- SEKOLAH PILIHAN --------------> */
module.exports = router;
